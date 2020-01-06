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
            if (Number(inputBox.value) <= minValue) {
                btnDown.setAttribute("disabled", "disabled");
            }
            else {
                btnDown.removeAttribute("disabled");
            }
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
/* harmony import */ var _state_basket_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../state/basket-items */ "./furlon/static/ts/state/basket-items.ts");
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
            console.log(APIPath);
            request_1.onreadystatechange = function () {
                if (request_1.readyState == 4 && request_1.status == 200) {
                    var APIResponse = JSON.parse(request_1.responseText);
                    if (APIResponse.productsInfo) {
                        _this.build_basket_summary(APIResponse.productsInfo);
                    }
                }
            };
        }
        return _this;
    }
    BasketPage.prototype.build_basket_summary = function (allProducts) {
        var productPage = window.location.href.replace(/basket.*/, "products/");
        for (var i = 0; i < allProducts.length; i++) {
            var product = allProducts[i];
            var container = document.createElement("DIV");
            container.setAttribute("class", "table__row");
            container.setAttribute("product-id", product.productID);
            var imgATag = document.createElement("A");
            imgATag.setAttribute("class", "table__field table__field--img");
            imgATag.setAttribute("href", productPage + product.productId);
            imgATag.setAttribute("field", "product-image");
            var imgElem = document.createElement("IMG");
            imgElem.setAttribute("src", product.image);
            imgElem.setAttribute("alt", "Image of " + product.productName);
            imgATag.appendChild(imgElem);
            var nameElem = document.createElement("A");
            nameElem.setAttribute("class", "table__field");
            nameElem.setAttribute("field", "product-name");
            nameElem.setAttribute("href", productPage + product.productId);
            nameElem.textContent = product.productName;
            var storeElem = document.createElement("A");
            storeElem.setAttribute("class", "table__field");
            storeElem.setAttribute("href", "#");
            storeElem.setAttribute("field", "product-store");
            storeElem.textContent = product.storeName;
            var colourElem = document.createElement("P");
            colourElem.setAttribute("class", "table__field");
            colourElem.setAttribute("field", "product-colour");
            colourElem.textContent = product.colourName;
            var priceElem = document.createElement("P");
            priceElem.setAttribute("class", "table__field");
            priceElem.setAttribute("field", "product-price");
            priceElem.textContent = product.price;
            container.appendChild(imgATag);
            container.appendChild(nameElem);
            container.appendChild(storeElem);
            container.appendChild(colourElem);
            container.appendChild(priceElem);
            this.summaryItemsParent.appendChild(container);
        }
    };
    return BasketPage;
}(_state_basket_items__WEBPACK_IMPORTED_MODULE_0__["BasketState"]));



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
        if (this.items[id]) {
            this.items[id] = Number(this.items[id]);
            this.items[id] -= quantity;
        }
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
    return BasketState;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3N0YXRlL2Jhc2tldC1pdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFBQTtJQVdFO1FBSEEsZUFBVSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBU2pFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUUvQyxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQ2hFLHFDQUFxQyxDQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLENBQzNELDBDQUEwQyxDQUMzQyxDQUFDO1lBRUYsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUNsRSxzQ0FBc0MsQ0FDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNMLElBQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDLHNCQUFzQixDQUN6RCw4Q0FBOEMsQ0FDL0MsQ0FBQztZQUdGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUdPLHlDQUFrQixHQUExQixVQUNFLGFBQTZCLEVBQzdCLFNBQXlCO2dDQWVoQixLQUFLO1lBQ1osU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDekMsSUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFekQsS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ2hELElBQUksYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxXQUFXLEVBQUU7d0JBQ3pELElBQUksYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxNQUFNLEVBQUU7NEJBQ3hELGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3lCQUNwRDtxQkFDRjt5QkFBTTt3QkFDTCxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDcEQ7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQzs7UUFiTCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBQTVDLEtBQUs7U0FjYjtJQUNILENBQUM7SUFHTyw4Q0FBdUIsR0FBL0IsVUFRRSxhQUE2QjtnQ0FFcEIsRUFBRTtZQUNULGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQzFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUVuRCxJQUFJLEVBQUUsS0FBSyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbkMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ25EO3FCQUFNO29CQUNMLGFBQWEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDeEQ7WUFDSCxDQUFDLENBQUMsQ0FBQzs7UUFUTCxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUU7b0JBQXZDLEVBQUU7U0FVVjtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakVEO0FBQUE7QUFBQTtJQWtCRTtRQUxBLFlBQU8sR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQ3ZDLGVBQWUsQ0FDb0IsQ0FBQztRQVNwQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFHbEIsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUdELGlDQUFVLEdBQVY7UUFNRSxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQ2hELHlCQUF5QixDQUNVLENBQUM7UUFFdEMsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUNqRCx3QkFBd0IsQ0FDekIsQ0FBQztRQUVGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDakMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ2pELFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDaEU7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDM0MsNkJBQTZCLENBQzlCLENBQUM7Z0NBQ08sQ0FBQztZQUNSLElBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFOztnQkFFcEMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ2pELFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUNoQyxzQ0FBc0MsRUFDdEMsc0NBQXNDLENBQ3ZDLENBQUM7aUJBQ0g7Z0JBUUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFDLElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFakMsSUFDRSxVQUFVLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQzt3QkFDckMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFDdEM7d0JBRUEsSUFDRSxVQUFVLENBQUMsa0JBQW1CLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDL0Msd0JBQXdCLENBQ3pCLEVBQ0Q7NEJBQ0EsZ0JBQVUsQ0FBQyxrQkFBa0IsMENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FDMUMsOEJBQThCLEVBQzlCO3lCQUNIO3FCQUNGO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7O1FBckNMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBakMsQ0FBQztTQXNDVDtJQUNILENBQUM7SUFHRCxpQ0FBVSxHQUFWLFVBQVcsTUFBc0I7UUFJL0IsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUM5Qyx5QkFBeUIsQ0FDMUIsQ0FBQyxDQUFDLENBQW1CLENBQUM7UUFDdkIsSUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQ3hELHdCQUF3QixDQUN6QixDQUFDLENBQUMsQ0FBbUIsQ0FBQztRQUN2QixJQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLHNCQUFzQixDQUNsRSwrQkFBK0IsQ0FDTSxDQUFDO1FBSXhDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZUFBSztZQUN4QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsb0JBQW9CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO2dDQUlHLFVBQVU7WUFJZCxJQUFJLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUdqQyxLQUNFLElBQUksYUFBYSxHQUFHLENBQUMsRUFDckIsYUFBYSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFDdkMsYUFBYSxFQUFFLEVBQ2Y7b0JBQ0EsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDOUMseUNBQXlDLENBQzFDLENBQUM7aUJBQ0g7Z0JBQ0QsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztnQkFHbEUsVUFBVSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUkxQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLENBQUM7O1FBMUJMLEtBQ0UsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUNsQixVQUFVLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUNwQyxVQUFVLEVBQUU7b0JBRlIsVUFBVTtTQTBCZjtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hMRDtJQVlFOztRQUxBLGFBQVEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvRCxnQkFBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3ZFLHFCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQVM3RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1lBR2xCLEtBQXNCLHNCQUFJLENBQUMsUUFBZSw2Q0FBRTtnQkFBdkMsSUFBTSxPQUFPO2dCQUNoQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNyRDs7Ozs7Ozs7O1FBR0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHRCwrQkFBVSxHQUFWO1FBQUEsaUJBdURDO1FBaERDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDakMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUN0RCxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ3JDLHNDQUFzQyxFQUN0QyxzQ0FBc0MsQ0FDdkMsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQ2pELHdCQUF3QixDQUN6QixDQUFDO2dDQUNPLENBQUM7WUFDUixJQUFNLE9BQU8sR0FBRyxPQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFOzs7O29CQUVoQyxLQUF5Qiw0Q0FBa0IsOENBQUU7d0JBQXhDLElBQU0sVUFBVTt3QkFDbkIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztxQkFDMUQ7Ozs7Ozs7OztnQkFRRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdDLElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXBDLElBQ0UsVUFBVSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7d0JBQ3JDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQ2xDO3dCQUNBLFVBQ0UsVUFBVSxDQUFDLGtCQUFrQiwwQ0FBRSxTQUFTLENBQUMsUUFBUSxDQUMvQyw0QkFBNEIsR0FFOUI7NEJBQ0EsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQzdDLHNDQUFzQyxFQUN0QyxzQ0FBc0MsQ0FDdkMsQ0FBQzt5QkFDSDtxQkFDRjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDOzs7UUFsQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBcEMsQ0FBQztTQW1DVDtJQUNILENBQUM7SUFHRCxnQ0FBVyxHQUFYLFVBQVksS0FBaUI7UUFNM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFxQixDQUFDO1FBR3pDLE1BQU0sRUFBRSxXQUFXLENBQUM7UUFDcEIsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLE9BQXVCLENBQUM7UUFFNUIsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDOUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQzlCLDhDQUE4QyxDQUM3QixDQUFDO1NBQ3JCO2FBQU0sSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUM5QiwyQ0FBMkMsQ0FDMUIsQ0FBQztTQUNyQjthQUFNO1lBQ0wsTUFBTSxvQ0FBb0MsQ0FBQztTQUM1QztRQUVELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUN2QyxzQ0FBc0MsQ0FDdkMsQ0FBQztRQUVGLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUM5RCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDO0lBR08sbUNBQWMsR0FBdEI7O1FBTUUsSUFBTSxXQUFXLEdBQUc7WUFDbEIsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztZQUM5QyxRQUFRLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLENBQUM7U0FDdkQsQ0FBQztRQUVGLFVBQUksQ0FBQyxnQkFBZ0IsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQy9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDOUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztpQkFDeEQ7YUFDRjtRQUNILENBQUMsRUFBRTtJQUNMLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdklEO0FBQUE7QUFBQTtJQVdFO1FBTEEsZUFBVSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDMUMsWUFBWSxDQUN1QixDQUFDO1FBT3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFzQixDQUFDO1lBQ2pELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQXNCLENBQUM7WUFDL0MsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBcUIsQ0FBQztZQUVqRCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFdEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBR0QseUNBQWEsR0FBYixVQUFjLFNBQXlCO1FBSXJDLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQ3JDLGlDQUFpQyxDQUNiLENBQUM7UUFDdkIsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FDbkMsK0JBQStCLENBQ1gsQ0FBQztRQUN2QixJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUN0Qyx5QkFBeUIsQ0FDTixDQUFDO1FBRXRCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCwrQ0FBbUIsR0FBbkIsVUFDRSxPQUEwQixFQUMxQixLQUF3QixFQUN4QixRQUEwQixFQUMxQixRQUFnQixFQUNoQixRQUFnQjtRQVNoQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLEVBQUU7Z0JBQ2xELFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRXBELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLEVBQUU7b0JBQ3JDLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ25DO2dCQUVELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ3ZDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsOENBQWtCLEdBQWxCLFVBQ0UsT0FBMEIsRUFDMUIsS0FBd0IsRUFDeEIsUUFBMEIsRUFDMUIsUUFBZ0IsRUFDaEIsUUFBZ0I7UUFTaEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUM5QixJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUNoRCxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUVwRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxFQUFFO29CQUNyQyxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNyQztnQkFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUN2QyxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDNUM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELDRDQUFnQixHQUFoQixVQUNFLE9BQTBCLEVBQzFCLEtBQXdCLEVBQ3hCLFFBQTBCLEVBQzFCLFFBQWdCLEVBQ2hCLFFBQWdCO1FBT2hCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU7WUFFcEMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsRUFBRTtnQkFDdEMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNyQztZQUdELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3RDLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKRDtJQVVFO1FBS0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdELDBDQUFrQixHQUFsQjs7UUFBQSxpQkF1RUM7UUFsRUMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUM3QyxhQUFhLENBQ2QsQ0FBQyxDQUFDLENBQW9CLENBQUM7UUFHeEIsSUFBTSxVQUFVLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQzs7WUFDMUUsS0FBd0Isc0NBQVUscUdBQUU7Z0JBQS9CLElBQU0sU0FBUztnQkFDbEIsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDNUMsT0FBTyxDQUNZLENBQUM7Z0JBQ3RCLGVBQWUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQyxlQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDaEQsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdEM7Ozs7Ozs7OztRQUdELElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDckQsd0JBQXdCLENBQ1csQ0FBQztnQ0FFN0IsR0FBRztZQUNWLElBQU0sY0FBYyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLFdBQXlDLENBQUM7WUFFOUMsUUFBUSxjQUFjLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUNqRCxLQUFLLFdBQVc7b0JBQ2QsV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ25DLFlBQVksQ0FDTyxDQUFDO29CQUN0QixNQUFNO2dCQUNSLEtBQUssV0FBVztvQkFDZCxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDbkMsWUFBWSxDQUNPLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1IsS0FBSyxVQUFVO29CQUNiLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUNuQyxZQUFZLENBQ08sQ0FBQztvQkFDdEIsTUFBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFxQixDQUFDO2FBQ3pFO1lBRUQsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxlQUFLO29CQUM1QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLFdBQVksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLHNCQUF1QixDQUFDLFdBQVksQ0FBQztvQkFHekUsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO29CQUVyQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNmLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRzt3QkFDM0IsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTs0QkFDcEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFPLENBQUM7NEJBQ3hELEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ2hDOzZCQUFNO3lCQUNOO29CQUNILENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOztRQTNDSCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7b0JBQTVDLEdBQUc7U0E0Q1g7SUFDSCxDQUFDO0lBR0QsaUNBQVMsR0FBVDtRQUtFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUV4RSxJQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQzlDLFlBQVksQ0FDTyxDQUFDO1FBQ3RCLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDOUMsWUFBWSxDQUNPLENBQUM7UUFDdEIsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM5QyxZQUFZLENBQ08sQ0FBQztRQUN0QixJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM1QyxVQUFVLENBQ1MsQ0FBQztRQUV0QixJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUMxQixJQUFNLE1BQU0sR0FBRyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQ3RELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7UUFFRCxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUMxQixJQUFNLE1BQU0sR0FBRyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQ3RELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7UUFFRCxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUMxQixJQUFNLE1BQU0sR0FBRyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQ3RELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7UUFFRCxJQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBTSxNQUFNLEdBQUcsV0FBVyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNO2dCQUNMLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNqQztTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBR0QsdUNBQWUsR0FBZixVQUFnQixVQUFpQjtRQU8vQixJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV2RSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQztRQUNiLEtBQUssSUFBTSxNQUFNLElBQUksVUFBVSxFQUFFO1lBQy9CLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEM7U0FDRjtJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdkxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRDtBQUNLO0FBQ0E7QUFDRTtBQUNDO0FBQ0g7QUFDUDtBQUNBO0FBR25ELElBQUksaUVBQVUsRUFBRSxDQUFDO0FBR2pCLElBQUksK0RBQVcsRUFBRSxDQUFDO0FBR2xCLElBQUksc0VBQVksRUFBRSxDQUFDO0FBR25CLElBQUksd0VBQWEsRUFBRSxDQUFDO0FBRXBCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO0lBQy9DLElBQUkseUVBQWlCLEVBQUUsQ0FBQztJQUN4QixJQUFJLHNFQUFpQixFQUFFLENBQUM7SUFDeEIsSUFBSSxzRUFBWSxFQUFFLENBQUM7Q0FDcEI7QUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtJQUM3QyxJQUFJLCtEQUFVLEVBQUUsQ0FBQztDQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQndEO0FBRXpEO0lBQWdDLDhCQUFXO0lBZ0J6QztRQUFBLFlBSUUsaUJBQU8sU0EyQlI7UUF0Q0Qsd0JBQWtCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDMUMscUJBQXFCLENBQ0osQ0FBQztRQUVwQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQVF6QixJQUFJLEtBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQzVDLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1lBRUQsSUFBTSxjQUFjLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFHbEQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUMxQyxVQUFVLEVBQ1YsdUJBQXVCLEdBQUcsY0FBYyxDQUN6QyxDQUFDO1lBQ0YsSUFBTSxTQUFPLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNyQyxTQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QixTQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLFNBQU8sQ0FBQyxrQkFBa0IsR0FBRztnQkFDM0IsSUFBSSxTQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxTQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDcEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JELElBQUksV0FBVyxDQUFDLFlBQVksRUFBRTt3QkFDNUIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDckQ7aUJBQ0Y7WUFDSCxDQUFDLENBQUM7U0FDSDs7SUFDSCxDQUFDO0lBR08seUNBQW9CLEdBQTVCLFVBQTZCLFdBQWtCO1FBSTdDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDMUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFJaEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDOUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBR3hELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLFlBQVksQ0FDbEIsT0FBTyxFQUNQLGdDQUFnQyxDQUNqQyxDQUFDO1lBQ0YsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5RCxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUMvQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFHN0IsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMvQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMvQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9ELFFBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUczQyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ2pELFNBQVMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUcxQyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDbkQsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBSzVDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDaEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDakQsU0FBUyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBRXRDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxDQWpIK0IsK0RBQVcsR0FpSDFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR3NEO0FBRXZEO0lBQXVDLHFDQUFXO0lBZWhEO1FBQUEsWUFLRSxpQkFBTyxTQWdDUjtRQS9CQyxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQzFDLFlBQVksRUFDWixxQkFBcUIsQ0FDdEIsQ0FBQztRQUNGLElBQU0sT0FBTyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWYsT0FBTyxDQUFDLGtCQUFrQixHQUFHO1lBQzNCLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ3BELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUU5QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQztnQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEM7Z0JBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMzQztnQkFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQzthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBR08seUNBQWEsR0FBckIsVUFBc0IsS0FBWTtRQStCaEMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRXhFLElBQUksVUFBVSxFQUFFO1lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBRXJDLElBQU0sSUFBSSxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNoRCxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUNqQyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUdyQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDcEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsK0JBQStCLENBQUMsQ0FBQztnQkFHaEUsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDO2dCQUdsRCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFDaEQsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUdyRSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsRCxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztnQkFDckUsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ2hELFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFDakQsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDO2dCQUdwRCxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUdoQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQ1YsaUZBQWlGLENBQ2xGLENBQUM7U0FDSDtJQUNILENBQUM7SUFHTyw4Q0FBa0IsR0FBMUIsVUFBMkIsS0FBWTtRQWVyQyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTNELElBQUksVUFBVSxFQUFFO1lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBRXJDLElBQU0sSUFBSSxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNoRCxJQUFNLE1BQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO2dCQUNwQyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUc3QixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO2dCQUM5RCxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFHcEMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLEtBQUssRUFDTCxzREFBc0QsR0FBRyxNQUFJLEdBQUcsR0FBRyxDQUNwRSxDQUFDO2dCQUdGLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BELFlBQVksQ0FBQyxZQUFZLENBQ3ZCLE9BQU8sRUFDUCx5Q0FBeUMsQ0FDMUMsQ0FBQztnQkFDRixZQUFZLENBQUMsV0FBVyxHQUFHLE1BQUksQ0FBQztnQkFFaEMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckQsYUFBYSxDQUFDLFlBQVksQ0FDeEIsT0FBTyxFQUNQLDJDQUEyQyxDQUM1QyxDQUFDO2dCQUNGLGFBQWEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztnQkFJeEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDbkMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsQztTQUNGO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUNWLDZEQUE2RCxDQUM5RCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBR08sa0RBQXNCLEdBQTlCLFVBQStCLEtBQVk7UUFlekMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRS9ELElBQUksVUFBVSxFQUFFO1lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBRXJDLElBQU0sSUFBSSxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNoRCxJQUFNLE1BQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO2dCQUNwQyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUc3QixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUNsRSxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFHcEMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLFlBQVksQ0FDbEIsT0FBTyxFQUNQLDJDQUEyQyxDQUM1QyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsWUFBWSxDQUNsQixLQUFLLEVBQ0wsc0RBQXNELEdBQUcsTUFBSSxHQUFHLEdBQUcsQ0FDcEUsQ0FBQztnQkFHRixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRCxZQUFZLENBQUMsWUFBWSxDQUN2QixPQUFPLEVBQ1AsNkNBQTZDLENBQzlDLENBQUM7Z0JBQ0YsWUFBWSxDQUFDLFdBQVcsR0FBRyxNQUFJLENBQUM7Z0JBRWhDLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JELGFBQWEsQ0FBQyxZQUFZLENBQ3hCLE9BQU8sRUFDUCwrQ0FBK0MsQ0FDaEQsQ0FBQztnQkFDRixhQUFhLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBSXhDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEM7U0FDRjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FDVixxRUFBcUUsQ0FDdEUsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUdELDBDQUFjLEdBQWQsVUFBZSxLQUFZO1FBUXpCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUvRCxJQUFJLFVBQVUsRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxJQUFNLE1BQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO2dCQUM3RCxPQUFPLENBQUMsV0FBVyxHQUFHLE1BQUksQ0FBQztnQkFFM0IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztTQUNGO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUNWLHFFQUFxRSxDQUN0RSxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBR08seUNBQWEsR0FBckI7UUFBQSxpQkFzQkM7UUFwQkMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDdkMsZUFBZSxDQUNJLENBQUM7UUFDdEIsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUUvRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUNwQyxtQkFBbUIsQ0FDQSxDQUFDO1FBRXRCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDL0IsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV6QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlCLGlCQUFNLFFBQVEsYUFBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FDVixtRUFBbUUsQ0FDcEUsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLENBclVzQywrREFBVyxHQXFVakQ7Ozs7Ozs7Ozs7Ozs7O0FDdFVEO0FBQUE7QUFBQTtJQU9FO1FBTkEsZUFBVSxHQUEyQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDOUQsaUJBQWlCLENBQ2xCLENBQUM7UUFDRixVQUFLLEdBQVEsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFJdEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBR08saUNBQVcsR0FBbkI7UUFLRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUdPLGdDQUFVLEdBQWxCO1FBT0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUN6QixpQkFBaUIsRUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FDM0IsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RDtRQUdELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUdELDhCQUFRLEdBQVIsVUFBUyxFQUFVLEVBQUUsUUFBZ0I7UUFFbkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxRQUFRLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHRCxpQ0FBVyxHQUFYLFVBQVksRUFBVSxFQUFFLFFBQWdCO1FBRXRDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxRQUFRLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUdELDJDQUFxQixHQUFyQixVQUFzQixNQUE4QjtRQUVsRCxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM3QyxvQkFBb0IsQ0FDRixDQUFDO1FBRXJCLElBQUksTUFBTSxFQUFFO1lBQ1YsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsZUFBZSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakQ7YUFBTTtZQUNMLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImZ1cmxvbi9zdGF0aWMvanNcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9mdXJsb24vc3RhdGljL3RzL21haW4udHNcIik7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDI5LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIENhcm91c2VsIHN0eWxlZCBpbWFnZSBzbGlkZSBzaG93cy5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gT24gY2xpY2sgb2YgYSBpbWFnZSB0aHVtYm5haWxzIG9yIHRoZSBjdXJyZW50IGltYWdlLCB0aGUgY3VycmVudCBpbWFnZSBzaG91bGRcclxuLy8gY2hhbmdlIGFjY29yZGluZ2x5LlxyXG4vLyBBbmltYXRpb25zIGFyZSBoYW5kbGVkIHRocm91Z2ggdGhlIENTUywgdGhlIEpTIHNldHMgdXAgdGhlIGV2ZW50IGxpc3RlbmVycyB0b1xyXG4vLyBjaGFuZ2UgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGRpc3BsYXkgaW1hZ2VzIGFjY29yZGluZ2x5IHNvIGFzIHRvIGRpc3BsYXkgdGhlXHJcbi8vIHNlbGVjdGVkIGltYWdlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW1ncyB7XHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgY2Fyb3VzZWwgaW1hZ2UgaW1hZ2VzIHN1Y2ggdGhhdCB3aGVuXHJcbiAgICogYSB0aHVtYm5haWwgb3IgdGhlIG1haW4gcGljdHVyZSBpcyBjbGlja2VkIG9uLCB0aGUgaW1hZ2Ugd2lsbCBjaGFuZ2UuXHJcbiAgICogVGhlIGFuaW1hdGlvbiBhbmQgcG9zaXRpb25pbmcgaXMgY29udHJvbGxlZCB2aWEgdGhlIENTUywgdGhlIGNsYXNzIHdpbGxcclxuICAgKiBhZGQgYW5kIHJlbW92ZSBhdHRyaWJ1dGVzIGZyb20gdGhlIGVsZW1lbnRzLCBzbyB0aGF0IHRoZSBhbmltYXRpb25zIGNhblxyXG4gICAqIGJlIHRyaWdnZXJlZC5cclxuICAgKi9cclxuICBjb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2NhdGVzIHRoZSBlbGVtZW50cyB3aGVyZSBhbiBldmVudCBsaXN0ZW5lcnMgbmVlZCB0byBiZSBhZGRlZCBhbmRcclxuICAgICAqIGNhbGxzIG1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBkZXBlbmRpbmcgb24gd2hhdCB0aGUgZWxlbWVudFxyXG4gICAgICogaXMuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIC8vIERPTSBlbGVtZW50cyBmb3IgZXZlbnQgbGlzdGVuZXJzIHRvIGJlIGFkZGVkLlxyXG4gICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2NdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvblwiXHJcbiAgICAgIClbY107XHJcbiAgICAgIGNvbnN0IGRpc3BsYXlJbWFnZXMgPSBkaXNwbGF5Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvbl9faW1nXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGltZ1RodW1ic0NvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzXCJcclxuICAgICAgKVswXTtcclxuICAgICAgY29uc3QgaW1nVGh1bWJzID0gaW1nVGh1bWJzQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktY29udHJvbHMtY29udHJvbFwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyAgTWV0aG9kcyB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIG9uIGVhY2ggRE9NIGVsZW1lbnQuXHJcbiAgICAgIHRoaXMub25fY2xpY2tpbmdfdGh1bWJzKGRpc3BsYXlJbWFnZXMsIGltZ1RodW1icyk7XHJcbiAgICAgIHRoaXMub25fY2xpY2tpbmdfZGlzcGxheV9pbWcoZGlzcGxheUltYWdlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBvbl9jbGlja2luZ190aHVtYnMoXHJcbiAgICBkaXNwbGF5SW1hZ2VzOiBIVE1MQ29sbGVjdGlvbixcclxuICAgIGltZ1RodW1iczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogRWFjaCBpbWFnZSB0aHVtYm5haWwgZWxlbWVudCBoYXMgYSBcImZvclwiIGF0dHJpYnV0ZSB3aGljaCBpbmRpY2F0ZXNcclxuICAgICAqIHdoaWNoIGVsZW1lbnQgb24gdGhlIGRpc3BsYXkgc2VjdGlvbiBpdCByZXByZXNlbnRzLiBUaGUgZGlzcGxheSBpbWFnZVxyXG4gICAgICogZWxlbWVudCBoYXMgYW4gXCJpbWdcIiBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBPbiBjbGlja2luZyBvbiBhIGltYWdlIHRodW1ibmFpbCwgdGhlIGRpc3BsYXkgYXR0cmlidXRlJ3MgcG9zaXRpb25cclxuICAgICAqIGF0dHJpYnV0ZSB3aWxsIGJlY29tZSBcInNob3dcIiB3aGVyZSB0aGUgc2FtZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIGFsbFxyXG4gICAgICogb3RoZXIgaW1hZ2VzIHdpbGwgYmVjb21lIFwiaGlkZVwiLlxyXG4gICAgICpcclxuICAgICAqIE5PVEU6IHRoZSBpbml0aWFsIGltYWdlIHdpbGwgaGF2ZSBwb3NpdGlvbj1cImluaXRcIiBpbml0aWFsbHkgc28gYXMgdG9cclxuICAgICAqIGF2b2lkIGFueSBhbmltYXRpb25zIG9uIHN0YXJ0LiBJZiB0aGlzIGltYWdlIHRodW1ibmFpbCBpcyBjbGlja2VkLCBkb1xyXG4gICAgICogbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgdGh1bWIgPSAwOyB0aHVtYiA8IGltZ1RodW1icy5sZW5ndGg7IHRodW1iKyspIHtcclxuICAgICAgaW1nVGh1bWJzW3RodW1iXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzRm9yID0gaW1nVGh1bWJzW3RodW1iXS5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcImltZ1wiKSA9PT0gY29udHJvbHNGb3IpIHtcclxuICAgICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpICE9IFwiaW5pdFwiKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcImhpZGVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG9uX2NsaWNraW5nX2Rpc3BsYXlfaW1nKFxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGljayBvZiB0aGUgY3VycmVudCBkaXNwbGF5IGltYWdlLCBoaWRlIHRoZSBpbWFnZSBhbmQgc2hvdyB0aGVcclxuICAgICAqIG5leHQuXHJcbiAgICAgKiBBbmltYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgY3NzLiBGb3IgYW5pbWF0aW9uIHRvIHdvcmssIG9uIGNsaWNrLFxyXG4gICAgICogXCJoaWRlXCIgaXMgc2V0IHRvIHRoZSBhdHRyaWJ1dGUgcG9zaXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UsIGFuZCBvblxyXG4gICAgICogdGhlIG5leHQgaW1hZ2UsIHRoZSBcInNob3dcIiBpcyBzZXQgdG8gdGhlIHBvc2l0aW9uIGF0dHJpYnV0ZS5cclxuICAgICAqL1xyXG4gICAgZGlzcGxheUltYWdlczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGltID09PSBkaXNwbGF5SW1hZ2VzLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIGRpc3BsYXlJbWFnZXNbMF0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltICsgMV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gQ3VzdG9tIGRyb3Bkb3duIG1lbnVcclxuLy9cclxuLy8gUkVMQVRFRCBGSUxFUzpcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gX2Ryb3Bkb3duLW1lbnUuc2Nzc1xyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBQcm92aWRlcyBmdW5jdGlvbnMgZm9yIGEgY3VzdG9tIGRyb3Bkb3duIG1lbnUuXHJcbi8vIFRoZSBmdW5jdGlvbnMgd2lsbCB3b3JrIGZvciBkcm9wZG93biBtZW51cyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcclxuLy9cclxuLy8gPGZvcm0+XHJcbi8vICAgLi4uXHJcbi8vICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiPlxyXG4vLyAgICAgICA8c3Bhbj5Db2xvdXI8L3NwYW4+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zXCI+XHJcbi8vICAgICAgIDxsYWJlbCBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCIgZm9yPVwiY29sb3VyLXJlZFwiPlxyXG4vLyAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiXHJcbi8vICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuLy8gICAgICAgICBuYW1lPVwiZi1jb2xvdXJcIlxyXG4vLyAgICAgICAgIGlkPWNvbG91ci1yZWRcclxuLy8gICAgICAgICB2YWx1ZT1cInJlZFwiXHJcbi8vICAgICAgID5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIDwvZGl2PlxyXG4vLyAgIC4uLlxyXG4vLyA8L2Zvcm0+XHJcblxyXG4vLyBDU1Mgc2hvdWxkIGJlIHNldCB1cCB0byBoaWRlIHRoZSBpbnB1dCB0YWdzIGFuZCByZWx5IG9uIHRoZSBsYWJlbHMgdG8gc2VsZWN0XHJcbi8vIHRoZSByYWRpbyBidXR0b24uXHJcbi8vXHJcbi8vIEZVTkNUSU9OUzpcclxuLy8gLS0tLS0tLS0tLVxyXG4vLyAgLSBXaGVuIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBtZW51LCBleHBhbmQgdGhlIGxpc3Qgb2Ygb3B0aW9ucy5cclxuLy8gIC0gV2hlbiB1c2VyIHByZXNzZXMgYW4gb3B0aW9uLCBoaWdobGlnaHQgdGhhdCBvcHRpb24sIHVwZGF0ZSB0aGVcclxuLy8gICAgYnV0dG9uJ3MgaW5uZXIgdGV4dCB0byBtYXRjaCB0aGF0IG9mZiB0aGUgYnV0dG9uIHRleHQuXHJcbi8vICAtIFdoZW4gdXNlciBjbGlja3Mgb3V0c2lkZSwgY2xvc2UgYWxsIG1lbnVzLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRHJvcGRvd25NZW51IENsYXNzXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnUge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBjdXN0b20gZHJvcGRvd24gbWVudXMuXHJcbiAgICogVGhlc2UgaW5jbHVkZTpcclxuICAgKiAgLSBUb2dnbGUgb3Blbi9jbG9zZSBvZiB0aGUgbWVudSBvbiBjbGlja2luZyB0aGUgYnV0dG9uXHJcbiAgICogIC0gQ2xvc2UgdGhlIG1lbnUgb24gY2xpY2tpbmcgb3V0c2lkZVxyXG4gICAqICAtIE9uIHNlbGVjdGluZyBhbiBpdGVtOlxyXG4gICAqICAgIC0gSGlnaGxpZ2h0IHRoYXQgaXRlbVxyXG4gICAqICAgIC0gQ2hhbmdlIHRoZSB0ZXh0IG9mIHRoZSBidXR0b24gdGhlIHRleHQgb2YgdGhlIG9wdGlvbiBzZWxlY3RlZFxyXG4gICAqXHJcbiAgICogTm90ZTogdGhpcyBjbGFzcyB3aWxsIG5vdCBoYW5kbGUgQVBJIGNhbGxzLlxyXG4gICAqL1xyXG5cclxuICBkZE1lbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgIFwiZHJvcGRvd24tbWVudVwiXHJcbiAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQWRkcyBmdW5jdGlvbiB0byBjbG9zZSBhbGwgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGVsZW1lbnRcclxuICAgIHRoaXMuY2xvc2VfbWVudSgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSBmdW5jdGlvbnMgZm9yIGFsbCBtZW51IGVsZW1lbnRzLlxyXG4gICAgZm9yIChsZXQgbWVudUlkID0gMDsgbWVudUlkIDwgdGhpcy5kZE1lbnVzLmxlbmd0aDsgbWVudUlkKyspIHtcclxuICAgICAgdGhpcy5idWlsZF9tZW51KHRoaXMuZGRNZW51c1ttZW51SWRdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsb3NlX21lbnUoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyBhbGwgbWVudXMgd2hlbiBjbGlja2VkIG91dHNpZGUgb24gYW5vdGhlciBmaWx0ZXIgYnV0dG9uLlxyXG4gICAgICogQWxzbyBjYXJyaWVzIGZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBuYXYtbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiXHJcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgb3B0aW9uTGlzdHMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgIG9wdGlvbkxpc3RzW2lkeF0uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5hdlN1Yk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIlxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyQnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEJ0biA9IGZpbHRlckJ0bnNbaV07XHJcblxyXG4gICAgICBzZWxlY3RlZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIENsb3NlIG5hdiBtZW51c1xyXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG5hdlN1Yk1lbnVzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgIG5hdlN1Yk1lbnVzW2lkeF0uY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG9zZSBhbGwgb3RoZXIgZmlsdGVycyBsaXN0c1xyXG4gICAgICAgIC8vIEVhY2ggYnV0dG9uIGFuZCB0aGVpciBjaGlsZCBlbGVtZW50cyBjb250YWluIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBcImZpbHRlci1mb3JcIi5cclxuICAgICAgICAvLyBMaWtld2lzZSwgZWFjaCBkcm9wZG93biBvcHRpb24gZGl2IGNvbnRhaW4gdGhlIHNhbWUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gVGhpcyBjaGVja3MgZm9yIHRoZSBidXR0b24gcHJlc3NlZCwgaWYgaXRzIFwiZmlsdGVyLWZvclwiIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIG1hdGNoZXMgdGhhdCBvZiBpdHMgZHJvcGRvd24gb3B0aW9ucy4gaWYgbm90LCB0aGVuIGNsb3NlLlxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmlsdGVyQnRucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IGZpbHRlckJ0bnNbal07XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikgIT1cclxuICAgICAgICAgICAgc2VsZWN0ZWRCdG4uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIEp1c3QgaW5jYXNlIHRoZSBzdHJ1Y3R1cmUgY2hhbmdlcywgYW5kIHRoZSBuZXh0IHNpYmxpbmcgaW5zIG5vdCB0aGUgb3B0aW9ucyBsaXN0XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZyEuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGJ1aWxkX21lbnUoZGRNZW51OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIGVhY2ggZHJvcGRvd24gbWVudS5cclxuICAgICAqL1xyXG4gICAgY29uc3Qgb3B0aW9uc0J0biA9IGRkTWVudS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCJcclxuICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcHRpb25zTGlzdENvbnRhaW5lciA9IGRkTWVudS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0SXRlbXMgPSBvcHRpb25zTGlzdENvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MTGFiZWxFbGVtZW50PjtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBvbiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoaWNoIHdpbGwgb3Blbi9jbG9zZSB0aGUgb3B0aW9uc1xyXG4gICAgLy8gbGlzdC5cclxuICAgIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIG9wdGlvbnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgc2V0dXAgZm9yIGVhY2ggb3B0aW9uXHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgb3B0aW9uSXRlciA9IDA7XHJcbiAgICAgIG9wdGlvbkl0ZXIgPCBvcHRpb25zTGlzdEl0ZW1zLmxlbmd0aDtcclxuICAgICAgb3B0aW9uSXRlcisrXHJcbiAgICApIHtcclxuICAgICAgbGV0IGxpc3RJdGVtID0gb3B0aW9uc0xpc3RJdGVtc1tvcHRpb25JdGVyXTtcclxuICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGhpZ2hsaWdodCBmcm9tIGFsbCBsaXN0IGl0ZW1zIGFuZCByZWFwcGx5IHRvIHRoZSBzZWxlY3RlZFxyXG4gICAgICAgIC8vIGxpc3QgaXRlbSBvbmx5XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBvcHRpb25TdWJJdGVyID0gMDtcclxuICAgICAgICAgIG9wdGlvblN1Ykl0ZXIgPCBvcHRpb25zTGlzdEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgIG9wdGlvblN1Ykl0ZXIrK1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgb3B0aW9uc0xpc3RJdGVtc1tvcHRpb25TdWJJdGVyXS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsLS1zZWxlY3RlZFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWwtLXNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHRleHQgb2YgdGhlIGJ1dHRvbiB0byB0aGUgdGV4dCBvZiB0aGUgc2VsZWN0ZWQgaXRlbVxyXG4gICAgICAgIG9wdGlvbnNCdG4uaW5uZXJUZXh0ID0gbGlzdEl0ZW0uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGhpZGRlbiBpbnB1dCB2YWx1ZXNcclxuICAgICAgICAvLyBDbG9zZSB0aGUgbWVudVxyXG4gICAgICAgIG9wdGlvbnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDAxLzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBOYXZpZ2F0aW9uIGJhci5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyAxLiBDb250cm9scyB0aGUgc3RhdGUgb2YgdGhlIG5hdmlnYXRpb24gc3ViLW1lbnVzIGFuZCBjb250cm9scyBob3cgYW5kIHdoZW5cclxuLy8gICAgaXQgZXhwYW5kcyBhbmQgY2xvc2VzLlxyXG4vLyAyLiBDb250cm9scyB0aGUgc3RhdGUgb2YgdGhlIGJhc2tldCBhbmQgc28gc28gdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGVcclxuLy8gICAgYmFza2V0LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIHtcclxuICAvKipcclxuICAgKiBTZXRzIHVwIHRoZSBmdW5jdGlvbnMgZm9yIHRoZSBuYXZpZ2F0aW9uLlxyXG4gICAqIFRoZXNlIGluY2x1ZGU6XHJcbiAgICogIC0gQ2xvc2luZyBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUuXHJcbiAgICogIC0gT3BlbmluZy9DbG9zaW5nIG1lbnVzIG9uIGNsaWNrXHJcbiAgICovXHJcbiAgbWVudUJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2X19vcHRpb25fX2J0blwiKTtcclxuICBuYXZTdWJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIik7XHJcbiAgdG9nZ2xlU2hvd05hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X190b2dnbGVfX2J0blwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQWRkcyBmdW5jdGlvbiB0byBjbG9zZSBhbGwgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGVsZW1lbnRcclxuICAgIHRoaXMuY2xvc2VfbWVudSgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSBmdW5jdGlvbnMgZm9yIGFsbCBtZW51IGVsZW1lbnRzLlxyXG4gICAgZm9yIChjb25zdCBtZW51QnRuIG9mIHRoaXMubWVudUJ0bnMgYXMgYW55KSB7XHJcbiAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3ViTWVudUN0cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSByZXNwb25zaXZlIGZ1bmN0aW9ucyBmb3IgdGhlIHRvZ2dsZSBidXR0b25zLlxyXG4gICAgdGhpcy5uYXZfdG9nZ2xlX2J0bigpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xvc2VfbWVudSgpIHtcclxuICAgIC8qKlxyXG4gICAgICogY2xvc2VzIGFsbCBtZW51cyB3aGVuIGNsaWNrZWQgb3V0c2lkZSBwciBhbm90aGVyIG5hdiBtZW51LlxyXG4gICAgICogQWxzbyB3aWxsIGNsb3NlIGFsbCBmaWx0ZXIgbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBDbG9zZSBhbGwgbmF2LW1lbnVzIG9uIGNsaWNrIG91dHNpZGVcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHRoaXMubmF2U3ViTWVudXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgIHRoaXMubmF2U3ViTWVudXNbaWR4XS5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZW51QnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBtZW51QnRuID0gdGhpcy5tZW51QnRuc1tpXTtcclxuXHJcbiAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBDbG9zZSBhbGwgZHJvcGRvd24tbWVudXNcclxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbkxpc3Qgb2Ygb3B0aW9uTGlzdHMgYXMgYW55KSB7XHJcbiAgICAgICAgICBvcHRpb25MaXN0LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xvc2Ugb3RoZXIgbmF2aWdhdGlvbiBtZW51c1xyXG4gICAgICAgIC8vIEVhY2ggYnV0dG9uIGFuZCB0aGVpciBjaGlsZCBlbGVtZW50cyB3aWxsIGNvbnRhaW4gdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFwiZmlsdGVyLWZvclwiLlxyXG4gICAgICAgIC8vIExpa2V3aXNlLCBlYWNoIGRyb3Bkb3duIG1lbnUgY29udGFpbiB0aGUgc2FtZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBUaGlzIGNoZWNrcyBmb3IgdGhlIGJ1dHRvbiBwcmVzc2VkLCBpZiBpdHMgXCJmaWx0ZXItZm9yXCIgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gbWF0Y2hlcyB0aGF0IG9mIGl0cyBkcm9wZG93biBvcHRpb25zLiBpZiBub3QsIHRoZW4gY2xvc2UuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1lbnVCdG5zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gdGhpcy5tZW51QnRuc1tqXTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW0uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKSAhPVxyXG4gICAgICAgICAgICBtZW51QnRuLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmc/LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3ViTWVudUN0cmwoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2lsbCBoYW5kbGUgY2xpY2sgZXZlbnRzIG9uIHRoZSBuYXZpZ2F0aW9uIGZvciBleHBhbmRpbmdcclxuICAgICAqIGFuZCBjb2xsYXBzaW5nIHRoZSBzdWItbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50c1xyXG4gICAgdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHRhcmdldENsYXNzZXMgPSB0YXJnZXQuY2xhc3NMaXN0O1xyXG4gICAgbGV0IHN1Yk1lbnU6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGlmICh0YXJnZXRDbGFzc2VzLmNvbnRhaW5zKFwibmF2LXN1Yi1wcm9kdWN0c1wiKSkge1xyXG4gICAgICBzdWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy5uYXYtc3ViLXByb2R1Y3RzXCJcclxuICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0Q2xhc3Nlcy5jb250YWlucyhcIm5hdi1zdWItcm9vbXNcIikpIHtcclxuICAgICAgc3ViTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMubmF2LXN1Yi1yb29tc1wiXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBcIk5hdmlnYXRpb24gZWxlbWVudCBkb2VzIG5vdCBleGlzdC5cIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXhwYW5kZWQgPSBzdWJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIlxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZXhwYW5kZWQpIHtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCIpO1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIik7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgbmF2X3RvZ2dsZV9idG4oKSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIG5hdmlnYXRpb24gdG9nZ2xlIGJ1dHRvbiAtIGEgcmVzcG9uc2l2ZVxyXG4gICAgICogZmVhdHVyZSB2aWV3YWJsZSB3aGVuIHRoZSBzY3JlZW4gd2lkdGggaXMgc21hbGwgZW5vdWdoLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3QgPSBbXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZfX29wdGlvblwiKSxcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X19hY2NvdW50LWJhc2tldCcpXHJcbiAgICBdO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU2hvd05hdkJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9uc0xpc3RbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIG9wdGlvbnNMaXN0W2ldW2pdLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtb3B0aW9uLS1zaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVVJQT1NFXHJcbi8vIC0tLS0tLS1cclxuLy8gRW5hYmxlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgcXVhbnRpdHkgY29tcG9uZW50LCB0aHVzIGVuYWJsaW5nICsvLVxyXG4vLyBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbiB0aGUgaW5wdXQgYm94LlxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTXHJcbi8vIC0tLS0tLS0tLS0tLS1cclxuLy8gX3F1YW50aXR5LnNjc3NcclxuLy9cclxuLy8gSFRNTCBGT1JNQVRcclxuLy8gLS0tLS0tLS0tLS1cclxuLy8gPGRpdiBjbGFzcz1cImMtcXVhbnRpdHlcIj5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LWRvd25cIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vICAgPGlucHV0IGNsYXNzPVwiYy1xdWFudGl0eV9faW5wdXRcIiB0eXBlPVwibnVtYmVyXCIvPlxyXG4vLyAgIDxidXR0b24gY2xhc3M9XCJjLXF1YW50aXR5X19idG5cIiBjb250cm9sPVwicXVhbnRpdHktdXBcIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFF1YW50aXR5Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIHRoZSBxdWFudGl0eSBjb21wb25lbnQgdGh1cyBlbmFibGluZyB0aGUgKy8tXHJcbiAgICogYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW5zaWRlIHRoZSBpbnB1dCBib3guXHJcbiAgICovXHJcblxyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJjLXF1YW50aXR5XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKiBcclxuICAgICBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICovXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuX3NldF9lbGVtZW50cyh0aGlzLmNvbnRhaW5lcnNbY10pO1xyXG4gICAgICBjb25zdCBidG5Eb3duID0gZWxlbWVudHNbMF0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGJ0blVwID0gZWxlbWVudHNbMV0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGlucHV0Qm94ID0gZWxlbWVudHNbMl0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IG1pblZhbHVlID0gTnVtYmVyKGlucHV0Qm94LmdldEF0dHJpYnV0ZShcIm1pblwiKSk7XHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gTnVtYmVyKGlucHV0Qm94LmdldEF0dHJpYnV0ZShcIm1heFwiKSk7XHJcblxyXG4gICAgICB0aGlzLl9idWlsZF9taW51c19idXR0b24oYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgICB0aGlzLl9idWlsZF9wbHVzX2J1dHRvbihidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX2lucHV0X2JveChidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfc2V0X2VsZW1lbnRzKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBjb250YWluZXIsIHdpbGwgcmV0dXJuIHRoZSBidXR0b25zIGFuZCBpbnB1dCBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYnRuRG93biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS1kb3duXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGJ0blVwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICdidXR0b25bY29udHJvbD1cInF1YW50aXR5LXVwXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0Qm94ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiaW5wdXQuYy1xdWFudGl0eV9faW5wdXRcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiBbYnRuRG93biwgYnRuVXAsIGlucHV0Qm94XTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9idWlsZF9taW51c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIG1pbnVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCByZWR1Y2VcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtaW5pbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIHBsdXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBsZXNzIHRoYW4gdGhlIG1heFZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoYnRuRG93bi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpIC0gMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpIDwgbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPT09IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9idWlsZF9wbHVzX2J1dHRvbihcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGlja2luZyB0aGUgcGx1cyBidXR0b24sIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgYnV0IHdpbGwgaW5jcmVhc2VkXHJcbiAgICAgKiBieSBvbmUgdW50aWwgaXQgcmVhY2hlcyBpdHMgbWF4aW11bSB2YWx1ZSwgYXQgd2hpY2ggcG9pbnQsIHRoZSBidXR0b25cclxuICAgICAqIGJlY29tZXMgZGlzYWJsZWQuIEFsc28gd2lsbCByZW1vdmUgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBmcm9tIHRoZSBtaW51c1xyXG4gICAgICogYnV0dG9uIGlmIGl0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgbWluVmFsdWUuXHJcbiAgICAgKi9cclxuXHJcbiAgICBidG5VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoYnRuVXAuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgIT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgaW5wdXRCb3gudmFsdWUgPSBTdHJpbmcoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSArIDEpO1xyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA+IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPT09IG1heFZhbHVlKSB7XHJcbiAgICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfYnVpbGRfaW5wdXRfYm94KFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uY2UgYSBuZXcgdmFsdWUgaGFzIGJlZW4gZW50ZXJlZCBpbnRvIHRoZSBpbnB1dCBib3gsXHJcbiAgICAgKiBkaXNhYmxlL3JlLWVuYWJsZSB0aGUgcGx1cyBhbmQgbWludXMgYnV0dG9ucyBpbiBhY2NvcmRhbmNlIHdpdGggd2hldGhlclxyXG4gICAgICogdGhlIHZhbHVlIGlzIGVxdWFsIHRvIHRoZSBtaW4vbWF4IHZhbHVlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgLy8gQ2hlY2sgYWdhaW5zdCB0aGUgbWluIHZhbHVlXHJcbiAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpIDw9IG1pblZhbHVlKSB7XHJcbiAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENoZWNrIGFnYWluc3QgYnRuVXAncyBtYXggdmFsdWVcclxuICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPj0gbWF4VmFsdWUpIHtcclxuICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwOC8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIE1hbmFnZXMgdGhlIHNlYXJjaCBmaWx0ZXJzIG9uIHRoZSBwYWdlLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIFJlc3BvbnNpYmxlIGZvciBjYWxsaW5nIHRoZSBzZWFyY2ggQVBJIHdoaWNoIHdpbGwgZmlsdGVyIHJlc3VsdCBiYXNlZCBvblxyXG4vLyB3aGF0IHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB1c2luZyB0aGUgZmlsdGVycy5cclxuLy9cclxuLy8gV2lsbCB1c2UgdGhlIG5hdmlnYXRpb24gc2VhcmNoIGJhcidzIGZvcm0gdG8gaW50ZXJhY3Qgd2l0aCB0aGUgQVBJLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlcnMge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgZXhwYW5kIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBiYXIgYW5kIHRoZSBmb3JtIGVsZW1lbnQgdG8gYWxsb3cgaXQgdG9cclxuICAgKiB0YWtlIGluIHRoZSBmaWx0ZXIgb3B0aW9ucyBhcyBwYXJ0IG9mIHRoZSBHRVQgcmVxdWVzdCB3aGVuZXZlciBhIHVzZXJcclxuICAgKiBpbml0aWF0ZXMgYSBzZWFyY2guXHJcbiAgICpcclxuICAgKiBDYWxscyB0aGUgQVBJIHRvIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yIGRvZXMgbm90IHJlcXVpcmUgYW55IGFyZ3VtZW50cyBhbmQgd2lsbCBpbnN0ZWFkIHVzZVxyXG4gICAgICogZWxlbWVudHMgZnJvbSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICB0aGlzLl9leHBhbmRfbmF2X3NlYXJjaCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2V4cGFuZF9uYXZfc2VhcmNoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBhbmRzIG9uIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBlbGVtZW50cyBzbyB0aGF0IHdoZW4gc2VuZGluZyBhIEdFVFxyXG4gICAgICogcmVxdWVzdCwgZmlsdGVycyB3aWwgYmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgY29uc3QgbmF2Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwibmF2X19zZWFyY2hcIlxyXG4gICAgKVswXSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gQWRkIGhpZGRlbiBpbnB1dHMgdG8gY29udGFpbiB0aGUgdmFsdWVzIG9uIHRoZSBmaWx0ZXJzLlxyXG4gICAgY29uc3QgaW5wdXROYW1lcyA9IFtcImYtbWluUHJpY2VcIiwgXCJmLW1heFByaWNlXCIsIFwiZi1jYXRlZ29yeVwiLCBcImYtY29sb3VyXCJdO1xyXG4gICAgZm9yIChjb25zdCBpbnB1dE5hbWUgb2YgaW5wdXROYW1lcykge1xyXG4gICAgICBjb25zdCBoaWRkZW5JbnB1dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgIFwiSU5QVVRcIlxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGhpZGRlbklucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpbnB1dE5hbWUpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXROYW1lKTtcclxuICAgICAgbmF2Rm9ybS5hcHBlbmRDaGlsZChoaWRkZW5JbnB1dE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0cyB3aGVuIGEgZmlsdGVyIGlzIHNlbGVjdGVkXHJcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgICBmb3IgKGxldCBvcHQgPSAwOyBvcHQgPCBkcm9wZG93bk9wdGlvbnMubGVuZ3RoOyBvcHQrKykge1xyXG4gICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRyb3Bkb3duT3B0aW9uc1tvcHRdO1xyXG4gICAgICBsZXQgaGlkZGVuSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRyb3Bkb3duT3B0aW9uLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikpIHtcclxuICAgICAgICBjYXNlIFwibWluLXByaWNlXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImYtbWluUHJpY2VcIlxyXG4gICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1heC1wcmljZVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjb2xvdXJcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmLWNvbG91clwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaGlkZGVuSW5wdXQpIHtcclxuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCEudmFsdWUgPSBkcm9wZG93bk9wdGlvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIS50ZXh0Q29udGVudCE7XHJcblxyXG4gICAgICAgICAgLy8gQ2FsbHMgdGhlIHNlYXJjaCByZXN1bHQgQVBJIGFuZCB0aGVuIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgICAgICAgIGNvbnN0IEFQSVBhdGggPSB0aGlzLl9BUElfcGF0aCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpIGFzIFtdO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcl9yZXN1bHRzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX0FQSV9wYXRoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIEFQSSBocmVmIHBhdGggd2hlcmUgdGhlIHJlcXVlc3Qgd2lsbCBiZSBzZW50LlxyXG4gICAgICogVGhpcyBpbXBsZW1lbnRzIHRoZSBmaWx0ZXJzIHdpdGhpbiB0aGUgYWN0dWFsIFVSTC5cclxuICAgICAqL1xyXG4gICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiL3NlYXJjaC9cIiwgXCIvc2VhcmNoLXJlc3VsdHMvXCIpO1xyXG5cclxuICAgIGNvbnN0IGhpZGRlbkluTWluUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluTWF4UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ29sb3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1jb2xvdXJcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGlmIChoaWRkZW5Jbk1pblByaWNlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1taW5QcmljZT1cIiArIGhpZGRlbkluTWluUHJpY2UudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLW1pblByaWNlPS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtbWluUHJpY2U9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5NYXhQcmljZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtbWF4UHJpY2U9XCIgKyBoaWRkZW5Jbk1heFByaWNlLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1tYXhQcmljZT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLW1heFByaWNlPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluQ2F0ZWdvcnkudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLWNhdGVnb3J5PVwiICsgaGlkZGVuSW5DYXRlZ29yeS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtY2F0ZWdvcnk9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1jYXRlZ29yeT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5JbkNvbG91ci52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtY29sb3VyPVwiICsgaGlkZGVuSW5Db2xvdXIudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLWNvbG91cj0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLWNvbG91cj0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBocmVmO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2ZpbHRlcl9yZXN1bHRzKEFQSVJlc3VsdHM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlcnMgdGhlIHJlc3VsdHMgb24gdGhlIHNlYXJjaCBwYWdlIGluIGFjY29yZGFuY2UgdG8gdGhlIGRhdGFcclxuICAgICAqIHJldHJpZXZlZCBmcm9tIHRoZSBzZWFyY2ggQVBJLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHMnKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9yaWdSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0c19fcmVzdWx0Jyk7XHJcblxyXG4gICAgbGV0IHZhbGlkUHJvZHVjdHMgPSBbXTtcclxuICAgIHJlc3VsdDogSlNPTjtcclxuICAgIGZvciAoY29uc3QgcmVzdWx0IGluIEFQSVJlc3VsdHMpIHtcclxuICAgICAgdmFsaWRQcm9kdWN0cy5wdXNoKEFQSVJlc3VsdHNbcmVzdWx0XS5wcm9kdWN0X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBySUQgPSAwOyBySUQ8b3JpZ1Jlc3VsdHMubGVuZ3RoOyBySUQrKykge1xyXG4gICAgICBpZiAodmFsaWRQcm9kdWN0cy5pbmNsdWRlcyhOdW1iZXIob3JpZ1Jlc3VsdHNbcklEXS5nZXRBdHRyaWJ1dGUoJ0lEJykhKSkpIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjgvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbnRhaW5zIGltcG9ydHMgb2YgYWxsIHRoZSBtYWluIGNsYXNzZXMuXHJcbi8vIEJlaGF2ZXMgYXMgdGhlIG1haW4gaHViIGZvciB0aGUganMgYnVuZGxlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudVwiO1xyXG5pbXBvcnQgeyBRdWFudGl0eUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcXVhbnRpdHlcIjtcclxuaW1wb3J0IHsgU2VhcmNoRmlsdGVycyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoX2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgRXh0ZW5kUHJvZHVjdFBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IENhcm91c2VsSW1ncyB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2Fyb3VzZWwtaW1nc1wiO1xyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5pbXBvcnQgeyBCYXNrZXRQYWdlIH0gZnJvbSBcIi4vcGFnZXMvYmFza2V0L2Jhc2tldFwiO1xyXG5cclxuLy8gQnVpbGQgdGhlIG5hdmlnYXRpb25cclxubmV3IE5hdmlnYXRpb24oKTtcclxuXHJcbi8vIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGJhc2tldFxyXG5uZXcgQmFza2V0U3RhdGUoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBkcm9wZG93biBtZW51XHJcbm5ldyBEcm9wZG93bk1lbnUoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBzZWFyY2ggZmlsdGVyc1xyXG5uZXcgU2VhcmNoRmlsdGVycygpO1xyXG5cclxuaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiL3Byb2R1Y3RzL1wiKSkge1xyXG4gIG5ldyBFeHRlbmRQcm9kdWN0UGFnZSgpO1xyXG4gIG5ldyBRdWFudGl0eUNvbXBvbmVudCgpO1xyXG4gIG5ldyBDYXJvdXNlbEltZ3MoKTtcclxufVxyXG5cclxuaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiL2Jhc2tldC9cIikpIHtcclxuICBuZXcgQmFza2V0UGFnZSgpO1xyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDUvMDEvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBUaGUgYmFza2V0IHBhZ2UuXHJcbi8vXHJcbi8vIEZVTkNUSU9OQUxJVFlcclxuLy8gLSBDYWxscyB0aGUgYmFza2V0LWluZm8tQVBJIHdoZXJlIHVzaW5nIHRoZSBsb2NhbCBzdG9yYWdlIGl0IGlzIGFibGUgdG8gc2VuZFxyXG4vLyAgIGEgR0VUIHJlcXVlc3QgdG8gdGVoIEFQSSBzaXRlIHVzaW5nIHRoZSBwcmltYXJ5IGtleXMgb2YgdGhlIGl0ZW1zIGluIHRoZVxyXG4vLyAgIGJhc2tldC5cclxuLy8gLSBCdWlsZHMgcGFydCBvZiB0aGUgRE9NIHdoaWNoIHdpbGwgZGlzcGxheSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgd2hhdCBpcyBpblxyXG4vLyAgIGJhc2tldC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4vLi4vLi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFza2V0UGFnZSBleHRlbmRzIEJhc2tldFN0YXRlIHtcclxuICAvKipcclxuICAgKiBXaWxsIGJ1aWxkIGVsZW1lbnRzIG9udG8gYmFza2V0IHBhZ2UgdXNpbmcgYW4gQVBJIHRvIHJldHJpZXZlXHJcbiAgICogaW5mb3JtYXRpb24gb24gcHJvZHVjdHMgY3VycmVudGx5IGluIHRoZSB1c2VyJ3MgYmFza2V0IChpbmZvcm1hdGlvblxyXG4gICAqIHN0b3JlZCBpbiBsb2NhbCBzdG9yYWdlKVxyXG4gICAqL1xyXG5cclxuICAvLyBUaGUgbWFpbiBsb2NhdGlvbiBhcyB0byB3aGVyZSBlYWNoIHByb2R1Y3Qgd2lsbCBiZSBpbnNlcnRlZCBmcm9tIHRoZVxyXG4gIC8vIHVzZXIncyBiYXNrZXQuXHJcbiAgc3VtbWFyeUl0ZW1zUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImJhc2tldC1zdW1tYXJ5LWRhdGFcIlxyXG4gICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGJhc2tldEl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgcHJvY2VzcyBpbiB3aGljaCB0aGUgYmFza2V0IHBhZ2UgRE9NIGlzIGJ1aWxkLlxyXG4gICAgICovXHJcbiAgICBzdXBlcigpO1xyXG4gICAgaWYgKHRoaXMuaXRlbXMgIT0gbnVsbCAmJiB0aGlzLml0ZW1zICE9IFwie31cIikge1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBKU09OLnBhcnNlKHRoaXMuaXRlbXMpKSB7XHJcbiAgICAgICAgdGhpcy5iYXNrZXRJdGVtcy5wdXNoKGtleSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJhc2tldEl0ZW1zU3RyID0gdGhpcy5iYXNrZXRJdGVtcy5qb2luKFwiLFwiKTtcclxuXHJcbiAgICAgIC8vIENhbGwgQVBJXHJcbiAgICAgIGNvbnN0IEFQSVBhdGggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFxyXG4gICAgICAgIC9iYXNrZXQuKi8sXHJcbiAgICAgICAgXCJiYXNrZXQtaW5mby1BUEkvP3Brcz1cIiArIGJhc2tldEl0ZW1zU3RyXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIEFQSVBhdGgpO1xyXG4gICAgICByZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKEFQSVBhdGgpO1xyXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCBBUElSZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgaWYgKEFQSVJlc3BvbnNlLnByb2R1Y3RzSW5mbykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkX2Jhc2tldF9zdW1tYXJ5KEFQSVJlc3BvbnNlLnByb2R1Y3RzSW5mbyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9iYXNrZXRfc3VtbWFyeShhbGxQcm9kdWN0czogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIGVhY2ggZWxlbWVudCBpbnRvIHRoZSBET00gaW5zaWRlIHRoZSB0YXJnZXQgcGFyZW50IGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgY29uc3QgcHJvZHVjdFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9iYXNrZXQuKi8sIFwicHJvZHVjdHMvXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwcm9kdWN0ID0gYWxsUHJvZHVjdHNbaV07XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcblxyXG4gICAgICAvLyBEaXYgdG8gY29udGFpbiBhbGwgcHJvZHVjdCBlbGVtZW50cywgd2hpY2ggd2lsbCB0aGVuIGJlIGFwcGVuZGVkXHJcbiAgICAgIC8vIGludG8gdGhlIHBhcmVudCBlbGVtZW50LlxyXG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YWJsZV9fcm93XCIpO1xyXG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwicHJvZHVjdC1pZFwiLCBwcm9kdWN0LnByb2R1Y3RJRCk7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IEltYWdlXHJcbiAgICAgIGNvbnN0IGltZ0FUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgaW1nQVRhZy5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgIFwidGFibGVfX2ZpZWxkIHRhYmxlX19maWVsZC0taW1nXCJcclxuICAgICAgKTtcclxuICAgICAgaW1nQVRhZy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQpO1xyXG4gICAgICBpbWdBVGFnLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1pbWFnZVwiKTtcclxuICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIHByb2R1Y3QuaW1hZ2UpO1xyXG4gICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkltYWdlIG9mIFwiICsgcHJvZHVjdC5wcm9kdWN0TmFtZSk7XHJcbiAgICAgIGltZ0FUYWcuYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IE5hbWVcclxuICAgICAgY29uc3QgbmFtZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgbmFtZUVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YWJsZV9fZmllbGRcIik7XHJcbiAgICAgIG5hbWVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1uYW1lXCIpO1xyXG4gICAgICBuYW1lRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQpO1xyXG4gICAgICBuYW1lRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QucHJvZHVjdE5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IFN0b3JlXHJcbiAgICAgIGNvbnN0IHN0b3JlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICBzdG9yZUVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YWJsZV9fZmllbGRcIik7XHJcbiAgICAgIHN0b3JlRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuICAgICAgc3RvcmVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1zdG9yZVwiKTtcclxuICAgICAgc3RvcmVFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5zdG9yZU5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IENvbG91clxyXG4gICAgICBjb25zdCBjb2xvdXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgIGNvbG91ckVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YWJsZV9fZmllbGRcIik7XHJcbiAgICAgIGNvbG91ckVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LWNvbG91clwiKTtcclxuICAgICAgY29sb3VyRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QuY29sb3VyTmFtZTtcclxuXHJcbiAgICAgIC8vIFF1YW50aXR5XHJcblxyXG4gICAgICAvLyBQcmljZVxyXG4gICAgICBjb25zdCBwcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgcHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFibGVfX2ZpZWxkXCIpO1xyXG4gICAgICBwcmljZUVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXByaWNlXCIpO1xyXG4gICAgICBwcmljZUVsZW0udGV4dENvbnRlbnQgPSBwcm9kdWN0LnByaWNlO1xyXG5cclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0FUYWcpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcmVFbGVtKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG91ckVsZW0pO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2VFbGVtKTtcclxuICAgICAgdGhpcy5zdW1tYXJ5SXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyNy8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIEZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBXaWxsIGhhbmRsZSB0aGUgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLiBUaGVzZSBpbmNsdWRlIHRoZVxyXG4vLyBmb2xsb3dpbmc6XHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgb250byB0aGUgSFRNTCBhZGRpbmcgb250byB0aGUgY29sb3VycyBmaWx0ZXIgb3B0aW9ucyBhcyB3ZWxsIGFzXHJcbi8vICAgIHRoZSBwcm9kdWN0IGluZm8gc2VjdGlvbi4gVGhlcmUgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB3aGF0IG90aGVyXHJcbi8vICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4vLyAgICByZXRyaWV2ZWQgZnJvbSBhbiBBUEkuXHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuLy8gICAgdG8gYmUgYWRkZWQgdG8gdGhlIGJhc2tldCBhbmQgZm9yIHRoZSBwYWdlIHRvIGJlIHJlZnJlc2hlZC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZFByb2R1Y3RQYWdlIGV4dGVuZHMgQmFza2V0U3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgaGFuZGxlIHRoZSBKUyBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuIFRoZXNlIGluY2x1ZGUgdGhlXHJcbiAgICogZm9sbG93aW5nOlxyXG4gICAqXHJcbiAgICogIC0gV2lsbCBidWlsZCBvbnRvIHRoZSBIVE1MIGFkZGluZyBvbnRvIHRoZSBjb2xvdXJzIGZpbHRlciBvcHRpb25zIGFzIHdlbGwgYXNcclxuICAgKiAgICB0aGUgcHJvZHVjdCBpbmZvIHNlY3Rpb24uIFRoZXJlIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gd2hhdCBvdGhlclxyXG4gICAqICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4gICAqICAgIHJldHJpZXZlZCBmcm9tIGFuIEFQSS5cclxuICAgKlxyXG4gICAqICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuICAgKiAgICB0byBiZSBhZGRlZCB0byB0aGUgYmFza2V0IGFuZCBmb3IgdGhlIHBhZ2UgdG8gYmUgcmVmcmVzaGVkLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogLSBSZXRyaWV2ZXMgZGF0YSBmcm9tIHRoZSBBUEkgYW5kIGNhbGxzIG1ldGhvZHMgdG8gYnVpbGQgb250byB0aGUgRE9NLlxyXG4gICAgICogLSBBZGRzIGZ1bmN0aW9uYWxpdHkgb250byB0aGUgXCJhZGQgdG8gYmFza2V0IGJ1dHRvblwiLlxyXG4gICAgICovXHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uc3QgQVBJUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgIFwiL3Byb2R1Y3RzL1wiLFxyXG4gICAgICBcIi9wcm9kdWN0cy9pbmZvLWFwaS9cIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIC8vIEFkZGluZyBjb2xvdXIgdmFyaWF0aW9uc1xyXG4gICAgICAgIGlmIChkYXRhLmNvbG91cnMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfY29sb3VycyhkYXRhLmNvbG91cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgb3RoZXIgcHJvZHVjdHMgb2YgdGhlIHNhbWUgc2V0XHJcbiAgICAgICAgaWYgKGRhdGEuc2V0cykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9wcm9kdWN0X3NldHMoZGF0YS5zZXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIHNpbWlsYXIgcHJvZHVjdHNcclxuICAgICAgICBpZiAoZGF0YS5zaW1pbGFyKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoZGF0YS5zaW1pbGFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIGZlYXR1cmVzIGluZm9ybWF0aW9uXHJcbiAgICAgICAgaWYgKGRhdGEuZmVhdHVyZXMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfZmVhdHVyZXMoZGF0YS5mZWF0dXJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYWRkX3RvX2Jhc2tldCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9jb2xvdXJzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgZHJvcGRvd24gY29sb3VycyBkcm9wZG93biBtZW51IGFuZCBhZGRzIG1vcmUgY29sb3Vyc1xyXG4gICAgICogaW4gYWNjb3JkYW5jZSB0byBob3cgbWFueSBob3cgbWFueSBjb2xvdXJzIHdlcmUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBhcHBlbmQgZWxlbWVudHMgb250byB0aGUgZWxlbWVudFxyXG4gICAgICogI3Byb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBGb3IgZWFjaCBjb2xvdXIsIHRoZSBmb2xsb3dpbmcgSFRNTCB3aWxsIGJlIGFwcGVuZGVkOlxyXG4gICAgICpcclxuICAgICAqIDxhXHJcbiAgICAgKiAgIGhyZWY9XCJ7bGluayB0byBwcm9kdWN0fVwiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIlxyXG4gICAgICogICBmb3I9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICogICA8bGFiZWwgZm9yPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIj5cclxuICAgICAqICAgICA8c3BhblxyXG4gICAgICogICAgICAgY2xhc3M9XCJzbS1jb2xvdXItYm94XCJcclxuICAgICAqICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHtjb2xvdXIgaGV4IHZhbHVlfTtcIj5cclxuICAgICAqICAgICA8L3NwYW4+XHJcbiAgICAgKiAgICAge2NvbG91ci1uYW1lfVxyXG4gICAgICogICA8L2xhYmVsPlxyXG4gICAgICogPC9hPlxyXG4gICAgICogPGlucHV0XHJcbiAgICAgKiAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCJcclxuICAgICAqICAgbmFtZT1cInByb2QtZi1jb2xvdXJcIlxyXG4gICAgICogICBpZD1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqICAgdmFsdWU9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICBjb25zdCBjb2xvdXIgPSBhdHRyc1thXS5jb2xfbmFtZTtcclxuICAgICAgICBjb25zdCBoZXhfdmFsID0gYXR0cnNbYV0uY29sX2hleF92YWw7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImFcIiB0YWdcclxuICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwibGFiZWxcIiB0YWdcclxuICAgICAgICBjb25zdCBsYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcbiAgICAgICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcInNwYW5cIiB0YWdcclxuICAgICAgICBjb25zdCBzcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHNwYW5FbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic20tY29sb3VyLWJveFwiKTtcclxuICAgICAgICBzcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IFwiICsgaGV4X3ZhbCArIFwiO1wiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwiaW5wdXRcIiB0YWdcclxuICAgICAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9kLWYtY29sb3VyXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVhY2ggdGFnIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGFyZW50IGVsZW1lbnRzLlxyXG4gICAgICAgIGxhYmVsRWxlbS5hcHBlbmRDaGlsZChzcGFuRWxlbSk7XHJcbiAgICAgICAgbGFiZWxFbGVtLmFwcGVuZChjb2xvdXIpO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGxhYmVsRWxlbSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyB0aGUgZWxlbWVudHMgdG8gdGhlIHRhcmdldCBlbGVtZW50IGluIHRoZSBET00uXHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChpbnB1dEVsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1jb2xvdXItdmFyaWF0aW9ucyBkb2VzIG5vdCBleGlzdCwgYWx0ZXJuYXRpdmUgY29sb3VycyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfcHJvZHVjdF9zZXRzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgXCJwcm9kdWN0IHNldHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjcHJvZHVjdC1zZXRzLlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHByb2R1Y2UgdGhlIGZvbGxvd2luZyBIVE1MIGZvciBlYWNoIHNldDpcclxuICAgICAqXHJcbiAgICAgKiA8YSBjbGFzcz1cInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiIGhyZWY9XCJ7cHJvZHVjdCB1cmx9XCJcclxuICAgICAqICAgPGltZ1xyXG4gICAgICogICAgIGNsYXNzPVwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgKiAgICAgYWx0PVwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4ge3Byb2R1Y3QgbmFtZX1cIlxyXG4gICAgICogICA+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCI+e3Byb2R1Y3QgbmFtZX08L3NwYW4+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIj57cHJvZHVjdCBwcmljZX08L3NwYW4+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3Qtc2V0c1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2FdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgaW1nID0gYXR0cnNbYV0uc2hvd2Nhc2VfaW1hZ2U7XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBhdHRyc1thXS5wcmljZTtcclxuXHJcbiAgICAgICAgLy8gXCJBXCIgdGFnIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0LlxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIik7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nKTtcclxuICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiYWx0XCIsXHJcbiAgICAgICAgICBcIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIChcIiArIG5hbWUgKyBcIn1cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFwiU1BBTlwiIHRhZ3MgY29udGFpbmluZyB0aGUgcHJvZHVjdCBuYW1lIGFuZCBwcmljZVxyXG4gICAgICAgIGNvbnN0IHRleHRTcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHRleHRTcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0UHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgdGV4dFByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRQcmljZUVsZW0udGV4dENvbnRlbnQgPSBcIsKjXCIgKyBwcmljZTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgLy8gYW5kIGFwcGVuZCB0aGVtIG9udG8gdGhlIHRhcmdldEVsZW0gaW4gdGhlIERPTS5cclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRQcmljZUVsZW0pO1xyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1zZXRzIGRvZXMgbm90IGV4aXN0LCBwcm9kdWN0LXNldHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBcInNpbWlsYXIgcHJvZHVjdHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjc2ltaWxhci1wcm9kdWN0cy5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBwcm9kdWNlIHRoZSBmb2xsb3dpbmcgSFRNTCBmb3IgZWFjaCBzZXQ6XHJcbiAgICAgKlxyXG4gICAgICogPGEgY2xhc3M9XCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIiBocmVmPVwie3Byb2R1Y3QgdXJsfVwiXHJcbiAgICAgKiAgIDxpbWdcclxuICAgICAqICAgICBjbGFzcz1cInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICogICAgIGFsdD1cIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIHtwcm9kdWN0IG5hbWV9XCJcclxuICAgICAqICAgPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0IG5hbWV9PC9zcGFuPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCI+e3Byb2R1Y3QgcHJpY2V9PC9zcGFuPlxyXG4gICAgICogPC9hPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW1pbGFyLXByb2R1Y3RzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbYV0ubmFtZTtcclxuICAgICAgICBjb25zdCBpbWcgPSBhdHRyc1thXS5zaG93Y2FzZV9pbWFnZTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IGF0dHJzW2FdLnByaWNlO1xyXG5cclxuICAgICAgICAvLyBcIkFcIiB0YWcgd2hpY2ggd2lsbCBjb250YWluIHRoZSBpbWFnZSBhbmQgdGhlIHRleHQuXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpbWlsYXItcHJvZHVjdCByZWxhdGVkLXByb2R1Y3RcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImFsdFwiLFxyXG4gICAgICAgICAgXCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiAoXCIgKyBuYW1lICsgXCJ9XCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBcIlNQQU5cIiB0YWdzIGNvbnRhaW5pbmcgdGhlIHByb2R1Y3QgbmFtZSBhbmQgcHJpY2VcclxuICAgICAgICBjb25zdCB0ZXh0U3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICB0ZXh0U3BhbkVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRTcGFuRWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRQcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICB0ZXh0UHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRQcmljZUVsZW0udGV4dENvbnRlbnQgPSBcIsKjXCIgKyBwcmljZTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgLy8gYW5kIGFwcGVuZCB0aGVtIG9udG8gdGhlIHRhcmdldEVsZW0gaW4gdGhlIERPTS5cclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRQcmljZUVsZW0pO1xyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjc2ltaWxhci1wcm9kdWN0cyBkb2VzIG5vdCBleGlzdCwgc2ltaWxhci1wcm9kdWN0cyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGJ1aWxkX2ZlYXR1cmVzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGZlYXR1cmVzIHNlY3Rpb24gb2YgcHJvZHVjdCBpbmZvcm1hdGlvbiBiYXNlZCBvbiByZXN1bHRzXHJcbiAgICAgKiByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJLlxyXG4gICAgICogV2lsbCBjcmVhdGUgYSBcIlBcIiB0YWcgZm9yIGVhY2ggZmlsdGVyIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgdGFyZ2V0XHJcbiAgICAgKiBlbGVtZW50IGluIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWZlYXR1cmVzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgYXR0cnMubGVuZ3RoOyBmKyspIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbZl0ubmFtZTtcclxuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3QtaW5mb19fc2VjdGlvbl9fdGV4dFwiKTtcclxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChuZXdFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3QtZmVhdHVyZXMgZG9lcyBub3QgZXhpc3QsIHNpbWlsYXItcHJvZHVjdHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGFkZF90b19iYXNrZXQoKSB7XHJcbiAgICAvKiogQWRkcyBwcm9kdWN0cyBpbnRvIHRoZSBiYXNrZXQgKi9cclxuICAgIGNvbnN0IGlucHV0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcInF1YW50aXR5LWN0cmxcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcHJvZHVjdElkID0gTnVtYmVyKGlucHV0RWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlkXCIpKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJhZGQtdG8tYmFza2V0LWJ0blwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHF1YW50aXR5ID0gTnVtYmVyKGlucHV0RWxlbS52YWx1ZSk7XHJcblxyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihxdWFudGl0eSkpIHtcclxuICAgICAgICBzdXBlci5hZGRfaXRlbShwcm9kdWN0SWQsIHF1YW50aXR5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcIkNoZWNrIHRoZSBxdWFudGl0eSwgaXQgaXMgZWl0aGVyIE5hTiBvciBhIGZsb2F0LiBNdXN0IGJlIGEgbnVtYmVyXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAzMC8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gUGFnZXMgd2hlcmUgaW50ZXJhY3Rpb24gd2l0aCBpdGVtcyBpbiB0aGUgYmFza2V0IG5lZWQgdG8gYmUgYWNjZXNzIGFuZC9vclxyXG4vLyBtb2RpZmllZC5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gLSBNYW5hZ2UgdGhlIGJhc2tldCBpdGVtc1xyXG4vLyAtIEtlZXAgYmFza2V0IGRhdGEgd2hlbmV2ZXIgdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcclxuLy8gLSBVcGRhdGVzIHRoZSBiYXNrZXQgaXRlbXMgY291bnRcclxuLy9cclxuLy8gREVTQ1JJUFRJT046XHJcbi8vIC0tLS0tLS0tLS0tLVxyXG4vLyBMZXZlcmFnZXMgdGhlIHBvd2VyIG9mIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCBhIHRyYWNrIG9mIHRoZSBiYXNrZXQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgQmFza2V0U3RhdGUge1xyXG4gIHRvdGFsSXRlbXM6IHN0cmluZyB8IG51bGwgfCBudW1iZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICBcInRvdGFsQmFza2V0U2l6ZVwiXHJcbiAgKTtcclxuICBpdGVtczogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFza2V0SXRlbXNcIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3JlYWRfaXRlbXMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgdG90YWwgYW5kIGJhc2tldCBzaXplIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIGNvbnZlcnRzXHJcbiAgICAgKiB0aGUgdmFsdWVzIGludG8gdHlwZXMgdGhhdCBjYW4gYmUgd29ya2VkIHdpdGguXHJcbiAgICAgKi9cclxuICAgIGlmICghdGhpcy50b3RhbEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMudG90YWxJdGVtcyA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKHRoaXMuaXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IHt9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfc2V0X2l0ZW1zKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgbG9jYWwgc3RvcmFnZSBpdGVtcyBpbnRvIHN0cmluZ3MgYW5kIHNhdmVzIHRoZW0gb250byB0aGVcclxuICAgICAqIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBiYXNrZXQgaXRlbXMgY291bnRlci5cclxuICAgICAqL1xyXG5cclxuICAgIGlmICghdGhpcy50b3RhbEl0ZW1zKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsQmFza2V0U2l6ZVwiLCBcIjBcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgXCJ0b3RhbEJhc2tldFNpemVcIixcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMudG9TdHJpbmcoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pdGVtcykge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYXNrZXRJdGVtc1wiLCBcInt9XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYXNrZXRJdGVtc1wiLCB0aGlzLml0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGJhc2tldFxyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGFkZF9pdGVtKGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgIC8qKiBNZXRob2QgZm9yIGFkZGluZyBpdGVtcyBpbnRvIHRoZSBiYXNrZXQuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcblxyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgKz0gcXVhbnRpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXRlbXNbaWRdKSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdICs9IHF1YW50aXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gPSBxdWFudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHJlbW92ZV9pdGVtKGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgIC8qKiBNZXRob2QgZm9yIHJlbW92aW5nIGl0ZW1zIGZyb20gdGhlIGJhc2tldC4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuXHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIGlmICh0aGlzLnRvdGFsSXRlbXMgPiAwKSB7XHJcbiAgICAgIHRoaXMudG90YWxJdGVtcyAtPSBxdWFudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pdGVtc1tpZF0pIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gPSBOdW1iZXIodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSAtPSBxdWFudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHVwZGF0ZV9iYXNrZXRfY291bnRlcihuZXdOdW06IHN0cmluZyB8IG51bWJlciB8IG51bGwpIHtcclxuICAgIC8qKiBVcGRhdGVzIHRoZSBiYXNrZXQgY291bnRlciBudW1iZXIgKi9cclxuICAgIGNvbnN0IGJhc2tldENvdW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImJhc2tldC10b3RhbC1pdGVtc1wiXHJcbiAgICApIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgICBpZiAobmV3TnVtKSB7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLnRleHRDb250ZW50ID0gbmV3TnVtLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=