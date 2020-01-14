/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "furlon/static/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./furlon/static/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./furlon/static/ts/components/carousel-imgs.ts":
/*!******************************************************!*\
  !*** ./furlon/static/ts/components/carousel-imgs.ts ***!
  \******************************************************/
/*! exports provided: CarouselImgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselImgs", function() { return CarouselImgs; });
var CarouselImgs = (function () {
    function CarouselImgs() {
        this.containers = document.getElementsByClassName("carousel-container");
        for (var c = 0; c < this.containers.length; c++) {
            var displayContainer = this.containers[c].getElementsByClassName("carousel-container__display-section")[c];
            var displayImages = displayContainer.getElementsByClassName("carousel-container__display-section__img");
            var imgThumbsContainer = this.containers[c].getElementsByClassName("carousel-container__display-controls")[0];
            var imgThumbs = imgThumbsContainer.getElementsByClassName("carousel-container__display-controls-control");
            this.on_clicking_thumbs(displayImages, imgThumbs);
            this.on_clicking_display_img(displayImages);
        }
    }
    CarouselImgs.prototype.on_clicking_thumbs = function (displayImages, imgThumbs) {
        var _loop_1 = function (thumb) {
            imgThumbs[thumb].addEventListener("click", function () {
                var controlsFor = imgThumbs[thumb].getAttribute("for");
                for (var im = 0; im < displayImages.length; im++) {
                    if (displayImages[im].getAttribute("img") === controlsFor) {
                        if (displayImages[im].getAttribute("position") != "init") {
                            displayImages[im].setAttribute("position", "show");
                        }
                    }
                    else {
                        displayImages[im].setAttribute("position", "hide");
                    }
                }
            });
        };
        for (var thumb = 0; thumb < imgThumbs.length; thumb++) {
            _loop_1(thumb);
        }
    };
    CarouselImgs.prototype.on_clicking_display_img = function (displayImages) {
        var _loop_2 = function (im) {
            displayImages[im].addEventListener("click", function () {
                displayImages[im].setAttribute("position", "hide");
                if (im === displayImages.length - 2) {
                    displayImages[0].setAttribute("position", "show");
                }
                else {
                    displayImages[im + 1].setAttribute("position", "show");
                }
            });
        };
        for (var im = 0; im < displayImages.length; im++) {
            _loop_2(im);
        }
    };
    return CarouselImgs;
}());



/***/ }),

/***/ "./furlon/static/ts/components/dropdown-menu.ts":
/*!******************************************************!*\
  !*** ./furlon/static/ts/components/dropdown-menu.ts ***!
  \******************************************************/
/*! exports provided: DropdownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
var DropdownMenu = (function () {
    function DropdownMenu() {
        this.ddMenus = document.getElementsByClassName("dropdown-menu");
        this.close_menu();
        for (var menuId = 0; menuId < this.ddMenus.length; menuId++) {
            this.build_menu(this.ddMenus[menuId]);
        }
    }
    DropdownMenu.prototype.close_menu = function () {
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
                for (var idx = 0; idx < navSubMenus.length; idx++) {
                    navSubMenus[idx].classList.replace("nav__option__dropdown-opts--expanded", "nav__option__dropdown-opts--collapse");
                }
                for (var j = 0; j < filterBtns.length; j++) {
                    var targetElem = filterBtns[j];
                    if (targetElem.getAttribute("filter-for") !=
                        selectedBtn.getAttribute("filter-for")) {
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
    DropdownMenu.prototype.build_menu = function (ddMenu) {
        var optionsBtn = ddMenu.getElementsByClassName("dropdown-menu__selected")[0];
        var optionsListContainer = ddMenu.getElementsByClassName("dropdown-menu__options")[0];
        var optionsListItems = optionsListContainer.getElementsByClassName("dropdown-menu__options__label");
        optionsBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            optionsListContainer.classList.toggle("dropdown-menu__options--hide");
        });
        var _loop_2 = function (optionIter) {
            var listItem = optionsListItems[optionIter];
            listItem.addEventListener("click", function () {
                for (var optionSubIter = 0; optionSubIter < optionsListItems.length; optionSubIter++) {
                    optionsListItems[optionSubIter].classList.remove("dropdown-menu__options__label--selected");
                }
                listItem.classList.add("dropdown-menu__options__label--selected");
                optionsBtn.innerText = listItem.innerText;
                optionsListContainer.classList.add("dropdown-menu__options--hide");
            });
        };
        for (var optionIter = 0; optionIter < optionsListItems.length; optionIter++) {
            _loop_2(optionIter);
        }
    };
    return DropdownMenu;
}());



/***/ }),

/***/ "./furlon/static/ts/components/navigation.ts":
/*!***************************************************!*\
  !*** ./furlon/static/ts/components/navigation.ts ***!
  \***************************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
var __values = (undefined && undefined.__values) || function(o) {
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
var Navigation = (function () {
    function Navigation() {
        var e_1, _a;
        this.menuBtns = document.getElementsByClassName("nav__option__btn");
        this.navSubMenus = document.querySelectorAll(".nav__option__dropdown-opts");
        this.toggleShowNavBtn = document.querySelector(".nav__toggle__btn");
        this.close_menu();
        try {
            for (var _b = __values(this.menuBtns), _c = _b.next(); !_c.done; _c = _b.next()) {
                var menuBtn = _c.value;
                menuBtn.addEventListener("click", this.subMenuCtrl);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.nav_toggle_btn();
    }
    Navigation.prototype.close_menu = function () {
        var _this = this;
        document.addEventListener("click", function () {
            for (var idx = 0; idx < _this.navSubMenus.length; idx++) {
                _this.navSubMenus[idx].classList.replace("nav__option__dropdown-opts--expanded", "nav__option__dropdown-opts--collapse");
            }
        });
        var optionLists = document.getElementsByClassName("dropdown-menu__options");
        var _loop_1 = function (i) {
            var menuBtn = this_1.menuBtns[i];
            menuBtn.addEventListener("click", function () {
                var e_2, _a;
                var _b;
                try {
                    for (var _c = (e_2 = void 0, __values(optionLists)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var optionList = _d.value;
                        optionList.classList.add("dropdown-menu__options--hide");
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                for (var j = 0; j < _this.menuBtns.length; j++) {
                    var targetElem = _this.menuBtns[j];
                    if (targetElem.getAttribute("filter-for") !=
                        menuBtn.getAttribute("filter-for")) {
                        if ((_b = targetElem.nextElementSibling) === null || _b === void 0 ? void 0 : _b.classList.contains("nav__option__dropdown-opts")) {
                            targetElem.nextElementSibling.classList.replace("nav__option__dropdown-opts--expanded", "nav__option__dropdown-opts--collapse");
                        }
                    }
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.menuBtns.length; i++) {
            _loop_1(i);
        }
    };
    Navigation.prototype.subMenuCtrl = function (event) {
        event.stopPropagation();
        var target = event.target;
        target: HTMLElement;
        var targetClasses = target.classList;
        var subMenu;
        if (targetClasses.contains("nav-sub-products")) {
            subMenu = document.querySelector(".nav__option__dropdown-opts.nav-sub-products");
        }
        else if (targetClasses.contains("nav-sub-rooms")) {
            subMenu = document.querySelector(".nav__option__dropdown-opts.nav-sub-rooms");
        }
        else {
            throw "Navigation element does not exist.";
        }
        var expanded = subMenu.classList.contains("nav__option__dropdown-opts--expanded");
        if (expanded) {
            subMenu.classList.add("nav__option__dropdown-opts--collapse");
            subMenu.classList.remove("nav__option__dropdown-opts--expanded");
        }
        else {
            subMenu.classList.remove("nav__option__dropdown-opts--collapse");
            subMenu.classList.add("nav__option__dropdown-opts--expanded");
        }
    };
    Navigation.prototype.nav_toggle_btn = function () {
        var _a;
        var optionsList = [
            document.getElementsByClassName("nav__option"),
            document.getElementsByClassName('nav__account-basket')
        ];
        (_a = this.toggleShowNavBtn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            for (var i = 0; i < optionsList.length; i++) {
                for (var j = 0; j < optionsList[i].length; j++) {
                    optionsList[i][j].classList.toggle("nav-option--show");
                }
            }
        });
    };
    return Navigation;
}());



/***/ }),

/***/ "./furlon/static/ts/components/quantity.ts":
/*!*************************************************!*\
  !*** ./furlon/static/ts/components/quantity.ts ***!
  \*************************************************/
/*! exports provided: QuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantityComponent", function() { return QuantityComponent; });
/* harmony import */ var _utilities_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/validation */ "./furlon/static/ts/utilities/validation.ts");

var QuantityComponent = (function () {
    function QuantityComponent() {
        this.containers = document.getElementsByClassName("c-quantity");
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
    QuantityComponent.prototype._set_elements = function (container) {
        var btnDown = container.querySelector('button[control="quantity-down"]');
        var btnUp = container.querySelector('button[control="quantity-up"]');
        var inputBox = container.querySelector("input.c-quantity__input");
        return [btnDown, btnUp, inputBox];
    };
    QuantityComponent.prototype._build_minus_button = function (btnDown, btnUp, inputBox, minValue, maxValue) {
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
    QuantityComponent.prototype._build_plus_button = function (btnDown, btnUp, inputBox, minValue, maxValue) {
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
    QuantityComponent.prototype._build_input_box = function (btnDown, btnUp, inputBox, minValue, maxValue) {
        inputBox.addEventListener("focusout", function () {
            var value = Number(inputBox.value);
            if (_utilities_validation__WEBPACK_IMPORTED_MODULE_0__["Validation"].check_if_positive_int(value)) {
                btnDown.removeAttribute("disabled");
                btnUp.removeAttribute("disabled");
                inputBox.parentElement.removeAttribute('invalid');
                if (value <= minValue) {
                    btnDown.setAttribute("disabled", "disabled");
                }
                else {
                    btnDown.removeAttribute("disabled");
                }
                if (value >= maxValue) {
                    btnUp.setAttribute("disabled", "disabled");
                }
                else {
                    btnUp.removeAttribute("disabled");
                }
            }
            else {
                btnDown.setAttribute("disabled", "disabled");
                btnUp.setAttribute("disabled", "disabled");
                inputBox.parentElement.setAttribute('invalid', 'true');
            }
        });
    };
    return QuantityComponent;
}());



/***/ }),

/***/ "./furlon/static/ts/components/register-validation.ts":
/*!************************************************************!*\
  !*** ./furlon/static/ts/components/register-validation.ts ***!
  \************************************************************/
/*! exports provided: RegisterPasswordCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPasswordCheck", function() { return RegisterPasswordCheck; });
var RegisterPasswordCheck = (function () {
    function RegisterPasswordCheck() {
        this.passwordElem = document.getElementById("register-password");
        this.confirmPassElem = document.getElementById("register-password-confirm");
        this.submitBtn = document.getElementById("register-submit");
        this.errorMsgElem = document.getElementById("register-errors");
        this.set_keybinders();
    }
    RegisterPasswordCheck.prototype.check_passwords = function () {
        var _a, _b;
        var passwordTxt = (_a = this.passwordElem) === null || _a === void 0 ? void 0 : _a.value;
        var confirmPassTxt = (_b = this.confirmPassElem) === null || _b === void 0 ? void 0 : _b.value;
        if (passwordTxt && confirmPassTxt) {
            if (passwordTxt === confirmPassTxt) {
                if (passwordTxt.length >= 6 &&
                    passwordTxt.match(/[0-9]/) &&
                    passwordTxt.match(/[A-z]/)) {
                    return true;
                }
                else {
                    this.errorMsgElem.textContent =
                        "Password must be at least 6 characters long and contain at least 1 number.";
                    return false;
                }
            }
            else {
                this.errorMsgElem.textContent = "Passwords do not match.";
                return false;
            }
        }
        else {
            return true;
        }
    };
    RegisterPasswordCheck.prototype.set_keybinders = function () {
        var _this = this;
        this.confirmPassElem.addEventListener("focusout", function () {
            _this.update_element_attrs();
        });
    };
    RegisterPasswordCheck.prototype.update_element_attrs = function () {
        if (this.check_passwords()) {
            this.passwordElem.removeAttribute("invalid");
            this.confirmPassElem.removeAttribute("invalid");
            this.submitBtn.removeAttribute("disabled");
        }
        else {
            this.passwordElem.setAttribute("invalid", "true");
            this.confirmPassElem.setAttribute("invalid", "true");
            this.submitBtn.setAttribute("disabled", "disabled");
        }
    };
    return RegisterPasswordCheck;
}());



/***/ }),

/***/ "./furlon/static/ts/components/search_filters.ts":
/*!*******************************************************!*\
  !*** ./furlon/static/ts/components/search_filters.ts ***!
  \*******************************************************/
/*! exports provided: SearchFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilters", function() { return SearchFilters; });
var __values = (undefined && undefined.__values) || function(o) {
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
var SearchFilters = (function () {
    function SearchFilters() {
        this._expand_nav_search();
    }
    SearchFilters.prototype._expand_nav_search = function () {
        var e_1, _a;
        var _this = this;
        var navForm = document.getElementsByClassName("nav__search")[0];
        var inputNames = ["f-minPrice", "f-maxPrice", "f-category", "f-colour"];
        try {
            for (var inputNames_1 = __values(inputNames), inputNames_1_1 = inputNames_1.next(); !inputNames_1_1.done; inputNames_1_1 = inputNames_1.next()) {
                var inputName = inputNames_1_1.value;
                var hiddenInputNode = document.createElement("INPUT");
                hiddenInputNode.setAttribute("type", "hidden");
                hiddenInputNode.setAttribute("name", inputName);
                hiddenInputNode.setAttribute("id", inputName);
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
        var dropdownOptions = document.getElementsByClassName("dropdown-menu__options");
        var _loop_1 = function (opt) {
            var dropdownOption = dropdownOptions[opt];
            var hiddenInput;
            switch (dropdownOption.getAttribute("filter-for")) {
                case "min-price":
                    hiddenInput = document.getElementById("f-minPrice");
                    break;
                case "max-price":
                    hiddenInput = document.getElementById("f-maxPrice");
                    break;
                case "category":
                    hiddenInput = document.getElementById("f-category");
                    break;
                case "colour":
                    hiddenInput = document.getElementById("f-colour");
            }
            if (hiddenInput) {
                dropdownOption.addEventListener("click", function (event) {
                    event.stopPropagation();
                    hiddenInput.value = dropdownOption.previousElementSibling.textContent;
                    var APIPath = _this._API_path();
                    var request = new XMLHttpRequest();
                    request.open("GET", APIPath);
                    request.send();
                    request.onreadystatechange = function () {
                        if (request.readyState == 4 && request.status == 200) {
                            var response = JSON.parse(request.responseText);
                            _this._filter_results(response);
                        }
                        else {
                        }
                    };
                });
            }
        };
        for (var opt = 0; opt < dropdownOptions.length; opt++) {
            _loop_1(opt);
        }
    };
    SearchFilters.prototype._API_path = function () {
        var href = window.location.href.replace("/search/", "/search-results/");
        var hiddenInMinPrice = document.getElementById("f-minPrice");
        var hiddenInMaxPrice = document.getElementById("f-maxPrice");
        var hiddenInCategory = document.getElementById("f-category");
        var hiddenInColour = document.getElementById("f-colour");
        if (hiddenInMinPrice.value) {
            var newStr = "f-minPrice=" + hiddenInMinPrice.value;
            if (href.match(/f-minPrice=.*?&/)) {
                href = href.replace(/f-minPrice=.*?&/, newStr + "&");
            }
            else {
                href = href.concat("&", newStr);
            }
        }
        if (hiddenInMaxPrice.value) {
            var newStr = "f-maxPrice=" + hiddenInMaxPrice.value;
            if (href.match(/f-maxPrice=.*?&/)) {
                href = href.replace(/f-maxPrice=.*?&/, newStr + "&");
            }
            else {
                href = href.concat("&", newStr);
            }
        }
        if (hiddenInCategory.value) {
            var newStr = "f-category=" + hiddenInCategory.value;
            if (href.match(/f-category=.*?&/)) {
                href = href.replace(/f-category=.*?&/, newStr + "&");
            }
            else {
                href = href.concat("&", newStr);
            }
        }
        if (hiddenInColour.value) {
            var newStr = "f-colour=" + hiddenInColour.value;
            if (href.match(/f-colour=.*?&/)) {
                href = href.replace(/f-colour=.*?&/, newStr + "&");
            }
            else {
                href = href.concat("&", newStr);
            }
        }
        return href;
    };
    SearchFilters.prototype._filter_results = function (APIResults) {
        var origResults = document.getElementsByClassName('results__result');
        var validProducts = [];
        result: JSON;
        for (var result in APIResults) {
            validProducts.push(APIResults[result].product_id);
        }
        for (var rID = 0; rID < origResults.length; rID++) {
            if (validProducts.includes(Number(origResults[rID].getAttribute('ID')))) {
                origResults[rID].classList.remove('hide');
            }
            else {
                origResults[rID].classList.add('hide');
            }
        }
    };
    return SearchFilters;
}());



/***/ }),

