"use strict";
// =============================================================================
// Date Created: 08/11/2019
// Created By: Salaah Amin
// =============================================================================
// SCOPE
// Manages the search filters on the page. 
//
// PURPOSE
// Responsible for calling the search API which will filter result based on
// what the user has selected using the filters.
//
// Will use the navigation search bar's form to interact with the API.
// =============================================================================
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
// =============================================================================
var SearchFilters = /** @class */ (function () {
    /**
     * Will expand the navigation search bar and the form element to allow it to
     * take in the filter options as part of the GET request whenever a user
     * initiates a search.
     *
     * Calls the API to filter the results.
     */
    // ---------------------------------------------------------------------------
    function SearchFilters() {
        /**
         * Constructor does not require any arguments and will instead use
         * elements from the DOM.
         */
        this._expand_nav_search();
    }
    // ---------------------------------------------------------------------------
    SearchFilters.prototype._expand_nav_search = function () {
        var e_1, _a;
        var _this = this;
        /**
         * Expands on the navigation search elements so that when sending a GET
         * request, filters wil be applied.
         */
        var navForm = document.getElementsByClassName('nav__search')[0];
        // Add hidden inputs to contain the values on the filters.
        var inputNames = ['f-minPrice', 'f-maxPrice', 'f-category', 'f-colour'];
        try {
            for (var inputNames_1 = __values(inputNames), inputNames_1_1 = inputNames_1.next(); !inputNames_1_1.done; inputNames_1_1 = inputNames_1.next()) {
                var inputName = inputNames_1_1.value;
                var hiddenInputNode = document.createElement('INPUT');
                hiddenInputNode.setAttribute('type', 'hidden');
                hiddenInputNode.setAttribute('name', inputName);
                hiddenInputNode.setAttribute('id', inputName);
                navForm.appendChild(hiddenInputNode);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (inputNames_1_1 && !inputNames_1_1.done && (_a = inputNames_1.return)) _a.call(inputNames_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
        // Update the hidden inputs when a filter is selected
        var dropdownOptions = document.getElementsByClassName('dropdown-menu__options');
        var _loop_1 = function (opt) {
            var dropdownOption = dropdownOptions[opt];
            var hiddenInput;
            switch (dropdownOption.getAttribute('filter-for')) {
                case 'min-price':
                    hiddenInput = document.getElementById('f-minPrice');
                    break;
                case 'max-price':
                    hiddenInput = document.getElementById('f-maxPrice');
                    break;
                case 'category':
                    hiddenInput = document.getElementById('f-category');
                    break;
                case 'colour':
                    hiddenInput = document.getElementById('f-colour');
            }
            dropdownOption.addEventListener('click', function (event) {
                event.stopPropagation();
                hiddenInput.value = dropdownOption.previousElementSibling.textContent;
                var response = _this._call_API();
                console.log(response);
            });
        };
        for (var opt = 0; opt < dropdownOptions.length; opt++) {
            _loop_1(opt);
        }
    };
    ;
    // ---------------------------------------------------------------------------
    SearchFilters.prototype._call_API = function () {
        // Calls the search result API and returns the results as a JSON.
        var APIPath = window.location.href.replace('/search/', '/search-results/');
        var request = new XMLHttpRequest();
        request.open('GET', APIPath);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                return JSON.parse(request.responseText);
            }
            else {
                // console.log(1);
                // console.log(request);
                // console.log(request.readyState)
                // console.log(request.status)
                return 1;
            }
        };
    };
    return SearchFilters;
}());
;
// ---------------------------------------------------------------------------
new SearchFilters();
//# sourceMappingURL=search_filters.js.map