import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-button';
let NabuCasaSilabsFlasher = class NabuCasaSilabsFlasher extends LitElement {
    async openFlasherDialog() {
        import('./flashing-dialog');
        const response = await fetch(this.manifest);
        const manifest = await response.json();
        const dialog = document.createElement('flashing-dialog');
        dialog.manifest = manifest;
        document.body.appendChild(dialog);
    }
    render() {
        const supportsWebSerial = 'serial' in navigator;
        return html `
      ${supportsWebSerial
            ? html `<mwc-button raised @click=${this.openFlasherDialog}
            ><slot name="button">Connect</slot></mwc-button
          >`
            : html `<slot name="no-webserial"
            ><strong>
              Unfortunately, your browser does not support Web Serial. Open this
              page in Google Chrome or Microsoft Edge.
            </strong></slot
          >`}
    `;
    }
};
__decorate([
    property()
], NabuCasaSilabsFlasher.prototype, "manifest", void 0);
NabuCasaSilabsFlasher = __decorate([
    customElement('nabucasa-zigbee-flasher')
], NabuCasaSilabsFlasher);
export { NabuCasaSilabsFlasher };
