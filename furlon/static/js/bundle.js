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
if (window.location.href.includes("/products/")) {
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
/* harmony import */ var _state_basket_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/basket-items */ "./furlon/static/ts/state/basket-items.ts");
/* harmony import */ var _components_quantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/quantity */ "./furlon/static/ts/components/quantity.ts");
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
                if (_utilities_validation__WEBPACK_IMPORTED_MODULE_0__["Validation"].check_if_positive_int(Number(quantityInput.getAttribute("value")))) {
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
            priceSpan.textContent = (Number(product.price) * items).toString();
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
        new _components_quantity__WEBPACK_IMPORTED_MODULE_2__["QuantityComponent"]();
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
            totalPrice += Number(priceElems[priceIdx].textContent);
        }
        var subTotal = totalPrice / 1.2;
        var vat = totalPrice - subTotal;
        subtotalElem.textContent = subTotal.toFixed(2);
        vatElem.textContent = vat.toFixed(2);
        totalElem.textContent = totalPrice.toString();
    };
    BasketPage.prototype.remove_an_item = function (productId, price, priceElem) {
        this.remove_item(Number(productId), 1);
        priceElem.textContent = (Number(priceElem.textContent) - Number(price)).toString();
    };
    BasketPage.prototype.add_an_item = function (productId, price, priceElem) {
        this.add_item(Number(productId), 1);
        priceElem.textContent = (Number(priceElem.textContent) + Number(price)).toString();
    };
    BasketPage.prototype.remove_whole_item = function (productId, parentContainer) {
        this.remove_entire_item(productId);
        parentContainer.remove();
    };
    return BasketPage;
}(_state_basket_items__WEBPACK_IMPORTED_MODULE_1__["BasketState"]));



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
            console.log(item, item >= 0);
            return true;
        }
        return false;
    };
    return Validation;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3N0YXRlL2Jhc2tldC1pdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3V0aWxpdGllcy92YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0lBV0U7UUFIQSxlQUFVLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFTakUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRS9DLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FDaEUscUNBQXFDLENBQ3RDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTCxJQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FDM0QsMENBQTBDLENBQzNDLENBQUM7WUFFRixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQ2xFLHNDQUFzQyxDQUN2QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsc0JBQXNCLENBQ3pELDhDQUE4QyxDQUMvQyxDQUFDO1lBR0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBR08seUNBQWtCLEdBQTFCLFVBQ0UsYUFBNkIsRUFDN0IsU0FBeUI7Z0NBZWhCLEtBQUs7WUFDWixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUN6QyxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV6RCxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLFdBQVcsRUFBRTt3QkFDekQsSUFBSSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sRUFBRTs0QkFDeEQsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7eUJBQ3BEO3FCQUNGO3lCQUFNO3dCQUNMLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUNwRDtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDOztRQWJMLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtvQkFBNUMsS0FBSztTQWNiO0lBQ0gsQ0FBQztJQUdPLDhDQUF1QixHQUEvQixVQVFFLGFBQTZCO2dDQUVwQixFQUFFO1lBQ1QsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDMUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRW5ELElBQUksRUFBRSxLQUFLLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNuQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDbkQ7cUJBQU07b0JBQ0wsYUFBYSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUN4RDtZQUNILENBQUMsQ0FBQyxDQUFDOztRQVRMLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRTtvQkFBdkMsRUFBRTtTQVVWO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNqRUQ7QUFBQTtBQUFBO0lBa0JFO1FBTEEsWUFBTyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDdkMsZUFBZSxDQUNvQixDQUFDO1FBU3BDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUdsQixLQUFLLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBR0QsaUNBQVUsR0FBVjtRQU1FLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDaEQseUJBQXlCLENBQ1UsQ0FBQztRQUV0QyxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQ2pELHdCQUF3QixDQUN6QixDQUFDO1FBRUYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUNqQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDakQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQzthQUNoRTtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUMzQyw2QkFBNkIsQ0FDOUIsQ0FBQztnQ0FDTyxDQUFDO1lBQ1IsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7O2dCQUVwQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDakQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ2hDLHNDQUFzQyxFQUN0QyxzQ0FBc0MsQ0FDdkMsQ0FBQztpQkFDSDtnQkFRRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDMUMsSUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVqQyxJQUNFLFVBQVUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO3dCQUNyQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUN0Qzt3QkFFQSxJQUNFLFVBQVUsQ0FBQyxrQkFBbUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUMvQyx3QkFBd0IsQ0FDekIsRUFDRDs0QkFDQSxnQkFBVSxDQUFDLGtCQUFrQiwwQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUMxQyw4QkFBOEIsRUFDOUI7eUJBQ0g7cUJBQ0Y7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQzs7UUFyQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUFqQyxDQUFDO1NBc0NUO0lBQ0gsQ0FBQztJQUdELGlDQUFVLEdBQVYsVUFBVyxNQUFzQjtRQUkvQixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQzlDLHlCQUF5QixDQUMxQixDQUFDLENBQUMsQ0FBbUIsQ0FBQztRQUN2QixJQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FDeEQsd0JBQXdCLENBQ3pCLENBQUMsQ0FBQyxDQUFtQixDQUFDO1FBQ3ZCLElBQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsc0JBQXNCLENBQ2xFLCtCQUErQixDQUNNLENBQUM7UUFJeEMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxlQUFLO1lBQ3hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixvQkFBb0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7Z0NBSUcsVUFBVTtZQUlkLElBQUksUUFBUSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBR2pDLEtBQ0UsSUFBSSxhQUFhLEdBQUcsQ0FBQyxFQUNyQixhQUFhLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUN2QyxhQUFhLEVBQUUsRUFDZjtvQkFDQSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUM5Qyx5Q0FBeUMsQ0FDMUMsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2dCQUdsRSxVQUFVLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7Z0JBSTFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUNyRSxDQUFDLENBQUMsQ0FBQzs7UUExQkwsS0FDRSxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQ2xCLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQ3BDLFVBQVUsRUFBRTtvQkFGUixVQUFVO1NBMEJmO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeExEO0lBWUU7O1FBTEEsYUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9ELGdCQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDdkUscUJBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBUzdELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7WUFHbEIsS0FBc0Isc0JBQUksQ0FBQyxRQUFlLDZDQUFFO2dCQUF2QyxJQUFNLE9BQU87Z0JBQ2hCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3JEOzs7Ozs7Ozs7UUFHRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdELCtCQUFVLEdBQVY7UUFBQSxpQkF1REM7UUFoREMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUNqQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ3RELEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDckMsc0NBQXNDLEVBQ3RDLHNDQUFzQyxDQUN2QyxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDakQsd0JBQXdCLENBQ3pCLENBQUM7Z0NBQ08sQ0FBQztZQUNSLElBQU0sT0FBTyxHQUFHLE9BQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Ozs7b0JBRWhDLEtBQXlCLDRDQUFrQiw4Q0FBRTt3QkFBeEMsSUFBTSxVQUFVO3dCQUNuQixVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO3FCQUMxRDs7Ozs7Ozs7O2dCQVFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDN0MsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFcEMsSUFDRSxVQUFVLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQzt3QkFDckMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFDbEM7d0JBQ0EsVUFDRSxVQUFVLENBQUMsa0JBQWtCLDBDQUFFLFNBQVMsQ0FBQyxRQUFRLENBQy9DLDRCQUE0QixHQUU5Qjs0QkFDQSxVQUFVLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDN0Msc0NBQXNDLEVBQ3RDLHNDQUFzQyxDQUN2QyxDQUFDO3lCQUNIO3FCQUNGO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7OztRQWxDTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUFwQyxDQUFDO1NBbUNUO0lBQ0gsQ0FBQztJQUdELGdDQUFXLEdBQVgsVUFBWSxLQUFpQjtRQU0zQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQXFCLENBQUM7UUFHekMsTUFBTSxFQUFFLFdBQVcsQ0FBQztRQUNwQixJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLElBQUksT0FBdUIsQ0FBQztRQUU1QixJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUM5QyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDOUIsOENBQThDLENBQzdCLENBQUM7U0FDckI7YUFBTSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDbEQsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQzlCLDJDQUEyQyxDQUMxQixDQUFDO1NBQ3JCO2FBQU07WUFDTCxNQUFNLG9DQUFvQyxDQUFDO1NBQzVDO1FBRUQsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3ZDLHNDQUFzQyxDQUN2QyxDQUFDO1FBRUYsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1lBQzlELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDbEU7YUFBTTtZQUNMLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7SUFHTyxtQ0FBYyxHQUF0Qjs7UUFNRSxJQUFNLFdBQVcsR0FBRztZQUNsQixRQUFRLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO1lBQzlDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQztTQUN2RCxDQUFDO1FBRUYsVUFBSSxDQUFDLGdCQUFnQiwwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM5QyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUN4RDthQUNGO1FBQ0gsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN2SUQ7QUFBQTtBQUFBO0FBQXFEO0FBR3JEO0lBV0U7UUFMQSxlQUFVLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUMxQyxZQUFZLENBQ3VCLENBQUM7UUFPcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQXNCLENBQUM7WUFDakQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBc0IsQ0FBQztZQUMvQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFxQixDQUFDO1lBRWpELElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFHTyx5Q0FBYSxHQUFyQixVQUFzQixTQUF5QjtRQUk3QyxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsYUFBYSxDQUNyQyxpQ0FBaUMsQ0FDYixDQUFDO1FBQ3ZCLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQ25DLCtCQUErQixDQUNYLENBQUM7UUFDdkIsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FDdEMseUJBQXlCLENBQ04sQ0FBQztRQUV0QixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR08sK0NBQW1CLEdBQTNCLFVBQ0UsT0FBMEIsRUFDMUIsS0FBd0IsRUFDeEIsUUFBMEIsRUFDMUIsUUFBZ0IsRUFDaEIsUUFBZ0I7UUFTaEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUNsRCxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUVwRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxFQUFFO29CQUNyQyxLQUFLLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNuQztnQkFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUN2QyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdPLDhDQUFrQixHQUExQixVQUNFLE9BQTBCLEVBQzFCLEtBQXdCLEVBQ3hCLFFBQTBCLEVBQzFCLFFBQWdCLEVBQ2hCLFFBQWdCO1FBU2hCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsRUFBRTtnQkFDaEQsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFcEQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsRUFBRTtvQkFDckMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDckM7Z0JBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDdkMsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7aUJBQzVDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHTyw0Q0FBZ0IsR0FBeEIsVUFDRSxPQUEwQixFQUMxQixLQUF3QixFQUN4QixRQUEwQixFQUMxQixRQUFnQixFQUNoQixRQUFnQjtRQU9oQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO1lBQ3BDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFJckMsSUFBSSxnRUFBVSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUczQyxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNwQyxLQUFLLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsQyxRQUFRLENBQUMsYUFBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFHbkQsSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO29CQUNyQixPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDOUM7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDckM7Z0JBR0QsSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO29CQUNyQixLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDNUM7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDbkM7YUFFRjtpQkFBTTtnQkFFTCxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDN0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQzNDLFFBQVEsQ0FBQyxhQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN6RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUtEO0lBVUU7UUFLRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR0QsMENBQWtCLEdBQWxCOztRQUFBLGlCQXVFQztRQWxFQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQzdDLGFBQWEsQ0FDZCxDQUFDLENBQUMsQ0FBb0IsQ0FBQztRQUd4QixJQUFNLFVBQVUsR0FBRyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDOztZQUMxRSxLQUF3QixzQ0FBVSxxR0FBRTtnQkFBL0IsSUFBTSxTQUFTO2dCQUNsQixJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUM1QyxPQUFPLENBQ1ksQ0FBQztnQkFDdEIsZUFBZSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLGVBQWUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRCxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN0Qzs7Ozs7Ozs7O1FBR0QsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUNyRCx3QkFBd0IsQ0FDVyxDQUFDO2dDQUU3QixHQUFHO1lBQ1YsSUFBTSxjQUFjLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLElBQUksV0FBeUMsQ0FBQztZQUU5QyxRQUFRLGNBQWMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ2pELEtBQUssV0FBVztvQkFDZCxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDbkMsWUFBWSxDQUNPLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUNuQyxZQUFZLENBQ08sQ0FBQztvQkFDdEIsTUFBTTtnQkFDUixLQUFLLFVBQVU7b0JBQ2IsV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ25DLFlBQVksQ0FDTyxDQUFDO29CQUN0QixNQUFNO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7YUFDekU7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGVBQUs7b0JBQzVDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsV0FBWSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsc0JBQXVCLENBQUMsV0FBWSxDQUFDO29CQUd6RSxJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7b0JBRXJDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUM3QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2YsT0FBTyxDQUFDLGtCQUFrQixHQUFHO3dCQUMzQixJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFOzRCQUNwRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQU8sQ0FBQzs0QkFDeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDaEM7NkJBQU07eUJBQ047b0JBQ0gsQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2FBQ0o7O1FBM0NILEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtvQkFBNUMsR0FBRztTQTRDWDtJQUNILENBQUM7SUFHRCxpQ0FBUyxHQUFUO1FBS0UsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRXhFLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDOUMsWUFBWSxDQUNPLENBQUM7UUFDdEIsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM5QyxZQUFZLENBQ08sQ0FBQztRQUN0QixJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQzlDLFlBQVksQ0FDTyxDQUFDO1FBQ3RCLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQzVDLFVBQVUsQ0FDUyxDQUFDO1FBRXRCLElBQUksZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQzFCLElBQU0sTUFBTSxHQUFHLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDakM7U0FDRjtRQUVELElBQUksZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQzFCLElBQU0sTUFBTSxHQUFHLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDakM7U0FDRjtRQUVELElBQUksZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQzFCLElBQU0sTUFBTSxHQUFHLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDakM7U0FDRjtRQUVELElBQUksY0FBYyxDQUFDLEtBQUssRUFBRTtZQUN4QixJQUFNLE1BQU0sR0FBRyxXQUFXLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDcEQ7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCx1Q0FBZSxHQUFmLFVBQWdCLFVBQWlCO1FBTy9CLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXZFLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDO1FBQ2IsS0FBSyxJQUFNLE1BQU0sSUFBSSxVQUFVLEVBQUU7WUFDL0IsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbkQ7UUFFRCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMvQyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUN4RSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN2TEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ0s7QUFDQTtBQUNFO0FBQ0M7QUFDSDtBQUNQO0FBQ0E7QUFHbkQsSUFBSSxpRUFBVSxFQUFFLENBQUM7QUFHakIsSUFBSSwrREFBVyxFQUFFLENBQUM7QUFHbEIsSUFBSSxzRUFBWSxFQUFFLENBQUM7QUFHbkIsSUFBSSx3RUFBYSxFQUFFLENBQUM7QUFFcEIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7SUFDL0MsSUFBSSx5RUFBaUIsRUFBRSxDQUFDO0lBQ3hCLElBQUksc0VBQWlCLEVBQUUsQ0FBQztJQUN4QixJQUFJLHNFQUFZLEVBQUUsQ0FBQztDQUNwQjtBQUVELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQzdDLElBQUksK0RBQVUsRUFBRSxDQUFDO0NBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ1RDtBQUNEO0FBQ087QUFHOUQ7SUFBZ0MsOEJBQVc7SUFnQnpDO1FBQUEsWUFJRSxpQkFBTyxTQTJCUjtRQXRDRCx3QkFBa0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUMxQyxxQkFBcUIsQ0FDSixDQUFDO1FBRXBCLGlCQUFXLEdBQWEsRUFBRSxDQUFDO1FBUXpCLElBQUksS0FBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDNUMsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUI7WUFFRCxJQUFNLGNBQWMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUdsRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQzFDLFVBQVUsRUFDVix1QkFBdUIsR0FBRyxjQUFjLENBQ3pDLENBQUM7WUFDRixJQUFNLFNBQU8sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ3JDLFNBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLFNBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVmLFNBQU8sQ0FBQyxrQkFBa0IsR0FBRztnQkFDM0IsSUFBSSxTQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxTQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDcEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JELElBQUksV0FBVyxDQUFDLFlBQVksRUFBRTt3QkFDNUIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDcEQsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7cUJBQzdCO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDO1NBQ0g7O0lBQ0gsQ0FBQztJQUdPLHlDQUFvQixHQUE1QixVQUE2QixXQUFrQjtRQUEvQyxpQkE2SkM7UUF6SkMsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztnQ0FDakUsQ0FBQztZQUNSLElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQUssS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFJaEUsU0FBUyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDbkMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBR3hELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztZQUNoRCxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQy9DLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDaEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztZQUNyRCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRzdCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7WUFDcEMsUUFBUSxDQUFDLElBQUksR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNoRCxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMvQyxRQUFRLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFHM0MsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QyxTQUFTLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxTQUFTLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNyQixTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNqRCxTQUFTLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFHMUMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQyxVQUFVLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztZQUN0QyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ25ELFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUs1QyxJQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUQscUJBQXFCLENBQUMsU0FBUyxHQUFHLHlCQUF5QixDQUFDO1lBQzVELHFCQUFxQixDQUFDLEVBQUUsR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUMxRCxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRXhELElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO1lBQzFFLGFBQWEsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7WUFDOUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDeEIsYUFBYSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDekIsYUFBYSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3RDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQzlCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO2dCQUcvQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksZ0VBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBRWpGLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3JDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQzt3QkFDeEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ25DO29CQUdELEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUdsRCxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFHM0QsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7aUJBQzdCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELFFBQVEsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7WUFDdkMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDbEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxlQUFLO2dCQUN0QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNqRSxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztZQUVILElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsT0FBTyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztZQUN0QyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGVBQUs7Z0JBQ3JDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1lBQ2pELFlBQVksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBRS9CLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsV0FBVyxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztZQUNoRCxXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUU5QixRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakMscUJBQXFCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqRCxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFHM0MsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QyxTQUFTLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1lBRTNELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDekIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztZQUN2RCxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTlCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUN2RCxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuRSxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBR2pDLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsY0FBYyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFDekMsY0FBYyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDcEQsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxlQUFLO2dCQUU1QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztZQUNILElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7WUFDdEMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QyxTQUFTLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBR3RDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakMsT0FBSyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7OztRQXBKakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUFsQyxDQUFDO1NBcUpUO1FBRUQsSUFBSSxzRUFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHTyx5Q0FBb0IsR0FBNUI7UUFRRSxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFFO2FBQzdELFFBQVEsQ0FBQyxDQUFDLENBQW9CLENBQUM7UUFDbEMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUU7YUFDbkQsUUFBUSxDQUFDLENBQUMsQ0FBb0IsQ0FBQztRQUNsQyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBRTthQUN2RCxRQUFRLENBQUMsQ0FBQyxDQUFvQixDQUFDO1FBR2xDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUluQixJQUFNLFVBQVUsR0FBRyxRQUFRO2FBQ3hCLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBRTthQUN0QyxnQkFBZ0IsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBRW5FLEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQy9ELFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hEO1FBR0QsSUFBTSxRQUFRLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNsQyxJQUFNLEdBQUcsR0FBRyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBRWxDLFlBQVksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUdPLG1DQUFjLEdBQXRCLFVBS0UsU0FBaUIsRUFDakIsS0FBYSxFQUNiLFNBQXNCO1FBS3RCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQzlDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDZixDQUFDO0lBR08sZ0NBQVcsR0FBbkIsVUFLRSxTQUFpQixFQUNqQixLQUFhLEVBQ2IsU0FBc0I7UUFLdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUN0QixNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDOUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFHTyxzQ0FBaUIsR0FBekIsVUFBMEIsU0FBaUIsRUFBRSxlQUE0QjtRQUt2RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQ0F0UytCLCtEQUFXLEdBc1MxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVNzRDtBQUV2RDtJQUF1QyxxQ0FBVztJQWVoRDtRQUFBLFlBS0UsaUJBQU8sU0FnQ1I7UUEvQkMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUMxQyxZQUFZLEVBQ1oscUJBQXFCLENBQ3RCLENBQUM7UUFDRixJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVmLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRztZQUMzQixJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO2dCQUNwRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDbEM7Z0JBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDM0M7Z0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEM7YUFDRjtRQUNILENBQUMsQ0FBQztRQUVGLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7SUFDdkIsQ0FBQztJQUdPLHlDQUFhLEdBQXJCLFVBQXNCLEtBQVk7UUErQmhDLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV4RSxJQUFJLFVBQVUsRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUVyQyxJQUFNLElBQUksR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztnQkFDaEQsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDakMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFHckMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0MsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLCtCQUErQixDQUFDLENBQUM7Z0JBR2hFLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xELFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFHbEQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEQsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ2hELFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG9CQUFvQixHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFHckUsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7Z0JBQ3JFLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUNoRCxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ2pELFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFHcEQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFHaEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuQztTQUNGO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUNWLGlGQUFpRixDQUNsRixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBR08sOENBQWtCLEdBQTFCLFVBQTJCLEtBQVk7UUFlckMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUzRCxJQUFJLFVBQVUsRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUVyQyxJQUFNLElBQUksR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztnQkFDaEQsSUFBTSxNQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDM0IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztnQkFDcEMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFHN0IsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0MsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztnQkFDOUQsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBR3BDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHVDQUF1QyxDQUFDLENBQUM7Z0JBQ3ZFLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsWUFBWSxDQUNsQixLQUFLLEVBQ0wsc0RBQXNELEdBQUcsTUFBSSxHQUFHLEdBQUcsQ0FDcEUsQ0FBQztnQkFHRixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRCxZQUFZLENBQUMsWUFBWSxDQUN2QixPQUFPLEVBQ1AseUNBQXlDLENBQzFDLENBQUM7Z0JBQ0YsWUFBWSxDQUFDLFdBQVcsR0FBRyxNQUFJLENBQUM7Z0JBRWhDLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JELGFBQWEsQ0FBQyxZQUFZLENBQ3hCLE9BQU8sRUFDUCwyQ0FBMkMsQ0FDNUMsQ0FBQztnQkFDRixhQUFhLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBSXhDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEM7U0FDRjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FDViw2REFBNkQsQ0FDOUQsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUdPLGtEQUFzQixHQUE5QixVQUErQixLQUFZO1FBZXpDLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUvRCxJQUFJLFVBQVUsRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUVyQyxJQUFNLElBQUksR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztnQkFDaEQsSUFBTSxNQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDM0IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztnQkFDcEMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFHN0IsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0MsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztnQkFDbEUsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBR3BDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLE9BQU8sRUFDUCwyQ0FBMkMsQ0FDNUMsQ0FBQztnQkFDRixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLFlBQVksQ0FDbEIsS0FBSyxFQUNMLHNEQUFzRCxHQUFHLE1BQUksR0FBRyxHQUFHLENBQ3BFLENBQUM7Z0JBR0YsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEQsWUFBWSxDQUFDLFlBQVksQ0FDdkIsT0FBTyxFQUNQLDZDQUE2QyxDQUM5QyxDQUFDO2dCQUNGLFlBQVksQ0FBQyxXQUFXLEdBQUcsTUFBSSxDQUFDO2dCQUVoQyxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyRCxhQUFhLENBQUMsWUFBWSxDQUN4QixPQUFPLEVBQ1AsK0NBQStDLENBQ2hELENBQUM7Z0JBQ0YsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO2dCQUl4QyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QixRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNuQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNwQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQ1YscUVBQXFFLENBQ3RFLENBQUM7U0FDSDtJQUNILENBQUM7SUFHRCwwQ0FBYyxHQUFkLFVBQWUsS0FBWTtRQVF6QixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFL0QsSUFBSSxVQUFVLEVBQUU7WUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsSUFBTSxNQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDM0IsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztnQkFDN0QsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFJLENBQUM7Z0JBRTNCLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7U0FDRjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FDVixxRUFBcUUsQ0FDdEUsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUdPLHlDQUFhLEdBQXJCO1FBQUEsaUJBc0JDO1FBcEJDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ3ZDLGVBQWUsQ0FDSSxDQUFDO1FBQ3RCLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFL0QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDcEMsbUJBQW1CLENBQ0EsQ0FBQztRQUV0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQy9CLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFekMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM5QixpQkFBTSxRQUFRLGFBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQ1YsbUVBQW1FLENBQ3BFLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxDQXJVc0MsK0RBQVcsR0FxVWpEOzs7Ozs7Ozs7Ozs7OztBQ3RVRDtBQUFBO0FBQUE7SUFPRTtRQU5BLGVBQVUsR0FBMkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQzlELGlCQUFpQixDQUNsQixDQUFDO1FBQ0YsVUFBSyxHQUFRLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBSXRELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUdPLGlDQUFXLEdBQW5CO1FBS0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDckI7YUFBTTtZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFHTyxnQ0FBVSxHQUFsQjtRQU9FLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDekIsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQzNCLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEQ7UUFHRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFHRCw4QkFBUSxHQUFSLFVBQVMsRUFBVSxFQUFFLFFBQWdCO1FBRW5DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBR0QsaUNBQVcsR0FBWCxVQUFZLEVBQVUsRUFBRSxRQUFnQjtRQUV0QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxRQUFRLENBQUM7WUFDM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUdELHdDQUFrQixHQUFsQixVQUFtQixFQUFVO1FBRTNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHRCwyQ0FBcUIsR0FBckIsVUFBc0IsTUFBOEI7UUFFbEQsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDN0Msb0JBQW9CLENBQ0YsQ0FBQztRQUVyQixJQUFJLE1BQU0sRUFBRTtZQUNWLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLGVBQWUsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pEO2FBQU07WUFDTCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFHRCx3Q0FBa0IsR0FBbEIsVUFBbUIsU0FBMEIsRUFBRSxNQUFjO1FBRTNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN4SUQ7QUFBQTtBQUFBO0lBQUE7SUFvQkEsQ0FBQztJQWJRLGdDQUFxQixHQUE1QixVQUE2QixJQUFTO1FBR2xDLElBQUksT0FBTyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLE9BQU8sS0FBSztTQUNmO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBTyxJQUFJO1NBQ2Q7UUFHRCxPQUFPLEtBQUs7SUFDaEIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImZ1cmxvbi9zdGF0aWMvanNcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9mdXJsb24vc3RhdGljL3RzL21haW4udHNcIik7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDI5LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIENhcm91c2VsIHN0eWxlZCBpbWFnZSBzbGlkZSBzaG93cy5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gT24gY2xpY2sgb2YgYSBpbWFnZSB0aHVtYm5haWxzIG9yIHRoZSBjdXJyZW50IGltYWdlLCB0aGUgY3VycmVudCBpbWFnZSBzaG91bGRcclxuLy8gY2hhbmdlIGFjY29yZGluZ2x5LlxyXG4vLyBBbmltYXRpb25zIGFyZSBoYW5kbGVkIHRocm91Z2ggdGhlIENTUywgdGhlIEpTIHNldHMgdXAgdGhlIGV2ZW50IGxpc3RlbmVycyB0b1xyXG4vLyBjaGFuZ2UgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGRpc3BsYXkgaW1hZ2VzIGFjY29yZGluZ2x5IHNvIGFzIHRvIGRpc3BsYXkgdGhlXHJcbi8vIHNlbGVjdGVkIGltYWdlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW1ncyB7XHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgY2Fyb3VzZWwgaW1hZ2UgaW1hZ2VzIHN1Y2ggdGhhdCB3aGVuXHJcbiAgICogYSB0aHVtYm5haWwgb3IgdGhlIG1haW4gcGljdHVyZSBpcyBjbGlja2VkIG9uLCB0aGUgaW1hZ2Ugd2lsbCBjaGFuZ2UuXHJcbiAgICogVGhlIGFuaW1hdGlvbiBhbmQgcG9zaXRpb25pbmcgaXMgY29udHJvbGxlZCB2aWEgdGhlIENTUywgdGhlIGNsYXNzIHdpbGxcclxuICAgKiBhZGQgYW5kIHJlbW92ZSBhdHRyaWJ1dGVzIGZyb20gdGhlIGVsZW1lbnRzLCBzbyB0aGF0IHRoZSBhbmltYXRpb25zIGNhblxyXG4gICAqIGJlIHRyaWdnZXJlZC5cclxuICAgKi9cclxuICBjb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2NhdGVzIHRoZSBlbGVtZW50cyB3aGVyZSBhbiBldmVudCBsaXN0ZW5lcnMgbmVlZCB0byBiZSBhZGRlZCBhbmRcclxuICAgICAqIGNhbGxzIG1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBkZXBlbmRpbmcgb24gd2hhdCB0aGUgZWxlbWVudFxyXG4gICAgICogaXMuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIC8vIERPTSBlbGVtZW50cyBmb3IgZXZlbnQgbGlzdGVuZXJzIHRvIGJlIGFkZGVkLlxyXG4gICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2NdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvblwiXHJcbiAgICAgIClbY107XHJcbiAgICAgIGNvbnN0IGRpc3BsYXlJbWFnZXMgPSBkaXNwbGF5Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvbl9faW1nXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGltZ1RodW1ic0NvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzXCJcclxuICAgICAgKVswXTtcclxuICAgICAgY29uc3QgaW1nVGh1bWJzID0gaW1nVGh1bWJzQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktY29udHJvbHMtY29udHJvbFwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyAgTWV0aG9kcyB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIG9uIGVhY2ggRE9NIGVsZW1lbnQuXHJcbiAgICAgIHRoaXMub25fY2xpY2tpbmdfdGh1bWJzKGRpc3BsYXlJbWFnZXMsIGltZ1RodW1icyk7XHJcbiAgICAgIHRoaXMub25fY2xpY2tpbmdfZGlzcGxheV9pbWcoZGlzcGxheUltYWdlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBvbl9jbGlja2luZ190aHVtYnMoXHJcbiAgICBkaXNwbGF5SW1hZ2VzOiBIVE1MQ29sbGVjdGlvbixcclxuICAgIGltZ1RodW1iczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogRWFjaCBpbWFnZSB0aHVtYm5haWwgZWxlbWVudCBoYXMgYSBcImZvclwiIGF0dHJpYnV0ZSB3aGljaCBpbmRpY2F0ZXNcclxuICAgICAqIHdoaWNoIGVsZW1lbnQgb24gdGhlIGRpc3BsYXkgc2VjdGlvbiBpdCByZXByZXNlbnRzLiBUaGUgZGlzcGxheSBpbWFnZVxyXG4gICAgICogZWxlbWVudCBoYXMgYW4gXCJpbWdcIiBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBPbiBjbGlja2luZyBvbiBhIGltYWdlIHRodW1ibmFpbCwgdGhlIGRpc3BsYXkgYXR0cmlidXRlJ3MgcG9zaXRpb25cclxuICAgICAqIGF0dHJpYnV0ZSB3aWxsIGJlY29tZSBcInNob3dcIiB3aGVyZSB0aGUgc2FtZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIGFsbFxyXG4gICAgICogb3RoZXIgaW1hZ2VzIHdpbGwgYmVjb21lIFwiaGlkZVwiLlxyXG4gICAgICpcclxuICAgICAqIE5PVEU6IHRoZSBpbml0aWFsIGltYWdlIHdpbGwgaGF2ZSBwb3NpdGlvbj1cImluaXRcIiBpbml0aWFsbHkgc28gYXMgdG9cclxuICAgICAqIGF2b2lkIGFueSBhbmltYXRpb25zIG9uIHN0YXJ0LiBJZiB0aGlzIGltYWdlIHRodW1ibmFpbCBpcyBjbGlja2VkLCBkb1xyXG4gICAgICogbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgdGh1bWIgPSAwOyB0aHVtYiA8IGltZ1RodW1icy5sZW5ndGg7IHRodW1iKyspIHtcclxuICAgICAgaW1nVGh1bWJzW3RodW1iXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzRm9yID0gaW1nVGh1bWJzW3RodW1iXS5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcImltZ1wiKSA9PT0gY29udHJvbHNGb3IpIHtcclxuICAgICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpICE9IFwiaW5pdFwiKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcImhpZGVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG9uX2NsaWNraW5nX2Rpc3BsYXlfaW1nKFxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGljayBvZiB0aGUgY3VycmVudCBkaXNwbGF5IGltYWdlLCBoaWRlIHRoZSBpbWFnZSBhbmQgc2hvdyB0aGVcclxuICAgICAqIG5leHQuXHJcbiAgICAgKiBBbmltYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgY3NzLiBGb3IgYW5pbWF0aW9uIHRvIHdvcmssIG9uIGNsaWNrLFxyXG4gICAgICogXCJoaWRlXCIgaXMgc2V0IHRvIHRoZSBhdHRyaWJ1dGUgcG9zaXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UsIGFuZCBvblxyXG4gICAgICogdGhlIG5leHQgaW1hZ2UsIHRoZSBcInNob3dcIiBpcyBzZXQgdG8gdGhlIHBvc2l0aW9uIGF0dHJpYnV0ZS5cclxuICAgICAqL1xyXG4gICAgZGlzcGxheUltYWdlczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGltID09PSBkaXNwbGF5SW1hZ2VzLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIGRpc3BsYXlJbWFnZXNbMF0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltICsgMV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gQ3VzdG9tIGRyb3Bkb3duIG1lbnVcclxuLy9cclxuLy8gUkVMQVRFRCBGSUxFUzpcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gX2Ryb3Bkb3duLW1lbnUuc2Nzc1xyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBQcm92aWRlcyBmdW5jdGlvbnMgZm9yIGEgY3VzdG9tIGRyb3Bkb3duIG1lbnUuXHJcbi8vIFRoZSBmdW5jdGlvbnMgd2lsbCB3b3JrIGZvciBkcm9wZG93biBtZW51cyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcclxuLy9cclxuLy8gPGZvcm0+XHJcbi8vICAgLi4uXHJcbi8vICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiPlxyXG4vLyAgICAgICA8c3Bhbj5Db2xvdXI8L3NwYW4+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zXCI+XHJcbi8vICAgICAgIDxsYWJlbCBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCIgZm9yPVwiY29sb3VyLXJlZFwiPlxyXG4vLyAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiXHJcbi8vICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuLy8gICAgICAgICBuYW1lPVwiZi1jb2xvdXJcIlxyXG4vLyAgICAgICAgIGlkPWNvbG91ci1yZWRcclxuLy8gICAgICAgICB2YWx1ZT1cInJlZFwiXHJcbi8vICAgICAgID5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIDwvZGl2PlxyXG4vLyAgIC4uLlxyXG4vLyA8L2Zvcm0+XHJcblxyXG4vLyBDU1Mgc2hvdWxkIGJlIHNldCB1cCB0byBoaWRlIHRoZSBpbnB1dCB0YWdzIGFuZCByZWx5IG9uIHRoZSBsYWJlbHMgdG8gc2VsZWN0XHJcbi8vIHRoZSByYWRpbyBidXR0b24uXHJcbi8vXHJcbi8vIEZVTkNUSU9OUzpcclxuLy8gLS0tLS0tLS0tLVxyXG4vLyAgLSBXaGVuIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBtZW51LCBleHBhbmQgdGhlIGxpc3Qgb2Ygb3B0aW9ucy5cclxuLy8gIC0gV2hlbiB1c2VyIHByZXNzZXMgYW4gb3B0aW9uLCBoaWdobGlnaHQgdGhhdCBvcHRpb24sIHVwZGF0ZSB0aGVcclxuLy8gICAgYnV0dG9uJ3MgaW5uZXIgdGV4dCB0byBtYXRjaCB0aGF0IG9mZiB0aGUgYnV0dG9uIHRleHQuXHJcbi8vICAtIFdoZW4gdXNlciBjbGlja3Mgb3V0c2lkZSwgY2xvc2UgYWxsIG1lbnVzLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRHJvcGRvd25NZW51IENsYXNzXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnUge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBjdXN0b20gZHJvcGRvd24gbWVudXMuXHJcbiAgICogVGhlc2UgaW5jbHVkZTpcclxuICAgKiAgLSBUb2dnbGUgb3Blbi9jbG9zZSBvZiB0aGUgbWVudSBvbiBjbGlja2luZyB0aGUgYnV0dG9uXHJcbiAgICogIC0gQ2xvc2UgdGhlIG1lbnUgb24gY2xpY2tpbmcgb3V0c2lkZVxyXG4gICAqICAtIE9uIHNlbGVjdGluZyBhbiBpdGVtOlxyXG4gICAqICAgIC0gSGlnaGxpZ2h0IHRoYXQgaXRlbVxyXG4gICAqICAgIC0gQ2hhbmdlIHRoZSB0ZXh0IG9mIHRoZSBidXR0b24gdGhlIHRleHQgb2YgdGhlIG9wdGlvbiBzZWxlY3RlZFxyXG4gICAqXHJcbiAgICogTm90ZTogdGhpcyBjbGFzcyB3aWxsIG5vdCBoYW5kbGUgQVBJIGNhbGxzLlxyXG4gICAqL1xyXG5cclxuICBkZE1lbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgIFwiZHJvcGRvd24tbWVudVwiXHJcbiAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQWRkcyBmdW5jdGlvbiB0byBjbG9zZSBhbGwgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGVsZW1lbnRcclxuICAgIHRoaXMuY2xvc2VfbWVudSgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSBmdW5jdGlvbnMgZm9yIGFsbCBtZW51IGVsZW1lbnRzLlxyXG4gICAgZm9yIChsZXQgbWVudUlkID0gMDsgbWVudUlkIDwgdGhpcy5kZE1lbnVzLmxlbmd0aDsgbWVudUlkKyspIHtcclxuICAgICAgdGhpcy5idWlsZF9tZW51KHRoaXMuZGRNZW51c1ttZW51SWRdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsb3NlX21lbnUoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyBhbGwgbWVudXMgd2hlbiBjbGlja2VkIG91dHNpZGUgb24gYW5vdGhlciBmaWx0ZXIgYnV0dG9uLlxyXG4gICAgICogQWxzbyBjYXJyaWVzIGZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBuYXYtbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiXHJcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgb3B0aW9uTGlzdHMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgIG9wdGlvbkxpc3RzW2lkeF0uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5hdlN1Yk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIlxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyQnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEJ0biA9IGZpbHRlckJ0bnNbaV07XHJcblxyXG4gICAgICBzZWxlY3RlZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIENsb3NlIG5hdiBtZW51c1xyXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG5hdlN1Yk1lbnVzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgIG5hdlN1Yk1lbnVzW2lkeF0uY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG9zZSBhbGwgb3RoZXIgZmlsdGVycyBsaXN0c1xyXG4gICAgICAgIC8vIEVhY2ggYnV0dG9uIGFuZCB0aGVpciBjaGlsZCBlbGVtZW50cyBjb250YWluIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBcImZpbHRlci1mb3JcIi5cclxuICAgICAgICAvLyBMaWtld2lzZSwgZWFjaCBkcm9wZG93biBvcHRpb24gZGl2IGNvbnRhaW4gdGhlIHNhbWUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gVGhpcyBjaGVja3MgZm9yIHRoZSBidXR0b24gcHJlc3NlZCwgaWYgaXRzIFwiZmlsdGVyLWZvclwiIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIG1hdGNoZXMgdGhhdCBvZiBpdHMgZHJvcGRvd24gb3B0aW9ucy4gaWYgbm90LCB0aGVuIGNsb3NlLlxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmlsdGVyQnRucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IGZpbHRlckJ0bnNbal07XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikgIT1cclxuICAgICAgICAgICAgc2VsZWN0ZWRCdG4uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIEp1c3QgaW5jYXNlIHRoZSBzdHJ1Y3R1cmUgY2hhbmdlcywgYW5kIHRoZSBuZXh0IHNpYmxpbmcgaW5zIG5vdCB0aGUgb3B0aW9ucyBsaXN0XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZyEuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGJ1aWxkX21lbnUoZGRNZW51OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIGVhY2ggZHJvcGRvd24gbWVudS5cclxuICAgICAqL1xyXG4gICAgY29uc3Qgb3B0aW9uc0J0biA9IGRkTWVudS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCJcclxuICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcHRpb25zTGlzdENvbnRhaW5lciA9IGRkTWVudS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0SXRlbXMgPSBvcHRpb25zTGlzdENvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MTGFiZWxFbGVtZW50PjtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBvbiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoaWNoIHdpbGwgb3Blbi9jbG9zZSB0aGUgb3B0aW9uc1xyXG4gICAgLy8gbGlzdC5cclxuICAgIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIG9wdGlvbnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgc2V0dXAgZm9yIGVhY2ggb3B0aW9uXHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgb3B0aW9uSXRlciA9IDA7XHJcbiAgICAgIG9wdGlvbkl0ZXIgPCBvcHRpb25zTGlzdEl0ZW1zLmxlbmd0aDtcclxuICAgICAgb3B0aW9uSXRlcisrXHJcbiAgICApIHtcclxuICAgICAgbGV0IGxpc3RJdGVtID0gb3B0aW9uc0xpc3RJdGVtc1tvcHRpb25JdGVyXTtcclxuICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGhpZ2hsaWdodCBmcm9tIGFsbCBsaXN0IGl0ZW1zIGFuZCByZWFwcGx5IHRvIHRoZSBzZWxlY3RlZFxyXG4gICAgICAgIC8vIGxpc3QgaXRlbSBvbmx5XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBvcHRpb25TdWJJdGVyID0gMDtcclxuICAgICAgICAgIG9wdGlvblN1Ykl0ZXIgPCBvcHRpb25zTGlzdEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgIG9wdGlvblN1Ykl0ZXIrK1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgb3B0aW9uc0xpc3RJdGVtc1tvcHRpb25TdWJJdGVyXS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsLS1zZWxlY3RlZFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWwtLXNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHRleHQgb2YgdGhlIGJ1dHRvbiB0byB0aGUgdGV4dCBvZiB0aGUgc2VsZWN0ZWQgaXRlbVxyXG4gICAgICAgIG9wdGlvbnNCdG4uaW5uZXJUZXh0ID0gbGlzdEl0ZW0uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGhpZGRlbiBpbnB1dCB2YWx1ZXNcclxuICAgICAgICAvLyBDbG9zZSB0aGUgbWVudVxyXG4gICAgICAgIG9wdGlvbnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDAxLzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBOYXZpZ2F0aW9uIGJhci5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyAxLiBDb250cm9scyB0aGUgc3RhdGUgb2YgdGhlIG5hdmlnYXRpb24gc3ViLW1lbnVzIGFuZCBjb250cm9scyBob3cgYW5kIHdoZW5cclxuLy8gICAgaXQgZXhwYW5kcyBhbmQgY2xvc2VzLlxyXG4vLyAyLiBDb250cm9scyB0aGUgc3RhdGUgb2YgdGhlIGJhc2tldCBhbmQgc28gc28gdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGVcclxuLy8gICAgYmFza2V0LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIHtcclxuICAvKipcclxuICAgKiBTZXRzIHVwIHRoZSBmdW5jdGlvbnMgZm9yIHRoZSBuYXZpZ2F0aW9uLlxyXG4gICAqIFRoZXNlIGluY2x1ZGU6XHJcbiAgICogIC0gQ2xvc2luZyBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUuXHJcbiAgICogIC0gT3BlbmluZy9DbG9zaW5nIG1lbnVzIG9uIGNsaWNrXHJcbiAgICovXHJcbiAgbWVudUJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2X19vcHRpb25fX2J0blwiKTtcclxuICBuYXZTdWJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIik7XHJcbiAgdG9nZ2xlU2hvd05hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X190b2dnbGVfX2J0blwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQWRkcyBmdW5jdGlvbiB0byBjbG9zZSBhbGwgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGVsZW1lbnRcclxuICAgIHRoaXMuY2xvc2VfbWVudSgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSBmdW5jdGlvbnMgZm9yIGFsbCBtZW51IGVsZW1lbnRzLlxyXG4gICAgZm9yIChjb25zdCBtZW51QnRuIG9mIHRoaXMubWVudUJ0bnMgYXMgYW55KSB7XHJcbiAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3ViTWVudUN0cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSByZXNwb25zaXZlIGZ1bmN0aW9ucyBmb3IgdGhlIHRvZ2dsZSBidXR0b25zLlxyXG4gICAgdGhpcy5uYXZfdG9nZ2xlX2J0bigpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xvc2VfbWVudSgpIHtcclxuICAgIC8qKlxyXG4gICAgICogY2xvc2VzIGFsbCBtZW51cyB3aGVuIGNsaWNrZWQgb3V0c2lkZSBwciBhbm90aGVyIG5hdiBtZW51LlxyXG4gICAgICogQWxzbyB3aWxsIGNsb3NlIGFsbCBmaWx0ZXIgbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBDbG9zZSBhbGwgbmF2LW1lbnVzIG9uIGNsaWNrIG91dHNpZGVcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHRoaXMubmF2U3ViTWVudXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgIHRoaXMubmF2U3ViTWVudXNbaWR4XS5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZW51QnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBtZW51QnRuID0gdGhpcy5tZW51QnRuc1tpXTtcclxuXHJcbiAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBDbG9zZSBhbGwgZHJvcGRvd24tbWVudXNcclxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbkxpc3Qgb2Ygb3B0aW9uTGlzdHMgYXMgYW55KSB7XHJcbiAgICAgICAgICBvcHRpb25MaXN0LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xvc2Ugb3RoZXIgbmF2aWdhdGlvbiBtZW51c1xyXG4gICAgICAgIC8vIEVhY2ggYnV0dG9uIGFuZCB0aGVpciBjaGlsZCBlbGVtZW50cyB3aWxsIGNvbnRhaW4gdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFwiZmlsdGVyLWZvclwiLlxyXG4gICAgICAgIC8vIExpa2V3aXNlLCBlYWNoIGRyb3Bkb3duIG1lbnUgY29udGFpbiB0aGUgc2FtZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBUaGlzIGNoZWNrcyBmb3IgdGhlIGJ1dHRvbiBwcmVzc2VkLCBpZiBpdHMgXCJmaWx0ZXItZm9yXCIgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gbWF0Y2hlcyB0aGF0IG9mIGl0cyBkcm9wZG93biBvcHRpb25zLiBpZiBub3QsIHRoZW4gY2xvc2UuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1lbnVCdG5zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gdGhpcy5tZW51QnRuc1tqXTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW0uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKSAhPVxyXG4gICAgICAgICAgICBtZW51QnRuLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmc/LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3ViTWVudUN0cmwoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2lsbCBoYW5kbGUgY2xpY2sgZXZlbnRzIG9uIHRoZSBuYXZpZ2F0aW9uIGZvciBleHBhbmRpbmdcclxuICAgICAqIGFuZCBjb2xsYXBzaW5nIHRoZSBzdWItbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50c1xyXG4gICAgdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHRhcmdldENsYXNzZXMgPSB0YXJnZXQuY2xhc3NMaXN0O1xyXG4gICAgbGV0IHN1Yk1lbnU6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGlmICh0YXJnZXRDbGFzc2VzLmNvbnRhaW5zKFwibmF2LXN1Yi1wcm9kdWN0c1wiKSkge1xyXG4gICAgICBzdWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy5uYXYtc3ViLXByb2R1Y3RzXCJcclxuICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0Q2xhc3Nlcy5jb250YWlucyhcIm5hdi1zdWItcm9vbXNcIikpIHtcclxuICAgICAgc3ViTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMubmF2LXN1Yi1yb29tc1wiXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBcIk5hdmlnYXRpb24gZWxlbWVudCBkb2VzIG5vdCBleGlzdC5cIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXhwYW5kZWQgPSBzdWJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIlxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZXhwYW5kZWQpIHtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCIpO1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIik7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgbmF2X3RvZ2dsZV9idG4oKSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIG5hdmlnYXRpb24gdG9nZ2xlIGJ1dHRvbiAtIGEgcmVzcG9uc2l2ZVxyXG4gICAgICogZmVhdHVyZSB2aWV3YWJsZSB3aGVuIHRoZSBzY3JlZW4gd2lkdGggaXMgc21hbGwgZW5vdWdoLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3QgPSBbXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZfX29wdGlvblwiKSxcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X19hY2NvdW50LWJhc2tldCcpXHJcbiAgICBdO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU2hvd05hdkJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9uc0xpc3RbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIG9wdGlvbnNMaXN0W2ldW2pdLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtb3B0aW9uLS1zaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVVJQT1NFXHJcbi8vIC0tLS0tLS1cclxuLy8gRW5hYmxlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgcXVhbnRpdHkgY29tcG9uZW50LCB0aHVzIGVuYWJsaW5nICsvLVxyXG4vLyBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbiB0aGUgaW5wdXQgYm94LlxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTXHJcbi8vIC0tLS0tLS0tLS0tLS1cclxuLy8gX3F1YW50aXR5LnNjc3NcclxuLy9cclxuLy8gSFRNTCBGT1JNQVRcclxuLy8gLS0tLS0tLS0tLS1cclxuLy8gPGRpdiBjbGFzcz1cImMtcXVhbnRpdHlcIj5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LWRvd25cIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vICAgPGlucHV0IGNsYXNzPVwiYy1xdWFudGl0eV9faW5wdXRcIiB0eXBlPVwibnVtYmVyXCIvPlxyXG4vLyAgIDxidXR0b24gY2xhc3M9XCJjLXF1YW50aXR5X19idG5cIiBjb250cm9sPVwicXVhbnRpdHktdXBcIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gSW1wb3J0c1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUXVhbnRpdHlDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBmdW5jdGlvbmFsaXR5IG9udG8gdGhlIHF1YW50aXR5IGNvbXBvbmVudCB0aHVzIGVuYWJsaW5nIHRoZSArLy1cclxuICAgKiBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbnNpZGUgdGhlIGlucHV0IGJveC5cclxuICAgKi9cclxuXHJcbiAgY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICBcImMtcXVhbnRpdHlcIlxyXG4gICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAqL1xyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbnRhaW5lcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9zZXRfZWxlbWVudHModGhpcy5jb250YWluZXJzW2NdKTtcclxuICAgICAgY29uc3QgYnRuRG93biA9IGVsZW1lbnRzWzBdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBidG5VcCA9IGVsZW1lbnRzWzFdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBpbnB1dEJveCA9IGVsZW1lbnRzWzJdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IE51bWJlcihpbnB1dEJveC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpO1xyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IE51bWJlcihpbnB1dEJveC5nZXRBdHRyaWJ1dGUoXCJtYXhcIikpO1xyXG5cclxuICAgICAgdGhpcy5fYnVpbGRfbWludXNfYnV0dG9uKGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgICAgdGhpcy5fYnVpbGRfcGx1c19idXR0b24oYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgICB0aGlzLl9idWlsZF9pbnB1dF9ib3goYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfc2V0X2VsZW1lbnRzKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBjb250YWluZXIsIHdpbGwgcmV0dXJuIHRoZSBidXR0b25zIGFuZCBpbnB1dCBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYnRuRG93biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS1kb3duXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGJ0blVwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICdidXR0b25bY29udHJvbD1cInF1YW50aXR5LXVwXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0Qm94ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiaW5wdXQuYy1xdWFudGl0eV9faW5wdXRcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiBbYnRuRG93biwgYnRuVXAsIGlucHV0Qm94XTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX21pbnVzX2J1dHRvbihcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGlja2luZyB0aGUgbWludXMgYnV0dG9uLCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGJ1dCB3aWxsIHJlZHVjZVxyXG4gICAgICogYnkgb25lIHVudGlsIGl0IHJlYWNoZXMgaXRzIG1pbmltdW0gdmFsdWUsIGF0IHdoaWNoIHBvaW50LCB0aGUgYnV0dG9uXHJcbiAgICAgKiBiZWNvbWVzIGRpc2FibGVkLiBBbHNvIHdpbGwgcmVtb3ZlIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgcGx1c1xyXG4gICAgICogYnV0dG9uIGlmIGl0IGlzIGxlc3MgdGhhbiB0aGUgbWF4VmFsdWUuXHJcbiAgICAgKi9cclxuXHJcbiAgICBidG5Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChidG5Eb3duLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGlucHV0Qm94LnZhbHVlID0gU3RyaW5nKE51bWJlcihpbnB1dEJveC52YWx1ZSkgLSAxKTtcclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPCBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA9PT0gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfcGx1c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIHBsdXMgYnV0dG9uLCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGJ1dCB3aWxsIGluY3JlYXNlZFxyXG4gICAgICogYnkgb25lIHVudGlsIGl0IHJlYWNoZXMgaXRzIG1heGltdW0gdmFsdWUsIGF0IHdoaWNoIHBvaW50LCB0aGUgYnV0dG9uXHJcbiAgICAgKiBiZWNvbWVzIGRpc2FibGVkLiBBbHNvIHdpbGwgcmVtb3ZlIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgbWludXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBncmVhdGVyIHRoYW4gdGhlIG1pblZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGJ0blVwLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGlucHV0Qm94LnZhbHVlID0gU3RyaW5nKE51bWJlcihpbnB1dEJveC52YWx1ZSkgKyAxKTtcclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPiBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgYnRuRG93bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpID09PSBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfaW5wdXRfYm94KFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uY2UgYSBuZXcgdmFsdWUgaGFzIGJlZW4gZW50ZXJlZCBpbnRvIHRoZSBpbnB1dCBib3gsXHJcbiAgICAgKiBkaXNhYmxlL3JlLWVuYWJsZSB0aGUgcGx1cyBhbmQgbWludXMgYnV0dG9ucyBpbiBhY2NvcmRhbmNlIHdpdGggd2hldGhlclxyXG4gICAgICogdGhlIHZhbHVlIGlzIGVxdWFsIHRvIHRoZSBtaW4vbWF4IHZhbHVlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXRCb3gudmFsdWUpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIHZhbGlkLiBJZiBub3QsIHVwZGF0ZSBhdHRyaWJ1dGVzIHRoZSBoaWdobGlnaHRcclxuICAgICAgLy8gdGhpcyB0byB0aGUgdXNlciBhbmQgZGlzYWJsZSBidXR0b25zLlxyXG4gICAgICBpZiAoVmFsaWRhdGlvbi5jaGVja19pZl9wb3NpdGl2ZV9pbnQodmFsdWUpKSB7XHJcbiAgICAgICAgLy8gSW5jYXNlIHRoZSBidXR0b25zIHdlcmUgcHJldmlvdXNseSBkaXNhYmxlZCwgcmVzZXQgYnkgcmUtZW5hYmxpbmdcclxuICAgICAgICAvLyBldmVyeXRoaW5nLlxyXG4gICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgaW5wdXRCb3gucGFyZW50RWxlbWVudCEucmVtb3ZlQXR0cmlidXRlKCdpbnZhbGlkJyk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgdGhlIG1pbiB2YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA8PSBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgYWdhaW5zdCBidG5VcCdzIG1heCB2YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA+PSBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB2YWx1ZSBpcyBlaXRoZXIgPCAwIG9yIGEgZmxvYXQuXHJcbiAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgaW5wdXRCb3gucGFyZW50RWxlbWVudCEuc2V0QXR0cmlidXRlKCdpbnZhbGlkJywgJ3RydWUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDgvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBNYW5hZ2VzIHRoZSBzZWFyY2ggZmlsdGVycyBvbiB0aGUgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBSZXNwb25zaWJsZSBmb3IgY2FsbGluZyB0aGUgc2VhcmNoIEFQSSB3aGljaCB3aWxsIGZpbHRlciByZXN1bHQgYmFzZWQgb25cclxuLy8gd2hhdCB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdXNpbmcgdGhlIGZpbHRlcnMuXHJcbi8vXHJcbi8vIFdpbGwgdXNlIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBiYXIncyBmb3JtIHRvIGludGVyYWN0IHdpdGggdGhlIEFQSS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJzIHtcclxuICAvKipcclxuICAgKiBXaWxsIGV4cGFuZCB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggYmFyIGFuZCB0aGUgZm9ybSBlbGVtZW50IHRvIGFsbG93IGl0IHRvXHJcbiAgICogdGFrZSBpbiB0aGUgZmlsdGVyIG9wdGlvbnMgYXMgcGFydCBvZiB0aGUgR0VUIHJlcXVlc3Qgd2hlbmV2ZXIgYSB1c2VyXHJcbiAgICogaW5pdGlhdGVzIGEgc2VhcmNoLlxyXG4gICAqXHJcbiAgICogQ2FsbHMgdGhlIEFQSSB0byBmaWx0ZXIgdGhlIHJlc3VsdHMuXHJcbiAgICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciBkb2VzIG5vdCByZXF1aXJlIGFueSBhcmd1bWVudHMgYW5kIHdpbGwgaW5zdGVhZCB1c2VcclxuICAgICAqIGVsZW1lbnRzIGZyb20gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZXhwYW5kX25hdl9zZWFyY2goKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9leHBhbmRfbmF2X3NlYXJjaCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogRXhwYW5kcyBvbiB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggZWxlbWVudHMgc28gdGhhdCB3aGVuIHNlbmRpbmcgYSBHRVRcclxuICAgICAqIHJlcXVlc3QsIGZpbHRlcnMgd2lsIGJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG5hdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcIm5hdl9fc2VhcmNoXCJcclxuICAgIClbMF0gYXMgSFRNTEZvcm1FbGVtZW50O1xyXG5cclxuICAgIC8vIEFkZCBoaWRkZW4gaW5wdXRzIHRvIGNvbnRhaW4gdGhlIHZhbHVlcyBvbiB0aGUgZmlsdGVycy5cclxuICAgIGNvbnN0IGlucHV0TmFtZXMgPSBbXCJmLW1pblByaWNlXCIsIFwiZi1tYXhQcmljZVwiLCBcImYtY2F0ZWdvcnlcIiwgXCJmLWNvbG91clwiXTtcclxuICAgIGZvciAoY29uc3QgaW5wdXROYW1lIG9mIGlucHV0TmFtZXMpIHtcclxuICAgICAgY29uc3QgaGlkZGVuSW5wdXROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcclxuICAgICAgICBcIklOUFVUXCJcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0TmFtZSk7XHJcbiAgICAgIG5hdkZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuSW5wdXROb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGhpZGRlbiBpbnB1dHMgd2hlbiBhIGZpbHRlciBpcyBzZWxlY3RlZFxyXG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgZm9yIChsZXQgb3B0ID0gMDsgb3B0IDwgZHJvcGRvd25PcHRpb25zLmxlbmd0aDsgb3B0KyspIHtcclxuICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBkcm9wZG93bk9wdGlvbnNbb3B0XTtcclxuICAgICAgbGV0IGhpZGRlbklucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgc3dpdGNoIChkcm9wZG93bk9wdGlvbi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpKSB7XHJcbiAgICAgICAgY2FzZSBcIm1pbi1wcmljZVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJtYXgtcHJpY2VcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1tYXhQcmljZVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY2F0ZWdvcnlcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1jYXRlZ29yeVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY29sb3VyXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZi1jb2xvdXJcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGhpZGRlbklucHV0KSB7XHJcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgaGlkZGVuSW5wdXQhLnZhbHVlID0gZHJvcGRvd25PcHRpb24ucHJldmlvdXNFbGVtZW50U2libGluZyEudGV4dENvbnRlbnQhO1xyXG5cclxuICAgICAgICAgIC8vIENhbGxzIHRoZSBzZWFyY2ggcmVzdWx0IEFQSSBhbmQgdGhlbiBmaWx0ZXIgdGhlIHJlc3VsdHMuXHJcbiAgICAgICAgICBjb25zdCBBUElQYXRoID0gdGhpcy5fQVBJX3BhdGgoKTtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KSBhcyBbXTtcclxuICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJfcmVzdWx0cyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9BUElfcGF0aCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBBUEkgaHJlZiBwYXRoIHdoZXJlIHRoZSByZXF1ZXN0IHdpbGwgYmUgc2VudC5cclxuICAgICAqIFRoaXMgaW1wbGVtZW50cyB0aGUgZmlsdGVycyB3aXRoaW4gdGhlIGFjdHVhbCBVUkwuXHJcbiAgICAgKi9cclxuICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcIi9zZWFyY2gvXCIsIFwiL3NlYXJjaC1yZXN1bHRzL1wiKTtcclxuXHJcbiAgICBjb25zdCBoaWRkZW5Jbk1pblByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1taW5QcmljZVwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoaWRkZW5Jbk1heFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1tYXhQcmljZVwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoaWRkZW5JbkNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1jYXRlZ29yeVwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoaWRkZW5JbkNvbG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImYtY29sb3VyXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaGlkZGVuSW5NaW5QcmljZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtbWluUHJpY2U9XCIgKyBoaWRkZW5Jbk1pblByaWNlLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1taW5QcmljZT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLW1pblByaWNlPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluTWF4UHJpY2UudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLW1heFByaWNlPVwiICsgaGlkZGVuSW5NYXhQcmljZS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtbWF4UHJpY2U9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1tYXhQcmljZT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5JbkNhdGVnb3J5LnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1jYXRlZ29yeT1cIiArIGhpZGRlbkluQ2F0ZWdvcnkudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLWNhdGVnb3J5PS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtY2F0ZWdvcnk9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5Db2xvdXIudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLWNvbG91cj1cIiArIGhpZGRlbkluQ29sb3VyLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1jb2xvdXI9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1jb2xvdXI9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaHJlZjtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9maWx0ZXJfcmVzdWx0cyhBUElSZXN1bHRzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXJzIHRoZSByZXN1bHRzIG9uIHRoZSBzZWFyY2ggcGFnZSBpbiBhY2NvcmRhbmNlIHRvIHRoZSBkYXRhXHJcbiAgICAgKiByZXRyaWV2ZWQgZnJvbSB0aGUgc2VhcmNoIEFQSS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzJylbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcmlnUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHNfX3Jlc3VsdCcpO1xyXG5cclxuICAgIGxldCB2YWxpZFByb2R1Y3RzID0gW107XHJcbiAgICByZXN1bHQ6IEpTT047XHJcbiAgICBmb3IgKGNvbnN0IHJlc3VsdCBpbiBBUElSZXN1bHRzKSB7XHJcbiAgICAgIHZhbGlkUHJvZHVjdHMucHVzaChBUElSZXN1bHRzW3Jlc3VsdF0ucHJvZHVjdF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgcklEID0gMDsgcklEPG9yaWdSZXN1bHRzLmxlbmd0aDsgcklEKyspIHtcclxuICAgICAgaWYgKHZhbGlkUHJvZHVjdHMuaW5jbHVkZXMoTnVtYmVyKG9yaWdSZXN1bHRzW3JJRF0uZ2V0QXR0cmlidXRlKCdJRCcpISkpKSB7XHJcbiAgICAgICAgb3JpZ1Jlc3VsdHNbcklEXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3JpZ1Jlc3VsdHNbcklEXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDI4LzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb250YWlucyBpbXBvcnRzIG9mIGFsbCB0aGUgbWFpbiBjbGFzc2VzLlxyXG4vLyBCZWhhdmVzIGFzIHRoZSBtYWluIGh1YiBmb3IgdGhlIGpzIGJ1bmRsZS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnVcIjtcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3F1YW50aXR5XCI7XHJcbmltcG9ydCB7IFNlYXJjaEZpbHRlcnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaF9maWx0ZXJzXCI7XHJcbmltcG9ydCB7IEV4dGVuZFByb2R1Y3RQYWdlIH0gZnJvbSBcIi4vcGFnZXMvcHJvZHVjdHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEltZ3MgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3NcIjtcclxuaW1wb3J0IHsgQmFza2V0U3RhdGUgfSBmcm9tIFwiLi9zdGF0ZS9iYXNrZXQtaXRlbXNcIjtcclxuaW1wb3J0IHsgQmFza2V0UGFnZSB9IGZyb20gXCIuL3BhZ2VzL2Jhc2tldC9iYXNrZXRcIjtcclxuXHJcbi8vIEJ1aWxkIHRoZSBuYXZpZ2F0aW9uXHJcbm5ldyBOYXZpZ2F0aW9uKCk7XHJcblxyXG4vLyBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBiYXNrZXRcclxubmV3IEJhc2tldFN0YXRlKCk7XHJcblxyXG4vLyBCdWlsZCB0aGUgZHJvcGRvd24gbWVudVxyXG5uZXcgRHJvcGRvd25NZW51KCk7XHJcblxyXG4vLyBCdWlsZCB0aGUgc2VhcmNoIGZpbHRlcnNcclxubmV3IFNlYXJjaEZpbHRlcnMoKTtcclxuXHJcbmlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIi9wcm9kdWN0cy9cIikpIHtcclxuICBuZXcgRXh0ZW5kUHJvZHVjdFBhZ2UoKTtcclxuICBuZXcgUXVhbnRpdHlDb21wb25lbnQoKTtcclxuICBuZXcgQ2Fyb3VzZWxJbWdzKCk7XHJcbn1cclxuXHJcbmlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIi9iYXNrZXQvXCIpKSB7XHJcbiAgbmV3IEJhc2tldFBhZ2UoKTtcclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA1LzAxLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gVGhlIGJhc2tldCBwYWdlLlxyXG4vL1xyXG4vLyBGVU5DVElPTkFMSVRZXHJcbi8vIC0gQ2FsbHMgdGhlIGJhc2tldC1pbmZvLUFQSSB3aGVyZSB1c2luZyB0aGUgbG9jYWwgc3RvcmFnZSBpdCBpcyBhYmxlIHRvIHNlbmRcclxuLy8gICBhIEdFVCByZXF1ZXN0IHRvIHRlaCBBUEkgc2l0ZSB1c2luZyB0aGUgcHJpbWFyeSBrZXlzIG9mIHRoZSBpdGVtcyBpbiB0aGVcclxuLy8gICBiYXNrZXQuXHJcbi8vIC0gQnVpbGRzIHBhcnQgb2YgdGhlIERPTSB3aGljaCB3aWxsIGRpc3BsYXkgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHdoYXQgaXMgaW5cclxuLy8gICBiYXNrZXQuXHJcbi8vIC0gU2V0cyBrZXkgYmluZGVycyBvbiB0aGUgcXVhbnRpdHkgb3B0aW9uIGFuZCBcInhcIiBvcHRpb24gc28gdGhhdCBpdCB1cGRhdGVzXHJcbi8vICAgdGhlIGJhc2tldC5cclxuLy8gLSBVcGRhdGVzIHRvdGFscyBzZWN0aW9uIG9uIGxvYWQgaWYgdGhlcmUgaXMgc29tZXRoaW5nIGluIHRoZSBiYXNrZXQuXHJcbi8vIC0gU2V0IGtleSBiaW5kZXJzIHNvIHRoYXQgd2hlbmV2ZXIgdGhlcmUgaXMgYSBjaGFuZ2UgdG8gdGhlIGJhc2tldCBpdGVtcyxcclxuLy8gICB0aGUgdG90YWxzIHdpbGwgYWxzbyB1cGRhdGUuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBJTVBPUlRTXHJcbmltcG9ydCB7IFZhbGlkYXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgQmFza2V0U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcbmltcG9ydCB7IFF1YW50aXR5Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVhbnRpdHlcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBCYXNrZXRQYWdlIGV4dGVuZHMgQmFza2V0U3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgYnVpbGQgZWxlbWVudHMgb250byBiYXNrZXQgcGFnZSB1c2luZyBhbiBBUEkgdG8gcmV0cmlldmVcclxuICAgKiBpbmZvcm1hdGlvbiBvbiBwcm9kdWN0cyBjdXJyZW50bHkgaW4gdGhlIHVzZXIncyBiYXNrZXQgKGluZm9ybWF0aW9uXHJcbiAgICogc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2UpXHJcbiAgICovXHJcblxyXG4gIC8vIFRoZSBtYWluIGxvY2F0aW9uIGFzIHRvIHdoZXJlIGVhY2ggcHJvZHVjdCB3aWxsIGJlIGluc2VydGVkIGZyb20gdGhlXHJcbiAgLy8gdXNlcidzIGJhc2tldC5cclxuICBzdW1tYXJ5SXRlbXNQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYmFza2V0LXN1bW1hcnktZGF0YVwiXHJcbiAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgYmFza2V0SXRlbXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBwcm9jZXNzIGluIHdoaWNoIHRoZSBiYXNrZXQgcGFnZSBET00gaXMgYnVpbGQuXHJcbiAgICAgKi9cclxuICAgIHN1cGVyKCk7XHJcbiAgICBpZiAodGhpcy5pdGVtcyAhPSBudWxsICYmIHRoaXMuaXRlbXMgIT0gXCJ7fVwiKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIEpTT04ucGFyc2UodGhpcy5pdGVtcykpIHtcclxuICAgICAgICB0aGlzLmJhc2tldEl0ZW1zLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYmFza2V0SXRlbXNTdHIgPSB0aGlzLmJhc2tldEl0ZW1zLmpvaW4oXCIsXCIpO1xyXG5cclxuICAgICAgLy8gQ2FsbCBBUElcclxuICAgICAgY29uc3QgQVBJUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgICAgL2Jhc2tldC4qLyxcclxuICAgICAgICBcImJhc2tldC1pbmZvLUFQSS8/cGtzPVwiICsgYmFza2V0SXRlbXNTdHJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgY29uc3QgQVBJUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIGlmIChBUElSZXNwb25zZS5wcm9kdWN0c0luZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZF9iYXNrZXRfc3VtbWFyeShBUElSZXNwb25zZS5wcm9kdWN0c0luZm8pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9iYXNrZXRfc3VtbWFyeShhbGxQcm9kdWN0czogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIGVhY2ggZWxlbWVudCBpbnRvIHRoZSBET00gaW5zaWRlIHRoZSB0YXJnZXQgcGFyZW50IGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgY29uc3QgcHJvZHVjdFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9iYXNrZXQuKi8sIFwicHJvZHVjdHMvXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwcm9kdWN0ID0gYWxsUHJvZHVjdHNbaV07XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gTnVtYmVyKEpTT04ucGFyc2UodGhpcy5pdGVtcylbcHJvZHVjdC5wcm9kdWN0SWRdKTtcclxuXHJcbiAgICAgIC8vIERpdiB0byBjb250YWluIGFsbCBwcm9kdWN0IGVsZW1lbnRzLCB3aGljaCB3aWxsIHRoZW4gYmUgYXBwZW5kZWRcclxuICAgICAgLy8gaW50byB0aGUgcGFyZW50IGVsZW1lbnQuXHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhYmxlX19yb3dcIjtcclxuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInByb2R1Y3QtaWRcIiwgcHJvZHVjdC5wcm9kdWN0SWQpO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBJbWFnZSBFbWJlZGRlZCBpbiBMaW5rIEVsZW1lbnRcclxuICAgICAgY29uc3QgaW1nQVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBpbWdBVGFnLmNsYXNzTmFtZSA9IFwidGFibGVfX2ZpZWxkIHRhYmxlX19maWVsZFwiO1xyXG4gICAgICBpbWdBVGFnLmhyZWYgPSBwcm9kdWN0UGFnZSArIHByb2R1Y3QucHJvZHVjdElkO1xyXG4gICAgICBpbWdBVGFnLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1pbWFnZVwiKTtcclxuICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltZ0VsZW0uc3JjID0gcHJvZHVjdC5pbWFnZTtcclxuICAgICAgaW1nRWxlbS5hbHQgPSBcIkltYWdlIG9mIFwiICsgcHJvZHVjdC5wcm9kdWN0TmFtZTtcclxuICAgICAgaW1nRWxlbS5jbGFzc05hbWUgPSBcInRhYmxlX19maWVsZCB0YWJsZV9fZmllbGQtLWltZ1wiO1xyXG4gICAgICBpbWdBVGFnLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBOYW1lXHJcbiAgICAgIGNvbnN0IG5hbWVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIG5hbWVFbGVtLmNsYXNzTmFtZSA9IFwidGFibGVfX2ZpZWxkXCI7XHJcbiAgICAgIG5hbWVFbGVtLmhyZWYgPSBwcm9kdWN0UGFnZSArIHByb2R1Y3QucHJvZHVjdElkO1xyXG4gICAgICBuYW1lRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtbmFtZVwiKTtcclxuICAgICAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBwcm9kdWN0LnByb2R1Y3ROYW1lO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBTdG9yZVxyXG4gICAgICBjb25zdCBzdG9yZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgc3RvcmVFbGVtLmNsYXNzTmFtZSA9IFwidGFibGVfX2ZpZWxkXCI7XHJcbiAgICAgIHN0b3JlRWxlbS5ocmVmID0gXCIjXCI7XHJcbiAgICAgIHN0b3JlRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3Qtc3RvcmVcIik7XHJcbiAgICAgIHN0b3JlRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3Quc3RvcmVOYW1lO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBDb2xvdXJcclxuICAgICAgY29uc3QgY29sb3VyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICBjb2xvdXJFbGVtLmNsYXNzTmFtZSA9IFwidGFibGVfX2ZpZWxkXCI7XHJcbiAgICAgIGNvbG91ckVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LWNvbG91clwiKTtcclxuICAgICAgY29sb3VyRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QuY29sb3VyTmFtZTtcclxuXHJcbiAgICAgIC8vIFF1YW50aXR5XHJcbiAgICAgIC8vIE5PVEU6IFRoZSBIVE1MIGZvcm1hdCBtdXN0IGZvbGxvdyB0aGUgc3RydWN0dXJlIGRlZmluZWQgaW4gdGhlIHF1YW50aXR5XHJcbiAgICAgIC8vIGNvbXBvbmVudC5cclxuICAgICAgY29uc3QgcXVhbnRpdHlDb250YWluZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eSB0YWJsZV9fZmllbGRcIjtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmlkID0gXCJwcm9kdWN0LVwiICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInF1YW50aXR5XCIpO1xyXG5cclxuICAgICAgY29uc3QgcXVhbnRpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBxdWFudGl0eUlucHV0LmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9faW5wdXRcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5taW4gPSBcIjBcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5zdGVwID0gXCIxXCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQubWF4ID0gcHJvZHVjdC5pbnZlbnRvcnk7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBpdGVtcy50b1N0cmluZygpO1xyXG4gICAgICBxdWFudGl0eUlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBhIHBvc2l0aXZlIGludGVnZXIgdGhlbiB0aGUgY2VydGFpbiB1cGRhdGVzXHJcbiAgICAgICAgLy8gd2lsbCB0YWtlIHBsYWNlLlxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGlmIChWYWxpZGF0aW9uLmNoZWNrX2lmX3Bvc2l0aXZlX2ludChOdW1iZXIocXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkpKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBncmVhdGVyIHRoYW4gdGhlIG1heCwgdGhlbiBzZXQgaXQgdG8gdGhlIG1heC5cclxuICAgICAgICAgIGxldCB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgIGlmICh2YWx1ZSA+IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCkpIHtcclxuICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IHF1YW50aXR5SW5wdXQubWF4O1xyXG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBsb2NhbCBzdG9yYWdlICh1c2VyJ3MgYmFza2V0KVxyXG4gICAgICAgICAgdGhpcy51cGRhdGVfc2luZ2xlX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHByaWNlXHJcbiAgICAgICAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSAodmFsdWUgKiBwcm9kdWN0LnByaWNlKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYmFza2V0IHRvdGFsc1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIG1pbnVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIG1pbnVzQnRuLnNldEF0dHJpYnV0ZShcImNvbnRyb2xcIiwgXCJxdWFudGl0eS1kb3duXCIpO1xyXG4gICAgICBtaW51c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX2FuX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHByb2R1Y3QucHJpY2UsIHByaWNlU3Bhbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBwbHVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIHBsdXNCdG4uc2V0QXR0cmlidXRlKFwiY29udHJvbFwiLCBcInF1YW50aXR5LXVwXCIpO1xyXG4gICAgICBwbHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5hZGRfYW5faXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgcHJvZHVjdC5wcmljZSwgcHJpY2VTcGFuKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbWludXNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIG1pbnVzQnRuU3Bhbi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiO1xyXG4gICAgICBtaW51c0J0blNwYW4udGV4dENvbnRlbnQgPSBcIi1cIjtcclxuXHJcbiAgICAgIGNvbnN0IHBsdXNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIHBsdXNCdG5TcGFuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI7XHJcbiAgICAgIHBsdXNCdG5TcGFuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcblxyXG4gICAgICBtaW51c0J0bi5hcHBlbmRDaGlsZChtaW51c0J0blNwYW4pO1xyXG4gICAgICBwbHVzQnRuLmFwcGVuZENoaWxkKHBsdXNCdG5TcGFuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKG1pbnVzQnRuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKHF1YW50aXR5SW5wdXQpO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQocGx1c0J0bik7XHJcblxyXG4gICAgICAvLyBQcmljZVxyXG4gICAgICBjb25zdCBwcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgcHJpY2VFbGVtLmNsYXNzTmFtZSA9IFwidGFibGVfX2ZpZWxkXCI7XHJcbiAgICAgIHByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtcHJpY2UtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgY29uc3QgcG91bmRJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHBvdW5kSS50ZXh0Q29udGVudCA9IFwiwqNcIjtcclxuICAgICAgcG91bmRJLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS1jdXJyZW5jeVwiKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHBvdW5kSSk7XHJcblxyXG4gICAgICBjb25zdCBwcmljZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgcHJpY2VTcGFuLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS12YWx1ZVwiKTtcclxuICAgICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gKE51bWJlcihwcm9kdWN0LnByaWNlKSAqIGl0ZW1zKS50b1N0cmluZygpO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocHJpY2VTcGFuKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSBJdGVtIEJ1dHRvblxyXG4gICAgICBjb25zdCByZW1vdmVJdGVtU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5jbGFzc05hbWUgPSBcInRhYmxlX19pY29uXCI7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicmVtb3ZlLWl0ZW1cIik7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgLy8gT24gcmVtb3ZhbCwgdXBkYXRlIHRoZSBET00gYW5kIHRoZSBiYXNrZXQvbG9jYWwgc3RvcmFnZSBhY2NvcmRpbmdseS5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJlbW92ZV93aG9sZV9pdGVtKHByb2R1Y3QucHJvZHVjdElkLCBjb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUl0ZW1JID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklcIik7XHJcbiAgICAgIHJlbW92ZUl0ZW1JLmNsYXNzTmFtZSA9IFwiZmEgZmEtdGltZXNcIjtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbUkpO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbVNwYW4pO1xyXG5cclxuICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIHRhcmdldCBlbGVtZW50LlxyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQVRhZyk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRWxlbSk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yZUVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3VyRWxlbSk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWFudGl0eUNvbnRhaW5lckVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2VFbGVtKTtcclxuICAgICAgdGhpcy5zdW1tYXJ5SXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIC8vIEFwcGx5IHRoZSBKYXZhU2NyaXB0IHRvIGVhY2ggcXVhbnRpdHkgY29tcG9uZW50LlxyXG4gICAgbmV3IFF1YW50aXR5Q29tcG9uZW50KCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV9iYXNrZXRfdG90YWxzKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSB0b3RhbHMgc2VjdGlvbiBpbiB0aGUgYmFza2V0IHBhZ2UuXHJcbiAgICAgKiBUaGUgSFRNTCBkZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHNldCB0aGUgbG9hZHMgdGhlIGVsZW1lbnRzIGFuZCBzZXQgdGhlXHJcbiAgICAgKiB2YWx1ZXMgdG8gwqMwLjAwIGZvciBlYWNoIGVsZW1lbnQuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgdXBkYXRlIHRoZSB0b3RhbHMuXHJcbiAgICAgKi9cclxuICAgIC8vIEJhc2tldCBFbGVtZW50cyBpbiB0aGUgRE9NXHJcbiAgICBjb25zdCBzdWJ0b3RhbEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldC1zdWJ0b3RhbFwiKSFcclxuICAgICAgLmNoaWxkcmVuWzFdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGNvbnN0IHZhdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldC12YXRcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB0b3RhbEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldC10b3RhbFwiKSFcclxuICAgICAgLmNoaWxkcmVuWzFdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgICAvLyBJbml0aWFsIFZhbHVlXHJcbiAgICBsZXQgdG90YWxQcmljZSA9IDA7XHJcblxyXG4gICAgLy8gUmV0cmlldmUgYWxsIGVsZW1lbnRzIHdoZXJlIHRoZXJlIGlzIGEgcHJpY2UgYW5kIGl0ZXJhdGl2ZWx5IHVwZGF0ZVxyXG4gICAgLy8gdGhlIHRvdGFsIHByaWNlLlxyXG4gICAgY29uc3QgcHJpY2VFbGVtcyA9IGRvY3VtZW50XHJcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImJhc2tldC1zdW1tYXJ5LWRhdGFcIikhXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX2ZpZWxkPltmaWVsZD1cInByb2R1Y3QtcHJpY2UtdmFsdWVcIl0nKTtcclxuXHJcbiAgICBmb3IgKGxldCBwcmljZUlkeCA9IDA7IHByaWNlSWR4IDwgcHJpY2VFbGVtcy5sZW5ndGg7IHByaWNlSWR4KyspIHtcclxuICAgICAgdG90YWxQcmljZSArPSBOdW1iZXIocHJpY2VFbGVtc1twcmljZUlkeF0udGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgRE9NIHdpbGwgdGhlIG5ldyB0b3RhbCBmaWd1cmVzLlxyXG4gICAgY29uc3Qgc3ViVG90YWwgPSB0b3RhbFByaWNlIC8gMS4yO1xyXG4gICAgY29uc3QgdmF0ID0gdG90YWxQcmljZSAtIHN1YlRvdGFsO1xyXG5cclxuICAgIHN1YnRvdGFsRWxlbS50ZXh0Q29udGVudCA9IHN1YlRvdGFsLnRvRml4ZWQoMik7XHJcbiAgICB2YXRFbGVtLnRleHRDb250ZW50ID0gdmF0LnRvRml4ZWQoMik7XHJcbiAgICB0b3RhbEVsZW0udGV4dENvbnRlbnQgPSB0b3RhbFByaWNlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHJlbW92ZV9hbl9pdGVtKFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LiBEdXJpbmcgdGhlIHByb2Nlc3MsIGl0IHdpbGwgdXBkYXRlXHJcbiAgICAgKiB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgdXBkYXRlIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHByb2R1Y3RJZDogc3RyaW5nLFxyXG4gICAgcHJpY2U6IHN0cmluZyxcclxuICAgIHByaWNlRWxlbTogSFRNTEVsZW1lbnRcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZW1vdmVfaXRlbShOdW1iZXIocHJvZHVjdElkKSwgMSk7XHJcbiAgICBwcmljZUVsZW0udGV4dENvbnRlbnQgPSAoXHJcbiAgICAgIE51bWJlcihwcmljZUVsZW0udGV4dENvbnRlbnQpIC0gTnVtYmVyKHByaWNlKVxyXG4gICAgKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBhZGRfYW5faXRlbShcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC4gRHVyaW5nIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwcm9kdWN0SWQ6IHN0cmluZyxcclxuICAgIHByaWNlOiBzdHJpbmcsXHJcbiAgICBwcmljZUVsZW06IEhUTUxFbGVtZW50XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkX2l0ZW0oTnVtYmVyKHByb2R1Y3RJZCksIDEpO1xyXG4gICAgcHJpY2VFbGVtLnRleHRDb250ZW50ID0gKFxyXG4gICAgICBOdW1iZXIocHJpY2VFbGVtLnRleHRDb250ZW50KSArIE51bWJlcihwcmljZSlcclxuICAgICkudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgcmVtb3ZlX3dob2xlX2l0ZW0ocHJvZHVjdElkOiBzdHJpbmcsIHBhcmVudENvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBlbnRpcmUgaXRlbSBmcm9tIHRoZSBiYXNrZXQuIEluIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogbG9jYWwgc3RvcmFnZSBhbmQgdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZW1vdmVfZW50aXJlX2l0ZW0ocHJvZHVjdElkKTtcclxuICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyNy8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIEZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBXaWxsIGhhbmRsZSB0aGUgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLiBUaGVzZSBpbmNsdWRlIHRoZVxyXG4vLyBmb2xsb3dpbmc6XHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgb250byB0aGUgSFRNTCBhZGRpbmcgb250byB0aGUgY29sb3VycyBmaWx0ZXIgb3B0aW9ucyBhcyB3ZWxsIGFzXHJcbi8vICAgIHRoZSBwcm9kdWN0IGluZm8gc2VjdGlvbi4gVGhlcmUgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB3aGF0IG90aGVyXHJcbi8vICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4vLyAgICByZXRyaWV2ZWQgZnJvbSBhbiBBUEkuXHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuLy8gICAgdG8gYmUgYWRkZWQgdG8gdGhlIGJhc2tldCBhbmQgZm9yIHRoZSBwYWdlIHRvIGJlIHJlZnJlc2hlZC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZFByb2R1Y3RQYWdlIGV4dGVuZHMgQmFza2V0U3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgaGFuZGxlIHRoZSBKUyBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuIFRoZXNlIGluY2x1ZGUgdGhlXHJcbiAgICogZm9sbG93aW5nOlxyXG4gICAqXHJcbiAgICogIC0gV2lsbCBidWlsZCBvbnRvIHRoZSBIVE1MIGFkZGluZyBvbnRvIHRoZSBjb2xvdXJzIGZpbHRlciBvcHRpb25zIGFzIHdlbGwgYXNcclxuICAgKiAgICB0aGUgcHJvZHVjdCBpbmZvIHNlY3Rpb24uIFRoZXJlIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gd2hhdCBvdGhlclxyXG4gICAqICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4gICAqICAgIHJldHJpZXZlZCBmcm9tIGFuIEFQSS5cclxuICAgKlxyXG4gICAqICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuICAgKiAgICB0byBiZSBhZGRlZCB0byB0aGUgYmFza2V0IGFuZCBmb3IgdGhlIHBhZ2UgdG8gYmUgcmVmcmVzaGVkLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogLSBSZXRyaWV2ZXMgZGF0YSBmcm9tIHRoZSBBUEkgYW5kIGNhbGxzIG1ldGhvZHMgdG8gYnVpbGQgb250byB0aGUgRE9NLlxyXG4gICAgICogLSBBZGRzIGZ1bmN0aW9uYWxpdHkgb250byB0aGUgXCJhZGQgdG8gYmFza2V0IGJ1dHRvblwiLlxyXG4gICAgICovXHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uc3QgQVBJUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgIFwiL3Byb2R1Y3RzL1wiLFxyXG4gICAgICBcIi9wcm9kdWN0cy9pbmZvLWFwaS9cIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIC8vIEFkZGluZyBjb2xvdXIgdmFyaWF0aW9uc1xyXG4gICAgICAgIGlmIChkYXRhLmNvbG91cnMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfY29sb3VycyhkYXRhLmNvbG91cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgb3RoZXIgcHJvZHVjdHMgb2YgdGhlIHNhbWUgc2V0XHJcbiAgICAgICAgaWYgKGRhdGEuc2V0cykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9wcm9kdWN0X3NldHMoZGF0YS5zZXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIHNpbWlsYXIgcHJvZHVjdHNcclxuICAgICAgICBpZiAoZGF0YS5zaW1pbGFyKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoZGF0YS5zaW1pbGFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIGZlYXR1cmVzIGluZm9ybWF0aW9uXHJcbiAgICAgICAgaWYgKGRhdGEuZmVhdHVyZXMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfZmVhdHVyZXMoZGF0YS5mZWF0dXJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYWRkX3RvX2Jhc2tldCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9jb2xvdXJzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgZHJvcGRvd24gY29sb3VycyBkcm9wZG93biBtZW51IGFuZCBhZGRzIG1vcmUgY29sb3Vyc1xyXG4gICAgICogaW4gYWNjb3JkYW5jZSB0byBob3cgbWFueSBob3cgbWFueSBjb2xvdXJzIHdlcmUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBhcHBlbmQgZWxlbWVudHMgb250byB0aGUgZWxlbWVudFxyXG4gICAgICogI3Byb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBGb3IgZWFjaCBjb2xvdXIsIHRoZSBmb2xsb3dpbmcgSFRNTCB3aWxsIGJlIGFwcGVuZGVkOlxyXG4gICAgICpcclxuICAgICAqIDxhXHJcbiAgICAgKiAgIGhyZWY9XCJ7bGluayB0byBwcm9kdWN0fVwiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIlxyXG4gICAgICogICBmb3I9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICogICA8bGFiZWwgZm9yPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIj5cclxuICAgICAqICAgICA8c3BhblxyXG4gICAgICogICAgICAgY2xhc3M9XCJzbS1jb2xvdXItYm94XCJcclxuICAgICAqICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHtjb2xvdXIgaGV4IHZhbHVlfTtcIj5cclxuICAgICAqICAgICA8L3NwYW4+XHJcbiAgICAgKiAgICAge2NvbG91ci1uYW1lfVxyXG4gICAgICogICA8L2xhYmVsPlxyXG4gICAgICogPC9hPlxyXG4gICAgICogPGlucHV0XHJcbiAgICAgKiAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCJcclxuICAgICAqICAgbmFtZT1cInByb2QtZi1jb2xvdXJcIlxyXG4gICAgICogICBpZD1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqICAgdmFsdWU9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICBjb25zdCBjb2xvdXIgPSBhdHRyc1thXS5jb2xfbmFtZTtcclxuICAgICAgICBjb25zdCBoZXhfdmFsID0gYXR0cnNbYV0uY29sX2hleF92YWw7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImFcIiB0YWdcclxuICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwibGFiZWxcIiB0YWdcclxuICAgICAgICBjb25zdCBsYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcbiAgICAgICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcInNwYW5cIiB0YWdcclxuICAgICAgICBjb25zdCBzcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHNwYW5FbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic20tY29sb3VyLWJveFwiKTtcclxuICAgICAgICBzcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IFwiICsgaGV4X3ZhbCArIFwiO1wiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwiaW5wdXRcIiB0YWdcclxuICAgICAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9kLWYtY29sb3VyXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVhY2ggdGFnIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGFyZW50IGVsZW1lbnRzLlxyXG4gICAgICAgIGxhYmVsRWxlbS5hcHBlbmRDaGlsZChzcGFuRWxlbSk7XHJcbiAgICAgICAgbGFiZWxFbGVtLmFwcGVuZChjb2xvdXIpO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGxhYmVsRWxlbSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyB0aGUgZWxlbWVudHMgdG8gdGhlIHRhcmdldCBlbGVtZW50IGluIHRoZSBET00uXHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChpbnB1dEVsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1jb2xvdXItdmFyaWF0aW9ucyBkb2VzIG5vdCBleGlzdCwgYWx0ZXJuYXRpdmUgY29sb3VycyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfcHJvZHVjdF9zZXRzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgXCJwcm9kdWN0IHNldHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjcHJvZHVjdC1zZXRzLlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHByb2R1Y2UgdGhlIGZvbGxvd2luZyBIVE1MIGZvciBlYWNoIHNldDpcclxuICAgICAqXHJcbiAgICAgKiA8YSBjbGFzcz1cInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiIGhyZWY9XCJ7cHJvZHVjdCB1cmx9XCJcclxuICAgICAqICAgPGltZ1xyXG4gICAgICogICAgIGNsYXNzPVwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgKiAgICAgYWx0PVwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4ge3Byb2R1Y3QgbmFtZX1cIlxyXG4gICAgICogICA+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCI+e3Byb2R1Y3QgbmFtZX08L3NwYW4+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIj57cHJvZHVjdCBwcmljZX08L3NwYW4+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3Qtc2V0c1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2FdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgaW1nID0gYXR0cnNbYV0uc2hvd2Nhc2VfaW1hZ2U7XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBhdHRyc1thXS5wcmljZTtcclxuXHJcbiAgICAgICAgLy8gXCJBXCIgdGFnIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0LlxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIik7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nKTtcclxuICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiYWx0XCIsXHJcbiAgICAgICAgICBcIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIChcIiArIG5hbWUgKyBcIn1cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFwiU1BBTlwiIHRhZ3MgY29udGFpbmluZyB0aGUgcHJvZHVjdCBuYW1lIGFuZCBwcmljZVxyXG4gICAgICAgIGNvbnN0IHRleHRTcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHRleHRTcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0UHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgdGV4dFByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRQcmljZUVsZW0udGV4dENvbnRlbnQgPSBcIsKjXCIgKyBwcmljZTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgLy8gYW5kIGFwcGVuZCB0aGVtIG9udG8gdGhlIHRhcmdldEVsZW0gaW4gdGhlIERPTS5cclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRQcmljZUVsZW0pO1xyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1zZXRzIGRvZXMgbm90IGV4aXN0LCBwcm9kdWN0LXNldHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBcInNpbWlsYXIgcHJvZHVjdHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjc2ltaWxhci1wcm9kdWN0cy5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBwcm9kdWNlIHRoZSBmb2xsb3dpbmcgSFRNTCBmb3IgZWFjaCBzZXQ6XHJcbiAgICAgKlxyXG4gICAgICogPGEgY2xhc3M9XCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIiBocmVmPVwie3Byb2R1Y3QgdXJsfVwiXHJcbiAgICAgKiAgIDxpbWdcclxuICAgICAqICAgICBjbGFzcz1cInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICogICAgIGFsdD1cIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIHtwcm9kdWN0IG5hbWV9XCJcclxuICAgICAqICAgPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0IG5hbWV9PC9zcGFuPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCI+e3Byb2R1Y3QgcHJpY2V9PC9zcGFuPlxyXG4gICAgICogPC9hPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW1pbGFyLXByb2R1Y3RzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbYV0ubmFtZTtcclxuICAgICAgICBjb25zdCBpbWcgPSBhdHRyc1thXS5zaG93Y2FzZV9pbWFnZTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IGF0dHJzW2FdLnByaWNlO1xyXG5cclxuICAgICAgICAvLyBcIkFcIiB0YWcgd2hpY2ggd2lsbCBjb250YWluIHRoZSBpbWFnZSBhbmQgdGhlIHRleHQuXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpbWlsYXItcHJvZHVjdCByZWxhdGVkLXByb2R1Y3RcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImFsdFwiLFxyXG4gICAgICAgICAgXCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiAoXCIgKyBuYW1lICsgXCJ9XCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBcIlNQQU5cIiB0YWdzIGNvbnRhaW5pbmcgdGhlIHByb2R1Y3QgbmFtZSBhbmQgcHJpY2VcclxuICAgICAgICBjb25zdCB0ZXh0U3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRTcGFuRWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRQcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICB0ZXh0UHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRQcmljZUVsZW0udGV4dENvbnRlbnQgPSBcIsKjXCIgKyBwcmljZTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgLy8gYW5kIGFwcGVuZCB0aGVtIG9udG8gdGhlIHRhcmdldEVsZW0gaW4gdGhlIERPTS5cclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRQcmljZUVsZW0pO1xyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjc2ltaWxhci1wcm9kdWN0cyBkb2VzIG5vdCBleGlzdCwgc2ltaWxhci1wcm9kdWN0cyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGJ1aWxkX2ZlYXR1cmVzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGZlYXR1cmVzIHNlY3Rpb24gb2YgcHJvZHVjdCBpbmZvcm1hdGlvbiBiYXNlZCBvbiByZXN1bHRzXHJcbiAgICAgKiByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJLlxyXG4gICAgICogV2lsbCBjcmVhdGUgYSBcIlBcIiB0YWcgZm9yIGVhY2ggZmlsdGVyIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgdGFyZ2V0XHJcbiAgICAgKiBlbGVtZW50IGluIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWZlYXR1cmVzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgYXR0cnMubGVuZ3RoOyBmKyspIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbZl0ubmFtZTtcclxuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3QtaW5mb19fc2VjdGlvbl9fdGV4dFwiKTtcclxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChuZXdFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3QtZmVhdHVyZXMgZG9lcyBub3QgZXhpc3QsIHNpbWlsYXItcHJvZHVjdHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGFkZF90b19iYXNrZXQoKSB7XHJcbiAgICAvKiogQWRkcyBwcm9kdWN0cyBpbnRvIHRoZSBiYXNrZXQgKi9cclxuICAgIGNvbnN0IGlucHV0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcInF1YW50aXR5LWN0cmxcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcHJvZHVjdElkID0gTnVtYmVyKGlucHV0RWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlkXCIpKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJhZGQtdG8tYmFza2V0LWJ0blwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHF1YW50aXR5ID0gTnVtYmVyKGlucHV0RWxlbS52YWx1ZSk7XHJcblxyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihxdWFudGl0eSkpIHtcclxuICAgICAgICBzdXBlci5hZGRfaXRlbShwcm9kdWN0SWQsIHF1YW50aXR5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcIkNoZWNrIHRoZSBxdWFudGl0eSwgaXQgaXMgZWl0aGVyIE5hTiBvciBhIGZsb2F0LiBNdXN0IGJlIGEgbnVtYmVyXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAzMC8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gUGFnZXMgd2hlcmUgaW50ZXJhY3Rpb24gd2l0aCBpdGVtcyBpbiB0aGUgYmFza2V0IG5lZWQgdG8gYmUgYWNjZXNzIGFuZC9vclxyXG4vLyBtb2RpZmllZC5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gLSBNYW5hZ2UgdGhlIGJhc2tldCBpdGVtc1xyXG4vLyAtIEtlZXAgYmFza2V0IGRhdGEgd2hlbmV2ZXIgdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcclxuLy8gLSBVcGRhdGVzIHRoZSBiYXNrZXQgaXRlbXMgY291bnRcclxuLy9cclxuLy8gREVTQ1JJUFRJT046XHJcbi8vIC0tLS0tLS0tLS0tLVxyXG4vLyBMZXZlcmFnZXMgdGhlIHBvd2VyIG9mIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCBhIHRyYWNrIG9mIHRoZSBiYXNrZXQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgQmFza2V0U3RhdGUge1xyXG4gIHRvdGFsSXRlbXM6IHN0cmluZyB8IG51bGwgfCBudW1iZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICBcInRvdGFsQmFza2V0U2l6ZVwiXHJcbiAgKTtcclxuICBpdGVtczogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFza2V0SXRlbXNcIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3JlYWRfaXRlbXMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgdG90YWwgYW5kIGJhc2tldCBzaXplIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIGNvbnZlcnRzXHJcbiAgICAgKiB0aGUgdmFsdWVzIGludG8gdHlwZXMgdGhhdCBjYW4gYmUgd29ya2VkIHdpdGguXHJcbiAgICAgKi9cclxuICAgIGlmICghdGhpcy50b3RhbEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMudG90YWxJdGVtcyA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKHRoaXMuaXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IHt9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfc2V0X2l0ZW1zKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgbG9jYWwgc3RvcmFnZSBpdGVtcyBpbnRvIHN0cmluZ3MgYW5kIHNhdmVzIHRoZW0gb250byB0aGVcclxuICAgICAqIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBiYXNrZXQgaXRlbXMgY291bnRlci5cclxuICAgICAqL1xyXG5cclxuICAgIGlmICghdGhpcy50b3RhbEl0ZW1zKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsQmFza2V0U2l6ZVwiLCBcIjBcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgXCJ0b3RhbEJhc2tldFNpemVcIixcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMudG9TdHJpbmcoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pdGVtcykge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYXNrZXRJdGVtc1wiLCBcInt9XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYXNrZXRJdGVtc1wiLCB0aGlzLml0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGJhc2tldFxyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGFkZF9pdGVtKGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgIC8qKiBNZXRob2QgZm9yIGFkZGluZyBpdGVtcyBpbnRvIHRoZSBiYXNrZXQuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcblxyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgKz0gcXVhbnRpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXRlbXNbaWRdKSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdICs9IHF1YW50aXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gPSBxdWFudGl0eTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcmVtb3ZlX2l0ZW0oaWQ6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgLyoqIE1ldGhvZCBmb3IgcmVtb3ZpbmcgaXRlbXMgZnJvbSB0aGUgYmFza2V0LiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG5cclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gICAgaWYgKHRoaXMudG90YWxJdGVtcyA+IDApIHtcclxuICAgICAgdGhpcy50b3RhbEl0ZW1zIC09IHF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuXHJcbiAgICBpZiAodGhpcy5pdGVtc1tpZF0pIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gPSBOdW1iZXIodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSAtPSBxdWFudGl0eTtcclxuICAgICAgaWYgKHRoaXMuaXRlbXNbaWRdID09IDApIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pdGVtc1tpZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHJlbW92ZV9lbnRpcmVfaXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAvKiogUmVtb3ZlcyBhbmQgZW50aXJlIGl0ZW0uICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKSAtIE51bWJlcih0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICBkZWxldGUgdGhpcy5pdGVtc1tpZF07XHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHVwZGF0ZV9iYXNrZXRfY291bnRlcihuZXdOdW06IHN0cmluZyB8IG51bWJlciB8IG51bGwpIHtcclxuICAgIC8qKiBVcGRhdGVzIHRoZSBiYXNrZXQgY291bnRlciBudW1iZXIgKi9cclxuICAgIGNvbnN0IGJhc2tldENvdW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImJhc2tldC10b3RhbC1pdGVtc1wiXHJcbiAgICApIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgICBpZiAobmV3TnVtKSB7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLnRleHRDb250ZW50ID0gbmV3TnVtLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB1cGRhdGVfc2luZ2xlX2l0ZW0ocHJvZHVjdElkOiBzdHJpbmcgfCBudW1iZXIsIG5ld051bTogbnVtYmVyKSB7XHJcbiAgICAvKiogVXBkYXRlcyB0aGUgbG9jYWwgc3RvcmFnZSBmb3IgYSBzaW5nbGUgaXRlbSB3aXRoIGEgbmV3IHF1YW50aXR5LiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG4gICAgY29uc3QgcHJldlZhbHVlID0gTnVtYmVyKHRoaXMuaXRlbXNbcHJvZHVjdElkXSlcclxuICAgIHRoaXMuaXRlbXNbcHJvZHVjdElkXSA9IG5ld051bTtcclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpICsgbmV3TnVtIC0gcHJldlZhbHVlO1xyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDcvMDEvMjAyMDBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBVdGlsaXR5IHByb3ZpZGluZyB2YWxpZGF0aW9uIG9wdGlvbnMuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogQSB1dGlsaXRpZXMgY2xhc3MgY29udGFpbmluZyBzdGF0aWMgbWV0aG9kIHdoaWNoIHJ1biBzb21lIGZvcm0gb2ZcclxuICAgKiB2YWxpZGF0aW9uLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgY2hlY2tfaWZfcG9zaXRpdmVfaW50KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAvKiogQ2hlY2tzIGlmIGFuIGl0ZW0gaXMgYSBwb3NpdGl2ZSBpbnRlZ2VyICovXHJcblxyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0gIT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gPj0gMCAmJiBpdGVtID09PSBNYXRoLnJvdW5kKGl0ZW0pKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLCBpdGVtID49IDApXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdCB0aGlzIHN0YWdlLCB0aGUgb25seSBicmFuY2ggc3VnZ2VzdHMgdGhhdCB0aGUgbnVtYmVyIGlzIDwgMC5cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=