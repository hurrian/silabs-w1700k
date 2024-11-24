export type Pyodide = any;
export declare enum PyodideLoadState {
    LOADING_PYODIDE = 0,
    INSTALLING_DEPENDENCIES = 1,
    READY = 2
}
export declare function setupPyodide(onStateChange: (newState: PyodideLoadState) => any): Promise<Pyodide>;
