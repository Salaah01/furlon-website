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
else if (CURRENT_URL.includes("/order-history/")) {
    _components_ratings__WEBPACK_IMPORTED_MODULE_7__["Ratings"].getInstance();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3Bhc3N3b3JkLXZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9yYXRpbmdzLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzX3VzZXJfcmV2aWV3LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvc3RhdGUvYmFza2V0LWl0ZW1zLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvdXRpbGl0aWVzL251bWJlcl9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy91dGlsaXRp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O0FBQUE7SUFBQTtJQW1CQSxDQUFDO0lBWlEsZ0NBQXFCLEdBQTVCLFVBQTZCLElBQVM7UUFHbEMsSUFBSSxPQUFPLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDekIsT0FBTyxLQUFLO1NBQ2Y7YUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0MsT0FBTyxJQUFJO1NBQ2Q7UUFHRCxPQUFPLEtBQUs7SUFDaEIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImZ1cmxvbi9zdGF0aWMvanNcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9mdXJsb24vc3RhdGljL3RzL21haW4udHNcIik7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDI5LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIENhcm91c2VsIHN0eWxlZCBpbWFnZSBzbGlkZSBzaG93cy5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gT24gY2xpY2sgb2YgYSBpbWFnZSB0aHVtYm5haWxzIG9yIHRoZSBjdXJyZW50IGltYWdlLCB0aGUgY3VycmVudCBpbWFnZSBzaG91bGRcclxuLy8gY2hhbmdlIGFjY29yZGluZ2x5LlxyXG4vL1xyXG4vLyBBbmltYXRpb25zIGFyZSBoYW5kbGVkIHRocm91Z2ggdGhlIENTUywgdGhlIEpTIHNldHMgdXAgdGhlIGV2ZW50IGxpc3RlbmVycyB0b1xyXG4vLyBjaGFuZ2UgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGRpc3BsYXkgaW1hZ2VzIGFjY29yZGluZ2x5IHNvIGFzIHRvIGRpc3BsYXkgdGhlXHJcbi8vIHNlbGVjdGVkIGltYWdlLlxyXG4vL1xyXG4vLyBPbiBlYWNoIHRodW1ibmFpbCwgYXQgYW4gYXR0cmlidXRlIHdpbGwgd2lsbCBlcXVhbCB0byB0aGUgbnVtYmVyIHRvdGFsXHJcbi8vIHRodW1ibmFpbHMsIHRoaXMgd2lsbCBlbmFibGUgdGhlIENTUyB0byBhZGp1c3QgY2VydGFpbiBDU1MgYXR0cmlidXRlc1xyXG4vLyBhY2NvcmRpbmdseS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbEltZ3Mge1xyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBldmVudCBsaXN0ZW5lcnMgb24gdGhlIGNhcm91c2VsIGltYWdlIGltYWdlcyBzdWNoIHRoYXQgd2hlblxyXG4gICAqIGEgdGh1bWJuYWlsIG9yIHRoZSBtYWluIHBpY3R1cmUgaXMgY2xpY2tlZCBvbiwgdGhlIGltYWdlIHdpbGwgY2hhbmdlLlxyXG4gICAqIFRoZSBhbmltYXRpb24gYW5kIHBvc2l0aW9uaW5nIGlzIGNvbnRyb2xsZWQgdmlhIHRoZSBDU1MsIHRoZSBjbGFzcyB3aWxsXHJcbiAgICogYWRkIGFuZCByZW1vdmUgYXR0cmlidXRlcyBmcm9tIHRoZSBlbGVtZW50cywgc28gdGhhdCB0aGUgYW5pbWF0aW9ucyBjYW5cclxuICAgKiBiZSB0cmlnZ2VyZWQuXHJcbiAgICovXHJcbiAgY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbC1jb250YWluZXJfX21haW5cIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTG9jYXRlcyB0aGUgZWxlbWVudHMgd2hlcmUgYW4gZXZlbnQgbGlzdGVuZXJzIG5lZWQgdG8gYmUgYWRkZWQgYW5kXHJcbiAgICAgKiBjYWxscyBtZXRob2RzIHRvIGFkZCBldmVudCBsaXN0ZW5lcnMgZGVwZW5kaW5nIG9uIHdoYXQgdGhlIGVsZW1lbnRcclxuICAgICAqIGlzLlxyXG4gICAgICpcclxuICAgICAqIEZpbmFsbHksIHdpbGwgY2FsbCBhIG1ldGhvZCB0byB1cGRhdGUgdGhlIHRodW1ibmFpbHMgdG8gY29udGFpblxyXG4gICAgICogaW5mb3JtYXRpb24gb24gaG93IG1hbnkgdGh1bWJuYWlscyB0aGVyZSBhcmUuIFRoaXMgd2lsbCBlbmFibGUgdG9cclxuICAgICAqIGFkanVzdCBjZXJ0YWluIENTUyBhdHRyaWJ1dGVzIGFjY29yZGluZ2x5LlxyXG4gICAgICovXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICAvLyBET00gZWxlbWVudHMgZm9yIGV2ZW50IGxpc3RlbmVycyB0byBiZSBhZGRlZC5cclxuICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LXNlY3Rpb25cIlxyXG4gICAgICApW2NdO1xyXG4gICAgICBjb25zdCBkaXNwbGF5SW1hZ2VzID0gZGlzcGxheUNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LXNlY3Rpb25fX2ltZ1wiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBJZiB0aGVyZSBpcyBpZiBvbmx5IG9uZSBkaXNwbGF5SW1hZ2UsIHRoZW4gdGhpcyBzdWdnZXN0cyB0aGF0IG9ubHkgYVxyXG4gICAgICAvLyBzaG93Y2FzZSBpbWFnZSBleGlzdHMuXHJcbiAgICAgIGlmIChkaXNwbGF5SW1hZ2VzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBpbWdUaHVtYnNDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbY10uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzXCJcclxuICAgICAgICApWzBdO1xyXG4gICAgICAgIGNvbnN0IGltZ1RodW1icyA9IGltZ1RodW1ic0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktY29udHJvbHNfX2NvbnRyb2xcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vICBNZXRob2RzIHRvIGFkZCBldmVudCBsaXN0ZW5lcnMgb24gZWFjaCBET00gZWxlbWVudC5cclxuICAgICAgICB0aGlzLm9uX2NsaWNraW5nX3RodW1icyhkaXNwbGF5SW1hZ2VzLCBpbWdUaHVtYnMpO1xyXG4gICAgICAgIHRoaXMub25fY2xpY2tpbmdfZGlzcGxheV9pbWcoZGlzcGxheUltYWdlcyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gU2V0cyBhbiBhdHRyaWJ1dGUgb24gZWFjaCB0aHVtYm5haWwgdG8gdGhlIHRvdGFsIG51bWJlciBvZiB0aHVtYm5haWxzLlxyXG4gICAgICB0aGlzLnVwZGF0ZV90b3RhbF90aHVtYnMoXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzW2NdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1jb250cm9sc19fY29udHJvbFwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgb25fY2xpY2tpbmdfdGh1bWJzKFxyXG4gICAgZGlzcGxheUltYWdlczogSFRNTENvbGxlY3Rpb24sXHJcbiAgICBpbWdUaHVtYnM6IEhUTUxDb2xsZWN0aW9uXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIEVhY2ggaW1hZ2UgdGh1bWJuYWlsIGVsZW1lbnQgaGFzIGEgXCJmb3JcIiBhdHRyaWJ1dGUgd2hpY2ggaW5kaWNhdGVzXHJcbiAgICAgKiB3aGljaCBlbGVtZW50IG9uIHRoZSBkaXNwbGF5IHNlY3Rpb24gaXQgcmVwcmVzZW50cy4gVGhlIGRpc3BsYXkgaW1hZ2VcclxuICAgICAqIGVsZW1lbnQgaGFzIGFuIFwiaW1nXCIgYXR0cmlidXRlIHdpdGggdGhlIHNhbWUgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogT24gY2xpY2tpbmcgb24gYSBpbWFnZSB0aHVtYm5haWwsIHRoZSBkaXNwbGF5IGF0dHJpYnV0ZSdzIHBvc2l0aW9uXHJcbiAgICAgKiBhdHRyaWJ1dGUgd2lsbCBiZWNvbWUgXCJzaG93XCIgd2hlcmUgdGhlIHNhbWUgYXR0cmlidXRlIHZhbHVlIGZvciBhbGxcclxuICAgICAqIG90aGVyIGltYWdlcyB3aWxsIGJlY29tZSBcImhpZGVcIi5cclxuICAgICAqXHJcbiAgICAgKiBOT1RFOiB0aGUgaW5pdGlhbCBpbWFnZSB3aWxsIGhhdmUgcG9zaXRpb249XCJpbml0XCIgaW5pdGlhbGx5IHNvIGFzIHRvXHJcbiAgICAgKiBhdm9pZCBhbnkgYW5pbWF0aW9ucyBvbiBzdGFydC4gSWYgdGhpcyBpbWFnZSB0aHVtYm5haWwgaXMgY2xpY2tlZCwgZG9cclxuICAgICAqIG5vdGhpbmcuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IHRodW1iID0gMDsgdGh1bWIgPCBpbWdUaHVtYnMubGVuZ3RoOyB0aHVtYisrKSB7XHJcbiAgICAgIGltZ1RodW1ic1t0aHVtYl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250cm9sc0ZvciA9IGltZ1RodW1ic1t0aHVtYl0uZ2V0QXR0cmlidXRlKFwiZm9yXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbSA9IDA7IGltIDwgZGlzcGxheUltYWdlcy5sZW5ndGg7IGltKyspIHtcclxuICAgICAgICAgIGlmIChkaXNwbGF5SW1hZ2VzW2ltXS5nZXRBdHRyaWJ1dGUoXCJpbWdcIikgPT09IGNvbnRyb2xzRm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5SW1hZ2VzW2ltXS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKSAhPSBcImluaXRcIikge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJoaWRlXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBvbl9jbGlja2luZ19kaXNwbGF5X2ltZyhcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGxheSBpbWFnZSwgaGlkZSB0aGUgaW1hZ2UgYW5kIHNob3cgdGhlXHJcbiAgICAgKiBuZXh0LlxyXG4gICAgICogQW5pbWF0aW9uIGlzIGhhbmRsZWQgYnkgdGhlIGNzcy4gRm9yIGFuaW1hdGlvbiB0byB3b3JrLCBvbiBjbGljayxcclxuICAgICAqIFwiaGlkZVwiIGlzIHNldCB0byB0aGUgYXR0cmlidXRlIHBvc2l0aW9uIG9uIHRoZSBjdXJyZW50IGltYWdlLCBhbmQgb25cclxuICAgICAqIHRoZSBuZXh0IGltYWdlLCB0aGUgXCJzaG93XCIgaXMgc2V0IHRvIHRoZSBwb3NpdGlvbiBhdHRyaWJ1dGUuXHJcbiAgICAgKi9cclxuICAgIGRpc3BsYXlJbWFnZXM6IEhUTUxDb2xsZWN0aW9uXHJcbiAgKSB7XHJcbiAgICBmb3IgKGxldCBpbSA9IDA7IGltIDwgZGlzcGxheUltYWdlcy5sZW5ndGg7IGltKyspIHtcclxuICAgICAgZGlzcGxheUltYWdlc1tpbV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcImhpZGVcIik7XHJcblxyXG4gICAgICAgIGlmIChpbSA9PT0gZGlzcGxheUltYWdlcy5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICBkaXNwbGF5SW1hZ2VzWzBdLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwic2hvd1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlzcGxheUltYWdlc1tpbSArIDFdLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgdXBkYXRlX3RvdGFsX3RodW1icyh0aHVtYnM6IEhUTUxDb2xsZWN0aW9uKSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgYW4gYXR0cmlidXRlIG9uIGVhY2ggdGh1bWJuYWlsIHdoaWNoIGlzIHRoZSB0b3RhbCBudW1iZXIgb2ZcclxuICAgICAqIHRodW1ibmFpbHMgdGhlcmUgYXJlLiBUaGlzIHdpbGwgYWxsb3cgdGhlIENTUyB0byB1cGRhdGUgc3R5bGluZyBiYXNlZFxyXG4gICAgICogb24gdGhlIG51bWJlciBvZiB0aHVtYm5haWxzLlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0b3RhbCA9IHRodW1icy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHRvdGFsOyB0KyspIHtcclxuICAgICAgdGh1bWJzW3RdLnNldEF0dHJpYnV0ZShcInRvdGFsdGh1bWJzXCIsIHRvdGFsLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHMgdGhlIHNhbWUgb24gb3RoZXIgZWxlbWVudHMgd2hlcmUgdGhpcyB3b3VsZCBiZSBuZWVkZWQuXHJcbiAgICB0aHVtYnNbMF0ucGFyZW50RWxlbWVudCEuc2V0QXR0cmlidXRlKFwidG90YWx0aHVtYnNcIiwgdG90YWwudG9TdHJpbmcoKSk7XHJcbiAgICB0aHVtYnNbMF0ucGFyZW50RWxlbWVudCEucHJldmlvdXNFbGVtZW50U2libGluZyEuc2V0QXR0cmlidXRlKFxyXG4gICAgICBcInRvdGFsdGh1bWJzXCIsXHJcbiAgICAgIHRvdGFsLnRvU3RyaW5nKClcclxuICAgICk7XHJcbiAgICB0aHVtYnNbMF0ucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEuc2V0QXR0cmlidXRlKFxyXG4gICAgICBcInRvdGFsdGh1bWJzXCIsXHJcbiAgICAgIHRvdGFsLnRvU3RyaW5nKClcclxuICAgICk7XHJcbiAgICB0aHVtYnNbMF0ucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEuc2V0QXR0cmlidXRlKFxyXG4gICAgICBcInRvdGFsdGh1bWJzXCIsXHJcbiAgICAgIHRvdGFsLnRvU3RyaW5nKClcclxuICAgICk7XHJcbiAgICB0aHVtYnNbMF0ucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEuc2V0QXR0cmlidXRlKFxyXG4gICAgICBcInRvdGFsdGh1bWJzXCIsXHJcbiAgICAgIHRvdGFsLnRvU3RyaW5nKClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gQ3VzdG9tIGRyb3Bkb3duIG1lbnVcclxuLy9cclxuLy8gUkVMQVRFRCBGSUxFUzpcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gX2Ryb3Bkb3duLW1lbnUuc2Nzc1xyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBQcm92aWRlcyBmdW5jdGlvbnMgZm9yIGEgY3VzdG9tIGRyb3Bkb3duIG1lbnUuXHJcbi8vIFRoZSBmdW5jdGlvbnMgd2lsbCB3b3JrIGZvciBkcm9wZG93biBtZW51cyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcclxuLy9cclxuLy8gPGZvcm0+XHJcbi8vICAgLi4uXHJcbi8vICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiPlxyXG4vLyAgICAgICA8c3Bhbj5Db2xvdXI8L3NwYW4+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zXCI+XHJcbi8vICAgICAgIDxsYWJlbCBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCIgZm9yPVwiY29sb3VyLXJlZFwiPlxyXG4vLyAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiXHJcbi8vICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuLy8gICAgICAgICBuYW1lPVwiZi1jb2xvdXJcIlxyXG4vLyAgICAgICAgIGlkPWNvbG91ci1yZWRcclxuLy8gICAgICAgICB2YWx1ZT1cInJlZFwiXHJcbi8vICAgICAgID5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIDwvZGl2PlxyXG4vLyAgIC4uLlxyXG4vLyA8L2Zvcm0+XHJcblxyXG4vLyBDU1Mgc2hvdWxkIGJlIHNldCB1cCB0byBoaWRlIHRoZSBpbnB1dCB0YWdzIGFuZCByZWx5IG9uIHRoZSBsYWJlbHMgdG8gc2VsZWN0XHJcbi8vIHRoZSByYWRpbyBidXR0b24uXHJcbi8vXHJcbi8vIEZVTkNUSU9OUzpcclxuLy8gLS0tLS0tLS0tLVxyXG4vLyAgLSBXaGVuIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBtZW51LCBleHBhbmQgdGhlIGxpc3Qgb2Ygb3B0aW9ucy5cclxuLy8gIC0gV2hlbiB1c2VyIHByZXNzZXMgYW4gb3B0aW9uLCBoaWdobGlnaHQgdGhhdCBvcHRpb24sIHVwZGF0ZSB0aGVcclxuLy8gICAgYnV0dG9uJ3MgaW5uZXIgdGV4dCB0byBtYXRjaCB0aGF0IG9mZiB0aGUgYnV0dG9uIHRleHQuXHJcbi8vICAtIFdoZW4gdXNlciBjbGlja3Mgb3V0c2lkZSwgY2xvc2UgYWxsIG1lbnVzLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRHJvcGRvd25NZW51IENsYXNzXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnUge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBjdXN0b20gZHJvcGRvd24gbWVudXMuXHJcbiAgICogVGhlc2UgaW5jbHVkZTpcclxuICAgKiAgLSBUb2dnbGUgb3Blbi9jbG9zZSBvZiB0aGUgbWVudSBvbiBjbGlja2luZyB0aGUgYnV0dG9uXHJcbiAgICogIC0gQ2xvc2UgdGhlIG1lbnUgb24gY2xpY2tpbmcgb3V0c2lkZVxyXG4gICAqICAtIE9uIHNlbGVjdGluZyBhbiBpdGVtOlxyXG4gICAqICAgIC0gSGlnaGxpZ2h0IHRoYXQgaXRlbVxyXG4gICAqICAgIC0gQ2hhbmdlIHRoZSB0ZXh0IG9mIHRoZSBidXR0b24gdGhlIHRleHQgb2YgdGhlIG9wdGlvbiBzZWxlY3RlZFxyXG4gICAqXHJcbiAgICogTm90ZTogdGhpcyBjbGFzcyB3aWxsIG5vdCBoYW5kbGUgQVBJIGNhbGxzLlxyXG4gICAqL1xyXG5cclxuICBkZE1lbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgIFwiZHJvcGRvd24tbWVudVwiXHJcbiAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQWRkcyBmdW5jdGlvbiB0byBjbG9zZSBhbGwgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGVsZW1lbnRcclxuICAgIHRoaXMuY2xvc2VfbWVudSgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSBmdW5jdGlvbnMgZm9yIGFsbCBtZW51IGVsZW1lbnRzLlxyXG4gICAgZm9yIChsZXQgbWVudUlkID0gMDsgbWVudUlkIDwgdGhpcy5kZE1lbnVzLmxlbmd0aDsgbWVudUlkKyspIHtcclxuICAgICAgdGhpcy5idWlsZF9tZW51KHRoaXMuZGRNZW51c1ttZW51SWRdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsb3NlX21lbnUoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyBhbGwgbWVudXMgd2hlbiBjbGlja2VkIG91dHNpZGUgb24gYW5vdGhlciBmaWx0ZXIgYnV0dG9uLlxyXG4gICAgICogQWxzbyBjYXJyaWVzIGZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBuYXYtbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiXHJcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgb3B0aW9uTGlzdHMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgIG9wdGlvbkxpc3RzW2lkeF0uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5hdlN1Yk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIlxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyQnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEJ0biA9IGZpbHRlckJ0bnNbaV07XHJcblxyXG4gICAgICBzZWxlY3RlZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIENsb3NlIG5hdiBtZW51c1xyXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG5hdlN1Yk1lbnVzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgIG5hdlN1Yk1lbnVzW2lkeF0uY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG9zZSBhbGwgb3RoZXIgZmlsdGVycyBsaXN0c1xyXG4gICAgICAgIC8vIEVhY2ggYnV0dG9uIGFuZCB0aGVpciBjaGlsZCBlbGVtZW50cyBjb250YWluIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBcImZpbHRlci1mb3JcIi5cclxuICAgICAgICAvLyBMaWtld2lzZSwgZWFjaCBkcm9wZG93biBvcHRpb24gZGl2IGNvbnRhaW4gdGhlIHNhbWUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gVGhpcyBjaGVja3MgZm9yIHRoZSBidXR0b24gcHJlc3NlZCwgaWYgaXRzIFwiZmlsdGVyLWZvclwiIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIG1hdGNoZXMgdGhhdCBvZiBpdHMgZHJvcGRvd24gb3B0aW9ucy4gaWYgbm90LCB0aGVuIGNsb3NlLlxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZmlsdGVyQnRucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IGZpbHRlckJ0bnNbal07XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikgIT1cclxuICAgICAgICAgICAgc2VsZWN0ZWRCdG4uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIEp1c3QgaW5jYXNlIHRoZSBzdHJ1Y3R1cmUgY2hhbmdlcywgYW5kIHRoZSBuZXh0IHNpYmxpbmcgaW5zIG5vdCB0aGUgb3B0aW9ucyBsaXN0XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZyEuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGJ1aWxkX21lbnUoZGRNZW51OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIGVhY2ggZHJvcGRvd24gbWVudS5cclxuICAgICAqL1xyXG4gICAgY29uc3Qgb3B0aW9uc0J0biA9IGRkTWVudS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCJcclxuICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcHRpb25zTGlzdENvbnRhaW5lciA9IGRkTWVudS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0SXRlbXMgPSBvcHRpb25zTGlzdENvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MTGFiZWxFbGVtZW50PjtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBvbiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoaWNoIHdpbGwgb3Blbi9jbG9zZSB0aGUgb3B0aW9uc1xyXG4gICAgLy8gbGlzdC5cclxuICAgIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIG9wdGlvbnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgc2V0dXAgZm9yIGVhY2ggb3B0aW9uXHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgb3B0aW9uSXRlciA9IDA7XHJcbiAgICAgIG9wdGlvbkl0ZXIgPCBvcHRpb25zTGlzdEl0ZW1zLmxlbmd0aDtcclxuICAgICAgb3B0aW9uSXRlcisrXHJcbiAgICApIHtcclxuICAgICAgbGV0IGxpc3RJdGVtID0gb3B0aW9uc0xpc3RJdGVtc1tvcHRpb25JdGVyXTtcclxuICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGhpZ2hsaWdodCBmcm9tIGFsbCBsaXN0IGl0ZW1zIGFuZCByZWFwcGx5IHRvIHRoZSBzZWxlY3RlZFxyXG4gICAgICAgIC8vIGxpc3QgaXRlbSBvbmx5XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBvcHRpb25TdWJJdGVyID0gMDtcclxuICAgICAgICAgIG9wdGlvblN1Ykl0ZXIgPCBvcHRpb25zTGlzdEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgIG9wdGlvblN1Ykl0ZXIrK1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgb3B0aW9uc0xpc3RJdGVtc1tvcHRpb25TdWJJdGVyXS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsLS1zZWxlY3RlZFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWwtLXNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHRleHQgb2YgdGhlIGJ1dHRvbiB0byB0aGUgdGV4dCBvZiB0aGUgc2VsZWN0ZWQgaXRlbVxyXG4gICAgICAgIG9wdGlvbnNCdG4uaW5uZXJUZXh0ID0gbGlzdEl0ZW0uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGhpZGRlbiBpbnB1dCB2YWx1ZXNcclxuICAgICAgICAvLyBDbG9zZSB0aGUgbWVudVxyXG4gICAgICAgIG9wdGlvbnNMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDAxLzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBOYXZpZ2F0aW9uIGJhci5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyAxLiBDb250cm9scyB0aGUgc3RhdGUgb2YgdGhlIG5hdmlnYXRpb24gc3ViLW1lbnVzIGFuZCBjb250cm9scyBob3cgYW5kIHdoZW5cclxuLy8gICAgaXQgZXhwYW5kcyBhbmQgY2xvc2VzLlxyXG4vLyAyLiBDb250cm9scyB0aGUgc3RhdGUgb2YgdGhlIGJhc2tldCBhbmQgc28gc28gdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGVcclxuLy8gICAgYmFza2V0LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIHtcclxuICAvKipcclxuICAgKiBTZXRzIHVwIHRoZSBmdW5jdGlvbnMgZm9yIHRoZSBuYXZpZ2F0aW9uLlxyXG4gICAqIFRoZXNlIGluY2x1ZGU6XHJcbiAgICogIC0gQ2xvc2luZyBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUuXHJcbiAgICogIC0gT3BlbmluZy9DbG9zaW5nIG1lbnVzIG9uIGNsaWNrXHJcbiAgICovXHJcbiAgbWVudUJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2X19vcHRpb25fX2J0blwiKTtcclxuICBuYXZTdWJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIik7XHJcbiAgdG9nZ2xlU2hvd05hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X190b2dnbGVfX2J0blwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQWRkcyBmdW5jdGlvbiB0byBjbG9zZSBhbGwgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGVsZW1lbnRcclxuICAgIHRoaXMuY2xvc2VfbWVudSgpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSBmdW5jdGlvbnMgZm9yIGFsbCBtZW51IGVsZW1lbnRzLlxyXG4gICAgZm9yIChjb25zdCBtZW51QnRuIG9mIHRoaXMubWVudUJ0bnMgYXMgYW55KSB7XHJcbiAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3ViTWVudUN0cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSByZXNwb25zaXZlIGZ1bmN0aW9ucyBmb3IgdGhlIHRvZ2dsZSBidXR0b25zLlxyXG4gICAgdGhpcy5uYXZfdG9nZ2xlX2J0bigpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xvc2VfbWVudSgpIHtcclxuICAgIC8qKlxyXG4gICAgICogY2xvc2VzIGFsbCBtZW51cyB3aGVuIGNsaWNrZWQgb3V0c2lkZSBwciBhbm90aGVyIG5hdiBtZW51LlxyXG4gICAgICogQWxzbyB3aWxsIGNsb3NlIGFsbCBmaWx0ZXIgbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBDbG9zZSBhbGwgbmF2LW1lbnVzIG9uIGNsaWNrIG91dHNpZGVcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHRoaXMubmF2U3ViTWVudXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgIHRoaXMubmF2U3ViTWVudXNbaWR4XS5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZW51QnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBtZW51QnRuID0gdGhpcy5tZW51QnRuc1tpXTtcclxuXHJcbiAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBDbG9zZSBhbGwgZHJvcGRvd24tbWVudXNcclxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbkxpc3Qgb2Ygb3B0aW9uTGlzdHMgYXMgYW55KSB7XHJcbiAgICAgICAgICBvcHRpb25MaXN0LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xvc2Ugb3RoZXIgbmF2aWdhdGlvbiBtZW51c1xyXG4gICAgICAgIC8vIEVhY2ggYnV0dG9uIGFuZCB0aGVpciBjaGlsZCBlbGVtZW50cyB3aWxsIGNvbnRhaW4gdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFwiZmlsdGVyLWZvclwiLlxyXG4gICAgICAgIC8vIExpa2V3aXNlLCBlYWNoIGRyb3Bkb3duIG1lbnUgY29udGFpbiB0aGUgc2FtZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBUaGlzIGNoZWNrcyBmb3IgdGhlIGJ1dHRvbiBwcmVzc2VkLCBpZiBpdHMgXCJmaWx0ZXItZm9yXCIgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gbWF0Y2hlcyB0aGF0IG9mIGl0cyBkcm9wZG93biBvcHRpb25zLiBpZiBub3QsIHRoZW4gY2xvc2UuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1lbnVCdG5zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gdGhpcy5tZW51QnRuc1tqXTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW0uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKSAhPVxyXG4gICAgICAgICAgICBtZW51QnRuLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmc/LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHNcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3ViTWVudUN0cmwoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2lsbCBoYW5kbGUgY2xpY2sgZXZlbnRzIG9uIHRoZSBuYXZpZ2F0aW9uIGZvciBleHBhbmRpbmdcclxuICAgICAqIGFuZCBjb2xsYXBzaW5nIHRoZSBzdWItbWVudXMuXHJcbiAgICAgKi9cclxuXHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50c1xyXG4gICAgdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHRhcmdldENsYXNzZXMgPSB0YXJnZXQuY2xhc3NMaXN0O1xyXG4gICAgbGV0IHN1Yk1lbnU6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGlmICh0YXJnZXRDbGFzc2VzLmNvbnRhaW5zKFwibmF2LXN1Yi1wcm9kdWN0c1wiKSkge1xyXG4gICAgICBzdWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy5uYXYtc3ViLXByb2R1Y3RzXCJcclxuICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0Q2xhc3Nlcy5jb250YWlucyhcIm5hdi1zdWItcm9vbXNcIikpIHtcclxuICAgICAgc3ViTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMubmF2LXN1Yi1yb29tc1wiXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBcIk5hdmlnYXRpb24gZWxlbWVudCBkb2VzIG5vdCBleGlzdC5cIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXhwYW5kZWQgPSBzdWJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIlxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZXhwYW5kZWQpIHtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCIpO1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIik7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgbmF2X3RvZ2dsZV9idG4oKSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIG5hdmlnYXRpb24gdG9nZ2xlIGJ1dHRvbiAtIGEgcmVzcG9uc2l2ZVxyXG4gICAgICogZmVhdHVyZSB2aWV3YWJsZSB3aGVuIHRoZSBzY3JlZW4gd2lkdGggaXMgc21hbGwgZW5vdWdoLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3QgPSBbXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZfX29wdGlvblwiKSxcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X19hY2NvdW50LWJhc2tldCcpXHJcbiAgICBdO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlU2hvd05hdkJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9uc0xpc3RbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIG9wdGlvbnNMaXN0W2ldW2pdLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtb3B0aW9uLS1zaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjYvMDEvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gUGFnaW5hdGlvbiBPYmplY3RcclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gQnVpbGRzIHRoZSBsaW5rIChocmVmKSBvbiBlYWNoIHBhZ2luYXRpb24gYnV0dG9uLiBUaGlzIGlzIGFjaGlldmVkIGJ5XHJcbi8vIHVzaW5nIHRoZSBjdXJyZW50IHVybCB0byBidWlsZCBtb3N0IHBhcnQgb2YgdGhlIGhyZWYgYW5kIGFwcGVuZGluZyB0byBpdFxyXG4vLyB0aGUgcGFnZSBxdWVyeS5cclxuLy9cclxuLy8gRWFjaCBlbGVtZW50IHdpbGwgY29udGFpbiBhIFwicGFnZVwiIGF0dHJpYnV0ZSB3aGljaCB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZVxyXG4vLyBwYWdlIHBhcnQgb2YgdGhlIGhyZWYuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbiB7XHJcbiAgLyoqIEJ1aWxkcyB0aGUgcGFnaW5hdGlvbiBsaW5rIChocmVmKS4gKi9cclxuICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKiBCdWlsZHMgdGhlIGxpbmtzIG9udG8gdGhlIHBhZ2luYXRpb24gbGlua3MgaWYgI3BhZ2luYXRpb24gZXhpc3RzLiAqL1xyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRfbGlua3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX2xpbmtzKCkge1xyXG4gICAgLyoqIEJ1aWxkcyBsaW5rcyBvbnRvIHRoZSBwYWdpbmF0aW9uIGxpbmsgZWxlbWVudHMuICovXHJcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuY29udGFpbmVyIS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFnaW5hdGlvbl9fbGlua1wiKTtcclxuICAgIGNvbnN0IGJhc2VIcmVmID1cclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvJigoLio/JiQpfChwYWdlPVswLTldezEsfSl8KHBhZ2U9KSkvZywgXCJcIikgK1xyXG4gICAgICBcIiZwYWdlPVwiO1xyXG5cclxuICAgIGZvciAobGV0IGwgPSAwOyBsIDwgbGlua3MubGVuZ3RoOyBsKyspIHtcclxuICAgICAgaWYgKGxpbmtzW2xdLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGxpbmtzW2xdLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYmFzZUhyZWYgKyBsaW5rc1tsXS5nZXRBdHRyaWJ1dGUoXCJwYWdlXCIpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDEyLzAxLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFJlZ2lzdHJhdGlvbiBwYWdlcy5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gV2hlbiBwYXNzd29yZHMgZG8gbm90IG1hdGNoLCB1cGRhdGUgdGhlIGF0dHJpYnV0ZSBvZiB0aGUgcGFzc3dvcmQgZWxlbWVudHNcclxuLy8gdG8gYGludmFsaWQ9XCJ0cnVlXCIuIFRoaXMgd2lsbCBhbGxvdyB0aGUgdGhlIENTUyB0byBjaGFuZ2UgdGhlIGJvcmRlclxyXG4vLyBvZiB0aGUgcGFzc3dvcmQgZWxlbWVudHMgdG8gcmVkIGFuZCBzaG93IGFuIGVycm9yIG1lc3NhZ2UgZm9yIGEgZmV3IHNlY29uZHMuXHJcbi8vXHJcbi8vIElmIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gsIHRoZW4gYWRkIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgdG8gdGhlIHN1Ym1pdFxyXG4vLyBidXR0b24uXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGVjayB7XHJcbiAgLyoqIENoZWNrcyBpZiBwYXNzd29yZHMgbWF0Y2gsIGlmIHRoZXkgZG8gbm90LCB0aGVuIHVwZGF0ZSB0aGUgYXR0cmlidXRlXHJcbiAgICogb2YgdGhlIHBhc3N3b3JkIGVsZW1lbnRzIHdoaWNoIHdpbGwgaW4gdHVybiB1cGRhdGUgc2libGluZ3MgdG8gdGFrZSBvblxyXG4gICAqIHNvbWUgQ1NTIHN0eWxpbmcgKGNvbnRyb2xsZWQgdGhyb3VnaCBDU1MpLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcGFzc3dvcmRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnQtcGFzc3dvcmRcIlxyXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGNvbmZpcm1QYXNzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY2NvdW50LXBhc3N3b3JkLWNvbmZpcm1cIlxyXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY2NvdW50LXN1Ym1pdFwiXHJcbiAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGVycm9yTXNnRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY2NvdW50LWVycm9yc1wiXHJcbiAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIENvbnN0cnVjdG9yICovXHJcbiAgICB0aGlzLnNldF9rZXliaW5kZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGNoZWNrX3Bhc3N3b3JkcygpIHtcclxuICAgIC8qKiBDaGVja3MgaWYgdGhlIHBhc3N3b3JkcyBtYXRjaCwgYW5kIGlmIHNvLCBjaGVjayB0aGVpciBjb21wbGV4aXR5LiAqL1xyXG4gICAgY29uc3QgcGFzc3dvcmRUeHQgPSB0aGlzLnBhc3N3b3JkRWxlbT8udmFsdWU7XHJcbiAgICBjb25zdCBjb25maXJtUGFzc1R4dCA9IHRoaXMuY29uZmlybVBhc3NFbGVtPy52YWx1ZTtcclxuXHJcbiAgICBpZiAocGFzc3dvcmRUeHQgJiYgY29uZmlybVBhc3NUeHQpIHtcclxuICAgICAgaWYgKHBhc3N3b3JkVHh0ID09PSBjb25maXJtUGFzc1R4dCkge1xyXG4gICAgICAgIC8vIENoZWNrIGNvbXBsZXhpdHk6XHJcbiAgICAgICAgLy8gTGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgNiBhbmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgaW50ZWdlci5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBwYXNzd29yZFR4dC5sZW5ndGggPj0gNiAmJlxyXG4gICAgICAgICAgcGFzc3dvcmRUeHQubWF0Y2goL1swLTldLykgJiZcclxuICAgICAgICAgIHBhc3N3b3JkVHh0Lm1hdGNoKC9bQS16XS8pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1zZ0VsZW0udGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcgYW5kIGNvbnRhaW4gYXQgbGVhc3QgMSBudW1iZXIuXCI7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNc2dFbGVtLnRleHRDb250ZW50ID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHNldF9rZXliaW5kZXJzKCkge1xyXG4gICAgdGhpcy5jb25maXJtUGFzc0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVfZWxlbWVudF9hdHRycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV9lbGVtZW50X2F0dHJzKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBpbnB1dCBhbmQgYnV0dG9uIGVsZW1lbnRzIHRvIGFjY29yZGFuY2VcclxuICAgICAqIHdoZXRoZXIgb3Igbm90IHRoZSBwYXNzd29yZHMgbWF0Y2guXHJcbiAgICAgKi9cclxuICAgIGlmICh0aGlzLmNoZWNrX3Bhc3N3b3JkcygpKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRFbGVtLnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XHJcbiAgICAgIHRoaXMuY29uZmlybVBhc3NFbGVtLnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XHJcbiAgICAgIHRoaXMuc3VibWl0QnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYXNzd29yZEVsZW0uc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcInRydWVcIik7XHJcbiAgICAgIHRoaXMuY29uZmlybVBhc3NFbGVtLnNldEF0dHJpYnV0ZShcImludmFsaWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICB0aGlzLnN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDE2LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVSUE9TRVxyXG4vLyAtLS0tLS0tXHJcbi8vIEVuYWJsZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHF1YW50aXR5IGNvbXBvbmVudCwgdGh1cyBlbmFibGluZyArLy1cclxuLy8gYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW4gdGhlIGlucHV0IGJveC5cclxuLy9cclxuLy8gUkVMQVRFRCBGSUxFU1xyXG4vLyAtLS0tLS0tLS0tLS0tXHJcbi8vIF9xdWFudGl0eS5zY3NzXHJcbi8vXHJcbi8vIEhUTUwgRk9STUFUXHJcbi8vIC0tLS0tLS0tLS0tXHJcbi8vIDxkaXYgY2xhc3M9XCJjLXF1YW50aXR5XCI+XHJcbi8vICAgPGJ1dHRvbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0blwiIGNvbnRyb2w9XCJxdWFudGl0eS1kb3duXCI+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiPiYjNDU7PC9zcGFuPlxyXG4vLyAgIDwvYnV0dG9uPlxyXG4vLyAgIDxpbnB1dCBjbGFzcz1cImMtcXVhbnRpdHlfX2lucHV0XCIgdHlwZT1cIm51bWJlclwiLz5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LXVwXCI+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiPiYjNDU7PC9zcGFuPlxyXG4vLyAgIDwvYnV0dG9uPlxyXG4vLyA8L2Rpdj5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIEltcG9ydHNcclxuaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFF1YW50aXR5Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIHRoZSBxdWFudGl0eSBjb21wb25lbnQgdGh1cyBlbmFibGluZyB0aGUgKy8tXHJcbiAgICogYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW5zaWRlIHRoZSBpbnB1dCBib3guXHJcbiAgICovXHJcblxyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJjLXF1YW50aXR5XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5fc2V0X2VsZW1lbnRzKHRoaXMuY29udGFpbmVyc1tjXSk7XHJcbiAgICAgIGNvbnN0IGJ0bkRvd24gPSBlbGVtZW50c1swXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgY29uc3QgYnRuVXAgPSBlbGVtZW50c1sxXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgY29uc3QgaW5wdXRCb3ggPSBlbGVtZW50c1syXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBOdW1iZXIoaW5wdXRCb3guZ2V0QXR0cmlidXRlKFwibWluXCIpKTtcclxuICAgICAgY29uc3QgbWF4VmFsdWUgPSBOdW1iZXIoaW5wdXRCb3guZ2V0QXR0cmlidXRlKFwibWF4XCIpKTtcclxuXHJcbiAgICAgIHRoaXMuX2J1aWxkX21pbnVzX2J1dHRvbihidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX3BsdXNfYnV0dG9uKGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgICAgdGhpcy5fYnVpbGRfaW5wdXRfYm94KGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3NldF9lbGVtZW50cyhjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgY29udGFpbmVyLCB3aWxsIHJldHVybiB0aGUgYnV0dG9ucyBhbmQgaW5wdXQgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGJ0bkRvd24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvbltjb250cm9sPVwicXVhbnRpdHktZG93blwiXSdcclxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBidG5VcCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS11cFwiXSdcclxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dEJveCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcImlucHV0LmMtcXVhbnRpdHlfX2lucHV0XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gW2J0bkRvd24sIGJ0blVwLCBpbnB1dEJveF07XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF9taW51c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIG1pbnVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCByZWR1Y2VcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtaW5pbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIHBsdXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBsZXNzIHRoYW4gdGhlIG1heFZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoYnRuRG93bi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpIC0gMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpIDwgbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPT09IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX3BsdXNfYnV0dG9uKFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uIGNsaWNraW5nIHRoZSBwbHVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCBpbmNyZWFzZWRcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtYXhpbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIG1pbnVzXHJcbiAgICAgKiBidXR0b24gaWYgaXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBtaW5WYWx1ZS5cclxuICAgICAqL1xyXG5cclxuICAgIGJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChidG5VcC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpICsgMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpID4gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA9PT0gbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX2lucHV0X2JveChcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmNlIGEgbmV3IHZhbHVlIGhhcyBiZWVuIGVudGVyZWQgaW50byB0aGUgaW5wdXQgYm94LFxyXG4gICAgICogZGlzYWJsZS9yZS1lbmFibGUgdGhlIHBsdXMgYW5kIG1pbnVzIGJ1dHRvbnMgaW4gYWNjb3JkYW5jZSB3aXRoIHdoZXRoZXJcclxuICAgICAqIHRoZSB2YWx1ZSBpcyBlcXVhbCB0byB0aGUgbWluL21heCB2YWx1ZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGlucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0Qm94LnZhbHVlKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC4gSWYgbm90LCB1cGRhdGUgYXR0cmlidXRlcyB0aGUgaGlnaGxpZ2h0XHJcbiAgICAgIC8vIHRoaXMgdG8gdGhlIHVzZXIgYW5kIGRpc2FibGUgYnV0dG9ucy5cclxuICAgICAgaWYgKFZhbGlkYXRpb24uY2hlY2tfaWZfcG9zaXRpdmVfaW50KHZhbHVlKSkge1xyXG4gICAgICAgIC8vIEluY2FzZSB0aGUgYnV0dG9ucyB3ZXJlIHByZXZpb3VzbHkgZGlzYWJsZWQsIHJlc2V0IGJ5IHJlLWVuYWJsaW5nXHJcbiAgICAgICAgLy8gZXZlcnl0aGluZy5cclxuICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGlucHV0Qm94LnBhcmVudEVsZW1lbnQhLnJlbW92ZUF0dHJpYnV0ZSgnaW52YWxpZCcpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSBtaW4gdmFsdWVcclxuICAgICAgICBpZiAodmFsdWUgPD0gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnRuRG93bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgYnRuVXAncyBtYXggdmFsdWVcclxuICAgICAgICBpZiAodmFsdWUgPj0gbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdmFsdWUgaXMgZWl0aGVyIDwgMCBvciBhIGZsb2F0LlxyXG4gICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGlucHV0Qm94LnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZSgnaW52YWxpZCcsICd0cnVlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDAyLzAyLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gLS0tLS1cclxuLy8gT24gaXRlbXMgd2l0aCB0aGUgcmF0aW5nc19fc3RhcnMgY2xhc3MuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gLS0tLS0tLVxyXG4vLyBGb3IgY29udGFpbmVycyB3aGVyZSB0aGUgc2VsZWN0YWJsZSBhdHRyaWJ1dGUgaXMgc2V0IHRvIHRydWUsIGtleWJpbmRlcnNcclxuLy8gd2lsbCBiZSBhdHRhY2hlZCBzdWNoIHRoYXQgaWYgYSBwYXJ0aWN1bGFyIHN0YXIgaXMgaG92ZXJlZCBvdmVyLCB0aGF0IHN0YXJcclxuLy8gYW5kIGFsbCBwcmVjZWRpbmcgc3RhcnRzIHdpbGwgaGlnaGxpZ2h0LlxyXG4vLyBPbiBjbGljayBvZiB0aGF0IHN0YXIsIHRoYXQgc3RhcnQgd2lsbCBiZSBjb21lIHNlbGVjdGVkIGFuZCBzbyB0aGUgY2xhc3Nlc1xyXG4vLyB3aWxsIHVwZGF0ZSBhY2NvcmRpbmdseS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdzIHtcclxuICBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhdGluZ19fc3RhcnNbc2VsZWN0YWJsZT1cInRydWVcIl0nKTtcclxuICBzZWxlY3RlZENsYXNzID0gXCJpLXN0YXItLWNoZWNrZWRcIjtcclxuICB1c2VyUmF0aW5nID0gMDtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFJhdGluZ3M7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXJzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnVzZXJSYXRpbmcgPSBOdW1iZXIoXHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3Byb2R1Y3QtcmV2aWV3cy11c2VyLXJhdGluZ1wiKSFcclxuICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJ1c2VyUmF0aW5nXCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICAgIGNvbnN0IHN0YXJzOiBIVE1MRWxlbWVudFtdID0gW1xyXG4gICAgICAgICAgdGhpcy5jb250YWluZXJzW2NdLnF1ZXJ5U2VsZWN0b3IoJy5pLXN0YXJbdmFsdWU9XCIxXCJdJykgYXMgSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10ucXVlcnlTZWxlY3RvcignLmktc3Rhclt2YWx1ZT1cIjJcIl0nKSBhcyBIVE1MRWxlbWVudCxcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyc1tjXS5xdWVyeVNlbGVjdG9yKCcuaS1zdGFyW3ZhbHVlPVwiM1wiXScpIGFzIEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgdGhpcy5jb250YWluZXJzW2NdLnF1ZXJ5U2VsZWN0b3IoJy5pLXN0YXJbdmFsdWU9XCI0XCJdJykgYXMgSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10ucXVlcnlTZWxlY3RvcignLmktc3Rhclt2YWx1ZT1cIjVcIl0nKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBzZWxlY3Rpb25cclxuICAgICAgICB0aGlzLnVwZGF0ZV9zZWxlY3Rpb24oc3RhcnMpO1xyXG5cclxuICAgICAgICAvLyBBZGRzIGtleWJpbmRlcnMgb250byB0aGUgdGhlIHN0YXJzIGZvciBtb3VzZW92ZXIsIG1vdXNlb3V0IGFuZCBjbGljay5cclxuICAgICAgICB0aGlzLmJ1aWxkX3N0YXJfZnVuY3Rpb25zKHN0YXJzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IFJhdGluZ3Mge1xyXG4gICAgaWYgKCFSYXRpbmdzLmluc3RhbmNlKSB7XHJcbiAgICAgIFJhdGluZ3MuaW5zdGFuY2UgPSBuZXcgUmF0aW5ncygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJhdGluZ3MuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV9zZWxlY3Rpb24oc3RhcnM6IEhUTUxFbGVtZW50W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc2VsZWN0ZWQgY2xhc3MgdG8gdGhlIHN0YXJzIGluIGFjY29yZGFuY2UgdG8gd2hhdCB0aGVcclxuICAgICAqIHVzZXIncyBjdXJyZW50IHJhdGluZyBpcy5cclxuICAgICAqIFdpbGwgYWxzbyB1cGRhdGUgYSBoaWRkZW4gaW5wdXQgaWYgaXQgZXhpc3RzIHdpdGggdGhlIHVzZXIncyByYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIC8vIFJlc2V0XHJcbiAgICB0aGlzLnJlbW92ZV9hbGxfc3RhcnMoc3RhcnMpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJSYXRpbmcgPSB0aGlzLnVzZXJfcmF0aW5nO1xyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID49IDEpIHtcclxuICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID49IDIpIHtcclxuICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID49IDMpIHtcclxuICAgICAgc3RhcnNbMl0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID49IDQpIHtcclxuICAgICAgc3RhcnNbM10uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID09IDUpIHtcclxuICAgICAgc3RhcnNbNF0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0IGlmIGl0IGV4aXN0cy5cclxuICAgIGNvbnN0IGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwidXNlci1yZXZpZXctcmF0aW5nXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBpZiAoaGlkZGVuSW5wdXQpIHtcclxuICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSB1c2VyUmF0aW5nLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHJlbW92ZV9hbGxfc3RhcnMoc3RhcnM6IEhUTUxFbGVtZW50W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGNsYXNzIGxpc3Qgb2YgYWxsIHRoZSBzdGFycyBzbyB0aGF0IG5vbmUgb2YgdGhlXHJcbiAgICAgKiBzdGFycyBhcmUgc2VsZWN0ZWQuXHJcbiAgICAgKi9cclxuXHJcbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHN0YXJzLmxlbmd0aDsgcysrKSB7XHJcbiAgICAgIHN0YXJzW3NdLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZWxlY3RlZENsYXNzKTtcclxuICAgICAgc3RhcnNbc10ucmVtb3ZlQXR0cmlidXRlKFwiaGlnaGxpZ2h0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZ2V0IHVzZXJfcmF0aW5nKCk6IG51bWJlciB7XHJcbiAgICAvKiogR2V0cyB0aGUgdXNlciByYXRpbmcuICovXHJcbiAgICByZXR1cm4gdGhpcy51c2VyUmF0aW5nO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc2V0IHVzZXJfcmF0aW5nKG5ld1JhdGluZzogbnVtYmVyKSB7XHJcbiAgICAvKiogU2V0cyB0aGUgdXNlciByYXRpbmcuICovXHJcbiAgICB0aGlzLnVzZXJSYXRpbmcgPSBuZXdSYXRpbmc7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3N0YXJfZnVuY3Rpb25zKHN0YXJzOiBIVE1MRWxlbWVudFtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZvciB0aGUgc2VsZWN0YWJsZSByYXRpbmcsIG9uIGhvdmVyLCBmaXJzdGx5IGFsbCBzdGFydHMgd2lsbCBkaXNhcHBlYXJcclxuICAgICAqIGFuZCB3aGVuIGVhY2ggc3RhciBpcyBob3ZlcmVkIG92ZXIsIHRoZXkgd2lsbCBoaWdobGlnaHQuIEZpbmFsbHksIHdoZW5cclxuICAgICAqIHRoZSBtb3VzZSBpcyBtb3ZlZCBhd2F5IGZyb20gdGhlIGVsZW1lbnQsIHJlc2V0IHRoZSBzdGFycyB0byB3aGF0ZXZlclxyXG4gICAgICogaXMgd2FzIHByZXZpb3VzbHkuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IHN0YXIgPSAwOyBzdGFyIDwgc3RhcnMubGVuZ3RoOyBzdGFyKyspIHtcclxuICAgICAgc3RhcnNbc3Rhcl0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVfYWxsX3N0YXJzKHN0YXJzKTtcclxuICAgICAgICBmb3IgKGxldCBwcmV2U3RhciA9IDA7IHByZXZTdGFyIDw9IHN0YXI7IHByZXZTdGFyKyspXHJcbiAgICAgICAgICBzdGFyc1twcmV2U3Rhcl0uc2V0QXR0cmlidXRlKFwiaGlnaGxpZ2h0XCIsIFwidHJ1ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdGFyc1tzdGFyXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3NlbGVjdGlvbihzdGFycyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc3RhcnNbc3Rhcl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJfcmF0aW5nID0gc3RhciArIDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfc2VsZWN0aW9uKHN0YXJzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDgvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBNYW5hZ2VzIHRoZSBzZWFyY2ggZmlsdGVycyBvbiB0aGUgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBSZXNwb25zaWJsZSBmb3IgY2FsbGluZyB0aGUgc2VhcmNoIEFQSSB3aGljaCB3aWxsIGZpbHRlciByZXN1bHQgYmFzZWQgb25cclxuLy8gd2hhdCB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdXNpbmcgdGhlIGZpbHRlcnMuXHJcbi8vXHJcbi8vIFdpbGwgdXNlIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBiYXIncyBmb3JtIHRvIGludGVyYWN0IHdpdGggdGhlIEFQSS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJzIHtcclxuICAvKipcclxuICAgKiBXaWxsIGV4cGFuZCB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggYmFyIGFuZCB0aGUgZm9ybSBlbGVtZW50IHRvIGFsbG93IGl0IHRvXHJcbiAgICogdGFrZSBpbiB0aGUgZmlsdGVyIG9wdGlvbnMgYXMgcGFydCBvZiB0aGUgR0VUIHJlcXVlc3Qgd2hlbmV2ZXIgYSB1c2VyXHJcbiAgICogaW5pdGlhdGVzIGEgc2VhcmNoLlxyXG4gICAqXHJcbiAgICogQ2FsbHMgdGhlIEFQSSB0byBmaWx0ZXIgdGhlIHJlc3VsdHMuXHJcbiAgICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciBkb2VzIG5vdCByZXF1aXJlIGFueSBhcmd1bWVudHMgYW5kIHdpbGwgaW5zdGVhZCB1c2VcclxuICAgICAqIGVsZW1lbnRzIGZyb20gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZXhwYW5kX25hdl9zZWFyY2goKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9leHBhbmRfbmF2X3NlYXJjaCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogRXhwYW5kcyBvbiB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggZWxlbWVudHMgc28gdGhhdCB3aGVuIHNlbmRpbmcgYSBHRVRcclxuICAgICAqIHJlcXVlc3QsIGZpbHRlcnMgd2lsIGJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG5hdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcIm5hdl9fc2VhcmNoXCJcclxuICAgIClbMF0gYXMgSFRNTEZvcm1FbGVtZW50O1xyXG5cclxuICAgIC8vIEFkZCBoaWRkZW4gaW5wdXRzIHRvIGNvbnRhaW4gdGhlIHZhbHVlcyBvbiB0aGUgZmlsdGVycy5cclxuICAgIGNvbnN0IGlucHV0TmFtZXMgPSBbXCJmLW1pblByaWNlXCIsIFwiZi1tYXhQcmljZVwiLCBcImYtY2F0ZWdvcnlcIiwgXCJmLWNvbG91clwiXTtcclxuICAgIGZvciAoY29uc3QgaW5wdXROYW1lIG9mIGlucHV0TmFtZXMpIHtcclxuICAgICAgY29uc3QgaGlkZGVuSW5wdXROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcclxuICAgICAgICBcIklOUFVUXCJcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0TmFtZSk7XHJcbiAgICAgIG5hdkZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuSW5wdXROb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGhpZGRlbiBpbnB1dHMgd2hlbiBhIGZpbHRlciBpcyBzZWxlY3RlZFxyXG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgZm9yIChsZXQgb3B0ID0gMDsgb3B0IDwgZHJvcGRvd25PcHRpb25zLmxlbmd0aDsgb3B0KyspIHtcclxuICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBkcm9wZG93bk9wdGlvbnNbb3B0XTtcclxuICAgICAgbGV0IGhpZGRlbklucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgc3dpdGNoIChkcm9wZG93bk9wdGlvbi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpKSB7XHJcbiAgICAgICAgY2FzZSBcIm1pbi1wcmljZVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJtYXgtcHJpY2VcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1tYXhQcmljZVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY2F0ZWdvcnlcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1jYXRlZ29yeVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY29sb3VyXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZi1jb2xvdXJcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGhpZGRlbklucHV0KSB7XHJcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgaGlkZGVuSW5wdXQhLnZhbHVlID0gZHJvcGRvd25PcHRpb24ucHJldmlvdXNFbGVtZW50U2libGluZyEudGV4dENvbnRlbnQhO1xyXG5cclxuICAgICAgICAgIC8vIENhbGxzIHRoZSBzZWFyY2ggcmVzdWx0IEFQSSBhbmQgdGhlbiBmaWx0ZXIgdGhlIHJlc3VsdHMuXHJcbiAgICAgICAgICBjb25zdCBBUElQYXRoID0gdGhpcy5fQVBJX3BhdGgoKTtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KSBhcyBbXTtcclxuICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJfcmVzdWx0cyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9BUElfcGF0aCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBBUEkgaHJlZiBwYXRoIHdoZXJlIHRoZSByZXF1ZXN0IHdpbGwgYmUgc2VudC5cclxuICAgICAqIFRoaXMgaW1wbGVtZW50cyB0aGUgZmlsdGVycyB3aXRoaW4gdGhlIGFjdHVhbCBVUkwuXHJcbiAgICAgKi9cclxuICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcIi9zZWFyY2gvXCIsIFwiL3NlYXJjaC1yZXN1bHRzL1wiKTtcclxuXHJcbiAgICBjb25zdCBoaWRkZW5Jbk1pblByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1taW5QcmljZVwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoaWRkZW5Jbk1heFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1tYXhQcmljZVwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoaWRkZW5JbkNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1jYXRlZ29yeVwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBoaWRkZW5JbkNvbG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImYtY29sb3VyXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaGlkZGVuSW5NaW5QcmljZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtbWluUHJpY2U9XCIgKyBoaWRkZW5Jbk1pblByaWNlLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1taW5QcmljZT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLW1pblByaWNlPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluTWF4UHJpY2UudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLW1heFByaWNlPVwiICsgaGlkZGVuSW5NYXhQcmljZS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtbWF4UHJpY2U9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1tYXhQcmljZT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5JbkNhdGVnb3J5LnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1jYXRlZ29yeT1cIiArIGhpZGRlbkluQ2F0ZWdvcnkudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLWNhdGVnb3J5PS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtY2F0ZWdvcnk9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5Db2xvdXIudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLWNvbG91cj1cIiArIGhpZGRlbkluQ29sb3VyLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1jb2xvdXI9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1jb2xvdXI9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaHJlZjtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9maWx0ZXJfcmVzdWx0cyhBUElSZXN1bHRzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXJzIHRoZSByZXN1bHRzIG9uIHRoZSBzZWFyY2ggcGFnZSBpbiBhY2NvcmRhbmNlIHRvIHRoZSBkYXRhXHJcbiAgICAgKiByZXRyaWV2ZWQgZnJvbSB0aGUgc2VhcmNoIEFQSS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzJylbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcmlnUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHNfX3Jlc3VsdCcpO1xyXG5cclxuICAgIGxldCB2YWxpZFByb2R1Y3RzID0gW107XHJcbiAgICByZXN1bHQ6IEpTT047XHJcbiAgICBmb3IgKGNvbnN0IHJlc3VsdCBpbiBBUElSZXN1bHRzKSB7XHJcbiAgICAgIHZhbGlkUHJvZHVjdHMucHVzaChBUElSZXN1bHRzW3Jlc3VsdF0ucHJvZHVjdF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgcklEID0gMDsgcklEPG9yaWdSZXN1bHRzLmxlbmd0aDsgcklEKyspIHtcclxuICAgICAgaWYgKHZhbGlkUHJvZHVjdHMuaW5jbHVkZXMoTnVtYmVyKG9yaWdSZXN1bHRzW3JJRF0uZ2V0QXR0cmlidXRlKCdJRCcpISkpKSB7XHJcbiAgICAgICAgb3JpZ1Jlc3VsdHNbcklEXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3JpZ1Jlc3VsdHNbcklEXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDI4LzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb250YWlucyBpbXBvcnRzIG9mIGFsbCB0aGUgbWFpbiBjbGFzc2VzLlxyXG4vLyBCZWhhdmVzIGFzIHRoZSBtYWluIGh1YiBmb3IgdGhlIGpzIGJ1bmRsZS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gQ29tcG9uZW50IEltcG9ydHNcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnVcIjtcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3F1YW50aXR5XCI7XHJcbmltcG9ydCB7IFNlYXJjaEZpbHRlcnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaF9maWx0ZXJzXCI7XHJcbmltcG9ydCB7IFBhc3N3b3JkQ2hlY2sgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Bhc3N3b3JkLXZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEltZ3MgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3NcIjtcclxuaW1wb3J0IHsgUmF0aW5ncyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmF0aW5nc1wiO1xyXG5cclxuLy8gU3RhdGUgSW1wb3J0c1xyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5cclxuLy8gUGFnZXMgSW1wb3J0c1xyXG5pbXBvcnQgeyBFeHRlbmRQcm9kdWN0UGFnZSB9IGZyb20gXCIuL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgUHJvZHVjdFVzZXJSZXZpZXcgfSBmcm9tIFwiLi9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0c191c2VyX3Jldmlld1wiO1xyXG5pbXBvcnQgeyBCYXNrZXRQYWdlIH0gZnJvbSBcIi4vcGFnZXMvYmFza2V0L2Jhc2tldFwiO1xyXG5cclxuLy8gQnVpbGQgdGhlIG5hdmlnYXRpb25cclxubmV3IE5hdmlnYXRpb24oKTtcclxuXHJcbi8vIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGJhc2tldFxyXG5uZXcgQmFza2V0U3RhdGUoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBkcm9wZG93biBtZW51XHJcbm5ldyBEcm9wZG93bk1lbnUoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBzZWFyY2ggZmlsdGVyc1xyXG5uZXcgU2VhcmNoRmlsdGVycygpO1xyXG5cclxuLy8gQnVpbGQgdGhlIHBhZ2luYXRpb25cclxubmV3IFBhZ2luYXRpb24oKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFBBR0UgU1BFQ0lGSUMgSkFWQVNDUklQVFxyXG5jb25zdCBDVVJSRU5UX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuaWYgKENVUlJFTlRfVVJMLnNlYXJjaCgvXFwvcHJvZHVjdHNcXC9bMC05XXsxLH0vKSAhPSAtMSkge1xyXG4gIC8vIFByb2R1Y3QgUGFnZVxyXG4gIG5ldyBFeHRlbmRQcm9kdWN0UGFnZSgpO1xyXG4gIG5ldyBRdWFudGl0eUNvbXBvbmVudCgpO1xyXG4gIG5ldyBDYXJvdXNlbEltZ3MoKTtcclxuICBSYXRpbmdzLmdldEluc3RhbmNlKCk7XHJcbiAgbmV3IFByb2R1Y3RVc2VyUmV2aWV3KCk7XHJcbn0gZWxzZSBpZiAoQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCIvYmFza2V0L1wiKSkge1xyXG4gIC8vIEJhc2tldCBQYWdlXHJcbiAgbmV3IEJhc2tldFBhZ2UoKTtcclxufSBlbHNlIGlmIChcclxuICAvLyBBY2NvdW50IHJlZ2lzdHJhdGlvbiBhbmQgY2hhbmdlIHBhc3N3b3JkIHBhZ2VzXHJcbiAgQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCJ1c2VyL3JlZ2lzdGVyXCIpIHx8XHJcbiAgQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCJ1c2VyL2NoYW5nZS1wYXNzd29yZFwiKVxyXG4pIHtcclxuICBuZXcgUGFzc3dvcmRDaGVjaygpO1xyXG59IGVsc2UgaWYgKENVUlJFTlRfVVJMLmluY2x1ZGVzKFwiL29yZGVyLWhpc3RvcnkvXCIpKSB7XHJcbiAgUmF0aW5ncy5nZXRJbnN0YW5jZSgpO1xyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDUvMDEvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBUaGUgYmFza2V0IHBhZ2UuXHJcbi8vXHJcbi8vIEZVTkNUSU9OQUxJVFlcclxuLy8gLSBDYWxscyB0aGUgYmFza2V0LWluZm8tQVBJIHdoZXJlIHVzaW5nIHRoZSBsb2NhbCBzdG9yYWdlIGl0IGlzIGFibGUgdG8gc2VuZFxyXG4vLyAgIGEgR0VUIHJlcXVlc3QgdG8gdGVoIEFQSSBzaXRlIHVzaW5nIHRoZSBwcmltYXJ5IGtleXMgb2YgdGhlIGl0ZW1zIGluIHRoZVxyXG4vLyAgIGJhc2tldC5cclxuLy8gLSBCdWlsZHMgcGFydCBvZiB0aGUgRE9NIHdoaWNoIHdpbGwgZGlzcGxheSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgd2hhdCBpcyBpblxyXG4vLyAgIGJhc2tldC5cclxuLy8gLSBTZXRzIGtleSBiaW5kZXJzIG9uIHRoZSBxdWFudGl0eSBvcHRpb24gYW5kIFwieFwiIG9wdGlvbiBzbyB0aGF0IGl0IHVwZGF0ZXNcclxuLy8gICB0aGUgYmFza2V0LlxyXG4vLyAtIFVwZGF0ZXMgdG90YWxzIHNlY3Rpb24gb24gbG9hZCBpZiB0aGVyZSBpcyBzb21ldGhpbmcgaW4gdGhlIGJhc2tldC5cclxuLy8gLSBTZXQga2V5IGJpbmRlcnMgc28gdGhhdCB3aGVuZXZlciB0aGVyZSBpcyBhIGNoYW5nZSB0byB0aGUgYmFza2V0IGl0ZW1zLFxyXG4vLyAgIHRoZSB0b3RhbHMgd2lsbCBhbHNvIHVwZGF0ZS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIElNUE9SVFNcclxuaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBOdW1iZXJGb3JtYXQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL251bWJlcl9mb3JtYXRcIjtcclxuaW1wb3J0IHsgQmFza2V0U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcbmltcG9ydCB7IFF1YW50aXR5Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVhbnRpdHlcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBCYXNrZXRQYWdlIGV4dGVuZHMgQmFza2V0U3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgYnVpbGQgZWxlbWVudHMgb250byBiYXNrZXQgcGFnZSB1c2luZyBhbiBBUEkgdG8gcmV0cmlldmVcclxuICAgKiBpbmZvcm1hdGlvbiBvbiBwcm9kdWN0cyBjdXJyZW50bHkgaW4gdGhlIHVzZXIncyBiYXNrZXQgKGluZm9ybWF0aW9uXHJcbiAgICogc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2UpXHJcbiAgICovXHJcblxyXG4gIC8vIFRoZSBtYWluIGxvY2F0aW9uIGFzIHRvIHdoZXJlIGVhY2ggcHJvZHVjdCB3aWxsIGJlIGluc2VydGVkIGZyb20gdGhlXHJcbiAgLy8gdXNlcidzIGJhc2tldC5cclxuICBzdW1tYXJ5SXRlbXNQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYmFza2V0LXN1bW1hcnktZGF0YVwiXHJcbiAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgYmFza2V0SXRlbXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIHRoZSBwcm9jZXNzIGluIHdoaWNoIHRoZSBiYXNrZXQgcGFnZSBET00gaXMgYnVpbGQuXHJcbiAgICAgKi9cclxuICAgIHN1cGVyKCk7XHJcbiAgICBpZiAodGhpcy5pdGVtcyAhPSBudWxsICYmIHRoaXMuaXRlbXMgIT0gXCJ7fVwiKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIEpTT04ucGFyc2UodGhpcy5pdGVtcykpIHtcclxuICAgICAgICB0aGlzLmJhc2tldEl0ZW1zLnB1c2goa2V5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYmFza2V0SXRlbXNTdHIgPSB0aGlzLmJhc2tldEl0ZW1zLmpvaW4oXCIsXCIpO1xyXG5cclxuICAgICAgLy8gQ2FsbCBBUElcclxuICAgICAgY29uc3QgQVBJUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgICAgL2Jhc2tldC4qLyxcclxuICAgICAgICBcImJhc2tldC1pbmZvLUFQSS8/cGtzPVwiICsgYmFza2V0SXRlbXNTdHJcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgY29uc3QgQVBJUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIGlmIChBUElSZXNwb25zZS5wcm9kdWN0c0luZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZF9iYXNrZXRfc3VtbWFyeShBUElSZXNwb25zZS5wcm9kdWN0c0luZm8pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9iYXNrZXRfc3VtbWFyeShhbGxQcm9kdWN0czogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIGVhY2ggZWxlbWVudCBpbnRvIHRoZSBET00gaW5zaWRlIHRoZSB0YXJnZXQgcGFyZW50IGNvbnRhaW5lci5cclxuICAgICAqIFRoZXJlIGVsZW1lbnRzIGJlaW5nIGFkZGVkIHdpbGwgYmUgdGhlIHByb2R1Y3QncyBpbWFnZSwgbmFtZSwgc3RvcmVcclxuICAgICAqIG5hbWUgLCBjb2xvdXIsIHF1YW50aXR5IG9wdGlvbnMsIHByaWNlIGFuZCBhIGJ1dHRvbiB0byByZW1vdmUgYW4gaXRlbVxyXG4gICAgICogZnJvbSB0aGUgYmFza2V0LlxyXG4gICAgICpcclxuICAgICAqIFRoZSBhcnJhbmdlbWVudCBvZiB0aGUgSFRNTCBpcyBzdWNoIHRoYXQgdGhlIGltYWdlIGlzIG9uIHRoZSBsZWZ0IGhhbmRcclxuICAgICAqIHNpZGUuIFByb2R1Y3QgaW5mb3JtYXRpb24gYWxvbmcgd2l0aCB0aGUgcXVhbnRpdHkgb3B0aW9ucyBhcmUgaW4gdGhlXHJcbiAgICAgKiBtaWRkbGUuIFByaWNlIGFuZCB0aGUgb3B0aW9uIHRvIHJlbW92ZSBhbiBpdGVtIGlzIG9uIHRoZSByaWdodCBoYW5kXHJcbiAgICAgKiBzaWRlLiBBcyBzdWNoLCB0aGVyZSB3aWxsIGJlIHRocmVlIHN1Yi1jb250YWluZXJzIHdoZXJlIGVhY2ggZWxlbWVudFxyXG4gICAgICogd2lsbCBiZSBhZGRlZCB0byB0aGF0IGNvbnRhaW5lci5cclxuICAgICAqXHJcbiAgICAgKiBFYWNoIG9mIHRob3NlIGNvbnRhaW5lcnMgd2lsbCB0aGVuIGJlIGFkZGVkIHRvIGEgbWFpbiBjb250YWluZXJcclxuICAgICAqIHJlcHJlc2VudGluZyBhIHJvdyBvZiBkYXRhIHdoaWNoIHdpbGwgdGhlbiBiZSBhZGRlZCB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBwcm9kdWN0UGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL2Jhc2tldC4qLywgXCJwcm9kdWN0cy9cIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhbGxQcm9kdWN0c1tpXTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBOdW1iZXIoSlNPTi5wYXJzZSh0aGlzLml0ZW1zKVtwcm9kdWN0LnByb2R1Y3RJZF0pO1xyXG5cclxuICAgICAgLy8gTWFpbiBjb250YWluZXIgYW5kIHN1Yi1jb250YWluZXIuXHJcbiAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBjb25zdCBwcmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAvLyBEaXYgdG8gY29udGFpbiBhbGwgcHJvZHVjdCBlbGVtZW50cywgd2hpY2ggd2lsbCB0aGVuIGJlIGFwcGVuZGVkXHJcbiAgICAgIC8vIGludG8gdGhlIHBhcmVudCBlbGVtZW50LlxyXG4gICAgICBtYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd1wiO1xyXG4gICAgICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInByb2R1Y3QtaWRcIiwgcHJvZHVjdC5wcm9kdWN0SWQpO1xyXG5cclxuICAgICAgaW1nQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fY29udGFpbmVyIGJhc2tldC1zdW1tYXJ5X19yb3dfX2NvbnRhaW5lci0taW1nXCJcclxuICAgICAgaW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2NvbnRhaW5lclwiXHJcbiAgICAgIHByaWNlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fY29udGFpbmVyXCJcclxuXHJcbiAgICAgIGltZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRzJywgJ3Byb2R1Y3QtaW1nJylcclxuICAgICAgaW5mb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRzJywgJ3Byb2R1Y3QtaW5mbycpXHJcbiAgICAgIHByaWNlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29udGVudHMnLCAncHJvZHVjdC1wcmljZScpXHJcblxyXG4gICAgICAvLyBQcm9kdWN0IEltYWdlIEVtYmVkZGVkIGluIExpbmsgRWxlbWVudFxyXG4gICAgICBjb25zdCBpbWdBVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIGltZ0FUYWcuY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhXCI7XHJcbiAgICAgIGltZ0FUYWcuaHJlZiA9IHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIGltZ0FUYWcuc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LWltYWdlXCIpO1xyXG4gICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaW1nRWxlbS5zcmMgPSBwcm9kdWN0LmltYWdlO1xyXG4gICAgICBpbWdFbGVtLmFsdCA9IFwiSW1hZ2Ugb2YgXCIgKyBwcm9kdWN0LnByb2R1Y3ROYW1lO1xyXG4gICAgICBpbWdBVGFnLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBOYW1lXHJcbiAgICAgIGNvbnN0IG5hbWVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIG5hbWVFbGVtLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fZGF0YSB0ZXh0LWxpbmtcIjtcclxuICAgICAgbmFtZUVsZW0uaHJlZiA9IHByb2R1Y3RQYWdlICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIG5hbWVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1uYW1lXCIpO1xyXG4gICAgICBuYW1lRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QucHJvZHVjdE5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IFN0b3JlXHJcbiAgICAgIGNvbnN0IHN0b3JlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBzdG9yZUVsZW0uY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhIHRleHQtbGlua1wiO1xyXG4gICAgICBzdG9yZUVsZW0uaHJlZiA9IFwiL3N0b3Jlcy9cIiArIHByb2R1Y3Quc3RvcmVJZDtcclxuICAgICAgc3RvcmVFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1zdG9yZVwiKTtcclxuICAgICAgc3RvcmVFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5zdG9yZU5hbWU7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IENvbG91clxyXG4gICAgICBjb25zdCBjb2xvdXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgIGNvbG91ckVsZW0uY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhXCI7XHJcbiAgICAgIGNvbG91ckVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LWNvbG91clwiKTtcclxuICAgICAgY29sb3VyRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3QuY29sb3VyTmFtZTtcclxuXHJcbiAgICAgIC8vIFF1YW50aXR5XHJcbiAgICAgIC8vIE5PVEU6IFRoZSBIVE1MIGZvcm1hdCBtdXN0IGZvbGxvdyB0aGUgc3RydWN0dXJlIGRlZmluZWQgaW4gdGhlIHF1YW50aXR5XHJcbiAgICAgIC8vIGNvbXBvbmVudC5cclxuICAgICAgY29uc3QgcXVhbnRpdHlDb250YWluZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eSBiYXNrZXQtc3VtbWFyeV9fcm93X19mdW5jdGlvblwiO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uaWQgPSBcInByb2R1Y3QtXCIgKyBwcm9kdWN0LnByb2R1Y3RJZDtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicXVhbnRpdHlcIik7XHJcblxyXG4gICAgICBjb25zdCBxdWFudGl0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19pbnB1dFwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0Lm1pbiA9IFwiMFwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0LnN0ZXAgPSBcIjFcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5tYXggPSBwcm9kdWN0LmludmVudG9yeTtcclxuICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IGl0ZW1zLnRvU3RyaW5nKCk7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBhIHBvc2l0aXZlIGludGVnZXIgdGhlbiB0aGUgY2VydGFpbiB1cGRhdGVzXHJcbiAgICAgICAgLy8gd2lsbCB0YWtlIHBsYWNlLlxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1YW50aXR5SW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGlmIChWYWxpZGF0aW9uLmNoZWNrX2lmX3Bvc2l0aXZlX2ludChOdW1iZXIocXVhbnRpdHlJbnB1dC52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZW50ZXJlZCBpcyBncmVhdGVyIHRoYW4gdGhlIG1heCwgdGhlbiBzZXQgaXQgdG8gdGhlIG1heC5cclxuICAgICAgICAgIGxldCB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgIGlmICh2YWx1ZSA+IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCkpIHtcclxuICAgICAgICAgICAgcXVhbnRpdHlJbnB1dC52YWx1ZSA9IHF1YW50aXR5SW5wdXQubWF4O1xyXG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihxdWFudGl0eUlucHV0Lm1heCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBsb2NhbCBzdG9yYWdlICh1c2VyJ3MgYmFza2V0KVxyXG4gICAgICAgICAgdGhpcy51cGRhdGVfc2luZ2xlX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHByaWNlXHJcbiAgICAgICAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSAodmFsdWUgKiBwcm9kdWN0LnByaWNlKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYmFza2V0IHRvdGFsc1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIG1pbnVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIG1pbnVzQnRuLnNldEF0dHJpYnV0ZShcImNvbnRyb2xcIiwgXCJxdWFudGl0eS1kb3duXCIpO1xyXG4gICAgICBtaW51c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX2FuX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHByb2R1Y3QucHJpY2UsIHByaWNlU3Bhbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBwbHVzQnRuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuXCI7XHJcbiAgICAgIHBsdXNCdG4uc2V0QXR0cmlidXRlKFwiY29udHJvbFwiLCBcInF1YW50aXR5LXVwXCIpO1xyXG4gICAgICBwbHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5hZGRfYW5faXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgcHJvZHVjdC5wcmljZSwgcHJpY2VTcGFuKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG4vL1xyXG4gICAgICBjb25zdCBtaW51c0J0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgbWludXNCdG5TcGFuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI7XHJcbiAgICAgIG1pbnVzQnRuU3Bhbi50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4vL1xyXG4gICAgICBjb25zdCBwbHVzQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICBwbHVzQnRuU3Bhbi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiO1xyXG4gICAgICBwbHVzQnRuU3Bhbi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG4vL1xyXG4gICAgICBtaW51c0J0bi5hcHBlbmRDaGlsZChtaW51c0J0blNwYW4pO1xyXG4gICAgICBwbHVzQnRuLmFwcGVuZENoaWxkKHBsdXNCdG5TcGFuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKG1pbnVzQnRuKTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKHF1YW50aXR5SW5wdXQpO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQocGx1c0J0bik7XHJcbi8vXHJcbiAgICAgIC8vIFByaWNlXHJcbiAgICAgIGNvbnN0IHByaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICBwcmljZUVsZW0uY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhXCI7XHJcbiAgICAgIHByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtcHJpY2UtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgY29uc3QgcG91bmRJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHBvdW5kSS50ZXh0Q29udGVudCA9IFwiwqNcIjtcclxuICAgICAgcG91bmRJLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS1jdXJyZW5jeVwiKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHBvdW5kSSk7XHJcbi8vXHJcbiAgICAgIGNvbnN0IHByaWNlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBwcmljZVNwYW4uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXByaWNlLXZhbHVlXCIpO1xyXG4gICAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcChcclxuICAgICAgICBOdW1iZXIocHJvZHVjdC5wcmljZSkgKiBpdGVtc1xyXG4gICAgICApO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocHJpY2VTcGFuKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSBJdGVtIEJ1dHRvblxyXG4gICAgICBjb25zdCByZW1vdmVJdGVtU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5jbGFzc05hbWUgPSBcImJhc2tldF9faWNvblwiO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInJlbW92ZS1pdGVtXCIpO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vIE9uIHJlbW92YWwsIHVwZGF0ZSB0aGUgRE9NIGFuZCB0aGUgYmFza2V0L2xvY2FsIHN0b3JhZ2UgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVfd2hvbGVfaXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgbWFpbkNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVtb3ZlSXRlbUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSVwiKTtcclxuICAgICAgcmVtb3ZlSXRlbUkuY2xhc3NOYW1lID0gXCJmYSBmYS10aW1lc1wiO1xyXG4gICAgICByZW1vdmVJdGVtU3Bhbi5hcHBlbmRDaGlsZChyZW1vdmVJdGVtSSk7XHJcbiAgICAgIHByaWNlRWxlbS5hcHBlbmRDaGlsZChyZW1vdmVJdGVtU3Bhbik7XHJcblxyXG4gICAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBjb250YWluZXJzLCBhcHBlbmQgdGhhdCBjb250YWluZXJcclxuICAgICAgLy8gdG8gdGhlIG1haW4gY29udGFpbmVyIGFuZCB0aGVuIGZpbmFsbHkgYXBwZW5kIHRoZSBtYWluIGNvbnRhaW5lciB0byB0aGVcclxuICAgICAgLy8gRE9NIHRhcmdldCBlbGVtZW50LlxyXG4gICAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQVRhZylcclxuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRWxlbSlcclxuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yZUVsZW0pXHJcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3VyRWxlbSlcclxuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChxdWFudGl0eUNvbnRhaW5lckVsZW0pXHJcbiAgICAgIHByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlRWxlbSlcclxuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpXHJcbiAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcilcclxuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZUNvbnRhaW5lcilcclxuICAgICAgdGhpcy5zdW1tYXJ5SXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSB0aGUgSmF2YVNjcmlwdCB0byBlYWNoIHF1YW50aXR5IGNvbXBvbmVudC5cclxuICAgIG5ldyBRdWFudGl0eUNvbXBvbmVudCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSB1cGRhdGVfYmFza2V0X3RvdGFscygpIHtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgdG90YWxzIHNlY3Rpb24gaW4gdGhlIGJhc2tldCBwYWdlLlxyXG4gICAgICogVGhlIEhUTUwgZGVmYXVsdCBiZWhhdmlvciBpcyB0byBzZXQgdGhlIGxvYWRzIHRoZSBlbGVtZW50cyBhbmQgc2V0IHRoZVxyXG4gICAgICogdmFsdWVzIHRvIMKjMC4wMCBmb3IgZWFjaCBlbGVtZW50LlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHVwZGF0ZSB0aGUgdG90YWxzLlxyXG4gICAgICovXHJcbiAgICAvLyBCYXNrZXQgRWxlbWVudHMgaW4gdGhlIERPTVxyXG4gICAgY29uc3Qgc3VidG90YWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtc3VidG90YWxcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB2YXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtdmF0XCIpIVxyXG4gICAgICAuY2hpbGRyZW5bMV0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgY29uc3QgdG90YWxFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtdG90YWxcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gICAgLy8gSW5pdGlhbCBWYWx1ZVxyXG4gICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG5cclxuICAgIC8vIFJldHJpZXZlIGFsbCBlbGVtZW50cyB3aGVyZSB0aGVyZSBpcyBhIHByaWNlIGFuZCBpdGVyYXRpdmVseSB1cGRhdGVcclxuICAgIC8vIHRoZSB0b3RhbCBwcmljZS5cclxuICAgIGNvbnN0IHByaWNlRWxlbXMgPSBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXQtc3VtbWFyeS1kYXRhXCIpIVxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnW2ZpZWxkPVwicHJvZHVjdC1wcmljZS12YWx1ZVwiXScpO1xyXG5cclxuICAgIGZvciAobGV0IHByaWNlSWR4ID0gMDsgcHJpY2VJZHggPCBwcmljZUVsZW1zLmxlbmd0aDsgcHJpY2VJZHgrKykge1xyXG4gICAgICB0b3RhbFByaWNlICs9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBfdG9fZmxvYXQoXHJcbiAgICAgICAgcHJpY2VFbGVtc1twcmljZUlkeF0udGV4dENvbnRlbnRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIERPTSB3aWxsIHRoZSBuZXcgdG90YWwgZmlndXJlcy5cclxuICAgIGNvbnN0IHN1YlRvdGFsID0gdG90YWxQcmljZSAvIDEuMjtcclxuICAgIGNvbnN0IHZhdCA9IHRvdGFsUHJpY2UgLSBzdWJUb3RhbDtcclxuXHJcbiAgICBzdWJ0b3RhbEVsZW0udGV4dENvbnRlbnQgPSBzdWJUb3RhbC50b0ZpeGVkKDIpO1xyXG4gICAgdmF0RWxlbS50ZXh0Q29udGVudCA9IHZhdC50b0ZpeGVkKDIpO1xyXG4gICAgdG90YWxFbGVtLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAodG90YWxQcmljZSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHJlbW92ZV9hbl9pdGVtKFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LiBEdXJpbmcgdGhlIHByb2Nlc3MsIGl0IHdpbGwgdXBkYXRlXHJcbiAgICAgKiB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgdXBkYXRlIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHByb2R1Y3RJZDogc3RyaW5nLFxyXG4gICAgcHJpY2U6IHN0cmluZyxcclxuICAgIHByaWNlRWxlbTogSFRNTEVsZW1lbnRcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZW1vdmVfaXRlbShOdW1iZXIocHJvZHVjdElkKSwgMSk7XHJcbiAgICBwcmljZUVsZW0udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcChcclxuICAgICAgTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcF90b19mbG9hdChwcmljZUVsZW0udGV4dENvbnRlbnQpIC0gTnVtYmVyKHByaWNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYWRkX2FuX2l0ZW0oXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuIER1cmluZyB0aGUgcHJvY2VzcywgaXQgd2lsbCB1cGRhdGVcclxuICAgICAqIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCB1cGRhdGUgdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmcsXHJcbiAgICBwcmljZTogc3RyaW5nLFxyXG4gICAgcHJpY2VFbGVtOiBIVE1MRWxlbWVudFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LlxyXG4gICAgICovXHJcbiAgICB0aGlzLmFkZF9pdGVtKE51bWJlcihwcm9kdWN0SWQpLCAxKTtcclxuICAgIHByaWNlRWxlbS50ZXh0Q29udGVudCA9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBhcmF0ZWRfMmRwKFxyXG4gICAgICBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwX3RvX2Zsb2F0KHByaWNlRWxlbS50ZXh0Q29udGVudCkgKyBOdW1iZXIocHJpY2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSByZW1vdmVfd2hvbGVfaXRlbShwcm9kdWN0SWQ6IHN0cmluZywgcGFyZW50Q29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGVudGlyZSBpdGVtIGZyb20gdGhlIGJhc2tldC4gSW4gdGhlIHByb2Nlc3MsIGl0IHdpbGwgdXBkYXRlXHJcbiAgICAgKiBsb2NhbCBzdG9yYWdlIGFuZCB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlbW92ZV9lbnRpcmVfaXRlbShwcm9kdWN0SWQpO1xyXG4gICAgcGFyZW50Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDI3LzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gRnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIFdpbGwgaGFuZGxlIHRoZSBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuIFRoZXNlIGluY2x1ZGUgdGhlXHJcbi8vIGZvbGxvd2luZzpcclxuLy9cclxuLy8gIC0gV2lsbCBidWlsZCBvbnRvIHRoZSBIVE1MIGFkZGluZyBvbnRvIHRoZSBjb2xvdXJzIGZpbHRlciBvcHRpb25zIGFzIHdlbGwgYXNcclxuLy8gICAgdGhlIHByb2R1Y3QgaW5mbyBzZWN0aW9uLiBUaGVyZSBlbGVtZW50cyB3aWxsIGJlIGFkZGVkIGJhc2VkIG9uIHdoYXQgb3RoZXJcclxuLy8gICAgcmVsYXRlZCBwcm9kdWN0cyB0aGVyZSBhcmUgdG8gdGhlIGN1cnJlbnQgcGFnZS4gVGhpcyBpbmZvcm1hdGlvbiB3aWxsIGJlXHJcbi8vICAgIHJldHJpZXZlZCBmcm9tIGFuIEFQSS5cclxuLy9cclxuLy8gIC0gV2lsbCBidWlsZCB0aGUgZnVuY3Rpb24gZm9yIHRoZSBhZGQgdG8gYmFza2V0IGJ1dHRvbiBhbGxvd2luZyBpdGVtc1xyXG4vLyAgICB0byBiZSBhZGRlZCB0byB0aGUgYmFza2V0IGFuZCBmb3IgdGhlIHBhZ2UgdG8gYmUgcmVmcmVzaGVkLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuaW1wb3J0IHsgQmFza2V0U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGUvYmFza2V0LWl0ZW1zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5kUHJvZHVjdFBhZ2UgZXh0ZW5kcyBCYXNrZXRTdGF0ZSB7XHJcbiAgLyoqXHJcbiAgICogV2lsbCBoYW5kbGUgdGhlIEpTIGZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS4gVGhlc2UgaW5jbHVkZSB0aGVcclxuICAgKiBmb2xsb3dpbmc6XHJcbiAgICpcclxuICAgKiAgLSBXaWxsIGJ1aWxkIG9udG8gdGhlIEhUTUwgYWRkaW5nIG9udG8gdGhlIGNvbG91cnMgZmlsdGVyIG9wdGlvbnMgYXMgd2VsbCBhc1xyXG4gICAqICAgIHRoZSBwcm9kdWN0IGluZm8gc2VjdGlvbi4gVGhlcmUgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB3aGF0IG90aGVyXHJcbiAgICogICAgcmVsYXRlZCBwcm9kdWN0cyB0aGVyZSBhcmUgdG8gdGhlIGN1cnJlbnQgcGFnZS4gVGhpcyBpbmZvcm1hdGlvbiB3aWxsIGJlXHJcbiAgICogICAgcmV0cmlldmVkIGZyb20gYW4gQVBJLlxyXG4gICAqXHJcbiAgICogIC0gV2lsbCBidWlsZCB0aGUgZnVuY3Rpb24gZm9yIHRoZSBhZGQgdG8gYmFza2V0IGJ1dHRvbiBhbGxvd2luZyBpdGVtc1xyXG4gICAqICAgIHRvIGJlIGFkZGVkIHRvIHRoZSBiYXNrZXQgYW5kIGZvciB0aGUgcGFnZSB0byBiZSByZWZyZXNoZWQuXHJcbiAgICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiAtIFJldHJpZXZlcyBkYXRhIGZyb20gdGhlIEFQSSBhbmQgY2FsbHMgbWV0aG9kcyB0byBidWlsZCBvbnRvIHRoZSBET00uXHJcbiAgICAgKiAtIEFkZHMgZnVuY3Rpb25hbGl0eSBvbnRvIHRoZSBcImFkZCB0byBiYXNrZXQgYnV0dG9uXCIuXHJcbiAgICAgKi9cclxuICAgIHN1cGVyKCk7XHJcbiAgICBjb25zdCBBUElQYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcclxuICAgICAgXCIvcHJvZHVjdHMvXCIsXHJcbiAgICAgIFwiL3Byb2R1Y3RzL2luZm8tYXBpL1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIEFQSVBhdGgpO1xyXG4gICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgLy8gQWRkaW5nIGNvbG91ciB2YXJpYXRpb25zXHJcbiAgICAgICAgaWYgKGRhdGEuY29sb3Vycykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9jb2xvdXJzKGRhdGEuY29sb3Vycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZGluZyBvdGhlciBwcm9kdWN0cyBvZiB0aGUgc2FtZSBzZXRcclxuICAgICAgICBpZiAoZGF0YS5zZXRzKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX3Byb2R1Y3Rfc2V0cyhkYXRhLnNldHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgc2ltaWxhciBwcm9kdWN0c1xyXG4gICAgICAgIGlmIChkYXRhLnNpbWlsYXIpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfc2ltaWxhcl9wcm9kdWN0cyhkYXRhLnNpbWlsYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgZmVhdHVyZXMgaW5mb3JtYXRpb25cclxuICAgICAgICBpZiAoZGF0YS5mZWF0dXJlcykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9mZWF0dXJlcyhkYXRhLmZlYXR1cmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hZGRfdG9fYmFza2V0KCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX2NvbG91cnMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBkcm9wZG93biBjb2xvdXJzIGRyb3Bkb3duIG1lbnUgYW5kIGFkZHMgbW9yZSBjb2xvdXJzXHJcbiAgICAgKiBpbiBhY2NvcmRhbmNlIHRvIGhvdyBtYW55IGhvdyBtYW55IGNvbG91cnMgd2VyZSByZXR1cm5lZCBmcm9tIHRoZSBBUEkuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIGFwcGVuZCBlbGVtZW50cyBvbnRvIHRoZSBlbGVtZW50XHJcbiAgICAgKiAjcHJvZHVjdC1jb2xvdXItdmFyaWF0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEZvciBlYWNoIGNvbG91ciwgdGhlIGZvbGxvd2luZyBIVE1MIHdpbGwgYmUgYXBwZW5kZWQ6XHJcbiAgICAgKlxyXG4gICAgICogPGFcclxuICAgICAqICAgaHJlZj1cIntsaW5rIHRvIHByb2R1Y3R9XCJcclxuICAgICAqICAgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiXHJcbiAgICAgKiAgIGZvcj1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqIC8+XHJcbiAgICAgKiAgIDxsYWJlbCBmb3I9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiPlxyXG4gICAgICogICAgIDxzcGFuXHJcbiAgICAgKiAgICAgICBjbGFzcz1cInNtLWNvbG91ci1ib3hcIlxyXG4gICAgICogICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge2NvbG91ciBoZXggdmFsdWV9O1wiPlxyXG4gICAgICogICAgIDwvc3Bhbj5cclxuICAgICAqICAgICB7Y29sb3VyLW5hbWV9XHJcbiAgICAgKiAgIDwvbGFiZWw+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKiA8aW5wdXRcclxuICAgICAqICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAqICAgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIlxyXG4gICAgICogICBuYW1lPVwicHJvZC1mLWNvbG91clwiXHJcbiAgICAgKiAgIGlkPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIlxyXG4gICAgICogICB2YWx1ZT1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqIC8+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgIC8vIFVzaW5nIGRhdGEgcmV0cmlldmVkIGZyb20gdGhlIEFQSSB0byBidWlsZCBjb25zdGFudHNcclxuICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgIGNvbnN0IGNvbG91ciA9IGF0dHJzW2FdLmNvbF9uYW1lO1xyXG4gICAgICAgIGNvbnN0IGhleF92YWwgPSBhdHRyc1thXS5jb2xfaGV4X3ZhbDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwiYVwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJsYWJlbFwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IGxhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKTtcclxuICAgICAgICBsYWJlbEVsZW0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwic3BhblwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IHNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgc3BhbkVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbS1jb2xvdXItYm94XCIpO1xyXG4gICAgICAgIHNwYW5FbGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogXCIgKyBoZXhfdmFsICsgXCI7XCIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJpbnB1dFwiIHRhZ1xyXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2QtZi1jb2xvdXJcIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJjb2xvdXItXCIgKyBjb2xvdXIpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmRpbmcgZWFjaCB0YWcgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwYXJlbnQgZWxlbWVudHMuXHJcbiAgICAgICAgbGFiZWxFbGVtLmFwcGVuZENoaWxkKHNwYW5FbGVtKTtcclxuICAgICAgICBsYWJlbEVsZW0uYXBwZW5kKGNvbG91cik7XHJcbiAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQobGFiZWxFbGVtKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIHRoZSBlbGVtZW50cyB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgaW4gdGhlIERPTS5cclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGlucHV0RWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zIGRvZXMgbm90IGV4aXN0LCBhbHRlcm5hdGl2ZSBjb2xvdXJzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9wcm9kdWN0X3NldHMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBcInByb2R1Y3Qgc2V0c1wiIHNlY3Rpb25zLlxyXG4gICAgICogV2lsbCBhcHBlbmQgZWFjaCBwcm9kdWN0IHNldCBvbnRvICNwcm9kdWN0LXNldHMuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgcHJvZHVjZSB0aGUgZm9sbG93aW5nIEhUTUwgZm9yIGVhY2ggc2V0OlxyXG4gICAgICpcclxuICAgICAqIDxhIGNsYXNzPVwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIgaHJlZj1cIntwcm9kdWN0IHVybH1cIlxyXG4gICAgICogICA8aW1nXHJcbiAgICAgKiAgICAgY2xhc3M9XCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAqICAgICBhbHQ9XCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiB7cHJvZHVjdCBuYW1lfVwiXHJcbiAgICAgKiAgID5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIj57cHJvZHVjdCBuYW1lfTwvc3Bhbj5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiPntwcm9kdWN0IHByaWNlfTwvc3Bhbj5cclxuICAgICAqIDwvYT5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1zZXRzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2FdLm5hbWU7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBhdHRyc1thXS5zaG93Y2FzZV9pbWFnZTtcclxuICAgICAgICAgIGNvbnN0IHByaWNlID0gYXR0cnNbYV0ucHJpY2U7XHJcblxyXG4gICAgICAgICAgLy8gXCJBXCIgdGFnIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0LlxyXG4gICAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIpO1xyXG4gICAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICAgICAgICAvLyBcIklNR1wiIHRhZyBmb3IgcHJvZHVjdCBpbWFnZS5cclxuICAgICAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgICAgXCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcpO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiYWx0XCIsXHJcbiAgICAgICAgICAgIFwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4gKFwiICsgbmFtZSArIFwifVwiXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIC8vIFwiU1BBTlwiIHRhZ3MgY29udGFpbmluZyB0aGUgcHJvZHVjdCBuYW1lIGFuZCBwcmljZVxyXG4gICAgICAgICAgY29uc3QgdGV4dFNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgICB0ZXh0U3BhbkVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0U3BhbkVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRleHRQcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICAgIHRleHRQcmljZUVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRleHRQcmljZUVsZW0udGV4dENvbnRlbnQgPSBcIsKjXCIgKyBwcmljZTtcclxuXHJcbiAgICAgICAgICAvLyBTZXQgdGhlIGltYWdlIGFuZCB0ZXh0IGVsZW1lbnRzIHRvIGJlY29tZSBjaGlsZHJlbiBvZiB0aGUgbGlua0VsZW1cclxuICAgICAgICAgIC8vIGFuZCBhcHBlbmQgdGhlbSBvbnRvIHRoZSB0YXJnZXRFbGVtIGluIHRoZSBET00uXHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuICAgICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRTcGFuRWxlbSk7XHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0UHJpY2VFbGVtKTtcclxuICAgICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1zZXRzIGRvZXMgbm90IGV4aXN0LCBwcm9kdWN0LXNldHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBvbnRvIHRoZSBcInNpbWlsYXIgcHJvZHVjdHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjc2ltaWxhci1wcm9kdWN0cy5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBwcm9kdWNlIHRoZSBmb2xsb3dpbmcgSFRNTCBmb3IgZWFjaCBzZXQ6XHJcbiAgICAgKlxyXG4gICAgICogPGEgY2xhc3M9XCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIiBocmVmPVwie3Byb2R1Y3QgdXJsfVwiXHJcbiAgICAgKiAgIDxpbWdcclxuICAgICAqICAgICBjbGFzcz1cInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICogICAgIGFsdD1cIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIHtwcm9kdWN0IG5hbWV9XCJcclxuICAgICAqICAgPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0IG5hbWV9PC9zcGFuPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCI+e3Byb2R1Y3QgcHJpY2V9PC9zcGFuPlxyXG4gICAgICogPC9hPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW1pbGFyLXByb2R1Y3RzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgICBjb25zdCBocmVmID0gXCIvcHJvZHVjdHMvXCIgKyBhdHRyc1thXS5wcm9kdWN0X2lkO1xyXG4gICAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2FdLm5hbWU7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBhdHRyc1thXS5zaG93Y2FzZV9pbWFnZTtcclxuICAgICAgICAgIGNvbnN0IHByaWNlID0gYXR0cnNbYV0ucHJpY2U7XHJcblxyXG4gICAgICAgICAgLy8gXCJBXCIgdGFnIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSB0ZXh0LlxyXG4gICAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2ltaWxhci1wcm9kdWN0IHJlbGF0ZWQtcHJvZHVjdFwiKTtcclxuICAgICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJhbHRcIixcclxuICAgICAgICAgICAgXCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiAoXCIgKyBuYW1lICsgXCJ9XCJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgLy8gXCJTUEFOXCIgdGFncyBjb250YWluaW5nIHRoZSBwcm9kdWN0IG5hbWUgYW5kIHByaWNlXHJcbiAgICAgICAgICBjb25zdCB0ZXh0U3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICAgIHRleHRTcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0U3BhbkVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRleHRQcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICAgIHRleHRQcmljZUVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0UHJpY2VFbGVtLnRleHRDb250ZW50ID0gXCLCo1wiICsgcHJpY2U7XHJcblxyXG4gICAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgICAvLyBhbmQgYXBwZW5kIHRoZW0gb250byB0aGUgdGFyZ2V0RWxlbSBpbiB0aGUgRE9NLlxyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFByaWNlRWxlbSk7XHJcbiAgICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3NpbWlsYXItcHJvZHVjdHMgZG9lcyBub3QgZXhpc3QsIHNpbWlsYXItcHJvZHVjdHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBidWlsZF9mZWF0dXJlcyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBmZWF0dXJlcyBzZWN0aW9uIG9mIHByb2R1Y3QgaW5mb3JtYXRpb24gYmFzZWQgb24gcmVzdWx0c1xyXG4gICAgICogcmV0cmlldmVkIGZyb20gdGhlIEFQSS5cclxuICAgICAqIFdpbGwgY3JlYXRlIGEgXCJQXCIgdGFnIGZvciBlYWNoIGZpbHRlciBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIHRhcmdldFxyXG4gICAgICogZWxlbWVudCBpbiB0aGUgRE9NLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1mZWF0dXJlc1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBmID0gMDsgZiA8IGF0dHJzLmxlbmd0aDsgZisrKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2ZdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LWluZm9fX3NlY3Rpb25fX3RleHRcIik7XHJcbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobmV3RWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNwcm9kdWN0LWZlYXR1cmVzIGRvZXMgbm90IGV4aXN0LCBzaW1pbGFyLXByb2R1Y3RzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBhZGRfdG9fYmFza2V0KCkge1xyXG4gICAgLyoqIEFkZHMgcHJvZHVjdHMgaW50byB0aGUgYmFza2V0ICovXHJcbiAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJxdWFudGl0eS1jdHJsXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9IE51bWJlcihpbnB1dEVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1pZFwiKSk7XHJcblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiYWRkLXRvLWJhc2tldC1idG5cIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBxdWFudGl0eSA9IE51bWJlcihpbnB1dEVsZW0udmFsdWUpO1xyXG5cclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocXVhbnRpdHkpKSB7XHJcbiAgICAgICAgc3VwZXIuYWRkX2l0ZW0ocHJvZHVjdElkLCBxdWFudGl0eSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJDaGVjayB0aGUgcXVhbnRpdHksIGl0IGlzIGVpdGhlciBOYU4gb3IgYSBmbG9hdC4gTXVzdCBiZSBhIG51bWJlclwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDIvMDIvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBSZXZpZXdzIHNlY3Rpb24gb24gYSBwcm9kdWN0IHBhZ2UvXHJcbi8vXHJcbi8vIE9WRVJWSUVXXHJcbi8vIE9uIHRoZSBwcm9kdWN0cyBwYWdlIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgYW5kIHRoZSB1c2VyIGhhcyBsZWZ0XHJcbi8vIGNvbW1lbnRzLCB0aGVyZSB3aWxsIGJlIG9wcG9ydHVuaXR5IHRvIHVwZGF0ZSBvciBkZWxldGUgdGhhdCBjb21tZW50LlxyXG4vL1xyXG4vLyBPbiBsb2FkLCB0aGUgY29tbWVudCB3aWxsIGJlIHBsYWNlZCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLCB3aXRoIGFuIGVkaXQgYW5kXHJcbi8vIGRlbGV0ZSBidXR0b24uXHJcbi8vXHJcbi8vIElmIHVzZXIgY2xpY2tzIG9uIHRoZSBlZGl0IGJ1dHRvbiwgcmVwbGFjZSB0aGUgY29tbWVudCB3aXRoIGZvcm0gZWxlbWVudHNcclxuLy8gYWxsb3dpbmcgdGhlIHVzZXIgdG8gZWRpdCB0aGUgcmF0aW5nLCB0aXRsZSBhbmQgY29tbWVudC4gT24gY2xpY2tpbmcgZWRpdCxcclxuLy8gYSBoaWRkZW4gaW5wdXQgYnV0dG9uIHdpbGwgYmUgdXBkYXRlZCB0aGUgaW5kaWNhdGUgdGhhdCB0aGUgdXNlciBoYXMgY2hvc2VuXHJcbi8vIHRvIHVwZGF0ZSB0aGVpciBjb250ZW50LlxyXG4vL1xyXG4vLyBCZWxvdyBhbGwgb2YgdGhpcywgdGhlcmUgd2lsbCBiZSBhIHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbi4gVGhlIGNhbmNlbFxyXG4vLyBidXR0b24gd2lsbCBub3QgbWFrZSBhbnkgY2hhbmdlcywgcmF0aGVyIHJldHVybiB0byB0aGUgb3JpZ2luYWwgdmlldy5cclxuLy9cclxuLy8gSWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgc3VibWl0IGJ1dHRvbiwgYSBoaWRkZW4gc3VibWl0IGJ1dHRvbiB3b3VsZCBuZWVkIHRvXHJcbi8vIGNsaWNrZWQgdGhyb3VnaCB0aGUgSmF2YVNjcmlwdCB3aGljaCB3aWxsIHNlbnQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGJhY2tlbmQuXHJcbi8vXHJcbi8vIElmIHRoZSB1c2VyIHByZXNzZXMgdGhlIGRlbGV0ZSBidXR0b24sIHRoZXJlIHdpbGwgYmUgYSBwb3AgdXAgYXNraW5nIHRoZW0gdG9cclxuLy8gY29uZmlybSB0aGF0IHRoZXkgd2FudCB0byBkZWxldGUgdGhlaXIgcG9zdC4gSWYgY29uZmlybWVkLCB0aGVuIGFuIGhpZGRlblxyXG4vLyBpbnB1dCB3aWxsIGJlIHVwZGF0ZWQgYW5kIGEgdGhlIHN1Ym1pdCBjbGlja2VkIHNlbmRpbmcgYSBQT1NUIHJlcXVlc3Qgb3QgdGhlXHJcbi8vIGJhY2tlbmQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFVzZXJSZXZpZXcge1xyXG4gIC8vIEZvcm0gY29udGFpbmluZyB0aGUgdXNlciByZXZpZXcgb3IgbnVsbC5cclxuICB1c2VyUmV2aWV3Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJwcm9kdWN0LXVzZXItcmV2aWV3LWZvcm1cIlxyXG4gICkgYXMgSFRNTEZvcm1FbGVtZW50IHwgbnVsbDtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciBob2xkcyB0aGUgY29uc3RhbnRzIGFuZCBkaWN0YXRlcyB0aGUgYnVpbGQgb3JkZXIgb2YgZWFjaFxyXG4gICAgICogZWxlbWVudC5cclxuICAgICAqL1xyXG5cclxuICAgIGlmICh0aGlzLnVzZXJSZXZpZXdGb3JtKSB7XHJcbiAgICAgIC8vIEVsZW1lbnRzIGZyb20gdGhlIGZvcm0gdGhhdCB3aWwgYmUgaW50ZXJhY3RlZCB3aXRoLlxyXG5cclxuICAgICAgLy8gQ3VycmVudCB1c2VyIHJldmlldyBzZWN0aW9uXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRSZXZpZXdTZWN0cyA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAnW3VzZXJTZWN0aW9uPVwiY3VycmVudC1zZWN0aW9uXCJdJ1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB1cGRhdGVSZXZpZXdTZWN0cyA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAnW3VzZXJTZWN0aW9uPVwidXBkYXRlLXNlY3Rpb25cIl0nXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNvbmZpcm1EZWxldGVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgIFwicHJvZHVjdC1yZXZpZXdzX19yZXZpZXdfX2NvbmZpcm0tZGVsZXRlXCJcclxuICAgICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICAgIC8vIEJ1dHRvbnNcclxuICAgICAgY29uc3QgZWRpdEJ0biA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1lZGl0LXN0YXJ0XCJcclxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3QgY2FuY2VsQnRuID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3VzZXItcmV2aWV3LWVkaXQtY2FuY2VsXCJcclxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1kZWxldGUtc3RhcnRcIlxyXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBjb25zdCBzdWJtaXRCdG4gPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjdXNlci1yZXZpZXctc3VibWl0XCJcclxuICAgICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICAgIC8vIElucHV0IGVsZW1lbnRzXHJcbiAgICAgIGNvbnN0IHVzZXJTdWJtaXRCdG4gPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjdXNlci1yZXZpZXctZWRpdC1zdWJtaXRcIlxyXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgLy8gICAvLyBIaWRkZW4gaW5wdXRzXHJcbiAgICAgIGNvbnN0IG9wZXJhdGlvbkhJbnB1dCA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1vcGVyYXRpb25cIlxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIC8vICAgY29uc3QgdXNlclJhdGluZ0hJbnB1dCA9IHRoaXMudXNlclJldmlld0Zvcm0uZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIC8vICAgICBcInVzZXItcmV2aWV3LXJhdGluZ1wiXHJcbiAgICAgIC8vICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBjb25zdCBkZWxldGVCb29sSElucHV0ID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3VzZXItcmV2aWV3LWRlbGV0ZS1ib29sXCJcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgdGhpcy5fYnVpbGRfdXBkYXRlX2NvbW1lbnRzX2VkaXRfYnRuKFxyXG4gICAgICAgIGVkaXRCdG4sXHJcbiAgICAgICAgY3VycmVudFJldmlld1NlY3RzLFxyXG4gICAgICAgIHVwZGF0ZVJldmlld1NlY3RzXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX3VwZGF0ZV9jb21tZW50c19jYW5jZWxfYnRuKFxyXG4gICAgICAgIGNhbmNlbEJ0bixcclxuICAgICAgICBjdXJyZW50UmV2aWV3U2VjdHMsXHJcbiAgICAgICAgdXBkYXRlUmV2aWV3U2VjdHNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fYnVpbGRfdXBkYXRlX2NvbW1lbnRzX3N1Ym1pdF9idG4oXHJcbiAgICAgICAgdXNlclN1Ym1pdEJ0bixcclxuICAgICAgICBzdWJtaXRCdG4sXHJcbiAgICAgICAgb3BlcmF0aW9uSElucHV0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX2RlbGV0ZV9mdW5jdGlvbnMoXHJcbiAgICAgICAgZGVsZXRlQnRuLFxyXG4gICAgICAgIG9wZXJhdGlvbkhJbnB1dCxcclxuICAgICAgICBjb25maXJtRGVsZXRlQm94LFxyXG4gICAgICAgIGRlbGV0ZUJvb2xISW5wdXQsXHJcbiAgICAgICAgc3VibWl0QnRuXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfdXBkYXRlX2NvbW1lbnRzX2VkaXRfYnRuKFxyXG4gICAgZWRpdEJ0bjogSFRNTEVsZW1lbnQsXHJcbiAgICBjdXJyZW50UmV2aWV3U2VjdHM6IE5vZGVMaXN0LFxyXG4gICAgdXBkYXRlUmV2aWV3U2VjdHM6IE5vZGVMaXN0XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgY29udHJvbHMgZm9yIHRoZSBlZGl0IGJ1dHRvbi5cclxuICAgICAqIE9uIGNsaWNrLCB0aGUgdXNlcidzIHJldmlldyBpbiB0aGUgZm9ybSBvZiBibG9jayB0ZXh0IHdpbGwgaGlkZVxyXG4gICAgICogYW5kIGEgZm9ybSB3aWxsIGJlIHNob3duIHdoZXJlIHRoZSB1c2VyIHdpbGwgYmUgYWJsZSB0byB1cGRhdGVcclxuICAgICAqIHRoZWlyIGNvbW1lbnRzIGFuZCByYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgc2VjdGlvbiA9IDA7IHNlY3Rpb24gPCBjdXJyZW50UmV2aWV3U2VjdHMubGVuZ3RoOyBzZWN0aW9uKyspIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gY3VycmVudFJldmlld1NlY3RzW3NlY3Rpb25dIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRhcmdldEVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IHNlY3Rpb24gPSAwOyBzZWN0aW9uIDwgdXBkYXRlUmV2aWV3U2VjdHMubGVuZ3RoOyBzZWN0aW9uKyspIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gdXBkYXRlUmV2aWV3U2VjdHNbc2VjdGlvbl0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfdXBkYXRlX2NvbW1lbnRzX2NhbmNlbF9idG4oXHJcbiAgICBjYW5jZWxCdG46IEhUTUxFbGVtZW50LFxyXG4gICAgY3VycmVudFJldmlld1NlY3RzOiBOb2RlTGlzdCxcclxuICAgIHVwZGF0ZVJldmlld1NlY3RzOiBOb2RlTGlzdFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGNvbnRyb2xzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbi5cclxuICAgICAqIE9uIGNsaWNrLCB0aGUgdXNlcidzIHJldmlldyBpbiB0aGUgZm9ybSBvZiBibG9jayB0ZXh0IHdpbGwgc2hvd1xyXG4gICAgICogYW5kIHRoZSB0aGUgdXBkYXRlIGNvbW1lbnRzIHNlY3Rpb24gd2lsbCBoaWRlLlxyXG4gICAgICovXHJcblxyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IHNlY3Rpb24gPSAwOyBzZWN0aW9uIDwgY3VycmVudFJldmlld1NlY3RzLmxlbmd0aDsgc2VjdGlvbisrKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IGN1cnJlbnRSZXZpZXdTZWN0c1tzZWN0aW9uXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0YXJnZXRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBzZWN0aW9uID0gMDsgc2VjdGlvbiA8IHVwZGF0ZVJldmlld1NlY3RzLmxlbmd0aDsgc2VjdGlvbisrKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IHVwZGF0ZVJldmlld1NlY3RzW3NlY3Rpb25dIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRhcmdldEVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX2RlbGV0ZV9mdW5jdGlvbnMoXHJcbiAgICBkZWxldGVCdG46IEhUTUxFbGVtZW50LFxyXG4gICAgaE9wZXJhdGlvbklucHV0OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgY29uZmlybURlbGV0ZUJveDogSFRNTERpdkVsZW1lbnQsXHJcbiAgICBoQ29uZmlybURlbGV0ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgc3VibWl0QnRuOiBIVE1MQnV0dG9uRWxlbWVudFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGRlbGV0ZSBmdW5jdGlvbmFsaXR5IHdoZXJlIGEgdXNlciBpcyBhYmxlIHRvIGRlbGV0ZSB0aGVpclxyXG4gICAgICogb3duIGNvbW1lbnRzLlxyXG4gICAgICogV2hlbiBhIHVzZXIgcHJlc3NlcyBkZWxldGUsIHJldmVhbCB0aGUgY29uZmlybSBwb3AgdXBcclxuICAgICAqIChjb25maXJtRGVsZXRlQm94KSB3aGVyZSB0aGUgdXNlciBoYXMgdGhlIG9wdGlvbiB0byBlaXRoZXIgY29uZmlybVxyXG4gICAgICogZGVsZXRlIG9yIGNhbmNlbC5cclxuICAgICAqIElmIHRoZSB1c2VyIHByZXNzZXMgY2FuY2VsIG9yIGFueXdoZXJlIG91dHNpZGUgdGhlIGJveCxcclxuICAgICAqIGhpZGUgdGhlIHBvcCB1cCBhbmQgdGFrZSBubyBmdXJ0aGVyIGFjdGlvbi5cclxuICAgICAqIE90aGVyd2lzZSwgaWYgdGhlIHVzZXIgY29uZmlybXMgdGhleSB3aXNoIHRvIGRlbGV0ZSB0aGUgcG9zdCwgdXBkYXRlXHJcbiAgICAgKiB0aGUgaGlkZGVuIGlucHV0cyAoaE9wZXJhdGlvbklucHV0IGFuZCBoQ29uZmlybURlbGV0ZUlucHV0KSBhbmRcclxuICAgICAqIHN1Ym1pdCB0aGUgZm9ybSAoY2xpY2sgb24gc3VibWl0QnRuKS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIFNob3cgdGhlIHBvcCB1cCBpZiB1c2VyIGNsaWNrcyBvbiBkZWxldGUuXHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgY29uZmlybURlbGV0ZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIaWRlIHRoZSBmb3JtIGlmIHRoZSB1c2VyIHByZXNzZXMgY2FuY2VsIG9uIHRoZSBwb3AgdXAgYm94IG9yIGNsaWNrc1xyXG4gICAgLy8gb3V0c2lkZSB0aGUgYm94LlxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25maXJtRGVsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uZmlybURlbGV0ZUJveFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jb25maXJtLWRlbGV0ZV9faW5uZXItY29udGFpbmVyXCIpXHJcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uZmlybURlbGV0ZUJveFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tZGVsZXRlX19idG5bZm9yPVwiY2FuY2VsXCJdJykhXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbmZpcm1EZWxldGVCb3guY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIElmIHRoZSB1c2VyIGNvbmZpcm1zIHRoZXkgd2FudCB0byBkZWxldGUgdGhlaXIgcmV2aWV3LCBwb3B1bGF0ZVxyXG4gICAgLy8gdGhlIGhpZGRlbiBpbnB1dHMgYWNjb3JkaW5nbHkgYW5kIHN1Ym1pdCB0aGUgZm9ybS5cclxuICAgIGNvbmZpcm1EZWxldGVCb3hcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWRlbGV0ZV9fYnRuW2Zvcj1cImRlbGV0ZVwiXScpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBoT3BlcmF0aW9uSW5wdXQudmFsdWUgPSBcImRlbGV0ZVwiO1xyXG4gICAgICAgIGhDb25maXJtRGVsZXRlSW5wdXQudmFsdWUgPSBcInRydWVcIjtcclxuICAgICAgICBzdWJtaXRCdG4uY2xpY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfdXBkYXRlX2NvbW1lbnRzX3N1Ym1pdF9idG4oXHJcbiAgICB1c2VyU3VibWl0QnRuOiBIVE1MRWxlbWVudCxcclxuICAgIHN1Ym1pdEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBoT3BlcmF0aW9uSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIHVwZGF0ZSBjb21tZW50cy5cclxuICAgICAqIFdoZW4gdGhlIFwiZWRpdCBjb21tZW50c1wiIGZvcm0gZWxlbWVudHMgYXJlIHZpc2libGUsIHRoZSB1c2VyIHdpbGwgaGF2ZVxyXG4gICAgICogdGhlIGFiaWxpdHkgdG8gY2hhbmdlIHRoZSByYXRpbmcsIHVwZGF0ZSB0aGUgdGl0bGUgYW5kIGNvbW1lbnQuXHJcbiAgICAgKiBJZiB0aGUgdXNlciBwcmVzc2VzIHN1Ym1pdCwgY2FwdHVyZSBhbmQgc3VibWl0IHRoZSBmb3JtLlxyXG4gICAgICogVGhpcyBpcyBkb25lIHVzaW5nIHRoZSBuYW1lIGF0dHJpYnV0ZSBvbiB0aGUgaW5wdXQgZWxlbWVudHMuXHJcbiAgICAgKiBGb3IgdGhlIHJhdGluZ3MsIHRoaXMgaXMgaGFuZGxlZCBieSBpdHMgb3duIG1vZHVsZSB3aGVyZSBhIGhpZGRlblxyXG4gICAgICogaW5wdXQgaXMgdXBkYXRlZCB3aXRoIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgdXNlclN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBoT3BlcmF0aW9uSW5wdXQudmFsdWUgPSBcInVwZGF0ZVwiO1xyXG4gICAgICBzdWJtaXRCdG4uY2xpY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDMwLzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBQYWdlcyB3aGVyZSBpbnRlcmFjdGlvbiB3aXRoIGl0ZW1zIGluIHRoZSBiYXNrZXQgbmVlZCB0byBiZSBhY2Nlc3MgYW5kL29yXHJcbi8vIG1vZGlmaWVkLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyAtIE1hbmFnZSB0aGUgYmFza2V0IGl0ZW1zXHJcbi8vIC0gS2VlcCBiYXNrZXQgZGF0YSB3aGVuZXZlciB1c2VyIG1vdmVzIGF3YXkgZnJvbSB0aGUgcGFnZVxyXG4vLyAtIFVwZGF0ZXMgdGhlIGJhc2tldCBpdGVtcyBjb3VudFxyXG4vL1xyXG4vLyBERVNDUklQVElPTjpcclxuLy8gLS0tLS0tLS0tLS0tXHJcbi8vIExldmVyYWdlcyB0aGUgcG93ZXIgb2YgbG9jYWwgc3RvcmFnZSB0byBrZWVwIGEgdHJhY2sgb2YgdGhlIGJhc2tldC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBCYXNrZXRTdGF0ZSB7XHJcbiAgdG90YWxJdGVtczogc3RyaW5nIHwgbnVsbCB8IG51bWJlciA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcclxuICAgIFwidG90YWxCYXNrZXRTaXplXCJcclxuICApO1xyXG4gIGl0ZW1zOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYXNrZXRJdGVtc1wiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfY291bnRlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfcmVhZF9pdGVtcygpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSB0b3RhbCBhbmQgYmFza2V0IHNpemUgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgY29udmVydHNcclxuICAgICAqIHRoZSB2YWx1ZXMgaW50byB0eXBlcyB0aGF0IGNhbiBiZSB3b3JrZWQgd2l0aC5cclxuICAgICAqL1xyXG4gICAgaWYgKCF0aGlzLnRvdGFsSXRlbXMpIHtcclxuICAgICAgdGhpcy50b3RhbEl0ZW1zID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE51bWJlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXRlbXMpIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IEpTT04ucGFyc2UodGhpcy5pdGVtcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0ge307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9zZXRfaXRlbXMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBsb2NhbCBzdG9yYWdlIGl0ZW1zIGludG8gc3RyaW5ncyBhbmQgc2F2ZXMgdGhlbSBvbnRvIHRoZVxyXG4gICAgICogbG9jYWwgc3RvcmFnZS5cclxuICAgICAqIFVwZGF0ZXMgdGhlIGJhc2tldCBpdGVtcyBjb3VudGVyLlxyXG4gICAgICovXHJcblxyXG4gICAgaWYgKCF0aGlzLnRvdGFsSXRlbXMpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG90YWxCYXNrZXRTaXplXCIsIFwiMFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICBcInRvdGFsQmFza2V0U2l6ZVwiLFxyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcy50b1N0cmluZygpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhc2tldEl0ZW1zXCIsIFwie31cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0gSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhc2tldEl0ZW1zXCIsIHRoaXMuaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgYmFza2V0XHJcbiAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfY291bnRlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYWRkX2l0ZW0oaWQ6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgLyoqIE1ldGhvZCBmb3IgYWRkaW5nIGl0ZW1zIGludG8gdGhlIGJhc2tldC4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuXHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIHRoaXMudG90YWxJdGVtcyArPSBxdWFudGl0eTtcclxuXHJcbiAgICBpZiAodGhpcy5pdGVtc1tpZF0pIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gKz0gcXVhbnRpdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSA9IHF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICByZW1vdmVfaXRlbShpZDogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICAvKiogTWV0aG9kIGZvciByZW1vdmluZyBpdGVtcyBmcm9tIHRoZSBiYXNrZXQuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcblxyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICBpZiAodGhpcy50b3RhbEl0ZW1zID4gMCkge1xyXG4gICAgICB0aGlzLnRvdGFsSXRlbXMgLT0gcXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfY291bnRlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zW2lkXSkge1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSA9IE51bWJlcih0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdIC09IHF1YW50aXR5O1xyXG4gICAgICBpZiAodGhpcy5pdGVtc1tpZF0gPT0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLml0ZW1zW2lkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcmVtb3ZlX2VudGlyZV9pdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgIC8qKiBSZW1vdmVzIGFuZCBlbnRpcmUgaXRlbS4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpIC0gTnVtYmVyKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgIGRlbGV0ZSB0aGlzLml0ZW1zW2lkXTtcclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgdXBkYXRlX2Jhc2tldF9jb3VudGVyKG5ld051bTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgLyoqIFVwZGF0ZXMgdGhlIGJhc2tldCBjb3VudGVyIG51bWJlciAqL1xyXG4gICAgY29uc3QgYmFza2V0Q291bnRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiYmFza2V0LXRvdGFsLWl0ZW1zXCJcclxuICAgICkgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgIGlmIChuZXdOdW0pIHtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0udGV4dENvbnRlbnQgPSBuZXdOdW0udG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHVwZGF0ZV9zaW5nbGVfaXRlbShwcm9kdWN0SWQ6IHN0cmluZyB8IG51bWJlciwgbmV3TnVtOiBudW1iZXIpIHtcclxuICAgIC8qKiBVcGRhdGVzIHRoZSBsb2NhbCBzdG9yYWdlIGZvciBhIHNpbmdsZSBpdGVtIHdpdGggYSBuZXcgcXVhbnRpdHkuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcbiAgICBjb25zdCBwcmV2VmFsdWUgPSBOdW1iZXIodGhpcy5pdGVtc1twcm9kdWN0SWRdKVxyXG4gICAgdGhpcy5pdGVtc1twcm9kdWN0SWRdID0gbmV3TnVtO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcykgKyBuZXdOdW0gLSBwcmV2VmFsdWU7XHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwOC8wMS8yMDIwMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFV0aWxpdHkgY2xhc3MgdG8gcmVmb3JtYXQgbnVtYmVyLlxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE51bWJlckZvcm1hdCB7XHJcbiAgLyoqICBVdGlsaXR5IGNsYXNzIHRvIGNvbnZlcnQgbnVtYmVycyB0byBkaWZmZXJlbnQgZm9ybWF0cy4gKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIHRob3VzYW5kX3NlcGFyYXRlZF8yZHAobnVtOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIC8qKiBDb3ZlcnRzIGEgbnVtYmVyIHRvIGEgdGhvdXNhbmQgc2VwYXJhdGVkIHN0cmluZyB0byAyLmQucCAqL1xyXG4gICAgcmV0dXJuIE51bWJlcihudW0pXHJcbiAgICAgIC50b0ZpeGVkKDIpXHJcbiAgICAgIC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgdGhvdXNhbmRfc2VwX3RvX2Zsb2F0KG51bTogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgICAvKipcclxuICAgICAgICogQ29udmVydHMgYSB0aG91c2FuZCBzZXBhcmF0ZWQgZmxvYXQgdG8gYSBmbG9hdC4gSWYgdGhlIGFyZ3VtZW50ID0gbnVsbFxyXG4gICAgICAgKiB0aGVuIDAgd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAgICovXHJcbiAgICBpZiAoIW51bSkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIobnVtLnJlcGxhY2UoXCIsXCIsIFwiXCIpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwNy8wMS8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gVXRpbGl0eSBwcm92aWRpbmcgdmFsaWRhdGlvbiBvcHRpb25zLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIEEgdXRpbGl0aWVzIGNsYXNzIGNvbnRhaW5pbmcgc3RhdGljIG1ldGhvZCB3aGljaCBydW4gc29tZSBmb3JtIG9mXHJcbiAgICogdmFsaWRhdGlvbi5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIGNoZWNrX2lmX3Bvc2l0aXZlX2ludChpdGVtOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgLyoqIENoZWNrcyBpZiBhbiBpdGVtIGlzIGEgcG9zaXRpdmUgaW50ZWdlciAqL1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpdGVtICE9ICdudW1iZXInKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfSBlbHNlIGlmIChpdGVtID49IDAgJiYgaXRlbSA9PT0gTWF0aC5yb3VuZChpdGVtKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXQgdGhpcyBzdGFnZSwgdGhlIG9ubHkgYnJhbmNoIHN1Z2dlc3RzIHRoYXQgdGhlIG51bWJlciBpcyA8IDAuXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9