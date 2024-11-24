import { LitElement } from 'lit';
import '@material/mwc-button';
export declare class NabuCasaSilabsFlasher extends LitElement {
    manifest: string;
    openFlasherDialog(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nabucasa-zigbee-flasher': NabuCasaSilabsFlasher;
    }
}
