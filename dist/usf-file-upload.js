import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, query, property } from 'lit/decorators.js';
import '@material/mwc-button';
let FileUpload = class FileUpload extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    fileChanged(e) {
        this.requestUpdate();
        this.dispatchEvent(new Event(e.type, e));
    }
    buttonClicked() {
        this.fileInput.click();
    }
    get files() {
        if (!this.fileInput) {
            return null;
        }
        return this.fileInput.files;
    }
    render() {
        return html `
      <input
        id="file"
        type="file"
        accept=${this.accept}
        hidden
        @change=${this.fileChanged}
      />

      <mwc-button
        raised
        ?disabled=${this.disabled}
        @click=${this.buttonClicked}
      >
        <slot></slot>
      </mwc-button>

      ${this.files
            ? html `<span
            >${this.files.length > 0
                ? this.files[0].name
                : 'No file selected'}</span
          >`
            : ''}
    `;
    }
};
FileUpload.styles = css `
    mwc-button {
      vertical-align: middle;
    }
  `;
__decorate([
    query('#file')
], FileUpload.prototype, "fileInput", void 0);
__decorate([
    property({ type: Boolean })
], FileUpload.prototype, "disabled", void 0);
__decorate([
    property()
], FileUpload.prototype, "accept", void 0);
FileUpload = __decorate([
    customElement('usf-file-upload')
], FileUpload);
export { FileUpload };
