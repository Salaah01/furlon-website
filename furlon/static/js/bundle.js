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

/***/ "./furlon/static/ts/components/password-validation.ts":
/*!************************************************************!*\
  !*** ./furlon/static/ts/components/password-validation.ts ***!
  \************************************************************/
/*! exports provided: PasswordCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordCheck", function() { return PasswordCheck; });
var PasswordCheck = (function () {
    function PasswordCheck() {
        this.passwordElem = document.getElementById("account-password");
        this.confirmPassElem = document.getElementById("account-password-confirm");
        this.submitBtn = document.getElementById("account-submit");
        this.errorMsgElem = document.getElementById("account-errors");
        this.set_keybinders();
    }
    PasswordCheck.prototype.check_passwords = function () {
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
    PasswordCheck.prototype.set_keybinders = function () {
        var _this = this;
        this.confirmPassElem.addEventListener("focusout", function () {
            _this.update_element_attrs();
        });
    };
    PasswordCheck.prototype.update_element_attrs = function () {
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
    return PasswordCheck;
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

/***/ "./furlon/static/ts/components/ratings.ts":
/*!************************************************!*\
  !*** ./furlon/static/ts/components/ratings.ts ***!
  \************************************************/
/*! exports provided: Ratings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ratings", function() { return Ratings; });
var Ratings = (function () {
    function Ratings() {
        this.containers = document.querySelectorAll('.rating__stars[selectable="true"]');
        this.selectedClass = "i-star--checked";
        this.userRating = 0;
        if (this.containers.length) {
            this.userRating = Number(document
                .querySelector("#product-reviews-user-rating")
                .getAttribute("userRating"));
            for (var c = 0; c < this.containers.length; c++) {
                var stars = [
                    this.containers[c].querySelector('.i-star[value="1"]'),
                    this.containers[c].querySelector('.i-star[value="2"]'),
                    this.containers[c].querySelector('.i-star[value="3"]'),
                    this.containers[c].querySelector('.i-star[value="4"]'),
                    this.containers[c].querySelector('.i-star[value="5"]')
                ];
                this.update_selection(stars);
                this.build_star_functions(stars);
            }
        }
    }
    Ratings.getInstance = function () {
        if (!Ratings.instance) {
            Ratings.instance = new Ratings();
        }
        return Ratings.instance;
    };
    Ratings.prototype.update_selection = function (stars) {
        this.remove_all_stars(stars);
        var userRating = this.user_rating;
        if (userRating >= 1) {
            stars[0].classList.add(this.selectedClass);
        }
        if (userRating >= 2) {
            stars[1].classList.add(this.selectedClass);
        }
        if (userRating >= 3) {
            stars[2].classList.add(this.selectedClass);
        }
        if (userRating >= 4) {
            stars[3].classList.add(this.selectedClass);
        }
        if (userRating == 5) {
            stars[4].classList.add(this.selectedClass);
        }
        var hiddenInput = document.getElementById("user-review-rating");
        if (hiddenInput) {
            hiddenInput.value = userRating.toString();
        }
    };
    Ratings.prototype.remove_all_stars = function (stars) {
        for (var s = 0; s < stars.length; s++) {
            stars[s].classList.remove(this.selectedClass);
            stars[s].removeAttribute("highlight");
        }
    };
    Object.defineProperty(Ratings.prototype, "user_rating", {
        get: function () {
            return this.userRating;
        },
        set: function (newRating) {
            this.userRating = newRating;
        },
        enumerable: true,
        configurable: true
    });
    Ratings.prototype.build_star_functions = function (stars) {
        var _this = this;
        var _loop_1 = function (star) {
            stars[star].addEventListener("mouseover", function () {
                _this.remove_all_stars(stars);
                for (var prevStar = 0; prevStar <= star; prevStar++)
                    stars[prevStar].setAttribute("highlight", "true");
            });
            stars[star].addEventListener("mouseout", function () {
                _this.update_selection(stars);
            });
            stars[star].addEventListener("click", function () {
                _this.user_rating = star + 1;
                _this.update_selection(stars);
            });
        };
        for (var star = 0; star < stars.length; star++) {
            _loop_1(star);
        }
    };
    return Ratings;
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
/* harmony import */ var _components_password_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/password-validation */ "./furlon/static/ts/components/password-validation.ts");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pagination */ "./furlon/static/ts/components/pagination.ts");
/* harmony import */ var _components_carousel_imgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/carousel-imgs */ "./furlon/static/ts/components/carousel-imgs.ts");
/* harmony import */ var _components_ratings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ratings */ "./furlon/static/ts/components/ratings.ts");
/* harmony import */ var _state_basket_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/basket-items */ "./furlon/static/ts/state/basket-items.ts");
/* harmony import */ var _pages_products_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/products/product */ "./furlon/static/ts/pages/products/product.ts");
/* harmony import */ var _pages_products_products_user_review__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/products/products_user_review */ "./furlon/static/ts/pages/products/products_user_review.ts");
/* harmony import */ var _pages_basket_basket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/basket/basket */ "./furlon/static/ts/pages/basket/basket.ts");












