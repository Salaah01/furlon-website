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
        this.containers = document.getElementsByClassName("carousel-container__main");
        for (var c = 0; c < this.containers.length; c++) {
            var displayContainer = this.containers[c].getElementsByClassName("carousel-container__display-section")[c];
            var displayImages = displayContainer.getElementsByClassName("carousel-container__display-section__img");
            if (displayImages.length > 1) {
                var imgThumbsContainer = this.containers[c].getElementsByClassName("carousel-container__display-controls")[0];
                var imgThumbs = imgThumbsContainer.getElementsByClassName("carousel-container__display-controls__control");
                this.on_clicking_thumbs(displayImages, imgThumbs);
                this.on_clicking_display_img(displayImages);
            }
            this.update_total_thumbs(this.containers[c].getElementsByClassName("carousel-container__display-controls__control"));
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
    CarouselImgs.prototype.update_total_thumbs = function (thumbs) {
        var total = thumbs.length;
        for (var t = 0; t < total; t++) {
            thumbs[t].setAttribute("totalthumbs", total.toString());
        }
        thumbs[0].parentElement.setAttribute("totalthumbs", total.toString());
        thumbs[0].parentElement.previousElementSibling.setAttribute("totalthumbs", total.toString());
        thumbs[0].parentElement.parentElement.setAttribute("totalthumbs", total.toString());
        thumbs[0].parentElement.parentElement.parentElement.setAttribute("totalthumbs", total.toString());
        thumbs[0].parentElement.parentElement.parentElement.parentElement.setAttribute("totalthumbs", total.toString());
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

/***/ "./furlon/static/ts/components/pagination.ts":
/*!***************************************************!*\
  !*** ./furlon/static/ts/components/pagination.ts ***!
  \***************************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
var Pagination = (function () {
    function Pagination() {
        this.container = document.getElementById("pagination");
        if (this.container) {
            this.build_links();
        }
    }
    Pagination.prototype.build_links = function () {
        var links = this.container.getElementsByClassName("pagination__link");
        var baseHref = window.location.href.replace(/&((.*?&$)|(page=[0-9]{1,})|(page=))/g, "") +
            "&page=";
        for (var l = 0; l < links.length; l++) {
            if (links[l].getAttribute("disabled") != "disabled") {
                links[l].setAttribute("href", baseHref + links[l].getAttribute("page"));
            }
        }
    };
    return Pagination;
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
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pagination */ "./furlon/static/ts/components/pagination.ts");










new _components_navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]();
new _state_basket_items__WEBPACK_IMPORTED_MODULE_6__["BasketState"]();
new _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"]();
new _components_search_filters__WEBPACK_IMPORTED_MODULE_3__["SearchFilters"]();
new _components_pagination__WEBPACK_IMPORTED_MODULE_9__["Pagination"]();
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
            var items = Number(JSON.parse(this_1.items)[product.productId]);
            var mainContainer = document.createElement("div");
            var imgContainer = document.createElement("div");
            var infoContainer = document.createElement('div');
            var priceContainer = document.createElement('div');
            mainContainer.className = "basket-summary__row";
            mainContainer.setAttribute("product-id", product.productId);
            imgContainer.className = "basket-summary__row__container basket-summary__row__container--img";
            infoContainer.className = "basket-summary__row__container";
            priceContainer.className = "basket-summary__row__container";
            imgContainer.setAttribute('contents', 'product-img');
            infoContainer.setAttribute('contents', 'product-info');
            priceContainer.setAttribute('contents', 'product-price');
            var imgATag = document.createElement("a");
            imgATag.className = "basket-summary__row__data";
            imgATag.href = productPage + product.productId;
            imgATag.setAttribute("field", "product-image");
            var imgElem = document.createElement("img");
            imgElem.src = product.image;
            imgElem.alt = "Image of " + product.productName;
            imgATag.appendChild(imgElem);
            var nameElem = document.createElement("a");
            nameElem.className = "basket-summary__row__data";
            nameElem.href = productPage + product.productId;
            nameElem.setAttribute("field", "product-name");
            nameElem.textContent = product.productName;
            var storeElem = document.createElement("a");
            storeElem.className = "basket-summary__row__data";
            storeElem.href = "/stores/" + product.storeId;
            storeElem.setAttribute("field", "product-store");
            storeElem.textContent = product.storeName;
            var colourElem = document.createElement("P");
            colourElem.className = "basket-summary__row__data";
            colourElem.setAttribute("field", "product-colour");
            colourElem.textContent = product.colourName;
            var quantityContainerElem = document.createElement("DIV");
            quantityContainerElem.className = "c-quantity basket-summary__row__function";
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
            priceElem.className = "basket-summary__row__data";
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
            removeItemSpan.className = "basket__icon";
            removeItemSpan.setAttribute("field", "remove-item");
            removeItemSpan.addEventListener("click", function (event) {
                event.stopPropagation();
                _this.remove_whole_item(product.productId, mainContainer);
                _this.update_basket_totals();
            });
            var removeItemI = document.createElement("I");
            removeItemI.className = "fa fa-times";
            removeItemSpan.appendChild(removeItemI);
            priceElem.appendChild(removeItemSpan);
            imgContainer.appendChild(imgATag);
            infoContainer.appendChild(nameElem);
            infoContainer.appendChild(storeElem);
            infoContainer.appendChild(colourElem);
            infoContainer.appendChild(quantityContainerElem);
            priceContainer.appendChild(priceElem);
            mainContainer.appendChild(imgContainer);
            mainContainer.appendChild(infoContainer);
            mainContainer.appendChild(priceContainer);
            this_1.summaryItemsParent.appendChild(mainContainer);
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
            .querySelectorAll('[field="product-price-value"]');
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
            if (attrs.length) {
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
                targetElem.remove();
            }
        }
        else {
            console.warn("#product-sets does not exist, product-sets cannot be added.");
        }
    };
    ExtendProductPage.prototype.build_similar_products = function (attrs) {
        var targetElem = document.getElementById("similar-products");
        if (targetElem) {
            if (attrs.length) {
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
                targetElem.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9yZWdpc3Rlci12YWxpZGF0aW9uLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3N0YXRlL2Jhc2tldC1pdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3V0aWxpdGllcy9udW1iZXJfZm9ybWF0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvdXRpbGl0aWVzL3ZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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LElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxPQUFPLElBQUk7U0FDZDtRQUdELE9BQU8sS0FBSztJQUNoQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZnVybG9uL3N0YXRpYy9qc1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Z1cmxvbi9zdGF0aWMvdHMvbWFpbi50c1wiKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjkvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gQ2Fyb3VzZWwgc3R5bGVkIGltYWdlIHNsaWRlIHNob3dzLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBPbiBjbGljayBvZiBhIGltYWdlIHRodW1ibmFpbHMgb3IgdGhlIGN1cnJlbnQgaW1hZ2UsIHRoZSBjdXJyZW50IGltYWdlIHNob3VsZFxyXG4vLyBjaGFuZ2UgYWNjb3JkaW5nbHkuXHJcbi8vXHJcbi8vIEFuaW1hdGlvbnMgYXJlIGhhbmRsZWQgdGhyb3VnaCB0aGUgQ1NTLCB0aGUgSlMgc2V0cyB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvXHJcbi8vIGNoYW5nZSB0aGUgYXR0cmlidXRlcyBvZiB0aGUgZGlzcGxheSBpbWFnZXMgYWNjb3JkaW5nbHkgc28gYXMgdG8gZGlzcGxheSB0aGVcclxuLy8gc2VsZWN0ZWQgaW1hZ2UuXHJcbi8vXHJcbi8vIE9uIGVhY2ggdGh1bWJuYWlsLCBhdCBhbiBhdHRyaWJ1dGUgd2lsbCB3aWxsIGVxdWFsIHRvIHRoZSBudW1iZXIgdG90YWxcclxuLy8gdGh1bWJuYWlscywgdGhpcyB3aWxsIGVuYWJsZSB0aGUgQ1NTIHRvIGFkanVzdCBjZXJ0YWluIENTUyBhdHRyaWJ1dGVzXHJcbi8vIGFjY29yZGluZ2x5LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW1ncyB7XHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgY2Fyb3VzZWwgaW1hZ2UgaW1hZ2VzIHN1Y2ggdGhhdCB3aGVuXHJcbiAgICogYSB0aHVtYm5haWwgb3IgdGhlIG1haW4gcGljdHVyZSBpcyBjbGlja2VkIG9uLCB0aGUgaW1hZ2Ugd2lsbCBjaGFuZ2UuXHJcbiAgICogVGhlIGFuaW1hdGlvbiBhbmQgcG9zaXRpb25pbmcgaXMgY29udHJvbGxlZCB2aWEgdGhlIENTUywgdGhlIGNsYXNzIHdpbGxcclxuICAgKiBhZGQgYW5kIHJlbW92ZSBhdHRyaWJ1dGVzIGZyb20gdGhlIGVsZW1lbnRzLCBzbyB0aGF0IHRoZSBhbmltYXRpb25zIGNhblxyXG4gICAqIGJlIHRyaWdnZXJlZC5cclxuICAgKi9cclxuICBjb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWNvbnRhaW5lcl9fbWFpblwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2NhdGVzIHRoZSBlbGVtZW50cyB3aGVyZSBhbiBldmVudCBsaXN0ZW5lcnMgbmVlZCB0byBiZSBhZGRlZCBhbmRcclxuICAgICAqIGNhbGxzIG1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBkZXBlbmRpbmcgb24gd2hhdCB0aGUgZWxlbWVudFxyXG4gICAgICogaXMuXHJcbiAgICAgKlxyXG4gICAgICogRmluYWxseSwgd2lsbCBjYWxsIGEgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgdGh1bWJuYWlscyB0byBjb250YWluXHJcbiAgICAgKiBpbmZvcm1hdGlvbiBvbiBob3cgbWFueSB0aHVtYm5haWxzIHRoZXJlIGFyZS4gVGhpcyB3aWxsIGVuYWJsZSB0b1xyXG4gICAgICogYWRqdXN0IGNlcnRhaW4gQ1NTIGF0dHJpYnV0ZXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIC8vIERPTSBlbGVtZW50cyBmb3IgZXZlbnQgbGlzdGVuZXJzIHRvIGJlIGFkZGVkLlxyXG4gICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2NdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvblwiXHJcbiAgICAgIClbY107XHJcbiAgICAgIGNvbnN0IGRpc3BsYXlJbWFnZXMgPSBkaXNwbGF5Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvbl9faW1nXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGlmIG9ubHkgb25lIGRpc3BsYXlJbWFnZSwgdGhlbiB0aGlzIHN1Z2dlc3RzIHRoYXQgb25seSBhXHJcbiAgICAgIC8vIHNob3djYXNlIGltYWdlIGV4aXN0cy5cclxuICAgICAgaWYgKGRpc3BsYXlJbWFnZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGltZ1RodW1ic0NvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktY29udHJvbHNcIlxyXG4gICAgICAgIClbMF07XHJcbiAgICAgICAgY29uc3QgaW1nVGh1bWJzID0gaW1nVGh1bWJzQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1jb250cm9sc19fY29udHJvbFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gIE1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBlYWNoIERPTSBlbGVtZW50LlxyXG4gICAgICAgIHRoaXMub25fY2xpY2tpbmdfdGh1bWJzKGRpc3BsYXlJbWFnZXMsIGltZ1RodW1icyk7XHJcbiAgICAgICAgdGhpcy5vbl9jbGlja2luZ19kaXNwbGF5X2ltZyhkaXNwbGF5SW1hZ2VzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBTZXRzIGFuIGF0dHJpYnV0ZSBvbiBlYWNoIHRodW1ibmFpbCB0byB0aGUgdG90YWwgbnVtYmVyIG9mIHRodW1ibmFpbHMuXHJcbiAgICAgIHRoaXMudXBkYXRlX3RvdGFsX3RodW1icyhcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzX19jb250cm9sXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBvbl9jbGlja2luZ190aHVtYnMoXHJcbiAgICBkaXNwbGF5SW1hZ2VzOiBIVE1MQ29sbGVjdGlvbixcclxuICAgIGltZ1RodW1iczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogRWFjaCBpbWFnZSB0aHVtYm5haWwgZWxlbWVudCBoYXMgYSBcImZvclwiIGF0dHJpYnV0ZSB3aGljaCBpbmRpY2F0ZXNcclxuICAgICAqIHdoaWNoIGVsZW1lbnQgb24gdGhlIGRpc3BsYXkgc2VjdGlvbiBpdCByZXByZXNlbnRzLiBUaGUgZGlzcGxheSBpbWFnZVxyXG4gICAgICogZWxlbWVudCBoYXMgYW4gXCJpbWdcIiBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBPbiBjbGlja2luZyBvbiBhIGltYWdlIHRodW1ibmFpbCwgdGhlIGRpc3BsYXkgYXR0cmlidXRlJ3MgcG9zaXRpb25cclxuICAgICAqIGF0dHJpYnV0ZSB3aWxsIGJlY29tZSBcInNob3dcIiB3aGVyZSB0aGUgc2FtZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIGFsbFxyXG4gICAgICogb3RoZXIgaW1hZ2VzIHdpbGwgYmVjb21lIFwiaGlkZVwiLlxyXG4gICAgICpcclxuICAgICAqIE5PVEU6IHRoZSBpbml0aWFsIGltYWdlIHdpbGwgaGF2ZSBwb3NpdGlvbj1cImluaXRcIiBpbml0aWFsbHkgc28gYXMgdG9cclxuICAgICAqIGF2b2lkIGFueSBhbmltYXRpb25zIG9uIHN0YXJ0LiBJZiB0aGlzIGltYWdlIHRodW1ibmFpbCBpcyBjbGlja2VkLCBkb1xyXG4gICAgICogbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgdGh1bWIgPSAwOyB0aHVtYiA8IGltZ1RodW1icy5sZW5ndGg7IHRodW1iKyspIHtcclxuICAgICAgaW1nVGh1bWJzW3RodW1iXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzRm9yID0gaW1nVGh1bWJzW3RodW1iXS5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcImltZ1wiKSA9PT0gY29udHJvbHNGb3IpIHtcclxuICAgICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpICE9IFwiaW5pdFwiKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcImhpZGVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG9uX2NsaWNraW5nX2Rpc3BsYXlfaW1nKFxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGljayBvZiB0aGUgY3VycmVudCBkaXNwbGF5IGltYWdlLCBoaWRlIHRoZSBpbWFnZSBhbmQgc2hvdyB0aGVcclxuICAgICAqIG5leHQuXHJcbiAgICAgKiBBbmltYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgY3NzLiBGb3IgYW5pbWF0aW9uIHRvIHdvcmssIG9uIGNsaWNrLFxyXG4gICAgICogXCJoaWRlXCIgaXMgc2V0IHRvIHRoZSBhdHRyaWJ1dGUgcG9zaXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UsIGFuZCBvblxyXG4gICAgICogdGhlIG5leHQgaW1hZ2UsIHRoZSBcInNob3dcIiBpcyBzZXQgdG8gdGhlIHBvc2l0aW9uIGF0dHJpYnV0ZS5cclxuICAgICAqL1xyXG4gICAgZGlzcGxheUltYWdlczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGltID09PSBkaXNwbGF5SW1hZ2VzLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIGRpc3BsYXlJbWFnZXNbMF0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltICsgMV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSB1cGRhdGVfdG90YWxfdGh1bWJzKHRodW1iczogSFRNTENvbGxlY3Rpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhbiBhdHRyaWJ1dGUgb24gZWFjaCB0aHVtYm5haWwgd2hpY2ggaXMgdGhlIHRvdGFsIG51bWJlciBvZlxyXG4gICAgICogdGh1bWJuYWlscyB0aGVyZSBhcmUuIFRoaXMgd2lsbCBhbGxvdyB0aGUgQ1NTIHRvIHVwZGF0ZSBzdHlsaW5nIGJhc2VkXHJcbiAgICAgKiBvbiB0aGUgbnVtYmVyIG9mIHRodW1ibmFpbHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRvdGFsID0gdGh1bWJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgdG90YWw7IHQrKykge1xyXG4gICAgICB0aHVtYnNbdF0uc2V0QXR0cmlidXRlKFwidG90YWx0aHVtYnNcIiwgdG90YWwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyB0aGUgc2FtZSBvbiBvdGhlciBlbGVtZW50cyB3aGVyZSB0aGlzIHdvdWxkIGJlIG5lZWRlZC5cclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXCJ0b3RhbHRodW1ic1wiLCB0b3RhbC50b1N0cmluZygpKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAxNi8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBDdXN0b20gZHJvcGRvd24gbWVudVxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTOlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBfZHJvcGRvd24tbWVudS5zY3NzXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIFByb3ZpZGVzIGZ1bmN0aW9ucyBmb3IgYSBjdXN0b20gZHJvcGRvd24gbWVudS5cclxuLy8gVGhlIGZ1bmN0aW9ucyB3aWxsIHdvcmsgZm9yIGRyb3Bkb3duIG1lbnVzIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4vL1xyXG4vLyA8Zm9ybT5cclxuLy8gICAuLi5cclxuLy8gICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCI+XHJcbi8vICAgICAgIDxzcGFuPkNvbG91cjwvc3Bhbj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIj5cclxuLy8gICAgICAgPGxhYmVsIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIiBmb3I9XCJjb2xvdXItcmVkXCI+XHJcbi8vICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCJcclxuLy8gICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4vLyAgICAgICAgIG5hbWU9XCJmLWNvbG91clwiXHJcbi8vICAgICAgICAgaWQ9Y29sb3VyLXJlZFxyXG4vLyAgICAgICAgIHZhbHVlPVwicmVkXCJcclxuLy8gICAgICAgPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgLi4uXHJcbi8vIDwvZm9ybT5cclxuXHJcbi8vIENTUyBzaG91bGQgYmUgc2V0IHVwIHRvIGhpZGUgdGhlIGlucHV0IHRhZ3MgYW5kIHJlbHkgb24gdGhlIGxhYmVscyB0byBzZWxlY3RcclxuLy8gdGhlIHJhZGlvIGJ1dHRvbi5cclxuLy9cclxuLy8gRlVOQ1RJT05TOlxyXG4vLyAtLS0tLS0tLS0tXHJcbi8vICAtIFdoZW4gdXNlciBjbGlja3Mgb24gdGhlIGRyb3Bkb3duIG1lbnUsIGV4cGFuZCB0aGUgbGlzdCBvZiBvcHRpb25zLlxyXG4vLyAgLSBXaGVuIHVzZXIgcHJlc3NlcyBhbiBvcHRpb24sIGhpZ2hsaWdodCB0aGF0IG9wdGlvbiwgdXBkYXRlIHRoZVxyXG4vLyAgICBidXR0b24ncyBpbm5lciB0ZXh0IHRvIG1hdGNoIHRoYXQgb2ZmIHRoZSBidXR0b24gdGV4dC5cclxuLy8gIC0gV2hlbiB1c2VyIGNsaWNrcyBvdXRzaWRlLCBjbG9zZSBhbGwgbWVudXMuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEcm9wZG93bk1lbnUgQ2xhc3NcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTWVudSB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGN1c3RvbSBkcm9wZG93biBtZW51cy5cclxuICAgKiBUaGVzZSBpbmNsdWRlOlxyXG4gICAqICAtIFRvZ2dsZSBvcGVuL2Nsb3NlIG9mIHRoZSBtZW51IG9uIGNsaWNraW5nIHRoZSBidXR0b25cclxuICAgKiAgLSBDbG9zZSB0aGUgbWVudSBvbiBjbGlja2luZyBvdXRzaWRlXHJcbiAgICogIC0gT24gc2VsZWN0aW5nIGFuIGl0ZW06XHJcbiAgICogICAgLSBIaWdobGlnaHQgdGhhdCBpdGVtXHJcbiAgICogICAgLSBDaGFuZ2UgdGhlIHRleHQgb2YgdGhlIGJ1dHRvbiB0aGUgdGV4dCBvZiB0aGUgb3B0aW9uIHNlbGVjdGVkXHJcbiAgICpcclxuICAgKiBOb3RlOiB0aGlzIGNsYXNzIHdpbGwgbm90IGhhbmRsZSBBUEkgY2FsbHMuXHJcbiAgICovXHJcblxyXG4gIGRkTWVudXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJkcm9wZG93bi1tZW51XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBBZGRzIGZ1bmN0aW9uIHRvIGNsb3NlIGFsbCBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgZWxlbWVudFxyXG4gICAgdGhpcy5jbG9zZV9tZW51KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIGZ1bmN0aW9ucyBmb3IgYWxsIG1lbnUgZWxlbWVudHMuXHJcbiAgICBmb3IgKGxldCBtZW51SWQgPSAwOyBtZW51SWQgPCB0aGlzLmRkTWVudXMubGVuZ3RoOyBtZW51SWQrKykge1xyXG4gICAgICB0aGlzLmJ1aWxkX21lbnUodGhpcy5kZE1lbnVzW21lbnVJZF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xvc2VfbWVudSgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIGFsbCBtZW51cyB3aGVuIGNsaWNrZWQgb3V0c2lkZSBvbiBhbm90aGVyIGZpbHRlciBidXR0b24uXHJcbiAgICAgKiBBbHNvIGNhcnJpZXMgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIG5hdi1tZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IGZpbHRlckJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBvcHRpb25MaXN0cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgb3B0aW9uTGlzdHNbaWR4XS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmF2U3ViTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkQnRuID0gZmlsdGVyQnRuc1tpXTtcclxuXHJcbiAgICAgIHNlbGVjdGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2xvc2UgbmF2IG1lbnVzXHJcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbmF2U3ViTWVudXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgbmF2U3ViTWVudXNbaWR4XS5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGFsbCBvdGhlciBmaWx0ZXJzIGxpc3RzXHJcbiAgICAgICAgLy8gRWFjaCBidXR0b24gYW5kIHRoZWlyIGNoaWxkIGVsZW1lbnRzIGNvbnRhaW4gdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFwiZmlsdGVyLWZvclwiLlxyXG4gICAgICAgIC8vIExpa2V3aXNlLCBlYWNoIGRyb3Bkb3duIG9wdGlvbiBkaXYgY29udGFpbiB0aGUgc2FtZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBUaGlzIGNoZWNrcyBmb3IgdGhlIGJ1dHRvbiBwcmVzc2VkLCBpZiBpdHMgXCJmaWx0ZXItZm9yXCIgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gbWF0Y2hlcyB0aGF0IG9mIGl0cyBkcm9wZG93biBvcHRpb25zLiBpZiBub3QsIHRoZW4gY2xvc2UuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWx0ZXJCdG5zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gZmlsdGVyQnRuc1tqXTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW0uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKSAhPVxyXG4gICAgICAgICAgICBzZWxlY3RlZEJ0bi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gSnVzdCBpbmNhc2UgdGhlIHN0cnVjdHVyZSBjaGFuZ2VzLCBhbmQgdGhlIG5leHQgc2libGluZyBpbnMgbm90IHRoZSBvcHRpb25zIGxpc3RcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nIS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmc/LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYnVpbGRfbWVudShkZE1lbnU6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBmdW5jdGlvbmFsaXR5IG9udG8gZWFjaCBkcm9wZG93biBtZW51LlxyXG4gICAgICovXHJcbiAgICBjb25zdCBvcHRpb25zQnRuID0gZGRNZW51LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIlxyXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0Q29udGFpbmVyID0gZGRNZW51LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RJdGVtcyA9IG9wdGlvbnNMaXN0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxMYWJlbEVsZW1lbnQ+O1xyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIG9uIHRoZSBkcm9wZG93biBidXR0b24gd2hpY2ggd2lsbCBvcGVuL2Nsb3NlIHRoZSBvcHRpb25zXHJcbiAgICAvLyBsaXN0LlxyXG4gICAgb3B0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgb3B0aW9uc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBzZXR1cCBmb3IgZWFjaCBvcHRpb25cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBvcHRpb25JdGVyID0gMDtcclxuICAgICAgb3B0aW9uSXRlciA8IG9wdGlvbnNMaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICBvcHRpb25JdGVyKytcclxuICAgICkge1xyXG4gICAgICBsZXQgbGlzdEl0ZW0gPSBvcHRpb25zTGlzdEl0ZW1zW29wdGlvbkl0ZXJdO1xyXG4gICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaGlnaGxpZ2h0IGZyb20gYWxsIGxpc3QgaXRlbXMgYW5kIHJlYXBwbHkgdG8gdGhlIHNlbGVjdGVkXHJcbiAgICAgICAgLy8gbGlzdCBpdGVtIG9ubHlcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgbGV0IG9wdGlvblN1Ykl0ZXIgPSAwO1xyXG4gICAgICAgICAgb3B0aW9uU3ViSXRlciA8IG9wdGlvbnNMaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgb3B0aW9uU3ViSXRlcisrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBvcHRpb25zTGlzdEl0ZW1zW29wdGlvblN1Ykl0ZXJdLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWwtLXNlbGVjdGVkXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbC0tc2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uIHRvIHRoZSB0ZXh0IG9mIHRoZSBzZWxlY3RlZCBpdGVtXHJcbiAgICAgICAgb3B0aW9uc0J0bi5pbm5lclRleHQgPSBsaXN0SXRlbS5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0IHZhbHVlc1xyXG4gICAgICAgIC8vIENsb3NlIHRoZSBtZW51XHJcbiAgICAgICAgb3B0aW9uc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDEvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIE5hdmlnYXRpb24gYmFyLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIDEuIENvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGUgbmF2aWdhdGlvbiBzdWItbWVudXMgYW5kIGNvbnRyb2xzIGhvdyBhbmQgd2hlblxyXG4vLyAgICBpdCBleHBhbmRzIGFuZCBjbG9zZXMuXHJcbi8vIDIuIENvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGUgYmFza2V0IGFuZCBzbyBzbyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZVxyXG4vLyAgICBiYXNrZXQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZ1bmN0aW9ucyBmb3IgdGhlIG5hdmlnYXRpb24uXHJcbiAgICogVGhlc2UgaW5jbHVkZTpcclxuICAgKiAgLSBDbG9zaW5nIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZS5cclxuICAgKiAgLSBPcGVuaW5nL0Nsb3NpbmcgbWVudXMgb24gY2xpY2tcclxuICAgKi9cclxuICBtZW51QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZfX29wdGlvbl9fYnRuXCIpO1xyXG4gIG5hdlN1Yk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiKTtcclxuICB0b2dnbGVTaG93TmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3RvZ2dsZV9fYnRuXCIpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBBZGRzIGZ1bmN0aW9uIHRvIGNsb3NlIGFsbCBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgZWxlbWVudFxyXG4gICAgdGhpcy5jbG9zZV9tZW51KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIGZ1bmN0aW9ucyBmb3IgYWxsIG1lbnUgZWxlbWVudHMuXHJcbiAgICBmb3IgKGNvbnN0IG1lbnVCdG4gb2YgdGhpcy5tZW51QnRucyBhcyBhbnkpIHtcclxuICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zdWJNZW51Q3RybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIHJlc3BvbnNpdmUgZnVuY3Rpb25zIGZvciB0aGUgdG9nZ2xlIGJ1dHRvbnMuXHJcbiAgICB0aGlzLm5hdl90b2dnbGVfYnRuKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjbG9zZV9tZW51KCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjbG9zZXMgYWxsIG1lbnVzIHdoZW4gY2xpY2tlZCBvdXRzaWRlIHByIGFub3RoZXIgbmF2IG1lbnUuXHJcbiAgICAgKiBBbHNvIHdpbGwgY2xvc2UgYWxsIGZpbHRlciBtZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIENsb3NlIGFsbCBuYXYtbWVudXMgb24gY2xpY2sgb3V0c2lkZVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgdGhpcy5uYXZTdWJNZW51cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgdGhpcy5uYXZTdWJNZW51c1tpZHhdLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25MaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lbnVCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1lbnVCdG4gPSB0aGlzLm1lbnVCdG5zW2ldO1xyXG5cclxuICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIENsb3NlIGFsbCBkcm9wZG93bi1tZW51c1xyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uTGlzdCBvZiBvcHRpb25MaXN0cyBhcyBhbnkpIHtcclxuICAgICAgICAgIG9wdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG9zZSBvdGhlciBuYXZpZ2F0aW9uIG1lbnVzXHJcbiAgICAgICAgLy8gRWFjaCBidXR0b24gYW5kIHRoZWlyIGNoaWxkIGVsZW1lbnRzIHdpbGwgY29udGFpbiB0aGUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gXCJmaWx0ZXItZm9yXCIuXHJcbiAgICAgICAgLy8gTGlrZXdpc2UsIGVhY2ggZHJvcGRvd24gbWVudSBjb250YWluIHRoZSBzYW1lIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFRoaXMgY2hlY2tzIGZvciB0aGUgYnV0dG9uIHByZXNzZWQsIGlmIGl0cyBcImZpbHRlci1mb3JcIiBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBtYXRjaGVzIHRoYXQgb2YgaXRzIGRyb3Bkb3duIG9wdGlvbnMuIGlmIG5vdCwgdGhlbiBjbG9zZS5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWVudUJ0bnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSB0aGlzLm1lbnVCdG5zW2pdO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbS5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpICE9XHJcbiAgICAgICAgICAgIG1lbnVCdG4uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZz8uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdWJNZW51Q3RybChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aWxsIGhhbmRsZSBjbGljayBldmVudHMgb24gdGhlIG5hdmlnYXRpb24gZm9yIGV4cGFuZGluZ1xyXG4gICAgICogYW5kIGNvbGxhcHNpbmcgdGhlIHN1Yi1tZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnRzXHJcbiAgICB0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdGFyZ2V0Q2xhc3NlcyA9IHRhcmdldC5jbGFzc0xpc3Q7XHJcbiAgICBsZXQgc3ViTWVudTogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHRhcmdldENsYXNzZXMuY29udGFpbnMoXCJuYXYtc3ViLXByb2R1Y3RzXCIpKSB7XHJcbiAgICAgIHN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLm5hdi1zdWItcHJvZHVjdHNcIlxyXG4gICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXRDbGFzc2VzLmNvbnRhaW5zKFwibmF2LXN1Yi1yb29tc1wiKSkge1xyXG4gICAgICBzdWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy5uYXYtc3ViLXJvb21zXCJcclxuICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFwiTmF2aWdhdGlvbiBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBleHBhbmRlZCA9IHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChleHBhbmRlZCkge1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIik7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiKTtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBuYXZfdG9nZ2xlX2J0bigpIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgbmF2aWdhdGlvbiB0b2dnbGUgYnV0dG9uIC0gYSByZXNwb25zaXZlXHJcbiAgICAgKiBmZWF0dXJlIHZpZXdhYmxlIHdoZW4gdGhlIHNjcmVlbiB3aWR0aCBpcyBzbWFsbCBlbm91Z2guXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBvcHRpb25zTGlzdCA9IFtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fb3B0aW9uXCIpLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfX2FjY291bnQtYmFza2V0JylcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy50b2dnbGVTaG93TmF2QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zTGlzdFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgb3B0aW9uc0xpc3RbaV1bal0uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcHRpb24tLXNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyNi8wMS8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBQYWdpbmF0aW9uIE9iamVjdFxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBCdWlsZHMgdGhlIGxpbmsgKGhyZWYpIG9uIGVhY2ggcGFnaW5hdGlvbiBidXR0b24uIFRoaXMgaXMgYWNoaWV2ZWQgYnlcclxuLy8gdXNpbmcgdGhlIGN1cnJlbnQgdXJsIHRvIGJ1aWxkIG1vc3QgcGFydCBvZiB0aGUgaHJlZiBhbmQgYXBwZW5kaW5nIHRvIGl0XHJcbi8vIHRoZSBwYWdlIHF1ZXJ5LlxyXG4vL1xyXG4vLyBFYWNoIGVsZW1lbnQgd2lsbCBjb250YWluIGEgXCJwYWdlXCIgYXR0cmlidXRlIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBzZXQgdGhlXHJcbi8vIHBhZ2UgcGFydCBvZiB0aGUgaHJlZi5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uIHtcclxuICAvKiogQnVpbGRzIHRoZSBwYWdpbmF0aW9uIGxpbmsgKGhyZWYpLiAqL1xyXG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIEJ1aWxkcyB0aGUgbGlua3Mgb250byB0aGUgcGFnaW5hdGlvbiBsaW5rcyBpZiAjcGFnaW5hdGlvbiBleGlzdHMuICovXHJcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcclxuICAgICAgdGhpcy5idWlsZF9saW5rcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfbGlua3MoKSB7XHJcbiAgICAvKiogQnVpbGRzIGxpbmtzIG9udG8gdGhlIHBhZ2luYXRpb24gbGluayBlbGVtZW50cy4gKi9cclxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jb250YWluZXIhLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYWdpbmF0aW9uX19saW5rXCIpO1xyXG4gICAgY29uc3QgYmFzZUhyZWYgPVxyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8mKCguKj8mJCl8KHBhZ2U9WzAtOV17MSx9KXwocGFnZT0pKS9nLCBcIlwiKSArXHJcbiAgICAgIFwiJnBhZ2U9XCI7XHJcblxyXG4gICAgZm9yIChsZXQgbCA9IDA7IGwgPCBsaW5rcy5sZW5ndGg7IGwrKykge1xyXG4gICAgICBpZiAobGlua3NbbF0uZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgIT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgbGlua3NbbF0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBiYXNlSHJlZiArIGxpbmtzW2xdLmdldEF0dHJpYnV0ZShcInBhZ2VcIikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVVJQT1NFXHJcbi8vIC0tLS0tLS1cclxuLy8gRW5hYmxlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgcXVhbnRpdHkgY29tcG9uZW50LCB0aHVzIGVuYWJsaW5nICsvLVxyXG4vLyBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbiB0aGUgaW5wdXQgYm94LlxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTXHJcbi8vIC0tLS0tLS0tLS0tLS1cclxuLy8gX3F1YW50aXR5LnNjc3NcclxuLy9cclxuLy8gSFRNTCBGT1JNQVRcclxuLy8gLS0tLS0tLS0tLS1cclxuLy8gPGRpdiBjbGFzcz1cImMtcXVhbnRpdHlcIj5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LWRvd25cIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vICAgPGlucHV0IGNsYXNzPVwiYy1xdWFudGl0eV9faW5wdXRcIiB0eXBlPVwibnVtYmVyXCIvPlxyXG4vLyAgIDxidXR0b24gY2xhc3M9XCJjLXF1YW50aXR5X19idG5cIiBjb250cm9sPVwicXVhbnRpdHktdXBcIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gSW1wb3J0c1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUXVhbnRpdHlDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBmdW5jdGlvbmFsaXR5IG9udG8gdGhlIHF1YW50aXR5IGNvbXBvbmVudCB0aHVzIGVuYWJsaW5nIHRoZSArLy1cclxuICAgKiBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbnNpZGUgdGhlIGlucHV0IGJveC5cclxuICAgKi9cclxuXHJcbiAgY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICBcImMtcXVhbnRpdHlcIlxyXG4gICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAqL1xyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbnRhaW5lcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9zZXRfZWxlbWVudHModGhpcy5jb250YWluZXJzW2NdKTtcclxuICAgICAgY29uc3QgYnRuRG93biA9IGVsZW1lbnRzWzBdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBidG5VcCA9IGVsZW1lbnRzWzFdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBpbnB1dEJveCA9IGVsZW1lbnRzWzJdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IE51bWJlcihpbnB1dEJveC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpO1xyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IE51bWJlcihpbnB1dEJveC5nZXRBdHRyaWJ1dGUoXCJtYXhcIikpO1xyXG5cclxuICAgICAgdGhpcy5fYnVpbGRfbWludXNfYnV0dG9uKGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgICAgdGhpcy5fYnVpbGRfcGx1c19idXR0b24oYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgICB0aGlzLl9idWlsZF9pbnB1dF9ib3goYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfc2V0X2VsZW1lbnRzKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBjb250YWluZXIsIHdpbGwgcmV0dXJuIHRoZSBidXR0b25zIGFuZCBpbnB1dCBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYnRuRG93biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS1kb3duXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGJ0blVwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICdidXR0b25bY29udHJvbD1cInF1YW50aXR5LXVwXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0Qm94ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiaW5wdXQuYy1xdWFudGl0eV9faW5wdXRcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiBbYnRuRG93biwgYnRuVXAsIGlucHV0Qm94XTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX21pbnVzX2J1dHRvbihcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGlja2luZyB0aGUgbWludXMgYnV0dG9uLCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGJ1dCB3aWxsIHJlZHVjZVxyXG4gICAgICogYnkgb25lIHVudGlsIGl0IHJlYWNoZXMgaXRzIG1pbmltdW0gdmFsdWUsIGF0IHdoaWNoIHBvaW50LCB0aGUgYnV0dG9uXHJcbiAgICAgKiBiZWNvbWVzIGRpc2FibGVkLiBBbHNvIHdpbGwgcmVtb3ZlIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgcGx1c1xyXG4gICAgICogYnV0dG9uIGlmIGl0IGlzIGxlc3MgdGhhbiB0aGUgbWF4VmFsdWUuXHJcbiAgICAgKi9cclxuXHJcbiAgICBidG5Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChidG5Eb3duLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGlucHV0Qm94LnZhbHVlID0gU3RyaW5nKE51bWJlcihpbnB1dEJveC52YWx1ZSkgLSAxKTtcclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPCBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA9PT0gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfcGx1c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIHBsdXMgYnV0dG9uLCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGJ1dCB3aWxsIGluY3JlYXNlZFxyXG4gICAgICogYnkgb25lIHVudGlsIGl0IHJlYWNoZXMgaXRzIG1heGltdW0gdmFsdWUsIGF0IHdoaWNoIHBvaW50LCB0aGUgYnV0dG9uXHJcbiAgICAgKiBiZWNvbWVzIGRpc2FibGVkLiBBbHNvIHdpbGwgcmVtb3ZlIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgbWludXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBncmVhdGVyIHRoYW4gdGhlIG1pblZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGJ0blVwLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGlucHV0Qm94LnZhbHVlID0gU3RyaW5nKE51bWJlcihpbnB1dEJveC52YWx1ZSkgKyAxKTtcclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPiBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgYnRuRG93bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpID09PSBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfaW5wdXRfYm94KFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uY2UgYSBuZXcgdmFsdWUgaGFzIGJlZW4gZW50ZXJlZCBpbnRvIHRoZSBpbnB1dCBib3gsXHJcbiAgICAgKiBkaXNhYmxlL3JlLWVuYWJsZSB0aGUgcGx1cyBhbmQgbWludXMgYnV0dG9ucyBpbiBhY2NvcmRhbmNlIHdpdGggd2hldGhlclxyXG4gICAgICogdGhlIHZhbHVlIGlzIGVxdWFsIHRvIHRoZSBtaW4vbWF4IHZhbHVlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXRCb3gudmFsdWUpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIHZhbGlkLiBJZiBub3QsIHVwZGF0ZSBhdHRyaWJ1dGVzIHRoZSBoaWdobGlnaHRcclxuICAgICAgLy8gdGhpcyB0byB0aGUgdXNlciBhbmQgZGlzYWJsZSBidXR0b25zLlxyXG4gICAgICBpZiAoVmFsaWRhdGlvbi5jaGVja19pZl9wb3NpdGl2ZV9pbnQodmFsdWUpKSB7XHJcbiAgICAgICAgLy8gSW5jYXNlIHRoZSBidXR0b25zIHdlcmUgcHJldmlvdXNseSBkaXNhYmxlZCwgcmVzZXQgYnkgcmUtZW5hYmxpbmdcclxuICAgICAgICAvLyBldmVyeXRoaW5nLlxyXG4gICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgaW5wdXRCb3gucGFyZW50RWxlbWVudCEucmVtb3ZlQXR0cmlidXRlKCdpbnZhbGlkJyk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgdGhlIG1pbiB2YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA8PSBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgYWdhaW5zdCBidG5VcCdzIG1heCB2YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA+PSBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB2YWx1ZSBpcyBlaXRoZXIgPCAwIG9yIGEgZmxvYXQuXHJcbiAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgaW5wdXRCb3gucGFyZW50RWxlbWVudCEuc2V0QXR0cmlidXRlKCdpbnZhbGlkJywgJ3RydWUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTIvMDEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gUmVnaXN0cmF0aW9uIHBhZ2VzLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBXaGVuIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gsIHVwZGF0ZSB0aGUgYXR0cmlidXRlIG9mIHRoZSBwYXNzd29yZCBlbGVtZW50c1xyXG4vLyB0byBgaW52YWxpZD1cInRydWVcIi4gVGhpcyB3aWxsIGFsbG93IHRoZSB0aGUgQ1NTIHRvIGNoYW5nZSB0aGUgYm9yZGVyXHJcbi8vIG9mIHRoZSBwYXNzd29yZCBlbGVtZW50cyB0byByZWQgYW5kIHNob3cgYW4gZXJyb3IgbWVzc2FnZSBmb3IgYSBmZXcgc2Vjb25kcy5cclxuLy9cclxuLy8gSWYgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCwgdGhlbiBhZGQgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB0byB0aGUgc3VibWl0XHJcbi8vIGJ1dHRvbi5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlclBhc3N3b3JkQ2hlY2sge1xyXG4gIC8qKiBDaGVja3MgaWYgcGFzc3dvcmRzIG1hdGNoLCBpZiB0aGV5IGRvIG5vdCwgdGhlbiB1cGRhdGUgdGhlIGF0dHJpYnV0ZVxyXG4gICAqIG9mIHRoZSBwYXNzd29yZCBlbGVtZW50cyB3aGljaCB3aWxsIGluIHR1cm4gdXBkYXRlIHNpYmxpbmdzIHRvIHRha2Ugb25cclxuICAgKiBzb21lIENTUyBzdHlsaW5nIChjb250cm9sbGVkIHRocm91Z2ggQ1NTKS5cclxuICAgKi9cclxuICBwcml2YXRlIHBhc3N3b3JkRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJyZWdpc3Rlci1wYXNzd29yZFwiXHJcbiAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybVBhc3NFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInJlZ2lzdGVyLXBhc3N3b3JkLWNvbmZpcm1cIlxyXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJyZWdpc3Rlci1zdWJtaXRcIlxyXG4gICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBlcnJvck1zZ0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwicmVnaXN0ZXItZXJyb3JzXCJcclxuICApIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKiogQ29uc3RydWN0b3IgKi9cclxuICAgIHRoaXMuc2V0X2tleWJpbmRlcnMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgY2hlY2tfcGFzc3dvcmRzKCkge1xyXG4gICAgLyoqIENoZWNrcyBpZiB0aGUgcGFzc3dvcmRzIG1hdGNoLCBhbmQgaWYgc28sIGNoZWNrIHRoZWlyIGNvbXBsZXhpdHkuICovXHJcbiAgICBjb25zdCBwYXNzd29yZFR4dCA9IHRoaXMucGFzc3dvcmRFbGVtPy52YWx1ZTtcclxuICAgIGNvbnN0IGNvbmZpcm1QYXNzVHh0ID0gdGhpcy5jb25maXJtUGFzc0VsZW0/LnZhbHVlO1xyXG5cclxuICAgIGlmIChwYXNzd29yZFR4dCAmJiBjb25maXJtUGFzc1R4dCkge1xyXG4gICAgICBpZiAocGFzc3dvcmRUeHQgPT09IGNvbmZpcm1QYXNzVHh0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgY29tcGxleGl0eTpcclxuICAgICAgICAvLyBMZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA2IGFuZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBpbnRlZ2VyLlxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBhc3N3b3JkVHh0Lmxlbmd0aCA+PSA2ICYmXHJcbiAgICAgICAgICBwYXNzd29yZFR4dC5tYXRjaCgvWzAtOV0vKSAmJlxyXG4gICAgICAgICAgcGFzc3dvcmRUeHQubWF0Y2goL1tBLXpdLylcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTXNnRWxlbS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZyBhbmQgY29udGFpbiBhdCBsZWFzdCAxIG51bWJlci5cIjtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1zZ0VsZW0udGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgc2V0X2tleWJpbmRlcnMoKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1QYXNzRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZV9lbGVtZW50X2F0dHJzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgdXBkYXRlX2VsZW1lbnRfYXR0cnMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGlucHV0IGFuZCBidXR0b24gZWxlbWVudHMgdG8gYWNjb3JkYW5jZVxyXG4gICAgICogd2hldGhlciBvciBub3QgdGhlIHBhc3N3b3JkcyBtYXRjaC5cclxuICAgICAqL1xyXG4gICAgaWYgKHRoaXMuY2hlY2tfcGFzc3dvcmRzKCkpIHtcclxuICAgICAgdGhpcy5wYXNzd29yZEVsZW0ucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcclxuICAgICAgdGhpcy5jb25maXJtUGFzc0VsZW0ucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcclxuICAgICAgdGhpcy5zdWJtaXRCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkRWxlbS5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgdGhpcy5jb25maXJtUGFzc0VsZW0uc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcInRydWVcIik7XHJcbiAgICAgIHRoaXMuc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDgvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBNYW5hZ2VzIHRoZSBzZWFyY2ggZmlsdGVycyBvbiB0aGUgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBSZXNwb25zaWJsZSBmb3IgY2FsbGluZyB0aGUgc2VhcmNoIEFQSSB3aGljaCB3aWxsIGZpbHRlciByZXN1bHQgYmFzZWQgb25cclxuLy8gd2hhdCB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdXNpbmcgdGhlIGZpbHRlcnMuXHJcbi8vXHJcbi8vIFdpbGwgdXNlIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBiYXIncyBmb3JtIHRvIGludGVyYWN0IHdpdGggdGhlIEFQSS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJzIHtcclxuICAvKipcclxuICAgKiBXaWxsIGV4cGFuZCB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggYmFyIGFuZCB0aGUgZm9ybSBlbGVtZW50IHRvIGFsbG93IGl0IHRvXHJcbiAgICogdGFrZSBpbiB0aGUgZmlsdGVyIG9wdGlvbnMgYXMgcGFydCBvZiB0aGUgR0VUIHJlcXVlc3Qgd2hlbmV2ZXIgYSB1c2VyXHJcbiAgICogaW5pdGlhdGVzIGEgc2VhcmNoLlxyXG4gICAqXHJcbiAgICogQ2FsbHMgdGhlIEFQSSB0byBmaWx0ZXIgdGhlIHJlc3VsdHMuXHJcbiAgICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciBkb2VzIG5vdCByZXF1aXJlIGFueSBhcmd1bWVudHMgYW5kIHdpbGwgaW5zdGVhZCB1c2VcclxuICAgICAqIGVsZW1lbnRzIGZyb20gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZXhwYW5kX25hdl9zZWFyY2goKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9leHBhbmRfbmF2X3NlYXJjaCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogRXhwYW5kcyBvbiB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggZWxlbWVudHMgc28gdGhhdCB3aGVuIHNlbmRpbmcgYSBHRVRcclxuICAgICAqIHJlcXVlc3QsIGZpbHRlcnMgd2lsIGJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG5hdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcIm5hdl9fc2VhcmNoXCJcclxuICAgIClbMF0gYXMgSFRNTEZvcm1FbGVtZW50O1xyXG5cclxuICAgIC8vIEFkZCBoaWRkZW4gaW5wdXRzIHRvIGNvbnRhaW4gdGhlIHZhbHVlcyBvbiB0aGUgZmlsdGVycy5cclxuICAgIGNvbnN0IGlucHV0TmFtZXMgPSBbXCJmLW1pblByaWNlXCIsIFwiZi1tYXhQcmljZVwiLCBcImYtY2F0ZWdvcnlcIiwgXCJmLWNvbG91clwiXTtcclxuICAgIGZvciAoY29uc3QgaW5wdXROYW1lIG9mIGlucHV0TmFtZXMpIHtcclxuICAgICAgY29uc3QgaGlkZGVuSW5wdXROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcclxuICAgICAgICBcIklOUFVUXCJcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0TmFtZSk7XHJcbiAgICAgIG5hdkZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuSW5wdXROb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGhpZGRlbiBpbnB1dHMgd2hlbiBhIGZpbHRlciBpcyBzZWxlY3RlZFxyXG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgZm9yIChsZXQgb3B0ID0gMDsgb3B0IDwgZHJvcGRvd25PcHRpb25zLmxlbmd0aDsgb3B0KyspIHtcclxuICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBkcm9wZG93bk9wdGlvbnNbb3B0XTtcclxuICAgICAgbGV0IGhpZGRlbklucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgc3dpdGNoIChkcm9wZG93bk9wdGlvbi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpKSB7XHJcbiAgICAgICAgY2FzZSBcIm1pbi1wcmljZVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJtYXgtcHJpY2VcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1tYXhQcmljZVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY2F0ZWdvcnlcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1jYXRlZ29yeVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY29sb3VyXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZi1jb2xvdXJcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGhpZGRlbklucHV0KSB7XHJcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgaGlkZGVuSW5wdXQhLnZhbHVlID0gZHJvcGRvd25PcHRpb24ucHJldmlvdXNFbGVtZW50U2libGluZyEudGV4dENvbnRlbnQhO1xyXG5cclxuICAgICAgICAgIC8vIENhbGxzIHRoZSBzZWFyY2ggcmVzdWx0IEFQSSBhbmQgdGhlbiBmaWx0ZXIgdGhlIHJlc3VsdHMuXHJcbiAgICAgICAgICBjb25zdCBBUElQYXRoID0gdGhpcy5fQVBJX3BhdGgoKTtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KSBhcyBbXTtcclxuICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJfcmVzdWx0cyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9BUElfcGF0aCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBBUEkgaHJlZiBwYXRoIHdoZXJlIHRoZSByZXF1ZXN0IHdpbGwgYmUgc2VudC5cclxuICAgICAqIFRoaXMgaW1wbGVtZW50cyB0aGUgZmlsdGVycyB3aXRoaW4gdGhlIGFjdHVhbCBVUkwuXHJcbiAgICAgKi9cclxuICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcIi9zZWFyY2gvXCIsIFwiL3NlYXJjaC1yZXN1bHRzL1wiKTtcclxuXHJcbiAgICBjb25zdCBoaWRkZW5Jbk1pblByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1taW5QcmljZVwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoaWRkZW5Jbk1heFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1tYXhQcmljZVwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoaWRkZW5JbkNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1jYXRlZ29yeVwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoaWRkZW5JbkNvbG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImYtY29sb3VyXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaGlkZGVuSW5NaW5QcmljZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtbWluUHJpY2U9XCIgKyBoaWRkZW5Jbk1pblByaWNlLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1taW5QcmljZT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLW1pblByaWNlPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluTWF4UHJpY2UudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLW1heFByaWNlPVwiICsgaGlkZGVuSW5NYXhQcmljZS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtbWF4UHJpY2U9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1tYXhQcmljZT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5JbkNhdGVnb3J5LnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1jYXRlZ29yeT1cIiArIGhpZGRlbkluQ2F0ZWdvcnkudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLWNhdGVnb3J5PS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtY2F0ZWdvcnk9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5Db2xvdXIudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLWNvbG91cj1cIiArIGhpZGRlbkluQ29sb3VyLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1jb2xvdXI9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1jb2xvdXI9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaHJlZjtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9maWx0ZXJfcmVzdWx0cyhBUElSZXN1bHRzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXJzIHRoZSByZXN1bHRzIG9uIHRoZSBzZWFyY2ggcGFnZSBpbiBhY2NvcmRhbmNlIHRvIHRoZSBkYXRhXHJcbiAgICAgKiByZXRyaWV2ZWQgZnJvbSB0aGUgc2VhcmNoIEFQSS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzJylbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcmlnUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHNfX3Jlc3VsdCcpO1xyXG5cclxuICAgIGxldCB2YWxpZFByb2R1Y3RzID0gW107XHJcbiAgICByZXN1bHQ6IEpTT047XHJcbiAgICBmb3IgKGNvbnN0IHJlc3VsdCBpbiBBUElSZXN1bHRzKSB7XHJcbiAgICAgIHZhbGlkUHJvZHVjdHMucHVzaChBUElSZXN1bHRzW3Jlc3VsdF0ucHJvZHVjdF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgcklEID0gMDsgcklEPG9yaWdSZXN1bHRzLmxlbmd0aDsgcklEKyspIHtcclxuICAgICAgaWYgKHZhbGlkUHJvZHVjdHMuaW5jbHVkZXMoTnVtYmVyKG9yaWdSZXN1bHRzW3JJRF0uZ2V0QXR0cmlidXRlKCdJRCcpISkpKSB7XHJcbiAgICAgICAgb3JpZ1Jlc3VsdHNbcklEXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3JpZ1Jlc3VsdHNbcklEXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDI4LzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb250YWlucyBpbXBvcnRzIG9mIGFsbCB0aGUgbWFpbiBjbGFzc2VzLlxyXG4vLyBCZWhhdmVzIGFzIHRoZSBtYWluIGh1YiBmb3IgdGhlIGpzIGJ1bmRsZS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnVcIjtcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3F1YW50aXR5XCI7XHJcbmltcG9ydCB7IFNlYXJjaEZpbHRlcnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaF9maWx0ZXJzXCI7XHJcbmltcG9ydCB7IEV4dGVuZFByb2R1Y3RQYWdlIH0gZnJvbSBcIi4vcGFnZXMvcHJvZHVjdHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEltZ3MgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3NcIjtcclxuaW1wb3J0IHsgQmFza2V0U3RhdGUgfSBmcm9tIFwiLi9zdGF0ZS9iYXNrZXQtaXRlbXNcIjtcclxuaW1wb3J0IHsgQmFza2V0UGFnZSB9IGZyb20gXCIuL3BhZ2VzL2Jhc2tldC9iYXNrZXRcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJQYXNzd29yZENoZWNrIH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3Rlci12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcclxuXHJcbi8vIEJ1aWxkIHRoZSBuYXZpZ2F0aW9uXHJcbm5ldyBOYXZpZ2F0aW9uKCk7XHJcblxyXG4vLyBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBiYXNrZXRcclxubmV3IEJhc2tldFN0YXRlKCk7XHJcblxyXG4vLyBCdWlsZCB0aGUgZHJvcGRvd24gbWVudVxyXG5uZXcgRHJvcGRvd25NZW51KCk7XHJcblxyXG4vLyBCdWlsZCB0aGUgc2VhcmNoIGZpbHRlcnNcclxubmV3IFNlYXJjaEZpbHRlcnMoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBwYWdpbmF0aW9uXHJcbm5ldyBQYWdpbmF0aW9uKCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBQQUdFIFNQRUNJRklDIEpBVkFTQ1JJUFRcclxuY29uc3QgQ1VSUkVOVF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHJcbmlmIChDVVJSRU5UX1VSTC5zZWFyY2goL1xcL3Byb2R1Y3RzXFwvWzAtOV17MSx9LykgIT0gLTEpIHtcclxuICAvLyBQcm9kdWN0IFBhZ2VcclxuICBuZXcgRXh0ZW5kUHJvZHVjdFBhZ2UoKTtcclxuICBuZXcgUXVhbnRpdHlDb21wb25lbnQoKTtcclxuICBuZXcgQ2Fyb3VzZWxJbWdzKCk7XHJcbn0gZWxzZSBpZiAoQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCIvYmFza2V0L1wiKSkge1xyXG4gIC8vIEJhc2tldCBQYWdlXHJcbiAgbmV3IEJhc2tldFBhZ2UoKTtcclxufSBlbHNlIGlmIChDVVJSRU5UX1VSTC5pbmNsdWRlcyhcInVzZXIvcmVnaXN0ZXJcIikpIHtcclxuICAvLyBBY2NvdW50IFJlZ2lzdHJhdGlvbiBwYWdlXHJcbiAgbmV3IFJlZ2lzdGVyUGFzc3dvcmRDaGVjaygpO1xyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDUvMDEvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBUaGUgYmFza2V0IHBhZ2UuXHJcbi8vXHJcbi8vIEZVTkNUSU9OQUxJVFlcclxuLy8gLSBDYWxscyB0aGUgYmFza2V0LWluZm8tQVBJIHdoZXJlIHVzaW5nIHRoZSBsb2NhbCBzdG9yYWdlIGl0IGlzIGFibGUgdG8gc2VuZFxyXG4vLyAgIGEgR0VUIHJlcXVlc3QgdG8gdGVoIEFQSSBzaXRlIHVzaW5nIHRoZSBwcmltYXJ5IGtleXMgb2YgdGhlIGl0ZW1zIGluIHRoZVxyXG4vLyAgIGJhc2tldC5cclxuLy8gLSBCdWlsZHMgcGFydCBvZiB0aGUgRE9NIHdoaWNoIHdpbGwgZGlzcGxheSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgd2hhdCBpcyBpblxyXG4vLyAgIGJhc2tldC5cclxuLy8gLSBTZXRzIGtleSBiaW5kZXJzIG9uIHRoZSBxdWFudGl0eSBvcHRpb24gYW5kIFwieFwiIG9wdGlvbiBzbyB0aGF0IGl0IHVwZGF0ZXNcclxuLy8gICB0aGUgYmFza2V0LlxyXG4vLyAtIFVwZGF0ZXMgdG90YWxzIHNlY3Rpb24gb24gbG9hZCBpZiB0aGVyZSBpcyBzb21ldGhpbmcgaW4gdGhlIGJhc2tldC5cclxuLy8gLSBTZXQga2V5IGJpbmRlcnMgc28gdGhhdCB3aGVuZXZlciB0aGVyZSBpcyBhIGNoYW5nZSB0byB0aGUgYmFza2V0IGl0ZW1zLFxyXG4vLyAgIHRoZSB0b3RhbHMgd2lsbCBhbHNvIHVwZGF0ZS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIElNUE9SVFNcclxuaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBOdW1iZXJGb3JtYXQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL251bWJlcl9mb3JtYXRcIjtcclxuaW1wb3J0IHsgQmFza2V0U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcbmltcG9ydCB7IFF1YW50aXR5Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVhbnRpdHlcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBCYXNrZXRQYWdlIGV4dGVuZHMgQmFza2V0U3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgYnVpbGQgZWxlbWVudHMgb250byBiYXNrZXQgcGFnZSB1c2luZyBhbiBBUEkgdG8gcmV0cmlldmVcclxuICAgKiBpbmZvcm1hdGlvbiBvbiBwcm9kdWN0cyBjdXJyZW50bHkgaW4gdGhlIHVzZXIncyBiYXNrZXQgKGluZm9ybWF0aW9uXHJcbiAgICogc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2UpXHJcbiAgICovXHJcblxyXG4gIC8vIFRoZSBtYWluIGxvY2F0aW9uIGFzIHRvIHdoZXJlIGVhY2ggcHJvZHVjdCB3aWxsIGJlIGluc2VydGVkIGZyb20gdGhlXHJcbiAgLy8gdXNlcidzIGJhc2tldC5cclxuICBzdW1tYXJ5SXRlbXNQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYmFza2V0LXN1bW1hcnktZGF0YVwiXHJcbiAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgYmFza2V0SXRlbXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBwcm9jZXNzIGluIHdoaWNoIHRoZSBiYXNrZXQgcGFnZSBET00gaXMgYnVpbGQuXHJcbiAgICAgKi9cclxuICAgIHN1cGVyKCk7XHJcbiAgICBpZiAodGhpcy5pdGVtcyAhPSBudWxsICYmIHRoaXMuaXRlbXMgIT0gXCJ7fVwiKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIEpTT04ucGFyc2UodGhpcy5pdGVtcykpIHtcclxuICAgICAgICB0aGlzLmJhc2tldEl0ZW1zLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYmFza2V0SXRlbXNTdHIgPSB0aGlzLmJhc2tldEl0ZW1zLmpvaW4oXCIsXCIpO1xyXG5cclxuICAgICAgLy8gQ2FsbCBBUElcclxuICAgICAgY29uc3QgQVBJUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgICAgL2Jhc2tldC4qLyxcclxuICAgICAgICBcImJhc2tldC1pbmZvLUFQSS8/cGtzPVwiICsgYmFza2V0SXRlbXNTdHJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgY29uc3QgQVBJUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIGlmIChBUElSZXNwb25zZS5wcm9kdWN0c0luZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZF9iYXNrZXRfc3VtbWFyeShBUElSZXNwb25zZS5wcm9kdWN0c0luZm8pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9iYXNrZXRfc3VtbWFyeShhbGxQcm9kdWN0czogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIGVhY2ggZWxlbWVudCBpbnRvIHRoZSBET00gaW5zaWRlIHRoZSB0YXJnZXQgcGFyZW50IGNvbnRhaW5lci5cclxuICAgICAqIFRoZXJlIGVsZW1lbnRzIGJlaW5nIGFkZGVkIHdpbGwgYmUgdGhlIHByb2R1Y3QncyBpbWFnZSwgbmFtZSwgc3RvcmVcclxuICAgICAqIG5hbWUgLCBjb2xvdXIsIHF1YW50aXR5IG9wdGlvbnMsIHByaWNlIGFuZCBhIGJ1dHRvbiB0byByZW1vdmUgYW4gaXRlbVxyXG4gICAgICogZnJvbSB0aGUgYmFza2V0LlxyXG4gICAgICpcclxuICAgICAqIFRoZSBhcnJhbmdlbWVudCBvZiB0aGUgSFRNTCBpcyBzdWNoIHRoYXQgdGhlIGltYWdlIGlzIG9uIHRoZSBsZWZ0IGhhbmRcclxuICAgICAqIHNpZGUuIFByb2R1Y3QgaW5mb3JtYXRpb24gYWxvbmcgd2l0aCB0aGUgcXVhbnRpdHkgb3B0aW9ucyBhcmUgaW4gdGhlXHJcbiAgICAgKiBtaWRkbGUuIFByaWNlIGFuZCB0aGUgb3B0aW9uIHRvIHJlbW92ZSBhbiBpdGVtIGlzIG9uIHRoZSByaWdodCBoYW5kXHJcbiAgICAgKiBzaWRlLiBBcyBzdWNoLCB0aGVyZSB3aWxsIGJlIHRocmVlIHN1Yi1jb250YWluZXJzIHdoZXJlIGVhY2ggZWxlbWVudFxyXG4gICAgICogd2lsbCBiZSBhZGRlZCB0byB0aGF0IGNvbnRhaW5lci5cclxuICAgICAqXHJcbiAgICAgKiBFYWNoIG9mIHRob3NlIGNvbnRhaW5lcnMgd2lsbCB0aGVuIGJlIGFkZGVkIHRvIGEgbWFpbiBjb250YWluZXJcclxuICAgICAqIHJlcHJlc2VudGluZyBhIHJvdyBvZiBkYXRhIHdoaWNoIHdpbGwgdGhlbiBiZSBhZGRlZCB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBwcm9kdWN0UGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL2Jhc2tldC4qLywgXCJwcm9kdWN0cy9cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhbGxQcm9kdWN0c1tpXTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBOdW1iZXIoSlNPTi5wYXJzZSh0aGlzLml0ZW1zKVtwcm9kdWN0LnByb2R1Y3RJZF0pO1xyXG5cclxuICAgICAgLy8gTWFpbiBjb250YWluZXIgYW5kIHN1Yi1jb250YWluZXIuXHJcbiAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBjb25zdCBwcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAvLyBEaXYgdG8gY29udGFpbiBhbGwgcHJvZHVjdCBlbGVtZW50cywgd2hpY2ggd2lsbCB0aGVuIGJlIGFwcGVuZGVkXHJcbiAgICAgIC8vIGludG8gdGhlIHBhcmVudCBlbGVtZW50LlxyXG4gICAgICBtYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd1wiO1xyXG4gICAgICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInByb2R1Y3QtaWRcIiwgcHJvZHVjdC5wcm9kdWN0SWQpO1xyXG5cclxuICAgICAgaW1nQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fY29udGFpbmVyIGJhc2tldC1zdW1tYXJ5X19yb3dfX2NvbnRhaW5lci0taW1nXCJcclxuICAgICAgaW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2NvbnRhaW5lclwiXHJcbiAgICAgIHByaWNlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fY29udGFpbmVyXCJcclxuXHJcbiAgICAgIGltZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRzJywgJ3Byb2R1Y3QtaW1nJylcclxuICAgICAgaW5mb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRzJywgJ3Byb2R1Y3QtaW5mbycpXHJcbiAgICAgIHByaWNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29udGVudHMnLCAncHJvZHVjdC1wcmljZScpXHJcblxyXG4gICAgICAvLyBQcm9kdWN0IEltYWdlIEVtYmVkZGVkIGluIExpbmsgRWxlbWVudFxyXG4gICAgICBjb25zdCBpbWdBVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIGltZ0FUYWcuY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhXCI7XHJcbiAgICAgIGltZ0FUYWcuaHJlZiA9IHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIGltZ0FUYWcuc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LWltYWdlXCIpO1xyXG4gICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaW1nRWxlbS5zcmMgPSBwcm9kdWN0LmltYWdlO1xyXG4gICAgICBpbWdFbGVtLmFsdCA9IFwiSW1hZ2Ugb2YgXCIgKyBwcm9kdWN0LnByb2R1Y3ROYW1lO1xyXG4gICAgICBpbWdBVGFnLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBOYW1lXHJcbiAgICAgIGNvbnN0IG5hbWVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIG5hbWVFbGVtLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fZGF0YVwiO1xyXG4gICAgICBuYW1lRWxlbS5ocmVmID0gcHJvZHVjdFBhZ2UgKyBwcm9kdWN0LnByb2R1Y3RJZDtcclxuICAgICAgbmFtZUVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LW5hbWVcIik7XHJcbiAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5wcm9kdWN0TmFtZTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3QgU3RvcmVcclxuICAgICAgY29uc3Qgc3RvcmVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIHN0b3JlRWxlbS5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2RhdGFcIjtcclxuICAgICAgc3RvcmVFbGVtLmhyZWYgPSBcIi9zdG9yZXMvXCIgKyBwcm9kdWN0LnN0b3JlSWQ7XHJcbiAgICAgIHN0b3JlRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3Qtc3RvcmVcIik7XHJcbiAgICAgIHN0b3JlRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3Quc3RvcmVOYW1lO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBDb2xvdXJcclxuICAgICAgY29uc3QgY29sb3VyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICBjb2xvdXJFbGVtLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fZGF0YVwiO1xyXG4gICAgICBjb2xvdXJFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1jb2xvdXJcIik7XHJcbiAgICAgIGNvbG91ckVsZW0udGV4dENvbnRlbnQgPSBwcm9kdWN0LmNvbG91ck5hbWU7XHJcblxyXG4gICAgICAvLyBRdWFudGl0eVxyXG4gICAgICAvLyBOT1RFOiBUaGUgSFRNTCBmb3JtYXQgbXVzdCBmb2xsb3cgdGhlIHN0cnVjdHVyZSBkZWZpbmVkIGluIHRoZSBxdWFudGl0eVxyXG4gICAgICAvLyBjb21wb25lbnQuXHJcbiAgICAgIGNvbnN0IHF1YW50aXR5Q29udGFpbmVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHkgYmFza2V0LXN1bW1hcnlfX3Jvd19fZnVuY3Rpb25cIjtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmlkID0gXCJwcm9kdWN0LVwiICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInF1YW50aXR5XCIpO1xyXG5cclxuICAgICAgY29uc3QgcXVhbnRpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBxdWFudGl0eUlucHV0LmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9faW5wdXRcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5taW4gPSBcIjBcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5zdGVwID0gXCIxXCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQubWF4ID0gcHJvZHVjdC5pbnZlbnRvcnk7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBpdGVtcy50b1N0cmluZygpO1xyXG4gICAgICBxdWFudGl0eUlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGVudGVyZWQgaXMgYSBwb3NpdGl2ZSBpbnRlZ2VyIHRoZW4gdGhlIGNlcnRhaW4gdXBkYXRlc1xyXG4gICAgICAgIC8vIHdpbGwgdGFrZSBwbGFjZS5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdWFudGl0eUlucHV0LnZhbHVlKTtcclxuICAgICAgICBpZiAoVmFsaWRhdGlvbi5jaGVja19pZl9wb3NpdGl2ZV9pbnQoTnVtYmVyKHF1YW50aXR5SW5wdXQudmFsdWUpKSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGVudGVyZWQgaXMgZ3JlYXRlciB0aGFuIHRoZSBtYXgsIHRoZW4gc2V0IGl0IHRvIHRoZSBtYXguXHJcbiAgICAgICAgICBsZXQgdmFsdWUgPSBOdW1iZXIocXVhbnRpdHlJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPiBOdW1iZXIocXVhbnRpdHlJbnB1dC5tYXgpKSB7XHJcbiAgICAgICAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBxdWFudGl0eUlucHV0Lm1heDtcclxuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIocXVhbnRpdHlJbnB1dC5tYXgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgbG9jYWwgc3RvcmFnZSAodXNlcidzIGJhc2tldClcclxuICAgICAgICAgIHRoaXMudXBkYXRlX3NpbmdsZV9pdGVtKHByb2R1Y3QucHJvZHVjdElkLCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBwcmljZVxyXG4gICAgICAgICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gKHZhbHVlICogcHJvZHVjdC5wcmljZSkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJhc2tldCB0b3RhbHNcclxuICAgICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbWludXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBtaW51c0J0bi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0blwiO1xyXG4gICAgICBtaW51c0J0bi5zZXRBdHRyaWJ1dGUoXCJjb250cm9sXCIsIFwicXVhbnRpdHktZG93blwiKTtcclxuICAgICAgbWludXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJlbW92ZV9hbl9pdGVtKHByb2R1Y3QucHJvZHVjdElkLCBwcm9kdWN0LnByaWNlLCBwcmljZVNwYW4pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgcGx1c0J0bi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0blwiO1xyXG4gICAgICBwbHVzQnRuLnNldEF0dHJpYnV0ZShcImNvbnRyb2xcIiwgXCJxdWFudGl0eS11cFwiKTtcclxuICAgICAgcGx1c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWRkX2FuX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHByb2R1Y3QucHJpY2UsIHByaWNlU3Bhbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICB9KTtcclxuLy9cclxuICAgICAgY29uc3QgbWludXNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIG1pbnVzQnRuU3Bhbi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiO1xyXG4gICAgICBtaW51c0J0blNwYW4udGV4dENvbnRlbnQgPSBcIi1cIjtcclxuLy9cclxuICAgICAgY29uc3QgcGx1c0J0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgcGx1c0J0blNwYW4uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19idG5fX3RleHRcIjtcclxuICAgICAgcGx1c0J0blNwYW4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuLy9cclxuICAgICAgbWludXNCdG4uYXBwZW5kQ2hpbGQobWludXNCdG5TcGFuKTtcclxuICAgICAgcGx1c0J0bi5hcHBlbmRDaGlsZChwbHVzQnRuU3Bhbik7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChtaW51c0J0bik7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChxdWFudGl0eUlucHV0KTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKHBsdXNCdG4pO1xyXG4vL1xyXG4gICAgICAvLyBQcmljZVxyXG4gICAgICBjb25zdCBwcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgcHJpY2VFbGVtLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fZGF0YVwiO1xyXG4gICAgICBwcmljZUVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXByaWNlLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHBvdW5kSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBwb3VuZEkudGV4dENvbnRlbnQgPSBcIsKjXCI7XHJcbiAgICAgIHBvdW5kSS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtcHJpY2UtY3VycmVuY3lcIik7XHJcbiAgICAgIHByaWNlRWxlbS5hcHBlbmRDaGlsZChwb3VuZEkpO1xyXG4vL1xyXG4gICAgICBjb25zdCBwcmljZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgcHJpY2VTcGFuLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS12YWx1ZVwiKTtcclxuICAgICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgICAgTnVtYmVyKHByb2R1Y3QucHJpY2UpICogaXRlbXNcclxuICAgICAgKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHByaWNlU3Bhbik7XHJcblxyXG4gICAgICAvLyBSZW1vdmUgSXRlbSBCdXR0b25cclxuICAgICAgY29uc3QgcmVtb3ZlSXRlbVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uY2xhc3NOYW1lID0gXCJiYXNrZXRfX2ljb25cIjtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJyZW1vdmUtaXRlbVwiKTtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBPbiByZW1vdmFsLCB1cGRhdGUgdGhlIERPTSBhbmQgdGhlIGJhc2tldC9sb2NhbCBzdG9yYWdlIGFjY29yZGluZ2x5LlxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX3dob2xlX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIG1haW5Db250YWluZXIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUl0ZW1JID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklcIik7XHJcbiAgICAgIHJlbW92ZUl0ZW1JLmNsYXNzTmFtZSA9IFwiZmEgZmEtdGltZXNcIjtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbUkpO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbVNwYW4pO1xyXG5cclxuICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIHRoZWlyIHJlc3BlY3RpdmUgY29udGFpbmVycywgYXBwZW5kIHRoYXQgY29udGFpbmVyXHJcbiAgICAgIC8vIHRvIHRoZSBtYWluIGNvbnRhaW5lciBhbmQgdGhlbiBmaW5hbGx5IGFwcGVuZCB0aGUgbWFpbiBjb250YWluZXIgdG8gdGhlXHJcbiAgICAgIC8vIERPTSB0YXJnZXQgZWxlbWVudC5cclxuICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0FUYWcpXHJcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUVsZW0pXHJcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcmVFbGVtKVxyXG4gICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG91ckVsZW0pXHJcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocXVhbnRpdHlDb250YWluZXJFbGVtKVxyXG4gICAgICBwcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZUVsZW0pXHJcbiAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKVxyXG4gICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpXHJcbiAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2VDb250YWluZXIpXHJcbiAgICAgIHRoaXMuc3VtbWFyeUl0ZW1zUGFyZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwbHkgdGhlIEphdmFTY3JpcHQgdG8gZWFjaCBxdWFudGl0eSBjb21wb25lbnQuXHJcbiAgICBuZXcgUXVhbnRpdHlDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgdXBkYXRlX2Jhc2tldF90b3RhbHMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHRvdGFscyBzZWN0aW9uIGluIHRoZSBiYXNrZXQgcGFnZS5cclxuICAgICAqIFRoZSBIVE1MIGRlZmF1bHQgYmVoYXZpb3IgaXMgdG8gc2V0IHRoZSBsb2FkcyB0aGUgZWxlbWVudHMgYW5kIHNldCB0aGVcclxuICAgICAqIHZhbHVlcyB0byDCozAuMDAgZm9yIGVhY2ggZWxlbWVudC5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCB1cGRhdGUgdGhlIHRvdGFscy5cclxuICAgICAqL1xyXG4gICAgLy8gQmFza2V0IEVsZW1lbnRzIGluIHRoZSBET01cclxuICAgIGNvbnN0IHN1YnRvdGFsRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0LXN1YnRvdGFsXCIpIVxyXG4gICAgICAuY2hpbGRyZW5bMV0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgY29uc3QgdmF0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0LXZhdFwiKSFcclxuICAgICAgLmNoaWxkcmVuWzFdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGNvbnN0IHRvdGFsRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0LXRvdGFsXCIpIVxyXG4gICAgICAuY2hpbGRyZW5bMV0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgIC8vIEluaXRpYWwgVmFsdWVcclxuICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuXHJcbiAgICAvLyBSZXRyaWV2ZSBhbGwgZWxlbWVudHMgd2hlcmUgdGhlcmUgaXMgYSBwcmljZSBhbmQgaXRlcmF0aXZlbHkgdXBkYXRlXHJcbiAgICAvLyB0aGUgdG90YWwgcHJpY2UuXHJcbiAgICBjb25zdCBwcmljZUVsZW1zID0gZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYmFza2V0LXN1bW1hcnktZGF0YVwiKSFcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tmaWVsZD1cInByb2R1Y3QtcHJpY2UtdmFsdWVcIl0nKTtcclxuXHJcbiAgICBmb3IgKGxldCBwcmljZUlkeCA9IDA7IHByaWNlSWR4IDwgcHJpY2VFbGVtcy5sZW5ndGg7IHByaWNlSWR4KyspIHtcclxuICAgICAgdG90YWxQcmljZSArPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwX3RvX2Zsb2F0KFxyXG4gICAgICAgIHByaWNlRWxlbXNbcHJpY2VJZHhdLnRleHRDb250ZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBET00gd2lsbCB0aGUgbmV3IHRvdGFsIGZpZ3VyZXMuXHJcbiAgICBjb25zdCBzdWJUb3RhbCA9IHRvdGFsUHJpY2UgLyAxLjI7XHJcbiAgICBjb25zdCB2YXQgPSB0b3RhbFByaWNlIC0gc3ViVG90YWw7XHJcblxyXG4gICAgc3VidG90YWxFbGVtLnRleHRDb250ZW50ID0gc3ViVG90YWwudG9GaXhlZCgyKTtcclxuICAgIHZhdEVsZW0udGV4dENvbnRlbnQgPSB2YXQudG9GaXhlZCgyKTtcclxuICAgIHRvdGFsRWxlbS50ZXh0Q29udGVudCA9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBhcmF0ZWRfMmRwKHRvdGFsUHJpY2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSByZW1vdmVfYW5faXRlbShcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC4gRHVyaW5nIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwcm9kdWN0SWQ6IHN0cmluZyxcclxuICAgIHByaWNlOiBzdHJpbmcsXHJcbiAgICBwcmljZUVsZW06IEhUTUxFbGVtZW50XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVtb3ZlX2l0ZW0oTnVtYmVyKHByb2R1Y3RJZCksIDEpO1xyXG4gICAgcHJpY2VFbGVtLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgIE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBfdG9fZmxvYXQocHJpY2VFbGVtLnRleHRDb250ZW50KSAtIE51bWJlcihwcmljZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGFkZF9hbl9pdGVtKFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LiBEdXJpbmcgdGhlIHByb2Nlc3MsIGl0IHdpbGwgdXBkYXRlXHJcbiAgICAgKiB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgdXBkYXRlIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHByb2R1Y3RJZDogc3RyaW5nLFxyXG4gICAgcHJpY2U6IHN0cmluZyxcclxuICAgIHByaWNlRWxlbTogSFRNTEVsZW1lbnRcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5hZGRfaXRlbShOdW1iZXIocHJvZHVjdElkKSwgMSk7XHJcbiAgICBwcmljZUVsZW0udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcChcclxuICAgICAgTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcF90b19mbG9hdChwcmljZUVsZW0udGV4dENvbnRlbnQpICsgTnVtYmVyKHByaWNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgcmVtb3ZlX3dob2xlX2l0ZW0ocHJvZHVjdElkOiBzdHJpbmcsIHBhcmVudENvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBlbnRpcmUgaXRlbSBmcm9tIHRoZSBiYXNrZXQuIEluIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogbG9jYWwgc3RvcmFnZSBhbmQgdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZW1vdmVfZW50aXJlX2l0ZW0ocHJvZHVjdElkKTtcclxuICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyNy8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIEZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBXaWxsIGhhbmRsZSB0aGUgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLiBUaGVzZSBpbmNsdWRlIHRoZVxyXG4vLyBmb2xsb3dpbmc6XHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgb250byB0aGUgSFRNTCBhZGRpbmcgb250byB0aGUgY29sb3VycyBmaWx0ZXIgb3B0aW9ucyBhcyB3ZWxsIGFzXHJcbi8vICAgIHRoZSBwcm9kdWN0IGluZm8gc2VjdGlvbi4gVGhlcmUgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB3aGF0IG90aGVyXHJcbi8vICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4vLyAgICByZXRyaWV2ZWQgZnJvbSBhbiBBUEkuXHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuLy8gICAgdG8gYmUgYWRkZWQgdG8gdGhlIGJhc2tldCBhbmQgZm9yIHRoZSBwYWdlIHRvIGJlIHJlZnJlc2hlZC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZFByb2R1Y3RQYWdlIGV4dGVuZHMgQmFza2V0U3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgaGFuZGxlIHRoZSBKUyBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuIFRoZXNlIGluY2x1ZGUgdGhlXHJcbiAgICogZm9sbG93aW5nOlxyXG4gICAqXHJcbiAgICogIC0gV2lsbCBidWlsZCBvbnRvIHRoZSBIVE1MIGFkZGluZyBvbnRvIHRoZSBjb2xvdXJzIGZpbHRlciBvcHRpb25zIGFzIHdlbGwgYXNcclxuICAgKiAgICB0aGUgcHJvZHVjdCBpbmZvIHNlY3Rpb24uIFRoZXJlIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gd2hhdCBvdGhlclxyXG4gICAqICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4gICAqICAgIHJldHJpZXZlZCBmcm9tIGFuIEFQSS5cclxuICAgKlxyXG4gICAqICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuICAgKiAgICB0byBiZSBhZGRlZCB0byB0aGUgYmFza2V0IGFuZCBmb3IgdGhlIHBhZ2UgdG8gYmUgcmVmcmVzaGVkLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogLSBSZXRyaWV2ZXMgZGF0YSBmcm9tIHRoZSBBUEkgYW5kIGNhbGxzIG1ldGhvZHMgdG8gYnVpbGQgb250byB0aGUgRE9NLlxyXG4gICAgICogLSBBZGRzIGZ1bmN0aW9uYWxpdHkgb250byB0aGUgXCJhZGQgdG8gYmFza2V0IGJ1dHRvblwiLlxyXG4gICAgICovXHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uc3QgQVBJUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgIFwiL3Byb2R1Y3RzL1wiLFxyXG4gICAgICBcIi9wcm9kdWN0cy9pbmZvLWFwaS9cIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIC8vIEFkZGluZyBjb2xvdXIgdmFyaWF0aW9uc1xyXG4gICAgICAgIGlmIChkYXRhLmNvbG91cnMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfY29sb3VycyhkYXRhLmNvbG91cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgb3RoZXIgcHJvZHVjdHMgb2YgdGhlIHNhbWUgc2V0XHJcbiAgICAgICAgaWYgKGRhdGEuc2V0cykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9wcm9kdWN0X3NldHMoZGF0YS5zZXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIHNpbWlsYXIgcHJvZHVjdHNcclxuICAgICAgICBpZiAoZGF0YS5zaW1pbGFyKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoZGF0YS5zaW1pbGFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIGZlYXR1cmVzIGluZm9ybWF0aW9uXHJcbiAgICAgICAgaWYgKGRhdGEuZmVhdHVyZXMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfZmVhdHVyZXMoZGF0YS5mZWF0dXJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYWRkX3RvX2Jhc2tldCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9jb2xvdXJzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgZHJvcGRvd24gY29sb3VycyBkcm9wZG93biBtZW51IGFuZCBhZGRzIG1vcmUgY29sb3Vyc1xyXG4gICAgICogaW4gYWNjb3JkYW5jZSB0byBob3cgbWFueSBob3cgbWFueSBjb2xvdXJzIHdlcmUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBhcHBlbmQgZWxlbWVudHMgb250byB0aGUgZWxlbWVudFxyXG4gICAgICogI3Byb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBGb3IgZWFjaCBjb2xvdXIsIHRoZSBmb2xsb3dpbmcgSFRNTCB3aWxsIGJlIGFwcGVuZGVkOlxyXG4gICAgICpcclxuICAgICAqIDxhXHJcbiAgICAgKiAgIGhyZWY9XCJ7bGluayB0byBwcm9kdWN0fVwiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIlxyXG4gICAgICogICBmb3I9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICogICA8bGFiZWwgZm9yPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIj5cclxuICAgICAqICAgICA8c3BhblxyXG4gICAgICogICAgICAgY2xhc3M9XCJzbS1jb2xvdXItYm94XCJcclxuICAgICAqICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHtjb2xvdXIgaGV4IHZhbHVlfTtcIj5cclxuICAgICAqICAgICA8L3NwYW4+XHJcbiAgICAgKiAgICAge2NvbG91ci1uYW1lfVxyXG4gICAgICogICA8L2xhYmVsPlxyXG4gICAgICogPC9hPlxyXG4gICAgICogPGlucHV0XHJcbiAgICAgKiAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCJcclxuICAgICAqICAgbmFtZT1cInByb2QtZi1jb2xvdXJcIlxyXG4gICAgICogICBpZD1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqICAgdmFsdWU9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICBjb25zdCBjb2xvdXIgPSBhdHRyc1thXS5jb2xfbmFtZTtcclxuICAgICAgICBjb25zdCBoZXhfdmFsID0gYXR0cnNbYV0uY29sX2hleF92YWw7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImFcIiB0YWdcclxuICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwibGFiZWxcIiB0YWdcclxuICAgICAgICBjb25zdCBsYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcbiAgICAgICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcInNwYW5cIiB0YWdcclxuICAgICAgICBjb25zdCBzcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHNwYW5FbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic20tY29sb3VyLWJveFwiKTtcclxuICAgICAgICBzcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IFwiICsgaGV4X3ZhbCArIFwiO1wiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwiaW5wdXRcIiB0YWdcclxuICAgICAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9kLWYtY29sb3VyXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVhY2ggdGFnIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGFyZW50IGVsZW1lbnRzLlxyXG4gICAgICAgIGxhYmVsRWxlbS5hcHBlbmRDaGlsZChzcGFuRWxlbSk7XHJcbiAgICAgICAgbGFiZWxFbGVtLmFwcGVuZChjb2xvdXIpO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGxhYmVsRWxlbSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyB0aGUgZWxlbWVudHMgdG8gdGhlIHRhcmdldCBlbGVtZW50IGluIHRoZSBET00uXHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChpbnB1dEVsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1jb2xvdXItdmFyaWF0aW9ucyBkb2VzIG5vdCBleGlzdCwgYWx0ZXJuYXRpdmUgY29sb3VycyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfcHJvZHVjdF9zZXRzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgXCJwcm9kdWN0IHNldHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjcHJvZHVjdC1zZXRzLlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHByb2R1Y2UgdGhlIGZvbGxvd2luZyBIVE1MIGZvciBlYWNoIHNldDpcclxuICAgICAqXHJcbiAgICAgKiA8YSBjbGFzcz1cInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiIGhyZWY9XCJ7cHJvZHVjdCB1cmx9XCJcclxuICAgICAqICAgPGltZ1xyXG4gICAgICogICAgIGNsYXNzPVwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgKiAgICAgYWx0PVwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4ge3Byb2R1Y3QgbmFtZX1cIlxyXG4gICAgICogICA+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCI+e3Byb2R1Y3QgbmFtZX08L3NwYW4+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIj57cHJvZHVjdCBwcmljZX08L3NwYW4+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3Qtc2V0c1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBpZiAoYXR0cnMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1thXS5uYW1lO1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gYXR0cnNbYV0uc2hvd2Nhc2VfaW1hZ2U7XHJcbiAgICAgICAgICBjb25zdCBwcmljZSA9IGF0dHJzW2FdLnByaWNlO1xyXG5cclxuICAgICAgICAgIC8vIFwiQVwiIHRhZyB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGltYWdlIGFuZCB0aGUgdGV4dC5cclxuICAgICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiKTtcclxuICAgICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImFsdFwiLFxyXG4gICAgICAgICAgICBcIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIChcIiArIG5hbWUgKyBcIn1cIlxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAvLyBcIlNQQU5cIiB0YWdzIGNvbnRhaW5pbmcgdGhlIHByb2R1Y3QgbmFtZSBhbmQgcHJpY2VcclxuICAgICAgICAgIGNvbnN0IHRleHRTcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgICAgdGV4dFNwYW5FbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGV4dFNwYW5FbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgICBjb25zdCB0ZXh0UHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgICB0ZXh0UHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0UHJpY2VFbGVtLnRleHRDb250ZW50ID0gXCLCo1wiICsgcHJpY2U7XHJcblxyXG4gICAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgICAvLyBhbmQgYXBwZW5kIHRoZW0gb250byB0aGUgdGFyZ2V0RWxlbSBpbiB0aGUgRE9NLlxyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFByaWNlRWxlbSk7XHJcbiAgICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3Qtc2V0cyBkb2VzIG5vdCBleGlzdCwgcHJvZHVjdC1zZXRzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9zaW1pbGFyX3Byb2R1Y3RzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgXCJzaW1pbGFyIHByb2R1Y3RzXCIgc2VjdGlvbnMuXHJcbiAgICAgKiBXaWxsIGFwcGVuZCBlYWNoIHByb2R1Y3Qgc2V0IG9udG8gI3NpbWlsYXItcHJvZHVjdHMuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgcHJvZHVjZSB0aGUgZm9sbG93aW5nIEhUTUwgZm9yIGVhY2ggc2V0OlxyXG4gICAgICpcclxuICAgICAqIDxhIGNsYXNzPVwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIgaHJlZj1cIntwcm9kdWN0IHVybH1cIlxyXG4gICAgICogICA8aW1nXHJcbiAgICAgKiAgICAgY2xhc3M9XCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAqICAgICBhbHQ9XCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiB7cHJvZHVjdCBuYW1lfVwiXHJcbiAgICAgKiAgID5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIj57cHJvZHVjdCBuYW1lfTwvc3Bhbj5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiPntwcm9kdWN0IHByaWNlfTwvc3Bhbj5cclxuICAgICAqIDwvYT5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltaWxhci1wcm9kdWN0c1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBpZiAoYXR0cnMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1thXS5uYW1lO1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gYXR0cnNbYV0uc2hvd2Nhc2VfaW1hZ2U7XHJcbiAgICAgICAgICBjb25zdCBwcmljZSA9IGF0dHJzW2FdLnByaWNlO1xyXG5cclxuICAgICAgICAgIC8vIFwiQVwiIHRhZyB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGltYWdlIGFuZCB0aGUgdGV4dC5cclxuICAgICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpbWlsYXItcHJvZHVjdCByZWxhdGVkLXByb2R1Y3RcIik7XHJcbiAgICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG5cclxuICAgICAgICAgIC8vIFwiSU1HXCIgdGFnIGZvciBwcm9kdWN0IGltYWdlLlxyXG4gICAgICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcpO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiYWx0XCIsXHJcbiAgICAgICAgICAgIFwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4gKFwiICsgbmFtZSArIFwifVwiXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIC8vIFwiU1BBTlwiIHRhZ3MgY29udGFpbmluZyB0aGUgcHJvZHVjdCBuYW1lIGFuZCBwcmljZVxyXG4gICAgICAgICAgY29uc3QgdGV4dFNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgICB0ZXh0U3BhbkVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGV4dFNwYW5FbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgICBjb25zdCB0ZXh0UHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgICB0ZXh0UHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGV4dFByaWNlRWxlbS50ZXh0Q29udGVudCA9IFwiwqNcIiArIHByaWNlO1xyXG5cclxuICAgICAgICAgIC8vIFNldCB0aGUgaW1hZ2UgYW5kIHRleHQgZWxlbWVudHMgdG8gYmVjb21lIGNoaWxkcmVuIG9mIHRoZSBsaW5rRWxlbVxyXG4gICAgICAgICAgLy8gYW5kIGFwcGVuZCB0aGVtIG9udG8gdGhlIHRhcmdldEVsZW0gaW4gdGhlIERPTS5cclxuICAgICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtKTtcclxuICAgICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRQcmljZUVsZW0pO1xyXG4gICAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldEVsZW0ucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNzaW1pbGFyLXByb2R1Y3RzIGRvZXMgbm90IGV4aXN0LCBzaW1pbGFyLXByb2R1Y3RzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYnVpbGRfZmVhdHVyZXMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgZmVhdHVyZXMgc2VjdGlvbiBvZiBwcm9kdWN0IGluZm9ybWF0aW9uIGJhc2VkIG9uIHJlc3VsdHNcclxuICAgICAqIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkuXHJcbiAgICAgKiBXaWxsIGNyZWF0ZSBhIFwiUFwiIHRhZyBmb3IgZWFjaCBmaWx0ZXIgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSB0YXJnZXRcclxuICAgICAqIGVsZW1lbnQgaW4gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtZmVhdHVyZXNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgZm9yIChsZXQgZiA9IDA7IGYgPCBhdHRycy5sZW5ndGg7IGYrKykge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1tmXS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdC1pbmZvX19zZWN0aW9uX190ZXh0XCIpO1xyXG4gICAgICAgIG5ld0VsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKG5ld0VsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1mZWF0dXJlcyBkb2VzIG5vdCBleGlzdCwgc2ltaWxhci1wcm9kdWN0cyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYWRkX3RvX2Jhc2tldCgpIHtcclxuICAgIC8qKiBBZGRzIHByb2R1Y3RzIGludG8gdGhlIGJhc2tldCAqL1xyXG4gICAgY29uc3QgaW5wdXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwicXVhbnRpdHktY3RybFwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwcm9kdWN0SWQgPSBOdW1iZXIoaW5wdXRFbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtaWRcIikpO1xyXG5cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImFkZC10by1iYXNrZXQtYnRuXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgcXVhbnRpdHkgPSBOdW1iZXIoaW5wdXRFbGVtLnZhbHVlKTtcclxuXHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHF1YW50aXR5KSkge1xyXG4gICAgICAgIHN1cGVyLmFkZF9pdGVtKHByb2R1Y3RJZCwgcXVhbnRpdHkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIFwiQ2hlY2sgdGhlIHF1YW50aXR5LCBpdCBpcyBlaXRoZXIgTmFOIG9yIGEgZmxvYXQuIE11c3QgYmUgYSBudW1iZXJcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDMwLzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBQYWdlcyB3aGVyZSBpbnRlcmFjdGlvbiB3aXRoIGl0ZW1zIGluIHRoZSBiYXNrZXQgbmVlZCB0byBiZSBhY2Nlc3MgYW5kL29yXHJcbi8vIG1vZGlmaWVkLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyAtIE1hbmFnZSB0aGUgYmFza2V0IGl0ZW1zXHJcbi8vIC0gS2VlcCBiYXNrZXQgZGF0YSB3aGVuZXZlciB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxyXG4vLyAtIFVwZGF0ZXMgdGhlIGJhc2tldCBpdGVtcyBjb3VudFxyXG4vL1xyXG4vLyBERVNDUklQVElPTjpcclxuLy8gLS0tLS0tLS0tLS0tXHJcbi8vIExldmVyYWdlcyB0aGUgcG93ZXIgb2YgbG9jYWwgc3RvcmFnZSB0byBrZWVwIGEgdHJhY2sgb2YgdGhlIGJhc2tldC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBCYXNrZXRTdGF0ZSB7XHJcbiAgdG90YWxJdGVtczogc3RyaW5nIHwgbnVsbCB8IG51bWJlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgIFwidG90YWxCYXNrZXRTaXplXCJcclxuICApO1xyXG4gIGl0ZW1zOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYXNrZXRJdGVtc1wiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfY291bnRlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfcmVhZF9pdGVtcygpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSB0b3RhbCBhbmQgYmFza2V0IHNpemUgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgY29udmVydHNcclxuICAgICAqIHRoZSB2YWx1ZXMgaW50byB0eXBlcyB0aGF0IGNhbiBiZSB3b3JrZWQgd2l0aC5cclxuICAgICAqL1xyXG4gICAgaWYgKCF0aGlzLnRvdGFsSXRlbXMpIHtcclxuICAgICAgdGhpcy50b3RhbEl0ZW1zID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE51bWJlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXRlbXMpIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IEpTT04ucGFyc2UodGhpcy5pdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0ge307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9zZXRfaXRlbXMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBsb2NhbCBzdG9yYWdlIGl0ZW1zIGludG8gc3RyaW5ncyBhbmQgc2F2ZXMgdGhlbSBvbnRvIHRoZVxyXG4gICAgICogbG9jYWwgc3RvcmFnZS5cclxuICAgICAqIFVwZGF0ZXMgdGhlIGJhc2tldCBpdGVtcyBjb3VudGVyLlxyXG4gICAgICovXHJcblxyXG4gICAgaWYgKCF0aGlzLnRvdGFsSXRlbXMpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxCYXNrZXRTaXplXCIsIFwiMFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICBcInRvdGFsQmFza2V0U2l6ZVwiLFxyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcy50b1N0cmluZygpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhc2tldEl0ZW1zXCIsIFwie31cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0gSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhc2tldEl0ZW1zXCIsIHRoaXMuaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgYmFza2V0XHJcbiAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfY291bnRlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYWRkX2l0ZW0oaWQ6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgLyoqIE1ldGhvZCBmb3IgYWRkaW5nIGl0ZW1zIGludG8gdGhlIGJhc2tldC4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuXHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIHRoaXMudG90YWxJdGVtcyArPSBxdWFudGl0eTtcclxuXHJcbiAgICBpZiAodGhpcy5pdGVtc1tpZF0pIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gKz0gcXVhbnRpdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSA9IHF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICByZW1vdmVfaXRlbShpZDogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICAvKiogTWV0aG9kIGZvciByZW1vdmluZyBpdGVtcyBmcm9tIHRoZSBiYXNrZXQuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcblxyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICBpZiAodGhpcy50b3RhbEl0ZW1zID4gMCkge1xyXG4gICAgICB0aGlzLnRvdGFsSXRlbXMgLT0gcXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfY291bnRlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zW2lkXSkge1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSA9IE51bWJlcih0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdIC09IHF1YW50aXR5O1xyXG4gICAgICBpZiAodGhpcy5pdGVtc1tpZF0gPT0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLml0ZW1zW2lkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcmVtb3ZlX2VudGlyZV9pdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgIC8qKiBSZW1vdmVzIGFuZCBlbnRpcmUgaXRlbS4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpIC0gTnVtYmVyKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgIGRlbGV0ZSB0aGlzLml0ZW1zW2lkXTtcclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgdXBkYXRlX2Jhc2tldF9jb3VudGVyKG5ld051bTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgLyoqIFVwZGF0ZXMgdGhlIGJhc2tldCBjb3VudGVyIG51bWJlciAqL1xyXG4gICAgY29uc3QgYmFza2V0Q291bnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiYmFza2V0LXRvdGFsLWl0ZW1zXCJcclxuICAgICkgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgIGlmIChuZXdOdW0pIHtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0udGV4dENvbnRlbnQgPSBuZXdOdW0udG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHVwZGF0ZV9zaW5nbGVfaXRlbShwcm9kdWN0SWQ6IHN0cmluZyB8IG51bWJlciwgbmV3TnVtOiBudW1iZXIpIHtcclxuICAgIC8qKiBVcGRhdGVzIHRoZSBsb2NhbCBzdG9yYWdlIGZvciBhIHNpbmdsZSBpdGVtIHdpdGggYSBuZXcgcXVhbnRpdHkuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcbiAgICBjb25zdCBwcmV2VmFsdWUgPSBOdW1iZXIodGhpcy5pdGVtc1twcm9kdWN0SWRdKVxyXG4gICAgdGhpcy5pdGVtc1twcm9kdWN0SWRdID0gbmV3TnVtO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcykgKyBuZXdOdW0gLSBwcmV2VmFsdWU7XHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwOC8wMS8yMDIwMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFV0aWxpdHkgY2xhc3MgdG8gcmVmb3JtYXQgbnVtYmVyLlxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE51bWJlckZvcm1hdCB7XHJcbiAgLyoqICBVdGlsaXR5IGNsYXNzIHRvIGNvbnZlcnQgbnVtYmVycyB0byBkaWZmZXJlbnQgZm9ybWF0cy4gKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIHRob3VzYW5kX3NlcGFyYXRlZF8yZHAobnVtOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIC8qKiBDb3ZlcnRzIGEgbnVtYmVyIHRvIGEgdGhvdXNhbmQgc2VwYXJhdGVkIHN0cmluZyB0byAyLmQucCAqL1xyXG4gICAgcmV0dXJuIE51bWJlcihudW0pXHJcbiAgICAgIC50b0ZpeGVkKDIpXHJcbiAgICAgIC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgdGhvdXNhbmRfc2VwX3RvX2Zsb2F0KG51bTogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgICAvKipcclxuICAgICAgICogQ29udmVydHMgYSB0aG91c2FuZCBzZXBhcmF0ZWQgZmxvYXQgdG8gYSBmbG9hdC4gSWYgdGhlIGFyZ3VtZW50ID0gbnVsbFxyXG4gICAgICAgKiB0aGVuIDAgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAgICovXHJcbiAgICBpZiAoIW51bSkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIobnVtLnJlcGxhY2UoXCIsXCIsIFwiXCIpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwNy8wMS8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gVXRpbGl0eSBwcm92aWRpbmcgdmFsaWRhdGlvbiBvcHRpb25zLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIEEgdXRpbGl0aWVzIGNsYXNzIGNvbnRhaW5pbmcgc3RhdGljIG1ldGhvZCB3aGljaCBydW4gc29tZSBmb3JtIG9mXHJcbiAgICogdmFsaWRhdGlvbi5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIGNoZWNrX2lmX3Bvc2l0aXZlX2ludChpdGVtOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgLyoqIENoZWNrcyBpZiBhbiBpdGVtIGlzIGEgcG9zaXRpdmUgaW50ZWdlciAqL1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpdGVtICE9ICdudW1iZXInKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfSBlbHNlIGlmIChpdGVtID49IDAgJiYgaXRlbSA9PT0gTWF0aC5yb3VuZChpdGVtKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXQgdGhpcyBzdGFnZSwgdGhlIG9ubHkgYnJhbmNoIHN1Z2dlc3RzIHRoYXQgdGhlIG51bWJlciBpcyA8IDAuXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9