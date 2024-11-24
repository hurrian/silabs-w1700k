import { LitElement } from 'lit';
import '@material/mwc-button';
export declare class FileUpload extends LitElement {
    static styles: import("lit").CSSResult;
    fileChanged(e: Event): void;
    buttonClicked(): void;
    private fileInput;
    disabled: boolean;
    accept?: string;
    get files(): FileList | null;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'usf-file-upload': FileUpload;
    }
}