/***/ "./furlon/static/ts/main.ts":
/*!**********************************!*\
  !*** ./furlon/static/ts/main.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation */ "./furlon/static/ts/components/navigation.ts");
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dropdown-menu */ "./furlon/static/ts/components/dropdown-menu.ts");
/* harmony import */ var _components_quantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quantity */ "./furlon/static/ts/components/quantity.ts");
/* harmony import */ var _components_search_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search_filters */ "./furlon/static/ts/components/search_filters.ts");
/* harmony import */ var _pages_products_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/products/product */ "./furlon/static/ts/pages/products/product.ts");
/* harmony import */ var _components_carousel_imgs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carousel-imgs */ "./furlon/static/ts/components/carousel-imgs.ts");
/* harmony import */ var _state_basket_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/basket-items */ "./furlon/static/ts/state/basket-items.ts");
/* harmony import */ var _pages_basket_basket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/basket/basket */ "./furlon/static/ts/pages/basket/basket.ts");
/* harmony import */ var _components_register_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register-validation */ "./furlon/static/ts/components/register-validation.ts");









new _components_navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]();
new _state_basket_items__WEBPACK_IMPORTED_MODULE_6__["BasketState"]();
new _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"]();
new _components_search_filters__WEBPACK_IMPORTED_MODULE_3__["SearchFilters"]();
var CURRENT_URL = window.location.href;
if (CURRENT_URL.search(/\/products\/[0-9]{1,}/) != -1) {
    new _pages_products_product__WEBPACK_IMPORTED_MODULE_4__["ExtendProductPage"]();
    new _components_quantity__WEBPACK_IMPORTED_MODULE_2__["QuantityComponent"]();
    new _components_carousel_imgs__WEBPACK_IMPORTED_MODULE_5__["CarouselImgs"]();
}
else if (CURRENT_URL.includes("/basket/")) {
    new _pages_basket_basket__WEBPACK_IMPORTED_MODULE_7__["BasketPage"]();
}
else if (CURRENT_URL.includes("user/register")) {
    new _components_register_validation__WEBPACK_IMPORTED_MODULE_8__["RegisterPasswordCheck"]();
}


/***/ }),

/***/ "./furlon/static/ts/pages/basket/basket.ts":
/*!*************************************************!*\
  !*** ./furlon/static/ts/pages/basket/basket.ts ***!
  \*************************************************/
/*! exports provided: BasketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPage", function() { return BasketPage; });
/* harmony import */ var _utilities_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/validation */ "./furlon/static/ts/utilities/validation.ts");
/* harmony import */ var _utilities_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/number_format */ "./furlon/static/ts/utilities/number_format.ts");
/* harmony import */ var _state_basket_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/basket-items */ "./furlon/static/ts/state/basket-items.ts");
/* harmony import */ var _components_quantity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/quantity */ "./furlon/static/ts/components/quantity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var BasketPage = (function (_super) {
    __extends(BasketPage, _super);
    function BasketPage() {
        var _this = _super.call(this) || this;
        _this.summaryItemsParent = document.getElementById("basket-summary-data");
        _this.basketItems = [];
        if (_this.items != null && _this.items != "{}") {
            for (var key in JSON.parse(_this.items)) {
                _this.basketItems.push(key);
            }
            var basketItemsStr = _this.basketItems.join(",");
            var APIPath = window.location.href.replace(/basket.*/, "basket-info-API/?pks=" + basketItemsStr);
            var request_1 = new XMLHttpRequest();
            request_1.open("GET", APIPath);
            request_1.send();
            request_1.onreadystatechange = function () {
                if (request_1.readyState == 4 && request_1.status == 200) {
                    var APIResponse = JSON.parse(request_1.responseText);
                    if (APIResponse.productsInfo) {
                        _this.build_basket_summary(APIResponse.productsInfo);
                        _this.update_basket_totals();
                    }
                }
            };
        }
        return _this;
    }
    BasketPage.prototype.build_basket_summary = function (allProducts) {
        var _this = this;
        var productPage = window.location.href.replace(/basket.*/, "products/");
        var _loop_1 = function (i) {
            var product = allProducts[i];
            var container = document.createElement("div");
            var items = Number(JSON.parse(this_1.items)[product.productId]);
            container.className = "table__row";
            container.setAttribute("product-id", product.productId);
            var imgATag = document.createElement("a");
            imgATag.className = "table__field table__field";
            imgATag.href = productPage + product.productId;
            imgATag.setAttribute("field", "product-image");
            var imgElem = document.createElement("img");
            imgElem.src = product.image;
            imgElem.alt = "Image of " + product.productName;
            imgElem.className = "table__field table__field--img";
            imgATag.appendChild(imgElem);
            var nameElem = document.createElement("a");
            nameElem.className = "table__field";
            nameElem.href = productPage + product.productId;
            nameElem.setAttribute("field", "product-name");
            nameElem.textContent = product.productName;
            var storeElem = document.createElement("a");
            storeElem.className = "table__field";
            storeElem.href = "#";
            storeElem.setAttribute("field", "product-store");
            storeElem.textContent = product.storeName;
            var colourElem = document.createElement("P");
            colourElem.className = "table__field";
            colourElem.setAttribute("field", "product-colour");
            colourElem.textContent = product.colourName;
            var quantityContainerElem = document.createElement("DIV");
            quantityContainerElem.className = "c-quantity table__field";
            quantityContainerElem.id = "product-" + product.productId;
            quantityContainerElem.setAttribute("field", "quantity");
            var quantityInput = document.createElement("INPUT");
            quantityInput.className = "c-quantity__input";
            quantityInput.min = "0";
            quantityInput.step = "1";
            quantityInput.max = product.inventory;
            quantityInput.value = items.toString();
            quantityInput.type = "number";
            quantityInput.addEventListener("focusout", function (event) {
                event.stopPropagation();
                console.log(quantityInput.value);
                if (_utilities_validation__WEBPACK_IMPORTED_MODULE_0__["Validation"].check_if_positive_int(Number(quantityInput.value))) {
                    var value = Number(quantityInput.value);
                    if (value > Number(quantityInput.max)) {
                        quantityInput.value = quantityInput.max;
                        value = Number(quantityInput.max);
                    }
                    _this.update_single_item(product.productId, value);
                    priceSpan.textContent = (value * product.price).toString();
                    _this.update_basket_totals();
                }
            });
            var minusBtn = document.createElement("button");
            minusBtn.className = "c-quantity__btn";
            minusBtn.setAttribute("control", "quantity-down");
            minusBtn.addEventListener("click", function (event) {
                event.stopPropagation();
                _this.remove_an_item(product.productId, product.price, priceSpan);
                _this.update_basket_totals();
            });
            var plusBtn = document.createElement("button");
            plusBtn.className = "c-quantity__btn";
            plusBtn.setAttribute("control", "quantity-up");
            plusBtn.addEventListener("click", function (event) {
                event.stopPropagation();
                _this.add_an_item(product.productId, product.price, priceSpan);
                _this.update_basket_totals();
            });
            var minusBtnSpan = document.createElement("SPAN");
            minusBtnSpan.className = "c-quantity__btn__text";
            minusBtnSpan.textContent = "-";
            var plusBtnSpan = document.createElement("SPAN");
            plusBtnSpan.className = "c-quantity__btn__text";
            plusBtnSpan.textContent = "+";
            minusBtn.appendChild(minusBtnSpan);
            plusBtn.appendChild(plusBtnSpan);
            quantityContainerElem.appendChild(minusBtn);
            quantityContainerElem.appendChild(quantityInput);
            quantityContainerElem.appendChild(plusBtn);
            var priceElem = document.createElement("P");
            priceElem.className = "table__field";
            priceElem.setAttribute("field", "product-price-container");
            var poundI = document.createElement("span");
            poundI.textContent = "£";
            poundI.setAttribute("field", "product-price-currency");
            priceElem.appendChild(poundI);
            var priceSpan = document.createElement("span");
            priceSpan.setAttribute("field", "product-price-value");
            priceSpan.textContent = _utilities_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].thousand_separated_2dp(Number(product.price) * items);
            priceElem.appendChild(priceSpan);
            var removeItemSpan = document.createElement("SPAN");
            removeItemSpan.className = "table__icon";
            removeItemSpan.setAttribute("field", "remove-item");
            removeItemSpan.addEventListener("click", function (event) {
                event.stopPropagation();
                _this.remove_whole_item(product.productId, container);
                _this.update_basket_totals();
            });
            var removeItemI = document.createElement("I");
            removeItemI.className = "fa fa-times";
            removeItemSpan.appendChild(removeItemI);
            priceElem.appendChild(removeItemSpan);
            container.appendChild(imgATag);
            container.appendChild(nameElem);
            container.appendChild(storeElem);
            container.appendChild(colourElem);
            container.appendChild(quantityContainerElem);
            container.appendChild(priceElem);
            this_1.summaryItemsParent.appendChild(container);
        };
        var this_1 = this;
        for (var i = 0; i < allProducts.length; i++) {
            _loop_1(i);
        }
        new _components_quantity__WEBPACK_IMPORTED_MODULE_3__["QuantityComponent"]();
    };
    BasketPage.prototype.update_basket_totals = function () {
        var subtotalElem = document.getElementById("basket-subtotal")
            .children[1];
        var vatElem = document.getElementById("basket-vat")
            .children[1];
        var totalElem = document.getElementById("basket-total")
            .children[1];
        var totalPrice = 0;
        var priceElems = document
            .getElementById("basket-summary-data")
            .querySelectorAll('.table__field>[field="product-price-value"]');
        for (var priceIdx = 0; priceIdx < priceElems.length; priceIdx++) {
            totalPrice += _utilities_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].thousand_sep_to_float(priceElems[priceIdx].textContent);
        }
        var subTotal = totalPrice / 1.2;
        var vat = totalPrice - subTotal;
        subtotalElem.textContent = subTotal.toFixed(2);
        vatElem.textContent = vat.toFixed(2);
        totalElem.textContent = _utilities_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].thousand_separated_2dp(totalPrice);
    };
    BasketPage.prototype.remove_an_item = function (productId, price, priceElem) {
        this.remove_item(Number(productId), 1);
        priceElem.textContent = _utilities_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].thousand_separated_2dp(_utilities_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].thousand_sep_to_float(priceElem.textContent) - Number(price));
    };
    BasketPage.prototype.add_an_item = function (productId, price, priceElem) {
        this.add_item(Number(productId), 1);
        priceElem.textContent = _utilities_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].thousand_separated_2dp(_utilities_number_format__WEBPACK_IMPORTED_MODULE_1__["NumberFormat"].thousand_sep_to_float(priceElem.textContent) + Number(price));
    };
    BasketPage.prototype.remove_whole_item = function (productId, parentContainer) {
        this.remove_entire_item(productId);
        parentContainer.remove();
    };
    return BasketPage;
}(_state_basket_items__WEBPACK_IMPORTED_MODULE_2__["BasketState"]));



/***/ }),

/***/ "./furlon/static/ts/pages/products/product.ts":
/*!****************************************************!*\
  !*** ./furlon/static/ts/pages/products/product.ts ***!
  \****************************************************/
/*! exports provided: ExtendProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendProductPage", function() { return ExtendProductPage; });
/* harmony import */ var _state_basket_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/basket-items */ "./furlon/static/ts/state/basket-items.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ExtendProductPage = (function (_super) {
    __extends(ExtendProductPage, _super);
    function ExtendProductPage() {
        var _this = _super.call(this) || this;
        var APIPath = window.location.href.replace("/products/", "/products/info-api/");
        var request = new XMLHttpRequest();
        request.open("GET", APIPath);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                var data = JSON.parse(request.responseText);
                if (data.colours) {
                    _this.build_colours(data.colours);
                }
                if (data.sets) {
                    _this.build_product_sets(data.sets);
                }
                if (data.similar) {
                    _this.build_similar_products(data.similar);
                }
                if (data.features) {
                    _this.build_features(data.features);
                }
            }
        };
        _this.add_to_basket();
        return _this;
    }
    ExtendProductPage.prototype.build_colours = function (attrs) {
        var targetElem = document.getElementById("product-colour-variations");
        if (targetElem) {
            for (var a = 0; a < attrs.length; a++) {
                var href = "/products/" + attrs[a].product_id;
                var colour = attrs[a].col_name;
                var hex_val = attrs[a].col_hex_val;
                var linkElem = document.createElement("A");
                linkElem.setAttribute("href", href);
                linkElem.setAttribute("class", "dropdown-menu__options__label");
                var labelElem = document.createElement("LABEL");
                labelElem.setAttribute("for", "colour-" + colour);
                var spanElem = document.createElement("SPAN");
                spanElem.setAttribute("class", "sm-colour-box");
                spanElem.setAttribute("style", "background-color: " + hex_val + ";");
                var inputElem = document.createElement("INPUT");
                inputElem.setAttribute("type", "radio");
                inputElem.setAttribute("class", "dropdown-menu__options__radio-btn");
                inputElem.setAttribute("name", "prod-f-colour");
                inputElem.setAttribute("id", "colour-" + colour);
                inputElem.setAttribute("value", "colour-" + colour);
                labelElem.appendChild(spanElem);
                labelElem.append(colour);
                linkElem.appendChild(labelElem);
                targetElem.appendChild(linkElem);
                targetElem.appendChild(inputElem);
            }
        }
        else {
            console.warn("#product-colour-variations does not exist, alternative colours cannot be added.");
        }
    };
    ExtendProductPage.prototype.build_product_sets = function (attrs) {
        var targetElem = document.getElementById("product-sets");
        if (targetElem) {
            for (var a = 0; a < attrs.length; a++) {
                var href = "/products/" + attrs[a].product_id;
                var name_1 = attrs[a].name;
                var img = attrs[a].showcase_image;
                var price = attrs[a].price;
                var linkElem = document.createElement("A");
                linkElem.setAttribute("class", "product-set related-product");
                linkElem.setAttribute("href", href);
                var imgElem = document.createElement("IMG");
                imgElem.setAttribute("class", "product-set__img related-product__img");
                imgElem.setAttribute("src", img);
                imgElem.setAttribute("alt", "Image of a product of which this product is a set. (" + name_1 + "}");
                var textSpanElem = document.createElement("SPAN");
                textSpanElem.setAttribute("class", "product-set__name related-product__name");
                textSpanElem.textContent = name_1;
                var textPriceElem = document.createElement("SPAN");
                textPriceElem.setAttribute("class", "product-set__price related-product__price");
                textPriceElem.textContent = "£" + price;
                linkElem.appendChild(imgElem);
                linkElem.appendChild(textSpanElem);
                linkElem.appendChild(textPriceElem);
                targetElem.appendChild(linkElem);
            }
        }
        else {
            console.warn("#product-sets does not exist, product-sets cannot be added.");
        }
    };
    ExtendProductPage.prototype.build_similar_products = function (attrs) {
        var targetElem = document.getElementById("similar-products");
        if (targetElem) {
            for (var a = 0; a < attrs.length; a++) {
                var href = "/products/" + attrs[a].product_id;
                var name_2 = attrs[a].name;
                var img = attrs[a].showcase_image;
                var price = attrs[a].price;
                var linkElem = document.createElement("A");
                linkElem.setAttribute("class", "similar-product related-product");
                linkElem.setAttribute("href", href);
                var imgElem = document.createElement("IMG");
                imgElem.setAttribute("class", "similar-product__img related-product__img");
                imgElem.setAttribute("src", img);
                imgElem.setAttribute("alt", "Image of a product of which this product is a set. (" + name_2 + "}");
                var textSpanElem = document.createElement("SPAN");
                textSpanElem.setAttribute("class", "similar-product__name related-product__name");
                textSpanElem.textContent = name_2;
                var textPriceElem = document.createElement("SPAN");
                textPriceElem.setAttribute("class", "similar-product__price related-product__price");
                textPriceElem.textContent = "£" + price;
                linkElem.appendChild(imgElem);
                linkElem.appendChild(textSpanElem);
                linkElem.appendChild(textPriceElem);
                targetElem.appendChild(linkElem);
            }
        }
        else {
            console.warn("#similar-products does not exist, similar-products cannot be added.");
        }
    };
    ExtendProductPage.prototype.build_features = function (attrs) {
        var targetElem = document.getElementById("product-features");
        if (targetElem) {
            for (var f = 0; f < attrs.length; f++) {
                var name_3 = attrs[f].name;
                var newElem = document.createElement("P");
                newElem.setAttribute("class", "product-info__section__text");
                newElem.textContent = name_3;
                targetElem.appendChild(newElem);
            }
        }
        else {
            console.warn("#product-features does not exist, similar-products cannot be added.");
        }
    };
    ExtendProductPage.prototype.add_to_basket = function () {
        var _this = this;
        var inputElem = document.getElementById("quantity-ctrl");
        var productId = Number(inputElem.getAttribute("product-id"));
        var addBtn = document.getElementById("add-to-basket-btn");
        addBtn.addEventListener("click", function () {
            var quantity = Number(inputElem.value);
            if (Number.isInteger(quantity)) {
                _super.prototype.add_item.call(_this, productId, quantity);
            }
            else {
                console.warn("Check the quantity, it is either NaN or a float. Must be a number");
            }
        });
    };
    return ExtendProductPage;
}(_state_basket_items__WEBPACK_IMPORTED_MODULE_0__["BasketState"]));



