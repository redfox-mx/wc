import { LitElement, html, css, unsafeCSS, CSSResultGroup, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from './button.css?inline'

import { ColorNameMap } from "../declarations";

import { getColor, hexToRgba, isHexColor } from "../utils";

declare global {
  interface HTMLElementTagNameMap {
    'hwc-button': Button;
  }
}

export type ButtonType = "button" | "submit" | "reset" | "menu"

export type ButtonAppearance = "outlined" | "text"

@customElement('hwc-button')
export class Button extends LitElement {
  static styles?: CSSResultGroup | undefined = css`${unsafeCSS(styles)}`

  @property({ type: String }) appearance!: ButtonAppearance

  @property({ type: String }) type: ButtonType = 'button'

  @property({ type: String }) color: string = 'blue-darken-2'

  @property({ type: Boolean }) lowercase: boolean = false

  @property({ type: Boolean }) uppercase: boolean = false

  @property({ type: Boolean }) capitalize: boolean = false

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('color')) {
      const color = (getColor(this.color as ColorNameMap) || this.color).trim()

      this.style.setProperty('--button-background-color', color)

      const hoverColor = isHexColor(color) ? hexToRgba(color, 0.1) : color

      this.style.setProperty('--button-hover-background-color', hoverColor)
    }
  }

  protected render(): unknown {
    return html`
      <button type=${this.type} class="button" role="button">
        <div class="button__wrapper">
          <slot></slot>
        </div>
      </button>
    `
  }
}