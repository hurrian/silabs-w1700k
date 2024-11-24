import { LitElement } from 'lit';
import type { Pyodide } from './setup-pyodide';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-linear-progress';
import '@material/mwc-circular-progress';
import '@material/mwc-formfield';
import '@material/mwc-radio';
import '@material/mwc-dialog';
import './usf-icon';
import './usf-icon-button';
import './usf-file-upload';
import './firmware-selector';
import type { Manifest } from './const';
export declare class FlashingDialog extends LitElement {
    static styles: import("lit").CSSResult;
    private flashingStep;
    pyodide?: Pyodide;
    private pyodideLoadState;
    manifest: Manifest;
    private debugLog;
    private selectedFirmware?;
    private serialPort?;
    private pyFlasher?;
    private uploadProgress;
    private progressState;
    private mwcDialog;
    firstUpdated(changedProperties: Map<string, any>): void;
    private getFirmwareMetadata;
    private generateProbeMethods;
    private selectSerialPort;
    private onPyodideLoaded;
    private detectRunningFirmware;
    private selectFirmware;
    private onFirmwareLoaded;
    private flashFirmware;
    private close;
    private showDebugLog;
    private formatHeadingText;
    private simpleVersion;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'flashing-dialog': FlashingDialog;
    }
}
