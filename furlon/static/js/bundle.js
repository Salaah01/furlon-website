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








new _components_navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]();
new _state_basket_items__WEBPACK_IMPORTED_MODULE_6__["BasketState"]();
new _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"]();
new _components_search_filters__WEBPACK_IMPORTED_MODULE_3__["SearchFilters"]();
if (window.location.href.search(/\/products\/[0-9]{1,}/) != -1) {
    new _pages_products_product__WEBPACK_IMPORTED_MODULE_4__["ExtendProductPage"]();
    new _components_quantity__WEBPACK_IMPORTED_MODULE_2__["QuantityComponent"]();
    new _components_carousel_imgs__WEBPACK_IMPORTED_MODULE_5__["CarouselImgs"]();
}
if (window.location.href.includes("/basket/")) {
    new _pages_basket_basket__WEBPACK_IMPORTED_MODULE_7__["BasketPage"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3N0YXRlL2Jhc2tldC1pdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3V0aWxpdGllcy9udW1iZXJfZm9ybWF0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvdXRpbGl0aWVzL3ZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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QUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMxSUQ7QUFBQTtBQUFBO0lBQUE7SUF1QkEsQ0FBQztJQW5CUSxtQ0FBc0IsR0FBN0IsVUFBOEIsR0FBb0I7UUFFaEQsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNWLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR00sa0NBQXFCLEdBQTVCLFVBQTZCLEdBQWtCO1FBSzdDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0lBQUE7SUFtQkEsQ0FBQztJQVpRLGdDQUFxQixHQUE1QixVQUE2QixJQUFTO1FBR2xDLElBQUksT0FBTyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLE9BQU8sS0FBSztTQUNmO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLE9BQU8sSUFBSTtTQUNkO1FBR0QsT0FBTyxLQUFLO0lBQ2hCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJmdXJsb24vc3RhdGljL2pzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnVybG9uL3N0YXRpYy90cy9tYWluLnRzXCIpO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyOS8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBDYXJvdXNlbCBzdHlsZWQgaW1hZ2Ugc2xpZGUgc2hvd3MuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIE9uIGNsaWNrIG9mIGEgaW1hZ2UgdGh1bWJuYWlscyBvciB0aGUgY3VycmVudCBpbWFnZSwgdGhlIGN1cnJlbnQgaW1hZ2Ugc2hvdWxkXHJcbi8vIGNoYW5nZSBhY2NvcmRpbmdseS5cclxuLy8gQW5pbWF0aW9ucyBhcmUgaGFuZGxlZCB0aHJvdWdoIHRoZSBDU1MsIHRoZSBKUyBzZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgdG9cclxuLy8gY2hhbmdlIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBkaXNwbGF5IGltYWdlcyBhY2NvcmRpbmdseSBzbyBhcyB0byBkaXNwbGF5IHRoZVxyXG4vLyBzZWxlY3RlZCBpbWFnZS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbEltZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBldmVudCBsaXN0ZW5lcnMgb24gdGhlIGNhcm91c2VsIGltYWdlIGltYWdlcyBzdWNoIHRoYXQgd2hlblxyXG4gICAqIGEgdGh1bWJuYWlsIG9yIHRoZSBtYWluIHBpY3R1cmUgaXMgY2xpY2tlZCBvbiwgdGhlIGltYWdlIHdpbGwgY2hhbmdlLlxyXG4gICAqIFRoZSBhbmltYXRpb24gYW5kIHBvc2l0aW9uaW5nIGlzIGNvbnRyb2xsZWQgdmlhIHRoZSBDU1MsIHRoZSBjbGFzcyB3aWxsXHJcbiAgICogYWRkIGFuZCByZW1vdmUgYXR0cmlidXRlcyBmcm9tIHRoZSBlbGVtZW50cywgc28gdGhhdCB0aGUgYW5pbWF0aW9ucyBjYW5cclxuICAgKiBiZSB0cmlnZ2VyZWQuXHJcbiAgICovXHJcbiAgY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1jb250YWluZXJcIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTG9jYXRlcyB0aGUgZWxlbWVudHMgd2hlcmUgYW4gZXZlbnQgbGlzdGVuZXJzIG5lZWQgdG8gYmUgYWRkZWQgYW5kXHJcbiAgICAgKiBjYWxscyBtZXRob2RzIHRvIGFkZCBldmVudCBsaXN0ZW5lcnMgZGVwZW5kaW5nIG9uIHdoYXQgdGhlIGVsZW1lbnRcclxuICAgICAqIGlzLlxyXG4gICAgICovXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICAvLyBET00gZWxlbWVudHMgZm9yIGV2ZW50IGxpc3RlbmVycyB0byBiZSBhZGRlZC5cclxuICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LXNlY3Rpb25cIlxyXG4gICAgICApW2NdO1xyXG4gICAgICBjb25zdCBkaXNwbGF5SW1hZ2VzID0gZGlzcGxheUNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LXNlY3Rpb25fX2ltZ1wiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBpbWdUaHVtYnNDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbY10uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1jb250cm9sc1wiXHJcbiAgICAgIClbMF07XHJcbiAgICAgIGNvbnN0IGltZ1RodW1icyA9IGltZ1RodW1ic0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzLWNvbnRyb2xcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gIE1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBlYWNoIERPTSBlbGVtZW50LlxyXG4gICAgICB0aGlzLm9uX2NsaWNraW5nX3RodW1icyhkaXNwbGF5SW1hZ2VzLCBpbWdUaHVtYnMpO1xyXG4gICAgICB0aGlzLm9uX2NsaWNraW5nX2Rpc3BsYXlfaW1nKGRpc3BsYXlJbWFnZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgb25fY2xpY2tpbmdfdGh1bWJzKFxyXG4gICAgZGlzcGxheUltYWdlczogSFRNTENvbGxlY3Rpb24sXHJcbiAgICBpbWdUaHVtYnM6IEhUTUxDb2xsZWN0aW9uXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIEVhY2ggaW1hZ2UgdGh1bWJuYWlsIGVsZW1lbnQgaGFzIGEgXCJmb3JcIiBhdHRyaWJ1dGUgd2hpY2ggaW5kaWNhdGVzXHJcbiAgICAgKiB3aGljaCBlbGVtZW50IG9uIHRoZSBkaXNwbGF5IHNlY3Rpb24gaXQgcmVwcmVzZW50cy4gVGhlIGRpc3BsYXkgaW1hZ2VcclxuICAgICAqIGVsZW1lbnQgaGFzIGFuIFwiaW1nXCIgYXR0cmlidXRlIHdpdGggdGhlIHNhbWUgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogT24gY2xpY2tpbmcgb24gYSBpbWFnZSB0aHVtYm5haWwsIHRoZSBkaXNwbGF5IGF0dHJpYnV0ZSdzIHBvc2l0aW9uXHJcbiAgICAgKiBhdHRyaWJ1dGUgd2lsbCBiZWNvbWUgXCJzaG93XCIgd2hlcmUgdGhlIHNhbWUgYXR0cmlidXRlIHZhbHVlIGZvciBhbGxcclxuICAgICAqIG90aGVyIGltYWdlcyB3aWxsIGJlY29tZSBcImhpZGVcIi5cclxuICAgICAqXHJcbiAgICAgKiBOT1RFOiB0aGUgaW5pdGlhbCBpbWFnZSB3aWxsIGhhdmUgcG9zaXRpb249XCJpbml0XCIgaW5pdGlhbGx5IHNvIGFzIHRvXHJcbiAgICAgKiBhdm9pZCBhbnkgYW5pbWF0aW9ucyBvbiBzdGFydC4gSWYgdGhpcyBpbWFnZSB0aHVtYm5haWwgaXMgY2xpY2tlZCwgZG9cclxuICAgICAqIG5vdGhpbmcuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IHRodW1iID0gMDsgdGh1bWIgPCBpbWdUaHVtYnMubGVuZ3RoOyB0aHVtYisrKSB7XHJcbiAgICAgIGltZ1RodW1ic1t0aHVtYl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250cm9sc0ZvciA9IGltZ1RodW1ic1t0aHVtYl0uZ2V0QXR0cmlidXRlKFwiZm9yXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbSA9IDA7IGltIDwgZGlzcGxheUltYWdlcy5sZW5ndGg7IGltKyspIHtcclxuICAgICAgICAgIGlmIChkaXNwbGF5SW1hZ2VzW2ltXS5nZXRBdHRyaWJ1dGUoXCJpbWdcIikgPT09IGNvbnRyb2xzRm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5SW1hZ2VzW2ltXS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKSAhPSBcImluaXRcIikge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJoaWRlXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBvbl9jbGlja2luZ19kaXNwbGF5X2ltZyhcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGxheSBpbWFnZSwgaGlkZSB0aGUgaW1hZ2UgYW5kIHNob3cgdGhlXHJcbiAgICAgKiBuZXh0LlxyXG4gICAgICogQW5pbWF0aW9uIGlzIGhhbmRsZWQgYnkgdGhlIGNzcy4gRm9yIGFuaW1hdGlvbiB0byB3b3JrLCBvbiBjbGljayxcclxuICAgICAqIFwiaGlkZVwiIGlzIHNldCB0byB0aGUgYXR0cmlidXRlIHBvc2l0aW9uIG9uIHRoZSBjdXJyZW50IGltYWdlLCBhbmQgb25cclxuICAgICAqIHRoZSBuZXh0IGltYWdlLCB0aGUgXCJzaG93XCIgaXMgc2V0IHRvIHRoZSBwb3NpdGlvbiBhdHRyaWJ1dGUuXHJcbiAgICAgKi9cclxuICAgIGRpc3BsYXlJbWFnZXM6IEhUTUxDb2xsZWN0aW9uXHJcbiAgKSB7XHJcbiAgICBmb3IgKGxldCBpbSA9IDA7IGltIDwgZGlzcGxheUltYWdlcy5sZW5ndGg7IGltKyspIHtcclxuICAgICAgZGlzcGxheUltYWdlc1tpbV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcImhpZGVcIik7XHJcblxyXG4gICAgICAgIGlmIChpbSA9PT0gZGlzcGxheUltYWdlcy5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICBkaXNwbGF5SW1hZ2VzWzBdLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwic2hvd1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlzcGxheUltYWdlc1tpbSArIDFdLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDE2LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIEN1c3RvbSBkcm9wZG93biBtZW51XHJcbi8vXHJcbi8vIFJFTEFURUQgRklMRVM6XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIF9kcm9wZG93bi1tZW51LnNjc3NcclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gUHJvdmlkZXMgZnVuY3Rpb25zIGZvciBhIGN1c3RvbSBkcm9wZG93biBtZW51LlxyXG4vLyBUaGUgZnVuY3Rpb25zIHdpbGwgd29yayBmb3IgZHJvcGRvd24gbWVudXMgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XHJcbi8vXHJcbi8vIDxmb3JtPlxyXG4vLyAgIC4uLlxyXG4vLyAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIj5cclxuLy8gICAgICAgPHNwYW4+Q29sb3VyPC9zcGFuPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiPlxyXG4vLyAgICAgICA8bGFiZWwgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiIGZvcj1cImNvbG91ci1yZWRcIj5cclxuLy8gICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIlxyXG4vLyAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbi8vICAgICAgICAgbmFtZT1cImYtY29sb3VyXCJcclxuLy8gICAgICAgICBpZD1jb2xvdXItcmVkXHJcbi8vICAgICAgICAgdmFsdWU9XCJyZWRcIlxyXG4vLyAgICAgICA+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gICAuLi5cclxuLy8gPC9mb3JtPlxyXG5cclxuLy8gQ1NTIHNob3VsZCBiZSBzZXQgdXAgdG8gaGlkZSB0aGUgaW5wdXQgdGFncyBhbmQgcmVseSBvbiB0aGUgbGFiZWxzIHRvIHNlbGVjdFxyXG4vLyB0aGUgcmFkaW8gYnV0dG9uLlxyXG4vL1xyXG4vLyBGVU5DVElPTlM6XHJcbi8vIC0tLS0tLS0tLS1cclxuLy8gIC0gV2hlbiB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gbWVudSwgZXhwYW5kIHRoZSBsaXN0IG9mIG9wdGlvbnMuXHJcbi8vICAtIFdoZW4gdXNlciBwcmVzc2VzIGFuIG9wdGlvbiwgaGlnaGxpZ2h0IHRoYXQgb3B0aW9uLCB1cGRhdGUgdGhlXHJcbi8vICAgIGJ1dHRvbidzIGlubmVyIHRleHQgdG8gbWF0Y2ggdGhhdCBvZmYgdGhlIGJ1dHRvbiB0ZXh0LlxyXG4vLyAgLSBXaGVuIHVzZXIgY2xpY2tzIG91dHNpZGUsIGNsb3NlIGFsbCBtZW51cy5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERyb3Bkb3duTWVudSBDbGFzc1xyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25NZW51IHtcclxuICAvKipcclxuICAgKiBTZXRzIHVwIHRoZSBmdW5jdGlvbmFsaXR5IGZvciB0aGUgY3VzdG9tIGRyb3Bkb3duIG1lbnVzLlxyXG4gICAqIFRoZXNlIGluY2x1ZGU6XHJcbiAgICogIC0gVG9nZ2xlIG9wZW4vY2xvc2Ugb2YgdGhlIG1lbnUgb24gY2xpY2tpbmcgdGhlIGJ1dHRvblxyXG4gICAqICAtIENsb3NlIHRoZSBtZW51IG9uIGNsaWNraW5nIG91dHNpZGVcclxuICAgKiAgLSBPbiBzZWxlY3RpbmcgYW4gaXRlbTpcclxuICAgKiAgICAtIEhpZ2hsaWdodCB0aGF0IGl0ZW1cclxuICAgKiAgICAtIENoYW5nZSB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uIHRoZSB0ZXh0IG9mIHRoZSBvcHRpb24gc2VsZWN0ZWRcclxuICAgKlxyXG4gICAqIE5vdGU6IHRoaXMgY2xhc3Mgd2lsbCBub3QgaGFuZGxlIEFQSSBjYWxscy5cclxuICAgKi9cclxuXHJcbiAgZGRNZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICBcImRyb3Bkb3duLW1lbnVcIlxyXG4gICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIEFkZHMgZnVuY3Rpb24gdG8gY2xvc2UgYWxsIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBlbGVtZW50XHJcbiAgICB0aGlzLmNsb3NlX21lbnUoKTtcclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgZnVuY3Rpb25zIGZvciBhbGwgbWVudSBlbGVtZW50cy5cclxuICAgIGZvciAobGV0IG1lbnVJZCA9IDA7IG1lbnVJZCA8IHRoaXMuZGRNZW51cy5sZW5ndGg7IG1lbnVJZCsrKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRfbWVudSh0aGlzLmRkTWVudXNbbWVudUlkXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjbG9zZV9tZW51KCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgYWxsIG1lbnVzIHdoZW4gY2xpY2tlZCBvdXRzaWRlIG9uIGFub3RoZXIgZmlsdGVyIGJ1dHRvbi5cclxuICAgICAqIEFsc28gY2FycmllcyBmdW5jdGlvbiB0byBjbG9zZSB0aGUgbmF2LW1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgZmlsdGVyQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25MaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG9wdGlvbkxpc3RzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICBvcHRpb25MaXN0c1tpZHhdLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuYXZTdWJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCJcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlckJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRCdG4gPSBmaWx0ZXJCdG5zW2ldO1xyXG5cclxuICAgICAgc2VsZWN0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBDbG9zZSBuYXYgbWVudXNcclxuICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBuYXZTdWJNZW51cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgICBuYXZTdWJNZW51c1tpZHhdLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgYWxsIG90aGVyIGZpbHRlcnMgbGlzdHNcclxuICAgICAgICAvLyBFYWNoIGJ1dHRvbiBhbmQgdGhlaXIgY2hpbGQgZWxlbWVudHMgY29udGFpbiB0aGUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gXCJmaWx0ZXItZm9yXCIuXHJcbiAgICAgICAgLy8gTGlrZXdpc2UsIGVhY2ggZHJvcGRvd24gb3B0aW9uIGRpdiBjb250YWluIHRoZSBzYW1lIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFRoaXMgY2hlY2tzIGZvciB0aGUgYnV0dG9uIHByZXNzZWQsIGlmIGl0cyBcImZpbHRlci1mb3JcIiBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBtYXRjaGVzIHRoYXQgb2YgaXRzIGRyb3Bkb3duIG9wdGlvbnMuIGlmIG5vdCwgdGhlbiBjbG9zZS5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpbHRlckJ0bnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSBmaWx0ZXJCdG5zW2pdO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbS5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpICE9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQnRuLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBKdXN0IGluY2FzZSB0aGUgc3RydWN0dXJlIGNoYW5nZXMsIGFuZCB0aGUgbmV4dCBzaWJsaW5nIGlucyBub3QgdGhlIG9wdGlvbnMgbGlzdFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmchLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZz8uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBidWlsZF9tZW51KGRkTWVudTogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIGZ1bmN0aW9uYWxpdHkgb250byBlYWNoIGRyb3Bkb3duIG1lbnUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9wdGlvbnNCdG4gPSBkZE1lbnUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiXHJcbiAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RDb250YWluZXIgPSBkZE1lbnUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcHRpb25zTGlzdEl0ZW1zID0gb3B0aW9uc0xpc3RDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiXHJcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTExhYmVsRWxlbWVudD47XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgb24gdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGljaCB3aWxsIG9wZW4vY2xvc2UgdGhlIG9wdGlvbnNcclxuICAgIC8vIGxpc3QuXHJcbiAgICBvcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBvcHRpb25zTGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIHNldHVwIGZvciBlYWNoIG9wdGlvblxyXG4gICAgZm9yIChcclxuICAgICAgbGV0IG9wdGlvbkl0ZXIgPSAwO1xyXG4gICAgICBvcHRpb25JdGVyIDwgb3B0aW9uc0xpc3RJdGVtcy5sZW5ndGg7XHJcbiAgICAgIG9wdGlvbkl0ZXIrK1xyXG4gICAgKSB7XHJcbiAgICAgIGxldCBsaXN0SXRlbSA9IG9wdGlvbnNMaXN0SXRlbXNbb3B0aW9uSXRlcl07XHJcbiAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBoaWdobGlnaHQgZnJvbSBhbGwgbGlzdCBpdGVtcyBhbmQgcmVhcHBseSB0byB0aGUgc2VsZWN0ZWRcclxuICAgICAgICAvLyBsaXN0IGl0ZW0gb25seVxyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgb3B0aW9uU3ViSXRlciA9IDA7XHJcbiAgICAgICAgICBvcHRpb25TdWJJdGVyIDwgb3B0aW9uc0xpc3RJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICBvcHRpb25TdWJJdGVyKytcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG9wdGlvbnNMaXN0SXRlbXNbb3B0aW9uU3ViSXRlcl0uY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbC0tc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsLS1zZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSB0ZXh0IG9mIHRoZSBidXR0b24gdG8gdGhlIHRleHQgb2YgdGhlIHNlbGVjdGVkIGl0ZW1cclxuICAgICAgICBvcHRpb25zQnRuLmlubmVyVGV4dCA9IGxpc3RJdGVtLmlubmVyVGV4dDtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBoaWRkZW4gaW5wdXQgdmFsdWVzXHJcbiAgICAgICAgLy8gQ2xvc2UgdGhlIG1lbnVcclxuICAgICAgICBvcHRpb25zTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwMS8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gTmF2aWdhdGlvbiBiYXIuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gMS4gQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSBuYXZpZ2F0aW9uIHN1Yi1tZW51cyBhbmQgY29udHJvbHMgaG93IGFuZCB3aGVuXHJcbi8vICAgIGl0IGV4cGFuZHMgYW5kIGNsb3Nlcy5cclxuLy8gMi4gQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSBiYXNrZXQgYW5kIHNvIHNvIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlXHJcbi8vICAgIGJhc2tldC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZnVuY3Rpb25zIGZvciB0aGUgbmF2aWdhdGlvbi5cclxuICAgKiBUaGVzZSBpbmNsdWRlOlxyXG4gICAqICAtIENsb3NpbmcgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlLlxyXG4gICAqICAtIE9wZW5pbmcvQ2xvc2luZyBtZW51cyBvbiBjbGlja1xyXG4gICAqL1xyXG4gIG1lbnVCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fb3B0aW9uX19idG5cIik7XHJcbiAgbmF2U3ViTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCIpO1xyXG4gIHRvZ2dsZVNob3dOYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fdG9nZ2xlX19idG5cIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIEFkZHMgZnVuY3Rpb24gdG8gY2xvc2UgYWxsIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBlbGVtZW50XHJcbiAgICB0aGlzLmNsb3NlX21lbnUoKTtcclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgZnVuY3Rpb25zIGZvciBhbGwgbWVudSBlbGVtZW50cy5cclxuICAgIGZvciAoY29uc3QgbWVudUJ0biBvZiB0aGlzLm1lbnVCdG5zIGFzIGFueSkge1xyXG4gICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnN1Yk1lbnVDdHJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgcmVzcG9uc2l2ZSBmdW5jdGlvbnMgZm9yIHRoZSB0b2dnbGUgYnV0dG9ucy5cclxuICAgIHRoaXMubmF2X3RvZ2dsZV9idG4oKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsb3NlX21lbnUoKSB7XHJcbiAgICAvKipcclxuICAgICAqIGNsb3NlcyBhbGwgbWVudXMgd2hlbiBjbGlja2VkIG91dHNpZGUgcHIgYW5vdGhlciBuYXYgbWVudS5cclxuICAgICAqIEFsc28gd2lsbCBjbG9zZSBhbGwgZmlsdGVyIG1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQ2xvc2UgYWxsIG5hdi1tZW51cyBvbiBjbGljayBvdXRzaWRlXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCB0aGlzLm5hdlN1Yk1lbnVzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICB0aGlzLm5hdlN1Yk1lbnVzW2lkeF0uY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVudUJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbWVudUJ0biA9IHRoaXMubWVudUJ0bnNbaV07XHJcblxyXG4gICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2xvc2UgYWxsIGRyb3Bkb3duLW1lbnVzXHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb25MaXN0IG9mIG9wdGlvbkxpc3RzIGFzIGFueSkge1xyXG4gICAgICAgICAgb3B0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENsb3NlIG90aGVyIG5hdmlnYXRpb24gbWVudXNcclxuICAgICAgICAvLyBFYWNoIGJ1dHRvbiBhbmQgdGhlaXIgY2hpbGQgZWxlbWVudHMgd2lsbCBjb250YWluIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBcImZpbHRlci1mb3JcIi5cclxuICAgICAgICAvLyBMaWtld2lzZSwgZWFjaCBkcm9wZG93biBtZW51IGNvbnRhaW4gdGhlIHNhbWUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gVGhpcyBjaGVja3MgZm9yIHRoZSBidXR0b24gcHJlc3NlZCwgaWYgaXRzIFwiZmlsdGVyLWZvclwiIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIG1hdGNoZXMgdGhhdCBvZiBpdHMgZHJvcGRvd24gb3B0aW9ucy4gaWYgbm90LCB0aGVuIGNsb3NlLlxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tZW51QnRucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IHRoaXMubWVudUJ0bnNbal07XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikgIT1cclxuICAgICAgICAgICAgbWVudUJ0bi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN1Yk1lbnVDdHJsKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdpbGwgaGFuZGxlIGNsaWNrIGV2ZW50cyBvbiB0aGUgbmF2aWdhdGlvbiBmb3IgZXhwYW5kaW5nXHJcbiAgICAgKiBhbmQgY29sbGFwc2luZyB0aGUgc3ViLW1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vIEhhbmRsZSBjbGljayBldmVudHNcclxuICAgIHRhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB0YXJnZXRDbGFzc2VzID0gdGFyZ2V0LmNsYXNzTGlzdDtcclxuICAgIGxldCBzdWJNZW51OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBpZiAodGFyZ2V0Q2xhc3Nlcy5jb250YWlucyhcIm5hdi1zdWItcHJvZHVjdHNcIikpIHtcclxuICAgICAgc3ViTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMubmF2LXN1Yi1wcm9kdWN0c1wiXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldENsYXNzZXMuY29udGFpbnMoXCJuYXYtc3ViLXJvb21zXCIpKSB7XHJcbiAgICAgIHN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLm5hdi1zdWItcm9vbXNcIlxyXG4gICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgXCJOYXZpZ2F0aW9uIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGV4cGFuZGVkID0gc3ViTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGV4cGFuZGVkKSB7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiKTtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCIpO1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG5hdl90b2dnbGVfYnRuKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBuYXZpZ2F0aW9uIHRvZ2dsZSBidXR0b24gLSBhIHJlc3BvbnNpdmVcclxuICAgICAqIGZlYXR1cmUgdmlld2FibGUgd2hlbiB0aGUgc2NyZWVuIHdpZHRoIGlzIHNtYWxsIGVub3VnaC5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0ID0gW1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2X19vcHRpb25cIiksXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9fYWNjb3VudC1iYXNrZXQnKVxyXG4gICAgXTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZVNob3dOYXZCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9wdGlvbnNMaXN0W2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBvcHRpb25zTGlzdFtpXVtqXS5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LW9wdGlvbi0tc2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDE2LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVSUE9TRVxyXG4vLyAtLS0tLS0tXHJcbi8vIEVuYWJsZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHF1YW50aXR5IGNvbXBvbmVudCwgdGh1cyBlbmFibGluZyArLy1cclxuLy8gYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW4gdGhlIGlucHV0IGJveC5cclxuLy9cclxuLy8gUkVMQVRFRCBGSUxFU1xyXG4vLyAtLS0tLS0tLS0tLS0tXHJcbi8vIF9xdWFudGl0eS5zY3NzXHJcbi8vXHJcbi8vIEhUTUwgRk9STUFUXHJcbi8vIC0tLS0tLS0tLS0tXHJcbi8vIDxkaXYgY2xhc3M9XCJjLXF1YW50aXR5XCI+XHJcbi8vICAgPGJ1dHRvbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0blwiIGNvbnRyb2w9XCJxdWFudGl0eS1kb3duXCI+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiPiYjNDU7PC9zcGFuPlxyXG4vLyAgIDwvYnV0dG9uPlxyXG4vLyAgIDxpbnB1dCBjbGFzcz1cImMtcXVhbnRpdHlfX2lucHV0XCIgdHlwZT1cIm51bWJlclwiLz5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LXVwXCI+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiPiYjNDU7PC9zcGFuPlxyXG4vLyAgIDwvYnV0dG9uPlxyXG4vLyA8L2Rpdj5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIEltcG9ydHNcclxuaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFF1YW50aXR5Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIHRoZSBxdWFudGl0eSBjb21wb25lbnQgdGh1cyBlbmFibGluZyB0aGUgKy8tXHJcbiAgICogYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW5zaWRlIHRoZSBpbnB1dCBib3guXHJcbiAgICovXHJcblxyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJjLXF1YW50aXR5XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5fc2V0X2VsZW1lbnRzKHRoaXMuY29udGFpbmVyc1tjXSk7XHJcbiAgICAgIGNvbnN0IGJ0bkRvd24gPSBlbGVtZW50c1swXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgY29uc3QgYnRuVXAgPSBlbGVtZW50c1sxXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgY29uc3QgaW5wdXRCb3ggPSBlbGVtZW50c1syXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBOdW1iZXIoaW5wdXRCb3guZ2V0QXR0cmlidXRlKFwibWluXCIpKTtcclxuICAgICAgY29uc3QgbWF4VmFsdWUgPSBOdW1iZXIoaW5wdXRCb3guZ2V0QXR0cmlidXRlKFwibWF4XCIpKTtcclxuXHJcbiAgICAgIHRoaXMuX2J1aWxkX21pbnVzX2J1dHRvbihidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX3BsdXNfYnV0dG9uKGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgICAgdGhpcy5fYnVpbGRfaW5wdXRfYm94KGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3NldF9lbGVtZW50cyhjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgY29udGFpbmVyLCB3aWxsIHJldHVybiB0aGUgYnV0dG9ucyBhbmQgaW5wdXQgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGJ0bkRvd24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvbltjb250cm9sPVwicXVhbnRpdHktZG93blwiXSdcclxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBidG5VcCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS11cFwiXSdcclxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dEJveCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcImlucHV0LmMtcXVhbnRpdHlfX2lucHV0XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gW2J0bkRvd24sIGJ0blVwLCBpbnB1dEJveF07XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF9taW51c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIG1pbnVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCByZWR1Y2VcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtaW5pbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIHBsdXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBsZXNzIHRoYW4gdGhlIG1heFZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoYnRuRG93bi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpIC0gMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpIDwgbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPT09IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX3BsdXNfYnV0dG9uKFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uIGNsaWNraW5nIHRoZSBwbHVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCBpbmNyZWFzZWRcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtYXhpbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIG1pbnVzXHJcbiAgICAgKiBidXR0b24gaWYgaXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBtaW5WYWx1ZS5cclxuICAgICAqL1xyXG5cclxuICAgIGJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChidG5VcC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpICsgMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpID4gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA9PT0gbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX2lucHV0X2JveChcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmNlIGEgbmV3IHZhbHVlIGhhcyBiZWVuIGVudGVyZWQgaW50byB0aGUgaW5wdXQgYm94LFxyXG4gICAgICogZGlzYWJsZS9yZS1lbmFibGUgdGhlIHBsdXMgYW5kIG1pbnVzIGJ1dHRvbnMgaW4gYWNjb3JkYW5jZSB3aXRoIHdoZXRoZXJcclxuICAgICAqIHRoZSB2YWx1ZSBpcyBlcXVhbCB0byB0aGUgbWluL21heCB2YWx1ZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGlucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0Qm94LnZhbHVlKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC4gSWYgbm90LCB1cGRhdGUgYXR0cmlidXRlcyB0aGUgaGlnaGxpZ2h0XHJcbiAgICAgIC8vIHRoaXMgdG8gdGhlIHVzZXIgYW5kIGRpc2FibGUgYnV0dG9ucy5cclxuICAgICAgaWYgKFZhbGlkYXRpb24uY2hlY2tfaWZfcG9zaXRpdmVfaW50KHZhbHVlKSkge1xyXG4gICAgICAgIC8vIEluY2FzZSB0aGUgYnV0dG9ucyB3ZXJlIHByZXZpb3VzbHkgZGlzYWJsZWQsIHJlc2V0IGJ5IHJlLWVuYWJsaW5nXHJcbiAgICAgICAgLy8gZXZlcnl0aGluZy5cclxuICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGlucHV0Qm94LnBhcmVudEVsZW1lbnQhLnJlbW92ZUF0dHJpYnV0ZSgnaW52YWxpZCcpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSBtaW4gdmFsdWVcclxuICAgICAgICBpZiAodmFsdWUgPD0gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnRuRG93bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgYnRuVXAncyBtYXggdmFsdWVcclxuICAgICAgICBpZiAodmFsdWUgPj0gbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdmFsdWUgaXMgZWl0aGVyIDwgMCBvciBhIGZsb2F0LlxyXG4gICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGlucHV0Qm94LnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZSgnaW52YWxpZCcsICd0cnVlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA4LzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gTWFuYWdlcyB0aGUgc2VhcmNoIGZpbHRlcnMgb24gdGhlIHBhZ2UuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gUmVzcG9uc2libGUgZm9yIGNhbGxpbmcgdGhlIHNlYXJjaCBBUEkgd2hpY2ggd2lsbCBmaWx0ZXIgcmVzdWx0IGJhc2VkIG9uXHJcbi8vIHdoYXQgdGhlIHVzZXIgaGFzIHNlbGVjdGVkIHVzaW5nIHRoZSBmaWx0ZXJzLlxyXG4vL1xyXG4vLyBXaWxsIHVzZSB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggYmFyJ3MgZm9ybSB0byBpbnRlcmFjdCB3aXRoIHRoZSBBUEkuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsdGVycyB7XHJcbiAgLyoqXHJcbiAgICogV2lsbCBleHBhbmQgdGhlIG5hdmlnYXRpb24gc2VhcmNoIGJhciBhbmQgdGhlIGZvcm0gZWxlbWVudCB0byBhbGxvdyBpdCB0b1xyXG4gICAqIHRha2UgaW4gdGhlIGZpbHRlciBvcHRpb25zIGFzIHBhcnQgb2YgdGhlIEdFVCByZXF1ZXN0IHdoZW5ldmVyIGEgdXNlclxyXG4gICAqIGluaXRpYXRlcyBhIHNlYXJjaC5cclxuICAgKlxyXG4gICAqIENhbGxzIHRoZSBBUEkgdG8gZmlsdGVyIHRoZSByZXN1bHRzLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3IgZG9lcyBub3QgcmVxdWlyZSBhbnkgYXJndW1lbnRzIGFuZCB3aWxsIGluc3RlYWQgdXNlXHJcbiAgICAgKiBlbGVtZW50cyBmcm9tIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2V4cGFuZF9uYXZfc2VhcmNoKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfZXhwYW5kX25hdl9zZWFyY2goKSB7XHJcbiAgICAvKipcclxuICAgICAqIEV4cGFuZHMgb24gdGhlIG5hdmlnYXRpb24gc2VhcmNoIGVsZW1lbnRzIHNvIHRoYXQgd2hlbiBzZW5kaW5nIGEgR0VUXHJcbiAgICAgKiByZXF1ZXN0LCBmaWx0ZXJzIHdpbCBiZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBuYXZGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJuYXZfX3NlYXJjaFwiXHJcbiAgICApWzBdIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuXHJcbiAgICAvLyBBZGQgaGlkZGVuIGlucHV0cyB0byBjb250YWluIHRoZSB2YWx1ZXMgb24gdGhlIGZpbHRlcnMuXHJcbiAgICBjb25zdCBpbnB1dE5hbWVzID0gW1wiZi1taW5QcmljZVwiLCBcImYtbWF4UHJpY2VcIiwgXCJmLWNhdGVnb3J5XCIsIFwiZi1jb2xvdXJcIl07XHJcbiAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBvZiBpbnB1dE5hbWVzKSB7XHJcbiAgICAgIGNvbnN0IGhpZGRlbklucHV0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgXCJJTlBVVFwiXHJcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgIGhpZGRlbklucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XHJcbiAgICAgIGhpZGRlbklucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dE5hbWUpO1xyXG4gICAgICBuYXZGb3JtLmFwcGVuZENoaWxkKGhpZGRlbklucHV0Tm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBoaWRkZW4gaW5wdXRzIHdoZW4gYSBmaWx0ZXIgaXMgc2VsZWN0ZWRcclxuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAgIGZvciAobGV0IG9wdCA9IDA7IG9wdCA8IGRyb3Bkb3duT3B0aW9ucy5sZW5ndGg7IG9wdCsrKSB7XHJcbiAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gZHJvcGRvd25PcHRpb25zW29wdF07XHJcbiAgICAgIGxldCBoaWRkZW5JbnB1dDogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHN3aXRjaCAoZHJvcGRvd25PcHRpb24uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKSkge1xyXG4gICAgICAgIGNhc2UgXCJtaW4tcHJpY2VcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1taW5QcmljZVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibWF4LXByaWNlXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImYtbWF4UHJpY2VcIlxyXG4gICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNhdGVnb3J5XCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImYtY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNvbG91clwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImYtY29sb3VyXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChoaWRkZW5JbnB1dCkge1xyXG4gICAgICAgIGRyb3Bkb3duT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGhpZGRlbklucHV0IS52YWx1ZSA9IGRyb3Bkb3duT3B0aW9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmchLnRleHRDb250ZW50ITtcclxuXHJcbiAgICAgICAgICAvLyBDYWxscyB0aGUgc2VhcmNoIHJlc3VsdCBBUEkgYW5kIHRoZW4gZmlsdGVyIHRoZSByZXN1bHRzLlxyXG4gICAgICAgICAgY29uc3QgQVBJUGF0aCA9IHRoaXMuX0FQSV9wYXRoKCk7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIEFQSVBhdGgpO1xyXG4gICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCkgYXMgW107XHJcbiAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyX3Jlc3VsdHMocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfQVBJX3BhdGgoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgQVBJIGhyZWYgcGF0aCB3aGVyZSB0aGUgcmVxdWVzdCB3aWxsIGJlIHNlbnQuXHJcbiAgICAgKiBUaGlzIGltcGxlbWVudHMgdGhlIGZpbHRlcnMgd2l0aGluIHRoZSBhY3R1YWwgVVJMLlxyXG4gICAgICovXHJcbiAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCIvc2VhcmNoL1wiLCBcIi9zZWFyY2gtcmVzdWx0cy9cIik7XHJcblxyXG4gICAgY29uc3QgaGlkZGVuSW5NaW5QcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImYtbWluUHJpY2VcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaGlkZGVuSW5NYXhQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImYtbWF4UHJpY2VcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaGlkZGVuSW5DYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImYtY2F0ZWdvcnlcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgaGlkZGVuSW5Db2xvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLWNvbG91clwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGhpZGRlbkluTWluUHJpY2UudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLW1pblByaWNlPVwiICsgaGlkZGVuSW5NaW5QcmljZS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtbWluUHJpY2U9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1taW5QcmljZT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5Jbk1heFByaWNlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1tYXhQcmljZT1cIiArIGhpZGRlbkluTWF4UHJpY2UudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLW1heFByaWNlPS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtbWF4UHJpY2U9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5DYXRlZ29yeS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtY2F0ZWdvcnk9XCIgKyBoaWRkZW5JbkNhdGVnb3J5LnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1jYXRlZ29yeT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLWNhdGVnb3J5PS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluQ29sb3VyLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1jb2xvdXI9XCIgKyBoaWRkZW5JbkNvbG91ci52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtY29sb3VyPS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtY29sb3VyPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhyZWY7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfZmlsdGVyX3Jlc3VsdHMoQVBJUmVzdWx0czogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogRmlsdGVycyB0aGUgcmVzdWx0cyBvbiB0aGUgc2VhcmNoIHBhZ2UgaW4gYWNjb3JkYW5jZSB0byB0aGUgZGF0YVxyXG4gICAgICogcmV0cmlldmVkIGZyb20gdGhlIHNlYXJjaCBBUEkuXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0cycpWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3Qgb3JpZ1Jlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzX19yZXN1bHQnKTtcclxuXHJcbiAgICBsZXQgdmFsaWRQcm9kdWN0cyA9IFtdO1xyXG4gICAgcmVzdWx0OiBKU09OO1xyXG4gICAgZm9yIChjb25zdCByZXN1bHQgaW4gQVBJUmVzdWx0cykge1xyXG4gICAgICB2YWxpZFByb2R1Y3RzLnB1c2goQVBJUmVzdWx0c1tyZXN1bHRdLnByb2R1Y3RfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IHJJRCA9IDA7IHJJRDxvcmlnUmVzdWx0cy5sZW5ndGg7IHJJRCsrKSB7XHJcbiAgICAgIGlmICh2YWxpZFByb2R1Y3RzLmluY2x1ZGVzKE51bWJlcihvcmlnUmVzdWx0c1tySURdLmdldEF0dHJpYnV0ZSgnSUQnKSEpKSkge1xyXG4gICAgICAgIG9yaWdSZXN1bHRzW3JJRF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9yaWdSZXN1bHRzW3JJRF0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyOC8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29udGFpbnMgaW1wb3J0cyBvZiBhbGwgdGhlIG1haW4gY2xhc3Nlcy5cclxuLy8gQmVoYXZlcyBhcyB0aGUgbWFpbiBodWIgZm9yIHRoZSBqcyBidW5kbGUuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wZG93bi1tZW51XCI7XHJcbmltcG9ydCB7IFF1YW50aXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9xdWFudGl0eVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hGaWx0ZXJzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hfZmlsdGVyc1wiO1xyXG5pbXBvcnQgeyBFeHRlbmRQcm9kdWN0UGFnZSB9IGZyb20gXCIuL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWxJbWdzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJvdXNlbC1pbWdzXCI7XHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcbmltcG9ydCB7IEJhc2tldFBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9iYXNrZXQvYmFza2V0XCI7XHJcblxyXG4vLyBCdWlsZCB0aGUgbmF2aWdhdGlvblxyXG5uZXcgTmF2aWdhdGlvbigpO1xyXG5cclxuLy8gVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgYmFza2V0XHJcbm5ldyBCYXNrZXRTdGF0ZSgpO1xyXG5cclxuLy8gQnVpbGQgdGhlIGRyb3Bkb3duIG1lbnVcclxubmV3IERyb3Bkb3duTWVudSgpO1xyXG5cclxuLy8gQnVpbGQgdGhlIHNlYXJjaCBmaWx0ZXJzXHJcbm5ldyBTZWFyY2hGaWx0ZXJzKCk7XHJcblxyXG5pZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc2VhcmNoKC9cXC9wcm9kdWN0c1xcL1swLTldezEsfS8pICE9IC0xKSB7XHJcbiAgbmV3IEV4dGVuZFByb2R1Y3RQYWdlKCk7XHJcbiAgbmV3IFF1YW50aXR5Q29tcG9uZW50KCk7XHJcbiAgbmV3IENhcm91c2VsSW1ncygpO1xyXG59XHJcblxyXG5pZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIvYmFza2V0L1wiKSkge1xyXG4gIG5ldyBCYXNrZXRQYWdlKCk7XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwNS8wMS8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIFRoZSBiYXNrZXQgcGFnZS5cclxuLy9cclxuLy8gRlVOQ1RJT05BTElUWVxyXG4vLyAtIENhbGxzIHRoZSBiYXNrZXQtaW5mby1BUEkgd2hlcmUgdXNpbmcgdGhlIGxvY2FsIHN0b3JhZ2UgaXQgaXMgYWJsZSB0byBzZW5kXHJcbi8vICAgYSBHRVQgcmVxdWVzdCB0byB0ZWggQVBJIHNpdGUgdXNpbmcgdGhlIHByaW1hcnkga2V5cyBvZiB0aGUgaXRlbXMgaW4gdGhlXHJcbi8vICAgYmFza2V0LlxyXG4vLyAtIEJ1aWxkcyBwYXJ0IG9mIHRoZSBET00gd2hpY2ggd2lsbCBkaXNwbGF5IGluZm9ybWF0aW9uIHJlZ2FyZGluZyB3aGF0IGlzIGluXHJcbi8vICAgYmFza2V0LlxyXG4vLyAtIFNldHMga2V5IGJpbmRlcnMgb24gdGhlIHF1YW50aXR5IG9wdGlvbiBhbmQgXCJ4XCIgb3B0aW9uIHNvIHRoYXQgaXQgdXBkYXRlc1xyXG4vLyAgIHRoZSBiYXNrZXQuXHJcbi8vIC0gVXBkYXRlcyB0b3RhbHMgc2VjdGlvbiBvbiBsb2FkIGlmIHRoZXJlIGlzIHNvbWV0aGluZyBpbiB0aGUgYmFza2V0LlxyXG4vLyAtIFNldCBrZXkgYmluZGVycyBzbyB0aGF0IHdoZW5ldmVyIHRoZXJlIGlzIGEgY2hhbmdlIHRvIHRoZSBiYXNrZXQgaXRlbXMsXHJcbi8vICAgdGhlIHRvdGFscyB3aWxsIGFsc28gdXBkYXRlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gSU1QT1JUU1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IE51bWJlckZvcm1hdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbnVtYmVyX2Zvcm1hdFwiO1xyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9iYXNrZXQtaXRlbXNcIjtcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWFudGl0eVwiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIEJhc2tldFBhZ2UgZXh0ZW5kcyBCYXNrZXRTdGF0ZSB7XHJcbiAgLyoqXHJcbiAgICogV2lsbCBidWlsZCBlbGVtZW50cyBvbnRvIGJhc2tldCBwYWdlIHVzaW5nIGFuIEFQSSB0byByZXRyaWV2ZVxyXG4gICAqIGluZm9ybWF0aW9uIG9uIHByb2R1Y3RzIGN1cnJlbnRseSBpbiB0aGUgdXNlcidzIGJhc2tldCAoaW5mb3JtYXRpb25cclxuICAgKiBzdG9yZWQgaW4gbG9jYWwgc3RvcmFnZSlcclxuICAgKi9cclxuXHJcbiAgLy8gVGhlIG1haW4gbG9jYXRpb24gYXMgdG8gd2hlcmUgZWFjaCBwcm9kdWN0IHdpbGwgYmUgaW5zZXJ0ZWQgZnJvbSB0aGVcclxuICAvLyB1c2VyJ3MgYmFza2V0LlxyXG4gIHN1bW1hcnlJdGVtc1BhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJiYXNrZXQtc3VtbWFyeS1kYXRhXCJcclxuICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBiYXNrZXRJdGVtczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIHByb2Nlc3MgaW4gd2hpY2ggdGhlIGJhc2tldCBwYWdlIERPTSBpcyBidWlsZC5cclxuICAgICAqL1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGlmICh0aGlzLml0ZW1zICE9IG51bGwgJiYgdGhpcy5pdGVtcyAhPSBcInt9XCIpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gSlNPTi5wYXJzZSh0aGlzLml0ZW1zKSkge1xyXG4gICAgICAgIHRoaXMuYmFza2V0SXRlbXMucHVzaChrZXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBiYXNrZXRJdGVtc1N0ciA9IHRoaXMuYmFza2V0SXRlbXMuam9pbihcIixcIik7XHJcblxyXG4gICAgICAvLyBDYWxsIEFQSVxyXG4gICAgICBjb25zdCBBUElQYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcclxuICAgICAgICAvYmFza2V0LiovLFxyXG4gICAgICAgIFwiYmFza2V0LWluZm8tQVBJLz9wa3M9XCIgKyBiYXNrZXRJdGVtc1N0clxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCBBUElSZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgaWYgKEFQSVJlc3BvbnNlLnByb2R1Y3RzSW5mbykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkX2Jhc2tldF9zdW1tYXJ5KEFQSVJlc3BvbnNlLnByb2R1Y3RzSW5mbyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX2Jhc2tldF9zdW1tYXJ5KGFsbFByb2R1Y3RzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgZWFjaCBlbGVtZW50IGludG8gdGhlIERPTSBpbnNpZGUgdGhlIHRhcmdldCBwYXJlbnQgY29udGFpbmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBwcm9kdWN0UGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL2Jhc2tldC4qLywgXCJwcm9kdWN0cy9cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhbGxQcm9kdWN0c1tpXTtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBOdW1iZXIoSlNPTi5wYXJzZSh0aGlzLml0ZW1zKVtwcm9kdWN0LnByb2R1Y3RJZF0pO1xyXG5cclxuICAgICAgLy8gRGl2IHRvIGNvbnRhaW4gYWxsIHByb2R1Y3QgZWxlbWVudHMsIHdoaWNoIHdpbGwgdGhlbiBiZSBhcHBlbmRlZFxyXG4gICAgICAvLyBpbnRvIHRoZSBwYXJlbnQgZWxlbWVudC5cclxuICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFibGVfX3Jvd1wiO1xyXG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwicHJvZHVjdC1pZFwiLCBwcm9kdWN0LnByb2R1Y3RJZCk7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IEltYWdlIEVtYmVkZGVkIGluIExpbmsgRWxlbWVudFxyXG4gICAgICBjb25zdCBpbWdBVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIGltZ0FUYWcuY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGQgdGFibGVfX2ZpZWxkXCI7XHJcbiAgICAgIGltZ0FUYWcuaHJlZiA9IHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIGltZ0FUYWcuc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LWltYWdlXCIpO1xyXG4gICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaW1nRWxlbS5zcmMgPSBwcm9kdWN0LmltYWdlO1xyXG4gICAgICBpbWdFbGVtLmFsdCA9IFwiSW1hZ2Ugb2YgXCIgKyBwcm9kdWN0LnByb2R1Y3ROYW1lO1xyXG4gICAgICBpbWdFbGVtLmNsYXNzTmFtZSA9IFwidGFibGVfX2ZpZWxkIHRhYmxlX19maWVsZC0taW1nXCI7XHJcbiAgICAgIGltZ0FUYWcuYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IE5hbWVcclxuICAgICAgY29uc3QgbmFtZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgbmFtZUVsZW0uY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGRcIjtcclxuICAgICAgbmFtZUVsZW0uaHJlZiA9IHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIG5hbWVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1uYW1lXCIpO1xyXG4gICAgICBuYW1lRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QucHJvZHVjdE5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IFN0b3JlXHJcbiAgICAgIGNvbnN0IHN0b3JlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBzdG9yZUVsZW0uY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGRcIjtcclxuICAgICAgc3RvcmVFbGVtLmhyZWYgPSBcIiNcIjtcclxuICAgICAgc3RvcmVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1zdG9yZVwiKTtcclxuICAgICAgc3RvcmVFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5zdG9yZU5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IENvbG91clxyXG4gICAgICBjb25zdCBjb2xvdXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgIGNvbG91ckVsZW0uY2xhc3NOYW1lID0gXCJ0YWJsZV9fZmllbGRcIjtcclxuICAgICAgY29sb3VyRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtY29sb3VyXCIpO1xyXG4gICAgICBjb2xvdXJFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5jb2xvdXJOYW1lO1xyXG5cclxuICAgICAgLy8gUXVhbnRpdHlcclxuICAgICAgLy8gTk9URTogVGhlIEhUTUwgZm9ybWF0IG11c3QgZm9sbG93IHRoZSBzdHJ1Y3R1cmUgZGVmaW5lZCBpbiB0aGUgcXVhbnRpdHlcclxuICAgICAgLy8gY29tcG9uZW50LlxyXG4gICAgICBjb25zdCBxdWFudGl0eUNvbnRhaW5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5IHRhYmxlX19maWVsZFwiO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uaWQgPSBcInByb2R1Y3QtXCIgKyBwcm9kdWN0LnByb2R1Y3RJZDtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicXVhbnRpdHlcIik7XHJcblxyXG4gICAgICBjb25zdCBxdWFudGl0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19pbnB1dFwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0Lm1pbiA9IFwiMFwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0LnN0ZXAgPSBcIjFcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5tYXggPSBwcm9kdWN0LmludmVudG9yeTtcclxuICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IGl0ZW1zLnRvU3RyaW5nKCk7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBhIHBvc2l0aXZlIGludGVnZXIgdGhlbiB0aGUgY2VydGFpbiB1cGRhdGVzXHJcbiAgICAgICAgLy8gd2lsbCB0YWtlIHBsYWNlLlxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1YW50aXR5SW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGlmIChWYWxpZGF0aW9uLmNoZWNrX2lmX3Bvc2l0aXZlX2ludChOdW1iZXIocXVhbnRpdHlJbnB1dC52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBncmVhdGVyIHRoYW4gdGhlIG1heCwgdGhlbiBzZXQgaXQgdG8gdGhlIG1heC5cclxuICAgICAgICAgIGxldCB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgIGlmICh2YWx1ZSA+IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCkpIHtcclxuICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IHF1YW50aXR5SW5wdXQubWF4O1xyXG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBsb2NhbCBzdG9yYWdlICh1c2VyJ3MgYmFza2V0KVxyXG4gICAgICAgICAgdGhpcy51cGRhdGVfc2luZ2xlX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHByaWNlXHJcbiAgICAgICAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSAodmFsdWUgKiBwcm9kdWN0LnByaWNlKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYmFza2V0IHRvdGFsc1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIG1pbnVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIG1pbnVzQnRuLnNldEF0dHJpYnV0ZShcImNvbnRyb2xcIiwgXCJxdWFudGl0eS1kb3duXCIpO1xyXG4gICAgICBtaW51c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX2FuX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHByb2R1Y3QucHJpY2UsIHByaWNlU3Bhbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBwbHVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIHBsdXNCdG4uc2V0QXR0cmlidXRlKFwiY29udHJvbFwiLCBcInF1YW50aXR5LXVwXCIpO1xyXG4gICAgICBwbHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5hZGRfYW5faXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgcHJvZHVjdC5wcmljZSwgcHJpY2VTcGFuKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbWludXNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIG1pbnVzQnRuU3Bhbi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiO1xyXG4gICAgICBtaW51c0J0blNwYW4udGV4dENvbnRlbnQgPSBcIi1cIjtcclxuXHJcbiAgICAgIGNvbnN0IHBsdXNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIHBsdXNCdG5TcGFuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI7XHJcbiAgICAgIHBsdXNCdG5TcGFuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcblxyXG4gICAgICBtaW51c0J0bi5hcHBlbmRDaGlsZChtaW51c0J0blNwYW4pO1xyXG4gICAgICBwbHVzQnRuLmFwcGVuZENoaWxkKHBsdXNCdG5TcGFuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKG1pbnVzQnRuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKHF1YW50aXR5SW5wdXQpO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQocGx1c0J0bik7XHJcblxyXG4gICAgICAvLyBQcmljZVxyXG4gICAgICBjb25zdCBwcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgcHJpY2VFbGVtLmNsYXNzTmFtZSA9IFwidGFibGVfX2ZpZWxkXCI7XHJcbiAgICAgIHByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtcHJpY2UtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgY29uc3QgcG91bmRJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHBvdW5kSS50ZXh0Q29udGVudCA9IFwiwqNcIjtcclxuICAgICAgcG91bmRJLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS1jdXJyZW5jeVwiKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHBvdW5kSSk7XHJcblxyXG4gICAgICBjb25zdCBwcmljZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgcHJpY2VTcGFuLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS12YWx1ZVwiKTtcclxuICAgICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgICAgTnVtYmVyKHByb2R1Y3QucHJpY2UpICogaXRlbXNcclxuICAgICAgKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHByaWNlU3Bhbik7XHJcblxyXG4gICAgICAvLyBSZW1vdmUgSXRlbSBCdXR0b25cclxuICAgICAgY29uc3QgcmVtb3ZlSXRlbVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uY2xhc3NOYW1lID0gXCJ0YWJsZV9faWNvblwiO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInJlbW92ZS1pdGVtXCIpO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vIE9uIHJlbW92YWwsIHVwZGF0ZSB0aGUgRE9NIGFuZCB0aGUgYmFza2V0L2xvY2FsIHN0b3JhZ2UgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVfd2hvbGVfaXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZW1vdmVJdGVtSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJXCIpO1xyXG4gICAgICByZW1vdmVJdGVtSS5jbGFzc05hbWUgPSBcImZhIGZhLXRpbWVzXCI7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLmFwcGVuZENoaWxkKHJlbW92ZUl0ZW1JKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHJlbW92ZUl0ZW1TcGFuKTtcclxuXHJcbiAgICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byB0YXJnZXQgZWxlbWVudC5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0FUYWcpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcmVFbGVtKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG91ckVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocXVhbnRpdHlDb250YWluZXJFbGVtKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlRWxlbSk7XHJcbiAgICAgIHRoaXMuc3VtbWFyeUl0ZW1zUGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICAvLyBBcHBseSB0aGUgSmF2YVNjcmlwdCB0byBlYWNoIHF1YW50aXR5IGNvbXBvbmVudC5cclxuICAgIG5ldyBRdWFudGl0eUNvbXBvbmVudCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSB1cGRhdGVfYmFza2V0X3RvdGFscygpIHtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgdG90YWxzIHNlY3Rpb24gaW4gdGhlIGJhc2tldCBwYWdlLlxyXG4gICAgICogVGhlIEhUTUwgZGVmYXVsdCBiZWhhdmlvciBpcyB0byBzZXQgdGhlIGxvYWRzIHRoZSBlbGVtZW50cyBhbmQgc2V0IHRoZVxyXG4gICAgICogdmFsdWVzIHRvIMKjMC4wMCBmb3IgZWFjaCBlbGVtZW50LlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHVwZGF0ZSB0aGUgdG90YWxzLlxyXG4gICAgICovXHJcbiAgICAvLyBCYXNrZXQgRWxlbWVudHMgaW4gdGhlIERPTVxyXG4gICAgY29uc3Qgc3VidG90YWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtc3VidG90YWxcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB2YXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtdmF0XCIpIVxyXG4gICAgICAuY2hpbGRyZW5bMV0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgY29uc3QgdG90YWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtdG90YWxcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gICAgLy8gSW5pdGlhbCBWYWx1ZVxyXG4gICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG5cclxuICAgIC8vIFJldHJpZXZlIGFsbCBlbGVtZW50cyB3aGVyZSB0aGVyZSBpcyBhIHByaWNlIGFuZCBpdGVyYXRpdmVseSB1cGRhdGVcclxuICAgIC8vIHRoZSB0b3RhbCBwcmljZS5cclxuICAgIGNvbnN0IHByaWNlRWxlbXMgPSBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtc3VtbWFyeS1kYXRhXCIpIVxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX19maWVsZD5bZmllbGQ9XCJwcm9kdWN0LXByaWNlLXZhbHVlXCJdJyk7XHJcblxyXG4gICAgZm9yIChsZXQgcHJpY2VJZHggPSAwOyBwcmljZUlkeCA8IHByaWNlRWxlbXMubGVuZ3RoOyBwcmljZUlkeCsrKSB7XHJcbiAgICAgIHRvdGFsUHJpY2UgKz0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcF90b19mbG9hdChcclxuICAgICAgICBwcmljZUVsZW1zW3ByaWNlSWR4XS50ZXh0Q29udGVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgRE9NIHdpbGwgdGhlIG5ldyB0b3RhbCBmaWd1cmVzLlxyXG4gICAgY29uc3Qgc3ViVG90YWwgPSB0b3RhbFByaWNlIC8gMS4yO1xyXG4gICAgY29uc3QgdmF0ID0gdG90YWxQcmljZSAtIHN1YlRvdGFsO1xyXG5cclxuICAgIHN1YnRvdGFsRWxlbS50ZXh0Q29udGVudCA9IHN1YlRvdGFsLnRvRml4ZWQoMik7XHJcbiAgICB2YXRFbGVtLnRleHRDb250ZW50ID0gdmF0LnRvRml4ZWQoMik7XHJcbiAgICB0b3RhbEVsZW0udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcCh0b3RhbFByaWNlKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgcmVtb3ZlX2FuX2l0ZW0oXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuIER1cmluZyB0aGUgcHJvY2VzcywgaXQgd2lsbCB1cGRhdGVcclxuICAgICAqIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCB1cGRhdGUgdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmcsXHJcbiAgICBwcmljZTogc3RyaW5nLFxyXG4gICAgcHJpY2VFbGVtOiBIVE1MRWxlbWVudFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LlxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlbW92ZV9pdGVtKE51bWJlcihwcm9kdWN0SWQpLCAxKTtcclxuICAgIHByaWNlRWxlbS50ZXh0Q29udGVudCA9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBhcmF0ZWRfMmRwKFxyXG4gICAgICBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwX3RvX2Zsb2F0KHByaWNlRWxlbS50ZXh0Q29udGVudCkgLSBOdW1iZXIocHJpY2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBhZGRfYW5faXRlbShcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC4gRHVyaW5nIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwcm9kdWN0SWQ6IHN0cmluZyxcclxuICAgIHByaWNlOiBzdHJpbmcsXHJcbiAgICBwcmljZUVsZW06IEhUTUxFbGVtZW50XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkX2l0ZW0oTnVtYmVyKHByb2R1Y3RJZCksIDEpO1xyXG4gICAgcHJpY2VFbGVtLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgIE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBfdG9fZmxvYXQocHJpY2VFbGVtLnRleHRDb250ZW50KSArIE51bWJlcihwcmljZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHJlbW92ZV93aG9sZV9pdGVtKHByb2R1Y3RJZDogc3RyaW5nLCBwYXJlbnRDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gZW50aXJlIGl0ZW0gZnJvbSB0aGUgYmFza2V0LiBJbiB0aGUgcHJvY2VzcywgaXQgd2lsbCB1cGRhdGVcclxuICAgICAqIGxvY2FsIHN0b3JhZ2UgYW5kIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVtb3ZlX2VudGlyZV9pdGVtKHByb2R1Y3RJZCk7XHJcbiAgICBwYXJlbnRDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjcvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBGdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gV2lsbCBoYW5kbGUgdGhlIGZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS4gVGhlc2UgaW5jbHVkZSB0aGVcclxuLy8gZm9sbG93aW5nOlxyXG4vL1xyXG4vLyAgLSBXaWxsIGJ1aWxkIG9udG8gdGhlIEhUTUwgYWRkaW5nIG9udG8gdGhlIGNvbG91cnMgZmlsdGVyIG9wdGlvbnMgYXMgd2VsbCBhc1xyXG4vLyAgICB0aGUgcHJvZHVjdCBpbmZvIHNlY3Rpb24uIFRoZXJlIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gd2hhdCBvdGhlclxyXG4vLyAgICByZWxhdGVkIHByb2R1Y3RzIHRoZXJlIGFyZSB0byB0aGUgY3VycmVudCBwYWdlLiBUaGlzIGluZm9ybWF0aW9uIHdpbGwgYmVcclxuLy8gICAgcmV0cmlldmVkIGZyb20gYW4gQVBJLlxyXG4vL1xyXG4vLyAgLSBXaWxsIGJ1aWxkIHRoZSBmdW5jdGlvbiBmb3IgdGhlIGFkZCB0byBiYXNrZXQgYnV0dG9uIGFsbG93aW5nIGl0ZW1zXHJcbi8vICAgIHRvIGJlIGFkZGVkIHRvIHRoZSBiYXNrZXQgYW5kIGZvciB0aGUgcGFnZSB0byBiZSByZWZyZXNoZWQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9iYXNrZXQtaXRlbXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbmRQcm9kdWN0UGFnZSBleHRlbmRzIEJhc2tldFN0YXRlIHtcclxuICAvKipcclxuICAgKiBXaWxsIGhhbmRsZSB0aGUgSlMgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLiBUaGVzZSBpbmNsdWRlIHRoZVxyXG4gICAqIGZvbGxvd2luZzpcclxuICAgKlxyXG4gICAqICAtIFdpbGwgYnVpbGQgb250byB0aGUgSFRNTCBhZGRpbmcgb250byB0aGUgY29sb3VycyBmaWx0ZXIgb3B0aW9ucyBhcyB3ZWxsIGFzXHJcbiAgICogICAgdGhlIHByb2R1Y3QgaW5mbyBzZWN0aW9uLiBUaGVyZSBlbGVtZW50cyB3aWxsIGJlIGFkZGVkIGJhc2VkIG9uIHdoYXQgb3RoZXJcclxuICAgKiAgICByZWxhdGVkIHByb2R1Y3RzIHRoZXJlIGFyZSB0byB0aGUgY3VycmVudCBwYWdlLiBUaGlzIGluZm9ybWF0aW9uIHdpbGwgYmVcclxuICAgKiAgICByZXRyaWV2ZWQgZnJvbSBhbiBBUEkuXHJcbiAgICpcclxuICAgKiAgLSBXaWxsIGJ1aWxkIHRoZSBmdW5jdGlvbiBmb3IgdGhlIGFkZCB0byBiYXNrZXQgYnV0dG9uIGFsbG93aW5nIGl0ZW1zXHJcbiAgICogICAgdG8gYmUgYWRkZWQgdG8gdGhlIGJhc2tldCBhbmQgZm9yIHRoZSBwYWdlIHRvIGJlIHJlZnJlc2hlZC5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIC0gUmV0cmlldmVzIGRhdGEgZnJvbSB0aGUgQVBJIGFuZCBjYWxscyBtZXRob2RzIHRvIGJ1aWxkIG9udG8gdGhlIERPTS5cclxuICAgICAqIC0gQWRkcyBmdW5jdGlvbmFsaXR5IG9udG8gdGhlIFwiYWRkIHRvIGJhc2tldCBidXR0b25cIi5cclxuICAgICAqL1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IEFQSVBhdGggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFxyXG4gICAgICBcIi9wcm9kdWN0cy9cIixcclxuICAgICAgXCIvcHJvZHVjdHMvaW5mby1hcGkvXCJcclxuICAgICk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAvLyBBZGRpbmcgY29sb3VyIHZhcmlhdGlvbnNcclxuICAgICAgICBpZiAoZGF0YS5jb2xvdXJzKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX2NvbG91cnMoZGF0YS5jb2xvdXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIG90aGVyIHByb2R1Y3RzIG9mIHRoZSBzYW1lIHNldFxyXG4gICAgICAgIGlmIChkYXRhLnNldHMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfcHJvZHVjdF9zZXRzKGRhdGEuc2V0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZGluZyBzaW1pbGFyIHByb2R1Y3RzXHJcbiAgICAgICAgaWYgKGRhdGEuc2ltaWxhcikge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9zaW1pbGFyX3Byb2R1Y3RzKGRhdGEuc2ltaWxhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZGluZyBmZWF0dXJlcyBpbmZvcm1hdGlvblxyXG4gICAgICAgIGlmIChkYXRhLmZlYXR1cmVzKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX2ZlYXR1cmVzKGRhdGEuZmVhdHVyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmFkZF90b19iYXNrZXQoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfY29sb3VycyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIG9udG8gdGhlIGRyb3Bkb3duIGNvbG91cnMgZHJvcGRvd24gbWVudSBhbmQgYWRkcyBtb3JlIGNvbG91cnNcclxuICAgICAqIGluIGFjY29yZGFuY2UgdG8gaG93IG1hbnkgaG93IG1hbnkgY29sb3VycyB3ZXJlIHJldHVybmVkIGZyb20gdGhlIEFQSS5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgYXBwZW5kIGVsZW1lbnRzIG9udG8gdGhlIGVsZW1lbnRcclxuICAgICAqICNwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zXHJcbiAgICAgKlxyXG4gICAgICogRm9yIGVhY2ggY29sb3VyLCB0aGUgZm9sbG93aW5nIEhUTUwgd2lsbCBiZSBhcHBlbmRlZDpcclxuICAgICAqXHJcbiAgICAgKiA8YVxyXG4gICAgICogICBocmVmPVwie2xpbmsgdG8gcHJvZHVjdH1cIlxyXG4gICAgICogICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCJcclxuICAgICAqICAgZm9yPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIlxyXG4gICAgICogLz5cclxuICAgICAqICAgPGxhYmVsIGZvcj1cImNvbG91ci17Y29sb3VyIG5hbWV9XCI+XHJcbiAgICAgKiAgICAgPHNwYW5cclxuICAgICAqICAgICAgIGNsYXNzPVwic20tY29sb3VyLWJveFwiXHJcbiAgICAgKiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB7Y29sb3VyIGhleCB2YWx1ZX07XCI+XHJcbiAgICAgKiAgICAgPC9zcGFuPlxyXG4gICAgICogICAgIHtjb2xvdXItbmFtZX1cclxuICAgICAqICAgPC9sYWJlbD5cclxuICAgICAqIDwvYT5cclxuICAgICAqIDxpbnB1dFxyXG4gICAgICogICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICogICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiXHJcbiAgICAgKiAgIG5hbWU9XCJwcm9kLWYtY29sb3VyXCJcclxuICAgICAqICAgaWQ9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAgIHZhbHVlPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIlxyXG4gICAgICogLz5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1jb2xvdXItdmFyaWF0aW9uc1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgY29uc3QgY29sb3VyID0gYXR0cnNbYV0uY29sX25hbWU7XHJcbiAgICAgICAgY29uc3QgaGV4X3ZhbCA9IGF0dHJzW2FdLmNvbF9oZXhfdmFsO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJhXCIgdGFnXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImxhYmVsXCIgdGFnXHJcbiAgICAgICAgY29uc3QgbGFiZWxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpO1xyXG4gICAgICAgIGxhYmVsRWxlbS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb2xvdXItXCIgKyBjb2xvdXIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJzcGFuXCIgdGFnXHJcbiAgICAgICAgY29uc3Qgc3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICBzcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtLWNvbG91ci1ib3hcIik7XHJcbiAgICAgICAgc3BhbkVsZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGhleF92YWwgKyBcIjtcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImlucHV0XCIgdGFnXHJcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvZC1mLWNvbG91clwiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb2xvdXItXCIgKyBjb2xvdXIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlYWNoIHRhZyB0byB0aGVpciByZXNwZWN0aXZlIHBhcmVudCBlbGVtZW50cy5cclxuICAgICAgICBsYWJlbEVsZW0uYXBwZW5kQ2hpbGQoc3BhbkVsZW0pO1xyXG4gICAgICAgIGxhYmVsRWxlbS5hcHBlbmQoY29sb3VyKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChsYWJlbEVsZW0pO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmRpbmcgdGhlIGVsZW1lbnRzIHRvIHRoZSB0YXJnZXQgZWxlbWVudCBpbiB0aGUgRE9NLlxyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQoaW5wdXRFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnMgZG9lcyBub3QgZXhpc3QsIGFsdGVybmF0aXZlIGNvbG91cnMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3Byb2R1Y3Rfc2V0cyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIG9udG8gdGhlIFwicHJvZHVjdCBzZXRzXCIgc2VjdGlvbnMuXHJcbiAgICAgKiBXaWxsIGFwcGVuZCBlYWNoIHByb2R1Y3Qgc2V0IG9udG8gI3Byb2R1Y3Qtc2V0cy5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBwcm9kdWNlIHRoZSBmb2xsb3dpbmcgSFRNTCBmb3IgZWFjaCBzZXQ6XHJcbiAgICAgKlxyXG4gICAgICogPGEgY2xhc3M9XCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIiBocmVmPVwie3Byb2R1Y3QgdXJsfVwiXHJcbiAgICAgKiAgIDxpbWdcclxuICAgICAqICAgICBjbGFzcz1cInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICogICAgIGFsdD1cIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIHtwcm9kdWN0IG5hbWV9XCJcclxuICAgICAqICAgPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0IG5hbWV9PC9zcGFuPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCI+e3Byb2R1Y3QgcHJpY2V9PC9zcGFuPlxyXG4gICAgICogPC9hPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LXNldHNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgIC8vIFVzaW5nIGRhdGEgcmV0cmlldmVkIGZyb20gdGhlIEFQSSB0byBidWlsZCBjb25zdGFudHNcclxuICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1thXS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGF0dHJzW2FdLnNob3djYXNlX2ltYWdlO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gYXR0cnNbYV0ucHJpY2U7XHJcblxyXG4gICAgICAgIC8vIFwiQVwiIHRhZyB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGltYWdlIGFuZCB0aGUgdGV4dC5cclxuICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgICAgIC8vIFwiSU1HXCIgdGFnIGZvciBwcm9kdWN0IGltYWdlLlxyXG4gICAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCIpO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImFsdFwiLFxyXG4gICAgICAgICAgXCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiAoXCIgKyBuYW1lICsgXCJ9XCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBcIlNQQU5cIiB0YWdzIGNvbnRhaW5pbmcgdGhlIHByb2R1Y3QgbmFtZSBhbmQgcHJpY2VcclxuICAgICAgICBjb25zdCB0ZXh0U3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGV4dFNwYW5FbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dFByaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHRleHRQcmljZUVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0ZXh0UHJpY2VFbGVtLnRleHRDb250ZW50ID0gXCLCo1wiICsgcHJpY2U7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgaW1hZ2UgYW5kIHRleHQgZWxlbWVudHMgdG8gYmVjb21lIGNoaWxkcmVuIG9mIHRoZSBsaW5rRWxlbVxyXG4gICAgICAgIC8vIGFuZCBhcHBlbmQgdGhlbSBvbnRvIHRoZSB0YXJnZXRFbGVtIGluIHRoZSBET00uXHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0UHJpY2VFbGVtKTtcclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3Qtc2V0cyBkb2VzIG5vdCBleGlzdCwgcHJvZHVjdC1zZXRzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9zaW1pbGFyX3Byb2R1Y3RzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgXCJzaW1pbGFyIHByb2R1Y3RzXCIgc2VjdGlvbnMuXHJcbiAgICAgKiBXaWxsIGFwcGVuZCBlYWNoIHByb2R1Y3Qgc2V0IG9udG8gI3NpbWlsYXItcHJvZHVjdHMuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgcHJvZHVjZSB0aGUgZm9sbG93aW5nIEhUTUwgZm9yIGVhY2ggc2V0OlxyXG4gICAgICpcclxuICAgICAqIDxhIGNsYXNzPVwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIgaHJlZj1cIntwcm9kdWN0IHVybH1cIlxyXG4gICAgICogICA8aW1nXHJcbiAgICAgKiAgICAgY2xhc3M9XCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAqICAgICBhbHQ9XCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiB7cHJvZHVjdCBuYW1lfVwiXHJcbiAgICAgKiAgID5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIj57cHJvZHVjdCBuYW1lfTwvc3Bhbj5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiPntwcm9kdWN0IHByaWNlfTwvc3Bhbj5cclxuICAgICAqIDwvYT5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltaWxhci1wcm9kdWN0c1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2FdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgaW1nID0gYXR0cnNbYV0uc2hvd2Nhc2VfaW1hZ2U7XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBhdHRyc1thXS5wcmljZTtcclxuXHJcbiAgICAgICAgLy8gXCJBXCIgdGFnIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0LlxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaW1pbGFyLXByb2R1Y3QgcmVsYXRlZC1wcm9kdWN0XCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgICAgIC8vIFwiSU1HXCIgdGFnIGZvciBwcm9kdWN0IGltYWdlLlxyXG4gICAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcpO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJhbHRcIixcclxuICAgICAgICAgIFwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4gKFwiICsgbmFtZSArIFwifVwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gXCJTUEFOXCIgdGFncyBjb250YWluaW5nIHRoZSBwcm9kdWN0IG5hbWUgYW5kIHByaWNlXHJcbiAgICAgICAgY29uc3QgdGV4dFNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgdGV4dFNwYW5FbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0UHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgdGV4dFByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0ZXh0UHJpY2VFbGVtLnRleHRDb250ZW50ID0gXCLCo1wiICsgcHJpY2U7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgaW1hZ2UgYW5kIHRleHQgZWxlbWVudHMgdG8gYmVjb21lIGNoaWxkcmVuIG9mIHRoZSBsaW5rRWxlbVxyXG4gICAgICAgIC8vIGFuZCBhcHBlbmQgdGhlbSBvbnRvIHRoZSB0YXJnZXRFbGVtIGluIHRoZSBET00uXHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0UHJpY2VFbGVtKTtcclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3NpbWlsYXItcHJvZHVjdHMgZG9lcyBub3QgZXhpc3QsIHNpbWlsYXItcHJvZHVjdHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBidWlsZF9mZWF0dXJlcyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBmZWF0dXJlcyBzZWN0aW9uIG9mIHByb2R1Y3QgaW5mb3JtYXRpb24gYmFzZWQgb24gcmVzdWx0c1xyXG4gICAgICogcmV0cmlldmVkIGZyb20gdGhlIEFQSS5cclxuICAgICAqIFdpbGwgY3JlYXRlIGEgXCJQXCIgdGFnIGZvciBlYWNoIGZpbHRlciBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIHRhcmdldFxyXG4gICAgICogZWxlbWVudCBpbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1mZWF0dXJlc1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBmID0gMDsgZiA8IGF0dHJzLmxlbmd0aDsgZisrKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2ZdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LWluZm9fX3NlY3Rpb25fX3RleHRcIik7XHJcbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobmV3RWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNwcm9kdWN0LWZlYXR1cmVzIGRvZXMgbm90IGV4aXN0LCBzaW1pbGFyLXByb2R1Y3RzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBhZGRfdG9fYmFza2V0KCkge1xyXG4gICAgLyoqIEFkZHMgcHJvZHVjdHMgaW50byB0aGUgYmFza2V0ICovXHJcbiAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJxdWFudGl0eS1jdHJsXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9IE51bWJlcihpbnB1dEVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1pZFwiKSk7XHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiYWRkLXRvLWJhc2tldC1idG5cIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBxdWFudGl0eSA9IE51bWJlcihpbnB1dEVsZW0udmFsdWUpO1xyXG5cclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocXVhbnRpdHkpKSB7XHJcbiAgICAgICAgc3VwZXIuYWRkX2l0ZW0ocHJvZHVjdElkLCBxdWFudGl0eSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJDaGVjayB0aGUgcXVhbnRpdHksIGl0IGlzIGVpdGhlciBOYU4gb3IgYSBmbG9hdC4gTXVzdCBiZSBhIG51bWJlclwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMzAvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFBhZ2VzIHdoZXJlIGludGVyYWN0aW9uIHdpdGggaXRlbXMgaW4gdGhlIGJhc2tldCBuZWVkIHRvIGJlIGFjY2VzcyBhbmQvb3JcclxuLy8gbW9kaWZpZWQuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIC0gTWFuYWdlIHRoZSBiYXNrZXQgaXRlbXNcclxuLy8gLSBLZWVwIGJhc2tldCBkYXRhIHdoZW5ldmVyIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXHJcbi8vIC0gVXBkYXRlcyB0aGUgYmFza2V0IGl0ZW1zIGNvdW50XHJcbi8vXHJcbi8vIERFU0NSSVBUSU9OOlxyXG4vLyAtLS0tLS0tLS0tLS1cclxuLy8gTGV2ZXJhZ2VzIHRoZSBwb3dlciBvZiBsb2NhbCBzdG9yYWdlIHRvIGtlZXAgYSB0cmFjayBvZiB0aGUgYmFza2V0LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIEJhc2tldFN0YXRlIHtcclxuICB0b3RhbEl0ZW1zOiBzdHJpbmcgfCBudWxsIHwgbnVtYmVyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgXCJ0b3RhbEJhc2tldFNpemVcIlxyXG4gICk7XHJcbiAgaXRlbXM6IGFueSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhc2tldEl0ZW1zXCIpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXBkYXRlX2Jhc2tldF9jb3VudGVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9yZWFkX2l0ZW1zKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHRvdGFsIGFuZCBiYXNrZXQgc2l6ZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCBjb252ZXJ0c1xyXG4gICAgICogdGhlIHZhbHVlcyBpbnRvIHR5cGVzIHRoYXQgY2FuIGJlIHdvcmtlZCB3aXRoLlxyXG4gICAgICovXHJcbiAgICBpZiAoIXRoaXMudG90YWxJdGVtcykge1xyXG4gICAgICB0aGlzLnRvdGFsSXRlbXMgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pdGVtcykge1xyXG4gICAgICB0aGlzLml0ZW1zID0gSlNPTi5wYXJzZSh0aGlzLml0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSB7fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3NldF9pdGVtcygpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGxvY2FsIHN0b3JhZ2UgaXRlbXMgaW50byBzdHJpbmdzIGFuZCBzYXZlcyB0aGVtIG9udG8gdGhlXHJcbiAgICAgKiBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICogVXBkYXRlcyB0aGUgYmFza2V0IGl0ZW1zIGNvdW50ZXIuXHJcbiAgICAgKi9cclxuXHJcbiAgICBpZiAoIXRoaXMudG90YWxJdGVtcykge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbEJhc2tldFNpemVcIiwgXCIwXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgIFwidG90YWxCYXNrZXRTaXplXCIsXHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zLnRvU3RyaW5nKClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXRlbXMpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFza2V0SXRlbXNcIiwgXCJ7fVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFza2V0SXRlbXNcIiwgdGhpcy5pdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBiYXNrZXRcclxuICAgIHRoaXMudXBkYXRlX2Jhc2tldF9jb3VudGVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBhZGRfaXRlbShpZDogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICAvKiogTWV0aG9kIGZvciBhZGRpbmcgaXRlbXMgaW50byB0aGUgYmFza2V0LiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG5cclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zICs9IHF1YW50aXR5O1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zW2lkXSkge1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSArPSBxdWFudGl0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdID0gcXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHJlbW92ZV9pdGVtKGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgIC8qKiBNZXRob2QgZm9yIHJlbW92aW5nIGl0ZW1zIGZyb20gdGhlIGJhc2tldC4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuXHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIGlmICh0aGlzLnRvdGFsSXRlbXMgPiAwKSB7XHJcbiAgICAgIHRoaXMudG90YWxJdGVtcyAtPSBxdWFudGl0eTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlX2Jhc2tldF9jb3VudGVyKHRoaXMudG90YWxJdGVtcyk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXRlbXNbaWRdKSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdID0gTnVtYmVyKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gLT0gcXVhbnRpdHk7XHJcbiAgICAgIGlmICh0aGlzLml0ZW1zW2lkXSA9PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlbXNbaWRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICByZW1vdmVfZW50aXJlX2l0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgLyoqIFJlbW92ZXMgYW5kIGVudGlyZSBpdGVtLiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcykgLSBOdW1iZXIodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgZGVsZXRlIHRoaXMuaXRlbXNbaWRdO1xyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB1cGRhdGVfYmFza2V0X2NvdW50ZXIobmV3TnVtOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSB7XHJcbiAgICAvKiogVXBkYXRlcyB0aGUgYmFza2V0IGNvdW50ZXIgbnVtYmVyICovXHJcbiAgICBjb25zdCBiYXNrZXRDb3VudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJiYXNrZXQtdG90YWwtaXRlbXNcIlxyXG4gICAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKG5ld051bSkge1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS50ZXh0Q29udGVudCA9IG5ld051bS50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgdXBkYXRlX3NpbmdsZV9pdGVtKHByb2R1Y3RJZDogc3RyaW5nIHwgbnVtYmVyLCBuZXdOdW06IG51bWJlcikge1xyXG4gICAgLyoqIFVwZGF0ZXMgdGhlIGxvY2FsIHN0b3JhZ2UgZm9yIGEgc2luZ2xlIGl0ZW0gd2l0aCBhIG5ldyBxdWFudGl0eS4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuICAgIGNvbnN0IHByZXZWYWx1ZSA9IE51bWJlcih0aGlzLml0ZW1zW3Byb2R1Y3RJZF0pXHJcbiAgICB0aGlzLml0ZW1zW3Byb2R1Y3RJZF0gPSBuZXdOdW07XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKSArIG5ld051bSAtIHByZXZWYWx1ZTtcclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA4LzAxLzIwMjAwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gVXRpbGl0eSBjbGFzcyB0byByZWZvcm1hdCBudW1iZXIuXHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyRm9ybWF0IHtcclxuICAvKiogIFV0aWxpdHkgY2xhc3MgdG8gY29udmVydCBudW1iZXJzIHRvIGRpZmZlcmVudCBmb3JtYXRzLiAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgdGhvdXNhbmRfc2VwYXJhdGVkXzJkcChudW06IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgLyoqIENvdmVydHMgYSBudW1iZXIgdG8gYSB0aG91c2FuZCBzZXBhcmF0ZWQgc3RyaW5nIHRvIDIuZC5wICovXHJcbiAgICByZXR1cm4gTnVtYmVyKG51bSlcclxuICAgICAgLnRvRml4ZWQoMilcclxuICAgICAgLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN0YXRpYyB0aG91c2FuZF9zZXBfdG9fZmxvYXQobnVtOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDb252ZXJ0cyBhIHRob3VzYW5kIHNlcGFyYXRlZCBmbG9hdCB0byBhIGZsb2F0LiBJZiB0aGUgYXJndW1lbnQgPSBudWxsXHJcbiAgICAgICAqIHRoZW4gMCB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICAgKi9cclxuICAgIGlmICghbnVtKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIE51bWJlcihudW0ucmVwbGFjZShcIixcIiwgXCJcIikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA3LzAxLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBVdGlsaXR5IHByb3ZpZGluZyB2YWxpZGF0aW9uIG9wdGlvbnMuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogQSB1dGlsaXRpZXMgY2xhc3MgY29udGFpbmluZyBzdGF0aWMgbWV0aG9kIHdoaWNoIHJ1biBzb21lIGZvcm0gb2ZcclxuICAgKiB2YWxpZGF0aW9uLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgY2hlY2tfaWZfcG9zaXRpdmVfaW50KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAvKiogQ2hlY2tzIGlmIGFuIGl0ZW0gaXMgYSBwb3NpdGl2ZSBpbnRlZ2VyICovXHJcblxyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0gIT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gPj0gMCAmJiBpdGVtID09PSBNYXRoLnJvdW5kKGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdCB0aGlzIHN0YWdlLCB0aGUgb25seSBicmFuY2ggc3VnZ2VzdHMgdGhhdCB0aGUgbnVtYmVyIGlzIDwgMC5cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=