"use strict";
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
// =============================================================================
var QuantityComponent = /** @class */ (function () {
    // ---------------------------------------------------------------------------
    function QuantityComponent() {
        /**
         * Builds functionality onto the quantity component thus enabling the +/-
         * buttons to control the number inside the input box.
         */
        this.containers = document.getElementsByClassName("c-quantity");
        /**
         No arguments - class uses objects found on the DOM.
        */
        for (var c = 0; c < this.containers.length; c++) {
            var elements = this._set_elements(this.containers[c]);
            var btnDown = elements[0];
            var btnUp = elements[1];
            var inputBox = elements[2];
            var minValue = Number(inputBox.getAttribute("min"));
            var maxValue = Number(inputBox.getAttribute("max"));
            this._build_minus_button(btnDown, btnUp, inputBox, minValue, maxValue);
            this._build_plus_button(btnDown, btnUp, inputBox, minValue, maxValue);
            this._build_input_box(btnDown, btnUp, inputBox, minValue, maxValue);
        }
    }
    // ---------------------------------------------------------------------------
    QuantityComponent.prototype._set_elements = function (container) {
        /**
         * Given a container, will return the buttons and input elements.
         */
        var btnDown = container.querySelector('button[control="quantity-down"]');
        var btnUp = container.querySelector('button[control="quantity-up"]');
        var inputBox = container.querySelector("input.c-quantity__input");
        return [btnDown, btnUp, inputBox];
    };
    // ---------------------------------------------------------------------------
    QuantityComponent.prototype._build_minus_button = function (btnDown, btnUp, inputBox, minValue, maxValue) {
        /**
         * On clicking the minus button, the value of the input but will reduce
         * by one until it reaches its minimum value, at which point, the button
         * becomes disabled. Also will remove the disabled attribute from the plus
         * button if it is less than the maxValue.
         */
        btnDown.addEventListener("click", function () {
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
    };
    // ---------------------------------------------------------------------------
    QuantityComponent.prototype._build_plus_button = function (btnDown, btnUp, inputBox, minValue, maxValue) {
        /**
         * On clicking the plus button, the value of the input but will increased
         * by one until it reaches its maximum value, at which point, the button
         * becomes disabled. Also will remove the disabled attribute from the minus
         * button if it is greater than the minValue.
         */
        btnUp.addEventListener("click", function () {
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
    };
    // ---------------------------------------------------------------------------
    QuantityComponent.prototype._build_input_box = function (btnDown, btnUp, inputBox, minValue, maxValue) {
        /**
         * Once a new value has been entered into the input box,
         * disable/re-enable the plus and minus buttons in accordance with whether
         * the value is equal to the min/max value or not.
         */
        inputBox.addEventListener("focusout", function () {
            // Check against the min value
            if (Number(inputBox.value) <= minValue) {
                btnDown.setAttribute("disabled", "disabled");
            }
            else {
                btnDown.removeAttribute("disabled");
            }
            // Check against btnUp's max value
            if (Number(inputBox.value) >= maxValue) {
                btnUp.setAttribute("disabled", "disabled");
            }
            else {
                btnUp.removeAttribute("disabled");
            }
        });
    };
    return QuantityComponent;
}());
new QuantityComponent();
//# sourceMappingURL=quantity.js.map