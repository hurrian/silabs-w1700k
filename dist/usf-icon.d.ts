import { LitElement } from 'lit';
export declare class UsfIcon extends LitElement {
    icon: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'usf-icon': UsfIcon;
    }
}
