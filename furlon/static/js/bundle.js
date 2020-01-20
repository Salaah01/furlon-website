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
        console.log(displayImages);
        console.log(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9yZWdpc3Rlci12YWxpZGF0aW9uLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3N0YXRlL2Jhc2tldC1pdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3V0aWxpdGllcy9udW1iZXJfZm9ybWF0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvdXRpbGl0aWVzL3ZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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O0FDMUlEO0FBQUE7QUFBQTtJQUFBO0lBdUJBLENBQUM7SUFuQlEsbUNBQXNCLEdBQTdCLFVBQThCLEdBQW9CO1FBRWhELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDVixPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdNLGtDQUFxQixHQUE1QixVQUE2QixHQUFrQjtRQUs3QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDckJEO0FBQUE7QUFBQTtJQUFBO0lBbUJBLENBQUM7SUFaUSxnQ0FBcUIsR0FBNUIsVUFBNkIsSUFBUztRQUdsQyxJQUFJLE9BQU8sSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUN6QixPQUFPLEtBQUs7U0FDZjthQUFNLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxPQUFPLElBQUk7U0FDZDtRQUdELE9BQU8sS0FBSztJQUNoQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZnVybG9uL3N0YXRpYy9qc1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Z1cmxvbi9zdGF0aWMvdHMvbWFpbi50c1wiKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjkvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gQ2Fyb3VzZWwgc3R5bGVkIGltYWdlIHNsaWRlIHNob3dzLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBPbiBjbGljayBvZiBhIGltYWdlIHRodW1ibmFpbHMgb3IgdGhlIGN1cnJlbnQgaW1hZ2UsIHRoZSBjdXJyZW50IGltYWdlIHNob3VsZFxyXG4vLyBjaGFuZ2UgYWNjb3JkaW5nbHkuXHJcbi8vXHJcbi8vIEFuaW1hdGlvbnMgYXJlIGhhbmRsZWQgdGhyb3VnaCB0aGUgQ1NTLCB0aGUgSlMgc2V0cyB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvXHJcbi8vIGNoYW5nZSB0aGUgYXR0cmlidXRlcyBvZiB0aGUgZGlzcGxheSBpbWFnZXMgYWNjb3JkaW5nbHkgc28gYXMgdG8gZGlzcGxheSB0aGVcclxuLy8gc2VsZWN0ZWQgaW1hZ2UuXHJcbi8vXHJcbi8vIE9uIGVhY2ggdGh1bWJuYWlsLCBhdCBhbiBhdHRyaWJ1dGUgd2lsbCB3aWxsIGVxdWFsIHRvIHRoZSBudW1iZXIgdG90YWxcclxuLy8gdGh1bWJuYWlscywgdGhpcyB3aWxsIGVuYWJsZSB0aGUgQ1NTIHRvIGFkanVzdCBjZXJ0YWluIENTUyBhdHRyaWJ1dGVzXHJcbi8vIGFjY29yZGluZ2x5LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW1ncyB7XHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgY2Fyb3VzZWwgaW1hZ2UgaW1hZ2VzIHN1Y2ggdGhhdCB3aGVuXHJcbiAgICogYSB0aHVtYm5haWwgb3IgdGhlIG1haW4gcGljdHVyZSBpcyBjbGlja2VkIG9uLCB0aGUgaW1hZ2Ugd2lsbCBjaGFuZ2UuXHJcbiAgICogVGhlIGFuaW1hdGlvbiBhbmQgcG9zaXRpb25pbmcgaXMgY29udHJvbGxlZCB2aWEgdGhlIENTUywgdGhlIGNsYXNzIHdpbGxcclxuICAgKiBhZGQgYW5kIHJlbW92ZSBhdHRyaWJ1dGVzIGZyb20gdGhlIGVsZW1lbnRzLCBzbyB0aGF0IHRoZSBhbmltYXRpb25zIGNhblxyXG4gICAqIGJlIHRyaWdnZXJlZC5cclxuICAgKi9cclxuICBjb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWNvbnRhaW5lcl9fbWFpblwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2NhdGVzIHRoZSBlbGVtZW50cyB3aGVyZSBhbiBldmVudCBsaXN0ZW5lcnMgbmVlZCB0byBiZSBhZGRlZCBhbmRcclxuICAgICAqIGNhbGxzIG1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBkZXBlbmRpbmcgb24gd2hhdCB0aGUgZWxlbWVudFxyXG4gICAgICogaXMuXHJcbiAgICAgKlxyXG4gICAgICogRmluYWxseSwgd2lsbCBjYWxsIGEgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgdGh1bWJuYWlscyB0byBjb250YWluXHJcbiAgICAgKiBpbmZvcm1hdGlvbiBvbiBob3cgbWFueSB0aHVtYm5haWxzIHRoZXJlIGFyZS4gVGhpcyB3aWxsIGVuYWJsZSB0b1xyXG4gICAgICogYWRqdXN0IGNlcnRhaW4gQ1NTIGF0dHJpYnV0ZXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIC8vIERPTSBlbGVtZW50cyBmb3IgZXZlbnQgbGlzdGVuZXJzIHRvIGJlIGFkZGVkLlxyXG4gICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2NdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvblwiXHJcbiAgICAgIClbY107XHJcbiAgICAgIGNvbnN0IGRpc3BsYXlJbWFnZXMgPSBkaXNwbGF5Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvbl9faW1nXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGlmIG9ubHkgb25lIGRpc3BsYXlJbWFnZSwgdGhlbiB0aGlzIHN1Z2dlc3RzIHRoYXQgb25seSBhXHJcbiAgICAgIC8vIHNob3djYXNlIGltYWdlIGV4aXN0cy5cclxuICAgICAgaWYgKGRpc3BsYXlJbWFnZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGltZ1RodW1ic0NvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktY29udHJvbHNcIlxyXG4gICAgICAgIClbMF07XHJcbiAgICAgICAgY29uc3QgaW1nVGh1bWJzID0gaW1nVGh1bWJzQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1jb250cm9sc19fY29udHJvbFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gIE1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBlYWNoIERPTSBlbGVtZW50LlxyXG4gICAgICAgIHRoaXMub25fY2xpY2tpbmdfdGh1bWJzKGRpc3BsYXlJbWFnZXMsIGltZ1RodW1icyk7XHJcbiAgICAgICAgdGhpcy5vbl9jbGlja2luZ19kaXNwbGF5X2ltZyhkaXNwbGF5SW1hZ2VzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBTZXRzIGFuIGF0dHJpYnV0ZSBvbiBlYWNoIHRodW1ibmFpbCB0byB0aGUgdG90YWwgbnVtYmVyIG9mIHRodW1ibmFpbHMuXHJcbiAgICAgIHRoaXMudXBkYXRlX3RvdGFsX3RodW1icyhcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzX19jb250cm9sXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBvbl9jbGlja2luZ190aHVtYnMoXHJcbiAgICBkaXNwbGF5SW1hZ2VzOiBIVE1MQ29sbGVjdGlvbixcclxuICAgIGltZ1RodW1iczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogRWFjaCBpbWFnZSB0aHVtYm5haWwgZWxlbWVudCBoYXMgYSBcImZvclwiIGF0dHJpYnV0ZSB3aGljaCBpbmRpY2F0ZXNcclxuICAgICAqIHdoaWNoIGVsZW1lbnQgb24gdGhlIGRpc3BsYXkgc2VjdGlvbiBpdCByZXByZXNlbnRzLiBUaGUgZGlzcGxheSBpbWFnZVxyXG4gICAgICogZWxlbWVudCBoYXMgYW4gXCJpbWdcIiBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBPbiBjbGlja2luZyBvbiBhIGltYWdlIHRodW1ibmFpbCwgdGhlIGRpc3BsYXkgYXR0cmlidXRlJ3MgcG9zaXRpb25cclxuICAgICAqIGF0dHJpYnV0ZSB3aWxsIGJlY29tZSBcInNob3dcIiB3aGVyZSB0aGUgc2FtZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIGFsbFxyXG4gICAgICogb3RoZXIgaW1hZ2VzIHdpbGwgYmVjb21lIFwiaGlkZVwiLlxyXG4gICAgICpcclxuICAgICAqIE5PVEU6IHRoZSBpbml0aWFsIGltYWdlIHdpbGwgaGF2ZSBwb3NpdGlvbj1cImluaXRcIiBpbml0aWFsbHkgc28gYXMgdG9cclxuICAgICAqIGF2b2lkIGFueSBhbmltYXRpb25zIG9uIHN0YXJ0LiBJZiB0aGlzIGltYWdlIHRodW1ibmFpbCBpcyBjbGlja2VkLCBkb1xyXG4gICAgICogbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgdGh1bWIgPSAwOyB0aHVtYiA8IGltZ1RodW1icy5sZW5ndGg7IHRodW1iKyspIHtcclxuICAgICAgaW1nVGh1bWJzW3RodW1iXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzRm9yID0gaW1nVGh1bWJzW3RodW1iXS5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcImltZ1wiKSA9PT0gY29udHJvbHNGb3IpIHtcclxuICAgICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpICE9IFwiaW5pdFwiKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcImhpZGVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG9uX2NsaWNraW5nX2Rpc3BsYXlfaW1nKFxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGljayBvZiB0aGUgY3VycmVudCBkaXNwbGF5IGltYWdlLCBoaWRlIHRoZSBpbWFnZSBhbmQgc2hvdyB0aGVcclxuICAgICAqIG5leHQuXHJcbiAgICAgKiBBbmltYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgY3NzLiBGb3IgYW5pbWF0aW9uIHRvIHdvcmssIG9uIGNsaWNrLFxyXG4gICAgICogXCJoaWRlXCIgaXMgc2V0IHRvIHRoZSBhdHRyaWJ1dGUgcG9zaXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UsIGFuZCBvblxyXG4gICAgICogdGhlIG5leHQgaW1hZ2UsIHRoZSBcInNob3dcIiBpcyBzZXQgdG8gdGhlIHBvc2l0aW9uIGF0dHJpYnV0ZS5cclxuICAgICAqL1xyXG4gICAgZGlzcGxheUltYWdlczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIGNvbnNvbGUubG9nKGRpc3BsYXlJbWFnZXMpXHJcbiAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgZm9yIChsZXQgaW0gPSAwOyBpbSA8IGRpc3BsYXlJbWFnZXMubGVuZ3RoOyBpbSsrKSB7XHJcbiAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICBpZiAoaW0gPT09IGRpc3BsYXlJbWFnZXMubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgZGlzcGxheUltYWdlc1swXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInNob3dcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BsYXlJbWFnZXNbaW0gKyAxXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV90b3RhbF90aHVtYnModGh1bWJzOiBIVE1MQ29sbGVjdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGFuIGF0dHJpYnV0ZSBvbiBlYWNoIHRodW1ibmFpbCB3aGljaCBpcyB0aGUgdG90YWwgbnVtYmVyIG9mXHJcbiAgICAgKiB0aHVtYm5haWxzIHRoZXJlIGFyZS4gVGhpcyB3aWxsIGFsbG93IHRoZSBDU1MgdG8gdXBkYXRlIHN0eWxpbmcgYmFzZWRcclxuICAgICAqIG9uIHRoZSBudW1iZXIgb2YgdGh1bWJuYWlscy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdG90YWwgPSB0aHVtYnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCB0b3RhbDsgdCsrKSB7XHJcbiAgICAgIHRodW1ic1t0XS5zZXRBdHRyaWJ1dGUoXCJ0b3RhbHRodW1ic1wiLCB0b3RhbC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXRzIHRoZSBzYW1lIG9uIG90aGVyIGVsZW1lbnRzIHdoZXJlIHRoaXMgd291bGQgYmUgbmVlZGVkLlxyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZShcInRvdGFsdGh1bWJzXCIsIHRvdGFsLnRvU3RyaW5nKCkpO1xyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnByZXZpb3VzRWxlbWVudFNpYmxpbmchLnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJ0b3RhbHRodW1ic1wiLFxyXG4gICAgICB0b3RhbC50b1N0cmluZygpXHJcbiAgICApO1xyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJ0b3RhbHRodW1ic1wiLFxyXG4gICAgICB0b3RhbC50b1N0cmluZygpXHJcbiAgICApO1xyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJ0b3RhbHRodW1ic1wiLFxyXG4gICAgICB0b3RhbC50b1N0cmluZygpXHJcbiAgICApO1xyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJ0b3RhbHRodW1ic1wiLFxyXG4gICAgICB0b3RhbC50b1N0cmluZygpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDE2LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIEN1c3RvbSBkcm9wZG93biBtZW51XHJcbi8vXHJcbi8vIFJFTEFURUQgRklMRVM6XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIF9kcm9wZG93bi1tZW51LnNjc3NcclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gUHJvdmlkZXMgZnVuY3Rpb25zIGZvciBhIGN1c3RvbSBkcm9wZG93biBtZW51LlxyXG4vLyBUaGUgZnVuY3Rpb25zIHdpbGwgd29yayBmb3IgZHJvcGRvd24gbWVudXMgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XHJcbi8vXHJcbi8vIDxmb3JtPlxyXG4vLyAgIC4uLlxyXG4vLyAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIj5cclxuLy8gICAgICAgPHNwYW4+Q29sb3VyPC9zcGFuPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiPlxyXG4vLyAgICAgICA8bGFiZWwgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiIGZvcj1cImNvbG91ci1yZWRcIj5cclxuLy8gICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIlxyXG4vLyAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbi8vICAgICAgICAgbmFtZT1cImYtY29sb3VyXCJcclxuLy8gICAgICAgICBpZD1jb2xvdXItcmVkXHJcbi8vICAgICAgICAgdmFsdWU9XCJyZWRcIlxyXG4vLyAgICAgICA+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gICAuLi5cclxuLy8gPC9mb3JtPlxyXG5cclxuLy8gQ1NTIHNob3VsZCBiZSBzZXQgdXAgdG8gaGlkZSB0aGUgaW5wdXQgdGFncyBhbmQgcmVseSBvbiB0aGUgbGFiZWxzIHRvIHNlbGVjdFxyXG4vLyB0aGUgcmFkaW8gYnV0dG9uLlxyXG4vL1xyXG4vLyBGVU5DVElPTlM6XHJcbi8vIC0tLS0tLS0tLS1cclxuLy8gIC0gV2hlbiB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gbWVudSwgZXhwYW5kIHRoZSBsaXN0IG9mIG9wdGlvbnMuXHJcbi8vICAtIFdoZW4gdXNlciBwcmVzc2VzIGFuIG9wdGlvbiwgaGlnaGxpZ2h0IHRoYXQgb3B0aW9uLCB1cGRhdGUgdGhlXHJcbi8vICAgIGJ1dHRvbidzIGlubmVyIHRleHQgdG8gbWF0Y2ggdGhhdCBvZmYgdGhlIGJ1dHRvbiB0ZXh0LlxyXG4vLyAgLSBXaGVuIHVzZXIgY2xpY2tzIG91dHNpZGUsIGNsb3NlIGFsbCBtZW51cy5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERyb3Bkb3duTWVudSBDbGFzc1xyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25NZW51IHtcclxuICAvKipcclxuICAgKiBTZXRzIHVwIHRoZSBmdW5jdGlvbmFsaXR5IGZvciB0aGUgY3VzdG9tIGRyb3Bkb3duIG1lbnVzLlxyXG4gICAqIFRoZXNlIGluY2x1ZGU6XHJcbiAgICogIC0gVG9nZ2xlIG9wZW4vY2xvc2Ugb2YgdGhlIG1lbnUgb24gY2xpY2tpbmcgdGhlIGJ1dHRvblxyXG4gICAqICAtIENsb3NlIHRoZSBtZW51IG9uIGNsaWNraW5nIG91dHNpZGVcclxuICAgKiAgLSBPbiBzZWxlY3RpbmcgYW4gaXRlbTpcclxuICAgKiAgICAtIEhpZ2hsaWdodCB0aGF0IGl0ZW1cclxuICAgKiAgICAtIENoYW5nZSB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uIHRoZSB0ZXh0IG9mIHRoZSBvcHRpb24gc2VsZWN0ZWRcclxuICAgKlxyXG4gICAqIE5vdGU6IHRoaXMgY2xhc3Mgd2lsbCBub3QgaGFuZGxlIEFQSSBjYWxscy5cclxuICAgKi9cclxuXHJcbiAgZGRNZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICBcImRyb3Bkb3duLW1lbnVcIlxyXG4gICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIEFkZHMgZnVuY3Rpb24gdG8gY2xvc2UgYWxsIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBlbGVtZW50XHJcbiAgICB0aGlzLmNsb3NlX21lbnUoKTtcclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgZnVuY3Rpb25zIGZvciBhbGwgbWVudSBlbGVtZW50cy5cclxuICAgIGZvciAobGV0IG1lbnVJZCA9IDA7IG1lbnVJZCA8IHRoaXMuZGRNZW51cy5sZW5ndGg7IG1lbnVJZCsrKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRfbWVudSh0aGlzLmRkTWVudXNbbWVudUlkXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjbG9zZV9tZW51KCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgYWxsIG1lbnVzIHdoZW4gY2xpY2tlZCBvdXRzaWRlIG9uIGFub3RoZXIgZmlsdGVyIGJ1dHRvbi5cclxuICAgICAqIEFsc28gY2FycmllcyBmdW5jdGlvbiB0byBjbG9zZSB0aGUgbmF2LW1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgZmlsdGVyQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25MaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG9wdGlvbkxpc3RzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICBvcHRpb25MaXN0c1tpZHhdLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuYXZTdWJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCJcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlckJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRCdG4gPSBmaWx0ZXJCdG5zW2ldO1xyXG5cclxuICAgICAgc2VsZWN0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBDbG9zZSBuYXYgbWVudXNcclxuICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBuYXZTdWJNZW51cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgICBuYXZTdWJNZW51c1tpZHhdLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgYWxsIG90aGVyIGZpbHRlcnMgbGlzdHNcclxuICAgICAgICAvLyBFYWNoIGJ1dHRvbiBhbmQgdGhlaXIgY2hpbGQgZWxlbWVudHMgY29udGFpbiB0aGUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gXCJmaWx0ZXItZm9yXCIuXHJcbiAgICAgICAgLy8gTGlrZXdpc2UsIGVhY2ggZHJvcGRvd24gb3B0aW9uIGRpdiBjb250YWluIHRoZSBzYW1lIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFRoaXMgY2hlY2tzIGZvciB0aGUgYnV0dG9uIHByZXNzZWQsIGlmIGl0cyBcImZpbHRlci1mb3JcIiBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBtYXRjaGVzIHRoYXQgb2YgaXRzIGRyb3Bkb3duIG9wdGlvbnMuIGlmIG5vdCwgdGhlbiBjbG9zZS5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpbHRlckJ0bnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSBmaWx0ZXJCdG5zW2pdO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbS5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpICE9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQnRuLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBKdXN0IGluY2FzZSB0aGUgc3RydWN0dXJlIGNoYW5nZXMsIGFuZCB0aGUgbmV4dCBzaWJsaW5nIGlucyBub3QgdGhlIG9wdGlvbnMgbGlzdFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmchLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZz8uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBidWlsZF9tZW51KGRkTWVudTogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIGZ1bmN0aW9uYWxpdHkgb250byBlYWNoIGRyb3Bkb3duIG1lbnUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9wdGlvbnNCdG4gPSBkZE1lbnUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiXHJcbiAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RDb250YWluZXIgPSBkZE1lbnUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcHRpb25zTGlzdEl0ZW1zID0gb3B0aW9uc0xpc3RDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiXHJcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTExhYmVsRWxlbWVudD47XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgb24gdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGljaCB3aWxsIG9wZW4vY2xvc2UgdGhlIG9wdGlvbnNcclxuICAgIC8vIGxpc3QuXHJcbiAgICBvcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBvcHRpb25zTGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIHNldHVwIGZvciBlYWNoIG9wdGlvblxyXG4gICAgZm9yIChcclxuICAgICAgbGV0IG9wdGlvbkl0ZXIgPSAwO1xyXG4gICAgICBvcHRpb25JdGVyIDwgb3B0aW9uc0xpc3RJdGVtcy5sZW5ndGg7XHJcbiAgICAgIG9wdGlvbkl0ZXIrK1xyXG4gICAgKSB7XHJcbiAgICAgIGxldCBsaXN0SXRlbSA9IG9wdGlvbnNMaXN0SXRlbXNbb3B0aW9uSXRlcl07XHJcbiAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBoaWdobGlnaHQgZnJvbSBhbGwgbGlzdCBpdGVtcyBhbmQgcmVhcHBseSB0byB0aGUgc2VsZWN0ZWRcclxuICAgICAgICAvLyBsaXN0IGl0ZW0gb25seVxyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgb3B0aW9uU3ViSXRlciA9IDA7XHJcbiAgICAgICAgICBvcHRpb25TdWJJdGVyIDwgb3B0aW9uc0xpc3RJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICBvcHRpb25TdWJJdGVyKytcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG9wdGlvbnNMaXN0SXRlbXNbb3B0aW9uU3ViSXRlcl0uY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbC0tc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsLS1zZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSB0ZXh0IG9mIHRoZSBidXR0b24gdG8gdGhlIHRleHQgb2YgdGhlIHNlbGVjdGVkIGl0ZW1cclxuICAgICAgICBvcHRpb25zQnRuLmlubmVyVGV4dCA9IGxpc3RJdGVtLmlubmVyVGV4dDtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBoaWRkZW4gaW5wdXQgdmFsdWVzXHJcbiAgICAgICAgLy8gQ2xvc2UgdGhlIG1lbnVcclxuICAgICAgICBvcHRpb25zTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwMS8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gTmF2aWdhdGlvbiBiYXIuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gMS4gQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSBuYXZpZ2F0aW9uIHN1Yi1tZW51cyBhbmQgY29udHJvbHMgaG93IGFuZCB3aGVuXHJcbi8vICAgIGl0IGV4cGFuZHMgYW5kIGNsb3Nlcy5cclxuLy8gMi4gQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSBiYXNrZXQgYW5kIHNvIHNvIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlXHJcbi8vICAgIGJhc2tldC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZnVuY3Rpb25zIGZvciB0aGUgbmF2aWdhdGlvbi5cclxuICAgKiBUaGVzZSBpbmNsdWRlOlxyXG4gICAqICAtIENsb3NpbmcgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlLlxyXG4gICAqICAtIE9wZW5pbmcvQ2xvc2luZyBtZW51cyBvbiBjbGlja1xyXG4gICAqL1xyXG4gIG1lbnVCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fb3B0aW9uX19idG5cIik7XHJcbiAgbmF2U3ViTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCIpO1xyXG4gIHRvZ2dsZVNob3dOYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fdG9nZ2xlX19idG5cIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIEFkZHMgZnVuY3Rpb24gdG8gY2xvc2UgYWxsIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBlbGVtZW50XHJcbiAgICB0aGlzLmNsb3NlX21lbnUoKTtcclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgZnVuY3Rpb25zIGZvciBhbGwgbWVudSBlbGVtZW50cy5cclxuICAgIGZvciAoY29uc3QgbWVudUJ0biBvZiB0aGlzLm1lbnVCdG5zIGFzIGFueSkge1xyXG4gICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnN1Yk1lbnVDdHJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgcmVzcG9uc2l2ZSBmdW5jdGlvbnMgZm9yIHRoZSB0b2dnbGUgYnV0dG9ucy5cclxuICAgIHRoaXMubmF2X3RvZ2dsZV9idG4oKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsb3NlX21lbnUoKSB7XHJcbiAgICAvKipcclxuICAgICAqIGNsb3NlcyBhbGwgbWVudXMgd2hlbiBjbGlja2VkIG91dHNpZGUgcHIgYW5vdGhlciBuYXYgbWVudS5cclxuICAgICAqIEFsc28gd2lsbCBjbG9zZSBhbGwgZmlsdGVyIG1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQ2xvc2UgYWxsIG5hdi1tZW51cyBvbiBjbGljayBvdXRzaWRlXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCB0aGlzLm5hdlN1Yk1lbnVzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICB0aGlzLm5hdlN1Yk1lbnVzW2lkeF0uY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVudUJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbWVudUJ0biA9IHRoaXMubWVudUJ0bnNbaV07XHJcblxyXG4gICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2xvc2UgYWxsIGRyb3Bkb3duLW1lbnVzXHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb25MaXN0IG9mIG9wdGlvbkxpc3RzIGFzIGFueSkge1xyXG4gICAgICAgICAgb3B0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENsb3NlIG90aGVyIG5hdmlnYXRpb24gbWVudXNcclxuICAgICAgICAvLyBFYWNoIGJ1dHRvbiBhbmQgdGhlaXIgY2hpbGQgZWxlbWVudHMgd2lsbCBjb250YWluIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBcImZpbHRlci1mb3JcIi5cclxuICAgICAgICAvLyBMaWtld2lzZSwgZWFjaCBkcm9wZG93biBtZW51IGNvbnRhaW4gdGhlIHNhbWUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gVGhpcyBjaGVja3MgZm9yIHRoZSBidXR0b24gcHJlc3NlZCwgaWYgaXRzIFwiZmlsdGVyLWZvclwiIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIG1hdGNoZXMgdGhhdCBvZiBpdHMgZHJvcGRvd24gb3B0aW9ucy4gaWYgbm90LCB0aGVuIGNsb3NlLlxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tZW51QnRucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IHRoaXMubWVudUJ0bnNbal07XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikgIT1cclxuICAgICAgICAgICAgbWVudUJ0bi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN1Yk1lbnVDdHJsKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdpbGwgaGFuZGxlIGNsaWNrIGV2ZW50cyBvbiB0aGUgbmF2aWdhdGlvbiBmb3IgZXhwYW5kaW5nXHJcbiAgICAgKiBhbmQgY29sbGFwc2luZyB0aGUgc3ViLW1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vIEhhbmRsZSBjbGljayBldmVudHNcclxuICAgIHRhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB0YXJnZXRDbGFzc2VzID0gdGFyZ2V0LmNsYXNzTGlzdDtcclxuICAgIGxldCBzdWJNZW51OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBpZiAodGFyZ2V0Q2xhc3Nlcy5jb250YWlucyhcIm5hdi1zdWItcHJvZHVjdHNcIikpIHtcclxuICAgICAgc3ViTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMubmF2LXN1Yi1wcm9kdWN0c1wiXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldENsYXNzZXMuY29udGFpbnMoXCJuYXYtc3ViLXJvb21zXCIpKSB7XHJcbiAgICAgIHN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLm5hdi1zdWItcm9vbXNcIlxyXG4gICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgXCJOYXZpZ2F0aW9uIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGV4cGFuZGVkID0gc3ViTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGV4cGFuZGVkKSB7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiKTtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCIpO1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG5hdl90b2dnbGVfYnRuKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBuYXZpZ2F0aW9uIHRvZ2dsZSBidXR0b24gLSBhIHJlc3BvbnNpdmVcclxuICAgICAqIGZlYXR1cmUgdmlld2FibGUgd2hlbiB0aGUgc2NyZWVuIHdpZHRoIGlzIHNtYWxsIGVub3VnaC5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0ID0gW1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2X19vcHRpb25cIiksXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9fYWNjb3VudC1iYXNrZXQnKVxyXG4gICAgXTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZVNob3dOYXZCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9wdGlvbnNMaXN0W2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBvcHRpb25zTGlzdFtpXVtqXS5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LW9wdGlvbi0tc2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDE2LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVSUE9TRVxyXG4vLyAtLS0tLS0tXHJcbi8vIEVuYWJsZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHF1YW50aXR5IGNvbXBvbmVudCwgdGh1cyBlbmFibGluZyArLy1cclxuLy8gYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW4gdGhlIGlucHV0IGJveC5cclxuLy9cclxuLy8gUkVMQVRFRCBGSUxFU1xyXG4vLyAtLS0tLS0tLS0tLS0tXHJcbi8vIF9xdWFudGl0eS5zY3NzXHJcbi8vXHJcbi8vIEhUTUwgRk9STUFUXHJcbi8vIC0tLS0tLS0tLS0tXHJcbi8vIDxkaXYgY2xhc3M9XCJjLXF1YW50aXR5XCI+XHJcbi8vICAgPGJ1dHRvbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0blwiIGNvbnRyb2w9XCJxdWFudGl0eS1kb3duXCI+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiPiYjNDU7PC9zcGFuPlxyXG4vLyAgIDwvYnV0dG9uPlxyXG4vLyAgIDxpbnB1dCBjbGFzcz1cImMtcXVhbnRpdHlfX2lucHV0XCIgdHlwZT1cIm51bWJlclwiLz5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LXVwXCI+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiPiYjNDU7PC9zcGFuPlxyXG4vLyAgIDwvYnV0dG9uPlxyXG4vLyA8L2Rpdj5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIEltcG9ydHNcclxuaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFF1YW50aXR5Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIHRoZSBxdWFudGl0eSBjb21wb25lbnQgdGh1cyBlbmFibGluZyB0aGUgKy8tXHJcbiAgICogYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW5zaWRlIHRoZSBpbnB1dCBib3guXHJcbiAgICovXHJcblxyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJjLXF1YW50aXR5XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5fc2V0X2VsZW1lbnRzKHRoaXMuY29udGFpbmVyc1tjXSk7XHJcbiAgICAgIGNvbnN0IGJ0bkRvd24gPSBlbGVtZW50c1swXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgY29uc3QgYnRuVXAgPSBlbGVtZW50c1sxXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgY29uc3QgaW5wdXRCb3ggPSBlbGVtZW50c1syXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBOdW1iZXIoaW5wdXRCb3guZ2V0QXR0cmlidXRlKFwibWluXCIpKTtcclxuICAgICAgY29uc3QgbWF4VmFsdWUgPSBOdW1iZXIoaW5wdXRCb3guZ2V0QXR0cmlidXRlKFwibWF4XCIpKTtcclxuXHJcbiAgICAgIHRoaXMuX2J1aWxkX21pbnVzX2J1dHRvbihidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX3BsdXNfYnV0dG9uKGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgICAgdGhpcy5fYnVpbGRfaW5wdXRfYm94KGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3NldF9lbGVtZW50cyhjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgY29udGFpbmVyLCB3aWxsIHJldHVybiB0aGUgYnV0dG9ucyBhbmQgaW5wdXQgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGJ0bkRvd24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvbltjb250cm9sPVwicXVhbnRpdHktZG93blwiXSdcclxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBidG5VcCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS11cFwiXSdcclxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dEJveCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcImlucHV0LmMtcXVhbnRpdHlfX2lucHV0XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gW2J0bkRvd24sIGJ0blVwLCBpbnB1dEJveF07XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF9taW51c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIG1pbnVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCByZWR1Y2VcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtaW5pbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIHBsdXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBsZXNzIHRoYW4gdGhlIG1heFZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoYnRuRG93bi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpIC0gMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpIDwgbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPT09IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX3BsdXNfYnV0dG9uKFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uIGNsaWNraW5nIHRoZSBwbHVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCBpbmNyZWFzZWRcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtYXhpbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIG1pbnVzXHJcbiAgICAgKiBidXR0b24gaWYgaXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBtaW5WYWx1ZS5cclxuICAgICAqL1xyXG5cclxuICAgIGJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChidG5VcC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpICsgMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpID4gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA9PT0gbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX2lucHV0X2JveChcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmNlIGEgbmV3IHZhbHVlIGhhcyBiZWVuIGVudGVyZWQgaW50byB0aGUgaW5wdXQgYm94LFxyXG4gICAgICogZGlzYWJsZS9yZS1lbmFibGUgdGhlIHBsdXMgYW5kIG1pbnVzIGJ1dHRvbnMgaW4gYWNjb3JkYW5jZSB3aXRoIHdoZXRoZXJcclxuICAgICAqIHRoZSB2YWx1ZSBpcyBlcXVhbCB0byB0aGUgbWluL21heCB2YWx1ZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGlucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0Qm94LnZhbHVlKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC4gSWYgbm90LCB1cGRhdGUgYXR0cmlidXRlcyB0aGUgaGlnaGxpZ2h0XHJcbiAgICAgIC8vIHRoaXMgdG8gdGhlIHVzZXIgYW5kIGRpc2FibGUgYnV0dG9ucy5cclxuICAgICAgaWYgKFZhbGlkYXRpb24uY2hlY2tfaWZfcG9zaXRpdmVfaW50KHZhbHVlKSkge1xyXG4gICAgICAgIC8vIEluY2FzZSB0aGUgYnV0dG9ucyB3ZXJlIHByZXZpb3VzbHkgZGlzYWJsZWQsIHJlc2V0IGJ5IHJlLWVuYWJsaW5nXHJcbiAgICAgICAgLy8gZXZlcnl0aGluZy5cclxuICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGlucHV0Qm94LnBhcmVudEVsZW1lbnQhLnJlbW92ZUF0dHJpYnV0ZSgnaW52YWxpZCcpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSBtaW4gdmFsdWVcclxuICAgICAgICBpZiAodmFsdWUgPD0gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnRuRG93bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgYnRuVXAncyBtYXggdmFsdWVcclxuICAgICAgICBpZiAodmFsdWUgPj0gbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdmFsdWUgaXMgZWl0aGVyIDwgMCBvciBhIGZsb2F0LlxyXG4gICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGlucHV0Qm94LnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZSgnaW52YWxpZCcsICd0cnVlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDEyLzAxLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFJlZ2lzdHJhdGlvbiBwYWdlcy5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gV2hlbiBwYXNzd29yZHMgZG8gbm90IG1hdGNoLCB1cGRhdGUgdGhlIGF0dHJpYnV0ZSBvZiB0aGUgcGFzc3dvcmQgZWxlbWVudHNcclxuLy8gdG8gYGludmFsaWQ9XCJ0cnVlXCIuIFRoaXMgd2lsbCBhbGxvdyB0aGUgdGhlIENTUyB0byBjaGFuZ2UgdGhlIGJvcmRlclxyXG4vLyBvZiB0aGUgcGFzc3dvcmQgZWxlbWVudHMgdG8gcmVkIGFuZCBzaG93IGFuIGVycm9yIG1lc3NhZ2UgZm9yIGEgZmV3IHNlY29uZHMuXHJcbi8vXHJcbi8vIElmIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gsIHRoZW4gYWRkIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgdG8gdGhlIHN1Ym1pdFxyXG4vLyBidXR0b24uXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJQYXNzd29yZENoZWNrIHtcclxuICAvKiogQ2hlY2tzIGlmIHBhc3N3b3JkcyBtYXRjaCwgaWYgdGhleSBkbyBub3QsIHRoZW4gdXBkYXRlIHRoZSBhdHRyaWJ1dGVcclxuICAgKiBvZiB0aGUgcGFzc3dvcmQgZWxlbWVudHMgd2hpY2ggd2lsbCBpbiB0dXJuIHVwZGF0ZSBzaWJsaW5ncyB0byB0YWtlIG9uXHJcbiAgICogc29tZSBDU1Mgc3R5bGluZyAoY29udHJvbGxlZCB0aHJvdWdoIENTUykuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwYXNzd29yZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwicmVnaXN0ZXItcGFzc3dvcmRcIlxyXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGNvbmZpcm1QYXNzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJyZWdpc3Rlci1wYXNzd29yZC1jb25maXJtXCJcclxuICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwicmVnaXN0ZXItc3VibWl0XCJcclxuICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgZXJyb3JNc2dFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInJlZ2lzdGVyLWVycm9yc1wiXHJcbiAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIENvbnN0cnVjdG9yICovXHJcbiAgICB0aGlzLnNldF9rZXliaW5kZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGNoZWNrX3Bhc3N3b3JkcygpIHtcclxuICAgIC8qKiBDaGVja3MgaWYgdGhlIHBhc3N3b3JkcyBtYXRjaCwgYW5kIGlmIHNvLCBjaGVjayB0aGVpciBjb21wbGV4aXR5LiAqL1xyXG4gICAgY29uc3QgcGFzc3dvcmRUeHQgPSB0aGlzLnBhc3N3b3JkRWxlbT8udmFsdWU7XHJcbiAgICBjb25zdCBjb25maXJtUGFzc1R4dCA9IHRoaXMuY29uZmlybVBhc3NFbGVtPy52YWx1ZTtcclxuXHJcbiAgICBpZiAocGFzc3dvcmRUeHQgJiYgY29uZmlybVBhc3NUeHQpIHtcclxuICAgICAgaWYgKHBhc3N3b3JkVHh0ID09PSBjb25maXJtUGFzc1R4dCkge1xyXG4gICAgICAgIC8vIENoZWNrIGNvbXBsZXhpdHk6XHJcbiAgICAgICAgLy8gTGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgNiBhbmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgaW50ZWdlci5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBwYXNzd29yZFR4dC5sZW5ndGggPj0gNiAmJlxyXG4gICAgICAgICAgcGFzc3dvcmRUeHQubWF0Y2goL1swLTldLykgJiZcclxuICAgICAgICAgIHBhc3N3b3JkVHh0Lm1hdGNoKC9bQS16XS8pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1zZ0VsZW0udGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcgYW5kIGNvbnRhaW4gYXQgbGVhc3QgMSBudW1iZXIuXCI7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNc2dFbGVtLnRleHRDb250ZW50ID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHNldF9rZXliaW5kZXJzKCkge1xyXG4gICAgdGhpcy5jb25maXJtUGFzc0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVfZWxlbWVudF9hdHRycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV9lbGVtZW50X2F0dHJzKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBpbnB1dCBhbmQgYnV0dG9uIGVsZW1lbnRzIHRvIGFjY29yZGFuY2VcclxuICAgICAqIHdoZXRoZXIgb3Igbm90IHRoZSBwYXNzd29yZHMgbWF0Y2guXHJcbiAgICAgKi9cclxuICAgIGlmICh0aGlzLmNoZWNrX3Bhc3N3b3JkcygpKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRFbGVtLnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XHJcbiAgICAgIHRoaXMuY29uZmlybVBhc3NFbGVtLnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XHJcbiAgICAgIHRoaXMuc3VibWl0QnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYXNzd29yZEVsZW0uc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcInRydWVcIik7XHJcbiAgICAgIHRoaXMuY29uZmlybVBhc3NFbGVtLnNldEF0dHJpYnV0ZShcImludmFsaWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICB0aGlzLnN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA4LzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gTWFuYWdlcyB0aGUgc2VhcmNoIGZpbHRlcnMgb24gdGhlIHBhZ2UuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gUmVzcG9uc2libGUgZm9yIGNhbGxpbmcgdGhlIHNlYXJjaCBBUEkgd2hpY2ggd2lsbCBmaWx0ZXIgcmVzdWx0IGJhc2VkIG9uXHJcbi8vIHdoYXQgdGhlIHVzZXIgaGFzIHNlbGVjdGVkIHVzaW5nIHRoZSBmaWx0ZXJzLlxyXG4vL1xyXG4vLyBXaWxsIHVzZSB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggYmFyJ3MgZm9ybSB0byBpbnRlcmFjdCB3aXRoIHRoZSBBUEkuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsdGVycyB7XHJcbiAgLyoqXHJcbiAgICogV2lsbCBleHBhbmQgdGhlIG5hdmlnYXRpb24gc2VhcmNoIGJhciBhbmQgdGhlIGZvcm0gZWxlbWVudCB0byBhbGxvdyBpdCB0b1xyXG4gICAqIHRha2UgaW4gdGhlIGZpbHRlciBvcHRpb25zIGFzIHBhcnQgb2YgdGhlIEdFVCByZXF1ZXN0IHdoZW5ldmVyIGEgdXNlclxyXG4gICAqIGluaXRpYXRlcyBhIHNlYXJjaC5cclxuICAgKlxyXG4gICAqIENhbGxzIHRoZSBBUEkgdG8gZmlsdGVyIHRoZSByZXN1bHRzLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3IgZG9lcyBub3QgcmVxdWlyZSBhbnkgYXJndW1lbnRzIGFuZCB3aWxsIGluc3RlYWQgdXNlXHJcbiAgICAgKiBlbGVtZW50cyBmcm9tIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2V4cGFuZF9uYXZfc2VhcmNoKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfZXhwYW5kX25hdl9zZWFyY2goKSB7XHJcbiAgICAvKipcclxuICAgICAqIEV4cGFuZHMgb24gdGhlIG5hdmlnYXRpb24gc2VhcmNoIGVsZW1lbnRzIHNvIHRoYXQgd2hlbiBzZW5kaW5nIGEgR0VUXHJcbiAgICAgKiByZXF1ZXN0LCBmaWx0ZXJzIHdpbCBiZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBuYXZGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJuYXZfX3NlYXJjaFwiXHJcbiAgICApWzBdIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuXHJcbiAgICAvLyBBZGQgaGlkZGVuIGlucHV0cyB0byBjb250YWluIHRoZSB2YWx1ZXMgb24gdGhlIGZpbHRlcnMuXHJcbiAgICBjb25zdCBpbnB1dE5hbWVzID0gW1wiZi1taW5QcmljZVwiLCBcImYtbWF4UHJpY2VcIiwgXCJmLWNhdGVnb3J5XCIsIFwiZi1jb2xvdXJcIl07XHJcbiAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBvZiBpbnB1dE5hbWVzKSB7XHJcbiAgICAgIGNvbnN0IGhpZGRlbklucHV0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgXCJJTlBVVFwiXHJcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgIGhpZGRlbklucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XHJcbiAgICAgIGhpZGRlbklucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dE5hbWUpO1xyXG4gICAgICBuYXZGb3JtLmFwcGVuZENoaWxkKGhpZGRlbklucHV0Tm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBoaWRkZW4gaW5wdXRzIHdoZW4gYSBmaWx0ZXIgaXMgc2VsZWN0ZWRcclxuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAgIGZvciAobGV0IG9wdCA9IDA7IG9wdCA8IGRyb3Bkb3duT3B0aW9ucy5sZW5ndGg7IG9wdCsrKSB7XHJcbiAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gZHJvcGRvd25PcHRpb25zW29wdF07XHJcbiAgICAgIGxldCBoaWRkZW5JbnB1dDogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHN3aXRjaCAoZHJvcGRvd25PcHRpb24uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKSkge1xyXG4gICAgICAgIGNhc2UgXCJtaW4tcHJpY2VcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1taW5QcmljZVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibWF4LXByaWNlXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImYtbWF4UHJpY2VcIlxyXG4gICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNhdGVnb3J5XCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImYtY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNvbG91clwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImYtY29sb3VyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChoaWRkZW5JbnB1dCkge1xyXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGhpZGRlbklucHV0IS52YWx1ZSA9IGRyb3Bkb3duT3B0aW9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmchLnRleHRDb250ZW50ITtcclxuXHJcbiAgICAgICAgICAvLyBDYWxscyB0aGUgc2VhcmNoIHJlc3VsdCBBUEkgYW5kIHRoZW4gZmlsdGVyIHRoZSByZXN1bHRzLlxyXG4gICAgICAgICAgY29uc3QgQVBJUGF0aCA9IHRoaXMuX0FQSV9wYXRoKCk7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIEFQSVBhdGgpO1xyXG4gICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCkgYXMgW107XHJcbiAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyX3Jlc3VsdHMocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfQVBJX3BhdGgoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgQVBJIGhyZWYgcGF0aCB3aGVyZSB0aGUgcmVxdWVzdCB3aWxsIGJlIHNlbnQuXHJcbiAgICAgKiBUaGlzIGltcGxlbWVudHMgdGhlIGZpbHRlcnMgd2l0aGluIHRoZSBhY3R1YWwgVVJMLlxyXG4gICAgICovXHJcbiAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCIvc2VhcmNoL1wiLCBcIi9zZWFyY2gtcmVzdWx0cy9cIik7XHJcblxyXG4gICAgY29uc3QgaGlkZGVuSW5NaW5QcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImYtbWluUHJpY2VcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaGlkZGVuSW5NYXhQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImYtbWF4UHJpY2VcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaGlkZGVuSW5DYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImYtY2F0ZWdvcnlcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaGlkZGVuSW5Db2xvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLWNvbG91clwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGhpZGRlbkluTWluUHJpY2UudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLW1pblByaWNlPVwiICsgaGlkZGVuSW5NaW5QcmljZS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtbWluUHJpY2U9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1taW5QcmljZT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5Jbk1heFByaWNlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1tYXhQcmljZT1cIiArIGhpZGRlbkluTWF4UHJpY2UudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLW1heFByaWNlPS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtbWF4UHJpY2U9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5DYXRlZ29yeS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtY2F0ZWdvcnk9XCIgKyBoaWRkZW5JbkNhdGVnb3J5LnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1jYXRlZ29yeT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLWNhdGVnb3J5PS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluQ29sb3VyLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1jb2xvdXI9XCIgKyBoaWRkZW5JbkNvbG91ci52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtY29sb3VyPS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtY29sb3VyPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhyZWY7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfZmlsdGVyX3Jlc3VsdHMoQVBJUmVzdWx0czogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogRmlsdGVycyB0aGUgcmVzdWx0cyBvbiB0aGUgc2VhcmNoIHBhZ2UgaW4gYWNjb3JkYW5jZSB0byB0aGUgZGF0YVxyXG4gICAgICogcmV0cmlldmVkIGZyb20gdGhlIHNlYXJjaCBBUEkuXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0cycpWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3Qgb3JpZ1Jlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzX19yZXN1bHQnKTtcclxuXHJcbiAgICBsZXQgdmFsaWRQcm9kdWN0cyA9IFtdO1xyXG4gICAgcmVzdWx0OiBKU09OO1xyXG4gICAgZm9yIChjb25zdCByZXN1bHQgaW4gQVBJUmVzdWx0cykge1xyXG4gICAgICB2YWxpZFByb2R1Y3RzLnB1c2goQVBJUmVzdWx0c1tyZXN1bHRdLnByb2R1Y3RfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IHJJRCA9IDA7IHJJRDxvcmlnUmVzdWx0cy5sZW5ndGg7IHJJRCsrKSB7XHJcbiAgICAgIGlmICh2YWxpZFByb2R1Y3RzLmluY2x1ZGVzKE51bWJlcihvcmlnUmVzdWx0c1tySURdLmdldEF0dHJpYnV0ZSgnSUQnKSEpKSkge1xyXG4gICAgICAgIG9yaWdSZXN1bHRzW3JJRF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9yaWdSZXN1bHRzW3JJRF0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyOC8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29udGFpbnMgaW1wb3J0cyBvZiBhbGwgdGhlIG1haW4gY2xhc3Nlcy5cclxuLy8gQmVoYXZlcyBhcyB0aGUgbWFpbiBodWIgZm9yIHRoZSBqcyBidW5kbGUuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wZG93bi1tZW51XCI7XHJcbmltcG9ydCB7IFF1YW50aXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9xdWFudGl0eVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hGaWx0ZXJzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hfZmlsdGVyc1wiO1xyXG5pbXBvcnQgeyBFeHRlbmRQcm9kdWN0UGFnZSB9IGZyb20gXCIuL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWxJbWdzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJvdXNlbC1pbWdzXCI7XHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcbmltcG9ydCB7IEJhc2tldFBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9iYXNrZXQvYmFza2V0XCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyUGFzc3dvcmRDaGVjayB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVnaXN0ZXItdmFsaWRhdGlvblwiO1xyXG5cclxuLy8gQnVpbGQgdGhlIG5hdmlnYXRpb25cclxubmV3IE5hdmlnYXRpb24oKTtcclxuXHJcbi8vIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGJhc2tldFxyXG5uZXcgQmFza2V0U3RhdGUoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBkcm9wZG93biBtZW51XHJcbm5ldyBEcm9wZG93bk1lbnUoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBzZWFyY2ggZmlsdGVyc1xyXG5uZXcgU2VhcmNoRmlsdGVycygpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUEFHRSBTUEVDSUZJQyBKQVZBU0NSSVBUXHJcbmNvbnN0IENVUlJFTlRfVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblxyXG5pZiAoQ1VSUkVOVF9VUkwuc2VhcmNoKC9cXC9wcm9kdWN0c1xcL1swLTldezEsfS8pICE9IC0xKSB7XHJcbiAgLy8gUHJvZHVjdCBQYWdlXHJcbiAgbmV3IEV4dGVuZFByb2R1Y3RQYWdlKCk7XHJcbiAgbmV3IFF1YW50aXR5Q29tcG9uZW50KCk7XHJcbiAgbmV3IENhcm91c2VsSW1ncygpO1xyXG59IGVsc2UgaWYgKENVUlJFTlRfVVJMLmluY2x1ZGVzKFwiL2Jhc2tldC9cIikpIHtcclxuICAvLyBCYXNrZXQgUGFnZVxyXG4gIG5ldyBCYXNrZXRQYWdlKCk7XHJcbn0gZWxzZSBpZiAoQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCJ1c2VyL3JlZ2lzdGVyXCIpKSB7XHJcbiAgLy8gQWNjb3VudCBSZWdpc3RyYXRpb24gcGFnZVxyXG4gIG5ldyBSZWdpc3RlclBhc3N3b3JkQ2hlY2soKTtcclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA1LzAxLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gVGhlIGJhc2tldCBwYWdlLlxyXG4vL1xyXG4vLyBGVU5DVElPTkFMSVRZXHJcbi8vIC0gQ2FsbHMgdGhlIGJhc2tldC1pbmZvLUFQSSB3aGVyZSB1c2luZyB0aGUgbG9jYWwgc3RvcmFnZSBpdCBpcyBhYmxlIHRvIHNlbmRcclxuLy8gICBhIEdFVCByZXF1ZXN0IHRvIHRlaCBBUEkgc2l0ZSB1c2luZyB0aGUgcHJpbWFyeSBrZXlzIG9mIHRoZSBpdGVtcyBpbiB0aGVcclxuLy8gICBiYXNrZXQuXHJcbi8vIC0gQnVpbGRzIHBhcnQgb2YgdGhlIERPTSB3aGljaCB3aWxsIGRpc3BsYXkgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHdoYXQgaXMgaW5cclxuLy8gICBiYXNrZXQuXHJcbi8vIC0gU2V0cyBrZXkgYmluZGVycyBvbiB0aGUgcXVhbnRpdHkgb3B0aW9uIGFuZCBcInhcIiBvcHRpb24gc28gdGhhdCBpdCB1cGRhdGVzXHJcbi8vICAgdGhlIGJhc2tldC5cclxuLy8gLSBVcGRhdGVzIHRvdGFscyBzZWN0aW9uIG9uIGxvYWQgaWYgdGhlcmUgaXMgc29tZXRoaW5nIGluIHRoZSBiYXNrZXQuXHJcbi8vIC0gU2V0IGtleSBiaW5kZXJzIHNvIHRoYXQgd2hlbmV2ZXIgdGhlcmUgaXMgYSBjaGFuZ2UgdG8gdGhlIGJhc2tldCBpdGVtcyxcclxuLy8gICB0aGUgdG90YWxzIHdpbGwgYWxzbyB1cGRhdGUuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBJTVBPUlRTXHJcbmltcG9ydCB7IFZhbGlkYXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgTnVtYmVyRm9ybWF0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9udW1iZXJfZm9ybWF0XCI7XHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5pbXBvcnQgeyBRdWFudGl0eUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1YW50aXR5XCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgQmFza2V0UGFnZSBleHRlbmRzIEJhc2tldFN0YXRlIHtcclxuICAvKipcclxuICAgKiBXaWxsIGJ1aWxkIGVsZW1lbnRzIG9udG8gYmFza2V0IHBhZ2UgdXNpbmcgYW4gQVBJIHRvIHJldHJpZXZlXHJcbiAgICogaW5mb3JtYXRpb24gb24gcHJvZHVjdHMgY3VycmVudGx5IGluIHRoZSB1c2VyJ3MgYmFza2V0IChpbmZvcm1hdGlvblxyXG4gICAqIHN0b3JlZCBpbiBsb2NhbCBzdG9yYWdlKVxyXG4gICAqL1xyXG5cclxuICAvLyBUaGUgbWFpbiBsb2NhdGlvbiBhcyB0byB3aGVyZSBlYWNoIHByb2R1Y3Qgd2lsbCBiZSBpbnNlcnRlZCBmcm9tIHRoZVxyXG4gIC8vIHVzZXIncyBiYXNrZXQuXHJcbiAgc3VtbWFyeUl0ZW1zUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImJhc2tldC1zdW1tYXJ5LWRhdGFcIlxyXG4gICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGJhc2tldEl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgcHJvY2VzcyBpbiB3aGljaCB0aGUgYmFza2V0IHBhZ2UgRE9NIGlzIGJ1aWxkLlxyXG4gICAgICovXHJcbiAgICBzdXBlcigpO1xyXG4gICAgaWYgKHRoaXMuaXRlbXMgIT0gbnVsbCAmJiB0aGlzLml0ZW1zICE9IFwie31cIikge1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBKU09OLnBhcnNlKHRoaXMuaXRlbXMpKSB7XHJcbiAgICAgICAgdGhpcy5iYXNrZXRJdGVtcy5wdXNoKGtleSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJhc2tldEl0ZW1zU3RyID0gdGhpcy5iYXNrZXRJdGVtcy5qb2luKFwiLFwiKTtcclxuXHJcbiAgICAgIC8vIENhbGwgQVBJXHJcbiAgICAgIGNvbnN0IEFQSVBhdGggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFxyXG4gICAgICAgIC9iYXNrZXQuKi8sXHJcbiAgICAgICAgXCJiYXNrZXQtaW5mby1BUEkvP3Brcz1cIiArIGJhc2tldEl0ZW1zU3RyXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIEFQSVBhdGgpO1xyXG4gICAgICByZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IEFQSVJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICBpZiAoQVBJUmVzcG9uc2UucHJvZHVjdHNJbmZvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRfYmFza2V0X3N1bW1hcnkoQVBJUmVzcG9uc2UucHJvZHVjdHNJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfYmFza2V0X3N1bW1hcnkoYWxsUHJvZHVjdHM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBlYWNoIGVsZW1lbnQgaW50byB0aGUgRE9NIGluc2lkZSB0aGUgdGFyZ2V0IHBhcmVudCBjb250YWluZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHByb2R1Y3RQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvYmFza2V0LiovLCBcInByb2R1Y3RzL1wiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJvZHVjdCA9IGFsbFByb2R1Y3RzW2ldO1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBpdGVtcyA9IE51bWJlcihKU09OLnBhcnNlKHRoaXMuaXRlbXMpW3Byb2R1Y3QucHJvZHVjdElkXSk7XHJcblxyXG4gICAgICAvLyBEaXYgdG8gY29udGFpbiBhbGwgcHJvZHVjdCBlbGVtZW50cywgd2hpY2ggd2lsbCB0aGVuIGJlIGFwcGVuZGVkXHJcbiAgICAgIC8vIGludG8gdGhlIHBhcmVudCBlbGVtZW50LlxyXG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YWJsZV9fcm93XCI7XHJcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlkXCIsIHByb2R1Y3QucHJvZHVjdElkKTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3QgSW1hZ2UgRW1iZWRkZWQgaW4gTGluayBFbGVtZW50XHJcbiAgICAgIGNvbnN0IGltZ0FUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgaW1nQVRhZy5jbGFzc05hbWUgPSBcInRhYmxlX19maWVsZCB0YWJsZV9fZmllbGRcIjtcclxuICAgICAgaW1nQVRhZy5ocmVmID0gcHJvZHVjdFBhZ2UgKyBwcm9kdWN0LnByb2R1Y3RJZDtcclxuICAgICAgaW1nQVRhZy5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtaW1hZ2VcIik7XHJcbiAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpbWdFbGVtLnNyYyA9IHByb2R1Y3QuaW1hZ2U7XHJcbiAgICAgIGltZ0VsZW0uYWx0ID0gXCJJbWFnZSBvZiBcIiArIHByb2R1Y3QucHJvZHVjdE5hbWU7XHJcbiAgICAgIGltZ0VsZW0uY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGQgdGFibGVfX2ZpZWxkLS1pbWdcIjtcclxuICAgICAgaW1nQVRhZy5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3QgTmFtZVxyXG4gICAgICBjb25zdCBuYW1lRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBuYW1lRWxlbS5jbGFzc05hbWUgPSBcInRhYmxlX19maWVsZFwiO1xyXG4gICAgICBuYW1lRWxlbS5ocmVmID0gcHJvZHVjdFBhZ2UgKyBwcm9kdWN0LnByb2R1Y3RJZDtcclxuICAgICAgbmFtZUVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LW5hbWVcIik7XHJcbiAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5wcm9kdWN0TmFtZTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3QgU3RvcmVcclxuICAgICAgY29uc3Qgc3RvcmVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIHN0b3JlRWxlbS5jbGFzc05hbWUgPSBcInRhYmxlX19maWVsZFwiO1xyXG4gICAgICBzdG9yZUVsZW0uaHJlZiA9IFwiI1wiO1xyXG4gICAgICBzdG9yZUVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXN0b3JlXCIpO1xyXG4gICAgICBzdG9yZUVsZW0udGV4dENvbnRlbnQgPSBwcm9kdWN0LnN0b3JlTmFtZTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3QgQ29sb3VyXHJcbiAgICAgIGNvbnN0IGNvbG91ckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgY29sb3VyRWxlbS5jbGFzc05hbWUgPSBcInRhYmxlX19maWVsZFwiO1xyXG4gICAgICBjb2xvdXJFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1jb2xvdXJcIik7XHJcbiAgICAgIGNvbG91ckVsZW0udGV4dENvbnRlbnQgPSBwcm9kdWN0LmNvbG91ck5hbWU7XHJcblxyXG4gICAgICAvLyBRdWFudGl0eVxyXG4gICAgICAvLyBOT1RFOiBUaGUgSFRNTCBmb3JtYXQgbXVzdCBmb2xsb3cgdGhlIHN0cnVjdHVyZSBkZWZpbmVkIGluIHRoZSBxdWFudGl0eVxyXG4gICAgICAvLyBjb21wb25lbnQuXHJcbiAgICAgIGNvbnN0IHF1YW50aXR5Q29udGFpbmVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHkgdGFibGVfX2ZpZWxkXCI7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5pZCA9IFwicHJvZHVjdC1cIiArIHByb2R1Y3QucHJvZHVjdElkO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJxdWFudGl0eVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2lucHV0XCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQubWluID0gXCIwXCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuc3RlcCA9IFwiMVwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0Lm1heCA9IHByb2R1Y3QuaW52ZW50b3J5O1xyXG4gICAgICBxdWFudGl0eUlucHV0LnZhbHVlID0gaXRlbXMudG9TdHJpbmcoKTtcclxuICAgICAgcXVhbnRpdHlJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBlbnRlcmVkIGlzIGEgcG9zaXRpdmUgaW50ZWdlciB0aGVuIHRoZSBjZXJ0YWluIHVwZGF0ZXNcclxuICAgICAgICAvLyB3aWxsIHRha2UgcGxhY2UuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVhbnRpdHlJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKFZhbGlkYXRpb24uY2hlY2tfaWZfcG9zaXRpdmVfaW50KE51bWJlcihxdWFudGl0eUlucHV0LnZhbHVlKSkpIHtcclxuICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBlbnRlcmVkIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbWF4LCB0aGVuIHNldCBpdCB0byB0aGUgbWF4LlxyXG4gICAgICAgICAgbGV0IHZhbHVlID0gTnVtYmVyKHF1YW50aXR5SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgaWYgKHZhbHVlID4gTnVtYmVyKHF1YW50aXR5SW5wdXQubWF4KSkge1xyXG4gICAgICAgICAgICBxdWFudGl0eUlucHV0LnZhbHVlID0gcXVhbnRpdHlJbnB1dC5tYXg7XHJcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHF1YW50aXR5SW5wdXQubWF4KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGxvY2FsIHN0b3JhZ2UgKHVzZXIncyBiYXNrZXQpXHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZV9zaW5nbGVfaXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcHJpY2VcclxuICAgICAgICAgIHByaWNlU3Bhbi50ZXh0Q29udGVudCA9ICh2YWx1ZSAqIHByb2R1Y3QucHJpY2UpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBiYXNrZXQgdG90YWxzXHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG1pbnVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgbWludXNCdG4uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19idG5cIjtcclxuICAgICAgbWludXNCdG4uc2V0QXR0cmlidXRlKFwiY29udHJvbFwiLCBcInF1YW50aXR5LWRvd25cIik7XHJcbiAgICAgIG1pbnVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVfYW5faXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgcHJvZHVjdC5wcmljZSwgcHJpY2VTcGFuKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcGx1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIHBsdXNCdG4uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19idG5cIjtcclxuICAgICAgcGx1c0J0bi5zZXRBdHRyaWJ1dGUoXCJjb250cm9sXCIsIFwicXVhbnRpdHktdXBcIik7XHJcbiAgICAgIHBsdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmFkZF9hbl9pdGVtKHByb2R1Y3QucHJvZHVjdElkLCBwcm9kdWN0LnByaWNlLCBwcmljZVNwYW4pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBtaW51c0J0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgbWludXNCdG5TcGFuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI7XHJcbiAgICAgIG1pbnVzQnRuU3Bhbi50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG5cclxuICAgICAgY29uc3QgcGx1c0J0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgcGx1c0J0blNwYW4uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19idG5fX3RleHRcIjtcclxuICAgICAgcGx1c0J0blNwYW4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuXHJcbiAgICAgIG1pbnVzQnRuLmFwcGVuZENoaWxkKG1pbnVzQnRuU3Bhbik7XHJcbiAgICAgIHBsdXNCdG4uYXBwZW5kQ2hpbGQocGx1c0J0blNwYW4pO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQobWludXNCdG4pO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQocXVhbnRpdHlJbnB1dCk7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChwbHVzQnRuKTtcclxuXHJcbiAgICAgIC8vIFByaWNlXHJcbiAgICAgIGNvbnN0IHByaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICBwcmljZUVsZW0uY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGRcIjtcclxuICAgICAgcHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgICBjb25zdCBwb3VuZEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgcG91bmRJLnRleHRDb250ZW50ID0gXCLCo1wiO1xyXG4gICAgICBwb3VuZEkuc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXByaWNlLWN1cnJlbmN5XCIpO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocG91bmRJKTtcclxuXHJcbiAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBwcmljZVNwYW4uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXByaWNlLXZhbHVlXCIpO1xyXG4gICAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcChcclxuICAgICAgICBOdW1iZXIocHJvZHVjdC5wcmljZSkgKiBpdGVtc1xyXG4gICAgICApO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocHJpY2VTcGFuKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSBJdGVtIEJ1dHRvblxyXG4gICAgICBjb25zdCByZW1vdmVJdGVtU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5jbGFzc05hbWUgPSBcInRhYmxlX19pY29uXCI7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicmVtb3ZlLWl0ZW1cIik7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgLy8gT24gcmVtb3ZhbCwgdXBkYXRlIHRoZSBET00gYW5kIHRoZSBiYXNrZXQvbG9jYWwgc3RvcmFnZSBhY2NvcmRpbmdseS5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJlbW92ZV93aG9sZV9pdGVtKHByb2R1Y3QucHJvZHVjdElkLCBjb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUl0ZW1JID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklcIik7XHJcbiAgICAgIHJlbW92ZUl0ZW1JLmNsYXNzTmFtZSA9IFwiZmEgZmEtdGltZXNcIjtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbUkpO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbVNwYW4pO1xyXG5cclxuICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIHRhcmdldCBlbGVtZW50LlxyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQVRhZyk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRWxlbSk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yZUVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3VyRWxlbSk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWFudGl0eUNvbnRhaW5lckVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2VFbGVtKTtcclxuICAgICAgdGhpcy5zdW1tYXJ5SXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIC8vIEFwcGx5IHRoZSBKYXZhU2NyaXB0IHRvIGVhY2ggcXVhbnRpdHkgY29tcG9uZW50LlxyXG4gICAgbmV3IFF1YW50aXR5Q29tcG9uZW50KCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV9iYXNrZXRfdG90YWxzKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSB0b3RhbHMgc2VjdGlvbiBpbiB0aGUgYmFza2V0IHBhZ2UuXHJcbiAgICAgKiBUaGUgSFRNTCBkZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHNldCB0aGUgbG9hZHMgdGhlIGVsZW1lbnRzIGFuZCBzZXQgdGhlXHJcbiAgICAgKiB2YWx1ZXMgdG8gwqMwLjAwIGZvciBlYWNoIGVsZW1lbnQuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgdXBkYXRlIHRoZSB0b3RhbHMuXHJcbiAgICAgKi9cclxuICAgIC8vIEJhc2tldCBFbGVtZW50cyBpbiB0aGUgRE9NXHJcbiAgICBjb25zdCBzdWJ0b3RhbEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldC1zdWJ0b3RhbFwiKSFcclxuICAgICAgLmNoaWxkcmVuWzFdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGNvbnN0IHZhdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldC12YXRcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB0b3RhbEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldC10b3RhbFwiKSFcclxuICAgICAgLmNoaWxkcmVuWzFdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgICAvLyBJbml0aWFsIFZhbHVlXHJcbiAgICBsZXQgdG90YWxQcmljZSA9IDA7XHJcblxyXG4gICAgLy8gUmV0cmlldmUgYWxsIGVsZW1lbnRzIHdoZXJlIHRoZXJlIGlzIGEgcHJpY2UgYW5kIGl0ZXJhdGl2ZWx5IHVwZGF0ZVxyXG4gICAgLy8gdGhlIHRvdGFsIHByaWNlLlxyXG4gICAgY29uc3QgcHJpY2VFbGVtcyA9IGRvY3VtZW50XHJcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImJhc2tldC1zdW1tYXJ5LWRhdGFcIikhXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX2ZpZWxkPltmaWVsZD1cInByb2R1Y3QtcHJpY2UtdmFsdWVcIl0nKTtcclxuXHJcbiAgICBmb3IgKGxldCBwcmljZUlkeCA9IDA7IHByaWNlSWR4IDwgcHJpY2VFbGVtcy5sZW5ndGg7IHByaWNlSWR4KyspIHtcclxuICAgICAgdG90YWxQcmljZSArPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwX3RvX2Zsb2F0KFxyXG4gICAgICAgIHByaWNlRWxlbXNbcHJpY2VJZHhdLnRleHRDb250ZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBET00gd2lsbCB0aGUgbmV3IHRvdGFsIGZpZ3VyZXMuXHJcbiAgICBjb25zdCBzdWJUb3RhbCA9IHRvdGFsUHJpY2UgLyAxLjI7XHJcbiAgICBjb25zdCB2YXQgPSB0b3RhbFByaWNlIC0gc3ViVG90YWw7XHJcblxyXG4gICAgc3VidG90YWxFbGVtLnRleHRDb250ZW50ID0gc3ViVG90YWwudG9GaXhlZCgyKTtcclxuICAgIHZhdEVsZW0udGV4dENvbnRlbnQgPSB2YXQudG9GaXhlZCgyKTtcclxuICAgIHRvdGFsRWxlbS50ZXh0Q29udGVudCA9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBhcmF0ZWRfMmRwKHRvdGFsUHJpY2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSByZW1vdmVfYW5faXRlbShcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC4gRHVyaW5nIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwcm9kdWN0SWQ6IHN0cmluZyxcclxuICAgIHByaWNlOiBzdHJpbmcsXHJcbiAgICBwcmljZUVsZW06IEhUTUxFbGVtZW50XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVtb3ZlX2l0ZW0oTnVtYmVyKHByb2R1Y3RJZCksIDEpO1xyXG4gICAgcHJpY2VFbGVtLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgIE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBfdG9fZmxvYXQocHJpY2VFbGVtLnRleHRDb250ZW50KSAtIE51bWJlcihwcmljZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGFkZF9hbl9pdGVtKFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LiBEdXJpbmcgdGhlIHByb2Nlc3MsIGl0IHdpbGwgdXBkYXRlXHJcbiAgICAgKiB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgdXBkYXRlIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHByb2R1Y3RJZDogc3RyaW5nLFxyXG4gICAgcHJpY2U6IHN0cmluZyxcclxuICAgIHByaWNlRWxlbTogSFRNTEVsZW1lbnRcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5hZGRfaXRlbShOdW1iZXIocHJvZHVjdElkKSwgMSk7XHJcbiAgICBwcmljZUVsZW0udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcChcclxuICAgICAgTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcF90b19mbG9hdChwcmljZUVsZW0udGV4dENvbnRlbnQpICsgTnVtYmVyKHByaWNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgcmVtb3ZlX3dob2xlX2l0ZW0ocHJvZHVjdElkOiBzdHJpbmcsIHBhcmVudENvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBlbnRpcmUgaXRlbSBmcm9tIHRoZSBiYXNrZXQuIEluIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogbG9jYWwgc3RvcmFnZSBhbmQgdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZW1vdmVfZW50aXJlX2l0ZW0ocHJvZHVjdElkKTtcclxuICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyNy8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIEZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBXaWxsIGhhbmRsZSB0aGUgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLiBUaGVzZSBpbmNsdWRlIHRoZVxyXG4vLyBmb2xsb3dpbmc6XHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgb250byB0aGUgSFRNTCBhZGRpbmcgb250byB0aGUgY29sb3VycyBmaWx0ZXIgb3B0aW9ucyBhcyB3ZWxsIGFzXHJcbi8vICAgIHRoZSBwcm9kdWN0IGluZm8gc2VjdGlvbi4gVGhlcmUgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB3aGF0IG90aGVyXHJcbi8vICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4vLyAgICByZXRyaWV2ZWQgZnJvbSBhbiBBUEkuXHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuLy8gICAgdG8gYmUgYWRkZWQgdG8gdGhlIGJhc2tldCBhbmQgZm9yIHRoZSBwYWdlIHRvIGJlIHJlZnJlc2hlZC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZFByb2R1Y3RQYWdlIGV4dGVuZHMgQmFza2V0U3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgaGFuZGxlIHRoZSBKUyBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuIFRoZXNlIGluY2x1ZGUgdGhlXHJcbiAgICogZm9sbG93aW5nOlxyXG4gICAqXHJcbiAgICogIC0gV2lsbCBidWlsZCBvbnRvIHRoZSBIVE1MIGFkZGluZyBvbnRvIHRoZSBjb2xvdXJzIGZpbHRlciBvcHRpb25zIGFzIHdlbGwgYXNcclxuICAgKiAgICB0aGUgcHJvZHVjdCBpbmZvIHNlY3Rpb24uIFRoZXJlIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gd2hhdCBvdGhlclxyXG4gICAqICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4gICAqICAgIHJldHJpZXZlZCBmcm9tIGFuIEFQSS5cclxuICAgKlxyXG4gICAqICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuICAgKiAgICB0byBiZSBhZGRlZCB0byB0aGUgYmFza2V0IGFuZCBmb3IgdGhlIHBhZ2UgdG8gYmUgcmVmcmVzaGVkLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogLSBSZXRyaWV2ZXMgZGF0YSBmcm9tIHRoZSBBUEkgYW5kIGNhbGxzIG1ldGhvZHMgdG8gYnVpbGQgb250byB0aGUgRE9NLlxyXG4gICAgICogLSBBZGRzIGZ1bmN0aW9uYWxpdHkgb250byB0aGUgXCJhZGQgdG8gYmFza2V0IGJ1dHRvblwiLlxyXG4gICAgICovXHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uc3QgQVBJUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgIFwiL3Byb2R1Y3RzL1wiLFxyXG4gICAgICBcIi9wcm9kdWN0cy9pbmZvLWFwaS9cIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIC8vIEFkZGluZyBjb2xvdXIgdmFyaWF0aW9uc1xyXG4gICAgICAgIGlmIChkYXRhLmNvbG91cnMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfY29sb3VycyhkYXRhLmNvbG91cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgb3RoZXIgcHJvZHVjdHMgb2YgdGhlIHNhbWUgc2V0XHJcbiAgICAgICAgaWYgKGRhdGEuc2V0cykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9wcm9kdWN0X3NldHMoZGF0YS5zZXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIHNpbWlsYXIgcHJvZHVjdHNcclxuICAgICAgICBpZiAoZGF0YS5zaW1pbGFyKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoZGF0YS5zaW1pbGFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIGZlYXR1cmVzIGluZm9ybWF0aW9uXHJcbiAgICAgICAgaWYgKGRhdGEuZmVhdHVyZXMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfZmVhdHVyZXMoZGF0YS5mZWF0dXJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYWRkX3RvX2Jhc2tldCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9jb2xvdXJzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgZHJvcGRvd24gY29sb3VycyBkcm9wZG93biBtZW51IGFuZCBhZGRzIG1vcmUgY29sb3Vyc1xyXG4gICAgICogaW4gYWNjb3JkYW5jZSB0byBob3cgbWFueSBob3cgbWFueSBjb2xvdXJzIHdlcmUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBhcHBlbmQgZWxlbWVudHMgb250byB0aGUgZWxlbWVudFxyXG4gICAgICogI3Byb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBGb3IgZWFjaCBjb2xvdXIsIHRoZSBmb2xsb3dpbmcgSFRNTCB3aWxsIGJlIGFwcGVuZGVkOlxyXG4gICAgICpcclxuICAgICAqIDxhXHJcbiAgICAgKiAgIGhyZWY9XCJ7bGluayB0byBwcm9kdWN0fVwiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIlxyXG4gICAgICogICBmb3I9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICogICA8bGFiZWwgZm9yPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIj5cclxuICAgICAqICAgICA8c3BhblxyXG4gICAgICogICAgICAgY2xhc3M9XCJzbS1jb2xvdXItYm94XCJcclxuICAgICAqICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHtjb2xvdXIgaGV4IHZhbHVlfTtcIj5cclxuICAgICAqICAgICA8L3NwYW4+XHJcbiAgICAgKiAgICAge2NvbG91ci1uYW1lfVxyXG4gICAgICogICA8L2xhYmVsPlxyXG4gICAgICogPC9hPlxyXG4gICAgICogPGlucHV0XHJcbiAgICAgKiAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCJcclxuICAgICAqICAgbmFtZT1cInByb2QtZi1jb2xvdXJcIlxyXG4gICAgICogICBpZD1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqICAgdmFsdWU9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICBjb25zdCBjb2xvdXIgPSBhdHRyc1thXS5jb2xfbmFtZTtcclxuICAgICAgICBjb25zdCBoZXhfdmFsID0gYXR0cnNbYV0uY29sX2hleF92YWw7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImFcIiB0YWdcclxuICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwibGFiZWxcIiB0YWdcclxuICAgICAgICBjb25zdCBsYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcbiAgICAgICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcInNwYW5cIiB0YWdcclxuICAgICAgICBjb25zdCBzcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHNwYW5FbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic20tY29sb3VyLWJveFwiKTtcclxuICAgICAgICBzcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IFwiICsgaGV4X3ZhbCArIFwiO1wiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwiaW5wdXRcIiB0YWdcclxuICAgICAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9kLWYtY29sb3VyXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVhY2ggdGFnIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGFyZW50IGVsZW1lbnRzLlxyXG4gICAgICAgIGxhYmVsRWxlbS5hcHBlbmRDaGlsZChzcGFuRWxlbSk7XHJcbiAgICAgICAgbGFiZWxFbGVtLmFwcGVuZChjb2xvdXIpO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGxhYmVsRWxlbSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyB0aGUgZWxlbWVudHMgdG8gdGhlIHRhcmdldCBlbGVtZW50IGluIHRoZSBET00uXHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChpbnB1dEVsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1jb2xvdXItdmFyaWF0aW9ucyBkb2VzIG5vdCBleGlzdCwgYWx0ZXJuYXRpdmUgY29sb3VycyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfcHJvZHVjdF9zZXRzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgXCJwcm9kdWN0IHNldHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjcHJvZHVjdC1zZXRzLlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHByb2R1Y2UgdGhlIGZvbGxvd2luZyBIVE1MIGZvciBlYWNoIHNldDpcclxuICAgICAqXHJcbiAgICAgKiA8YSBjbGFzcz1cInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiIGhyZWY9XCJ7cHJvZHVjdCB1cmx9XCJcclxuICAgICAqICAgPGltZ1xyXG4gICAgICogICAgIGNsYXNzPVwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgKiAgICAgYWx0PVwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4ge3Byb2R1Y3QgbmFtZX1cIlxyXG4gICAgICogICA+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCI+e3Byb2R1Y3QgbmFtZX08L3NwYW4+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIj57cHJvZHVjdCBwcmljZX08L3NwYW4+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3Qtc2V0c1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2FdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgaW1nID0gYXR0cnNbYV0uc2hvd2Nhc2VfaW1hZ2U7XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBhdHRyc1thXS5wcmljZTtcclxuXHJcbiAgICAgICAgLy8gXCJBXCIgdGFnIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0LlxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIik7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nKTtcclxuICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiYWx0XCIsXHJcbiAgICAgICAgICBcIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIChcIiArIG5hbWUgKyBcIn1cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFwiU1BBTlwiIHRhZ3MgY29udGFpbmluZyB0aGUgcHJvZHVjdCBuYW1lIGFuZCBwcmljZVxyXG4gICAgICAgIGNvbnN0IHRleHRTcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHRleHRTcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0UHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgdGV4dFByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRQcmljZUVsZW0udGV4dENvbnRlbnQgPSBcIsKjXCIgKyBwcmljZTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgLy8gYW5kIGFwcGVuZCB0aGVtIG9udG8gdGhlIHRhcmdldEVsZW0gaW4gdGhlIERPTS5cclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRQcmljZUVsZW0pO1xyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1zZXRzIGRvZXMgbm90IGV4aXN0LCBwcm9kdWN0LXNldHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBcInNpbWlsYXIgcHJvZHVjdHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjc2ltaWxhci1wcm9kdWN0cy5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBwcm9kdWNlIHRoZSBmb2xsb3dpbmcgSFRNTCBmb3IgZWFjaCBzZXQ6XHJcbiAgICAgKlxyXG4gICAgICogPGEgY2xhc3M9XCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIiBocmVmPVwie3Byb2R1Y3QgdXJsfVwiXHJcbiAgICAgKiAgIDxpbWdcclxuICAgICAqICAgICBjbGFzcz1cInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICogICAgIGFsdD1cIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIHtwcm9kdWN0IG5hbWV9XCJcclxuICAgICAqICAgPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0IG5hbWV9PC9zcGFuPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCI+e3Byb2R1Y3QgcHJpY2V9PC9zcGFuPlxyXG4gICAgICogPC9hPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW1pbGFyLXByb2R1Y3RzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbYV0ubmFtZTtcclxuICAgICAgICBjb25zdCBpbWcgPSBhdHRyc1thXS5zaG93Y2FzZV9pbWFnZTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IGF0dHJzW2FdLnByaWNlO1xyXG5cclxuICAgICAgICAvLyBcIkFcIiB0YWcgd2hpY2ggd2lsbCBjb250YWluIHRoZSBpbWFnZSBhbmQgdGhlIHRleHQuXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpbWlsYXItcHJvZHVjdCByZWxhdGVkLXByb2R1Y3RcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImFsdFwiLFxyXG4gICAgICAgICAgXCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiAoXCIgKyBuYW1lICsgXCJ9XCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBcIlNQQU5cIiB0YWdzIGNvbnRhaW5pbmcgdGhlIHByb2R1Y3QgbmFtZSBhbmQgcHJpY2VcclxuICAgICAgICBjb25zdCB0ZXh0U3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRTcGFuRWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRQcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICB0ZXh0UHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRQcmljZUVsZW0udGV4dENvbnRlbnQgPSBcIsKjXCIgKyBwcmljZTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgLy8gYW5kIGFwcGVuZCB0aGVtIG9udG8gdGhlIHRhcmdldEVsZW0gaW4gdGhlIERPTS5cclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRQcmljZUVsZW0pO1xyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjc2ltaWxhci1wcm9kdWN0cyBkb2VzIG5vdCBleGlzdCwgc2ltaWxhci1wcm9kdWN0cyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGJ1aWxkX2ZlYXR1cmVzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGZlYXR1cmVzIHNlY3Rpb24gb2YgcHJvZHVjdCBpbmZvcm1hdGlvbiBiYXNlZCBvbiByZXN1bHRzXHJcbiAgICAgKiByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJLlxyXG4gICAgICogV2lsbCBjcmVhdGUgYSBcIlBcIiB0YWcgZm9yIGVhY2ggZmlsdGVyIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgdGFyZ2V0XHJcbiAgICAgKiBlbGVtZW50IGluIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWZlYXR1cmVzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgYXR0cnMubGVuZ3RoOyBmKyspIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbZl0ubmFtZTtcclxuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3QtaW5mb19fc2VjdGlvbl9fdGV4dFwiKTtcclxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChuZXdFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3QtZmVhdHVyZXMgZG9lcyBub3QgZXhpc3QsIHNpbWlsYXItcHJvZHVjdHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGFkZF90b19iYXNrZXQoKSB7XHJcbiAgICAvKiogQWRkcyBwcm9kdWN0cyBpbnRvIHRoZSBiYXNrZXQgKi9cclxuICAgIGNvbnN0IGlucHV0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcInF1YW50aXR5LWN0cmxcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcHJvZHVjdElkID0gTnVtYmVyKGlucHV0RWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlkXCIpKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJhZGQtdG8tYmFza2V0LWJ0blwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHF1YW50aXR5ID0gTnVtYmVyKGlucHV0RWxlbS52YWx1ZSk7XHJcblxyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihxdWFudGl0eSkpIHtcclxuICAgICAgICBzdXBlci5hZGRfaXRlbShwcm9kdWN0SWQsIHF1YW50aXR5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcIkNoZWNrIHRoZSBxdWFudGl0eSwgaXQgaXMgZWl0aGVyIE5hTiBvciBhIGZsb2F0LiBNdXN0IGJlIGEgbnVtYmVyXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAzMC8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gUGFnZXMgd2hlcmUgaW50ZXJhY3Rpb24gd2l0aCBpdGVtcyBpbiB0aGUgYmFza2V0IG5lZWQgdG8gYmUgYWNjZXNzIGFuZC9vclxyXG4vLyBtb2RpZmllZC5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gLSBNYW5hZ2UgdGhlIGJhc2tldCBpdGVtc1xyXG4vLyAtIEtlZXAgYmFza2V0IGRhdGEgd2hlbmV2ZXIgdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcclxuLy8gLSBVcGRhdGVzIHRoZSBiYXNrZXQgaXRlbXMgY291bnRcclxuLy9cclxuLy8gREVTQ1JJUFRJT046XHJcbi8vIC0tLS0tLS0tLS0tLVxyXG4vLyBMZXZlcmFnZXMgdGhlIHBvd2VyIG9mIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCBhIHRyYWNrIG9mIHRoZSBiYXNrZXQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgQmFza2V0U3RhdGUge1xyXG4gIHRvdGFsSXRlbXM6IHN0cmluZyB8IG51bGwgfCBudW1iZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICBcInRvdGFsQmFza2V0U2l6ZVwiXHJcbiAgKTtcclxuICBpdGVtczogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFza2V0SXRlbXNcIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3JlYWRfaXRlbXMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgdG90YWwgYW5kIGJhc2tldCBzaXplIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIGNvbnZlcnRzXHJcbiAgICAgKiB0aGUgdmFsdWVzIGludG8gdHlwZXMgdGhhdCBjYW4gYmUgd29ya2VkIHdpdGguXHJcbiAgICAgKi9cclxuICAgIGlmICghdGhpcy50b3RhbEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMudG90YWxJdGVtcyA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKHRoaXMuaXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IHt9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfc2V0X2l0ZW1zKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgbG9jYWwgc3RvcmFnZSBpdGVtcyBpbnRvIHN0cmluZ3MgYW5kIHNhdmVzIHRoZW0gb250byB0aGVcclxuICAgICAqIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBiYXNrZXQgaXRlbXMgY291bnRlci5cclxuICAgICAqL1xyXG5cclxuICAgIGlmICghdGhpcy50b3RhbEl0ZW1zKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsQmFza2V0U2l6ZVwiLCBcIjBcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgXCJ0b3RhbEJhc2tldFNpemVcIixcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMudG9TdHJpbmcoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pdGVtcykge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYXNrZXRJdGVtc1wiLCBcInt9XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYXNrZXRJdGVtc1wiLCB0aGlzLml0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGJhc2tldFxyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGFkZF9pdGVtKGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgIC8qKiBNZXRob2QgZm9yIGFkZGluZyBpdGVtcyBpbnRvIHRoZSBiYXNrZXQuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcblxyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgKz0gcXVhbnRpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXRlbXNbaWRdKSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdICs9IHF1YW50aXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gPSBxdWFudGl0eTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcmVtb3ZlX2l0ZW0oaWQ6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgLyoqIE1ldGhvZCBmb3IgcmVtb3ZpbmcgaXRlbXMgZnJvbSB0aGUgYmFza2V0LiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG5cclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gICAgaWYgKHRoaXMudG90YWxJdGVtcyA+IDApIHtcclxuICAgICAgdGhpcy50b3RhbEl0ZW1zIC09IHF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuXHJcbiAgICBpZiAodGhpcy5pdGVtc1tpZF0pIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gPSBOdW1iZXIodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSAtPSBxdWFudGl0eTtcclxuICAgICAgaWYgKHRoaXMuaXRlbXNbaWRdID09IDApIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pdGVtc1tpZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHJlbW92ZV9lbnRpcmVfaXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAvKiogUmVtb3ZlcyBhbmQgZW50aXJlIGl0ZW0uICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKSAtIE51bWJlcih0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICBkZWxldGUgdGhpcy5pdGVtc1tpZF07XHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHVwZGF0ZV9iYXNrZXRfY291bnRlcihuZXdOdW06IHN0cmluZyB8IG51bWJlciB8IG51bGwpIHtcclxuICAgIC8qKiBVcGRhdGVzIHRoZSBiYXNrZXQgY291bnRlciBudW1iZXIgKi9cclxuICAgIGNvbnN0IGJhc2tldENvdW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImJhc2tldC10b3RhbC1pdGVtc1wiXHJcbiAgICApIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgICBpZiAobmV3TnVtKSB7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLnRleHRDb250ZW50ID0gbmV3TnVtLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB1cGRhdGVfc2luZ2xlX2l0ZW0ocHJvZHVjdElkOiBzdHJpbmcgfCBudW1iZXIsIG5ld051bTogbnVtYmVyKSB7XHJcbiAgICAvKiogVXBkYXRlcyB0aGUgbG9jYWwgc3RvcmFnZSBmb3IgYSBzaW5nbGUgaXRlbSB3aXRoIGEgbmV3IHF1YW50aXR5LiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG4gICAgY29uc3QgcHJldlZhbHVlID0gTnVtYmVyKHRoaXMuaXRlbXNbcHJvZHVjdElkXSlcclxuICAgIHRoaXMuaXRlbXNbcHJvZHVjdElkXSA9IG5ld051bTtcclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpICsgbmV3TnVtIC0gcHJldlZhbHVlO1xyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDgvMDEvMjAyMDBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBVdGlsaXR5IGNsYXNzIHRvIHJlZm9ybWF0IG51bWJlci5cclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJGb3JtYXQge1xyXG4gIC8qKiAgVXRpbGl0eSBjbGFzcyB0byBjb252ZXJ0IG51bWJlcnMgdG8gZGlmZmVyZW50IGZvcm1hdHMuICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN0YXRpYyB0aG91c2FuZF9zZXBhcmF0ZWRfMmRwKG51bTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAvKiogQ292ZXJ0cyBhIG51bWJlciB0byBhIHRob3VzYW5kIHNlcGFyYXRlZCBzdHJpbmcgdG8gMi5kLnAgKi9cclxuICAgIHJldHVybiBOdW1iZXIobnVtKVxyXG4gICAgICAudG9GaXhlZCgyKVxyXG4gICAgICAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIHRob3VzYW5kX3NlcF90b19mbG9hdChudW06IHN0cmluZyB8IG51bGwpIHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIENvbnZlcnRzIGEgdGhvdXNhbmQgc2VwYXJhdGVkIGZsb2F0IHRvIGEgZmxvYXQuIElmIHRoZSBhcmd1bWVudCA9IG51bGxcclxuICAgICAgICogdGhlbiAwIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAgICAgICAqL1xyXG4gICAgaWYgKCFudW0pIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKG51bS5yZXBsYWNlKFwiLFwiLCBcIlwiKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDcvMDEvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFV0aWxpdHkgcHJvdmlkaW5nIHZhbGlkYXRpb24gb3B0aW9ucy5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uIHtcclxuICAvKipcclxuICAgKiBBIHV0aWxpdGllcyBjbGFzcyBjb250YWluaW5nIHN0YXRpYyBtZXRob2Qgd2hpY2ggcnVuIHNvbWUgZm9ybSBvZlxyXG4gICAqIHZhbGlkYXRpb24uXHJcbiAgICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN0YXRpYyBjaGVja19pZl9wb3NpdGl2ZV9pbnQoaXRlbTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgIC8qKiBDaGVja3MgaWYgYW4gaXRlbSBpcyBhIHBvc2l0aXZlIGludGVnZXIgKi9cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgaXRlbSAhPSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbSA+PSAwICYmIGl0ZW0gPT09IE1hdGgucm91bmQoaXRlbSkpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF0IHRoaXMgc3RhZ2UsIHRoZSBvbmx5IGJyYW5jaCBzdWdnZXN0cyB0aGF0IHRoZSBudW1iZXIgaXMgPCAwLlxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==