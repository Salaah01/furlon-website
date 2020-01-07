// =============================================================================
// Date Created: 16/12/2019
// Created By: Salaah Amin
// =============================================================================
// PURPOSE
// -------
// Enables the functionality of the quantity component, thus enabling +/-
// buttons to control the number in the input box.
//
// RELATED FILES
// -------------
// _quantity.scss
//
// HTML FORMAT
// -----------
// <div class="c-quantity">
//   <button class="c-quantity__btn" control="quantity-down">
//     <span class="c-quantity__btn__text">&#45;</span>
//   </button>
//   <input class="c-quantity__input" type="number"/>
//   <button class="c-quantity__btn" control="quantity-up">
//     <span class="c-quantity__btn__text">&#45;</span>
//   </button>
// </div>
// =============================================================================

// Imports
import { Validation } from "../utilities/validation";

// =============================================================================
export class QuantityComponent {
  /**
   * Builds functionality onto the quantity component thus enabling the +/-
   * buttons to control the number inside the input box.
   */

  containers = document.getElementsByClassName(
    "c-quantity"
  ) as HTMLCollectionOf<HTMLDivElement>;

  // ---------------------------------------------------------------------------
  constructor() {
    /**
     No arguments - class uses objects found on the DOM.
    */
    for (let c = 0; c < this.containers.length; c++) {
      const elements = this._set_elements(this.containers[c]);
      const btnDown = elements[0] as HTMLButtonElement;
      const btnUp = elements[1] as HTMLButtonElement;
      const inputBox = elements[2] as HTMLInputElement;

      const minValue = Number(inputBox.getAttribute("min"));
      const maxValue = Number(inputBox.getAttribute("max"));

      this._build_minus_button(btnDown, btnUp, inputBox, minValue, maxValue);
      this._build_plus_button(btnDown, btnUp, inputBox, minValue, maxValue);
      this._build_input_box(btnDown, btnUp, inputBox, minValue, maxValue);
    }
  }

  // ---------------------------------------------------------------------------
  private _set_elements(container: HTMLDivElement) {
    /**
     * Given a container, will return the buttons and input elements.
     */
    const btnDown = container.querySelector(
      'button[control="quantity-down"]'
    ) as HTMLButtonElement;
    const btnUp = container.querySelector(
      'button[control="quantity-up"]'
    ) as HTMLButtonElement;
    const inputBox = container.querySelector(
      "input.c-quantity__input"
    ) as HTMLInputElement;

    return [btnDown, btnUp, inputBox];
  }

  // ---------------------------------------------------------------------------
  private _build_minus_button(
    btnDown: HTMLButtonElement,
    btnUp: HTMLButtonElement,
    inputBox: HTMLInputElement,
    minValue: Number,
    maxValue: Number
  ) {
    /**
     * On clicking the minus button, the value of the input but will reduce
     * by one until it reaches its minimum value, at which point, the button
     * becomes disabled. Also will remove the disabled attribute from the plus
     * button if it is less than the maxValue.
     */

    btnDown.addEventListener("click", () => {
      if (btnDown.getAttribute("disabled") != "disabled") {
        inputBox.value = String(Number(inputBox.value) - 1);

        if (Number(inputBox.value) < maxValue) {
          btnUp.removeAttribute("disabled");
        }

        if (Number(inputBox.value) === minValue) {
          btnDown.setAttribute("disabled", "disabled");
        }
      }
    });
  }

  // ---------------------------------------------------------------------------
  private _build_plus_button(
    btnDown: HTMLButtonElement,
    btnUp: HTMLButtonElement,
    inputBox: HTMLInputElement,
    minValue: Number,
    maxValue: Number
  ) {
    /**
     * On clicking the plus button, the value of the input but will increased
     * by one until it reaches its maximum value, at which point, the button
     * becomes disabled. Also will remove the disabled attribute from the minus
     * button if it is greater than the minValue.
     */

    btnUp.addEventListener("click", () => {
      if (btnUp.getAttribute("disabled") != "disabled") {
        inputBox.value = String(Number(inputBox.value) + 1);

        if (Number(inputBox.value) > minValue) {
          btnDown.removeAttribute("disabled");
        }

        if (Number(inputBox.value) === maxValue) {
          btnUp.setAttribute("disabled", "disabled");
        }
      }
    });
  }

  // ---------------------------------------------------------------------------
  private _build_input_box(
    btnDown: HTMLButtonElement,
    btnUp: HTMLButtonElement,
    inputBox: HTMLInputElement,
    minValue: Number,
    maxValue: Number
  ) {
    /**
     * Once a new value has been entered into the input box,
     * disable/re-enable the plus and minus buttons in accordance with whether
     * the value is equal to the min/max value or not.
     */
    inputBox.addEventListener("focusout", () => {
      const value = Number(inputBox.value);

      // Check if the value is valid. If not, update attributes the highlight
      // this to the user and disable buttons.
      if (Validation.check_if_positive_int(value)) {
        // Incase the buttons were previously disabled, reset by re-enabling
        // everything.
        btnDown.removeAttribute("disabled");
        btnUp.removeAttribute("disabled");
        inputBox.parentElement!.removeAttribute('invalid');

        // Check against the min value
        if (value <= minValue) {
          btnDown.setAttribute("disabled", "disabled");
        } else {
          btnDown.removeAttribute("disabled");
        }

        // Check against btnUp's max value
        if (value >= maxValue) {
          btnUp.setAttribute("disabled", "disabled");
        } else {
          btnUp.removeAttribute("disabled");
        }

      } else {
        // value is either < 0 or a float.
        btnDown.setAttribute("disabled", "disabled");
        btnUp.setAttribute("disabled", "disabled");
        inputBox.parentElement!.setAttribute('invalid', 'true');
      }
    });
  }
}
