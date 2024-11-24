import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let UsfIcon = class UsfIcon extends LitElement {
    render() {
        return html `
      <svg
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <g>
          <path d=${this.icon}></path>
        </g>
      </svg>
    `;
    }
};
UsfIcon.styles = css `
    :host,
    svg {
      display: inline-block;
      width: 24px;
      height: 24px;
    }

    svg {
      vertical-align: baseline;
    }
  `;
__decorate([
    property()
], UsfIcon.prototype, "icon", void 0);
UsfIcon = __decorate([
    customElement('usf-icon')
], UsfIcon);
export { UsfIcon };
