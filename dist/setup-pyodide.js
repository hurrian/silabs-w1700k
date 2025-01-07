import dummyModuleLoaderPy from './dummy_module_loader.py';
import venvRequirementsTxt from './requirements.txt';
import webSerialTransportPy from './webserial_transport.py';
const MOCKED_MODULES = [
    // These dependencies shouldn't be mocked
    // {package: 'async-timeout', module: 'async_timeout'},
    // {package: 'coloredlogs', module: 'coloredlogs'},
    // {package: 'humanfriendly', module: 'humanfriendly'},
    // Dependencies and sub-dependencies
    { package: 'aiosignal', module: 'aiosignal' },
    { package: 'aiohttp', module: 'aiohttp' },
    { package: 'cffi', module: 'cffi' },
    { package: 'aiosqlite', module: 'aiosqlite' },
    { package: 'cryptography', module: 'cryptography' },
    { package: 'frozenlist', module: 'frozenlist' },
    { package: 'multidict', module: 'multidict' },
    { package: 'pycparser', module: 'pycparser' },
    { package: 'yarl', module: 'yarl' },
    { package: 'click', module: 'click' },
    { package: 'click-log', module: 'click_log' },
    { package: 'pure-pcapy3', module: 'pure_pcapy3' },
    { package: 'idna', module: 'idna' },
    { package: 'typing_extensions', module: 'typing_extensions' },
    { package: 'gpiod', module: 'gpiod' },
    { package: 'rpds', module: 'rpds' },
    { package: 'rpds-py', module: 'rpds-py' },
    // Internal modules not bundled by default with pyodide
    { package: 'ssl', module: 'ssl', version: '1.0.0' },
];
export var PyodideLoadState;
(function (PyodideLoadState) {
    PyodideLoadState[PyodideLoadState["LOADING_PYODIDE"] = 0] = "LOADING_PYODIDE";
    PyodideLoadState[PyodideLoadState["INSTALLING_DEPENDENCIES"] = 1] = "INSTALLING_DEPENDENCIES";
    PyodideLoadState[PyodideLoadState["READY"] = 2] = "READY";
})(PyodideLoadState || (PyodideLoadState = {}));
async function loadPyodide() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.onerror = e => reject(e);
        script.onload = async () => {
            const pyodide = await window.loadPyodide();
            resolve(pyodide);
        };
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
        document.body.appendChild(script);
    });
}
function parseRequirementsTxt(requirementsTxt) {
    const packages = new Map();
    const lineEnding = requirementsTxt.includes('\r\n') ? '\r\n' : '\n';
    for (const line of requirementsTxt.trim().split(lineEnding)) {
        const [pkg, version] = line.split('==');
        packages.set(pkg, version);
    }
    return packages;
}
export async function setupPyodide(onStateChange) {
    onStateChange(PyodideLoadState.LOADING_PYODIDE);
    const pyodide = await loadPyodide();
    onStateChange(PyodideLoadState.INSTALLING_DEPENDENCIES);
    await pyodide.loadPackage('micropip');
    const micropip = pyodide.pyimport('micropip');
    const requirementsTxt = parseRequirementsTxt(venvRequirementsTxt);
    // Mock unnecessary packages to significantly reduce the download size
    for (const mod of MOCKED_MODULES) {
        micropip.add_mock_package.callKwargs({
            name: mod.package,
            version: mod.version || requirementsTxt.get(mod.package),
            modules: new Map([[mod.module, dummyModuleLoaderPy]]),
        });
    }
    // Include our webserial transport
    micropip.add_mock_package.callKwargs({
        name: 'webserial_transport',
        version: '1.0.0',
        modules: new Map([['webserial_transport', webSerialTransportPy]]),
    });
    // Filter mocked packages from requirements
    const requirements = [];
    for (const [pkg, version] of requirementsTxt) {
        if (!MOCKED_MODULES.find(m => m.package === pkg)) {
            requirements.push(`${pkg}==${version}`);
        }
    }
    //side-load universal-silabs-flasher
    const wheelPath = './universal_silabs_flasher-0.0.26-py3-none-any.whl';
    await micropip.install.callKwargs({
        requirements: wheelPath,
        deps: false,
    });
    // Install all packages to recreate the venv
    await micropip.install.callKwargs({
        requirements: requirements,
        deps: false,
    });
    // Set up debug logging
    const coloredlogs = pyodide.pyimport('coloredlogs');
    coloredlogs.install.callKwargs({ level: 'DEBUG' });
    onStateChange(PyodideLoadState.READY);
    return pyodide;
}