new _components_navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]();
new _state_basket_items__WEBPACK_IMPORTED_MODULE_8__["BasketState"]();
new _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"]();
new _components_search_filters__WEBPACK_IMPORTED_MODULE_3__["SearchFilters"]();
new _components_pagination__WEBPACK_IMPORTED_MODULE_5__["Pagination"]();
var CURRENT_URL = window.location.href;
if (CURRENT_URL.search(/\/products\/[0-9]{1,}/) != -1) {
    new _pages_products_product__WEBPACK_IMPORTED_MODULE_9__["ExtendProductPage"]();
    new _components_quantity__WEBPACK_IMPORTED_MODULE_2__["QuantityComponent"]();
    new _components_carousel_imgs__WEBPACK_IMPORTED_MODULE_6__["CarouselImgs"]();
    _components_ratings__WEBPACK_IMPORTED_MODULE_7__["Ratings"].getInstance();
    new _pages_products_products_user_review__WEBPACK_IMPORTED_MODULE_10__["ProductUserReview"]();
}
else if (CURRENT_URL.includes("/basket/")) {
    new _pages_basket_basket__WEBPACK_IMPORTED_MODULE_11__["BasketPage"]();
}
else if (CURRENT_URL.includes("user/register") ||
    CURRENT_URL.includes("user/change-password")) {
    new _components_password_validation__WEBPACK_IMPORTED_MODULE_4__["PasswordCheck"]();
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
            nameElem.className = "basket-summary__row__data text-link";
            nameElem.href = productPage + product.productId;
            nameElem.setAttribute("field", "product-name");
            nameElem.textContent = product.productName;
            var storeElem = document.createElement("a");
            storeElem.className = "basket-summary__row__data text-link";
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

/***/ "./furlon/static/ts/pages/products/products_user_review.ts":
/*!*****************************************************************!*\
  !*** ./furlon/static/ts/pages/products/products_user_review.ts ***!
  \*****************************************************************/
/*! exports provided: ProductUserReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUserReview", function() { return ProductUserReview; });
var ProductUserReview = (function () {
    function ProductUserReview() {
        this.userReviewForm = document.getElementById("product-user-review-form");
        if (this.userReviewForm) {
            var currentReviewSects = this.userReviewForm.querySelectorAll('[userSection="current-section"]');
            var updateReviewSects = this.userReviewForm.querySelectorAll('[userSection="update-section"]');
            var confirmDeleteBox = document.getElementsByClassName("product-reviews__review__confirm-delete")[0];
            var editBtn = this.userReviewForm.querySelector("#user-review-edit-start");
            var cancelBtn = this.userReviewForm.querySelector("#user-review-edit-cancel");
            var deleteBtn = this.userReviewForm.querySelector("#user-review-delete-start");
            var submitBtn = this.userReviewForm.querySelector("#user-review-submit");
            var userSubmitBtn = this.userReviewForm.querySelector("#user-review-edit-submit");
            var operationHInput = this.userReviewForm.querySelector("#user-review-operation");
            var deleteBoolHInput = this.userReviewForm.querySelector("#user-review-delete-bool");
            this._build_update_comments_edit_btn(editBtn, currentReviewSects, updateReviewSects);
            this._build_update_comments_cancel_btn(cancelBtn, currentReviewSects, updateReviewSects);
            this._build_update_comments_submit_btn(userSubmitBtn, submitBtn, operationHInput);
            this._build_delete_functions(deleteBtn, operationHInput, confirmDeleteBox, deleteBoolHInput, submitBtn);
        }
    }
    ProductUserReview.prototype._build_update_comments_edit_btn = function (editBtn, currentReviewSects, updateReviewSects) {
        editBtn.addEventListener("click", function () {
            for (var section = 0; section < currentReviewSects.length; section++) {
                var targetElem = currentReviewSects[section];
                targetElem.classList.add("hide");
            }
            for (var section = 0; section < updateReviewSects.length; section++) {
                var targetElem = updateReviewSects[section];
                targetElem.classList.remove("hide");
            }
        });
    };
    ProductUserReview.prototype._build_update_comments_cancel_btn = function (cancelBtn, currentReviewSects, updateReviewSects) {
        cancelBtn.addEventListener("click", function () {
            for (var section = 0; section < currentReviewSects.length; section++) {
                var targetElem = currentReviewSects[section];
                targetElem.classList.remove("hide");
            }
            for (var section = 0; section < updateReviewSects.length; section++) {
                var targetElem = updateReviewSects[section];
                targetElem.classList.add("hide");
            }
        });
    };
    ProductUserReview.prototype._build_delete_functions = function (deleteBtn, hOperationInput, confirmDeleteBox, hConfirmDeleteInput, submitBtn) {
        var _a;
        deleteBtn.addEventListener("click", function (event) {
            confirmDeleteBox.classList.remove("hide");
            event.stopPropagation();
        });
        document.body.addEventListener("click", function () {
            confirmDeleteBox.classList.add("hide");
        });
        (_a = confirmDeleteBox
            .querySelector(".confirm-delete__inner-container")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
            event.stopPropagation();
        });
        confirmDeleteBox
            .querySelector('.confirm-delete__btn[for="cancel"]')
            .addEventListener("click", function () {
            confirmDeleteBox.classList.add("hide");
        });
        confirmDeleteBox
            .querySelector('.confirm-delete__btn[for="delete"]')
            .addEventListener("click", function () {
            hOperationInput.value = "delete";
            hConfirmDeleteInput.value = "true";
            submitBtn.click();
        });
    };
    ProductUserReview.prototype._build_update_comments_submit_btn = function (userSubmitBtn, submitBtn, hOperationInput) {
        userSubmitBtn.addEventListener("click", function () {
            hOperationInput.value = "update";
            submitBtn.click();
        });
    };
    return ProductUserReview;
}());



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3Bhc3N3b3JkLXZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9yYXRpbmdzLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzX3VzZXJfcmV2aWV3LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvc3RhdGUvYmFza2V0LWl0ZW1zLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvdXRpbGl0aWVzL251bWJlcl9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy91dGlsaXRp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RTtZQUN6QixPQUFPLEtBQUs7U0FDZjthQUFNLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxPQUFPLElBQUk7U0FDZDtRQUdELE9BQU8sS0FBSztJQUNoQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZnVybG9uL3N0YXRpYy9qc1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Z1cmxvbi9zdGF0aWMvdHMvbWFpbi50c1wiKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjkvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gQ2Fyb3VzZWwgc3R5bGVkIGltYWdlIHNsaWRlIHNob3dzLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBPbiBjbGljayBvZiBhIGltYWdlIHRodW1ibmFpbHMgb3IgdGhlIGN1cnJlbnQgaW1hZ2UsIHRoZSBjdXJyZW50IGltYWdlIHNob3VsZFxyXG4vLyBjaGFuZ2UgYWNjb3JkaW5nbHkuXHJcbi8vXHJcbi8vIEFuaW1hdGlvbnMgYXJlIGhhbmRsZWQgdGhyb3VnaCB0aGUgQ1NTLCB0aGUgSlMgc2V0cyB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvXHJcbi8vIGNoYW5nZSB0aGUgYXR0cmlidXRlcyBvZiB0aGUgZGlzcGxheSBpbWFnZXMgYWNjb3JkaW5nbHkgc28gYXMgdG8gZGlzcGxheSB0aGVcclxuLy8gc2VsZWN0ZWQgaW1hZ2UuXHJcbi8vXHJcbi8vIE9uIGVhY2ggdGh1bWJuYWlsLCBhdCBhbiBhdHRyaWJ1dGUgd2lsbCB3aWxsIGVxdWFsIHRvIHRoZSBudW1iZXIgdG90YWxcclxuLy8gdGh1bWJuYWlscywgdGhpcyB3aWxsIGVuYWJsZSB0aGUgQ1NTIHRvIGFkanVzdCBjZXJ0YWluIENTUyBhdHRyaWJ1dGVzXHJcbi8vIGFjY29yZGluZ2x5LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW1ncyB7XHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgY2Fyb3VzZWwgaW1hZ2UgaW1hZ2VzIHN1Y2ggdGhhdCB3aGVuXHJcbiAgICogYSB0aHVtYm5haWwgb3IgdGhlIG1haW4gcGljdHVyZSBpcyBjbGlja2VkIG9uLCB0aGUgaW1hZ2Ugd2lsbCBjaGFuZ2UuXHJcbiAgICogVGhlIGFuaW1hdGlvbiBhbmQgcG9zaXRpb25pbmcgaXMgY29udHJvbGxlZCB2aWEgdGhlIENTUywgdGhlIGNsYXNzIHdpbGxcclxuICAgKiBhZGQgYW5kIHJlbW92ZSBhdHRyaWJ1dGVzIGZyb20gdGhlIGVsZW1lbnRzLCBzbyB0aGF0IHRoZSBhbmltYXRpb25zIGNhblxyXG4gICAqIGJlIHRyaWdnZXJlZC5cclxuICAgKi9cclxuICBjb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWNvbnRhaW5lcl9fbWFpblwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2NhdGVzIHRoZSBlbGVtZW50cyB3aGVyZSBhbiBldmVudCBsaXN0ZW5lcnMgbmVlZCB0byBiZSBhZGRlZCBhbmRcclxuICAgICAqIGNhbGxzIG1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBkZXBlbmRpbmcgb24gd2hhdCB0aGUgZWxlbWVudFxyXG4gICAgICogaXMuXHJcbiAgICAgKlxyXG4gICAgICogRmluYWxseSwgd2lsbCBjYWxsIGEgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgdGh1bWJuYWlscyB0byBjb250YWluXHJcbiAgICAgKiBpbmZvcm1hdGlvbiBvbiBob3cgbWFueSB0aHVtYm5haWxzIHRoZXJlIGFyZS4gVGhpcyB3aWxsIGVuYWJsZSB0b1xyXG4gICAgICogYWRqdXN0IGNlcnRhaW4gQ1NTIGF0dHJpYnV0ZXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIC8vIERPTSBlbGVtZW50cyBmb3IgZXZlbnQgbGlzdGVuZXJzIHRvIGJlIGFkZGVkLlxyXG4gICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2NdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvblwiXHJcbiAgICAgIClbY107XHJcbiAgICAgIGNvbnN0IGRpc3BsYXlJbWFnZXMgPSBkaXNwbGF5Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvbl9faW1nXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGlmIG9ubHkgb25lIGRpc3BsYXlJbWFnZSwgdGhlbiB0aGlzIHN1Z2dlc3RzIHRoYXQgb25seSBhXHJcbiAgICAgIC8vIHNob3djYXNlIGltYWdlIGV4aXN0cy5cclxuICAgICAgaWYgKGRpc3BsYXlJbWFnZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGltZ1RodW1ic0NvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktY29udHJvbHNcIlxyXG4gICAgICAgIClbMF07XHJcbiAgICAgICAgY29uc3QgaW1nVGh1bWJzID0gaW1nVGh1bWJzQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1jb250cm9sc19fY29udHJvbFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gIE1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBlYWNoIERPTSBlbGVtZW50LlxyXG4gICAgICAgIHRoaXMub25fY2xpY2tpbmdfdGh1bWJzKGRpc3BsYXlJbWFnZXMsIGltZ1RodW1icyk7XHJcbiAgICAgICAgdGhpcy5vbl9jbGlja2luZ19kaXNwbGF5X2ltZyhkaXNwbGF5SW1hZ2VzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBTZXRzIGFuIGF0dHJpYnV0ZSBvbiBlYWNoIHRodW1ibmFpbCB0byB0aGUgdG90YWwgbnVtYmVyIG9mIHRodW1ibmFpbHMuXHJcbiAgICAgIHRoaXMudXBkYXRlX3RvdGFsX3RodW1icyhcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzX19jb250cm9sXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBvbl9jbGlja2luZ190aHVtYnMoXHJcbiAgICBkaXNwbGF5SW1hZ2VzOiBIVE1MQ29sbGVjdGlvbixcclxuICAgIGltZ1RodW1iczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogRWFjaCBpbWFnZSB0aHVtYm5haWwgZWxlbWVudCBoYXMgYSBcImZvclwiIGF0dHJpYnV0ZSB3aGljaCBpbmRpY2F0ZXNcclxuICAgICAqIHdoaWNoIGVsZW1lbnQgb24gdGhlIGRpc3BsYXkgc2VjdGlvbiBpdCByZXByZXNlbnRzLiBUaGUgZGlzcGxheSBpbWFnZVxyXG4gICAgICogZWxlbWVudCBoYXMgYW4gXCJpbWdcIiBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBPbiBjbGlja2luZyBvbiBhIGltYWdlIHRodW1ibmFpbCwgdGhlIGRpc3BsYXkgYXR0cmlidXRlJ3MgcG9zaXRpb25cclxuICAgICAqIGF0dHJpYnV0ZSB3aWxsIGJlY29tZSBcInNob3dcIiB3aGVyZSB0aGUgc2FtZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIGFsbFxyXG4gICAgICogb3RoZXIgaW1hZ2VzIHdpbGwgYmVjb21lIFwiaGlkZVwiLlxyXG4gICAgICpcclxuICAgICAqIE5PVEU6IHRoZSBpbml0aWFsIGltYWdlIHdpbGwgaGF2ZSBwb3NpdGlvbj1cImluaXRcIiBpbml0aWFsbHkgc28gYXMgdG9cclxuICAgICAqIGF2b2lkIGFueSBhbmltYXRpb25zIG9uIHN0YXJ0LiBJZiB0aGlzIGltYWdlIHRodW1ibmFpbCBpcyBjbGlja2VkLCBkb1xyXG4gICAgICogbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgdGh1bWIgPSAwOyB0aHVtYiA8IGltZ1RodW1icy5sZW5ndGg7IHRodW1iKyspIHtcclxuICAgICAgaW1nVGh1bWJzW3RodW1iXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzRm9yID0gaW1nVGh1bWJzW3RodW1iXS5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcImltZ1wiKSA9PT0gY29udHJvbHNGb3IpIHtcclxuICAgICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpICE9IFwiaW5pdFwiKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcImhpZGVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG9uX2NsaWNraW5nX2Rpc3BsYXlfaW1nKFxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGljayBvZiB0aGUgY3VycmVudCBkaXNwbGF5IGltYWdlLCBoaWRlIHRoZSBpbWFnZSBhbmQgc2hvdyB0aGVcclxuICAgICAqIG5leHQuXHJcbiAgICAgKiBBbmltYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgY3NzLiBGb3IgYW5pbWF0aW9uIHRvIHdvcmssIG9uIGNsaWNrLFxyXG4gICAgICogXCJoaWRlXCIgaXMgc2V0IHRvIHRoZSBhdHRyaWJ1dGUgcG9zaXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UsIGFuZCBvblxyXG4gICAgICogdGhlIG5leHQgaW1hZ2UsIHRoZSBcInNob3dcIiBpcyBzZXQgdG8gdGhlIHBvc2l0aW9uIGF0dHJpYnV0ZS5cclxuICAgICAqL1xyXG4gICAgZGlzcGxheUltYWdlczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGltID09PSBkaXNwbGF5SW1hZ2VzLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIGRpc3BsYXlJbWFnZXNbMF0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltICsgMV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSB1cGRhdGVfdG90YWxfdGh1bWJzKHRodW1iczogSFRNTENvbGxlY3Rpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhbiBhdHRyaWJ1dGUgb24gZWFjaCB0aHVtYm5haWwgd2hpY2ggaXMgdGhlIHRvdGFsIG51bWJlciBvZlxyXG4gICAgICogdGh1bWJuYWlscyB0aGVyZSBhcmUuIFRoaXMgd2lsbCBhbGxvdyB0aGUgQ1NTIHRvIHVwZGF0ZSBzdHlsaW5nIGJhc2VkXHJcbiAgICAgKiBvbiB0aGUgbnVtYmVyIG9mIHRodW1ibmFpbHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRvdGFsID0gdGh1bWJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgdG90YWw7IHQrKykge1xyXG4gICAgICB0aHVtYnNbdF0uc2V0QXR0cmlidXRlKFwidG90YWx0aHVtYnNcIiwgdG90YWwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyB0aGUgc2FtZSBvbiBvdGhlciBlbGVtZW50cyB3aGVyZSB0aGlzIHdvdWxkIGJlIG5lZWRlZC5cclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXCJ0b3RhbHRodW1ic1wiLCB0b3RhbC50b1N0cmluZygpKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAxNi8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBDdXN0b20gZHJvcGRvd24gbWVudVxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTOlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBfZHJvcGRvd24tbWVudS5zY3NzXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIFByb3ZpZGVzIGZ1bmN0aW9ucyBmb3IgYSBjdXN0b20gZHJvcGRvd24gbWVudS5cclxuLy8gVGhlIGZ1bmN0aW9ucyB3aWxsIHdvcmsgZm9yIGRyb3Bkb3duIG1lbnVzIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4vL1xyXG4vLyA8Zm9ybT5cclxuLy8gICAuLi5cclxuLy8gICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCI+XHJcbi8vICAgICAgIDxzcGFuPkNvbG91cjwvc3Bhbj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIj5cclxuLy8gICAgICAgPGxhYmVsIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIiBmb3I9XCJjb2xvdXItcmVkXCI+XHJcbi8vICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCJcclxuLy8gICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4vLyAgICAgICAgIG5hbWU9XCJmLWNvbG91clwiXHJcbi8vICAgICAgICAgaWQ9Y29sb3VyLXJlZFxyXG4vLyAgICAgICAgIHZhbHVlPVwicmVkXCJcclxuLy8gICAgICAgPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgLi4uXHJcbi8vIDwvZm9ybT5cclxuXHJcbi8vIENTUyBzaG91bGQgYmUgc2V0IHVwIHRvIGhpZGUgdGhlIGlucHV0IHRhZ3MgYW5kIHJlbHkgb24gdGhlIGxhYmVscyB0byBzZWxlY3RcclxuLy8gdGhlIHJhZGlvIGJ1dHRvbi5cclxuLy9cclxuLy8gRlVOQ1RJT05TOlxyXG4vLyAtLS0tLS0tLS0tXHJcbi8vICAtIFdoZW4gdXNlciBjbGlja3Mgb24gdGhlIGRyb3Bkb3duIG1lbnUsIGV4cGFuZCB0aGUgbGlzdCBvZiBvcHRpb25zLlxyXG4vLyAgLSBXaGVuIHVzZXIgcHJlc3NlcyBhbiBvcHRpb24sIGhpZ2hsaWdodCB0aGF0IG9wdGlvbiwgdXBkYXRlIHRoZVxyXG4vLyAgICBidXR0b24ncyBpbm5lciB0ZXh0IHRvIG1hdGNoIHRoYXQgb2ZmIHRoZSBidXR0b24gdGV4dC5cclxuLy8gIC0gV2hlbiB1c2VyIGNsaWNrcyBvdXRzaWRlLCBjbG9zZSBhbGwgbWVudXMuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEcm9wZG93bk1lbnUgQ2xhc3NcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTWVudSB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGN1c3RvbSBkcm9wZG93biBtZW51cy5cclxuICAgKiBUaGVzZSBpbmNsdWRlOlxyXG4gICAqICAtIFRvZ2dsZSBvcGVuL2Nsb3NlIG9mIHRoZSBtZW51IG9uIGNsaWNraW5nIHRoZSBidXR0b25cclxuICAgKiAgLSBDbG9zZSB0aGUgbWVudSBvbiBjbGlja2luZyBvdXRzaWRlXHJcbiAgICogIC0gT24gc2VsZWN0aW5nIGFuIGl0ZW06XHJcbiAgICogICAgLSBIaWdobGlnaHQgdGhhdCBpdGVtXHJcbiAgICogICAgLSBDaGFuZ2UgdGhlIHRleHQgb2YgdGhlIGJ1dHRvbiB0aGUgdGV4dCBvZiB0aGUgb3B0aW9uIHNlbGVjdGVkXHJcbiAgICpcclxuICAgKiBOb3RlOiB0aGlzIGNsYXNzIHdpbGwgbm90IGhhbmRsZSBBUEkgY2FsbHMuXHJcbiAgICovXHJcblxyXG4gIGRkTWVudXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJkcm9wZG93bi1tZW51XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBBZGRzIGZ1bmN0aW9uIHRvIGNsb3NlIGFsbCBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgZWxlbWVudFxyXG4gICAgdGhpcy5jbG9zZV9tZW51KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIGZ1bmN0aW9ucyBmb3IgYWxsIG1lbnUgZWxlbWVudHMuXHJcbiAgICBmb3IgKGxldCBtZW51SWQgPSAwOyBtZW51SWQgPCB0aGlzLmRkTWVudXMubGVuZ3RoOyBtZW51SWQrKykge1xyXG4gICAgICB0aGlzLmJ1aWxkX21lbnUodGhpcy5kZE1lbnVzW21lbnVJZF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xvc2VfbWVudSgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIGFsbCBtZW51cyB3aGVuIGNsaWNrZWQgb3V0c2lkZSBvbiBhbm90aGVyIGZpbHRlciBidXR0b24uXHJcbiAgICAgKiBBbHNvIGNhcnJpZXMgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIG5hdi1tZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IGZpbHRlckJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBvcHRpb25MaXN0cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgb3B0aW9uTGlzdHNbaWR4XS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmF2U3ViTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkQnRuID0gZmlsdGVyQnRuc1tpXTtcclxuXHJcbiAgICAgIHNlbGVjdGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2xvc2UgbmF2IG1lbnVzXHJcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbmF2U3ViTWVudXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgbmF2U3ViTWVudXNbaWR4XS5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGFsbCBvdGhlciBmaWx0ZXJzIGxpc3RzXHJcbiAgICAgICAgLy8gRWFjaCBidXR0b24gYW5kIHRoZWlyIGNoaWxkIGVsZW1lbnRzIGNvbnRhaW4gdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFwiZmlsdGVyLWZvclwiLlxyXG4gICAgICAgIC8vIExpa2V3aXNlLCBlYWNoIGRyb3Bkb3duIG9wdGlvbiBkaXYgY29udGFpbiB0aGUgc2FtZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBUaGlzIGNoZWNrcyBmb3IgdGhlIGJ1dHRvbiBwcmVzc2VkLCBpZiBpdHMgXCJmaWx0ZXItZm9yXCIgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gbWF0Y2hlcyB0aGF0IG9mIGl0cyBkcm9wZG93biBvcHRpb25zLiBpZiBub3QsIHRoZW4gY2xvc2UuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWx0ZXJCdG5zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gZmlsdGVyQnRuc1tqXTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW0uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKSAhPVxyXG4gICAgICAgICAgICBzZWxlY3RlZEJ0bi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gSnVzdCBpbmNhc2UgdGhlIHN0cnVjdHVyZSBjaGFuZ2VzLCBhbmQgdGhlIG5leHQgc2libGluZyBpbnMgbm90IHRoZSBvcHRpb25zIGxpc3RcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nIS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmc/LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYnVpbGRfbWVudShkZE1lbnU6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBmdW5jdGlvbmFsaXR5IG9udG8gZWFjaCBkcm9wZG93biBtZW51LlxyXG4gICAgICovXHJcbiAgICBjb25zdCBvcHRpb25zQnRuID0gZGRNZW51LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIlxyXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0Q29udGFpbmVyID0gZGRNZW51LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RJdGVtcyA9IG9wdGlvbnNMaXN0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxMYWJlbEVsZW1lbnQ+O1xyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIG9uIHRoZSBkcm9wZG93biBidXR0b24gd2hpY2ggd2lsbCBvcGVuL2Nsb3NlIHRoZSBvcHRpb25zXHJcbiAgICAvLyBsaXN0LlxyXG4gICAgb3B0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgb3B0aW9uc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBzZXR1cCBmb3IgZWFjaCBvcHRpb25cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBvcHRpb25JdGVyID0gMDtcclxuICAgICAgb3B0aW9uSXRlciA8IG9wdGlvbnNMaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICBvcHRpb25JdGVyKytcclxuICAgICkge1xyXG4gICAgICBsZXQgbGlzdEl0ZW0gPSBvcHRpb25zTGlzdEl0ZW1zW29wdGlvbkl0ZXJdO1xyXG4gICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaGlnaGxpZ2h0IGZyb20gYWxsIGxpc3QgaXRlbXMgYW5kIHJlYXBwbHkgdG8gdGhlIHNlbGVjdGVkXHJcbiAgICAgICAgLy8gbGlzdCBpdGVtIG9ubHlcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgbGV0IG9wdGlvblN1Ykl0ZXIgPSAwO1xyXG4gICAgICAgICAgb3B0aW9uU3ViSXRlciA8IG9wdGlvbnNMaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgb3B0aW9uU3ViSXRlcisrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBvcHRpb25zTGlzdEl0ZW1zW29wdGlvblN1Ykl0ZXJdLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWwtLXNlbGVjdGVkXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbC0tc2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uIHRvIHRoZSB0ZXh0IG9mIHRoZSBzZWxlY3RlZCBpdGVtXHJcbiAgICAgICAgb3B0aW9uc0J0bi5pbm5lclRleHQgPSBsaXN0SXRlbS5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0IHZhbHVlc1xyXG4gICAgICAgIC8vIENsb3NlIHRoZSBtZW51XHJcbiAgICAgICAgb3B0aW9uc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDEvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIE5hdmlnYXRpb24gYmFyLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIDEuIENvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGUgbmF2aWdhdGlvbiBzdWItbWVudXMgYW5kIGNvbnRyb2xzIGhvdyBhbmQgd2hlblxyXG4vLyAgICBpdCBleHBhbmRzIGFuZCBjbG9zZXMuXHJcbi8vIDIuIENvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGUgYmFza2V0IGFuZCBzbyBzbyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZVxyXG4vLyAgICBiYXNrZXQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZ1bmN0aW9ucyBmb3IgdGhlIG5hdmlnYXRpb24uXHJcbiAgICogVGhlc2UgaW5jbHVkZTpcclxuICAgKiAgLSBDbG9zaW5nIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZS5cclxuICAgKiAgLSBPcGVuaW5nL0Nsb3NpbmcgbWVudXMgb24gY2xpY2tcclxuICAgKi9cclxuICBtZW51QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZfX29wdGlvbl9fYnRuXCIpO1xyXG4gIG5hdlN1Yk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiKTtcclxuICB0b2dnbGVTaG93TmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3RvZ2dsZV9fYnRuXCIpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBBZGRzIGZ1bmN0aW9uIHRvIGNsb3NlIGFsbCBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgZWxlbWVudFxyXG4gICAgdGhpcy5jbG9zZV9tZW51KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIGZ1bmN0aW9ucyBmb3IgYWxsIG1lbnUgZWxlbWVudHMuXHJcbiAgICBmb3IgKGNvbnN0IG1lbnVCdG4gb2YgdGhpcy5tZW51QnRucyBhcyBhbnkpIHtcclxuICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zdWJNZW51Q3RybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIHJlc3BvbnNpdmUgZnVuY3Rpb25zIGZvciB0aGUgdG9nZ2xlIGJ1dHRvbnMuXHJcbiAgICB0aGlzLm5hdl90b2dnbGVfYnRuKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjbG9zZV9tZW51KCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjbG9zZXMgYWxsIG1lbnVzIHdoZW4gY2xpY2tlZCBvdXRzaWRlIHByIGFub3RoZXIgbmF2IG1lbnUuXHJcbiAgICAgKiBBbHNvIHdpbGwgY2xvc2UgYWxsIGZpbHRlciBtZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIENsb3NlIGFsbCBuYXYtbWVudXMgb24gY2xpY2sgb3V0c2lkZVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgdGhpcy5uYXZTdWJNZW51cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgdGhpcy5uYXZTdWJNZW51c1tpZHhdLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25MaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lbnVCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1lbnVCdG4gPSB0aGlzLm1lbnVCdG5zW2ldO1xyXG5cclxuICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIENsb3NlIGFsbCBkcm9wZG93bi1tZW51c1xyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uTGlzdCBvZiBvcHRpb25MaXN0cyBhcyBhbnkpIHtcclxuICAgICAgICAgIG9wdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG9zZSBvdGhlciBuYXZpZ2F0aW9uIG1lbnVzXHJcbiAgICAgICAgLy8gRWFjaCBidXR0b24gYW5kIHRoZWlyIGNoaWxkIGVsZW1lbnRzIHdpbGwgY29udGFpbiB0aGUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gXCJmaWx0ZXItZm9yXCIuXHJcbiAgICAgICAgLy8gTGlrZXdpc2UsIGVhY2ggZHJvcGRvd24gbWVudSBjb250YWluIHRoZSBzYW1lIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFRoaXMgY2hlY2tzIGZvciB0aGUgYnV0dG9uIHByZXNzZWQsIGlmIGl0cyBcImZpbHRlci1mb3JcIiBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBtYXRjaGVzIHRoYXQgb2YgaXRzIGRyb3Bkb3duIG9wdGlvbnMuIGlmIG5vdCwgdGhlbiBjbG9zZS5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWVudUJ0bnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSB0aGlzLm1lbnVCdG5zW2pdO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbS5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpICE9XHJcbiAgICAgICAgICAgIG1lbnVCdG4uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZz8uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdWJNZW51Q3RybChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aWxsIGhhbmRsZSBjbGljayBldmVudHMgb24gdGhlIG5hdmlnYXRpb24gZm9yIGV4cGFuZGluZ1xyXG4gICAgICogYW5kIGNvbGxhcHNpbmcgdGhlIHN1Yi1tZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnRzXHJcbiAgICB0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdGFyZ2V0Q2xhc3NlcyA9IHRhcmdldC5jbGFzc0xpc3Q7XHJcbiAgICBsZXQgc3ViTWVudTogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHRhcmdldENsYXNzZXMuY29udGFpbnMoXCJuYXYtc3ViLXByb2R1Y3RzXCIpKSB7XHJcbiAgICAgIHN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLm5hdi1zdWItcHJvZHVjdHNcIlxyXG4gICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXRDbGFzc2VzLmNvbnRhaW5zKFwibmF2LXN1Yi1yb29tc1wiKSkge1xyXG4gICAgICBzdWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy5uYXYtc3ViLXJvb21zXCJcclxuICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFwiTmF2aWdhdGlvbiBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBleHBhbmRlZCA9IHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChleHBhbmRlZCkge1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIik7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiKTtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBuYXZfdG9nZ2xlX2J0bigpIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgbmF2aWdhdGlvbiB0b2dnbGUgYnV0dG9uIC0gYSByZXNwb25zaXZlXHJcbiAgICAgKiBmZWF0dXJlIHZpZXdhYmxlIHdoZW4gdGhlIHNjcmVlbiB3aWR0aCBpcyBzbWFsbCBlbm91Z2guXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBvcHRpb25zTGlzdCA9IFtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fb3B0aW9uXCIpLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfX2FjY291bnQtYmFza2V0JylcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy50b2dnbGVTaG93TmF2QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zTGlzdFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgb3B0aW9uc0xpc3RbaV1bal0uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcHRpb24tLXNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyNi8wMS8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBQYWdpbmF0aW9uIE9iamVjdFxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBCdWlsZHMgdGhlIGxpbmsgKGhyZWYpIG9uIGVhY2ggcGFnaW5hdGlvbiBidXR0b24uIFRoaXMgaXMgYWNoaWV2ZWQgYnlcclxuLy8gdXNpbmcgdGhlIGN1cnJlbnQgdXJsIHRvIGJ1aWxkIG1vc3QgcGFydCBvZiB0aGUgaHJlZiBhbmQgYXBwZW5kaW5nIHRvIGl0XHJcbi8vIHRoZSBwYWdlIHF1ZXJ5LlxyXG4vL1xyXG4vLyBFYWNoIGVsZW1lbnQgd2lsbCBjb250YWluIGEgXCJwYWdlXCIgYXR0cmlidXRlIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBzZXQgdGhlXHJcbi8vIHBhZ2UgcGFydCBvZiB0aGUgaHJlZi5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uIHtcclxuICAvKiogQnVpbGRzIHRoZSBwYWdpbmF0aW9uIGxpbmsgKGhyZWYpLiAqL1xyXG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIEJ1aWxkcyB0aGUgbGlua3Mgb250byB0aGUgcGFnaW5hdGlvbiBsaW5rcyBpZiAjcGFnaW5hdGlvbiBleGlzdHMuICovXHJcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcclxuICAgICAgdGhpcy5idWlsZF9saW5rcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfbGlua3MoKSB7XHJcbiAgICAvKiogQnVpbGRzIGxpbmtzIG9udG8gdGhlIHBhZ2luYXRpb24gbGluayBlbGVtZW50cy4gKi9cclxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jb250YWluZXIhLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYWdpbmF0aW9uX19saW5rXCIpO1xyXG4gICAgY29uc3QgYmFzZUhyZWYgPVxyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8mKCguKj8mJCl8KHBhZ2U9WzAtOV17MSx9KXwocGFnZT0pKS9nLCBcIlwiKSArXHJcbiAgICAgIFwiJnBhZ2U9XCI7XHJcblxyXG4gICAgZm9yIChsZXQgbCA9IDA7IGwgPCBsaW5rcy5sZW5ndGg7IGwrKykge1xyXG4gICAgICBpZiAobGlua3NbbF0uZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgIT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgbGlua3NbbF0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBiYXNlSHJlZiArIGxpbmtzW2xdLmdldEF0dHJpYnV0ZShcInBhZ2VcIikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTIvMDEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gUmVnaXN0cmF0aW9uIHBhZ2VzLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBXaGVuIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gsIHVwZGF0ZSB0aGUgYXR0cmlidXRlIG9mIHRoZSBwYXNzd29yZCBlbGVtZW50c1xyXG4vLyB0byBgaW52YWxpZD1cInRydWVcIi4gVGhpcyB3aWxsIGFsbG93IHRoZSB0aGUgQ1NTIHRvIGNoYW5nZSB0aGUgYm9yZGVyXHJcbi8vIG9mIHRoZSBwYXNzd29yZCBlbGVtZW50cyB0byByZWQgYW5kIHNob3cgYW4gZXJyb3IgbWVzc2FnZSBmb3IgYSBmZXcgc2Vjb25kcy5cclxuLy9cclxuLy8gSWYgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCwgdGhlbiBhZGQgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB0byB0aGUgc3VibWl0XHJcbi8vIGJ1dHRvbi5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoZWNrIHtcclxuICAvKiogQ2hlY2tzIGlmIHBhc3N3b3JkcyBtYXRjaCwgaWYgdGhleSBkbyBub3QsIHRoZW4gdXBkYXRlIHRoZSBhdHRyaWJ1dGVcclxuICAgKiBvZiB0aGUgcGFzc3dvcmQgZWxlbWVudHMgd2hpY2ggd2lsbCBpbiB0dXJuIHVwZGF0ZSBzaWJsaW5ncyB0byB0YWtlIG9uXHJcbiAgICogc29tZSBDU1Mgc3R5bGluZyAoY29udHJvbGxlZCB0aHJvdWdoIENTUykuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwYXNzd29yZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYWNjb3VudC1wYXNzd29yZFwiXHJcbiAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybVBhc3NFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnQtcGFzc3dvcmQtY29uZmlybVwiXHJcbiAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnQtc3VibWl0XCJcclxuICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgZXJyb3JNc2dFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnQtZXJyb3JzXCJcclxuICApIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKiogQ29uc3RydWN0b3IgKi9cclxuICAgIHRoaXMuc2V0X2tleWJpbmRlcnMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgY2hlY2tfcGFzc3dvcmRzKCkge1xyXG4gICAgLyoqIENoZWNrcyBpZiB0aGUgcGFzc3dvcmRzIG1hdGNoLCBhbmQgaWYgc28sIGNoZWNrIHRoZWlyIGNvbXBsZXhpdHkuICovXHJcbiAgICBjb25zdCBwYXNzd29yZFR4dCA9IHRoaXMucGFzc3dvcmRFbGVtPy52YWx1ZTtcclxuICAgIGNvbnN0IGNvbmZpcm1QYXNzVHh0ID0gdGhpcy5jb25maXJtUGFzc0VsZW0/LnZhbHVlO1xyXG5cclxuICAgIGlmIChwYXNzd29yZFR4dCAmJiBjb25maXJtUGFzc1R4dCkge1xyXG4gICAgICBpZiAocGFzc3dvcmRUeHQgPT09IGNvbmZpcm1QYXNzVHh0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgY29tcGxleGl0eTpcclxuICAgICAgICAvLyBMZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA2IGFuZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBpbnRlZ2VyLlxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBhc3N3b3JkVHh0Lmxlbmd0aCA+PSA2ICYmXHJcbiAgICAgICAgICBwYXNzd29yZFR4dC5tYXRjaCgvWzAtOV0vKSAmJlxyXG4gICAgICAgICAgcGFzc3dvcmRUeHQubWF0Y2goL1tBLXpdLylcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTXNnRWxlbS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZyBhbmQgY29udGFpbiBhdCBsZWFzdCAxIG51bWJlci5cIjtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1zZ0VsZW0udGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgc2V0X2tleWJpbmRlcnMoKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1QYXNzRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZV9lbGVtZW50X2F0dHJzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgdXBkYXRlX2VsZW1lbnRfYXR0cnMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGlucHV0IGFuZCBidXR0b24gZWxlbWVudHMgdG8gYWNjb3JkYW5jZVxyXG4gICAgICogd2hldGhlciBvciBub3QgdGhlIHBhc3N3b3JkcyBtYXRjaC5cclxuICAgICAqL1xyXG4gICAgaWYgKHRoaXMuY2hlY2tfcGFzc3dvcmRzKCkpIHtcclxuICAgICAgdGhpcy5wYXNzd29yZEVsZW0ucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcclxuICAgICAgdGhpcy5jb25maXJtUGFzc0VsZW0ucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcclxuICAgICAgdGhpcy5zdWJtaXRCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkRWxlbS5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgdGhpcy5jb25maXJtUGFzc0VsZW0uc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcInRydWVcIik7XHJcbiAgICAgIHRoaXMuc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVVJQT1NFXHJcbi8vIC0tLS0tLS1cclxuLy8gRW5hYmxlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgcXVhbnRpdHkgY29tcG9uZW50LCB0aHVzIGVuYWJsaW5nICsvLVxyXG4vLyBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbiB0aGUgaW5wdXQgYm94LlxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTXHJcbi8vIC0tLS0tLS0tLS0tLS1cclxuLy8gX3F1YW50aXR5LnNjc3NcclxuLy9cclxuLy8gSFRNTCBGT1JNQVRcclxuLy8gLS0tLS0tLS0tLS1cclxuLy8gPGRpdiBjbGFzcz1cImMtcXVhbnRpdHlcIj5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LWRvd25cIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vICAgPGlucHV0IGNsYXNzPVwiYy1xdWFudGl0eV9faW5wdXRcIiB0eXBlPVwibnVtYmVyXCIvPlxyXG4vLyAgIDxidXR0b24gY2xhc3M9XCJjLXF1YW50aXR5X19idG5cIiBjb250cm9sPVwicXVhbnRpdHktdXBcIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gSW1wb3J0c1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUXVhbnRpdHlDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBmdW5jdGlvbmFsaXR5IG9udG8gdGhlIHF1YW50aXR5IGNvbXBvbmVudCB0aHVzIGVuYWJsaW5nIHRoZSArLy1cclxuICAgKiBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbnNpZGUgdGhlIGlucHV0IGJveC5cclxuICAgKi9cclxuXHJcbiAgY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICBcImMtcXVhbnRpdHlcIlxyXG4gICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAqL1xyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbnRhaW5lcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9zZXRfZWxlbWVudHModGhpcy5jb250YWluZXJzW2NdKTtcclxuICAgICAgY29uc3QgYnRuRG93biA9IGVsZW1lbnRzWzBdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBidG5VcCA9IGVsZW1lbnRzWzFdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBpbnB1dEJveCA9IGVsZW1lbnRzWzJdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IE51bWJlcihpbnB1dEJveC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpO1xyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IE51bWJlcihpbnB1dEJveC5nZXRBdHRyaWJ1dGUoXCJtYXhcIikpO1xyXG5cclxuICAgICAgdGhpcy5fYnVpbGRfbWludXNfYnV0dG9uKGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgICAgdGhpcy5fYnVpbGRfcGx1c19idXR0b24oYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgICB0aGlzLl9idWlsZF9pbnB1dF9ib3goYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfc2V0X2VsZW1lbnRzKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBjb250YWluZXIsIHdpbGwgcmV0dXJuIHRoZSBidXR0b25zIGFuZCBpbnB1dCBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYnRuRG93biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS1kb3duXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGJ0blVwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICdidXR0b25bY29udHJvbD1cInF1YW50aXR5LXVwXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0Qm94ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiaW5wdXQuYy1xdWFudGl0eV9faW5wdXRcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiBbYnRuRG93biwgYnRuVXAsIGlucHV0Qm94XTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX21pbnVzX2J1dHRvbihcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGlja2luZyB0aGUgbWludXMgYnV0dG9uLCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGJ1dCB3aWxsIHJlZHVjZVxyXG4gICAgICogYnkgb25lIHVudGlsIGl0IHJlYWNoZXMgaXRzIG1pbmltdW0gdmFsdWUsIGF0IHdoaWNoIHBvaW50LCB0aGUgYnV0dG9uXHJcbiAgICAgKiBiZWNvbWVzIGRpc2FibGVkLiBBbHNvIHdpbGwgcmVtb3ZlIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgcGx1c1xyXG4gICAgICogYnV0dG9uIGlmIGl0IGlzIGxlc3MgdGhhbiB0aGUgbWF4VmFsdWUuXHJcbiAgICAgKi9cclxuXHJcbiAgICBidG5Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChidG5Eb3duLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGlucHV0Qm94LnZhbHVlID0gU3RyaW5nKE51bWJlcihpbnB1dEJveC52YWx1ZSkgLSAxKTtcclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPCBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA9PT0gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfcGx1c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIHBsdXMgYnV0dG9uLCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGJ1dCB3aWxsIGluY3JlYXNlZFxyXG4gICAgICogYnkgb25lIHVudGlsIGl0IHJlYWNoZXMgaXRzIG1heGltdW0gdmFsdWUsIGF0IHdoaWNoIHBvaW50LCB0aGUgYnV0dG9uXHJcbiAgICAgKiBiZWNvbWVzIGRpc2FibGVkLiBBbHNvIHdpbGwgcmVtb3ZlIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgbWludXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBncmVhdGVyIHRoYW4gdGhlIG1pblZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGJ0blVwLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGlucHV0Qm94LnZhbHVlID0gU3RyaW5nKE51bWJlcihpbnB1dEJveC52YWx1ZSkgKyAxKTtcclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPiBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgYnRuRG93bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpID09PSBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfaW5wdXRfYm94KFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uY2UgYSBuZXcgdmFsdWUgaGFzIGJlZW4gZW50ZXJlZCBpbnRvIHRoZSBpbnB1dCBib3gsXHJcbiAgICAgKiBkaXNhYmxlL3JlLWVuYWJsZSB0aGUgcGx1cyBhbmQgbWludXMgYnV0dG9ucyBpbiBhY2NvcmRhbmNlIHdpdGggd2hldGhlclxyXG4gICAgICogdGhlIHZhbHVlIGlzIGVxdWFsIHRvIHRoZSBtaW4vbWF4IHZhbHVlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXRCb3gudmFsdWUpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIHZhbGlkLiBJZiBub3QsIHVwZGF0ZSBhdHRyaWJ1dGVzIHRoZSBoaWdobGlnaHRcclxuICAgICAgLy8gdGhpcyB0byB0aGUgdXNlciBhbmQgZGlzYWJsZSBidXR0b25zLlxyXG4gICAgICBpZiAoVmFsaWRhdGlvbi5jaGVja19pZl9wb3NpdGl2ZV9pbnQodmFsdWUpKSB7XHJcbiAgICAgICAgLy8gSW5jYXNlIHRoZSBidXR0b25zIHdlcmUgcHJldmlvdXNseSBkaXNhYmxlZCwgcmVzZXQgYnkgcmUtZW5hYmxpbmdcclxuICAgICAgICAvLyBldmVyeXRoaW5nLlxyXG4gICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgaW5wdXRCb3gucGFyZW50RWxlbWVudCEucmVtb3ZlQXR0cmlidXRlKCdpbnZhbGlkJyk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgdGhlIG1pbiB2YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA8PSBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgYWdhaW5zdCBidG5VcCdzIG1heCB2YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA+PSBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB2YWx1ZSBpcyBlaXRoZXIgPCAwIG9yIGEgZmxvYXQuXHJcbiAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgaW5wdXRCb3gucGFyZW50RWxlbWVudCEuc2V0QXR0cmlidXRlKCdpbnZhbGlkJywgJ3RydWUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDIvMDIvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyAtLS0tLVxyXG4vLyBPbiBpdGVtcyB3aXRoIHRoZSByYXRpbmdzX19zdGFycyBjbGFzcy5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyAtLS0tLS0tXHJcbi8vIEZvciBjb250YWluZXJzIHdoZXJlIHRoZSBzZWxlY3RhYmxlIGF0dHJpYnV0ZSBpcyBzZXQgdG8gdHJ1ZSwga2V5YmluZGVyc1xyXG4vLyB3aWxsIGJlIGF0dGFjaGVkIHN1Y2ggdGhhdCBpZiBhIHBhcnRpY3VsYXIgc3RhciBpcyBob3ZlcmVkIG92ZXIsIHRoYXQgc3RhclxyXG4vLyBhbmQgYWxsIHByZWNlZGluZyBzdGFydHMgd2lsbCBoaWdobGlnaHQuXHJcbi8vIE9uIGNsaWNrIG9mIHRoYXQgc3RhciwgdGhhdCBzdGFydCB3aWxsIGJlIGNvbWUgc2VsZWN0ZWQgYW5kIHNvIHRoZSBjbGFzc2VzXHJcbi8vIHdpbGwgdXBkYXRlIGFjY29yZGluZ2x5LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFJhdGluZ3Mge1xyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF0aW5nX19zdGFyc1tzZWxlY3RhYmxlPVwidHJ1ZVwiXScpO1xyXG4gIHNlbGVjdGVkQ2xhc3MgPSBcImktc3Rhci0tY2hlY2tlZFwiO1xyXG4gIHVzZXJSYXRpbmcgPSAwO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUmF0aW5ncztcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICh0aGlzLmNvbnRhaW5lcnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudXNlclJhdGluZyA9IE51bWJlcihcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdC1yZXZpZXdzLXVzZXItcmF0aW5nXCIpIVxyXG4gICAgICAgICAgLmdldEF0dHJpYnV0ZShcInVzZXJSYXRpbmdcIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnM6IEhUTUxFbGVtZW50W10gPSBbXHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10ucXVlcnlTZWxlY3RvcignLmktc3Rhclt2YWx1ZT1cIjFcIl0nKSBhcyBIVE1MRWxlbWVudCxcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyc1tjXS5xdWVyeVNlbGVjdG9yKCcuaS1zdGFyW3ZhbHVlPVwiMlwiXScpIGFzIEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgdGhpcy5jb250YWluZXJzW2NdLnF1ZXJ5U2VsZWN0b3IoJy5pLXN0YXJbdmFsdWU9XCIzXCJdJykgYXMgSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10ucXVlcnlTZWxlY3RvcignLmktc3Rhclt2YWx1ZT1cIjRcIl0nKSBhcyBIVE1MRWxlbWVudCxcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyc1tjXS5xdWVyeVNlbGVjdG9yKCcuaS1zdGFyW3ZhbHVlPVwiNVwiXScpIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IHNlbGVjdGlvblxyXG4gICAgICAgIHRoaXMudXBkYXRlX3NlbGVjdGlvbihzdGFycyk7XHJcblxyXG4gICAgICAgIC8vIEFkZHMga2V5YmluZGVycyBvbnRvIHRoZSB0aGUgc3RhcnMgZm9yIG1vdXNlb3ZlciwgbW91c2VvdXQgYW5kIGNsaWNrLlxyXG4gICAgICAgIHRoaXMuYnVpbGRfc3Rhcl9mdW5jdGlvbnMoc3RhcnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUmF0aW5ncyB7XHJcbiAgICBpZiAoIVJhdGluZ3MuaW5zdGFuY2UpIHtcclxuICAgICAgUmF0aW5ncy5pbnN0YW5jZSA9IG5ldyBSYXRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmF0aW5ncy5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgdXBkYXRlX3NlbGVjdGlvbihzdGFyczogSFRNTEVsZW1lbnRbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzZWxlY3RlZCBjbGFzcyB0byB0aGUgc3RhcnMgaW4gYWNjb3JkYW5jZSB0byB3aGF0IHRoZVxyXG4gICAgICogdXNlcidzIGN1cnJlbnQgcmF0aW5nIGlzLlxyXG4gICAgICogV2lsbCBhbHNvIHVwZGF0ZSBhIGhpZGRlbiBpbnB1dCBpZiBpdCBleGlzdHMgd2l0aCB0aGUgdXNlcidzIHJhdGluZy5cclxuICAgICAqL1xyXG4gICAgLy8gUmVzZXRcclxuICAgIHRoaXMucmVtb3ZlX2FsbF9zdGFycyhzdGFycyk7XHJcblxyXG4gICAgY29uc3QgdXNlclJhdGluZyA9IHRoaXMudXNlcl9yYXRpbmc7XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPj0gMSkge1xyXG4gICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPj0gMikge1xyXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPj0gMykge1xyXG4gICAgICBzdGFyc1syXS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPj0gNCkge1xyXG4gICAgICBzdGFyc1szXS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPT0gNSkge1xyXG4gICAgICBzdGFyc1s0XS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBoaWRkZW4gaW5wdXQgaWYgaXQgZXhpc3RzLlxyXG4gICAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJ1c2VyLXJldmlldy1yYXRpbmdcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIGlmIChoaWRkZW5JbnB1dCkge1xyXG4gICAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IHVzZXJSYXRpbmcudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgcmVtb3ZlX2FsbF9zdGFycyhzdGFyczogSFRNTEVsZW1lbnRbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgY2xhc3MgbGlzdCBvZiBhbGwgdGhlIHN0YXJzIHNvIHRoYXQgbm9uZSBvZiB0aGVcclxuICAgICAqIHN0YXJzIGFyZSBzZWxlY3RlZC5cclxuICAgICAqL1xyXG5cclxuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc3RhcnMubGVuZ3RoOyBzKyspIHtcclxuICAgICAgc3RhcnNbc10uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgICBzdGFyc1tzXS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWdobGlnaHRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBnZXQgdXNlcl9yYXRpbmcoKTogbnVtYmVyIHtcclxuICAgIC8qKiBHZXRzIHRoZSB1c2VyIHJhdGluZy4gKi9cclxuICAgIHJldHVybiB0aGlzLnVzZXJSYXRpbmc7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzZXQgdXNlcl9yYXRpbmcobmV3UmF0aW5nOiBudW1iZXIpIHtcclxuICAgIC8qKiBTZXRzIHRoZSB1c2VyIHJhdGluZy4gKi9cclxuICAgIHRoaXMudXNlclJhdGluZyA9IG5ld1JhdGluZztcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfc3Rhcl9mdW5jdGlvbnMoc3RhcnM6IEhUTUxFbGVtZW50W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogRm9yIHRoZSBzZWxlY3RhYmxlIHJhdGluZywgb24gaG92ZXIsIGZpcnN0bHkgYWxsIHN0YXJ0cyB3aWxsIGRpc2FwcGVhclxyXG4gICAgICogYW5kIHdoZW4gZWFjaCBzdGFyIGlzIGhvdmVyZWQgb3ZlciwgdGhleSB3aWxsIGhpZ2hsaWdodC4gRmluYWxseSwgd2hlblxyXG4gICAgICogdGhlIG1vdXNlIGlzIG1vdmVkIGF3YXkgZnJvbSB0aGUgZWxlbWVudCwgcmVzZXQgdGhlIHN0YXJzIHRvIHdoYXRldmVyXHJcbiAgICAgKiBpcyB3YXMgcHJldmlvdXNseS5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgc3RhciA9IDA7IHN0YXIgPCBzdGFycy5sZW5ndGg7IHN0YXIrKykge1xyXG4gICAgICBzdGFyc1tzdGFyXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZV9hbGxfc3RhcnMoc3RhcnMpO1xyXG4gICAgICAgIGZvciAobGV0IHByZXZTdGFyID0gMDsgcHJldlN0YXIgPD0gc3RhcjsgcHJldlN0YXIrKylcclxuICAgICAgICAgIHN0YXJzW3ByZXZTdGFyXS5zZXRBdHRyaWJ1dGUoXCJoaWdobGlnaHRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHN0YXJzW3N0YXJdLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfc2VsZWN0aW9uKHN0YXJzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdGFyc1tzdGFyXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlcl9yYXRpbmcgPSBzdGFyICsgMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9zZWxlY3Rpb24oc3RhcnMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwOC8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIE1hbmFnZXMgdGhlIHNlYXJjaCBmaWx0ZXJzIG9uIHRoZSBwYWdlLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIFJlc3BvbnNpYmxlIGZvciBjYWxsaW5nIHRoZSBzZWFyY2ggQVBJIHdoaWNoIHdpbGwgZmlsdGVyIHJlc3VsdCBiYXNlZCBvblxyXG4vLyB3aGF0IHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB1c2luZyB0aGUgZmlsdGVycy5cclxuLy9cclxuLy8gV2lsbCB1c2UgdGhlIG5hdmlnYXRpb24gc2VhcmNoIGJhcidzIGZvcm0gdG8gaW50ZXJhY3Qgd2l0aCB0aGUgQVBJLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlcnMge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgZXhwYW5kIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBiYXIgYW5kIHRoZSBmb3JtIGVsZW1lbnQgdG8gYWxsb3cgaXQgdG9cclxuICAgKiB0YWtlIGluIHRoZSBmaWx0ZXIgb3B0aW9ucyBhcyBwYXJ0IG9mIHRoZSBHRVQgcmVxdWVzdCB3aGVuZXZlciBhIHVzZXJcclxuICAgKiBpbml0aWF0ZXMgYSBzZWFyY2guXHJcbiAgICpcclxuICAgKiBDYWxscyB0aGUgQVBJIHRvIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yIGRvZXMgbm90IHJlcXVpcmUgYW55IGFyZ3VtZW50cyBhbmQgd2lsbCBpbnN0ZWFkIHVzZVxyXG4gICAgICogZWxlbWVudHMgZnJvbSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICB0aGlzLl9leHBhbmRfbmF2X3NlYXJjaCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2V4cGFuZF9uYXZfc2VhcmNoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBhbmRzIG9uIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBlbGVtZW50cyBzbyB0aGF0IHdoZW4gc2VuZGluZyBhIEdFVFxyXG4gICAgICogcmVxdWVzdCwgZmlsdGVycyB3aWwgYmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgY29uc3QgbmF2Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwibmF2X19zZWFyY2hcIlxyXG4gICAgKVswXSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gQWRkIGhpZGRlbiBpbnB1dHMgdG8gY29udGFpbiB0aGUgdmFsdWVzIG9uIHRoZSBmaWx0ZXJzLlxyXG4gICAgY29uc3QgaW5wdXROYW1lcyA9IFtcImYtbWluUHJpY2VcIiwgXCJmLW1heFByaWNlXCIsIFwiZi1jYXRlZ29yeVwiLCBcImYtY29sb3VyXCJdO1xyXG4gICAgZm9yIChjb25zdCBpbnB1dE5hbWUgb2YgaW5wdXROYW1lcykge1xyXG4gICAgICBjb25zdCBoaWRkZW5JbnB1dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgIFwiSU5QVVRcIlxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGhpZGRlbklucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpbnB1dE5hbWUpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXROYW1lKTtcclxuICAgICAgbmF2Rm9ybS5hcHBlbmRDaGlsZChoaWRkZW5JbnB1dE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0cyB3aGVuIGEgZmlsdGVyIGlzIHNlbGVjdGVkXHJcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgICBmb3IgKGxldCBvcHQgPSAwOyBvcHQgPCBkcm9wZG93bk9wdGlvbnMubGVuZ3RoOyBvcHQrKykge1xyXG4gICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRyb3Bkb3duT3B0aW9uc1tvcHRdO1xyXG4gICAgICBsZXQgaGlkZGVuSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRyb3Bkb3duT3B0aW9uLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikpIHtcclxuICAgICAgICBjYXNlIFwibWluLXByaWNlXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImYtbWluUHJpY2VcIlxyXG4gICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1heC1wcmljZVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjb2xvdXJcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmLWNvbG91clwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaGlkZGVuSW5wdXQpIHtcclxuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCEudmFsdWUgPSBkcm9wZG93bk9wdGlvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIS50ZXh0Q29udGVudCE7XHJcblxyXG4gICAgICAgICAgLy8gQ2FsbHMgdGhlIHNlYXJjaCByZXN1bHQgQVBJIGFuZCB0aGVuIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgICAgICAgIGNvbnN0IEFQSVBhdGggPSB0aGlzLl9BUElfcGF0aCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpIGFzIFtdO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcl9yZXN1bHRzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX0FQSV9wYXRoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIEFQSSBocmVmIHBhdGggd2hlcmUgdGhlIHJlcXVlc3Qgd2lsbCBiZSBzZW50LlxyXG4gICAgICogVGhpcyBpbXBsZW1lbnRzIHRoZSBmaWx0ZXJzIHdpdGhpbiB0aGUgYWN0dWFsIFVSTC5cclxuICAgICAqL1xyXG4gICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiL3NlYXJjaC9cIiwgXCIvc2VhcmNoLXJlc3VsdHMvXCIpO1xyXG5cclxuICAgIGNvbnN0IGhpZGRlbkluTWluUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluTWF4UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ29sb3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1jb2xvdXJcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGlmIChoaWRkZW5Jbk1pblByaWNlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1taW5QcmljZT1cIiArIGhpZGRlbkluTWluUHJpY2UudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLW1pblByaWNlPS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtbWluUHJpY2U9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5NYXhQcmljZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtbWF4UHJpY2U9XCIgKyBoaWRkZW5Jbk1heFByaWNlLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1tYXhQcmljZT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLW1heFByaWNlPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluQ2F0ZWdvcnkudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLWNhdGVnb3J5PVwiICsgaGlkZGVuSW5DYXRlZ29yeS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtY2F0ZWdvcnk9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1jYXRlZ29yeT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5JbkNvbG91ci52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtY29sb3VyPVwiICsgaGlkZGVuSW5Db2xvdXIudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLWNvbG91cj0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLWNvbG91cj0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBocmVmO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2ZpbHRlcl9yZXN1bHRzKEFQSVJlc3VsdHM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlcnMgdGhlIHJlc3VsdHMgb24gdGhlIHNlYXJjaCBwYWdlIGluIGFjY29yZGFuY2UgdG8gdGhlIGRhdGFcclxuICAgICAqIHJldHJpZXZlZCBmcm9tIHRoZSBzZWFyY2ggQVBJLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHMnKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9yaWdSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0c19fcmVzdWx0Jyk7XHJcblxyXG4gICAgbGV0IHZhbGlkUHJvZHVjdHMgPSBbXTtcclxuICAgIHJlc3VsdDogSlNPTjtcclxuICAgIGZvciAoY29uc3QgcmVzdWx0IGluIEFQSVJlc3VsdHMpIHtcclxuICAgICAgdmFsaWRQcm9kdWN0cy5wdXNoKEFQSVJlc3VsdHNbcmVzdWx0XS5wcm9kdWN0X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBySUQgPSAwOyBySUQ8b3JpZ1Jlc3VsdHMubGVuZ3RoOyBySUQrKykge1xyXG4gICAgICBpZiAodmFsaWRQcm9kdWN0cy5pbmNsdWRlcyhOdW1iZXIob3JpZ1Jlc3VsdHNbcklEXS5nZXRBdHRyaWJ1dGUoJ0lEJykhKSkpIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjgvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbnRhaW5zIGltcG9ydHMgb2YgYWxsIHRoZSBtYWluIGNsYXNzZXMuXHJcbi8vIEJlaGF2ZXMgYXMgdGhlIG1haW4gaHViIGZvciB0aGUganMgYnVuZGxlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBDb21wb25lbnQgSW1wb3J0c1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudVwiO1xyXG5pbXBvcnQgeyBRdWFudGl0eUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcXVhbnRpdHlcIjtcclxuaW1wb3J0IHsgU2VhcmNoRmlsdGVycyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoX2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRDaGVjayB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFzc3dvcmQtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IENhcm91c2VsSW1ncyB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2Fyb3VzZWwtaW1nc1wiO1xyXG5pbXBvcnQgeyBSYXRpbmdzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9yYXRpbmdzXCI7XHJcblxyXG4vLyBTdGF0ZSBJbXBvcnRzXHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcblxyXG4vLyBQYWdlcyBJbXBvcnRzXHJcbmltcG9ydCB7IEV4dGVuZFByb2R1Y3RQYWdlIH0gZnJvbSBcIi4vcGFnZXMvcHJvZHVjdHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0VXNlclJldmlldyB9IGZyb20gXCIuL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzX3VzZXJfcmV2aWV3XCI7XHJcbmltcG9ydCB7IEJhc2tldFBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9iYXNrZXQvYmFza2V0XCI7XHJcblxyXG4vLyBCdWlsZCB0aGUgbmF2aWdhdGlvblxyXG5uZXcgTmF2aWdhdGlvbigpO1xyXG5cclxuLy8gVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgYmFza2V0XHJcbm5ldyBCYXNrZXRTdGF0ZSgpO1xyXG5cclxuLy8gQnVpbGQgdGhlIGRyb3Bkb3duIG1lbnVcclxubmV3IERyb3Bkb3duTWVudSgpO1xyXG5cclxuLy8gQnVpbGQgdGhlIHNlYXJjaCBmaWx0ZXJzXHJcbm5ldyBTZWFyY2hGaWx0ZXJzKCk7XHJcblxyXG4vLyBCdWlsZCB0aGUgcGFnaW5hdGlvblxyXG5uZXcgUGFnaW5hdGlvbigpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUEFHRSBTUEVDSUZJQyBKQVZBU0NSSVBUXHJcbmNvbnN0IENVUlJFTlRfVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblxyXG5pZiAoQ1VSUkVOVF9VUkwuc2VhcmNoKC9cXC9wcm9kdWN0c1xcL1swLTldezEsfS8pICE9IC0xKSB7XHJcbiAgLy8gUHJvZHVjdCBQYWdlXHJcbiAgbmV3IEV4dGVuZFByb2R1Y3RQYWdlKCk7XHJcbiAgbmV3IFF1YW50aXR5Q29tcG9uZW50KCk7XHJcbiAgbmV3IENhcm91c2VsSW1ncygpO1xyXG4gIFJhdGluZ3MuZ2V0SW5zdGFuY2UoKTtcclxuICBuZXcgUHJvZHVjdFVzZXJSZXZpZXcoKTtcclxuXHJcbn0gZWxzZSBpZiAoQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCIvYmFza2V0L1wiKSkge1xyXG4gIC8vIEJhc2tldCBQYWdlXHJcbiAgbmV3IEJhc2tldFBhZ2UoKTtcclxufSBlbHNlIGlmIChcclxuICAvLyBBY2NvdW50IHJlZ2lzdHJhdGlvbiBhbmQgY2hhbmdlIHBhc3N3b3JkIHBhZ2VzXHJcbiAgQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCJ1c2VyL3JlZ2lzdGVyXCIpIHx8XHJcbiAgQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCJ1c2VyL2NoYW5nZS1wYXNzd29yZFwiKVxyXG4pIHtcclxuICBuZXcgUGFzc3dvcmRDaGVjaygpO1xyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDUvMDEvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBUaGUgYmFza2V0IHBhZ2UuXHJcbi8vXHJcbi8vIEZVTkNUSU9OQUxJVFlcclxuLy8gLSBDYWxscyB0aGUgYmFza2V0LWluZm8tQVBJIHdoZXJlIHVzaW5nIHRoZSBsb2NhbCBzdG9yYWdlIGl0IGlzIGFibGUgdG8gc2VuZFxyXG4vLyAgIGEgR0VUIHJlcXVlc3QgdG8gdGVoIEFQSSBzaXRlIHVzaW5nIHRoZSBwcmltYXJ5IGtleXMgb2YgdGhlIGl0ZW1zIGluIHRoZVxyXG4vLyAgIGJhc2tldC5cclxuLy8gLSBCdWlsZHMgcGFydCBvZiB0aGUgRE9NIHdoaWNoIHdpbGwgZGlzcGxheSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgd2hhdCBpcyBpblxyXG4vLyAgIGJhc2tldC5cclxuLy8gLSBTZXRzIGtleSBiaW5kZXJzIG9uIHRoZSBxdWFudGl0eSBvcHRpb24gYW5kIFwieFwiIG9wdGlvbiBzbyB0aGF0IGl0IHVwZGF0ZXNcclxuLy8gICB0aGUgYmFza2V0LlxyXG4vLyAtIFVwZGF0ZXMgdG90YWxzIHNlY3Rpb24gb24gbG9hZCBpZiB0aGVyZSBpcyBzb21ldGhpbmcgaW4gdGhlIGJhc2tldC5cclxuLy8gLSBTZXQga2V5IGJpbmRlcnMgc28gdGhhdCB3aGVuZXZlciB0aGVyZSBpcyBhIGNoYW5nZSB0byB0aGUgYmFza2V0IGl0ZW1zLFxyXG4vLyAgIHRoZSB0b3RhbHMgd2lsbCBhbHNvIHVwZGF0ZS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIElNUE9SVFNcclxuaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBOdW1iZXJGb3JtYXQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL251bWJlcl9mb3JtYXRcIjtcclxuaW1wb3J0IHsgQmFza2V0U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcbmltcG9ydCB7IFF1YW50aXR5Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVhbnRpdHlcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBCYXNrZXRQYWdlIGV4dGVuZHMgQmFza2V0U3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgYnVpbGQgZWxlbWVudHMgb250byBiYXNrZXQgcGFnZSB1c2luZyBhbiBBUEkgdG8gcmV0cmlldmVcclxuICAgKiBpbmZvcm1hdGlvbiBvbiBwcm9kdWN0cyBjdXJyZW50bHkgaW4gdGhlIHVzZXIncyBiYXNrZXQgKGluZm9ybWF0aW9uXHJcbiAgICogc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2UpXHJcbiAgICovXHJcblxyXG4gIC8vIFRoZSBtYWluIGxvY2F0aW9uIGFzIHRvIHdoZXJlIGVhY2ggcHJvZHVjdCB3aWxsIGJlIGluc2VydGVkIGZyb20gdGhlXHJcbiAgLy8gdXNlcidzIGJhc2tldC5cclxuICBzdW1tYXJ5SXRlbXNQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYmFza2V0LXN1bW1hcnktZGF0YVwiXHJcbiAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgYmFza2V0SXRlbXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBwcm9jZXNzIGluIHdoaWNoIHRoZSBiYXNrZXQgcGFnZSBET00gaXMgYnVpbGQuXHJcbiAgICAgKi9cclxuICAgIHN1cGVyKCk7XHJcbiAgICBpZiAodGhpcy5pdGVtcyAhPSBudWxsICYmIHRoaXMuaXRlbXMgIT0gXCJ7fVwiKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIEpTT04ucGFyc2UodGhpcy5pdGVtcykpIHtcclxuICAgICAgICB0aGlzLmJhc2tldEl0ZW1zLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYmFza2V0SXRlbXNTdHIgPSB0aGlzLmJhc2tldEl0ZW1zLmpvaW4oXCIsXCIpO1xyXG5cclxuICAgICAgLy8gQ2FsbCBBUElcclxuICAgICAgY29uc3QgQVBJUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgICAgL2Jhc2tldC4qLyxcclxuICAgICAgICBcImJhc2tldC1pbmZvLUFQSS8/cGtzPVwiICsgYmFza2V0SXRlbXNTdHJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgY29uc3QgQVBJUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIGlmIChBUElSZXNwb25zZS5wcm9kdWN0c0luZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZF9iYXNrZXRfc3VtbWFyeShBUElSZXNwb25zZS5wcm9kdWN0c0luZm8pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9iYXNrZXRfc3VtbWFyeShhbGxQcm9kdWN0czogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIGVhY2ggZWxlbWVudCBpbnRvIHRoZSBET00gaW5zaWRlIHRoZSB0YXJnZXQgcGFyZW50IGNvbnRhaW5lci5cclxuICAgICAqIFRoZXJlIGVsZW1lbnRzIGJlaW5nIGFkZGVkIHdpbGwgYmUgdGhlIHByb2R1Y3QncyBpbWFnZSwgbmFtZSwgc3RvcmVcclxuICAgICAqIG5hbWUgLCBjb2xvdXIsIHF1YW50aXR5IG9wdGlvbnMsIHByaWNlIGFuZCBhIGJ1dHRvbiB0byByZW1vdmUgYW4gaXRlbVxyXG4gICAgICogZnJvbSB0aGUgYmFza2V0LlxyXG4gICAgICpcclxuICAgICAqIFRoZSBhcnJhbmdlbWVudCBvZiB0aGUgSFRNTCBpcyBzdWNoIHRoYXQgdGhlIGltYWdlIGlzIG9uIHRoZSBsZWZ0IGhhbmRcclxuICAgICAqIHNpZGUuIFByb2R1Y3QgaW5mb3JtYXRpb24gYWxvbmcgd2l0aCB0aGUgcXVhbnRpdHkgb3B0aW9ucyBhcmUgaW4gdGhlXHJcbiAgICAgKiBtaWRkbGUuIFByaWNlIGFuZCB0aGUgb3B0aW9uIHRvIHJlbW92ZSBhbiBpdGVtIGlzIG9uIHRoZSByaWdodCBoYW5kXHJcbiAgICAgKiBzaWRlLiBBcyBzdWNoLCB0aGVyZSB3aWxsIGJlIHRocmVlIHN1Yi1jb250YWluZXJzIHdoZXJlIGVhY2ggZWxlbWVudFxyXG4gICAgICogd2lsbCBiZSBhZGRlZCB0byB0aGF0IGNvbnRhaW5lci5cclxuICAgICAqXHJcbiAgICAgKiBFYWNoIG9mIHRob3NlIGNvbnRhaW5lcnMgd2lsbCB0aGVuIGJlIGFkZGVkIHRvIGEgbWFpbiBjb250YWluZXJcclxuICAgICAqIHJlcHJlc2VudGluZyBhIHJvdyBvZiBkYXRhIHdoaWNoIHdpbGwgdGhlbiBiZSBhZGRlZCB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBwcm9kdWN0UGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL2Jhc2tldC4qLywgXCJwcm9kdWN0cy9cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhbGxQcm9kdWN0c1tpXTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBOdW1iZXIoSlNPTi5wYXJzZSh0aGlzLml0ZW1zKVtwcm9kdWN0LnByb2R1Y3RJZF0pO1xyXG5cclxuICAgICAgLy8gTWFpbiBjb250YWluZXIgYW5kIHN1Yi1jb250YWluZXIuXHJcbiAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBjb25zdCBwcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAvLyBEaXYgdG8gY29udGFpbiBhbGwgcHJvZHVjdCBlbGVtZW50cywgd2hpY2ggd2lsbCB0aGVuIGJlIGFwcGVuZGVkXHJcbiAgICAgIC8vIGludG8gdGhlIHBhcmVudCBlbGVtZW50LlxyXG4gICAgICBtYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd1wiO1xyXG4gICAgICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInByb2R1Y3QtaWRcIiwgcHJvZHVjdC5wcm9kdWN0SWQpO1xyXG5cclxuICAgICAgaW1nQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fY29udGFpbmVyIGJhc2tldC1zdW1tYXJ5X19yb3dfX2NvbnRhaW5lci0taW1nXCJcclxuICAgICAgaW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2NvbnRhaW5lclwiXHJcbiAgICAgIHByaWNlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fY29udGFpbmVyXCJcclxuXHJcbiAgICAgIGltZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRzJywgJ3Byb2R1Y3QtaW1nJylcclxuICAgICAgaW5mb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRzJywgJ3Byb2R1Y3QtaW5mbycpXHJcbiAgICAgIHByaWNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29udGVudHMnLCAncHJvZHVjdC1wcmljZScpXHJcblxyXG4gICAgICAvLyBQcm9kdWN0IEltYWdlIEVtYmVkZGVkIGluIExpbmsgRWxlbWVudFxyXG4gICAgICBjb25zdCBpbWdBVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIGltZ0FUYWcuY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhXCI7XHJcbiAgICAgIGltZ0FUYWcuaHJlZiA9IHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIGltZ0FUYWcuc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LWltYWdlXCIpO1xyXG4gICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaW1nRWxlbS5zcmMgPSBwcm9kdWN0LmltYWdlO1xyXG4gICAgICBpbWdFbGVtLmFsdCA9IFwiSW1hZ2Ugb2YgXCIgKyBwcm9kdWN0LnByb2R1Y3ROYW1lO1xyXG4gICAgICBpbWdBVGFnLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBOYW1lXHJcbiAgICAgIGNvbnN0IG5hbWVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIG5hbWVFbGVtLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fZGF0YSB0ZXh0LWxpbmtcIjtcclxuICAgICAgbmFtZUVsZW0uaHJlZiA9IHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIG5hbWVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1uYW1lXCIpO1xyXG4gICAgICBuYW1lRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QucHJvZHVjdE5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IFN0b3JlXHJcbiAgICAgIGNvbnN0IHN0b3JlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBzdG9yZUVsZW0uY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhIHRleHQtbGlua1wiO1xyXG4gICAgICBzdG9yZUVsZW0uaHJlZiA9IFwiL3N0b3Jlcy9cIiArIHByb2R1Y3Quc3RvcmVJZDtcclxuICAgICAgc3RvcmVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1zdG9yZVwiKTtcclxuICAgICAgc3RvcmVFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5zdG9yZU5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IENvbG91clxyXG4gICAgICBjb25zdCBjb2xvdXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgIGNvbG91ckVsZW0uY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhXCI7XHJcbiAgICAgIGNvbG91ckVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LWNvbG91clwiKTtcclxuICAgICAgY29sb3VyRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QuY29sb3VyTmFtZTtcclxuXHJcbiAgICAgIC8vIFF1YW50aXR5XHJcbiAgICAgIC8vIE5PVEU6IFRoZSBIVE1MIGZvcm1hdCBtdXN0IGZvbGxvdyB0aGUgc3RydWN0dXJlIGRlZmluZWQgaW4gdGhlIHF1YW50aXR5XHJcbiAgICAgIC8vIGNvbXBvbmVudC5cclxuICAgICAgY29uc3QgcXVhbnRpdHlDb250YWluZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eSBiYXNrZXQtc3VtbWFyeV9fcm93X19mdW5jdGlvblwiO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uaWQgPSBcInByb2R1Y3QtXCIgKyBwcm9kdWN0LnByb2R1Y3RJZDtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicXVhbnRpdHlcIik7XHJcblxyXG4gICAgICBjb25zdCBxdWFudGl0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19pbnB1dFwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0Lm1pbiA9IFwiMFwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0LnN0ZXAgPSBcIjFcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5tYXggPSBwcm9kdWN0LmludmVudG9yeTtcclxuICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IGl0ZW1zLnRvU3RyaW5nKCk7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBhIHBvc2l0aXZlIGludGVnZXIgdGhlbiB0aGUgY2VydGFpbiB1cGRhdGVzXHJcbiAgICAgICAgLy8gd2lsbCB0YWtlIHBsYWNlLlxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1YW50aXR5SW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGlmIChWYWxpZGF0aW9uLmNoZWNrX2lmX3Bvc2l0aXZlX2ludChOdW1iZXIocXVhbnRpdHlJbnB1dC52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBncmVhdGVyIHRoYW4gdGhlIG1heCwgdGhlbiBzZXQgaXQgdG8gdGhlIG1heC5cclxuICAgICAgICAgIGxldCB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgIGlmICh2YWx1ZSA+IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCkpIHtcclxuICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IHF1YW50aXR5SW5wdXQubWF4O1xyXG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBsb2NhbCBzdG9yYWdlICh1c2VyJ3MgYmFza2V0KVxyXG4gICAgICAgICAgdGhpcy51cGRhdGVfc2luZ2xlX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHByaWNlXHJcbiAgICAgICAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSAodmFsdWUgKiBwcm9kdWN0LnByaWNlKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYmFza2V0IHRvdGFsc1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIG1pbnVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIG1pbnVzQnRuLnNldEF0dHJpYnV0ZShcImNvbnRyb2xcIiwgXCJxdWFudGl0eS1kb3duXCIpO1xyXG4gICAgICBtaW51c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX2FuX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHByb2R1Y3QucHJpY2UsIHByaWNlU3Bhbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBwbHVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIHBsdXNCdG4uc2V0QXR0cmlidXRlKFwiY29udHJvbFwiLCBcInF1YW50aXR5LXVwXCIpO1xyXG4gICAgICBwbHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5hZGRfYW5faXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgcHJvZHVjdC5wcmljZSwgcHJpY2VTcGFuKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG4vL1xyXG4gICAgICBjb25zdCBtaW51c0J0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgbWludXNCdG5TcGFuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI7XHJcbiAgICAgIG1pbnVzQnRuU3Bhbi50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4vL1xyXG4gICAgICBjb25zdCBwbHVzQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICBwbHVzQnRuU3Bhbi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiO1xyXG4gICAgICBwbHVzQnRuU3Bhbi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG4vL1xyXG4gICAgICBtaW51c0J0bi5hcHBlbmRDaGlsZChtaW51c0J0blNwYW4pO1xyXG4gICAgICBwbHVzQnRuLmFwcGVuZENoaWxkKHBsdXNCdG5TcGFuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKG1pbnVzQnRuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKHF1YW50aXR5SW5wdXQpO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQocGx1c0J0bik7XHJcbi8vXHJcbiAgICAgIC8vIFByaWNlXHJcbiAgICAgIGNvbnN0IHByaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICBwcmljZUVsZW0uY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhXCI7XHJcbiAgICAgIHByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtcHJpY2UtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgY29uc3QgcG91bmRJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHBvdW5kSS50ZXh0Q29udGVudCA9IFwiwqNcIjtcclxuICAgICAgcG91bmRJLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS1jdXJyZW5jeVwiKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHBvdW5kSSk7XHJcbi8vXHJcbiAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBwcmljZVNwYW4uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXByaWNlLXZhbHVlXCIpO1xyXG4gICAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcChcclxuICAgICAgICBOdW1iZXIocHJvZHVjdC5wcmljZSkgKiBpdGVtc1xyXG4gICAgICApO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocHJpY2VTcGFuKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSBJdGVtIEJ1dHRvblxyXG4gICAgICBjb25zdCByZW1vdmVJdGVtU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5jbGFzc05hbWUgPSBcImJhc2tldF9faWNvblwiO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInJlbW92ZS1pdGVtXCIpO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vIE9uIHJlbW92YWwsIHVwZGF0ZSB0aGUgRE9NIGFuZCB0aGUgYmFza2V0L2xvY2FsIHN0b3JhZ2UgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVfd2hvbGVfaXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgbWFpbkNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVtb3ZlSXRlbUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSVwiKTtcclxuICAgICAgcmVtb3ZlSXRlbUkuY2xhc3NOYW1lID0gXCJmYSBmYS10aW1lc1wiO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5hcHBlbmRDaGlsZChyZW1vdmVJdGVtSSk7XHJcbiAgICAgIHByaWNlRWxlbS5hcHBlbmRDaGlsZChyZW1vdmVJdGVtU3Bhbik7XHJcblxyXG4gICAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBjb250YWluZXJzLCBhcHBlbmQgdGhhdCBjb250YWluZXJcclxuICAgICAgLy8gdG8gdGhlIG1haW4gY29udGFpbmVyIGFuZCB0aGVuIGZpbmFsbHkgYXBwZW5kIHRoZSBtYWluIGNvbnRhaW5lciB0byB0aGVcclxuICAgICAgLy8gRE9NIHRhcmdldCBlbGVtZW50LlxyXG4gICAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQVRhZylcclxuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRWxlbSlcclxuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yZUVsZW0pXHJcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3VyRWxlbSlcclxuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChxdWFudGl0eUNvbnRhaW5lckVsZW0pXHJcbiAgICAgIHByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlRWxlbSlcclxuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpXHJcbiAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcilcclxuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZUNvbnRhaW5lcilcclxuICAgICAgdGhpcy5zdW1tYXJ5SXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSB0aGUgSmF2YVNjcmlwdCB0byBlYWNoIHF1YW50aXR5IGNvbXBvbmVudC5cclxuICAgIG5ldyBRdWFudGl0eUNvbXBvbmVudCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSB1cGRhdGVfYmFza2V0X3RvdGFscygpIHtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgdG90YWxzIHNlY3Rpb24gaW4gdGhlIGJhc2tldCBwYWdlLlxyXG4gICAgICogVGhlIEhUTUwgZGVmYXVsdCBiZWhhdmlvciBpcyB0byBzZXQgdGhlIGxvYWRzIHRoZSBlbGVtZW50cyBhbmQgc2V0IHRoZVxyXG4gICAgICogdmFsdWVzIHRvIMKjMC4wMCBmb3IgZWFjaCBlbGVtZW50LlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHVwZGF0ZSB0aGUgdG90YWxzLlxyXG4gICAgICovXHJcbiAgICAvLyBCYXNrZXQgRWxlbWVudHMgaW4gdGhlIERPTVxyXG4gICAgY29uc3Qgc3VidG90YWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtc3VidG90YWxcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB2YXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtdmF0XCIpIVxyXG4gICAgICAuY2hpbGRyZW5bMV0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgY29uc3QgdG90YWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtdG90YWxcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gICAgLy8gSW5pdGlhbCBWYWx1ZVxyXG4gICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG5cclxuICAgIC8vIFJldHJpZXZlIGFsbCBlbGVtZW50cyB3aGVyZSB0aGVyZSBpcyBhIHByaWNlIGFuZCBpdGVyYXRpdmVseSB1cGRhdGVcclxuICAgIC8vIHRoZSB0b3RhbCBwcmljZS5cclxuICAgIGNvbnN0IHByaWNlRWxlbXMgPSBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtc3VtbWFyeS1kYXRhXCIpIVxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnW2ZpZWxkPVwicHJvZHVjdC1wcmljZS12YWx1ZVwiXScpO1xyXG5cclxuICAgIGZvciAobGV0IHByaWNlSWR4ID0gMDsgcHJpY2VJZHggPCBwcmljZUVsZW1zLmxlbmd0aDsgcHJpY2VJZHgrKykge1xyXG4gICAgICB0b3RhbFByaWNlICs9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBfdG9fZmxvYXQoXHJcbiAgICAgICAgcHJpY2VFbGVtc1twcmljZUlkeF0udGV4dENvbnRlbnRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIERPTSB3aWxsIHRoZSBuZXcgdG90YWwgZmlndXJlcy5cclxuICAgIGNvbnN0IHN1YlRvdGFsID0gdG90YWxQcmljZSAvIDEuMjtcclxuICAgIGNvbnN0IHZhdCA9IHRvdGFsUHJpY2UgLSBzdWJUb3RhbDtcclxuXHJcbiAgICBzdWJ0b3RhbEVsZW0udGV4dENvbnRlbnQgPSBzdWJUb3RhbC50b0ZpeGVkKDIpO1xyXG4gICAgdmF0RWxlbS50ZXh0Q29udGVudCA9IHZhdC50b0ZpeGVkKDIpO1xyXG4gICAgdG90YWxFbGVtLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAodG90YWxQcmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHJlbW92ZV9hbl9pdGVtKFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LiBEdXJpbmcgdGhlIHByb2Nlc3MsIGl0IHdpbGwgdXBkYXRlXHJcbiAgICAgKiB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgdXBkYXRlIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHByb2R1Y3RJZDogc3RyaW5nLFxyXG4gICAgcHJpY2U6IHN0cmluZyxcclxuICAgIHByaWNlRWxlbTogSFRNTEVsZW1lbnRcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZW1vdmVfaXRlbShOdW1iZXIocHJvZHVjdElkKSwgMSk7XHJcbiAgICBwcmljZUVsZW0udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcChcclxuICAgICAgTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcF90b19mbG9hdChwcmljZUVsZW0udGV4dENvbnRlbnQpIC0gTnVtYmVyKHByaWNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYWRkX2FuX2l0ZW0oXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuIER1cmluZyB0aGUgcHJvY2VzcywgaXQgd2lsbCB1cGRhdGVcclxuICAgICAqIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCB1cGRhdGUgdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmcsXHJcbiAgICBwcmljZTogc3RyaW5nLFxyXG4gICAgcHJpY2VFbGVtOiBIVE1MRWxlbWVudFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LlxyXG4gICAgICovXHJcbiAgICB0aGlzLmFkZF9pdGVtKE51bWJlcihwcm9kdWN0SWQpLCAxKTtcclxuICAgIHByaWNlRWxlbS50ZXh0Q29udGVudCA9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBhcmF0ZWRfMmRwKFxyXG4gICAgICBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwX3RvX2Zsb2F0KHByaWNlRWxlbS50ZXh0Q29udGVudCkgKyBOdW1iZXIocHJpY2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSByZW1vdmVfd2hvbGVfaXRlbShwcm9kdWN0SWQ6IHN0cmluZywgcGFyZW50Q29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGVudGlyZSBpdGVtIGZyb20gdGhlIGJhc2tldC4gSW4gdGhlIHByb2Nlc3MsIGl0IHdpbGwgdXBkYXRlXHJcbiAgICAgKiBsb2NhbCBzdG9yYWdlIGFuZCB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlbW92ZV9lbnRpcmVfaXRlbShwcm9kdWN0SWQpO1xyXG4gICAgcGFyZW50Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDI3LzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gRnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIFdpbGwgaGFuZGxlIHRoZSBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuIFRoZXNlIGluY2x1ZGUgdGhlXHJcbi8vIGZvbGxvd2luZzpcclxuLy9cclxuLy8gIC0gV2lsbCBidWlsZCBvbnRvIHRoZSBIVE1MIGFkZGluZyBvbnRvIHRoZSBjb2xvdXJzIGZpbHRlciBvcHRpb25zIGFzIHdlbGwgYXNcclxuLy8gICAgdGhlIHByb2R1Y3QgaW5mbyBzZWN0aW9uLiBUaGVyZSBlbGVtZW50cyB3aWxsIGJlIGFkZGVkIGJhc2VkIG9uIHdoYXQgb3RoZXJcclxuLy8gICAgcmVsYXRlZCBwcm9kdWN0cyB0aGVyZSBhcmUgdG8gdGhlIGN1cnJlbnQgcGFnZS4gVGhpcyBpbmZvcm1hdGlvbiB3aWxsIGJlXHJcbi8vICAgIHJldHJpZXZlZCBmcm9tIGFuIEFQSS5cclxuLy9cclxuLy8gIC0gV2lsbCBidWlsZCB0aGUgZnVuY3Rpb24gZm9yIHRoZSBhZGQgdG8gYmFza2V0IGJ1dHRvbiBhbGxvd2luZyBpdGVtc1xyXG4vLyAgICB0byBiZSBhZGRlZCB0byB0aGUgYmFza2V0IGFuZCBmb3IgdGhlIHBhZ2UgdG8gYmUgcmVmcmVzaGVkLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuaW1wb3J0IHsgQmFza2V0U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5kUHJvZHVjdFBhZ2UgZXh0ZW5kcyBCYXNrZXRTdGF0ZSB7XHJcbiAgLyoqXHJcbiAgICogV2lsbCBoYW5kbGUgdGhlIEpTIGZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS4gVGhlc2UgaW5jbHVkZSB0aGVcclxuICAgKiBmb2xsb3dpbmc6XHJcbiAgICpcclxuICAgKiAgLSBXaWxsIGJ1aWxkIG9udG8gdGhlIEhUTUwgYWRkaW5nIG9udG8gdGhlIGNvbG91cnMgZmlsdGVyIG9wdGlvbnMgYXMgd2VsbCBhc1xyXG4gICAqICAgIHRoZSBwcm9kdWN0IGluZm8gc2VjdGlvbi4gVGhlcmUgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB3aGF0IG90aGVyXHJcbiAgICogICAgcmVsYXRlZCBwcm9kdWN0cyB0aGVyZSBhcmUgdG8gdGhlIGN1cnJlbnQgcGFnZS4gVGhpcyBpbmZvcm1hdGlvbiB3aWxsIGJlXHJcbiAgICogICAgcmV0cmlldmVkIGZyb20gYW4gQVBJLlxyXG4gICAqXHJcbiAgICogIC0gV2lsbCBidWlsZCB0aGUgZnVuY3Rpb24gZm9yIHRoZSBhZGQgdG8gYmFza2V0IGJ1dHRvbiBhbGxvd2luZyBpdGVtc1xyXG4gICAqICAgIHRvIGJlIGFkZGVkIHRvIHRoZSBiYXNrZXQgYW5kIGZvciB0aGUgcGFnZSB0byBiZSByZWZyZXNoZWQuXHJcbiAgICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiAtIFJldHJpZXZlcyBkYXRhIGZyb20gdGhlIEFQSSBhbmQgY2FsbHMgbWV0aG9kcyB0byBidWlsZCBvbnRvIHRoZSBET00uXHJcbiAgICAgKiAtIEFkZHMgZnVuY3Rpb25hbGl0eSBvbnRvIHRoZSBcImFkZCB0byBiYXNrZXQgYnV0dG9uXCIuXHJcbiAgICAgKi9cclxuICAgIHN1cGVyKCk7XHJcbiAgICBjb25zdCBBUElQYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcclxuICAgICAgXCIvcHJvZHVjdHMvXCIsXHJcbiAgICAgIFwiL3Byb2R1Y3RzL2luZm8tYXBpL1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIEFQSVBhdGgpO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgLy8gQWRkaW5nIGNvbG91ciB2YXJpYXRpb25zXHJcbiAgICAgICAgaWYgKGRhdGEuY29sb3Vycykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9jb2xvdXJzKGRhdGEuY29sb3Vycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZGluZyBvdGhlciBwcm9kdWN0cyBvZiB0aGUgc2FtZSBzZXRcclxuICAgICAgICBpZiAoZGF0YS5zZXRzKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX3Byb2R1Y3Rfc2V0cyhkYXRhLnNldHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgc2ltaWxhciBwcm9kdWN0c1xyXG4gICAgICAgIGlmIChkYXRhLnNpbWlsYXIpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfc2ltaWxhcl9wcm9kdWN0cyhkYXRhLnNpbWlsYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgZmVhdHVyZXMgaW5mb3JtYXRpb25cclxuICAgICAgICBpZiAoZGF0YS5mZWF0dXJlcykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9mZWF0dXJlcyhkYXRhLmZlYXR1cmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hZGRfdG9fYmFza2V0KCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX2NvbG91cnMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBkcm9wZG93biBjb2xvdXJzIGRyb3Bkb3duIG1lbnUgYW5kIGFkZHMgbW9yZSBjb2xvdXJzXHJcbiAgICAgKiBpbiBhY2NvcmRhbmNlIHRvIGhvdyBtYW55IGhvdyBtYW55IGNvbG91cnMgd2VyZSByZXR1cm5lZCBmcm9tIHRoZSBBUEkuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIGFwcGVuZCBlbGVtZW50cyBvbnRvIHRoZSBlbGVtZW50XHJcbiAgICAgKiAjcHJvZHVjdC1jb2xvdXItdmFyaWF0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEZvciBlYWNoIGNvbG91ciwgdGhlIGZvbGxvd2luZyBIVE1MIHdpbGwgYmUgYXBwZW5kZWQ6XHJcbiAgICAgKlxyXG4gICAgICogPGFcclxuICAgICAqICAgaHJlZj1cIntsaW5rIHRvIHByb2R1Y3R9XCJcclxuICAgICAqICAgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiXHJcbiAgICAgKiAgIGZvcj1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqIC8+XHJcbiAgICAgKiAgIDxsYWJlbCBmb3I9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiPlxyXG4gICAgICogICAgIDxzcGFuXHJcbiAgICAgKiAgICAgICBjbGFzcz1cInNtLWNvbG91ci1ib3hcIlxyXG4gICAgICogICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge2NvbG91ciBoZXggdmFsdWV9O1wiPlxyXG4gICAgICogICAgIDwvc3Bhbj5cclxuICAgICAqICAgICB7Y29sb3VyLW5hbWV9XHJcbiAgICAgKiAgIDwvbGFiZWw+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKiA8aW5wdXRcclxuICAgICAqICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAqICAgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIlxyXG4gICAgICogICBuYW1lPVwicHJvZC1mLWNvbG91clwiXHJcbiAgICAgKiAgIGlkPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIlxyXG4gICAgICogICB2YWx1ZT1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqIC8+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgIC8vIFVzaW5nIGRhdGEgcmV0cmlldmVkIGZyb20gdGhlIEFQSSB0byBidWlsZCBjb25zdGFudHNcclxuICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgIGNvbnN0IGNvbG91ciA9IGF0dHJzW2FdLmNvbF9uYW1lO1xyXG4gICAgICAgIGNvbnN0IGhleF92YWwgPSBhdHRyc1thXS5jb2xfaGV4X3ZhbDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwiYVwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJsYWJlbFwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKTtcclxuICAgICAgICBsYWJlbEVsZW0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwic3BhblwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IHNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgc3BhbkVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbS1jb2xvdXItYm94XCIpO1xyXG4gICAgICAgIHNwYW5FbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogXCIgKyBoZXhfdmFsICsgXCI7XCIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJpbnB1dFwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2QtZi1jb2xvdXJcIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJjb2xvdXItXCIgKyBjb2xvdXIpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmRpbmcgZWFjaCB0YWcgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwYXJlbnQgZWxlbWVudHMuXHJcbiAgICAgICAgbGFiZWxFbGVtLmFwcGVuZENoaWxkKHNwYW5FbGVtKTtcclxuICAgICAgICBsYWJlbEVsZW0uYXBwZW5kKGNvbG91cik7XHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQobGFiZWxFbGVtKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIHRoZSBlbGVtZW50cyB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgaW4gdGhlIERPTS5cclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGlucHV0RWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zIGRvZXMgbm90IGV4aXN0LCBhbHRlcm5hdGl2ZSBjb2xvdXJzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9wcm9kdWN0X3NldHMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBcInByb2R1Y3Qgc2V0c1wiIHNlY3Rpb25zLlxyXG4gICAgICogV2lsbCBhcHBlbmQgZWFjaCBwcm9kdWN0IHNldCBvbnRvICNwcm9kdWN0LXNldHMuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgcHJvZHVjZSB0aGUgZm9sbG93aW5nIEhUTUwgZm9yIGVhY2ggc2V0OlxyXG4gICAgICpcclxuICAgICAqIDxhIGNsYXNzPVwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIgaHJlZj1cIntwcm9kdWN0IHVybH1cIlxyXG4gICAgICogICA8aW1nXHJcbiAgICAgKiAgICAgY2xhc3M9XCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAqICAgICBhbHQ9XCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiB7cHJvZHVjdCBuYW1lfVwiXHJcbiAgICAgKiAgID5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIj57cHJvZHVjdCBuYW1lfTwvc3Bhbj5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiPntwcm9kdWN0IHByaWNlfTwvc3Bhbj5cclxuICAgICAqIDwvYT5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1zZXRzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2FdLm5hbWU7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBhdHRyc1thXS5zaG93Y2FzZV9pbWFnZTtcclxuICAgICAgICAgIGNvbnN0IHByaWNlID0gYXR0cnNbYV0ucHJpY2U7XHJcblxyXG4gICAgICAgICAgLy8gXCJBXCIgdGFnIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0LlxyXG4gICAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIpO1xyXG4gICAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICAgICAgICAvLyBcIklNR1wiIHRhZyBmb3IgcHJvZHVjdCBpbWFnZS5cclxuICAgICAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgICAgXCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcpO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiYWx0XCIsXHJcbiAgICAgICAgICAgIFwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4gKFwiICsgbmFtZSArIFwifVwiXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIC8vIFwiU1BBTlwiIHRhZ3MgY29udGFpbmluZyB0aGUgcHJvZHVjdCBuYW1lIGFuZCBwcmljZVxyXG4gICAgICAgICAgY29uc3QgdGV4dFNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgICB0ZXh0U3BhbkVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0U3BhbkVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRleHRQcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICAgIHRleHRQcmljZUVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRleHRQcmljZUVsZW0udGV4dENvbnRlbnQgPSBcIsKjXCIgKyBwcmljZTtcclxuXHJcbiAgICAgICAgICAvLyBTZXQgdGhlIGltYWdlIGFuZCB0ZXh0IGVsZW1lbnRzIHRvIGJlY29tZSBjaGlsZHJlbiBvZiB0aGUgbGlua0VsZW1cclxuICAgICAgICAgIC8vIGFuZCBhcHBlbmQgdGhlbSBvbnRvIHRoZSB0YXJnZXRFbGVtIGluIHRoZSBET00uXHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuICAgICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRTcGFuRWxlbSk7XHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0UHJpY2VFbGVtKTtcclxuICAgICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1zZXRzIGRvZXMgbm90IGV4aXN0LCBwcm9kdWN0LXNldHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBcInNpbWlsYXIgcHJvZHVjdHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjc2ltaWxhci1wcm9kdWN0cy5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBwcm9kdWNlIHRoZSBmb2xsb3dpbmcgSFRNTCBmb3IgZWFjaCBzZXQ6XHJcbiAgICAgKlxyXG4gICAgICogPGEgY2xhc3M9XCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIiBocmVmPVwie3Byb2R1Y3QgdXJsfVwiXHJcbiAgICAgKiAgIDxpbWdcclxuICAgICAqICAgICBjbGFzcz1cInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICogICAgIGFsdD1cIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIHtwcm9kdWN0IG5hbWV9XCJcclxuICAgICAqICAgPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0IG5hbWV9PC9zcGFuPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCI+e3Byb2R1Y3QgcHJpY2V9PC9zcGFuPlxyXG4gICAgICogPC9hPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW1pbGFyLXByb2R1Y3RzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2FdLm5hbWU7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBhdHRyc1thXS5zaG93Y2FzZV9pbWFnZTtcclxuICAgICAgICAgIGNvbnN0IHByaWNlID0gYXR0cnNbYV0ucHJpY2U7XHJcblxyXG4gICAgICAgICAgLy8gXCJBXCIgdGFnIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0LlxyXG4gICAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2ltaWxhci1wcm9kdWN0IHJlbGF0ZWQtcHJvZHVjdFwiKTtcclxuICAgICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJhbHRcIixcclxuICAgICAgICAgICAgXCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiAoXCIgKyBuYW1lICsgXCJ9XCJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgLy8gXCJTUEFOXCIgdGFncyBjb250YWluaW5nIHRoZSBwcm9kdWN0IG5hbWUgYW5kIHByaWNlXHJcbiAgICAgICAgICBjb25zdCB0ZXh0U3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICAgIHRleHRTcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0U3BhbkVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRleHRQcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICAgIHRleHRQcmljZUVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0UHJpY2VFbGVtLnRleHRDb250ZW50ID0gXCLCo1wiICsgcHJpY2U7XHJcblxyXG4gICAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgICAvLyBhbmQgYXBwZW5kIHRoZW0gb250byB0aGUgdGFyZ2V0RWxlbSBpbiB0aGUgRE9NLlxyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFByaWNlRWxlbSk7XHJcbiAgICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3NpbWlsYXItcHJvZHVjdHMgZG9lcyBub3QgZXhpc3QsIHNpbWlsYXItcHJvZHVjdHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBidWlsZF9mZWF0dXJlcyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBmZWF0dXJlcyBzZWN0aW9uIG9mIHByb2R1Y3QgaW5mb3JtYXRpb24gYmFzZWQgb24gcmVzdWx0c1xyXG4gICAgICogcmV0cmlldmVkIGZyb20gdGhlIEFQSS5cclxuICAgICAqIFdpbGwgY3JlYXRlIGEgXCJQXCIgdGFnIGZvciBlYWNoIGZpbHRlciBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIHRhcmdldFxyXG4gICAgICogZWxlbWVudCBpbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1mZWF0dXJlc1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBmID0gMDsgZiA8IGF0dHJzLmxlbmd0aDsgZisrKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2ZdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LWluZm9fX3NlY3Rpb25fX3RleHRcIik7XHJcbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobmV3RWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNwcm9kdWN0LWZlYXR1cmVzIGRvZXMgbm90IGV4aXN0LCBzaW1pbGFyLXByb2R1Y3RzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBhZGRfdG9fYmFza2V0KCkge1xyXG4gICAgLyoqIEFkZHMgcHJvZHVjdHMgaW50byB0aGUgYmFza2V0ICovXHJcbiAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJxdWFudGl0eS1jdHJsXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9IE51bWJlcihpbnB1dEVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1pZFwiKSk7XHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiYWRkLXRvLWJhc2tldC1idG5cIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBxdWFudGl0eSA9IE51bWJlcihpbnB1dEVsZW0udmFsdWUpO1xyXG5cclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocXVhbnRpdHkpKSB7XHJcbiAgICAgICAgc3VwZXIuYWRkX2l0ZW0ocHJvZHVjdElkLCBxdWFudGl0eSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJDaGVjayB0aGUgcXVhbnRpdHksIGl0IGlzIGVpdGhlciBOYU4gb3IgYSBmbG9hdC4gTXVzdCBiZSBhIG51bWJlclwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDIvMDIvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBSZXZpZXdzIHNlY3Rpb24gb24gYSBwcm9kdWN0IHBhZ2UvXHJcbi8vXHJcbi8vIE9WRVJWSUVXXHJcbi8vIE9uIHRoZSBwcm9kdWN0cyBwYWdlIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgYW5kIHRoZSB1c2VyIGhhcyBsZWZ0XHJcbi8vIGNvbW1lbnRzLCB0aGVyZSB3aWxsIGJlIG9wcG9ydHVuaXR5IHRvIHVwZGF0ZSBvciBkZWxldGUgdGhhdCBjb21tZW50LlxyXG4vL1xyXG4vLyBPbiBsb2FkLCB0aGUgY29tbWVudCB3aWxsIGJlIHBsYWNlZCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLCB3aXRoIGFuIGVkaXQgYW5kXHJcbi8vIGRlbGV0ZSBidXR0b24uXHJcbi8vXHJcbi8vIElmIHVzZXIgY2xpY2tzIG9uIHRoZSBlZGl0IGJ1dHRvbiwgcmVwbGFjZSB0aGUgY29tbWVudCB3aXRoIGZvcm0gZWxlbWVudHNcclxuLy8gYWxsb3dpbmcgdGhlIHVzZXIgdG8gZWRpdCB0aGUgcmF0aW5nLCB0aXRsZSBhbmQgY29tbWVudC4gT24gY2xpY2tpbmcgZWRpdCxcclxuLy8gYSBoaWRkZW4gaW5wdXQgYnV0dG9uIHdpbGwgYmUgdXBkYXRlZCB0aGUgaW5kaWNhdGUgdGhhdCB0aGUgdXNlciBoYXMgY2hvc2VuXHJcbi8vIHRvIHVwZGF0ZSB0aGVpciBjb250ZW50LlxyXG4vL1xyXG4vLyBCZWxvdyBhbGwgb2YgdGhpcywgdGhlcmUgd2lsbCBiZSBhIHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbi4gVGhlIGNhbmNlbFxyXG4vLyBidXR0b24gd2lsbCBub3QgbWFrZSBhbnkgY2hhbmdlcywgcmF0aGVyIHJldHVybiB0byB0aGUgb3JpZ2luYWwgdmlldy5cclxuLy9cclxuLy8gSWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgc3VibWl0IGJ1dHRvbiwgYSBoaWRkZW4gc3VibWl0IGJ1dHRvbiB3b3VsZCBuZWVkIHRvXHJcbi8vIGNsaWNrZWQgdGhyb3VnaCB0aGUgSmF2YVNjcmlwdCB3aGljaCB3aWxsIHNlbnQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGJhY2tlbmQuXHJcbi8vXHJcbi8vIElmIHRoZSB1c2VyIHByZXNzZXMgdGhlIGRlbGV0ZSBidXR0b24sIHRoZXJlIHdpbGwgYmUgYSBwb3AgdXAgYXNraW5nIHRoZW0gdG9cclxuLy8gY29uZmlybSB0aGF0IHRoZXkgd2FudCB0byBkZWxldGUgdGhlaXIgcG9zdC4gSWYgY29uZmlybWVkLCB0aGVuIGFuIGhpZGRlblxyXG4vLyBpbnB1dCB3aWxsIGJlIHVwZGF0ZWQgYW5kIGEgdGhlIHN1Ym1pdCBjbGlja2VkIHNlbmRpbmcgYSBQT1NUIHJlcXVlc3Qgb3QgdGhlXHJcbi8vIGJhY2tlbmQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFVzZXJSZXZpZXcge1xyXG4gIC8vIEZvcm0gY29udGFpbmluZyB0aGUgdXNlciByZXZpZXcgb3IgbnVsbC5cclxuICB1c2VyUmV2aWV3Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJwcm9kdWN0LXVzZXItcmV2aWV3LWZvcm1cIlxyXG4gICkgYXMgSFRNTEZvcm1FbGVtZW50IHwgbnVsbDtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciBob2xkcyB0aGUgY29uc3RhbnRzIGFuZCBkaWN0YXRlcyB0aGUgYnVpbGQgb3JkZXIgb2YgZWFjaFxyXG4gICAgICogZWxlbWVudC5cclxuICAgICAqL1xyXG5cclxuICAgIGlmICh0aGlzLnVzZXJSZXZpZXdGb3JtKSB7XHJcbiAgICAgIC8vIEVsZW1lbnRzIGZyb20gdGhlIGZvcm0gdGhhdCB3aWwgYmUgaW50ZXJhY3RlZCB3aXRoLlxyXG5cclxuICAgICAgLy8gQ3VycmVudCB1c2VyIHJldmlldyBzZWN0aW9uXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRSZXZpZXdTZWN0cyA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAnW3VzZXJTZWN0aW9uPVwiY3VycmVudC1zZWN0aW9uXCJdJ1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB1cGRhdGVSZXZpZXdTZWN0cyA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAnW3VzZXJTZWN0aW9uPVwidXBkYXRlLXNlY3Rpb25cIl0nXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNvbmZpcm1EZWxldGVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwicHJvZHVjdC1yZXZpZXdzX19yZXZpZXdfX2NvbmZpcm0tZGVsZXRlXCJcclxuICAgICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICAgIC8vIEJ1dHRvbnNcclxuICAgICAgY29uc3QgZWRpdEJ0biA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1lZGl0LXN0YXJ0XCJcclxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3QgY2FuY2VsQnRuID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3VzZXItcmV2aWV3LWVkaXQtY2FuY2VsXCJcclxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1kZWxldGUtc3RhcnRcIlxyXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBjb25zdCBzdWJtaXRCdG4gPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjdXNlci1yZXZpZXctc3VibWl0XCJcclxuICAgICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICAgIC8vIElucHV0IGVsZW1lbnRzXHJcbiAgICAgIGNvbnN0IHVzZXJTdWJtaXRCdG4gPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjdXNlci1yZXZpZXctZWRpdC1zdWJtaXRcIlxyXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgLy8gICAvLyBIaWRkZW4gaW5wdXRzXHJcbiAgICAgIGNvbnN0IG9wZXJhdGlvbkhJbnB1dCA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1vcGVyYXRpb25cIlxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIC8vICAgY29uc3QgdXNlclJhdGluZ0hJbnB1dCA9IHRoaXMudXNlclJldmlld0Zvcm0uZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIC8vICAgICBcInVzZXItcmV2aWV3LXJhdGluZ1wiXHJcbiAgICAgIC8vICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBjb25zdCBkZWxldGVCb29sSElucHV0ID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3VzZXItcmV2aWV3LWRlbGV0ZS1ib29sXCJcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgdGhpcy5fYnVpbGRfdXBkYXRlX2NvbW1lbnRzX2VkaXRfYnRuKFxyXG4gICAgICAgIGVkaXRCdG4sXHJcbiAgICAgICAgY3VycmVudFJldmlld1NlY3RzLFxyXG4gICAgICAgIHVwZGF0ZVJldmlld1NlY3RzXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX3VwZGF0ZV9jb21tZW50c19jYW5jZWxfYnRuKFxyXG4gICAgICAgIGNhbmNlbEJ0bixcclxuICAgICAgICBjdXJyZW50UmV2aWV3U2VjdHMsXHJcbiAgICAgICAgdXBkYXRlUmV2aWV3U2VjdHNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fYnVpbGRfdXBkYXRlX2NvbW1lbnRzX3N1Ym1pdF9idG4oXHJcbiAgICAgICAgdXNlclN1Ym1pdEJ0bixcclxuICAgICAgICBzdWJtaXRCdG4sXHJcbiAgICAgICAgb3BlcmF0aW9uSElucHV0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX2RlbGV0ZV9mdW5jdGlvbnMoXHJcbiAgICAgICAgZGVsZXRlQnRuLFxyXG4gICAgICAgIG9wZXJhdGlvbkhJbnB1dCxcclxuICAgICAgICBjb25maXJtRGVsZXRlQm94LFxyXG4gICAgICAgIGRlbGV0ZUJvb2xISW5wdXQsXHJcbiAgICAgICAgc3VibWl0QnRuXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfdXBkYXRlX2NvbW1lbnRzX2VkaXRfYnRuKFxyXG4gICAgZWRpdEJ0bjogSFRNTEVsZW1lbnQsXHJcbiAgICBjdXJyZW50UmV2aWV3U2VjdHM6IE5vZGVMaXN0LFxyXG4gICAgdXBkYXRlUmV2aWV3U2VjdHM6IE5vZGVMaXN0XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgY29udHJvbHMgZm9yIHRoZSBlZGl0IGJ1dHRvbi5cclxuICAgICAqIE9uIGNsaWNrLCB0aGUgdXNlcidzIHJldmlldyBpbiB0aGUgZm9ybSBvZiBibG9jayB0ZXh0IHdpbGwgaGlkZVxyXG4gICAgICogYW5kIGEgZm9ybSB3aWxsIGJlIHNob3duIHdoZXJlIHRoZSB1c2VyIHdpbGwgYmUgYWJsZSB0byB1cGRhdGVcclxuICAgICAqIHRoZWlyIGNvbW1lbnRzIGFuZCByYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgc2VjdGlvbiA9IDA7IHNlY3Rpb24gPCBjdXJyZW50UmV2aWV3U2VjdHMubGVuZ3RoOyBzZWN0aW9uKyspIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gY3VycmVudFJldmlld1NlY3RzW3NlY3Rpb25dIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRhcmdldEVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IHNlY3Rpb24gPSAwOyBzZWN0aW9uIDwgdXBkYXRlUmV2aWV3U2VjdHMubGVuZ3RoOyBzZWN0aW9uKyspIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gdXBkYXRlUmV2aWV3U2VjdHNbc2VjdGlvbl0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfdXBkYXRlX2NvbW1lbnRzX2NhbmNlbF9idG4oXHJcbiAgICBjYW5jZWxCdG46IEhUTUxFbGVtZW50LFxyXG4gICAgY3VycmVudFJldmlld1NlY3RzOiBOb2RlTGlzdCxcclxuICAgIHVwZGF0ZVJldmlld1NlY3RzOiBOb2RlTGlzdFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGNvbnRyb2xzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbi5cclxuICAgICAqIE9uIGNsaWNrLCB0aGUgdXNlcidzIHJldmlldyBpbiB0aGUgZm9ybSBvZiBibG9jayB0ZXh0IHdpbGwgc2hvd1xyXG4gICAgICogYW5kIHRoZSB0aGUgdXBkYXRlIGNvbW1lbnRzIHNlY3Rpb24gd2lsbCBoaWRlLlxyXG4gICAgICovXHJcblxyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IHNlY3Rpb24gPSAwOyBzZWN0aW9uIDwgY3VycmVudFJldmlld1NlY3RzLmxlbmd0aDsgc2VjdGlvbisrKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IGN1cnJlbnRSZXZpZXdTZWN0c1tzZWN0aW9uXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0YXJnZXRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBzZWN0aW9uID0gMDsgc2VjdGlvbiA8IHVwZGF0ZVJldmlld1NlY3RzLmxlbmd0aDsgc2VjdGlvbisrKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IHVwZGF0ZVJldmlld1NlY3RzW3NlY3Rpb25dIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRhcmdldEVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX2RlbGV0ZV9mdW5jdGlvbnMoXHJcbiAgICBkZWxldGVCdG46IEhUTUxFbGVtZW50LFxyXG4gICAgaE9wZXJhdGlvbklucHV0OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgY29uZmlybURlbGV0ZUJveDogSFRNTERpdkVsZW1lbnQsXHJcbiAgICBoQ29uZmlybURlbGV0ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgc3VibWl0QnRuOiBIVE1MQnV0dG9uRWxlbWVudFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGRlbGV0ZSBmdW5jdGlvbmFsaXR5IHdoZXJlIGEgdXNlciBpcyBhYmxlIHRvIGRlbGV0ZSB0aGVpclxyXG4gICAgICogb3duIGNvbW1lbnRzLlxyXG4gICAgICogV2hlbiBhIHVzZXIgcHJlc3NlcyBkZWxldGUsIHJldmVhbCB0aGUgY29uZmlybSBwb3AgdXBcclxuICAgICAqIChjb25maXJtRGVsZXRlQm94KSB3aGVyZSB0aGUgdXNlciBoYXMgdGhlIG9wdGlvbiB0byBlaXRoZXIgY29uZmlybVxyXG4gICAgICogZGVsZXRlIG9yIGNhbmNlbC5cclxuICAgICAqIElmIHRoZSB1c2VyIHByZXNzZXMgY2FuY2VsIG9yIGFueXdoZXJlIG91dHNpZGUgdGhlIGJveCxcclxuICAgICAqIGhpZGUgdGhlIHBvcCB1cCBhbmQgdGFrZSBubyBmdXJ0aGVyIGFjdGlvbi5cclxuICAgICAqIE90aGVyd2lzZSwgaWYgdGhlIHVzZXIgY29uZmlybXMgdGhleSB3aXNoIHRvIGRlbGV0ZSB0aGUgcG9zdCwgdXBkYXRlXHJcbiAgICAgKiB0aGUgaGlkZGVuIGlucHV0cyAoaE9wZXJhdGlvbklucHV0IGFuZCBoQ29uZmlybURlbGV0ZUlucHV0KSBhbmRcclxuICAgICAqIHN1Ym1pdCB0aGUgZm9ybSAoY2xpY2sgb24gc3VibWl0QnRuKS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIFNob3cgdGhlIHBvcCB1cCBpZiB1c2VyIGNsaWNrcyBvbiBkZWxldGUuXHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgY29uZmlybURlbGV0ZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIaWRlIHRoZSBmb3JtIGlmIHRoZSB1c2VyIHByZXNzZXMgY2FuY2VsIG9uIHRoZSBwb3AgdXAgYm94IG9yIGNsaWNrc1xyXG4gICAgLy8gb3V0c2lkZSB0aGUgYm94LlxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25maXJtRGVsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uZmlybURlbGV0ZUJveFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLWRlbGV0ZV9faW5uZXItY29udGFpbmVyXCIpXHJcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uZmlybURlbGV0ZUJveFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tZGVsZXRlX19idG5bZm9yPVwiY2FuY2VsXCJdJykhXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbmZpcm1EZWxldGVCb3guY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIElmIHRoZSB1c2VyIGNvbmZpcm1zIHRoZXkgd2FudCB0byBkZWxldGUgdGhlaXIgcmV2aWV3LCBwb3B1bGF0ZVxyXG4gICAgLy8gdGhlIGhpZGRlbiBpbnB1dHMgYWNjb3JkaW5nbHkgYW5kIHN1Ym1pdCB0aGUgZm9ybS5cclxuICAgIGNvbmZpcm1EZWxldGVCb3hcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWRlbGV0ZV9fYnRuW2Zvcj1cImRlbGV0ZVwiXScpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBoT3BlcmF0aW9uSW5wdXQudmFsdWUgPSBcImRlbGV0ZVwiO1xyXG4gICAgICAgIGhDb25maXJtRGVsZXRlSW5wdXQudmFsdWUgPSBcInRydWVcIjtcclxuICAgICAgICBzdWJtaXRCdG4uY2xpY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfdXBkYXRlX2NvbW1lbnRzX3N1Ym1pdF9idG4oXHJcbiAgICB1c2VyU3VibWl0QnRuOiBIVE1MRWxlbWVudCxcclxuICAgIHN1Ym1pdEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBoT3BlcmF0aW9uSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIHVwZGF0ZSBjb21tZW50cy5cclxuICAgICAqIFdoZW4gdGhlIFwiZWRpdCBjb21tZW50c1wiIGZvcm0gZWxlbWVudHMgYXJlIHZpc2libGUsIHRoZSB1c2VyIHdpbGwgaGF2ZVxyXG4gICAgICogdGhlIGFiaWxpdHkgdG8gY2hhbmdlIHRoZSByYXRpbmcsIHVwZGF0ZSB0aGUgdGl0bGUgYW5kIGNvbW1lbnQuXHJcbiAgICAgKiBJZiB0aGUgdXNlciBwcmVzc2VzIHN1Ym1pdCwgY2FwdHVyZSBhbmQgc3VibWl0IHRoZSBmb3JtLlxyXG4gICAgICogVGhpcyBpcyBkb25lIHVzaW5nIHRoZSBuYW1lIGF0dHJpYnV0ZSBvbiB0aGUgaW5wdXQgZWxlbWVudHMuXHJcbiAgICAgKiBGb3IgdGhlIHJhdGluZ3MsIHRoaXMgaXMgaGFuZGxlZCBieSBpdHMgb3duIG1vZHVsZSB3aGVyZSBhIGhpZGRlblxyXG4gICAgICogaW5wdXQgaXMgdXBkYXRlZCB3aXRoIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgdXNlclN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBoT3BlcmF0aW9uSW5wdXQudmFsdWUgPSBcInVwZGF0ZVwiO1xyXG4gICAgICBzdWJtaXRCdG4uY2xpY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDMwLzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBQYWdlcyB3aGVyZSBpbnRlcmFjdGlvbiB3aXRoIGl0ZW1zIGluIHRoZSBiYXNrZXQgbmVlZCB0byBiZSBhY2Nlc3MgYW5kL29yXHJcbi8vIG1vZGlmaWVkLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyAtIE1hbmFnZSB0aGUgYmFza2V0IGl0ZW1zXHJcbi8vIC0gS2VlcCBiYXNrZXQgZGF0YSB3aGVuZXZlciB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxyXG4vLyAtIFVwZGF0ZXMgdGhlIGJhc2tldCBpdGVtcyBjb3VudFxyXG4vL1xyXG4vLyBERVNDUklQVElPTjpcclxuLy8gLS0tLS0tLS0tLS0tXHJcbi8vIExldmVyYWdlcyB0aGUgcG93ZXIgb2YgbG9jYWwgc3RvcmFnZSB0byBrZWVwIGEgdHJhY2sgb2YgdGhlIGJhc2tldC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBCYXNrZXRTdGF0ZSB7XHJcbiAgdG90YWxJdGVtczogc3RyaW5nIHwgbnVsbCB8IG51bWJlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgIFwidG90YWxCYXNrZXRTaXplXCJcclxuICApO1xyXG4gIGl0ZW1zOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYXNrZXRJdGVtc1wiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfY291bnRlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfcmVhZF9pdGVtcygpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSB0b3RhbCBhbmQgYmFza2V0IHNpemUgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgY29udmVydHNcclxuICAgICAqIHRoZSB2YWx1ZXMgaW50byB0eXBlcyB0aGF0IGNhbiBiZSB3b3JrZWQgd2l0aC5cclxuICAgICAqL1xyXG4gICAgaWYgKCF0aGlzLnRvdGFsSXRlbXMpIHtcclxuICAgICAgdGhpcy50b3RhbEl0ZW1zID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE51bWJlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXRlbXMpIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IEpTT04ucGFyc2UodGhpcy5pdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0ge307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9zZXRfaXRlbXMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBsb2NhbCBzdG9yYWdlIGl0ZW1zIGludG8gc3RyaW5ncyBhbmQgc2F2ZXMgdGhlbSBvbnRvIHRoZVxyXG4gICAgICogbG9jYWwgc3RvcmFnZS5cclxuICAgICAqIFVwZGF0ZXMgdGhlIGJhc2tldCBpdGVtcyBjb3VudGVyLlxyXG4gICAgICovXHJcblxyXG4gICAgaWYgKCF0aGlzLnRvdGFsSXRlbXMpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxCYXNrZXRTaXplXCIsIFwiMFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICBcInRvdGFsQmFza2V0U2l6ZVwiLFxyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcy50b1N0cmluZygpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhc2tldEl0ZW1zXCIsIFwie31cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0gSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhc2tldEl0ZW1zXCIsIHRoaXMuaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgYmFza2V0XHJcbiAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfY291bnRlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYWRkX2l0ZW0oaWQ6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgLyoqIE1ldGhvZCBmb3IgYWRkaW5nIGl0ZW1zIGludG8gdGhlIGJhc2tldC4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuXHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIHRoaXMudG90YWxJdGVtcyArPSBxdWFudGl0eTtcclxuXHJcbiAgICBpZiAodGhpcy5pdGVtc1tpZF0pIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gKz0gcXVhbnRpdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSA9IHF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICByZW1vdmVfaXRlbShpZDogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICAvKiogTWV0aG9kIGZvciByZW1vdmluZyBpdGVtcyBmcm9tIHRoZSBiYXNrZXQuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcblxyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICBpZiAodGhpcy50b3RhbEl0ZW1zID4gMCkge1xyXG4gICAgICB0aGlzLnRvdGFsSXRlbXMgLT0gcXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfY291bnRlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zW2lkXSkge1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSA9IE51bWJlcih0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdIC09IHF1YW50aXR5O1xyXG4gICAgICBpZiAodGhpcy5pdGVtc1tpZF0gPT0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLml0ZW1zW2lkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcmVtb3ZlX2VudGlyZV9pdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgIC8qKiBSZW1vdmVzIGFuZCBlbnRpcmUgaXRlbS4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpIC0gTnVtYmVyKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgIGRlbGV0ZSB0aGlzLml0ZW1zW2lkXTtcclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgdXBkYXRlX2Jhc2tldF9jb3VudGVyKG5ld051bTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgLyoqIFVwZGF0ZXMgdGhlIGJhc2tldCBjb3VudGVyIG51bWJlciAqL1xyXG4gICAgY29uc3QgYmFza2V0Q291bnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiYmFza2V0LXRvdGFsLWl0ZW1zXCJcclxuICAgICkgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgIGlmIChuZXdOdW0pIHtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0udGV4dENvbnRlbnQgPSBuZXdOdW0udG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHVwZGF0ZV9zaW5nbGVfaXRlbShwcm9kdWN0SWQ6IHN0cmluZyB8IG51bWJlciwgbmV3TnVtOiBudW1iZXIpIHtcclxuICAgIC8qKiBVcGRhdGVzIHRoZSBsb2NhbCBzdG9yYWdlIGZvciBhIHNpbmdsZSBpdGVtIHdpdGggYSBuZXcgcXVhbnRpdHkuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcbiAgICBjb25zdCBwcmV2VmFsdWUgPSBOdW1iZXIodGhpcy5pdGVtc1twcm9kdWN0SWRdKVxyXG4gICAgdGhpcy5pdGVtc1twcm9kdWN0SWRdID0gbmV3TnVtO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcykgKyBuZXdOdW0gLSBwcmV2VmFsdWU7XHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwOC8wMS8yMDIwMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFV0aWxpdHkgY2xhc3MgdG8gcmVmb3JtYXQgbnVtYmVyLlxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE51bWJlckZvcm1hdCB7XHJcbiAgLyoqICBVdGlsaXR5IGNsYXNzIHRvIGNvbnZlcnQgbnVtYmVycyB0byBkaWZmZXJlbnQgZm9ybWF0cy4gKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIHRob3VzYW5kX3NlcGFyYXRlZF8yZHAobnVtOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIC8qKiBDb3ZlcnRzIGEgbnVtYmVyIHRvIGEgdGhvdXNhbmQgc2VwYXJhdGVkIHN0cmluZyB0byAyLmQucCAqL1xyXG4gICAgcmV0dXJuIE51bWJlcihudW0pXHJcbiAgICAgIC50b0ZpeGVkKDIpXHJcbiAgICAgIC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgdGhvdXNhbmRfc2VwX3RvX2Zsb2F0KG51bTogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgICAvKipcclxuICAgICAgICogQ29udmVydHMgYSB0aG91c2FuZCBzZXBhcmF0ZWQgZmxvYXQgdG8gYSBmbG9hdC4gSWYgdGhlIGFyZ3VtZW50ID0gbnVsbFxyXG4gICAgICAgKiB0aGVuIDAgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAgICovXHJcbiAgICBpZiAoIW51bSkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIobnVtLnJlcGxhY2UoXCIsXCIsIFwiXCIpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwNy8wMS8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gVXRpbGl0eSBwcm92aWRpbmcgdmFsaWRhdGlvbiBvcHRpb25zLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIEEgdXRpbGl0aWVzIGNsYXNzIGNvbnRhaW5pbmcgc3RhdGljIG1ldGhvZCB3aGljaCBydW4gc29tZSBmb3JtIG9mXHJcbiAgICogdmFsaWRhdGlvbi5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIGNoZWNrX2lmX3Bvc2l0aXZlX2ludChpdGVtOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgLyoqIENoZWNrcyBpZiBhbiBpdGVtIGlzIGEgcG9zaXRpdmUgaW50ZWdlciAqL1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpdGVtICE9ICdudW1iZXInKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfSBlbHNlIGlmIChpdGVtID49IDAgJiYgaXRlbSA9PT0gTWF0aC5yb3VuZChpdGVtKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXQgdGhpcyBzdGFnZSwgdGhlIG9ubHkgYnJhbmNoIHN1Z2dlc3RzIHRoYXQgdGhlIG51bWJlciBpcyA8IDAuXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9