/***/ }),

/***/ "./furlon/static/ts/state/basket-items.ts":
/*!************************************************!*\
  !*** ./furlon/static/ts/state/basket-items.ts ***!
  \************************************************/
/*! exports provided: BasketState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketState", function() { return BasketState; });
var BasketState = (function () {
    function BasketState() {
        this.totalItems = window.localStorage.getItem("totalBasketSize");
        this.items = window.localStorage.getItem("basketItems");
        this.update_basket_counter(this.totalItems);
    }
    BasketState.prototype._read_items = function () {
        if (!this.totalItems) {
            this.totalItems = 0;
        }
        else {
            Number(this.totalItems);
        }
        if (this.items) {
            this.items = JSON.parse(this.items);
        }
        else {
            this.items = {};
        }
    };
    BasketState.prototype._set_items = function () {
        if (!this.totalItems) {
            window.localStorage.setItem("totalBasketSize", "0");
        }
        else {
            window.localStorage.setItem("totalBasketSize", this.totalItems.toString());
        }
        if (!this.items) {
            window.localStorage.setItem("basketItems", "{}");
        }
        else {
            this.items = JSON.stringify(this.items);
            window.localStorage.setItem("basketItems", this.items);
        }
        this.update_basket_counter(this.totalItems);
    };
    BasketState.prototype.add_item = function (id, quantity) {
        this._read_items();
        this.totalItems = Number(this.totalItems);
        this.totalItems += quantity;
        if (this.items[id]) {
            this.items[id] += quantity;
        }
        else {
            this.items[id] = quantity;
        }
        this._set_items();
    };
    BasketState.prototype.remove_item = function (id, quantity) {
        this._read_items();
        this.totalItems = Number(this.totalItems);
        if (this.totalItems > 0) {
            this.totalItems -= quantity;
        }
        this.update_basket_counter(this.totalItems);
        if (this.items[id]) {
            this.items[id] = Number(this.items[id]);
            this.items[id] -= quantity;
            if (this.items[id] == 0) {
                delete this.items[id];
            }
        }
        this._set_items();
    };
    BasketState.prototype.remove_entire_item = function (id) {
        this._read_items();
        this.totalItems = Number(this.totalItems) - Number(this.items[id]);
        delete this.items[id];
        this._set_items();
    };
    BasketState.prototype.update_basket_counter = function (newNum) {
        var basketCountElem = document.getElementById("basket-total-items");
        if (newNum) {
            basketCountElem.classList.remove("hide");
            basketCountElem.textContent = newNum.toString();
        }
        else {
            basketCountElem.classList.add("hide");
        }
    };
    BasketState.prototype.update_single_item = function (productId, newNum) {
        this._read_items();
        var prevValue = Number(this.items[productId]);
        this.items[productId] = newNum;
        this.totalItems = Number(this.totalItems) + newNum - prevValue;
        this._set_items();
    };
    return BasketState;
}());



/***/ }),

/***/ "./furlon/static/ts/utilities/number_format.ts":
/*!*****************************************************!*\
  !*** ./furlon/static/ts/utilities/number_format.ts ***!
  \*****************************************************/
/*! exports provided: NumberFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormat", function() { return NumberFormat; });
var NumberFormat = (function () {
    function NumberFormat() {
    }
    NumberFormat.thousand_separated_2dp = function (num) {
        return Number(num)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    NumberFormat.thousand_sep_to_float = function (num) {
        if (!num) {
            return 0;
        }
        else {
            return Number(num.replace(",", ""));
        }
    };
    return NumberFormat;
}());



/***/ }),

/***/ "./furlon/static/ts/utilities/validation.ts":
/*!**************************************************!*\
  !*** ./furlon/static/ts/utilities/validation.ts ***!
  \**************************************************/
