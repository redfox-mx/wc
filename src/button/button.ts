import { PropertyValueMap, LitElement, unsafeCSS, html, css } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'

import styles from './button.css?inline'

import { isValidColorFormat } from '../utils/isValidColorFormat.js'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'hwc-button': HWCButton;
  }
}

export type ButtonType = 'button' | 'submit' | 'reset' | 'menu'

export type ButtonAppearance = 'raised' | 'outlined' | 'text' | 'fab' | 'icon'

export type ButtonElevation = '1' | '2' | '3' | '4' | '5';

@customElement('hwc-button')
export class HWCButton extends LitElement {
  static styles = css`${unsafeCSS(styles)}`

  // eslint-disable-next-line no-undef
  private readonly internals = this.attachInternals()

  // More information: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals#examples
  static formAssociated = true

  @property({ type: String }) appearance: ButtonAppearance = 'raised'

  @property({ type: String, reflect: true }) type: ButtonType = 'button'

  @property({ type: String }) color!: string

  @property({ type: String, reflect: true }) elevation!: ButtonElevation

  @property({ type: String, reflect: true }) role = 'button'

  @property({ type: Boolean }) lowercase = false

  @property({ type: Boolean }) uppercase = false

  @property({ type: Boolean }) capitalize = false

  @property({ type: Boolean }) rounded = false

  @property({ type: Boolean }) fullwidth = false

  @property({ type: Boolean }) disabled = false

  @query('.button') $button!: HTMLButtonElement

  protected updated (_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('color')) {
      const color = isValidColorFormat(this.color) ? `var(--hwc-${this.color})` : this.color

      this.style.setProperty('--hwc-button-color', color)
    }

    if (_changedProperties.has('elevation')) {
      this.style.setProperty(
        '--hwc-button-box-shadow',
        `var(--hwc-box-shadow-${this.elevation})`
      )
    }

    if (_changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', String(this.disabled))
    }
  }

  /**
   * Returns the associated form element. More information: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals
   */
  get form (): HTMLFormElement | null {
    return this.internals.form
  }

  /**
   * Handles the click event on the custom `hwc-button`.
   *
   * - If the `type` attribute is "submit", it submits the associated form.
   * - If the `type` attribute is "reset", it resets the associated form.
   *
   * @param {MouseEvent} _event - The click event of the button.
   */
  private _onHandleClick (_event: MouseEvent): void {
    const { type, internals } = this

    if (!internals) return

    // Check if the button is of type "submit" or "reset".
    const isSubmit = type === 'submit'
    const isReset = type === 'reset'

    // If the button is neither "submit" nor "reset", do nothing.
    if (!(isSubmit || isReset)) return

    // Get the form associated with the `hwc-button` component.
    const $form = this.form

    // If there is no associated form, do nothing.
    if (!$form) return

    // If the button is of type "submit", submit the form.
    if (isSubmit) return $form?.requestSubmit()

    // If the button is of type "reset", reset the form.
    if (isReset) return $form.reset()
  }

  protected render (): unknown {
    return html`
      <button
        class="button"
        type=${this.type}
        ?disabled=${this.disabled}
        @click=${this._onHandleClick}
      >
        <div class="button__wrapper">
          <slot></slot>
        </div>
      </button>
    `
  }
}
