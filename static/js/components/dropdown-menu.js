"use strict";
// =============================================================================
// Date Created: 16/12/2019
// Created By: Salaah Amin
// ============================================================================
// SCOPE:
// ------
// Custom dropdown menu
//
// COMPLIMENTARY FILES:
// --------------------
// _dropdown-menu.scss
//
// PURPOSE:
// --------
// Provides functions for a custom dropdown menu.
// The functions will work for dropdown menus in the following format:
//
// <form>
//   ...
//   <div class="dropdown-menu">
//     <div class="dropdown-menu__selected">
//       <span>Colour</span>
//     </div>
//     <div class="dropdown-menu__options">
//       <label class="dropdown-menu__options__label" for="colour-red">
//       <input
//         class="dropdown-menu__options__radio-btn"
//         type="radio"
//         name="f-colour"
//         id=colour-red
//         value="red"
//       >
//     </div>
//   </div>
//   ...
// </form>
// CSS should be set up to hide the input tags and rely on the labels to select
// the radio button.
//
// FUNCTIONS:
// ----------
//  - When user clicks on the dropdown menu, expand the list of options.
//  - When user presses an option, highlight that option, update the
//    button's inner text to match that off the button text.
//  - When user clicks outside, close all menus.
// =============================================================================
// =============================================================================
var DropdownMenu = /** @class */ (function () {
    // ---------------------------------------------------------------------------
    function DropdownMenu() {
        /**
         * No arguments - class uses objects found on the DOM.
         */
        /**
         * Sets up the functionality for the custom dropdown menus.
         * These include:
         *  - Toggle open/close of the menu on clicking the button
         *  - Close the menu on clicking outside
         *  - On selecting an item:
         *    - Highlight that item
         *    - Change the text of the button the text of the option selected
         *
         * Note: this class will not handle API calls.
         */
        this.ddMenus = document.getElementsByClassName("dropdown-menu");
        // Adds function to close all menus when clicking outside of element
        this.close_menu();
        // Build the functions for all menu elements.
        for (var menuId = 0; menuId < this.ddMenus.length; menuId++) {
            this.build_menu(this.ddMenus[menuId]);
        }
    }
    // ---------------------------------------------------------------------------
    DropdownMenu.prototype.close_menu = function () {
        /**
         * Closes all menus when clicked outside on another filter button.
         * Also carries function to close the nav-menus.
         */
        var filterBtns = document.getElementsByClassName("dropdown-menu__selected");
        var optionLists = document.getElementsByClassName("dropdown-menu__options");
        document.addEventListener("click", function () {
            for (var idx = 0; idx < optionLists.length; idx++) {
                optionLists[idx].classList.add("dropdown-menu__options--hide");
            }
        });
        var navSubMenus = document.querySelectorAll(".nav__option__dropdown-opts");
        var _loop_1 = function (i) {
            var selectedBtn = filterBtns[i];
            selectedBtn.addEventListener("click", function () {
                var _a;
                // Close nav menus
                for (var idx = 0; idx < navSubMenus.length; idx++) {
                    navSubMenus[idx].classList.replace("nav__option__dropdown-opts--expanded", "nav__option__dropdown-opts--collapse");
                }
                // Close all other filters lists
                // Each button and their child elements contain the attribute
                // "filter-for".
                // Likewise, each dropdown option div contain the same attribute
                // This checks for the button pressed, if its "filter-for" attribute
                // matches that of its dropdown options. if not, then close.
                for (var j = 0; j < filterBtns.length; j++) {
                    var targetElem = filterBtns[j];
                    if (targetElem.getAttribute("filter-for") !=
                        selectedBtn.getAttribute("filter-for")) {
                        // Just incase the structure changes, and the next sibling ins not the options list
                        if (targetElem.nextElementSibling.classList.contains("dropdown-menu__options")) {
                            (_a = targetElem.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.add("dropdown-menu__options--hide");
                        }
                    }
                }
            });
        };
        for (var i = 0; i < filterBtns.length; i++) {
            _loop_1(i);
        }
    };
    // ---------------------------------------------------------------------------
    DropdownMenu.prototype.build_menu = function (ddMenu) {
        /**
         * Builds functionality onto each dropdown menu.
         */
        var optionsBtn = ddMenu.getElementsByClassName("dropdown-menu__selected")[0];
        var optionsListContainer = ddMenu.getElementsByClassName("dropdown-menu__options")[0];
        var optionsListItems = optionsListContainer.getElementsByClassName("dropdown-menu__options__label");
        // Event listener on the dropdown button which will open/close the options
        // list.
        optionsBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            optionsListContainer.classList.toggle("dropdown-menu__options--hide");
        });
        var _loop_2 = function (optionIter) {
            var listItem = optionsListItems[optionIter];
            listItem.addEventListener("click", function () {
                // Remove the highlight from all list items and reapply to the selected
                // list item only
                for (var optionSubIter = 0; optionSubIter < optionsListItems.length; optionSubIter++) {
                    optionsListItems[optionSubIter].classList.remove("dropdown-menu__options__label--selected");
                }
                listItem.classList.add("dropdown-menu__options__label--selected");
                // Change the text of the button to the text of the selected item
                optionsBtn.innerText = listItem.innerText;
                // Update the hidden input values
                // Close the menu
                optionsListContainer.classList.add("dropdown-menu__options--hide");
            });
        };
        // Event listener setup for each option
        for (var optionIter = 0; optionIter < optionsListItems.length; optionIter++) {
            _loop_2(optionIter);
        }
    };
    return DropdownMenu;
}());
new DropdownMenu();
//# sourceMappingURL=dropdown-menu.js.map