/*! exports provided: Validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validation", function() { return Validation; });
var Validation = (function () {
    function Validation() {
    }
    Validation.check_if_positive_int = function (item) {
        if (typeof item != 'number') {
            return false;
        }
        else if (item >= 0 && item === Math.round(item)) {
            return true;
        }
        return false;
    };
    return Validation;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9yZWdpc3Rlci12YWxpZGF0aW9uLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3N0YXRlL2Jhc2tldC1pdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3V0aWxpdGllcy9udW1iZXJfZm9ybWF0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvdXRpbGl0aWVzL3ZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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Q0FBQzthQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDVixPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdNLGtDQUFxQixHQUE1QixVQUE2QixHQUFrQjtRQUs3QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDckJEO0FBQUE7QUFBQTtJQUFBO0lBbUJBLENBQUM7SUFaUSxnQ0FBcUIsR0FBNUIsVUFBNkIsSUFBUztRQUdsQyxJQUFJLE9BQU8sSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUN6QixPQUFPLEtBQUs7U0FDZjthQUFNLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxPQUFPLElBQUk7U0FDZDtRQUdELE9BQU8sS0FBSztJQUNoQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZnVybG9uL3N0YXRpYy9qc1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Z1cmxvbi9zdGF0aWMvdHMvbWFpbi50c1wiKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjkvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gQ2Fyb3VzZWwgc3R5bGVkIGltYWdlIHNsaWRlIHNob3dzLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBPbiBjbGljayBvZiBhIGltYWdlIHRodW1ibmFpbHMgb3IgdGhlIGN1cnJlbnQgaW1hZ2UsIHRoZSBjdXJyZW50IGltYWdlIHNob3VsZFxyXG4vLyBjaGFuZ2UgYWNjb3JkaW5nbHkuXHJcbi8vIEFuaW1hdGlvbnMgYXJlIGhhbmRsZWQgdGhyb3VnaCB0aGUgQ1NTLCB0aGUgSlMgc2V0cyB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvXHJcbi8vIGNoYW5nZSB0aGUgYXR0cmlidXRlcyBvZiB0aGUgZGlzcGxheSBpbWFnZXMgYWNjb3JkaW5nbHkgc28gYXMgdG8gZGlzcGxheSB0aGVcclxuLy8gc2VsZWN0ZWQgaW1hZ2UuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxJbWdzIHtcclxuICAvKipcclxuICAgKiBCdWlsZHMgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZSBjYXJvdXNlbCBpbWFnZSBpbWFnZXMgc3VjaCB0aGF0IHdoZW5cclxuICAgKiBhIHRodW1ibmFpbCBvciB0aGUgbWFpbiBwaWN0dXJlIGlzIGNsaWNrZWQgb24sIHRoZSBpbWFnZSB3aWxsIGNoYW5nZS5cclxuICAgKiBUaGUgYW5pbWF0aW9uIGFuZCBwb3NpdGlvbmluZyBpcyBjb250cm9sbGVkIHZpYSB0aGUgQ1NTLCB0aGUgY2xhc3Mgd2lsbFxyXG4gICAqIGFkZCBhbmQgcmVtb3ZlIGF0dHJpYnV0ZXMgZnJvbSB0aGUgZWxlbWVudHMsIHNvIHRoYXQgdGhlIGFuaW1hdGlvbnMgY2FuXHJcbiAgICogYmUgdHJpZ2dlcmVkLlxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2Fyb3VzZWwtY29udGFpbmVyXCIpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIExvY2F0ZXMgdGhlIGVsZW1lbnRzIHdoZXJlIGFuIGV2ZW50IGxpc3RlbmVycyBuZWVkIHRvIGJlIGFkZGVkIGFuZFxyXG4gICAgICogY2FsbHMgbWV0aG9kcyB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBlbGVtZW50XHJcbiAgICAgKiBpcy5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbnRhaW5lcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgLy8gRE9NIGVsZW1lbnRzIGZvciBldmVudCBsaXN0ZW5lcnMgdG8gYmUgYWRkZWQuXHJcbiAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbY10uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1zZWN0aW9uXCJcclxuICAgICAgKVtjXTtcclxuICAgICAgY29uc3QgZGlzcGxheUltYWdlcyA9IGRpc3BsYXlDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1zZWN0aW9uX19pbWdcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgaW1nVGh1bWJzQ29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2NdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktY29udHJvbHNcIlxyXG4gICAgICApWzBdO1xyXG4gICAgICBjb25zdCBpbWdUaHVtYnMgPSBpbWdUaHVtYnNDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1jb250cm9scy1jb250cm9sXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vICBNZXRob2RzIHRvIGFkZCBldmVudCBsaXN0ZW5lcnMgb24gZWFjaCBET00gZWxlbWVudC5cclxuICAgICAgdGhpcy5vbl9jbGlja2luZ190aHVtYnMoZGlzcGxheUltYWdlcywgaW1nVGh1bWJzKTtcclxuICAgICAgdGhpcy5vbl9jbGlja2luZ19kaXNwbGF5X2ltZyhkaXNwbGF5SW1hZ2VzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG9uX2NsaWNraW5nX3RodW1icyhcclxuICAgIGRpc3BsYXlJbWFnZXM6IEhUTUxDb2xsZWN0aW9uLFxyXG4gICAgaW1nVGh1bWJzOiBIVE1MQ29sbGVjdGlvblxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFYWNoIGltYWdlIHRodW1ibmFpbCBlbGVtZW50IGhhcyBhIFwiZm9yXCIgYXR0cmlidXRlIHdoaWNoIGluZGljYXRlc1xyXG4gICAgICogd2hpY2ggZWxlbWVudCBvbiB0aGUgZGlzcGxheSBzZWN0aW9uIGl0IHJlcHJlc2VudHMuIFRoZSBkaXNwbGF5IGltYWdlXHJcbiAgICAgKiBlbGVtZW50IGhhcyBhbiBcImltZ1wiIGF0dHJpYnV0ZSB3aXRoIHRoZSBzYW1lIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIE9uIGNsaWNraW5nIG9uIGEgaW1hZ2UgdGh1bWJuYWlsLCB0aGUgZGlzcGxheSBhdHRyaWJ1dGUncyBwb3NpdGlvblxyXG4gICAgICogYXR0cmlidXRlIHdpbGwgYmVjb21lIFwic2hvd1wiIHdoZXJlIHRoZSBzYW1lIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgYWxsXHJcbiAgICAgKiBvdGhlciBpbWFnZXMgd2lsbCBiZWNvbWUgXCJoaWRlXCIuXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogdGhlIGluaXRpYWwgaW1hZ2Ugd2lsbCBoYXZlIHBvc2l0aW9uPVwiaW5pdFwiIGluaXRpYWxseSBzbyBhcyB0b1xyXG4gICAgICogYXZvaWQgYW55IGFuaW1hdGlvbnMgb24gc3RhcnQuIElmIHRoaXMgaW1hZ2UgdGh1bWJuYWlsIGlzIGNsaWNrZWQsIGRvXHJcbiAgICAgKiBub3RoaW5nLlxyXG4gICAgICovXHJcbiAgICBmb3IgKGxldCB0aHVtYiA9IDA7IHRodW1iIDwgaW1nVGh1bWJzLmxlbmd0aDsgdGh1bWIrKykge1xyXG4gICAgICBpbWdUaHVtYnNbdGh1bWJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbHNGb3IgPSBpbWdUaHVtYnNbdGh1bWJdLmdldEF0dHJpYnV0ZShcImZvclwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW0gPSAwOyBpbSA8IGRpc3BsYXlJbWFnZXMubGVuZ3RoOyBpbSsrKSB7XHJcbiAgICAgICAgICBpZiAoZGlzcGxheUltYWdlc1tpbV0uZ2V0QXR0cmlidXRlKFwiaW1nXCIpID09PSBjb250cm9sc0Zvcikge1xyXG4gICAgICAgICAgICBpZiAoZGlzcGxheUltYWdlc1tpbV0uZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIikgIT0gXCJpbml0XCIpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwiaGlkZVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgb25fY2xpY2tpbmdfZGlzcGxheV9pbWcoXHJcbiAgICAvKipcclxuICAgICAqIE9uIGNsaWNrIG9mIHRoZSBjdXJyZW50IGRpc3BsYXkgaW1hZ2UsIGhpZGUgdGhlIGltYWdlIGFuZCBzaG93IHRoZVxyXG4gICAgICogbmV4dC5cclxuICAgICAqIEFuaW1hdGlvbiBpcyBoYW5kbGVkIGJ5IHRoZSBjc3MuIEZvciBhbmltYXRpb24gdG8gd29yaywgb24gY2xpY2ssXHJcbiAgICAgKiBcImhpZGVcIiBpcyBzZXQgdG8gdGhlIGF0dHJpYnV0ZSBwb3NpdGlvbiBvbiB0aGUgY3VycmVudCBpbWFnZSwgYW5kIG9uXHJcbiAgICAgKiB0aGUgbmV4dCBpbWFnZSwgdGhlIFwic2hvd1wiIGlzIHNldCB0byB0aGUgcG9zaXRpb24gYXR0cmlidXRlLlxyXG4gICAgICovXHJcbiAgICBkaXNwbGF5SW1hZ2VzOiBIVE1MQ29sbGVjdGlvblxyXG4gICkge1xyXG4gICAgZm9yIChsZXQgaW0gPSAwOyBpbSA8IGRpc3BsYXlJbWFnZXMubGVuZ3RoOyBpbSsrKSB7XHJcbiAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICBpZiAoaW0gPT09IGRpc3BsYXlJbWFnZXMubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgZGlzcGxheUltYWdlc1swXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInNob3dcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BsYXlJbWFnZXNbaW0gKyAxXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAxNi8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBDdXN0b20gZHJvcGRvd24gbWVudVxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTOlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBfZHJvcGRvd24tbWVudS5zY3NzXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIFByb3ZpZGVzIGZ1bmN0aW9ucyBmb3IgYSBjdXN0b20gZHJvcGRvd24gbWVudS5cclxuLy8gVGhlIGZ1bmN0aW9ucyB3aWxsIHdvcmsgZm9yIGRyb3Bkb3duIG1lbnVzIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4vL1xyXG4vLyA8Zm9ybT5cclxuLy8gICAuLi5cclxuLy8gICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCI+XHJcbi8vICAgICAgIDxzcGFuPkNvbG91cjwvc3Bhbj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIj5cclxuLy8gICAgICAgPGxhYmVsIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIiBmb3I9XCJjb2xvdXItcmVkXCI+XHJcbi8vICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCJcclxuLy8gICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4vLyAgICAgICAgIG5hbWU9XCJmLWNvbG91clwiXHJcbi8vICAgICAgICAgaWQ9Y29sb3VyLXJlZFxyXG4vLyAgICAgICAgIHZhbHVlPVwicmVkXCJcclxuLy8gICAgICAgPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgLi4uXHJcbi8vIDwvZm9ybT5cclxuXHJcbi8vIENTUyBzaG91bGQgYmUgc2V0IHVwIHRvIGhpZGUgdGhlIGlucHV0IHRhZ3MgYW5kIHJlbHkgb24gdGhlIGxhYmVscyB0byBzZWxlY3RcclxuLy8gdGhlIHJhZGlvIGJ1dHRvbi5cclxuLy9cclxuLy8gRlVOQ1RJT05TOlxyXG4vLyAtLS0tLS0tLS0tXHJcbi8vICAtIFdoZW4gdXNlciBjbGlja3Mgb24gdGhlIGRyb3Bkb3duIG1lbnUsIGV4cGFuZCB0aGUgbGlzdCBvZiBvcHRpb25zLlxyXG4vLyAgLSBXaGVuIHVzZXIgcHJlc3NlcyBhbiBvcHRpb24sIGhpZ2hsaWdodCB0aGF0IG9wdGlvbiwgdXBkYXRlIHRoZVxyXG4vLyAgICBidXR0b24ncyBpbm5lciB0ZXh0IHRvIG1hdGNoIHRoYXQgb2ZmIHRoZSBidXR0b24gdGV4dC5cclxuLy8gIC0gV2hlbiB1c2VyIGNsaWNrcyBvdXRzaWRlLCBjbG9zZSBhbGwgbWVudXMuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEcm9wZG93bk1lbnUgQ2xhc3NcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTWVudSB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGN1c3RvbSBkcm9wZG93biBtZW51cy5cclxuICAgKiBUaGVzZSBpbmNsdWRlOlxyXG4gICAqICAtIFRvZ2dsZSBvcGVuL2Nsb3NlIG9mIHRoZSBtZW51IG9uIGNsaWNraW5nIHRoZSBidXR0b25cclxuICAgKiAgLSBDbG9zZSB0aGUgbWVudSBvbiBjbGlja2luZyBvdXRzaWRlXHJcbiAgICogIC0gT24gc2VsZWN0aW5nIGFuIGl0ZW06XHJcbiAgICogICAgLSBIaWdobGlnaHQgdGhhdCBpdGVtXHJcbiAgICogICAgLSBDaGFuZ2UgdGhlIHRleHQgb2YgdGhlIGJ1dHRvbiB0aGUgdGV4dCBvZiB0aGUgb3B0aW9uIHNlbGVjdGVkXHJcbiAgICpcclxuICAgKiBOb3RlOiB0aGlzIGNsYXNzIHdpbGwgbm90IGhhbmRsZSBBUEkgY2FsbHMuXHJcbiAgICovXHJcblxyXG4gIGRkTWVudXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJkcm9wZG93bi1tZW51XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBBZGRzIGZ1bmN0aW9uIHRvIGNsb3NlIGFsbCBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgZWxlbWVudFxyXG4gICAgdGhpcy5jbG9zZV9tZW51KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIGZ1bmN0aW9ucyBmb3IgYWxsIG1lbnUgZWxlbWVudHMuXHJcbiAgICBmb3IgKGxldCBtZW51SWQgPSAwOyBtZW51SWQgPCB0aGlzLmRkTWVudXMubGVuZ3RoOyBtZW51SWQrKykge1xyXG4gICAgICB0aGlzLmJ1aWxkX21lbnUodGhpcy5kZE1lbnVzW21lbnVJZF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xvc2VfbWVudSgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIGFsbCBtZW51cyB3aGVuIGNsaWNrZWQgb3V0c2lkZSBvbiBhbm90aGVyIGZpbHRlciBidXR0b24uXHJcbiAgICAgKiBBbHNvIGNhcnJpZXMgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIG5hdi1tZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IGZpbHRlckJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBvcHRpb25MaXN0cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgb3B0aW9uTGlzdHNbaWR4XS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmF2U3ViTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkQnRuID0gZmlsdGVyQnRuc1tpXTtcclxuXHJcbiAgICAgIHNlbGVjdGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2xvc2UgbmF2IG1lbnVzXHJcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbmF2U3ViTWVudXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgbmF2U3ViTWVudXNbaWR4XS5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGFsbCBvdGhlciBmaWx0ZXJzIGxpc3RzXHJcbiAgICAgICAgLy8gRWFjaCBidXR0b24gYW5kIHRoZWlyIGNoaWxkIGVsZW1lbnRzIGNvbnRhaW4gdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFwiZmlsdGVyLWZvclwiLlxyXG4gICAgICAgIC8vIExpa2V3aXNlLCBlYWNoIGRyb3Bkb3duIG9wdGlvbiBkaXYgY29udGFpbiB0aGUgc2FtZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBUaGlzIGNoZWNrcyBmb3IgdGhlIGJ1dHRvbiBwcmVzc2VkLCBpZiBpdHMgXCJmaWx0ZXItZm9yXCIgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gbWF0Y2hlcyB0aGF0IG9mIGl0cyBkcm9wZG93biBvcHRpb25zLiBpZiBub3QsIHRoZW4gY2xvc2UuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWx0ZXJCdG5zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gZmlsdGVyQnRuc1tqXTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW0uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKSAhPVxyXG4gICAgICAgICAgICBzZWxlY3RlZEJ0bi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gSnVzdCBpbmNhc2UgdGhlIHN0cnVjdHVyZSBjaGFuZ2VzLCBhbmQgdGhlIG5leHQgc2libGluZyBpbnMgbm90IHRoZSBvcHRpb25zIGxpc3RcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nIS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmc/LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYnVpbGRfbWVudShkZE1lbnU6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBmdW5jdGlvbmFsaXR5IG9udG8gZWFjaCBkcm9wZG93biBtZW51LlxyXG4gICAgICovXHJcbiAgICBjb25zdCBvcHRpb25zQnRuID0gZGRNZW51LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIlxyXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0Q29udGFpbmVyID0gZGRNZW51LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RJdGVtcyA9IG9wdGlvbnNMaXN0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxMYWJlbEVsZW1lbnQ+O1xyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIG9uIHRoZSBkcm9wZG93biBidXR0b24gd2hpY2ggd2lsbCBvcGVuL2Nsb3NlIHRoZSBvcHRpb25zXHJcbiAgICAvLyBsaXN0LlxyXG4gICAgb3B0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgb3B0aW9uc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBzZXR1cCBmb3IgZWFjaCBvcHRpb25cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBvcHRpb25JdGVyID0gMDtcclxuICAgICAgb3B0aW9uSXRlciA8IG9wdGlvbnNMaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICBvcHRpb25JdGVyKytcclxuICAgICkge1xyXG4gICAgICBsZXQgbGlzdEl0ZW0gPSBvcHRpb25zTGlzdEl0ZW1zW29wdGlvbkl0ZXJdO1xyXG4gICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaGlnaGxpZ2h0IGZyb20gYWxsIGxpc3QgaXRlbXMgYW5kIHJlYXBwbHkgdG8gdGhlIHNlbGVjdGVkXHJcbiAgICAgICAgLy8gbGlzdCBpdGVtIG9ubHlcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgbGV0IG9wdGlvblN1Ykl0ZXIgPSAwO1xyXG4gICAgICAgICAgb3B0aW9uU3ViSXRlciA8IG9wdGlvbnNMaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgb3B0aW9uU3ViSXRlcisrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBvcHRpb25zTGlzdEl0ZW1zW29wdGlvblN1Ykl0ZXJdLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWwtLXNlbGVjdGVkXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbC0tc2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uIHRvIHRoZSB0ZXh0IG9mIHRoZSBzZWxlY3RlZCBpdGVtXHJcbiAgICAgICAgb3B0aW9uc0J0bi5pbm5lclRleHQgPSBsaXN0SXRlbS5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0IHZhbHVlc1xyXG4gICAgICAgIC8vIENsb3NlIHRoZSBtZW51XHJcbiAgICAgICAgb3B0aW9uc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDEvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIE5hdmlnYXRpb24gYmFyLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIDEuIENvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGUgbmF2aWdhdGlvbiBzdWItbWVudXMgYW5kIGNvbnRyb2xzIGhvdyBhbmQgd2hlblxyXG4vLyAgICBpdCBleHBhbmRzIGFuZCBjbG9zZXMuXHJcbi8vIDIuIENvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGUgYmFza2V0IGFuZCBzbyBzbyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZVxyXG4vLyAgICBiYXNrZXQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZ1bmN0aW9ucyBmb3IgdGhlIG5hdmlnYXRpb24uXHJcbiAgICogVGhlc2UgaW5jbHVkZTpcclxuICAgKiAgLSBDbG9zaW5nIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZS5cclxuICAgKiAgLSBPcGVuaW5nL0Nsb3NpbmcgbWVudXMgb24gY2xpY2tcclxuICAgKi9cclxuICBtZW51QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZfX29wdGlvbl9fYnRuXCIpO1xyXG4gIG5hdlN1Yk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiKTtcclxuICB0b2dnbGVTaG93TmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3RvZ2dsZV9fYnRuXCIpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBBZGRzIGZ1bmN0aW9uIHRvIGNsb3NlIGFsbCBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgZWxlbWVudFxyXG4gICAgdGhpcy5jbG9zZV9tZW51KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIGZ1bmN0aW9ucyBmb3IgYWxsIG1lbnUgZWxlbWVudHMuXHJcbiAgICBmb3IgKGNvbnN0IG1lbnVCdG4gb2YgdGhpcy5tZW51QnRucyBhcyBhbnkpIHtcclxuICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zdWJNZW51Q3RybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIHJlc3BvbnNpdmUgZnVuY3Rpb25zIGZvciB0aGUgdG9nZ2xlIGJ1dHRvbnMuXHJcbiAgICB0aGlzLm5hdl90b2dnbGVfYnRuKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjbG9zZV9tZW51KCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjbG9zZXMgYWxsIG1lbnVzIHdoZW4gY2xpY2tlZCBvdXRzaWRlIHByIGFub3RoZXIgbmF2IG1lbnUuXHJcbiAgICAgKiBBbHNvIHdpbGwgY2xvc2UgYWxsIGZpbHRlciBtZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIENsb3NlIGFsbCBuYXYtbWVudXMgb24gY2xpY2sgb3V0c2lkZVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgdGhpcy5uYXZTdWJNZW51cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgdGhpcy5uYXZTdWJNZW51c1tpZHhdLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25MaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lbnVCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1lbnVCdG4gPSB0aGlzLm1lbnVCdG5zW2ldO1xyXG5cclxuICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIENsb3NlIGFsbCBkcm9wZG93bi1tZW51c1xyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uTGlzdCBvZiBvcHRpb25MaXN0cyBhcyBhbnkpIHtcclxuICAgICAgICAgIG9wdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG9zZSBvdGhlciBuYXZpZ2F0aW9uIG1lbnVzXHJcbiAgICAgICAgLy8gRWFjaCBidXR0b24gYW5kIHRoZWlyIGNoaWxkIGVsZW1lbnRzIHdpbGwgY29udGFpbiB0aGUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gXCJmaWx0ZXItZm9yXCIuXHJcbiAgICAgICAgLy8gTGlrZXdpc2UsIGVhY2ggZHJvcGRvd24gbWVudSBjb250YWluIHRoZSBzYW1lIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFRoaXMgY2hlY2tzIGZvciB0aGUgYnV0dG9uIHByZXNzZWQsIGlmIGl0cyBcImZpbHRlci1mb3JcIiBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBtYXRjaGVzIHRoYXQgb2YgaXRzIGRyb3Bkb3duIG9wdGlvbnMuIGlmIG5vdCwgdGhlbiBjbG9zZS5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWVudUJ0bnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSB0aGlzLm1lbnVCdG5zW2pdO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbS5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpICE9XHJcbiAgICAgICAgICAgIG1lbnVCdG4uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZz8uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdWJNZW51Q3RybChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aWxsIGhhbmRsZSBjbGljayBldmVudHMgb24gdGhlIG5hdmlnYXRpb24gZm9yIGV4cGFuZGluZ1xyXG4gICAgICogYW5kIGNvbGxhcHNpbmcgdGhlIHN1Yi1tZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnRzXHJcbiAgICB0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdGFyZ2V0Q2xhc3NlcyA9IHRhcmdldC5jbGFzc0xpc3Q7XHJcbiAgICBsZXQgc3ViTWVudTogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHRhcmdldENsYXNzZXMuY29udGFpbnMoXCJuYXYtc3ViLXByb2R1Y3RzXCIpKSB7XHJcbiAgICAgIHN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLm5hdi1zdWItcHJvZHVjdHNcIlxyXG4gICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXRDbGFzc2VzLmNvbnRhaW5zKFwibmF2LXN1Yi1yb29tc1wiKSkge1xyXG4gICAgICBzdWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy5uYXYtc3ViLXJvb21zXCJcclxuICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFwiTmF2aWdhdGlvbiBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBleHBhbmRlZCA9IHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChleHBhbmRlZCkge1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIik7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiKTtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBuYXZfdG9nZ2xlX2J0bigpIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgbmF2aWdhdGlvbiB0b2dnbGUgYnV0dG9uIC0gYSByZXNwb25zaXZlXHJcbiAgICAgKiBmZWF0dXJlIHZpZXdhYmxlIHdoZW4gdGhlIHNjcmVlbiB3aWR0aCBpcyBzbWFsbCBlbm91Z2guXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBvcHRpb25zTGlzdCA9IFtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fb3B0aW9uXCIpLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfX2FjY291bnQtYmFza2V0JylcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy50b2dnbGVTaG93TmF2QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zTGlzdFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgb3B0aW9uc0xpc3RbaV1bal0uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcHRpb24tLXNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAxNi8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBVUlBPU0VcclxuLy8gLS0tLS0tLVxyXG4vLyBFbmFibGVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBxdWFudGl0eSBjb21wb25lbnQsIHRodXMgZW5hYmxpbmcgKy8tXHJcbi8vIGJ1dHRvbnMgdG8gY29udHJvbCB0aGUgbnVtYmVyIGluIHRoZSBpbnB1dCBib3guXHJcbi8vXHJcbi8vIFJFTEFURUQgRklMRVNcclxuLy8gLS0tLS0tLS0tLS0tLVxyXG4vLyBfcXVhbnRpdHkuc2Nzc1xyXG4vL1xyXG4vLyBIVE1MIEZPUk1BVFxyXG4vLyAtLS0tLS0tLS0tLVxyXG4vLyA8ZGl2IGNsYXNzPVwiYy1xdWFudGl0eVwiPlxyXG4vLyAgIDxidXR0b24gY2xhc3M9XCJjLXF1YW50aXR5X19idG5cIiBjb250cm9sPVwicXVhbnRpdHktZG93blwiPlxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJjLXF1YW50aXR5X19idG5fX3RleHRcIj4mIzQ1Ozwvc3Bhbj5cclxuLy8gICA8L2J1dHRvbj5cclxuLy8gICA8aW5wdXQgY2xhc3M9XCJjLXF1YW50aXR5X19pbnB1dFwiIHR5cGU9XCJudW1iZXJcIi8+XHJcbi8vICAgPGJ1dHRvbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0blwiIGNvbnRyb2w9XCJxdWFudGl0eS11cFwiPlxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJjLXF1YW50aXR5X19idG5fX3RleHRcIj4mIzQ1Ozwvc3Bhbj5cclxuLy8gICA8L2J1dHRvbj5cclxuLy8gPC9kaXY+XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBJbXBvcnRzXHJcbmltcG9ydCB7IFZhbGlkYXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBRdWFudGl0eUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIGZ1bmN0aW9uYWxpdHkgb250byB0aGUgcXVhbnRpdHkgY29tcG9uZW50IHRodXMgZW5hYmxpbmcgdGhlICsvLVxyXG4gICAqIGJ1dHRvbnMgdG8gY29udHJvbCB0aGUgbnVtYmVyIGluc2lkZSB0aGUgaW5wdXQgYm94LlxyXG4gICAqL1xyXG5cclxuICBjb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgIFwiYy1xdWFudGl0eVwiXHJcbiAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICovXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuX3NldF9lbGVtZW50cyh0aGlzLmNvbnRhaW5lcnNbY10pO1xyXG4gICAgICBjb25zdCBidG5Eb3duID0gZWxlbWVudHNbMF0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGJ0blVwID0gZWxlbWVudHNbMV0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGlucHV0Qm94ID0gZWxlbWVudHNbMl0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IG1pblZhbHVlID0gTnVtYmVyKGlucHV0Qm94LmdldEF0dHJpYnV0ZShcIm1pblwiKSk7XHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gTnVtYmVyKGlucHV0Qm94LmdldEF0dHJpYnV0ZShcIm1heFwiKSk7XHJcblxyXG4gICAgICB0aGlzLl9idWlsZF9taW51c19idXR0b24oYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgICB0aGlzLl9idWlsZF9wbHVzX2J1dHRvbihidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX2lucHV0X2JveChidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9zZXRfZWxlbWVudHMoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhIGNvbnRhaW5lciwgd2lsbCByZXR1cm4gdGhlIGJ1dHRvbnMgYW5kIGlucHV0IGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBidG5Eb3duID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICdidXR0b25bY29udHJvbD1cInF1YW50aXR5LWRvd25cIl0nXHJcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgYnRuVXAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvbltjb250cm9sPVwicXVhbnRpdHktdXBcIl0nXHJcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgaW5wdXRCb3ggPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCJpbnB1dC5jLXF1YW50aXR5X19pbnB1dFwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgcmV0dXJuIFtidG5Eb3duLCBidG5VcCwgaW5wdXRCb3hdO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfbWludXNfYnV0dG9uKFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uIGNsaWNraW5nIHRoZSBtaW51cyBidXR0b24sIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgYnV0IHdpbGwgcmVkdWNlXHJcbiAgICAgKiBieSBvbmUgdW50aWwgaXQgcmVhY2hlcyBpdHMgbWluaW11bSB2YWx1ZSwgYXQgd2hpY2ggcG9pbnQsIHRoZSBidXR0b25cclxuICAgICAqIGJlY29tZXMgZGlzYWJsZWQuIEFsc28gd2lsbCByZW1vdmUgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBmcm9tIHRoZSBwbHVzXHJcbiAgICAgKiBidXR0b24gaWYgaXQgaXMgbGVzcyB0aGFuIHRoZSBtYXhWYWx1ZS5cclxuICAgICAqL1xyXG5cclxuICAgIGJ0bkRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGJ0bkRvd24uZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgIT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgaW5wdXRCb3gudmFsdWUgPSBTdHJpbmcoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSAtIDEpO1xyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA8IG1heFZhbHVlKSB7XHJcbiAgICAgICAgICBidG5VcC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpID09PSBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF9wbHVzX2J1dHRvbihcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGlja2luZyB0aGUgcGx1cyBidXR0b24sIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgYnV0IHdpbGwgaW5jcmVhc2VkXHJcbiAgICAgKiBieSBvbmUgdW50aWwgaXQgcmVhY2hlcyBpdHMgbWF4aW11bSB2YWx1ZSwgYXQgd2hpY2ggcG9pbnQsIHRoZSBidXR0b25cclxuICAgICAqIGJlY29tZXMgZGlzYWJsZWQuIEFsc28gd2lsbCByZW1vdmUgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBmcm9tIHRoZSBtaW51c1xyXG4gICAgICogYnV0dG9uIGlmIGl0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgbWluVmFsdWUuXHJcbiAgICAgKi9cclxuXHJcbiAgICBidG5VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoYnRuVXAuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgIT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgaW5wdXRCb3gudmFsdWUgPSBTdHJpbmcoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSArIDEpO1xyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA+IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPT09IG1heFZhbHVlKSB7XHJcbiAgICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF9pbnB1dF9ib3goXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT25jZSBhIG5ldyB2YWx1ZSBoYXMgYmVlbiBlbnRlcmVkIGludG8gdGhlIGlucHV0IGJveCxcclxuICAgICAqIGRpc2FibGUvcmUtZW5hYmxlIHRoZSBwbHVzIGFuZCBtaW51cyBidXR0b25zIGluIGFjY29yZGFuY2Ugd2l0aCB3aGV0aGVyXHJcbiAgICAgKiB0aGUgdmFsdWUgaXMgZXF1YWwgdG8gdGhlIG1pbi9tYXggdmFsdWUgb3Igbm90LlxyXG4gICAgICovXHJcbiAgICBpbnB1dEJveC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihpbnB1dEJveC52YWx1ZSk7XHJcblxyXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdmFsdWUgaXMgdmFsaWQuIElmIG5vdCwgdXBkYXRlIGF0dHJpYnV0ZXMgdGhlIGhpZ2hsaWdodFxyXG4gICAgICAvLyB0aGlzIHRvIHRoZSB1c2VyIGFuZCBkaXNhYmxlIGJ1dHRvbnMuXHJcbiAgICAgIGlmIChWYWxpZGF0aW9uLmNoZWNrX2lmX3Bvc2l0aXZlX2ludCh2YWx1ZSkpIHtcclxuICAgICAgICAvLyBJbmNhc2UgdGhlIGJ1dHRvbnMgd2VyZSBwcmV2aW91c2x5IGRpc2FibGVkLCByZXNldCBieSByZS1lbmFibGluZ1xyXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcuXHJcbiAgICAgICAgYnRuRG93bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBidG5VcC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBpbnB1dEJveC5wYXJlbnRFbGVtZW50IS5yZW1vdmVBdHRyaWJ1dGUoJ2ludmFsaWQnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgYWdhaW5zdCB0aGUgbWluIHZhbHVlXHJcbiAgICAgICAgaWYgKHZhbHVlIDw9IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBhZ2FpbnN0IGJ0blVwJ3MgbWF4IHZhbHVlXHJcbiAgICAgICAgaWYgKHZhbHVlID49IG1heFZhbHVlKSB7XHJcbiAgICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBidG5VcC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHZhbHVlIGlzIGVpdGhlciA8IDAgb3IgYSBmbG9hdC5cclxuICAgICAgICBidG5Eb3duLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYnRuVXAuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBpbnB1dEJveC5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoJ2ludmFsaWQnLCAndHJ1ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAxMi8wMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBSZWdpc3RyYXRpb24gcGFnZXMuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIFdoZW4gcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCwgdXBkYXRlIHRoZSBhdHRyaWJ1dGUgb2YgdGhlIHBhc3N3b3JkIGVsZW1lbnRzXHJcbi8vIHRvIGBpbnZhbGlkPVwidHJ1ZVwiLiBUaGlzIHdpbGwgYWxsb3cgdGhlIHRoZSBDU1MgdG8gY2hhbmdlIHRoZSBib3JkZXJcclxuLy8gb2YgdGhlIHBhc3N3b3JkIGVsZW1lbnRzIHRvIHJlZCBhbmQgc2hvdyBhbiBlcnJvciBtZXNzYWdlIGZvciBhIGZldyBzZWNvbmRzLlxyXG4vL1xyXG4vLyBJZiBwYXNzd29yZHMgZG8gbm90IG1hdGNoLCB0aGVuIGFkZCB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHRvIHRoZSBzdWJtaXRcclxuLy8gYnV0dG9uLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyUGFzc3dvcmRDaGVjayB7XHJcbiAgLyoqIENoZWNrcyBpZiBwYXNzd29yZHMgbWF0Y2gsIGlmIHRoZXkgZG8gbm90LCB0aGVuIHVwZGF0ZSB0aGUgYXR0cmlidXRlXHJcbiAgICogb2YgdGhlIHBhc3N3b3JkIGVsZW1lbnRzIHdoaWNoIHdpbGwgaW4gdHVybiB1cGRhdGUgc2libGluZ3MgdG8gdGFrZSBvblxyXG4gICAqIHNvbWUgQ1NTIHN0eWxpbmcgKGNvbnRyb2xsZWQgdGhyb3VnaCBDU1MpLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcGFzc3dvcmRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInJlZ2lzdGVyLXBhc3N3b3JkXCJcclxuICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb25maXJtUGFzc0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwicmVnaXN0ZXItcGFzc3dvcmQtY29uZmlybVwiXHJcbiAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInJlZ2lzdGVyLXN1Ym1pdFwiXHJcbiAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGVycm9yTXNnRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJyZWdpc3Rlci1lcnJvcnNcIlxyXG4gICkgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKiBDb25zdHJ1Y3RvciAqL1xyXG4gICAgdGhpcy5zZXRfa2V5YmluZGVycygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBjaGVja19wYXNzd29yZHMoKSB7XHJcbiAgICAvKiogQ2hlY2tzIGlmIHRoZSBwYXNzd29yZHMgbWF0Y2gsIGFuZCBpZiBzbywgY2hlY2sgdGhlaXIgY29tcGxleGl0eS4gKi9cclxuICAgIGNvbnN0IHBhc3N3b3JkVHh0ID0gdGhpcy5wYXNzd29yZEVsZW0/LnZhbHVlO1xyXG4gICAgY29uc3QgY29uZmlybVBhc3NUeHQgPSB0aGlzLmNvbmZpcm1QYXNzRWxlbT8udmFsdWU7XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkVHh0ICYmIGNvbmZpcm1QYXNzVHh0KSB7XHJcbiAgICAgIGlmIChwYXNzd29yZFR4dCA9PT0gY29uZmlybVBhc3NUeHQpIHtcclxuICAgICAgICAvLyBDaGVjayBjb21wbGV4aXR5OlxyXG4gICAgICAgIC8vIExlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IDYgYW5kIG11c3QgY29udGFpbiBhdCBsZWFzdCAxIGludGVnZXIuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcGFzc3dvcmRUeHQubGVuZ3RoID49IDYgJiZcclxuICAgICAgICAgIHBhc3N3b3JkVHh0Lm1hdGNoKC9bMC05XS8pICYmXHJcbiAgICAgICAgICBwYXNzd29yZFR4dC5tYXRjaCgvW0Etel0vKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JNc2dFbGVtLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nIGFuZCBjb250YWluIGF0IGxlYXN0IDEgbnVtYmVyLlwiO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVycm9yTXNnRWxlbS50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIjtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBzZXRfa2V5YmluZGVycygpIHtcclxuICAgIHRoaXMuY29uZmlybVBhc3NFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlX2VsZW1lbnRfYXR0cnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSB1cGRhdGVfZWxlbWVudF9hdHRycygpIHtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgYXR0cmlidXRlcyBvZiB0aGUgaW5wdXQgYW5kIGJ1dHRvbiBlbGVtZW50cyB0byBhY2NvcmRhbmNlXHJcbiAgICAgKiB3aGV0aGVyIG9yIG5vdCB0aGUgcGFzc3dvcmRzIG1hdGNoLlxyXG4gICAgICovXHJcbiAgICBpZiAodGhpcy5jaGVja19wYXNzd29yZHMoKSkge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkRWxlbS5yZW1vdmVBdHRyaWJ1dGUoXCJpbnZhbGlkXCIpO1xyXG4gICAgICB0aGlzLmNvbmZpcm1QYXNzRWxlbS5yZW1vdmVBdHRyaWJ1dGUoXCJpbnZhbGlkXCIpO1xyXG4gICAgICB0aGlzLnN1Ym1pdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRFbGVtLnNldEF0dHJpYnV0ZShcImludmFsaWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICB0aGlzLmNvbmZpcm1QYXNzRWxlbS5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgdGhpcy5zdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwOC8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIE1hbmFnZXMgdGhlIHNlYXJjaCBmaWx0ZXJzIG9uIHRoZSBwYWdlLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIFJlc3BvbnNpYmxlIGZvciBjYWxsaW5nIHRoZSBzZWFyY2ggQVBJIHdoaWNoIHdpbGwgZmlsdGVyIHJlc3VsdCBiYXNlZCBvblxyXG4vLyB3aGF0IHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB1c2luZyB0aGUgZmlsdGVycy5cclxuLy9cclxuLy8gV2lsbCB1c2UgdGhlIG5hdmlnYXRpb24gc2VhcmNoIGJhcidzIGZvcm0gdG8gaW50ZXJhY3Qgd2l0aCB0aGUgQVBJLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlcnMge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgZXhwYW5kIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBiYXIgYW5kIHRoZSBmb3JtIGVsZW1lbnQgdG8gYWxsb3cgaXQgdG9cclxuICAgKiB0YWtlIGluIHRoZSBmaWx0ZXIgb3B0aW9ucyBhcyBwYXJ0IG9mIHRoZSBHRVQgcmVxdWVzdCB3aGVuZXZlciBhIHVzZXJcclxuICAgKiBpbml0aWF0ZXMgYSBzZWFyY2guXHJcbiAgICpcclxuICAgKiBDYWxscyB0aGUgQVBJIHRvIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yIGRvZXMgbm90IHJlcXVpcmUgYW55IGFyZ3VtZW50cyBhbmQgd2lsbCBpbnN0ZWFkIHVzZVxyXG4gICAgICogZWxlbWVudHMgZnJvbSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICB0aGlzLl9leHBhbmRfbmF2X3NlYXJjaCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2V4cGFuZF9uYXZfc2VhcmNoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBhbmRzIG9uIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBlbGVtZW50cyBzbyB0aGF0IHdoZW4gc2VuZGluZyBhIEdFVFxyXG4gICAgICogcmVxdWVzdCwgZmlsdGVycyB3aWwgYmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgY29uc3QgbmF2Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwibmF2X19zZWFyY2hcIlxyXG4gICAgKVswXSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gQWRkIGhpZGRlbiBpbnB1dHMgdG8gY29udGFpbiB0aGUgdmFsdWVzIG9uIHRoZSBmaWx0ZXJzLlxyXG4gICAgY29uc3QgaW5wdXROYW1lcyA9IFtcImYtbWluUHJpY2VcIiwgXCJmLW1heFByaWNlXCIsIFwiZi1jYXRlZ29yeVwiLCBcImYtY29sb3VyXCJdO1xyXG4gICAgZm9yIChjb25zdCBpbnB1dE5hbWUgb2YgaW5wdXROYW1lcykge1xyXG4gICAgICBjb25zdCBoaWRkZW5JbnB1dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgIFwiSU5QVVRcIlxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGhpZGRlbklucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpbnB1dE5hbWUpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXROYW1lKTtcclxuICAgICAgbmF2Rm9ybS5hcHBlbmRDaGlsZChoaWRkZW5JbnB1dE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0cyB3aGVuIGEgZmlsdGVyIGlzIHNlbGVjdGVkXHJcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgICBmb3IgKGxldCBvcHQgPSAwOyBvcHQgPCBkcm9wZG93bk9wdGlvbnMubGVuZ3RoOyBvcHQrKykge1xyXG4gICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRyb3Bkb3duT3B0aW9uc1tvcHRdO1xyXG4gICAgICBsZXQgaGlkZGVuSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRyb3Bkb3duT3B0aW9uLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikpIHtcclxuICAgICAgICBjYXNlIFwibWluLXByaWNlXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImYtbWluUHJpY2VcIlxyXG4gICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1heC1wcmljZVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjb2xvdXJcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmLWNvbG91clwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaGlkZGVuSW5wdXQpIHtcclxuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCEudmFsdWUgPSBkcm9wZG93bk9wdGlvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIS50ZXh0Q29udGVudCE7XHJcblxyXG4gICAgICAgICAgLy8gQ2FsbHMgdGhlIHNlYXJjaCByZXN1bHQgQVBJIGFuZCB0aGVuIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgICAgICAgIGNvbnN0IEFQSVBhdGggPSB0aGlzLl9BUElfcGF0aCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpIGFzIFtdO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcl9yZXN1bHRzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX0FQSV9wYXRoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIEFQSSBocmVmIHBhdGggd2hlcmUgdGhlIHJlcXVlc3Qgd2lsbCBiZSBzZW50LlxyXG4gICAgICogVGhpcyBpbXBsZW1lbnRzIHRoZSBmaWx0ZXJzIHdpdGhpbiB0aGUgYWN0dWFsIFVSTC5cclxuICAgICAqL1xyXG4gICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiL3NlYXJjaC9cIiwgXCIvc2VhcmNoLXJlc3VsdHMvXCIpO1xyXG5cclxuICAgIGNvbnN0IGhpZGRlbkluTWluUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluTWF4UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ29sb3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1jb2xvdXJcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGlmIChoaWRkZW5Jbk1pblByaWNlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1taW5QcmljZT1cIiArIGhpZGRlbkluTWluUHJpY2UudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLW1pblByaWNlPS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtbWluUHJpY2U9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5NYXhQcmljZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtbWF4UHJpY2U9XCIgKyBoaWRkZW5Jbk1heFByaWNlLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1tYXhQcmljZT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLW1heFByaWNlPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluQ2F0ZWdvcnkudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLWNhdGVnb3J5PVwiICsgaGlkZGVuSW5DYXRlZ29yeS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtY2F0ZWdvcnk9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1jYXRlZ29yeT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5JbkNvbG91ci52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtY29sb3VyPVwiICsgaGlkZGVuSW5Db2xvdXIudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLWNvbG91cj0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLWNvbG91cj0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBocmVmO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2ZpbHRlcl9yZXN1bHRzKEFQSVJlc3VsdHM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlcnMgdGhlIHJlc3VsdHMgb24gdGhlIHNlYXJjaCBwYWdlIGluIGFjY29yZGFuY2UgdG8gdGhlIGRhdGFcclxuICAgICAqIHJldHJpZXZlZCBmcm9tIHRoZSBzZWFyY2ggQVBJLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHMnKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9yaWdSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0c19fcmVzdWx0Jyk7XHJcblxyXG4gICAgbGV0IHZhbGlkUHJvZHVjdHMgPSBbXTtcclxuICAgIHJlc3VsdDogSlNPTjtcclxuICAgIGZvciAoY29uc3QgcmVzdWx0IGluIEFQSVJlc3VsdHMpIHtcclxuICAgICAgdmFsaWRQcm9kdWN0cy5wdXNoKEFQSVJlc3VsdHNbcmVzdWx0XS5wcm9kdWN0X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBySUQgPSAwOyBySUQ8b3JpZ1Jlc3VsdHMubGVuZ3RoOyBySUQrKykge1xyXG4gICAgICBpZiAodmFsaWRQcm9kdWN0cy5pbmNsdWRlcyhOdW1iZXIob3JpZ1Jlc3VsdHNbcklEXS5nZXRBdHRyaWJ1dGUoJ0lEJykhKSkpIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjgvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbnRhaW5zIGltcG9ydHMgb2YgYWxsIHRoZSBtYWluIGNsYXNzZXMuXHJcbi8vIEJlaGF2ZXMgYXMgdGhlIG1haW4gaHViIGZvciB0aGUganMgYnVuZGxlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudVwiO1xyXG5pbXBvcnQgeyBRdWFudGl0eUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcXVhbnRpdHlcIjtcclxuaW1wb3J0IHsgU2VhcmNoRmlsdGVycyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoX2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgRXh0ZW5kUHJvZHVjdFBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IENhcm91c2VsSW1ncyB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2Fyb3VzZWwtaW1nc1wiO1xyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5pbXBvcnQgeyBCYXNrZXRQYWdlIH0gZnJvbSBcIi4vcGFnZXMvYmFza2V0L2Jhc2tldFwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlclBhc3N3b3JkQ2hlY2sgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JlZ2lzdGVyLXZhbGlkYXRpb25cIjtcclxuXHJcbi8vIEJ1aWxkIHRoZSBuYXZpZ2F0aW9uXHJcbm5ldyBOYXZpZ2F0aW9uKCk7XHJcblxyXG4vLyBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBiYXNrZXRcclxubmV3IEJhc2tldFN0YXRlKCk7XHJcblxyXG4vLyBCdWlsZCB0aGUgZHJvcGRvd24gbWVudVxyXG5uZXcgRHJvcGRvd25NZW51KCk7XHJcblxyXG4vLyBCdWlsZCB0aGUgc2VhcmNoIGZpbHRlcnNcclxubmV3IFNlYXJjaEZpbHRlcnMoKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFBBR0UgU1BFQ0lGSUMgSkFWQVNDUklQVFxyXG5jb25zdCBDVVJSRU5UX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuaWYgKENVUlJFTlRfVVJMLnNlYXJjaCgvXFwvcHJvZHVjdHNcXC9bMC05XXsxLH0vKSAhPSAtMSkge1xyXG4gIC8vIFByb2R1Y3QgUGFnZVxyXG4gIG5ldyBFeHRlbmRQcm9kdWN0UGFnZSgpO1xyXG4gIG5ldyBRdWFudGl0eUNvbXBvbmVudCgpO1xyXG4gIG5ldyBDYXJvdXNlbEltZ3MoKTtcclxufSBlbHNlIGlmIChDVVJSRU5UX1VSTC5pbmNsdWRlcyhcIi9iYXNrZXQvXCIpKSB7XHJcbiAgLy8gQmFza2V0IFBhZ2VcclxuICBuZXcgQmFza2V0UGFnZSgpO1xyXG59IGVsc2UgaWYgKENVUlJFTlRfVVJMLmluY2x1ZGVzKFwidXNlci9yZWdpc3RlclwiKSkge1xyXG4gIC8vIEFjY291bnQgUmVnaXN0cmF0aW9uIHBhZ2VcclxuICBuZXcgUmVnaXN0ZXJQYXNzd29yZENoZWNrKCk7XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwNS8wMS8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIFRoZSBiYXNrZXQgcGFnZS5cclxuLy9cclxuLy8gRlVOQ1RJT05BTElUWVxyXG4vLyAtIENhbGxzIHRoZSBiYXNrZXQtaW5mby1BUEkgd2hlcmUgdXNpbmcgdGhlIGxvY2FsIHN0b3JhZ2UgaXQgaXMgYWJsZSB0byBzZW5kXHJcbi8vICAgYSBHRVQgcmVxdWVzdCB0byB0ZWggQVBJIHNpdGUgdXNpbmcgdGhlIHByaW1hcnkga2V5cyBvZiB0aGUgaXRlbXMgaW4gdGhlXHJcbi8vICAgYmFza2V0LlxyXG4vLyAtIEJ1aWxkcyBwYXJ0IG9mIHRoZSBET00gd2hpY2ggd2lsbCBkaXNwbGF5IGluZm9ybWF0aW9uIHJlZ2FyZGluZyB3aGF0IGlzIGluXHJcbi8vICAgYmFza2V0LlxyXG4vLyAtIFNldHMga2V5IGJpbmRlcnMgb24gdGhlIHF1YW50aXR5IG9wdGlvbiBhbmQgXCJ4XCIgb3B0aW9uIHNvIHRoYXQgaXQgdXBkYXRlc1xyXG4vLyAgIHRoZSBiYXNrZXQuXHJcbi8vIC0gVXBkYXRlcyB0b3RhbHMgc2VjdGlvbiBvbiBsb2FkIGlmIHRoZXJlIGlzIHNvbWV0aGluZyBpbiB0aGUgYmFza2V0LlxyXG4vLyAtIFNldCBrZXkgYmluZGVycyBzbyB0aGF0IHdoZW5ldmVyIHRoZXJlIGlzIGEgY2hhbmdlIHRvIHRoZSBiYXNrZXQgaXRlbXMsXHJcbi8vICAgdGhlIHRvdGFscyB3aWxsIGFsc28gdXBkYXRlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gSU1QT1JUU1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IE51bWJlckZvcm1hdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbnVtYmVyX2Zvcm1hdFwiO1xyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9iYXNrZXQtaXRlbXNcIjtcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWFudGl0eVwiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIEJhc2tldFBhZ2UgZXh0ZW5kcyBCYXNrZXRTdGF0ZSB7XHJcbiAgLyoqXHJcbiAgICogV2lsbCBidWlsZCBlbGVtZW50cyBvbnRvIGJhc2tldCBwYWdlIHVzaW5nIGFuIEFQSSB0byByZXRyaWV2ZVxyXG4gICAqIGluZm9ybWF0aW9uIG9uIHByb2R1Y3RzIGN1cnJlbnRseSBpbiB0aGUgdXNlcidzIGJhc2tldCAoaW5mb3JtYXRpb25cclxuICAgKiBzdG9yZWQgaW4gbG9jYWwgc3RvcmFnZSlcclxuICAgKi9cclxuXHJcbiAgLy8gVGhlIG1haW4gbG9jYXRpb24gYXMgdG8gd2hlcmUgZWFjaCBwcm9kdWN0IHdpbGwgYmUgaW5zZXJ0ZWQgZnJvbSB0aGVcclxuICAvLyB1c2VyJ3MgYmFza2V0LlxyXG4gIHN1bW1hcnlJdGVtc1BhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJiYXNrZXQtc3VtbWFyeS1kYXRhXCJcclxuICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBiYXNrZXRJdGVtczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIHByb2Nlc3MgaW4gd2hpY2ggdGhlIGJhc2tldCBwYWdlIERPTSBpcyBidWlsZC5cclxuICAgICAqL1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGlmICh0aGlzLml0ZW1zICE9IG51bGwgJiYgdGhpcy5pdGVtcyAhPSBcInt9XCIpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gSlNPTi5wYXJzZSh0aGlzLml0ZW1zKSkge1xyXG4gICAgICAgIHRoaXMuYmFza2V0SXRlbXMucHVzaChrZXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBiYXNrZXRJdGVtc1N0ciA9IHRoaXMuYmFza2V0SXRlbXMuam9pbihcIixcIik7XHJcblxyXG4gICAgICAvLyBDYWxsIEFQSVxyXG4gICAgICBjb25zdCBBUElQYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcclxuICAgICAgICAvYmFza2V0LiovLFxyXG4gICAgICAgIFwiYmFza2V0LWluZm8tQVBJLz9wa3M9XCIgKyBiYXNrZXRJdGVtc1N0clxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCBBUElSZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgaWYgKEFQSVJlc3BvbnNlLnByb2R1Y3RzSW5mbykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkX2Jhc2tldF9zdW1tYXJ5KEFQSVJlc3BvbnNlLnByb2R1Y3RzSW5mbyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX2Jhc2tldF9zdW1tYXJ5KGFsbFByb2R1Y3RzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgZWFjaCBlbGVtZW50IGludG8gdGhlIERPTSBpbnNpZGUgdGhlIHRhcmdldCBwYXJlbnQgY29udGFpbmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBwcm9kdWN0UGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL2Jhc2tldC4qLywgXCJwcm9kdWN0cy9cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhbGxQcm9kdWN0c1tpXTtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBOdW1iZXIoSlNPTi5wYXJzZSh0aGlzLml0ZW1zKVtwcm9kdWN0LnByb2R1Y3RJZF0pO1xyXG5cclxuICAgICAgLy8gRGl2IHRvIGNvbnRhaW4gYWxsIHByb2R1Y3QgZWxlbWVudHMsIHdoaWNoIHdpbGwgdGhlbiBiZSBhcHBlbmRlZFxyXG4gICAgICAvLyBpbnRvIHRoZSBwYXJlbnQgZWxlbWVudC5cclxuICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFibGVfX3Jvd1wiO1xyXG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwicHJvZHVjdC1pZFwiLCBwcm9kdWN0LnByb2R1Y3RJZCk7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IEltYWdlIEVtYmVkZGVkIGluIExpbmsgRWxlbWVudFxyXG4gICAgICBjb25zdCBpbWdBVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIGltZ0FUYWcuY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGQgdGFibGVfX2ZpZWxkXCI7XHJcbiAgICAgIGltZ0FUYWcuaHJlZiA9IHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIGltZ0FUYWcuc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LWltYWdlXCIpO1xyXG4gICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaW1nRWxlbS5zcmMgPSBwcm9kdWN0LmltYWdlO1xyXG4gICAgICBpbWdFbGVtLmFsdCA9IFwiSW1hZ2Ugb2YgXCIgKyBwcm9kdWN0LnByb2R1Y3ROYW1lO1xyXG4gICAgICBpbWdFbGVtLmNsYXNzTmFtZSA9IFwidGFibGVfX2ZpZWxkIHRhYmxlX19maWVsZC0taW1nXCI7XHJcbiAgICAgIGltZ0FUYWcuYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IE5hbWVcclxuICAgICAgY29uc3QgbmFtZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgbmFtZUVsZW0uY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGRcIjtcclxuICAgICAgbmFtZUVsZW0uaHJlZiA9IHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIG5hbWVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1uYW1lXCIpO1xyXG4gICAgICBuYW1lRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QucHJvZHVjdE5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IFN0b3JlXHJcbiAgICAgIGNvbnN0IHN0b3JlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBzdG9yZUVsZW0uY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGRcIjtcclxuICAgICAgc3RvcmVFbGVtLmhyZWYgPSBcIiNcIjtcclxuICAgICAgc3RvcmVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1zdG9yZVwiKTtcclxuICAgICAgc3RvcmVFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5zdG9yZU5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IENvbG91clxyXG4gICAgICBjb25zdCBjb2xvdXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgIGNvbG91ckVsZW0uY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGRcIjtcclxuICAgICAgY29sb3VyRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtY29sb3VyXCIpO1xyXG4gICAgICBjb2xvdXJFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5jb2xvdXJOYW1lO1xyXG5cclxuICAgICAgLy8gUXVhbnRpdHlcclxuICAgICAgLy8gTk9URTogVGhlIEhUTUwgZm9ybWF0IG11c3QgZm9sbG93IHRoZSBzdHJ1Y3R1cmUgZGVmaW5lZCBpbiB0aGUgcXVhbnRpdHlcclxuICAgICAgLy8gY29tcG9uZW50LlxyXG4gICAgICBjb25zdCBxdWFudGl0eUNvbnRhaW5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5IHRhYmxlX19maWVsZFwiO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uaWQgPSBcInByb2R1Y3QtXCIgKyBwcm9kdWN0LnByb2R1Y3RJZDtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicXVhbnRpdHlcIik7XHJcblxyXG4gICAgICBjb25zdCBxdWFudGl0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19pbnB1dFwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0Lm1pbiA9IFwiMFwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0LnN0ZXAgPSBcIjFcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5tYXggPSBwcm9kdWN0LmludmVudG9yeTtcclxuICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IGl0ZW1zLnRvU3RyaW5nKCk7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBhIHBvc2l0aXZlIGludGVnZXIgdGhlbiB0aGUgY2VydGFpbiB1cGRhdGVzXHJcbiAgICAgICAgLy8gd2lsbCB0YWtlIHBsYWNlLlxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1YW50aXR5SW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGlmIChWYWxpZGF0aW9uLmNoZWNrX2lmX3Bvc2l0aXZlX2ludChOdW1iZXIocXVhbnRpdHlJbnB1dC52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBncmVhdGVyIHRoYW4gdGhlIG1heCwgdGhlbiBzZXQgaXQgdG8gdGhlIG1heC5cclxuICAgICAgICAgIGxldCB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgIGlmICh2YWx1ZSA+IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCkpIHtcclxuICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IHF1YW50aXR5SW5wdXQubWF4O1xyXG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBsb2NhbCBzdG9yYWdlICh1c2VyJ3MgYmFza2V0KVxyXG4gICAgICAgICAgdGhpcy51cGRhdGVfc2luZ2xlX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHByaWNlXHJcbiAgICAgICAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSAodmFsdWUgKiBwcm9kdWN0LnByaWNlKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYmFza2V0IHRvdGFsc1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIG1pbnVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIG1pbnVzQnRuLnNldEF0dHJpYnV0ZShcImNvbnRyb2xcIiwgXCJxdWFudGl0eS1kb3duXCIpO1xyXG4gICAgICBtaW51c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX2FuX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHByb2R1Y3QucHJpY2UsIHByaWNlU3Bhbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBwbHVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIHBsdXNCdG4uc2V0QXR0cmlidXRlKFwiY29udHJvbFwiLCBcInF1YW50aXR5LXVwXCIpO1xyXG4gICAgICBwbHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5hZGRfYW5faXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgcHJvZHVjdC5wcmljZSwgcHJpY2VTcGFuKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbWludXNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIG1pbnVzQnRuU3Bhbi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiO1xyXG4gICAgICBtaW51c0J0blNwYW4udGV4dENvbnRlbnQgPSBcIi1cIjtcclxuXHJcbiAgICAgIGNvbnN0IHBsdXNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIHBsdXNCdG5TcGFuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI7XHJcbiAgICAgIHBsdXNCdG5TcGFuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcblxyXG4gICAgICBtaW51c0J0bi5hcHBlbmRDaGlsZChtaW51c0J0blNwYW4pO1xyXG4gICAgICBwbHVzQnRuLmFwcGVuZENoaWxkKHBsdXNCdG5TcGFuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKG1pbnVzQnRuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKHF1YW50aXR5SW5wdXQpO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQocGx1c0J0bik7XHJcblxyXG4gICAgICAvLyBQcmljZVxyXG4gICAgICBjb25zdCBwcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgcHJpY2VFbGVtLmNsYXNzTmFtZSA9IFwidGFibGVfX2ZpZWxkXCI7XHJcbiAgICAgIHByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtcHJpY2UtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgY29uc3QgcG91bmRJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHBvdW5kSS50ZXh0Q29udGVudCA9IFwiwqNcIjtcclxuICAgICAgcG91bmRJLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS1jdXJyZW5jeVwiKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHBvdW5kSSk7XHJcblxyXG4gICAgICBjb25zdCBwcmljZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgcHJpY2VTcGFuLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS12YWx1ZVwiKTtcclxuICAgICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgICAgTnVtYmVyKHByb2R1Y3QucHJpY2UpICogaXRlbXNcclxuICAgICAgKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHByaWNlU3Bhbik7XHJcblxyXG4gICAgICAvLyBSZW1vdmUgSXRlbSBCdXR0b25cclxuICAgICAgY29uc3QgcmVtb3ZlSXRlbVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uY2xhc3NOYW1lID0gXCJ0YWJsZV9faWNvblwiO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInJlbW92ZS1pdGVtXCIpO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vIE9uIHJlbW92YWwsIHVwZGF0ZSB0aGUgRE9NIGFuZCB0aGUgYmFza2V0L2xvY2FsIHN0b3JhZ2UgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVfd2hvbGVfaXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZW1vdmVJdGVtSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJXCIpO1xyXG4gICAgICByZW1vdmVJdGVtSS5jbGFzc05hbWUgPSBcImZhIGZhLXRpbWVzXCI7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLmFwcGVuZENoaWxkKHJlbW92ZUl0ZW1JKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHJlbW92ZUl0ZW1TcGFuKTtcclxuXHJcbiAgICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byB0YXJnZXQgZWxlbWVudC5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0FUYWcpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcmVFbGVtKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG91ckVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocXVhbnRpdHlDb250YWluZXJFbGVtKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlRWxlbSk7XHJcbiAgICAgIHRoaXMuc3VtbWFyeUl0ZW1zUGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICAvLyBBcHBseSB0aGUgSmF2YVNjcmlwdCB0byBlYWNoIHF1YW50aXR5IGNvbXBvbmVudC5cclxuICAgIG5ldyBRdWFudGl0eUNvbXBvbmVudCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSB1cGRhdGVfYmFza2V0X3RvdGFscygpIHtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgdG90YWxzIHNlY3Rpb24gaW4gdGhlIGJhc2tldCBwYWdlLlxyXG4gICAgICogVGhlIEhUTUwgZGVmYXVsdCBiZWhhdmlvciBpcyB0byBzZXQgdGhlIGxvYWRzIHRoZSBlbGVtZW50cyBhbmQgc2V0IHRoZVxyXG4gICAgICogdmFsdWVzIHRvIMKjMC4wMCBmb3IgZWFjaCBlbGVtZW50LlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHVwZGF0ZSB0aGUgdG90YWxzLlxyXG4gICAgICovXHJcbiAgICAvLyBCYXNrZXQgRWxlbWVudHMgaW4gdGhlIERPTVxyXG4gICAgY29uc3Qgc3VidG90YWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtc3VidG90YWxcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB2YXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtdmF0XCIpIVxyXG4gICAgICAuY2hpbGRyZW5bMV0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgY29uc3QgdG90YWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtdG90YWxcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gICAgLy8gSW5pdGlhbCBWYWx1ZVxyXG4gICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG5cclxuICAgIC8vIFJldHJpZXZlIGFsbCBlbGVtZW50cyB3aGVyZSB0aGVyZSBpcyBhIHByaWNlIGFuZCBpdGVyYXRpdmVseSB1cGRhdGVcclxuICAgIC8vIHRoZSB0b3RhbCBwcmljZS5cclxuICAgIGNvbnN0IHByaWNlRWxlbXMgPSBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtc3VtbWFyeS1kYXRhXCIpIVxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX19maWVsZD5bZmllbGQ9XCJwcm9kdWN0LXByaWNlLXZhbHVlXCJdJyk7XHJcblxyXG4gICAgZm9yIChsZXQgcHJpY2VJZHggPSAwOyBwcmljZUlkeCA8IHByaWNlRWxlbXMubGVuZ3RoOyBwcmljZUlkeCsrKSB7XHJcbiAgICAgIHRvdGFsUHJpY2UgKz0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcF90b19mbG9hdChcclxuICAgICAgICBwcmljZUVsZW1zW3ByaWNlSWR4XS50ZXh0Q29udGVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgRE9NIHdpbGwgdGhlIG5ldyB0b3RhbCBmaWd1cmVzLlxyXG4gICAgY29uc3Qgc3ViVG90YWwgPSB0b3RhbFByaWNlIC8gMS4yO1xyXG4gICAgY29uc3QgdmF0ID0gdG90YWxQcmljZSAtIHN1YlRvdGFsO1xyXG5cclxuICAgIHN1YnRvdGFsRWxlbS50ZXh0Q29udGVudCA9IHN1YlRvdGFsLnRvRml4ZWQoMik7XHJcbiAgICB2YXRFbGVtLnRleHRDb250ZW50ID0gdmF0LnRvRml4ZWQoMik7XHJcbiAgICB0b3RhbEVsZW0udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcCh0b3RhbFByaWNlKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgcmVtb3ZlX2FuX2l0ZW0oXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuIER1cmluZyB0aGUgcHJvY2VzcywgaXQgd2lsbCB1cGRhdGVcclxuICAgICAqIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCB1cGRhdGUgdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmcsXHJcbiAgICBwcmljZTogc3RyaW5nLFxyXG4gICAgcHJpY2VFbGVtOiBIVE1MRWxlbWVudFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LlxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlbW92ZV9pdGVtKE51bWJlcihwcm9kdWN0SWQpLCAxKTtcclxuICAgIHByaWNlRWxlbS50ZXh0Q29udGVudCA9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBhcmF0ZWRfMmRwKFxyXG4gICAgICBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwX3RvX2Zsb2F0KHByaWNlRWxlbS50ZXh0Q29udGVudCkgLSBOdW1iZXIocHJpY2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBhZGRfYW5faXRlbShcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC4gRHVyaW5nIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwcm9kdWN0SWQ6IHN0cmluZyxcclxuICAgIHByaWNlOiBzdHJpbmcsXHJcbiAgICBwcmljZUVsZW06IEhUTUxFbGVtZW50XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkX2l0ZW0oTnVtYmVyKHByb2R1Y3RJZCksIDEpO1xyXG4gICAgcHJpY2VFbGVtLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgIE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBfdG9fZmxvYXQocHJpY2VFbGVtLnRleHRDb250ZW50KSArIE51bWJlcihwcmljZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHJlbW92ZV93aG9sZV9pdGVtKHByb2R1Y3RJZDogc3RyaW5nLCBwYXJlbnRDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gZW50aXJlIGl0ZW0gZnJvbSB0aGUgYmFza2V0LiBJbiB0aGUgcHJvY2VzcywgaXQgd2lsbCB1cGRhdGVcclxuICAgICAqIGxvY2FsIHN0b3JhZ2UgYW5kIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVtb3ZlX2VudGlyZV9pdGVtKHByb2R1Y3RJZCk7XHJcbiAgICBwYXJlbnRDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjcvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBGdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gV2lsbCBoYW5kbGUgdGhlIGZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS4gVGhlc2UgaW5jbHVkZSB0aGVcclxuLy8gZm9sbG93aW5nOlxyXG4vL1xyXG4vLyAgLSBXaWxsIGJ1aWxkIG9udG8gdGhlIEhUTUwgYWRkaW5nIG9udG8gdGhlIGNvbG91cnMgZmlsdGVyIG9wdGlvbnMgYXMgd2VsbCBhc1xyXG4vLyAgICB0aGUgcHJvZHVjdCBpbmZvIHNlY3Rpb24uIFRoZXJlIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gd2hhdCBvdGhlclxyXG4vLyAgICByZWxhdGVkIHByb2R1Y3RzIHRoZXJlIGFyZSB0byB0aGUgY3VycmVudCBwYWdlLiBUaGlzIGluZm9ybWF0aW9uIHdpbGwgYmVcclxuLy8gICAgcmV0cmlldmVkIGZyb20gYW4gQVBJLlxyXG4vL1xyXG4vLyAgLSBXaWxsIGJ1aWxkIHRoZSBmdW5jdGlvbiBmb3IgdGhlIGFkZCB0byBiYXNrZXQgYnV0dG9uIGFsbG93aW5nIGl0ZW1zXHJcbi8vICAgIHRvIGJlIGFkZGVkIHRvIHRoZSBiYXNrZXQgYW5kIGZvciB0aGUgcGFnZSB0byBiZSByZWZyZXNoZWQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9iYXNrZXQtaXRlbXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbmRQcm9kdWN0UGFnZSBleHRlbmRzIEJhc2tldFN0YXRlIHtcclxuICAvKipcclxuICAgKiBXaWxsIGhhbmRsZSB0aGUgSlMgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLiBUaGVzZSBpbmNsdWRlIHRoZVxyXG4gICAqIGZvbGxvd2luZzpcclxuICAgKlxyXG4gICAqICAtIFdpbGwgYnVpbGQgb250byB0aGUgSFRNTCBhZGRpbmcgb250byB0aGUgY29sb3VycyBmaWx0ZXIgb3B0aW9ucyBhcyB3ZWxsIGFzXHJcbiAgICogICAgdGhlIHByb2R1Y3QgaW5mbyBzZWN0aW9uLiBUaGVyZSBlbGVtZW50cyB3aWxsIGJlIGFkZGVkIGJhc2VkIG9uIHdoYXQgb3RoZXJcclxuICAgKiAgICByZWxhdGVkIHByb2R1Y3RzIHRoZXJlIGFyZSB0byB0aGUgY3VycmVudCBwYWdlLiBUaGlzIGluZm9ybWF0aW9uIHdpbGwgYmVcclxuICAgKiAgICByZXRyaWV2ZWQgZnJvbSBhbiBBUEkuXHJcbiAgICpcclxuICAgKiAgLSBXaWxsIGJ1aWxkIHRoZSBmdW5jdGlvbiBmb3IgdGhlIGFkZCB0byBiYXNrZXQgYnV0dG9uIGFsbG93aW5nIGl0ZW1zXHJcbiAgICogICAgdG8gYmUgYWRkZWQgdG8gdGhlIGJhc2tldCBhbmQgZm9yIHRoZSBwYWdlIHRvIGJlIHJlZnJlc2hlZC5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIC0gUmV0cmlldmVzIGRhdGEgZnJvbSB0aGUgQVBJIGFuZCBjYWxscyBtZXRob2RzIHRvIGJ1aWxkIG9udG8gdGhlIERPTS5cclxuICAgICAqIC0gQWRkcyBmdW5jdGlvbmFsaXR5IG9udG8gdGhlIFwiYWRkIHRvIGJhc2tldCBidXR0b25cIi5cclxuICAgICAqL1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IEFQSVBhdGggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFxyXG4gICAgICBcIi9wcm9kdWN0cy9cIixcclxuICAgICAgXCIvcHJvZHVjdHMvaW5mby1hcGkvXCJcclxuICAgICk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAvLyBBZGRpbmcgY29sb3VyIHZhcmlhdGlvbnNcclxuICAgICAgICBpZiAoZGF0YS5jb2xvdXJzKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX2NvbG91cnMoZGF0YS5jb2xvdXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIG90aGVyIHByb2R1Y3RzIG9mIHRoZSBzYW1lIHNldFxyXG4gICAgICAgIGlmIChkYXRhLnNldHMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfcHJvZHVjdF9zZXRzKGRhdGEuc2V0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZGluZyBzaW1pbGFyIHByb2R1Y3RzXHJcbiAgICAgICAgaWYgKGRhdGEuc2ltaWxhcikge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9zaW1pbGFyX3Byb2R1Y3RzKGRhdGEuc2ltaWxhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZGluZyBmZWF0dXJlcyBpbmZvcm1hdGlvblxyXG4gICAgICAgIGlmIChkYXRhLmZlYXR1cmVzKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX2ZlYXR1cmVzKGRhdGEuZmVhdHVyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmFkZF90b19iYXNrZXQoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfY29sb3VycyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIG9udG8gdGhlIGRyb3Bkb3duIGNvbG91cnMgZHJvcGRvd24gbWVudSBhbmQgYWRkcyBtb3JlIGNvbG91cnNcclxuICAgICAqIGluIGFjY29yZGFuY2UgdG8gaG93IG1hbnkgaG93IG1hbnkgY29sb3VycyB3ZXJlIHJldHVybmVkIGZyb20gdGhlIEFQSS5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgYXBwZW5kIGVsZW1lbnRzIG9udG8gdGhlIGVsZW1lbnRcclxuICAgICAqICNwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zXHJcbiAgICAgKlxyXG4gICAgICogRm9yIGVhY2ggY29sb3VyLCB0aGUgZm9sbG93aW5nIEhUTUwgd2lsbCBiZSBhcHBlbmRlZDpcclxuICAgICAqXHJcbiAgICAgKiA8YVxyXG4gICAgICogICBocmVmPVwie2xpbmsgdG8gcHJvZHVjdH1cIlxyXG4gICAgICogICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCJcclxuICAgICAqICAgZm9yPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIlxyXG4gICAgICogLz5cclxuICAgICAqICAgPGxhYmVsIGZvcj1cImNvbG91ci17Y29sb3VyIG5hbWV9XCI+XHJcbiAgICAgKiAgICAgPHNwYW5cclxuICAgICAqICAgICAgIGNsYXNzPVwic20tY29sb3VyLWJveFwiXHJcbiAgICAgKiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB7Y29sb3VyIGhleCB2YWx1ZX07XCI+XHJcbiAgICAgKiAgICAgPC9zcGFuPlxyXG4gICAgICogICAgIHtjb2xvdXItbmFtZX1cclxuICAgICAqICAgPC9sYWJlbD5cclxuICAgICAqIDwvYT5cclxuICAgICAqIDxpbnB1dFxyXG4gICAgICogICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICogICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiXHJcbiAgICAgKiAgIG5hbWU9XCJwcm9kLWYtY29sb3VyXCJcclxuICAgICAqICAgaWQ9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAgIHZhbHVlPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIlxyXG4gICAgICogLz5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1jb2xvdXItdmFyaWF0aW9uc1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgY29uc3QgY29sb3VyID0gYXR0cnNbYV0uY29sX25hbWU7XHJcbiAgICAgICAgY29uc3QgaGV4X3ZhbCA9IGF0dHJzW2FdLmNvbF9oZXhfdmFsO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJhXCIgdGFnXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImxhYmVsXCIgdGFnXHJcbiAgICAgICAgY29uc3QgbGFiZWxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpO1xyXG4gICAgICAgIGxhYmVsRWxlbS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb2xvdXItXCIgKyBjb2xvdXIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJzcGFuXCIgdGFnXHJcbiAgICAgICAgY29uc3Qgc3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICBzcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtLWNvbG91ci1ib3hcIik7XHJcbiAgICAgICAgc3BhbkVsZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGhleF92YWwgKyBcIjtcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImlucHV0XCIgdGFnXHJcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvZC1mLWNvbG91clwiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb2xvdXItXCIgKyBjb2xvdXIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlYWNoIHRhZyB0byB0aGVpciByZXNwZWN0aXZlIHBhcmVudCBlbGVtZW50cy5cclxuICAgICAgICBsYWJlbEVsZW0uYXBwZW5kQ2hpbGQoc3BhbkVsZW0pO1xyXG4gICAgICAgIGxhYmVsRWxlbS5hcHBlbmQoY29sb3VyKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChsYWJlbEVsZW0pO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmRpbmcgdGhlIGVsZW1lbnRzIHRvIHRoZSB0YXJnZXQgZWxlbWVudCBpbiB0aGUgRE9NLlxyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQoaW5wdXRFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnMgZG9lcyBub3QgZXhpc3QsIGFsdGVybmF0aXZlIGNvbG91cnMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3Byb2R1Y3Rfc2V0cyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIG9udG8gdGhlIFwicHJvZHVjdCBzZXRzXCIgc2VjdGlvbnMuXHJcbiAgICAgKiBXaWxsIGFwcGVuZCBlYWNoIHByb2R1Y3Qgc2V0IG9udG8gI3Byb2R1Y3Qtc2V0cy5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBwcm9kdWNlIHRoZSBmb2xsb3dpbmcgSFRNTCBmb3IgZWFjaCBzZXQ6XHJcbiAgICAgKlxyXG4gICAgICogPGEgY2xhc3M9XCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIiBocmVmPVwie3Byb2R1Y3QgdXJsfVwiXHJcbiAgICAgKiAgIDxpbWdcclxuICAgICAqICAgICBjbGFzcz1cInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICogICAgIGFsdD1cIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIHtwcm9kdWN0IG5hbWV9XCJcclxuICAgICAqICAgPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0IG5hbWV9PC9zcGFuPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCI+e3Byb2R1Y3QgcHJpY2V9PC9zcGFuPlxyXG4gICAgICogPC9hPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LXNldHNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgIC8vIFVzaW5nIGRhdGEgcmV0cmlldmVkIGZyb20gdGhlIEFQSSB0byBidWlsZCBjb25zdGFudHNcclxuICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1thXS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGF0dHJzW2FdLnNob3djYXNlX2ltYWdlO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gYXR0cnNbYV0ucHJpY2U7XHJcblxyXG4gICAgICAgIC8vIFwiQVwiIHRhZyB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGltYWdlIGFuZCB0aGUgdGV4dC5cclxuICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgICAgIC8vIFwiSU1HXCIgdGFnIGZvciBwcm9kdWN0IGltYWdlLlxyXG4gICAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCIpO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImFsdFwiLFxyXG4gICAgICAgICAgXCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiAoXCIgKyBuYW1lICsgXCJ9XCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBcIlNQQU5cIiB0YWdzIGNvbnRhaW5pbmcgdGhlIHByb2R1Y3QgbmFtZSBhbmQgcHJpY2VcclxuICAgICAgICBjb25zdCB0ZXh0U3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGV4dFNwYW5FbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dFByaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHRleHRQcmljZUVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0ZXh0UHJpY2VFbGVtLnRleHRDb250ZW50ID0gXCLCo1wiICsgcHJpY2U7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgaW1hZ2UgYW5kIHRleHQgZWxlbWVudHMgdG8gYmVjb21lIGNoaWxkcmVuIG9mIHRoZSBsaW5rRWxlbVxyXG4gICAgICAgIC8vIGFuZCBhcHBlbmQgdGhlbSBvbnRvIHRoZSB0YXJnZXRFbGVtIGluIHRoZSBET00uXHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0UHJpY2VFbGVtKTtcclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3Qtc2V0cyBkb2VzIG5vdCBleGlzdCwgcHJvZHVjdC1zZXRzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9zaW1pbGFyX3Byb2R1Y3RzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgXCJzaW1pbGFyIHByb2R1Y3RzXCIgc2VjdGlvbnMuXHJcbiAgICAgKiBXaWxsIGFwcGVuZCBlYWNoIHByb2R1Y3Qgc2V0IG9udG8gI3NpbWlsYXItcHJvZHVjdHMuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgcHJvZHVjZSB0aGUgZm9sbG93aW5nIEhUTUwgZm9yIGVhY2ggc2V0OlxyXG4gICAgICpcclxuICAgICAqIDxhIGNsYXNzPVwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIgaHJlZj1cIntwcm9kdWN0IHVybH1cIlxyXG4gICAgICogICA8aW1nXHJcbiAgICAgKiAgICAgY2xhc3M9XCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAqICAgICBhbHQ9XCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiB7cHJvZHVjdCBuYW1lfVwiXHJcbiAgICAgKiAgID5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIj57cHJvZHVjdCBuYW1lfTwvc3Bhbj5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiPntwcm9kdWN0IHByaWNlfTwvc3Bhbj5cclxuICAgICAqIDwvYT5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltaWxhci1wcm9kdWN0c1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2FdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgaW1nID0gYXR0cnNbYV0uc2hvd2Nhc2VfaW1hZ2U7XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBhdHRyc1thXS5wcmljZTtcclxuXHJcbiAgICAgICAgLy8gXCJBXCIgdGFnIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0LlxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaW1pbGFyLXByb2R1Y3QgcmVsYXRlZC1wcm9kdWN0XCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgICAgIC8vIFwiSU1HXCIgdGFnIGZvciBwcm9kdWN0IGltYWdlLlxyXG4gICAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcpO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJhbHRcIixcclxuICAgICAgICAgIFwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4gKFwiICsgbmFtZSArIFwifVwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gXCJTUEFOXCIgdGFncyBjb250YWluaW5nIHRoZSBwcm9kdWN0IG5hbWUgYW5kIHByaWNlXHJcbiAgICAgICAgY29uc3QgdGV4dFNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgdGV4dFNwYW5FbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0UHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgdGV4dFByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0ZXh0UHJpY2VFbGVtLnRleHRDb250ZW50ID0gXCLCo1wiICsgcHJpY2U7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgaW1hZ2UgYW5kIHRleHQgZWxlbWVudHMgdG8gYmVjb21lIGNoaWxkcmVuIG9mIHRoZSBsaW5rRWxlbVxyXG4gICAgICAgIC8vIGFuZCBhcHBlbmQgdGhlbSBvbnRvIHRoZSB0YXJnZXRFbGVtIGluIHRoZSBET00uXHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0UHJpY2VFbGVtKTtcclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3NpbWlsYXItcHJvZHVjdHMgZG9lcyBub3QgZXhpc3QsIHNpbWlsYXItcHJvZHVjdHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBidWlsZF9mZWF0dXJlcyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBmZWF0dXJlcyBzZWN0aW9uIG9mIHByb2R1Y3QgaW5mb3JtYXRpb24gYmFzZWQgb24gcmVzdWx0c1xyXG4gICAgICogcmV0cmlldmVkIGZyb20gdGhlIEFQSS5cclxuICAgICAqIFdpbGwgY3JlYXRlIGEgXCJQXCIgdGFnIGZvciBlYWNoIGZpbHRlciBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIHRhcmdldFxyXG4gICAgICogZWxlbWVudCBpbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1mZWF0dXJlc1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBmID0gMDsgZiA8IGF0dHJzLmxlbmd0aDsgZisrKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2ZdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LWluZm9fX3NlY3Rpb25fX3RleHRcIik7XHJcbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobmV3RWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNwcm9kdWN0LWZlYXR1cmVzIGRvZXMgbm90IGV4aXN0LCBzaW1pbGFyLXByb2R1Y3RzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBhZGRfdG9fYmFza2V0KCkge1xyXG4gICAgLyoqIEFkZHMgcHJvZHVjdHMgaW50byB0aGUgYmFza2V0ICovXHJcbiAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJxdWFudGl0eS1jdHJsXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9IE51bWJlcihpbnB1dEVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1pZFwiKSk7XHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiYWRkLXRvLWJhc2tldC1idG5cIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBxdWFudGl0eSA9IE51bWJlcihpbnB1dEVsZW0udmFsdWUpO1xyXG5cclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocXVhbnRpdHkpKSB7XHJcbiAgICAgICAgc3VwZXIuYWRkX2l0ZW0ocHJvZHVjdElkLCBxdWFudGl0eSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJDaGVjayB0aGUgcXVhbnRpdHksIGl0IGlzIGVpdGhlciBOYU4gb3IgYSBmbG9hdC4gTXVzdCBiZSBhIG51bWJlclwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMzAvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFBhZ2VzIHdoZXJlIGludGVyYWN0aW9uIHdpdGggaXRlbXMgaW4gdGhlIGJhc2tldCBuZWVkIHRvIGJlIGFjY2VzcyBhbmQvb3JcclxuLy8gbW9kaWZpZWQuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIC0gTWFuYWdlIHRoZSBiYXNrZXQgaXRlbXNcclxuLy8gLSBLZWVwIGJhc2tldCBkYXRhIHdoZW5ldmVyIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXHJcbi8vIC0gVXBkYXRlcyB0aGUgYmFza2V0IGl0ZW1zIGNvdW50XHJcbi8vXHJcbi8vIERFU0NSSVBUSU9OOlxyXG4vLyAtLS0tLS0tLS0tLS1cclxuLy8gTGV2ZXJhZ2VzIHRoZSBwb3dlciBvZiBsb2NhbCBzdG9yYWdlIHRvIGtlZXAgYSB0cmFjayBvZiB0aGUgYmFza2V0LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIEJhc2tldFN0YXRlIHtcclxuICB0b3RhbEl0ZW1zOiBzdHJpbmcgfCBudWxsIHwgbnVtYmVyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgXCJ0b3RhbEJhc2tldFNpemVcIlxyXG4gICk7XHJcbiAgaXRlbXM6IGFueSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhc2tldEl0ZW1zXCIpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXBkYXRlX2Jhc2tldF9jb3VudGVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9yZWFkX2l0ZW1zKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHRvdGFsIGFuZCBiYXNrZXQgc2l6ZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCBjb252ZXJ0c1xyXG4gICAgICogdGhlIHZhbHVlcyBpbnRvIHR5cGVzIHRoYXQgY2FuIGJlIHdvcmtlZCB3aXRoLlxyXG4gICAgICovXHJcbiAgICBpZiAoIXRoaXMudG90YWxJdGVtcykge1xyXG4gICAgICB0aGlzLnRvdGFsSXRlbXMgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pdGVtcykge1xyXG4gICAgICB0aGlzLml0ZW1zID0gSlNPTi5wYXJzZSh0aGlzLml0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSB7fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3NldF9pdGVtcygpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGxvY2FsIHN0b3JhZ2UgaXRlbXMgaW50byBzdHJpbmdzIGFuZCBzYXZlcyB0aGVtIG9udG8gdGhlXHJcbiAgICAgKiBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICogVXBkYXRlcyB0aGUgYmFza2V0IGl0ZW1zIGNvdW50ZXIuXHJcbiAgICAgKi9cclxuXHJcbiAgICBpZiAoIXRoaXMudG90YWxJdGVtcykge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbEJhc2tldFNpemVcIiwgXCIwXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgIFwidG90YWxCYXNrZXRTaXplXCIsXHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zLnRvU3RyaW5nKClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXRlbXMpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFza2V0SXRlbXNcIiwgXCJ7fVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFza2V0SXRlbXNcIiwgdGhpcy5pdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBiYXNrZXRcclxuICAgIHRoaXMudXBkYXRlX2Jhc2tldF9jb3VudGVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBhZGRfaXRlbShpZDogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICAvKiogTWV0aG9kIGZvciBhZGRpbmcgaXRlbXMgaW50byB0aGUgYmFza2V0LiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG5cclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zICs9IHF1YW50aXR5O1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zW2lkXSkge1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSArPSBxdWFudGl0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdID0gcXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHJlbW92ZV9pdGVtKGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgIC8qKiBNZXRob2QgZm9yIHJlbW92aW5nIGl0ZW1zIGZyb20gdGhlIGJhc2tldC4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuXHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIGlmICh0aGlzLnRvdGFsSXRlbXMgPiAwKSB7XHJcbiAgICAgIHRoaXMudG90YWxJdGVtcyAtPSBxdWFudGl0eTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlX2Jhc2tldF9jb3VudGVyKHRoaXMudG90YWxJdGVtcyk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXRlbXNbaWRdKSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdID0gTnVtYmVyKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gLT0gcXVhbnRpdHk7XHJcbiAgICAgIGlmICh0aGlzLml0ZW1zW2lkXSA9PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlbXNbaWRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICByZW1vdmVfZW50aXJlX2l0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgLyoqIFJlbW92ZXMgYW5kIGVudGlyZSBpdGVtLiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcykgLSBOdW1iZXIodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgZGVsZXRlIHRoaXMuaXRlbXNbaWRdO1xyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB1cGRhdGVfYmFza2V0X2NvdW50ZXIobmV3TnVtOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSB7XHJcbiAgICAvKiogVXBkYXRlcyB0aGUgYmFza2V0IGNvdW50ZXIgbnVtYmVyICovXHJcbiAgICBjb25zdCBiYXNrZXRDb3VudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJiYXNrZXQtdG90YWwtaXRlbXNcIlxyXG4gICAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKG5ld051bSkge1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS50ZXh0Q29udGVudCA9IG5ld051bS50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgdXBkYXRlX3NpbmdsZV9pdGVtKHByb2R1Y3RJZDogc3RyaW5nIHwgbnVtYmVyLCBuZXdOdW06IG51bWJlcikge1xyXG4gICAgLyoqIFVwZGF0ZXMgdGhlIGxvY2FsIHN0b3JhZ2UgZm9yIGEgc2luZ2xlIGl0ZW0gd2l0aCBhIG5ldyBxdWFudGl0eS4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuICAgIGNvbnN0IHByZXZWYWx1ZSA9IE51bWJlcih0aGlzLml0ZW1zW3Byb2R1Y3RJZF0pXHJcbiAgICB0aGlzLml0ZW1zW3Byb2R1Y3RJZF0gPSBuZXdOdW07XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKSArIG5ld051bSAtIHByZXZWYWx1ZTtcclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA4LzAxLzIwMjAwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gVXRpbGl0eSBjbGFzcyB0byByZWZvcm1hdCBudW1iZXIuXHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyRm9ybWF0IHtcclxuICAvKiogIFV0aWxpdHkgY2xhc3MgdG8gY29udmVydCBudW1iZXJzIHRvIGRpZmZlcmVudCBmb3JtYXRzLiAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgdGhvdXNhbmRfc2VwYXJhdGVkXzJkcChudW06IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgLyoqIENvdmVydHMgYSBudW1iZXIgdG8gYSB0aG91c2FuZCBzZXBhcmF0ZWQgc3RyaW5nIHRvIDIuZC5wICovXHJcbiAgICByZXR1cm4gTnVtYmVyKG51bSlcclxuICAgICAgLnRvRml4ZWQoMilcclxuICAgICAgLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN0YXRpYyB0aG91c2FuZF9zZXBfdG9fZmxvYXQobnVtOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDb252ZXJ0cyBhIHRob3VzYW5kIHNlcGFyYXRlZCBmbG9hdCB0byBhIGZsb2F0LiBJZiB0aGUgYXJndW1lbnQgPSBudWxsXHJcbiAgICAgICAqIHRoZW4gMCB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICAgKi9cclxuICAgIGlmICghbnVtKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIE51bWJlcihudW0ucmVwbGFjZShcIixcIiwgXCJcIikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA3LzAxLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBVdGlsaXR5IHByb3ZpZGluZyB2YWxpZGF0aW9uIG9wdGlvbnMuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogQSB1dGlsaXRpZXMgY2xhc3MgY29udGFpbmluZyBzdGF0aWMgbWV0aG9kIHdoaWNoIHJ1biBzb21lIGZvcm0gb2ZcclxuICAgKiB2YWxpZGF0aW9uLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgY2hlY2tfaWZfcG9zaXRpdmVfaW50KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAvKiogQ2hlY2tzIGlmIGFuIGl0ZW0gaXMgYSBwb3NpdGl2ZSBpbnRlZ2VyICovXHJcblxyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0gIT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gPj0gMCAmJiBpdGVtID09PSBNYXRoLnJvdW5kKGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdCB0aGlzIHN0YWdlLCB0aGUgb25seSBicmFuY2ggc3VnZ2VzdHMgdGhhdCB0aGUgbnVtYmVyIGlzIDwgMC5cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=