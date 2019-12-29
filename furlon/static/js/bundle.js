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
            console.log(displayImages[im]);
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






new _components_navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]();
new _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"]();
new _components_search_filters__WEBPACK_IMPORTED_MODULE_3__["SearchFilters"]();
if (window.location.href.includes('/products/')) {
    new _pages_products_product__WEBPACK_IMPORTED_MODULE_4__["ExtendProductPage"]();
    new _components_quantity__WEBPACK_IMPORTED_MODULE_2__["QuantityComponent"]();
    new _components_carousel_imgs__WEBPACK_IMPORTED_MODULE_5__["CarouselImgs"]();
}


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
var ExtendProductPage = (function () {
    function ExtendProductPage() {
        var _this = this;
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
    return ExtendProductPage;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7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QUM7U0FDSDtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJmdXJsb24vc3RhdGljL2pzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnVybG9uL3N0YXRpYy90cy9tYWluLnRzXCIpO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyOS8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBDYXJvdXNlbCBzdHlsZWQgaW1hZ2Ugc2xpZGUgc2hvd3MuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIE9uIGNsaWNrIG9mIGEgaW1hZ2UgdGh1bWJuYWlscyBvciB0aGUgY3VycmVudCBpbWFnZSwgdGhlIGN1cnJlbnQgaW1hZ2Ugc2hvdWxkXHJcbi8vIGNoYW5nZSBhY2NvcmRpbmdseS5cclxuLy8gQW5pbWF0aW9ucyBhcmUgaGFuZGxlZCB0aHJvdWdoIHRoZSBDU1MsIHRoZSBKUyBzZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgdG9cclxuLy8gY2hhbmdlIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBkaXNwbGF5IGltYWdlcyBhY2NvcmRpbmdseSBzbyBhcyB0byBkaXNwbGF5IHRoZVxyXG4vLyBzZWxlY3RlZCBpbWFnZS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbEltZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBldmVudCBsaXN0ZW5lcnMgb24gdGhlIGNhcm91c2VsIGltYWdlIGltYWdlcyBzdWNoIHRoYXQgd2hlblxyXG4gICAqIGEgdGh1bWJuYWlsIG9yIHRoZSBtYWluIHBpY3R1cmUgaXMgY2xpY2tlZCBvbiwgdGhlIGltYWdlIHdpbGwgY2hhbmdlLlxyXG4gICAqIFRoZSBhbmltYXRpb24gYW5kIHBvc2l0aW9uaW5nIGlzIGNvbnRyb2xsZWQgdmlhIHRoZSBDU1MsIHRoZSBjbGFzcyB3aWxsXHJcbiAgICogYWRkIGFuZCByZW1vdmUgYXR0cmlidXRlcyBmcm9tIHRoZSBlbGVtZW50cywgc28gdGhhdCB0aGUgYW5pbWF0aW9ucyBjYW5cclxuICAgKiBiZSB0cmlnZ2VyZWQuXHJcbiAgICovXHJcbiAgY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1jb250YWluZXJcIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTG9jYXRlcyB0aGUgZWxlbWVudHMgd2hlcmUgYW4gZXZlbnQgbGlzdGVuZXJzIG5lZWQgdG8gYmUgYWRkZWQgYW5kXHJcbiAgICAgKiBjYWxscyBtZXRob2RzIHRvIGFkZCBldmVudCBsaXN0ZW5lcnMgZGVwZW5kaW5nIG9uIHdoYXQgdGhlIGVsZW1lbnRcclxuICAgICAqIGlzLlxyXG4gICAgICovXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICAvLyBET00gZWxlbWVudHMgZm9yIGV2ZW50IGxpc3RlbmVycyB0byBiZSBhZGRlZC5cclxuICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LXNlY3Rpb25cIlxyXG4gICAgICApW2NdO1xyXG4gICAgICBjb25zdCBkaXNwbGF5SW1hZ2VzID0gZGlzcGxheUNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LXNlY3Rpb25fX2ltZ1wiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBpbWdUaHVtYnNDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbY10uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1jb250cm9sc1wiXHJcbiAgICAgIClbMF07XHJcbiAgICAgIGNvbnN0IGltZ1RodW1icyA9IGltZ1RodW1ic0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzLWNvbnRyb2xcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gIE1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBlYWNoIERPTSBlbGVtZW50LlxyXG4gICAgICB0aGlzLm9uX2NsaWNraW5nX3RodW1icyhkaXNwbGF5SW1hZ2VzLCBpbWdUaHVtYnMpO1xyXG4gICAgICB0aGlzLm9uX2NsaWNraW5nX2Rpc3BsYXlfaW1nKGRpc3BsYXlJbWFnZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgb25fY2xpY2tpbmdfdGh1bWJzKFxyXG4gICAgZGlzcGxheUltYWdlczogSFRNTENvbGxlY3Rpb24sXHJcbiAgICBpbWdUaHVtYnM6IEhUTUxDb2xsZWN0aW9uXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIEVhY2ggaW1hZ2UgdGh1bWJuYWlsIGVsZW1lbnQgaGFzIGEgXCJmb3JcIiBhdHRyaWJ1dGUgd2hpY2ggaW5kaWNhdGVzXHJcbiAgICAgKiB3aGljaCBlbGVtZW50IG9uIHRoZSBkaXNwbGF5IHNlY3Rpb24gaXQgcmVwcmVzZW50cy4gVGhlIGRpc3BsYXkgaW1hZ2VcclxuICAgICAqIGVsZW1lbnQgaGFzIGFuIFwiaW1nXCIgYXR0cmlidXRlIHdpdGggdGhlIHNhbWUgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogT24gY2xpY2tpbmcgb24gYSBpbWFnZSB0aHVtYm5haWwsIHRoZSBkaXNwbGF5IGF0dHJpYnV0ZSdzIHBvc2l0aW9uXHJcbiAgICAgKiBhdHRyaWJ1dGUgd2lsbCBiZWNvbWUgXCJzaG93XCIgd2hlcmUgdGhlIHNhbWUgYXR0cmlidXRlIHZhbHVlIGZvciBhbGxcclxuICAgICAqIG90aGVyIGltYWdlcyB3aWxsIGJlY29tZSBcImhpZGVcIi5cclxuICAgICAqXHJcbiAgICAgKiBOT1RFOiB0aGUgaW5pdGlhbCBpbWFnZSB3aWxsIGhhdmUgcG9zaXRpb249XCJpbml0XCIgaW5pdGlhbGx5IHNvIGFzIHRvXHJcbiAgICAgKiBhdm9pZCBhbnkgYW5pbWF0aW9ucyBvbiBzdGFydC4gSWYgdGhpcyBpbWFnZSB0aHVtYm5haWwgaXMgY2xpY2tlZCwgZG9cclxuICAgICAqIG5vdGhpbmcuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IHRodW1iID0gMDsgdGh1bWIgPCBpbWdUaHVtYnMubGVuZ3RoOyB0aHVtYisrKSB7XHJcbiAgICAgIGltZ1RodW1ic1t0aHVtYl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250cm9sc0ZvciA9IGltZ1RodW1ic1t0aHVtYl0uZ2V0QXR0cmlidXRlKFwiZm9yXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbSA9IDA7IGltIDwgZGlzcGxheUltYWdlcy5sZW5ndGg7IGltKyspIHtcclxuICAgICAgICAgIGlmIChkaXNwbGF5SW1hZ2VzW2ltXS5nZXRBdHRyaWJ1dGUoXCJpbWdcIikgPT09IGNvbnRyb2xzRm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5SW1hZ2VzW2ltXS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKSAhPSBcImluaXRcIikge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJoaWRlXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBvbl9jbGlja2luZ19kaXNwbGF5X2ltZyhcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGxheSBpbWFnZSwgaGlkZSB0aGUgaW1hZ2UgYW5kIHNob3cgdGhlXHJcbiAgICAgKiBuZXh0LlxyXG4gICAgICogQW5pbWF0aW9uIGlzIGhhbmRsZWQgYnkgdGhlIGNzcy4gRm9yIGFuaW1hdGlvbiB0byB3b3JrLCBvbiBjbGljayxcclxuICAgICAqIFwiaGlkZVwiIGlzIHNldCB0byB0aGUgYXR0cmlidXRlIHBvc2l0aW9uIG9uIHRoZSBjdXJyZW50IGltYWdlLCBhbmQgb25cclxuICAgICAqIHRoZSBuZXh0IGltYWdlLCB0aGUgXCJzaG93XCIgaXMgc2V0IHRvIHRoZSBwb3NpdGlvbiBhdHRyaWJ1dGUuXHJcbiAgICAgKi9cclxuICAgIGRpc3BsYXlJbWFnZXM6IEhUTUxDb2xsZWN0aW9uXHJcbiAgKSB7XHJcbiAgICBmb3IgKGxldCBpbSA9IDA7IGltIDwgZGlzcGxheUltYWdlcy5sZW5ndGg7IGltKyspIHtcclxuICAgICAgY29uc29sZS5sb2coZGlzcGxheUltYWdlc1tpbV0pO1xyXG4gICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGltID09PSBkaXNwbGF5SW1hZ2VzLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIGRpc3BsYXlJbWFnZXNbMF0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltICsgMV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gQ3VzdG9tIGRyb3Bkb3duIG1lbnVcclxuLy9cclxuLy8gUkVMQVRFRCBGSUxFUzpcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gX2Ryb3Bkb3duLW1lbnUuc2Nzc1xyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBQcm92aWRlcyBmdW5jdGlvbnMgZm9yIGEgY3VzdG9tIGRyb3Bkb3duIG1lbnUuXHJcbi8vIFRoZSBmdW5jdGlvbnMgd2lsbCB3b3JrIGZvciBkcm9wZG93biBtZW51cyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcclxuLy9cclxuLy8gPGZvcm0+XHJcbi8vICAgLi4uXHJcbi8vICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiPlxyXG4vLyAgICAgICA8c3Bhbj5Db2xvdXI8L3NwYW4+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zXCI+XHJcbi8vICAgICAgIDxsYWJlbCBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCIgZm9yPVwiY29sb3VyLXJlZFwiPlxyXG4vLyAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiXHJcbi8vICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuLy8gICAgICAgICBuYW1lPVwiZi1jb2xvdXJcIlxyXG4vLyAgICAgICAgIGlkPWNvbG91ci1yZWRcclxuLy8gICAgICAgICB2YWx1ZT1cInJlZFwiXHJcbi8vICAgICAgID5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIDwvZGl2PlxyXG4vLyAgIC4uLlxyXG4vLyA8L2Zvcm0+XHJcblxyXG4vLyBDU1Mgc2hvdWxkIGJlIHNldCB1cCB0byBoaWRlIHRoZSBpbnB1dCB0YWdzIGFuZCByZWx5IG9uIHRoZSBsYWJlbHMgdG8gc2VsZWN0XHJcbi8vIHRoZSByYWRpbyBidXR0b24uXHJcbi8vXHJcbi8vIEZVTkNUSU9OUzpcclxuLy8gLS0tLS0tLS0tLVxyXG4vLyAgLSBXaGVuIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBtZW51LCBleHBhbmQgdGhlIGxpc3Qgb2Ygb3B0aW9ucy5cclxuLy8gIC0gV2hlbiB1c2VyIHByZXNzZXMgYW4gb3B0aW9uLCBoaWdobGlnaHQgdGhhdCBvcHRpb24sIHVwZGF0ZSB0aGVcclxuLy8gICAgYnV0dG9uJ3MgaW5uZXIgdGV4dCB0byBtYXRjaCB0aGF0IG9mZiB0aGUgYnV0dG9uIHRleHQuXHJcbi8vICAtIFdoZW4gdXNlciBjbGlja3Mgb3V0c2lkZSwgY2xvc2UgYWxsIG1lbnVzLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRHJvcGRvd25NZW51IENsYXNzXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnUge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBjdXN0b20gZHJvcGRvd24gbWVudXMuXHJcbiAgICogVGhlc2UgaW5jbHVkZTpcclxuICAgKiAgLSBUb2dnbGUgb3Blbi9jbG9zZSBvZiB0aGUgbWVudSBvbiBjbGlja2luZyB0aGUgYnV0dG9uXHJcbiAgICogIC0gQ2xvc2UgdGhlIG1lbnUgb24gY2xpY2tpbmcgb3V0c2lkZVxyXG4gICAqICAtIE9uIHNlbGVjdGluZyBhbiBpdGVtOlxyXG4gICAqICAgIC0gSGlnaGxpZ2h0IHRoYXQgaXRlbVxyXG4gICAqICAgIC0gQ2hhbmdlIHRoZSB0ZXh0IG9mIHRoZSBidXR0b24gdGhlIHRleHQgb2YgdGhlIG9wdGlvbiBzZWxlY3RlZFxyXG4gICAqXHJcbiAgICogTm90ZTogdGhpcyBjbGFzcyB3aWxsIG5vdCBoYW5kbGUgQVBJIGNhbGxzLlxyXG4gICAqL1xyXG5cclxuICBkZE1lbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgIFwiZHJvcGRvd24tbWVudVwiXHJcbiAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQWRkcyBmdW5jdGlvbiB0byBjbG9zZSBhbGwgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGVsZW1lbnRcclxuICAgIHRoaXMuY2xvc2VfbWVudSgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSBmdW5jdGlvbnMgZm9yIGFsbCBtZW51IGVsZW1lbnRzLlxyXG4gICAgZm9yIChsZXQgbWVudUlkID0gMDsgbWVudUlkIDwgdGhpcy5kZE1lbnVzLmxlbmd0aDsgbWVudUlkKyspIHtcclxuICAgICAgdGhpcy5idWlsZF9tZW51KHRoaXMuZGRNZW51c1ttZW51SWRdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsb3NlX21lbnUoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyBhbGwgbWVudXMgd2hlbiBjbGlja2VkIG91dHNpZGUgb24gYW5vdGhlciBmaWx0ZXIgYnV0dG9uLlxyXG4gICAgICogQWxzbyBjYXJyaWVzIGZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBuYXYtbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiXHJcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgb3B0aW9uTGlzdHMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgIG9wdGlvbkxpc3RzW2lkeF0uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5hdlN1Yk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIlxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyQnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEJ0biA9IGZpbHRlckJ0bnNbaV07XHJcblxyXG4gICAgICBzZWxlY3RlZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIENsb3NlIG5hdiBtZW51c1xyXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG5hdlN1Yk1lbnVzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgIG5hdlN1Yk1lbnVzW2lkeF0uY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG9zZSBhbGwgb3RoZXIgZmlsdGVycyBsaXN0c1xyXG4gICAgICAgIC8vIEVhY2ggYnV0dG9uIGFuZCB0aGVpciBjaGlsZCBlbGVtZW50cyBjb250YWluIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBcImZpbHRlci1mb3JcIi5cclxuICAgICAgICAvLyBMaWtld2lzZSwgZWFjaCBkcm9wZG93biBvcHRpb24gZGl2IGNvbnRhaW4gdGhlIHNhbWUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gVGhpcyBjaGVja3MgZm9yIHRoZSBidXR0b24gcHJlc3NlZCwgaWYgaXRzIFwiZmlsdGVyLWZvclwiIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIG1hdGNoZXMgdGhhdCBvZiBpdHMgZHJvcGRvd24gb3B0aW9ucy4gaWYgbm90LCB0aGVuIGNsb3NlLlxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmlsdGVyQnRucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IGZpbHRlckJ0bnNbal07XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikgIT1cclxuICAgICAgICAgICAgc2VsZWN0ZWRCdG4uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIEp1c3QgaW5jYXNlIHRoZSBzdHJ1Y3R1cmUgY2hhbmdlcywgYW5kIHRoZSBuZXh0IHNpYmxpbmcgaW5zIG5vdCB0aGUgb3B0aW9ucyBsaXN0XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZyEuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGJ1aWxkX21lbnUoZGRNZW51OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIGVhY2ggZHJvcGRvd24gbWVudS5cclxuICAgICAqL1xyXG4gICAgY29uc3Qgb3B0aW9uc0J0biA9IGRkTWVudS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCJcclxuICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcHRpb25zTGlzdENvbnRhaW5lciA9IGRkTWVudS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0SXRlbXMgPSBvcHRpb25zTGlzdENvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MTGFiZWxFbGVtZW50PjtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBvbiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoaWNoIHdpbGwgb3Blbi9jbG9zZSB0aGUgb3B0aW9uc1xyXG4gICAgLy8gbGlzdC5cclxuICAgIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIG9wdGlvbnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgc2V0dXAgZm9yIGVhY2ggb3B0aW9uXHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgb3B0aW9uSXRlciA9IDA7XHJcbiAgICAgIG9wdGlvbkl0ZXIgPCBvcHRpb25zTGlzdEl0ZW1zLmxlbmd0aDtcclxuICAgICAgb3B0aW9uSXRlcisrXHJcbiAgICApIHtcclxuICAgICAgbGV0IGxpc3RJdGVtID0gb3B0aW9uc0xpc3RJdGVtc1tvcHRpb25JdGVyXTtcclxuICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGhpZ2hsaWdodCBmcm9tIGFsbCBsaXN0IGl0ZW1zIGFuZCByZWFwcGx5IHRvIHRoZSBzZWxlY3RlZFxyXG4gICAgICAgIC8vIGxpc3QgaXRlbSBvbmx5XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBvcHRpb25TdWJJdGVyID0gMDtcclxuICAgICAgICAgIG9wdGlvblN1Ykl0ZXIgPCBvcHRpb25zTGlzdEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgIG9wdGlvblN1Ykl0ZXIrK1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgb3B0aW9uc0xpc3RJdGVtc1tvcHRpb25TdWJJdGVyXS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsLS1zZWxlY3RlZFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWwtLXNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHRleHQgb2YgdGhlIGJ1dHRvbiB0byB0aGUgdGV4dCBvZiB0aGUgc2VsZWN0ZWQgaXRlbVxyXG4gICAgICAgIG9wdGlvbnNCdG4uaW5uZXJUZXh0ID0gbGlzdEl0ZW0uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGhpZGRlbiBpbnB1dCB2YWx1ZXNcclxuICAgICAgICAvLyBDbG9zZSB0aGUgbWVudVxyXG4gICAgICAgIG9wdGlvbnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDAxLzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBOYXZpZ2F0aW9uIGJhci5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyAxLiBDb250cm9scyB0aGUgc3RhdGUgb2YgdGhlIG5hdmlnYXRpb24gc3ViLW1lbnVzIGFuZCBjb250cm9scyBob3cgYW5kIHdoZW5cclxuLy8gICAgaXQgZXhwYW5kcyBhbmQgY2xvc2VzLlxyXG4vLyAyLiBDb250cm9scyB0aGUgc3RhdGUgb2YgdGhlIGJhc2tldCBhbmQgc28gc28gdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGVcclxuLy8gICAgYmFza2V0LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIHtcclxuICAvKipcclxuICAgKiBTZXRzIHVwIHRoZSBmdW5jdGlvbnMgZm9yIHRoZSBuYXZpZ2F0aW9uLlxyXG4gICAqIFRoZXNlIGluY2x1ZGU6XHJcbiAgICogIC0gQ2xvc2luZyBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUuXHJcbiAgICogIC0gT3BlbmluZy9DbG9zaW5nIG1lbnVzIG9uIGNsaWNrXHJcbiAgICovXHJcbiAgbWVudUJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2X19vcHRpb25fX2J0blwiKTtcclxuICBuYXZTdWJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIEFkZHMgZnVuY3Rpb24gdG8gY2xvc2UgYWxsIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBlbGVtZW50XHJcbiAgICB0aGlzLmNsb3NlX21lbnUoKTtcclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgZnVuY3Rpb25zIGZvciBhbGwgbWVudSBlbGVtZW50cy5cclxuICAgIGZvciAoY29uc3QgbWVudUJ0biBvZiB0aGlzLm1lbnVCdG5zIGFzIGFueSkge1xyXG4gICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnN1Yk1lbnVDdHJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsb3NlX21lbnUoKSB7XHJcbiAgICAvKipcclxuICAgICAqIGNsb3NlcyBhbGwgbWVudXMgd2hlbiBjbGlja2VkIG91dHNpZGUgcHIgYW5vdGhlciBuYXYgbWVudS5cclxuICAgICAqIEFsc28gd2lsbCBjbG9zZSBhbGwgZmlsdGVyIG1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQ2xvc2UgYWxsIG5hdi1tZW51cyBvbiBjbGljayBvdXRzaWRlXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCB0aGlzLm5hdlN1Yk1lbnVzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICB0aGlzLm5hdlN1Yk1lbnVzW2lkeF0uY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVudUJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbWVudUJ0biA9IHRoaXMubWVudUJ0bnNbaV07XHJcblxyXG4gICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2xvc2UgYWxsIGRyb3Bkb3duLW1lbnVzXHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb25MaXN0IG9mIG9wdGlvbkxpc3RzIGFzIGFueSkge1xyXG4gICAgICAgICAgb3B0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENsb3NlIG90aGVyIG5hdmlnYXRpb24gbWVudXNcclxuICAgICAgICAvLyBFYWNoIGJ1dHRvbiBhbmQgdGhlaXIgY2hpbGQgZWxlbWVudHMgd2lsbCBjb250YWluIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBcImZpbHRlci1mb3JcIi5cclxuICAgICAgICAvLyBMaWtld2lzZSwgZWFjaCBkcm9wZG93biBtZW51IGNvbnRhaW4gdGhlIHNhbWUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gVGhpcyBjaGVja3MgZm9yIHRoZSBidXR0b24gcHJlc3NlZCwgaWYgaXRzIFwiZmlsdGVyLWZvclwiIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIG1hdGNoZXMgdGhhdCBvZiBpdHMgZHJvcGRvd24gb3B0aW9ucy4gaWYgbm90LCB0aGVuIGNsb3NlLlxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tZW51QnRucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IHRoaXMubWVudUJ0bnNbal07XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikgIT1cclxuICAgICAgICAgICAgbWVudUJ0bi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN1Yk1lbnVDdHJsKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdpbGwgaGFuZGxlIGNsaWNrIGV2ZW50cyBvbiB0aGUgbmF2aWdhdGlvbiBmb3IgZXhwYW5kaW5nXHJcbiAgICAgKiBhbmQgY29sbGFwc2luZyB0aGUgc3ViLW1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vIEhhbmRsZSBjbGljayBldmVudHNcclxuICAgIHRhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB0YXJnZXRDbGFzc2VzID0gdGFyZ2V0LmNsYXNzTGlzdDtcclxuICAgIGxldCBzdWJNZW51OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBpZiAodGFyZ2V0Q2xhc3Nlcy5jb250YWlucyhcIm5hdi1zdWItcHJvZHVjdHNcIikpIHtcclxuICAgICAgc3ViTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMubmF2LXN1Yi1wcm9kdWN0c1wiXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldENsYXNzZXMuY29udGFpbnMoXCJuYXYtc3ViLXJvb21zXCIpKSB7XHJcbiAgICAgIHN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLm5hdi1zdWItcm9vbXNcIlxyXG4gICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgXCJOYXZpZ2F0aW9uIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGV4cGFuZGVkID0gc3ViTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGV4cGFuZGVkKSB7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiKTtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCIpO1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVVJQT1NFXHJcbi8vIC0tLS0tLS1cclxuLy8gRW5hYmxlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgcXVhbnRpdHkgY29tcG9uZW50LCB0aHVzIGVuYWJsaW5nICsvLVxyXG4vLyBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbiB0aGUgaW5wdXQgYm94LlxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTXHJcbi8vIC0tLS0tLS0tLS0tLS1cclxuLy8gX3F1YW50aXR5LnNjc3NcclxuLy9cclxuLy8gSFRNTCBGT1JNQVRcclxuLy8gLS0tLS0tLS0tLS1cclxuLy8gPGRpdiBjbGFzcz1cImMtcXVhbnRpdHlcIj5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LWRvd25cIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vICAgPGlucHV0IGNsYXNzPVwiYy1xdWFudGl0eV9faW5wdXRcIiB0eXBlPVwibnVtYmVyXCIvPlxyXG4vLyAgIDxidXR0b24gY2xhc3M9XCJjLXF1YW50aXR5X19idG5cIiBjb250cm9sPVwicXVhbnRpdHktdXBcIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFF1YW50aXR5Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIHRoZSBxdWFudGl0eSBjb21wb25lbnQgdGh1cyBlbmFibGluZyB0aGUgKy8tXHJcbiAgICogYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW5zaWRlIHRoZSBpbnB1dCBib3guXHJcbiAgICovXHJcblxyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJjLXF1YW50aXR5XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKiBcclxuICAgICBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICovXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuX3NldF9lbGVtZW50cyh0aGlzLmNvbnRhaW5lcnNbY10pO1xyXG4gICAgICBjb25zdCBidG5Eb3duID0gZWxlbWVudHNbMF0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGJ0blVwID0gZWxlbWVudHNbMV0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGlucHV0Qm94ID0gZWxlbWVudHNbMl0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IG1pblZhbHVlID0gTnVtYmVyKGlucHV0Qm94LmdldEF0dHJpYnV0ZShcIm1pblwiKSk7XHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gTnVtYmVyKGlucHV0Qm94LmdldEF0dHJpYnV0ZShcIm1heFwiKSk7XHJcblxyXG4gICAgICB0aGlzLl9idWlsZF9taW51c19idXR0b24oYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgICB0aGlzLl9idWlsZF9wbHVzX2J1dHRvbihidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX2lucHV0X2JveChidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfc2V0X2VsZW1lbnRzKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBjb250YWluZXIsIHdpbGwgcmV0dXJuIHRoZSBidXR0b25zIGFuZCBpbnB1dCBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYnRuRG93biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS1kb3duXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGJ0blVwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICdidXR0b25bY29udHJvbD1cInF1YW50aXR5LXVwXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0Qm94ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiaW5wdXQuYy1xdWFudGl0eV9faW5wdXRcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiBbYnRuRG93biwgYnRuVXAsIGlucHV0Qm94XTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9idWlsZF9taW51c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIG1pbnVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCByZWR1Y2VcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtaW5pbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIHBsdXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBsZXNzIHRoYW4gdGhlIG1heFZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoYnRuRG93bi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpIC0gMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpIDwgbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPT09IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9idWlsZF9wbHVzX2J1dHRvbihcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGlja2luZyB0aGUgcGx1cyBidXR0b24sIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgYnV0IHdpbGwgaW5jcmVhc2VkXHJcbiAgICAgKiBieSBvbmUgdW50aWwgaXQgcmVhY2hlcyBpdHMgbWF4aW11bSB2YWx1ZSwgYXQgd2hpY2ggcG9pbnQsIHRoZSBidXR0b25cclxuICAgICAqIGJlY29tZXMgZGlzYWJsZWQuIEFsc28gd2lsbCByZW1vdmUgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBmcm9tIHRoZSBtaW51c1xyXG4gICAgICogYnV0dG9uIGlmIGl0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgbWluVmFsdWUuXHJcbiAgICAgKi9cclxuXHJcbiAgICBidG5VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoYnRuVXAuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgIT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgaW5wdXRCb3gudmFsdWUgPSBTdHJpbmcoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSArIDEpO1xyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA+IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPT09IG1heFZhbHVlKSB7XHJcbiAgICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBfYnVpbGRfaW5wdXRfYm94KFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uY2UgYSBuZXcgdmFsdWUgaGFzIGJlZW4gZW50ZXJlZCBpbnRvIHRoZSBpbnB1dCBib3gsXHJcbiAgICAgKiBkaXNhYmxlL3JlLWVuYWJsZSB0aGUgcGx1cyBhbmQgbWludXMgYnV0dG9ucyBpbiBhY2NvcmRhbmNlIHdpdGggd2hldGhlclxyXG4gICAgICogdGhlIHZhbHVlIGlzIGVxdWFsIHRvIHRoZSBtaW4vbWF4IHZhbHVlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgLy8gQ2hlY2sgYWdhaW5zdCB0aGUgbWluIHZhbHVlXHJcbiAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpIDw9IG1pblZhbHVlKSB7XHJcbiAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENoZWNrIGFnYWluc3QgYnRuVXAncyBtYXggdmFsdWVcclxuICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPj0gbWF4VmFsdWUpIHtcclxuICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwOC8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIE1hbmFnZXMgdGhlIHNlYXJjaCBmaWx0ZXJzIG9uIHRoZSBwYWdlLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIFJlc3BvbnNpYmxlIGZvciBjYWxsaW5nIHRoZSBzZWFyY2ggQVBJIHdoaWNoIHdpbGwgZmlsdGVyIHJlc3VsdCBiYXNlZCBvblxyXG4vLyB3aGF0IHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB1c2luZyB0aGUgZmlsdGVycy5cclxuLy9cclxuLy8gV2lsbCB1c2UgdGhlIG5hdmlnYXRpb24gc2VhcmNoIGJhcidzIGZvcm0gdG8gaW50ZXJhY3Qgd2l0aCB0aGUgQVBJLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlcnMge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgZXhwYW5kIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBiYXIgYW5kIHRoZSBmb3JtIGVsZW1lbnQgdG8gYWxsb3cgaXQgdG9cclxuICAgKiB0YWtlIGluIHRoZSBmaWx0ZXIgb3B0aW9ucyBhcyBwYXJ0IG9mIHRoZSBHRVQgcmVxdWVzdCB3aGVuZXZlciBhIHVzZXJcclxuICAgKiBpbml0aWF0ZXMgYSBzZWFyY2guXHJcbiAgICpcclxuICAgKiBDYWxscyB0aGUgQVBJIHRvIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yIGRvZXMgbm90IHJlcXVpcmUgYW55IGFyZ3VtZW50cyBhbmQgd2lsbCBpbnN0ZWFkIHVzZVxyXG4gICAgICogZWxlbWVudHMgZnJvbSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICB0aGlzLl9leHBhbmRfbmF2X3NlYXJjaCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2V4cGFuZF9uYXZfc2VhcmNoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBhbmRzIG9uIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBlbGVtZW50cyBzbyB0aGF0IHdoZW4gc2VuZGluZyBhIEdFVFxyXG4gICAgICogcmVxdWVzdCwgZmlsdGVycyB3aWwgYmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgY29uc3QgbmF2Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwibmF2X19zZWFyY2hcIlxyXG4gICAgKVswXSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gQWRkIGhpZGRlbiBpbnB1dHMgdG8gY29udGFpbiB0aGUgdmFsdWVzIG9uIHRoZSBmaWx0ZXJzLlxyXG4gICAgY29uc3QgaW5wdXROYW1lcyA9IFtcImYtbWluUHJpY2VcIiwgXCJmLW1heFByaWNlXCIsIFwiZi1jYXRlZ29yeVwiLCBcImYtY29sb3VyXCJdO1xyXG4gICAgZm9yIChjb25zdCBpbnB1dE5hbWUgb2YgaW5wdXROYW1lcykge1xyXG4gICAgICBjb25zdCBoaWRkZW5JbnB1dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgIFwiSU5QVVRcIlxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGhpZGRlbklucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpbnB1dE5hbWUpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXROYW1lKTtcclxuICAgICAgbmF2Rm9ybS5hcHBlbmRDaGlsZChoaWRkZW5JbnB1dE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0cyB3aGVuIGEgZmlsdGVyIGlzIHNlbGVjdGVkXHJcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgICBmb3IgKGxldCBvcHQgPSAwOyBvcHQgPCBkcm9wZG93bk9wdGlvbnMubGVuZ3RoOyBvcHQrKykge1xyXG4gICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRyb3Bkb3duT3B0aW9uc1tvcHRdO1xyXG4gICAgICBsZXQgaGlkZGVuSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRyb3Bkb3duT3B0aW9uLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikpIHtcclxuICAgICAgICBjYXNlIFwibWluLXByaWNlXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImYtbWluUHJpY2VcIlxyXG4gICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1heC1wcmljZVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjb2xvdXJcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmLWNvbG91clwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaGlkZGVuSW5wdXQpIHtcclxuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCEudmFsdWUgPSBkcm9wZG93bk9wdGlvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIS50ZXh0Q29udGVudCE7XHJcblxyXG4gICAgICAgICAgLy8gQ2FsbHMgdGhlIHNlYXJjaCByZXN1bHQgQVBJIGFuZCB0aGVuIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgICAgICAgIGNvbnN0IEFQSVBhdGggPSB0aGlzLl9BUElfcGF0aCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpIGFzIFtdO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcl9yZXN1bHRzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX0FQSV9wYXRoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIEFQSSBocmVmIHBhdGggd2hlcmUgdGhlIHJlcXVlc3Qgd2lsbCBiZSBzZW50LlxyXG4gICAgICogVGhpcyBpbXBsZW1lbnRzIHRoZSBmaWx0ZXJzIHdpdGhpbiB0aGUgYWN0dWFsIFVSTC5cclxuICAgICAqL1xyXG4gICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiL3NlYXJjaC9cIiwgXCIvc2VhcmNoLXJlc3VsdHMvXCIpO1xyXG5cclxuICAgIGNvbnN0IGhpZGRlbkluTWluUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluTWF4UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ29sb3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1jb2xvdXJcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGlmIChoaWRkZW5Jbk1pblByaWNlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1taW5QcmljZT1cIiArIGhpZGRlbkluTWluUHJpY2UudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLW1pblByaWNlPS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtbWluUHJpY2U9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5NYXhQcmljZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtbWF4UHJpY2U9XCIgKyBoaWRkZW5Jbk1heFByaWNlLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1tYXhQcmljZT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLW1heFByaWNlPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluQ2F0ZWdvcnkudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLWNhdGVnb3J5PVwiICsgaGlkZGVuSW5DYXRlZ29yeS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtY2F0ZWdvcnk9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1jYXRlZ29yeT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5JbkNvbG91ci52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtY29sb3VyPVwiICsgaGlkZGVuSW5Db2xvdXIudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLWNvbG91cj0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLWNvbG91cj0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBocmVmO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2ZpbHRlcl9yZXN1bHRzKEFQSVJlc3VsdHM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlcnMgdGhlIHJlc3VsdHMgb24gdGhlIHNlYXJjaCBwYWdlIGluIGFjY29yZGFuY2UgdG8gdGhlIGRhdGFcclxuICAgICAqIHJldHJpZXZlZCBmcm9tIHRoZSBzZWFyY2ggQVBJLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHMnKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9yaWdSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0c19fcmVzdWx0Jyk7XHJcblxyXG4gICAgbGV0IHZhbGlkUHJvZHVjdHMgPSBbXTtcclxuICAgIHJlc3VsdDogSlNPTjtcclxuICAgIGZvciAoY29uc3QgcmVzdWx0IGluIEFQSVJlc3VsdHMpIHtcclxuICAgICAgdmFsaWRQcm9kdWN0cy5wdXNoKEFQSVJlc3VsdHNbcmVzdWx0XS5wcm9kdWN0X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBySUQgPSAwOyBySUQ8b3JpZ1Jlc3VsdHMubGVuZ3RoOyBySUQrKykge1xyXG4gICAgICBpZiAodmFsaWRQcm9kdWN0cy5pbmNsdWRlcyhOdW1iZXIob3JpZ1Jlc3VsdHNbcklEXS5nZXRBdHRyaWJ1dGUoJ0lEJykhKSkpIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjgvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbnRhaW5zIGltcG9ydHMgb2YgYWxsIHRoZSBtYWluIGNsYXNzZXMuXHJcbi8vIEJlaGF2ZXMgYXMgdGhlIG1haW4gaHViIGZvciB0aGUganMgYnVuZGxlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudSc7XHJcbmltcG9ydCB7IFF1YW50aXR5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3F1YW50aXR5JztcclxuaW1wb3J0IHsgU2VhcmNoRmlsdGVycyB9IGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycyc7XHJcbmltcG9ydCB7IEV4dGVuZFByb2R1Y3RQYWdlIH0gZnJvbSAnLi9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0JztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxJbWdzIH0gZnJvbSAnLi9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MnO1xyXG5cclxuXHJcbm5ldyBOYXZpZ2F0aW9uKCk7XHJcbm5ldyBEcm9wZG93bk1lbnUoKTtcclxubmV3IFNlYXJjaEZpbHRlcnMoKTtcclxuXHJcbmlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnL3Byb2R1Y3RzLycpKSB7XHJcbiAgICBuZXcgRXh0ZW5kUHJvZHVjdFBhZ2UoKTtcclxuICAgIG5ldyBRdWFudGl0eUNvbXBvbmVudCgpO1xyXG4gICAgbmV3IENhcm91c2VsSW1ncygpO1xyXG59IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyNy8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIEZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBXaWxsIGJ1aWxkIG9udG8gdGhlIEhUTUwgYWRkaW5nIG9udG8gdGhlIGNvbG91cnMgZmlsdGVyIG9wdGlvbnMgYXMgd2VsbCBhc1xyXG4vLyB0aGUgcHJvZHVjdCBpbmZvIHNlY3Rpb24uXHJcbi8vIFRoZXJlIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gd2hhdCBvdGhlciByZWxhdGVkIHByb2R1Y3RzIHRoZXJlIGFyZVxyXG4vLyB0byB0aGUgY3VycmVudCBwYWdlLiBUaGlzIGluZm9ybWF0aW9uIHdpbGwgYmUgcmV0cmlldmVkIGZyb20gYW4gQVBJLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZFByb2R1Y3RQYWdlIHtcclxuICAvKipcclxuICAgKiBFeHRlbmRzIG9udG8gdGhlIHByb2R1Y3QgdXNpbmcgdGhlIHByb2R1Y3QgaW5mbyBBUEkuXHJcbiAgICpcclxuICAgKiBUaGlzIHdpbGwgYmUgdXNlZCB0byByZXRyaWV2ZSBpbmZvcm1hdGlvbiBvbiB3aGF0IHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmVcclxuICAgKiBhcmUgbG9va2luZyBhdCBzaW1pbGFyIHByb2R1Y3RzLCBjb2xvdXJzIHZhcmlhdGlvbnMgb2YgdGhlIHNhbWUgcHJvZHVjdFxyXG4gICAqIGFuZCBwcm9kdWN0cyB3aGljaCBnbyBhbG9uZyB3aXRoIHRoZSBjdXJyZW50IHByb2R1Y3QgdG8gbWFrZSBhIHNldC5cclxuICAgKlxyXG4gICAqIFVzaW5nIHRoaXMsIHRoZSBwcm9kdWN0IHBhZ2Ugd2lsbCBiZSBleHRlbmRlZCB3aXRoIG1vcmUgSFRNTCBlbGVtZW50c1xyXG4gICAqIGJlaW5nIGFkZGVkIGxpbmtpbmcgdG8gdGhlIHJlbGF0ZWQgcHJvZHVjdC5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBkYXRhIGZyb20gdGhlIEFQSSBhbmQgY2FsbHMgbWV0aG9kcyB0byBidWlsZCBvbnRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBBUElQYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcclxuICAgICAgXCIvcHJvZHVjdHMvXCIsXHJcbiAgICAgIFwiL3Byb2R1Y3RzL2luZm8tYXBpL1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIEFQSVBhdGgpO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgLy8gQWRkaW5nIGNvbG91ciB2YXJpYXRpb25zXHJcbiAgICAgICAgaWYgKGRhdGEuY29sb3Vycykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9jb2xvdXJzKGRhdGEuY29sb3Vycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZGluZyBvdGhlciBwcm9kdWN0cyBvZiB0aGUgc2FtZSBzZXRcclxuICAgICAgICBpZiAoZGF0YS5zZXRzKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX3Byb2R1Y3Rfc2V0cyhkYXRhLnNldHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgc2ltaWxhciBwcm9kdWN0c1xyXG4gICAgICAgIGlmIChkYXRhLnNpbWlsYXIpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfc2ltaWxhcl9wcm9kdWN0cyhkYXRhLnNpbWlsYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgZmVhdHVyZXMgaW5mb3JtYXRpb25cclxuICAgICAgICBpZiAoZGF0YS5mZWF0dXJlcykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9mZWF0dXJlcyhkYXRhLmZlYXR1cmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX2NvbG91cnMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBkcm9wZG93biBjb2xvdXJzIGRyb3Bkb3duIG1lbnUgYW5kIGFkZHMgbW9yZSBjb2xvdXJzXHJcbiAgICAgKiBpbiBhY2NvcmRhbmNlIHRvIGhvdyBtYW55IGhvdyBtYW55IGNvbG91cnMgd2VyZSByZXR1cm5lZCBmcm9tIHRoZSBBUEkuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIGFwcGVuZCBlbGVtZW50cyBvbnRvIHRoZSBlbGVtZW50XHJcbiAgICAgKiAjcHJvZHVjdC1jb2xvdXItdmFyaWF0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEZvciBlYWNoIGNvbG91ciwgdGhlIGZvbGxvd2luZyBIVE1MIHdpbGwgYmUgYXBwZW5kZWQ6XHJcbiAgICAgKlxyXG4gICAgICogPGFcclxuICAgICAqICAgaHJlZj1cIntsaW5rIHRvIHByb2R1Y3R9XCJcclxuICAgICAqICAgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiXHJcbiAgICAgKiAgIGZvcj1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqIC8+XHJcbiAgICAgKiAgIDxsYWJlbCBmb3I9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiPlxyXG4gICAgICogICAgIDxzcGFuXHJcbiAgICAgKiAgICAgICBjbGFzcz1cInNtLWNvbG91ci1ib3hcIlxyXG4gICAgICogICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge2NvbG91ciBoZXggdmFsdWV9O1wiPlxyXG4gICAgICogICAgIDwvc3Bhbj5cclxuICAgICAqICAgICB7Y29sb3VyLW5hbWV9XHJcbiAgICAgKiAgIDwvbGFiZWw+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKiA8aW5wdXRcclxuICAgICAqICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAqICAgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIlxyXG4gICAgICogICBuYW1lPVwicHJvZC1mLWNvbG91clwiXHJcbiAgICAgKiAgIGlkPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIlxyXG4gICAgICogICB2YWx1ZT1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqIC8+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgIC8vIFVzaW5nIGRhdGEgcmV0cmlldmVkIGZyb20gdGhlIEFQSSB0byBidWlsZCBjb25zdGFudHNcclxuICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgIGNvbnN0IGNvbG91ciA9IGF0dHJzW2FdLmNvbF9uYW1lO1xyXG4gICAgICAgIGNvbnN0IGhleF92YWwgPSBhdHRyc1thXS5jb2xfaGV4X3ZhbDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwiYVwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJsYWJlbFwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKTtcclxuICAgICAgICBsYWJlbEVsZW0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwic3BhblwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IHNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgc3BhbkVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbS1jb2xvdXItYm94XCIpO1xyXG4gICAgICAgIHNwYW5FbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogXCIgKyBoZXhfdmFsICsgXCI7XCIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJpbnB1dFwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2QtZi1jb2xvdXJcIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJjb2xvdXItXCIgKyBjb2xvdXIpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmRpbmcgZWFjaCB0YWcgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwYXJlbnQgZWxlbWVudHMuXHJcbiAgICAgICAgbGFiZWxFbGVtLmFwcGVuZENoaWxkKHNwYW5FbGVtKTtcclxuICAgICAgICBsYWJlbEVsZW0uYXBwZW5kKGNvbG91cik7XHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQobGFiZWxFbGVtKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIHRoZSBlbGVtZW50cyB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgaW4gdGhlIERPTS5cclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGlucHV0RWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zIGRvZXMgbm90IGV4aXN0LCBhbHRlcm5hdGl2ZSBjb2xvdXJzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9wcm9kdWN0X3NldHMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBcInByb2R1Y3Qgc2V0c1wiIHNlY3Rpb25zLlxyXG4gICAgICogV2lsbCBhcHBlbmQgZWFjaCBwcm9kdWN0IHNldCBvbnRvICNwcm9kdWN0LXNldHMuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgcHJvZHVjZSB0aGUgZm9sbG93aW5nIEhUTUwgZm9yIGVhY2ggc2V0OlxyXG4gICAgICpcclxuICAgICAqIDxhIGNsYXNzPVwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIgaHJlZj1cIntwcm9kdWN0IHVybH1cIlxyXG4gICAgICogICA8aW1nXHJcbiAgICAgKiAgICAgY2xhc3M9XCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAqICAgICBhbHQ9XCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiB7cHJvZHVjdCBuYW1lfVwiXHJcbiAgICAgKiAgID5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIj57cHJvZHVjdCBuYW1lfTwvc3Bhbj5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiPntwcm9kdWN0IHByaWNlfTwvc3Bhbj5cclxuICAgICAqIDwvYT5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1zZXRzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbYV0ubmFtZTtcclxuICAgICAgICBjb25zdCBpbWcgPSBhdHRyc1thXS5zaG93Y2FzZV9pbWFnZTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IGF0dHJzW2FdLnByaWNlO1xyXG5cclxuICAgICAgICAvLyBcIkFcIiB0YWcgd2hpY2ggd2lsbCBjb250YWluIHRoZSBpbWFnZSBhbmQgdGhlIHRleHQuXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG5cclxuICAgICAgICAvLyBcIklNR1wiIHRhZyBmb3IgcHJvZHVjdCBpbWFnZS5cclxuICAgICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiKTtcclxuICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcpO1xyXG4gICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJhbHRcIixcclxuICAgICAgICAgIFwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4gKFwiICsgbmFtZSArIFwifVwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gXCJTUEFOXCIgdGFncyBjb250YWluaW5nIHRoZSBwcm9kdWN0IG5hbWUgYW5kIHByaWNlXHJcbiAgICAgICAgY29uc3QgdGV4dFNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgdGV4dFNwYW5FbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgIFwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRleHRTcGFuRWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHRQcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICB0ZXh0UHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgIFwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGV4dFByaWNlRWxlbS50ZXh0Q29udGVudCA9IFwiwqNcIiArIHByaWNlO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIGltYWdlIGFuZCB0ZXh0IGVsZW1lbnRzIHRvIGJlY29tZSBjaGlsZHJlbiBvZiB0aGUgbGlua0VsZW1cclxuICAgICAgICAvLyBhbmQgYXBwZW5kIHRoZW0gb250byB0aGUgdGFyZ2V0RWxlbSBpbiB0aGUgRE9NLlxyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRTcGFuRWxlbSk7XHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFByaWNlRWxlbSk7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNwcm9kdWN0LXNldHMgZG9lcyBub3QgZXhpc3QsIHByb2R1Y3Qtc2V0cyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfc2ltaWxhcl9wcm9kdWN0cyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIG9udG8gdGhlIFwic2ltaWxhciBwcm9kdWN0c1wiIHNlY3Rpb25zLlxyXG4gICAgICogV2lsbCBhcHBlbmQgZWFjaCBwcm9kdWN0IHNldCBvbnRvICNzaW1pbGFyLXByb2R1Y3RzLlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHByb2R1Y2UgdGhlIGZvbGxvd2luZyBIVE1MIGZvciBlYWNoIHNldDpcclxuICAgICAqXHJcbiAgICAgKiA8YSBjbGFzcz1cInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiIGhyZWY9XCJ7cHJvZHVjdCB1cmx9XCJcclxuICAgICAqICAgPGltZ1xyXG4gICAgICogICAgIGNsYXNzPVwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgKiAgICAgYWx0PVwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4ge3Byb2R1Y3QgbmFtZX1cIlxyXG4gICAgICogICA+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCI+e3Byb2R1Y3QgbmFtZX08L3NwYW4+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIj57cHJvZHVjdCBwcmljZX08L3NwYW4+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbWlsYXItcHJvZHVjdHNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgIC8vIFVzaW5nIGRhdGEgcmV0cmlldmVkIGZyb20gdGhlIEFQSSB0byBidWlsZCBjb25zdGFudHNcclxuICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1thXS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGF0dHJzW2FdLnNob3djYXNlX2ltYWdlO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gYXR0cnNbYV0ucHJpY2U7XHJcblxyXG4gICAgICAgIC8vIFwiQVwiIHRhZyB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGltYWdlIGFuZCB0aGUgdGV4dC5cclxuICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2ltaWxhci1wcm9kdWN0IHJlbGF0ZWQtcHJvZHVjdFwiKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG5cclxuICAgICAgICAvLyBcIklNR1wiIHRhZyBmb3IgcHJvZHVjdCBpbWFnZS5cclxuICAgICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nKTtcclxuICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiYWx0XCIsXHJcbiAgICAgICAgICBcIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIChcIiArIG5hbWUgKyBcIn1cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFwiU1BBTlwiIHRhZ3MgY29udGFpbmluZyB0aGUgcHJvZHVjdCBuYW1lIGFuZCBwcmljZVxyXG4gICAgICAgIGNvbnN0IHRleHRTcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHRleHRTcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGV4dFNwYW5FbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dFByaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHRleHRQcmljZUVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGV4dFByaWNlRWxlbS50ZXh0Q29udGVudCA9IFwiwqNcIiArIHByaWNlO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIGltYWdlIGFuZCB0ZXh0IGVsZW1lbnRzIHRvIGJlY29tZSBjaGlsZHJlbiBvZiB0aGUgbGlua0VsZW1cclxuICAgICAgICAvLyBhbmQgYXBwZW5kIHRoZW0gb250byB0aGUgdGFyZ2V0RWxlbSBpbiB0aGUgRE9NLlxyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRTcGFuRWxlbSk7XHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFByaWNlRWxlbSk7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNzaW1pbGFyLXByb2R1Y3RzIGRvZXMgbm90IGV4aXN0LCBzaW1pbGFyLXByb2R1Y3RzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYnVpbGRfZmVhdHVyZXMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgZmVhdHVyZXMgc2VjdGlvbiBvZiBwcm9kdWN0IGluZm9ybWF0aW9uIGJhc2VkIG9uIHJlc3VsdHNcclxuICAgICAqIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkuXHJcbiAgICAgKiBXaWxsIGNyZWF0ZSBhIFwiUFwiIHRhZyBmb3IgZWFjaCBmaWx0ZXIgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSB0YXJnZXRcclxuICAgICAqIGVsZW1lbnQgaW4gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtZmVhdHVyZXNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgZm9yIChsZXQgZiA9IDA7IGYgPCBhdHRycy5sZW5ndGg7IGYrKykge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1tmXS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdC1pbmZvX19zZWN0aW9uX190ZXh0XCIpO1xyXG4gICAgICAgIG5ld0VsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKG5ld0VsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1mZWF0dXJlcyBkb2VzIG5vdCBleGlzdCwgc2ltaWxhci1wcm9kdWN0cyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==