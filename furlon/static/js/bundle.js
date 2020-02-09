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

/***/ "./furlon/static/ts/components/new_review.ts":
/*!***************************************************!*\
  !*** ./furlon/static/ts/components/new_review.ts ***!
  \***************************************************/
/*! exports provided: NewReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReview", function() { return NewReview; });
var NewReview = (function () {
    function NewReview() {
        this.reviewBtns = document.querySelectorAll("[newReviewProduct]");
        this.newReviewCont = document.getElementById("nev-review-pop-up");
        this.productIdInput = this.newReviewCont.querySelector("#new-review-product-id");
        this.storeIdInput = this.newReviewCont.querySelector("#new-review-store-id");
        for (var rb = 0; rb < this.reviewBtns.length; rb++) {
            this.setup_btn_keybinder(this.reviewBtns[rb]);
        }
        this.close_pop_up();
    }
    NewReview.prototype.setup_btn_keybinder = function (reviewBtn) {
        var _this = this;
        reviewBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            _this.newReviewCont.classList.remove("hide");
            _this.productIdInput.value = reviewBtn.getAttribute("newReviewProduct");
            _this.storeIdInput.value = reviewBtn.getAttribute("newReviewStore");
        });
    };
    NewReview.prototype.close_pop_up = function () {
        var _this = this;
        var _a;
        this.newReviewCont
            .querySelector('.new-review__btn[for="cancel"]')
            .addEventListener("click", function () {
            _this.newReviewCont.classList.add("hide");
            _this.productIdInput.value = "";
        });
        document.body.addEventListener("click", function () {
            _this.newReviewCont.classList.add("hide");
        });
        (_a = this.newReviewCont
            .querySelector(".new-review__form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    };
    return NewReview;
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
        if (!href.includes('/search-results/?')) {
            href = href.replace("/search-results/", "/search-results/?search=");
        }
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
/* harmony import */ var _components_new_review__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/new_review */ "./furlon/static/ts/components/new_review.ts");
/* harmony import */ var _state_basket_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/basket-items */ "./furlon/static/ts/state/basket-items.ts");
/* harmony import */ var _pages_products_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/products/product */ "./furlon/static/ts/pages/products/product.ts");
/* harmony import */ var _pages_products_products_user_review__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/products/products_user_review */ "./furlon/static/ts/pages/products/products_user_review.ts");
/* harmony import */ var _pages_basket_basket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/basket/basket */ "./furlon/static/ts/pages/basket/basket.ts");













new _components_navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]();
new _state_basket_items__WEBPACK_IMPORTED_MODULE_9__["BasketState"]();
new _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"]();
new _components_search_filters__WEBPACK_IMPORTED_MODULE_3__["SearchFilters"]();
new _components_pagination__WEBPACK_IMPORTED_MODULE_5__["Pagination"]();
var CURRENT_URL = window.location.href;
if (CURRENT_URL.search(/\/products\/[0-9]{1,}/) != -1) {
    new _pages_products_product__WEBPACK_IMPORTED_MODULE_10__["ExtendProductPage"]();
    new _components_quantity__WEBPACK_IMPORTED_MODULE_2__["QuantityComponent"]();
    new _components_carousel_imgs__WEBPACK_IMPORTED_MODULE_6__["CarouselImgs"]();
    _components_ratings__WEBPACK_IMPORTED_MODULE_7__["Ratings"].getInstance();
    new _pages_products_products_user_review__WEBPACK_IMPORTED_MODULE_11__["ProductUserReview"]();
}
else if (CURRENT_URL.includes("/basket/")) {
    new _pages_basket_basket__WEBPACK_IMPORTED_MODULE_12__["BasketPage"]();
}
else if (CURRENT_URL.includes("user/register") ||
    CURRENT_URL.includes("user/change-password")) {
    new _components_password_validation__WEBPACK_IMPORTED_MODULE_4__["PasswordCheck"]();
}
else if (CURRENT_URL.includes("/order-history/")) {
    new _components_new_review__WEBPACK_IMPORTED_MODULE_8__["NewReview"]();
    _components_ratings__WEBPACK_IMPORTED_MODULE_7__["Ratings"].getInstance();
}
else if (CURRENT_URL.includes("/products/reviews/")) {
    _components_ratings__WEBPACK_IMPORTED_MODULE_7__["Ratings"].getInstance();
    new _pages_products_products_user_review__WEBPACK_IMPORTED_MODULE_11__["ProductUserReview"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25ld19yZXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3Bhc3N3b3JkLXZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9yYXRpbmdzLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzX3VzZXJfcmV2aWV3LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvc3RhdGUvYmFza2V0LWl0ZW1zLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvdXRpbGl0aWVzL251bWJlcl9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy91dGlsaXRpZXMvdmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtJQVdFO1FBSEEsZUFBVSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBYXZFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUUvQyxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQ2hFLHFDQUFxQyxDQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLENB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QUMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxPQUFPLElBQUk7U0FDZDtRQUdELE9BQU8sS0FBSztJQUNoQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZnVybG9uL3N0YXRpYy9qc1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Z1cmxvbi9zdGF0aWMvdHMvbWFpbi50c1wiKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjkvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gQ2Fyb3VzZWwgc3R5bGVkIGltYWdlIHNsaWRlIHNob3dzLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBPbiBjbGljayBvZiBhIGltYWdlIHRodW1ibmFpbHMgb3IgdGhlIGN1cnJlbnQgaW1hZ2UsIHRoZSBjdXJyZW50IGltYWdlIHNob3VsZFxyXG4vLyBjaGFuZ2UgYWNjb3JkaW5nbHkuXHJcbi8vXHJcbi8vIEFuaW1hdGlvbnMgYXJlIGhhbmRsZWQgdGhyb3VnaCB0aGUgQ1NTLCB0aGUgSlMgc2V0cyB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvXHJcbi8vIGNoYW5nZSB0aGUgYXR0cmlidXRlcyBvZiB0aGUgZGlzcGxheSBpbWFnZXMgYWNjb3JkaW5nbHkgc28gYXMgdG8gZGlzcGxheSB0aGVcclxuLy8gc2VsZWN0ZWQgaW1hZ2UuXHJcbi8vXHJcbi8vIE9uIGVhY2ggdGh1bWJuYWlsLCBhdCBhbiBhdHRyaWJ1dGUgd2lsbCB3aWxsIGVxdWFsIHRvIHRoZSBudW1iZXIgdG90YWxcclxuLy8gdGh1bWJuYWlscywgdGhpcyB3aWxsIGVuYWJsZSB0aGUgQ1NTIHRvIGFkanVzdCBjZXJ0YWluIENTUyBhdHRyaWJ1dGVzXHJcbi8vIGFjY29yZGluZ2x5LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW1ncyB7XHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgY2Fyb3VzZWwgaW1hZ2UgaW1hZ2VzIHN1Y2ggdGhhdCB3aGVuXHJcbiAgICogYSB0aHVtYm5haWwgb3IgdGhlIG1haW4gcGljdHVyZSBpcyBjbGlja2VkIG9uLCB0aGUgaW1hZ2Ugd2lsbCBjaGFuZ2UuXHJcbiAgICogVGhlIGFuaW1hdGlvbiBhbmQgcG9zaXRpb25pbmcgaXMgY29udHJvbGxlZCB2aWEgdGhlIENTUywgdGhlIGNsYXNzIHdpbGxcclxuICAgKiBhZGQgYW5kIHJlbW92ZSBhdHRyaWJ1dGVzIGZyb20gdGhlIGVsZW1lbnRzLCBzbyB0aGF0IHRoZSBhbmltYXRpb25zIGNhblxyXG4gICAqIGJlIHRyaWdnZXJlZC5cclxuICAgKi9cclxuICBjb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsLWNvbnRhaW5lcl9fbWFpblwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2NhdGVzIHRoZSBlbGVtZW50cyB3aGVyZSBhbiBldmVudCBsaXN0ZW5lcnMgbmVlZCB0byBiZSBhZGRlZCBhbmRcclxuICAgICAqIGNhbGxzIG1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBkZXBlbmRpbmcgb24gd2hhdCB0aGUgZWxlbWVudFxyXG4gICAgICogaXMuXHJcbiAgICAgKlxyXG4gICAgICogRmluYWxseSwgd2lsbCBjYWxsIGEgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgdGh1bWJuYWlscyB0byBjb250YWluXHJcbiAgICAgKiBpbmZvcm1hdGlvbiBvbiBob3cgbWFueSB0aHVtYm5haWxzIHRoZXJlIGFyZS4gVGhpcyB3aWxsIGVuYWJsZSB0b1xyXG4gICAgICogYWRqdXN0IGNlcnRhaW4gQ1NTIGF0dHJpYnV0ZXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIC8vIERPTSBlbGVtZW50cyBmb3IgZXZlbnQgbGlzdGVuZXJzIHRvIGJlIGFkZGVkLlxyXG4gICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2NdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvblwiXHJcbiAgICAgIClbY107XHJcbiAgICAgIGNvbnN0IGRpc3BsYXlJbWFnZXMgPSBkaXNwbGF5Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktc2VjdGlvbl9faW1nXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGlmIG9ubHkgb25lIGRpc3BsYXlJbWFnZSwgdGhlbiB0aGlzIHN1Z2dlc3RzIHRoYXQgb25seSBhXHJcbiAgICAgIC8vIHNob3djYXNlIGltYWdlIGV4aXN0cy5cclxuICAgICAgaWYgKGRpc3BsYXlJbWFnZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGltZ1RodW1ic0NvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktY29udHJvbHNcIlxyXG4gICAgICAgIClbMF07XHJcbiAgICAgICAgY29uc3QgaW1nVGh1bWJzID0gaW1nVGh1bWJzQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1jb250cm9sc19fY29udHJvbFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gIE1ldGhvZHMgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBlYWNoIERPTSBlbGVtZW50LlxyXG4gICAgICAgIHRoaXMub25fY2xpY2tpbmdfdGh1bWJzKGRpc3BsYXlJbWFnZXMsIGltZ1RodW1icyk7XHJcbiAgICAgICAgdGhpcy5vbl9jbGlja2luZ19kaXNwbGF5X2ltZyhkaXNwbGF5SW1hZ2VzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBTZXRzIGFuIGF0dHJpYnV0ZSBvbiBlYWNoIHRodW1ibmFpbCB0byB0aGUgdG90YWwgbnVtYmVyIG9mIHRodW1ibmFpbHMuXHJcbiAgICAgIHRoaXMudXBkYXRlX3RvdGFsX3RodW1icyhcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzX19jb250cm9sXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBvbl9jbGlja2luZ190aHVtYnMoXHJcbiAgICBkaXNwbGF5SW1hZ2VzOiBIVE1MQ29sbGVjdGlvbixcclxuICAgIGltZ1RodW1iczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogRWFjaCBpbWFnZSB0aHVtYm5haWwgZWxlbWVudCBoYXMgYSBcImZvclwiIGF0dHJpYnV0ZSB3aGljaCBpbmRpY2F0ZXNcclxuICAgICAqIHdoaWNoIGVsZW1lbnQgb24gdGhlIGRpc3BsYXkgc2VjdGlvbiBpdCByZXByZXNlbnRzLiBUaGUgZGlzcGxheSBpbWFnZVxyXG4gICAgICogZWxlbWVudCBoYXMgYW4gXCJpbWdcIiBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBPbiBjbGlja2luZyBvbiBhIGltYWdlIHRodW1ibmFpbCwgdGhlIGRpc3BsYXkgYXR0cmlidXRlJ3MgcG9zaXRpb25cclxuICAgICAqIGF0dHJpYnV0ZSB3aWxsIGJlY29tZSBcInNob3dcIiB3aGVyZSB0aGUgc2FtZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIGFsbFxyXG4gICAgICogb3RoZXIgaW1hZ2VzIHdpbGwgYmVjb21lIFwiaGlkZVwiLlxyXG4gICAgICpcclxuICAgICAqIE5PVEU6IHRoZSBpbml0aWFsIGltYWdlIHdpbGwgaGF2ZSBwb3NpdGlvbj1cImluaXRcIiBpbml0aWFsbHkgc28gYXMgdG9cclxuICAgICAqIGF2b2lkIGFueSBhbmltYXRpb25zIG9uIHN0YXJ0LiBJZiB0aGlzIGltYWdlIHRodW1ibmFpbCBpcyBjbGlja2VkLCBkb1xyXG4gICAgICogbm90aGluZy5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgdGh1bWIgPSAwOyB0aHVtYiA8IGltZ1RodW1icy5sZW5ndGg7IHRodW1iKyspIHtcclxuICAgICAgaW1nVGh1bWJzW3RodW1iXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzRm9yID0gaW1nVGh1bWJzW3RodW1iXS5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcImltZ1wiKSA9PT0gY29udHJvbHNGb3IpIHtcclxuICAgICAgICAgICAgaWYgKGRpc3BsYXlJbWFnZXNbaW1dLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpICE9IFwiaW5pdFwiKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcImhpZGVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG9uX2NsaWNraW5nX2Rpc3BsYXlfaW1nKFxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGljayBvZiB0aGUgY3VycmVudCBkaXNwbGF5IGltYWdlLCBoaWRlIHRoZSBpbWFnZSBhbmQgc2hvdyB0aGVcclxuICAgICAqIG5leHQuXHJcbiAgICAgKiBBbmltYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgY3NzLiBGb3IgYW5pbWF0aW9uIHRvIHdvcmssIG9uIGNsaWNrLFxyXG4gICAgICogXCJoaWRlXCIgaXMgc2V0IHRvIHRoZSBhdHRyaWJ1dGUgcG9zaXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UsIGFuZCBvblxyXG4gICAgICogdGhlIG5leHQgaW1hZ2UsIHRoZSBcInNob3dcIiBpcyBzZXQgdG8gdGhlIHBvc2l0aW9uIGF0dHJpYnV0ZS5cclxuICAgICAqL1xyXG4gICAgZGlzcGxheUltYWdlczogSFRNTENvbGxlY3Rpb25cclxuICApIHtcclxuICAgIGZvciAobGV0IGltID0gMDsgaW0gPCBkaXNwbGF5SW1hZ2VzLmxlbmd0aDsgaW0rKykge1xyXG4gICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGltID09PSBkaXNwbGF5SW1hZ2VzLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIGRpc3BsYXlJbWFnZXNbMF0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltICsgMV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSB1cGRhdGVfdG90YWxfdGh1bWJzKHRodW1iczogSFRNTENvbGxlY3Rpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhbiBhdHRyaWJ1dGUgb24gZWFjaCB0aHVtYm5haWwgd2hpY2ggaXMgdGhlIHRvdGFsIG51bWJlciBvZlxyXG4gICAgICogdGh1bWJuYWlscyB0aGVyZSBhcmUuIFRoaXMgd2lsbCBhbGxvdyB0aGUgQ1NTIHRvIHVwZGF0ZSBzdHlsaW5nIGJhc2VkXHJcbiAgICAgKiBvbiB0aGUgbnVtYmVyIG9mIHRodW1ibmFpbHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRvdGFsID0gdGh1bWJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgdG90YWw7IHQrKykge1xyXG4gICAgICB0aHVtYnNbdF0uc2V0QXR0cmlidXRlKFwidG90YWx0aHVtYnNcIiwgdG90YWwudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyB0aGUgc2FtZSBvbiBvdGhlciBlbGVtZW50cyB3aGVyZSB0aGlzIHdvdWxkIGJlIG5lZWRlZC5cclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXCJ0b3RhbHRodW1ic1wiLCB0b3RhbC50b1N0cmluZygpKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICAgIHRodW1ic1swXS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwidG90YWx0aHVtYnNcIixcclxuICAgICAgdG90YWwudG9TdHJpbmcoKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAxNi8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBDdXN0b20gZHJvcGRvd24gbWVudVxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTOlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBfZHJvcGRvd24tbWVudS5zY3NzXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIFByb3ZpZGVzIGZ1bmN0aW9ucyBmb3IgYSBjdXN0b20gZHJvcGRvd24gbWVudS5cclxuLy8gVGhlIGZ1bmN0aW9ucyB3aWxsIHdvcmsgZm9yIGRyb3Bkb3duIG1lbnVzIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4vL1xyXG4vLyA8Zm9ybT5cclxuLy8gICAuLi5cclxuLy8gICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCI+XHJcbi8vICAgICAgIDxzcGFuPkNvbG91cjwvc3Bhbj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIj5cclxuLy8gICAgICAgPGxhYmVsIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIiBmb3I9XCJjb2xvdXItcmVkXCI+XHJcbi8vICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCJcclxuLy8gICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4vLyAgICAgICAgIG5hbWU9XCJmLWNvbG91clwiXHJcbi8vICAgICAgICAgaWQ9Y29sb3VyLXJlZFxyXG4vLyAgICAgICAgIHZhbHVlPVwicmVkXCJcclxuLy8gICAgICAgPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgLi4uXHJcbi8vIDwvZm9ybT5cclxuXHJcbi8vIENTUyBzaG91bGQgYmUgc2V0IHVwIHRvIGhpZGUgdGhlIGlucHV0IHRhZ3MgYW5kIHJlbHkgb24gdGhlIGxhYmVscyB0byBzZWxlY3RcclxuLy8gdGhlIHJhZGlvIGJ1dHRvbi5cclxuLy9cclxuLy8gRlVOQ1RJT05TOlxyXG4vLyAtLS0tLS0tLS0tXHJcbi8vICAtIFdoZW4gdXNlciBjbGlja3Mgb24gdGhlIGRyb3Bkb3duIG1lbnUsIGV4cGFuZCB0aGUgbGlzdCBvZiBvcHRpb25zLlxyXG4vLyAgLSBXaGVuIHVzZXIgcHJlc3NlcyBhbiBvcHRpb24sIGhpZ2hsaWdodCB0aGF0IG9wdGlvbiwgdXBkYXRlIHRoZVxyXG4vLyAgICBidXR0b24ncyBpbm5lciB0ZXh0IHRvIG1hdGNoIHRoYXQgb2ZmIHRoZSBidXR0b24gdGV4dC5cclxuLy8gIC0gV2hlbiB1c2VyIGNsaWNrcyBvdXRzaWRlLCBjbG9zZSBhbGwgbWVudXMuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEcm9wZG93bk1lbnUgQ2xhc3NcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTWVudSB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGN1c3RvbSBkcm9wZG93biBtZW51cy5cclxuICAgKiBUaGVzZSBpbmNsdWRlOlxyXG4gICAqICAtIFRvZ2dsZSBvcGVuL2Nsb3NlIG9mIHRoZSBtZW51IG9uIGNsaWNraW5nIHRoZSBidXR0b25cclxuICAgKiAgLSBDbG9zZSB0aGUgbWVudSBvbiBjbGlja2luZyBvdXRzaWRlXHJcbiAgICogIC0gT24gc2VsZWN0aW5nIGFuIGl0ZW06XHJcbiAgICogICAgLSBIaWdobGlnaHQgdGhhdCBpdGVtXHJcbiAgICogICAgLSBDaGFuZ2UgdGhlIHRleHQgb2YgdGhlIGJ1dHRvbiB0aGUgdGV4dCBvZiB0aGUgb3B0aW9uIHNlbGVjdGVkXHJcbiAgICpcclxuICAgKiBOb3RlOiB0aGlzIGNsYXNzIHdpbGwgbm90IGhhbmRsZSBBUEkgY2FsbHMuXHJcbiAgICovXHJcblxyXG4gIGRkTWVudXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJkcm9wZG93bi1tZW51XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBBZGRzIGZ1bmN0aW9uIHRvIGNsb3NlIGFsbCBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgZWxlbWVudFxyXG4gICAgdGhpcy5jbG9zZV9tZW51KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIGZ1bmN0aW9ucyBmb3IgYWxsIG1lbnUgZWxlbWVudHMuXHJcbiAgICBmb3IgKGxldCBtZW51SWQgPSAwOyBtZW51SWQgPCB0aGlzLmRkTWVudXMubGVuZ3RoOyBtZW51SWQrKykge1xyXG4gICAgICB0aGlzLmJ1aWxkX21lbnUodGhpcy5kZE1lbnVzW21lbnVJZF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY2xvc2VfbWVudSgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIGFsbCBtZW51cyB3aGVuIGNsaWNrZWQgb3V0c2lkZSBvbiBhbm90aGVyIGZpbHRlciBidXR0b24uXHJcbiAgICAgKiBBbHNvIGNhcnJpZXMgZnVuY3Rpb24gdG8gY2xvc2UgdGhlIG5hdi1tZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IGZpbHRlckJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX3NlbGVjdGVkXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBvcHRpb25MaXN0cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgb3B0aW9uTGlzdHNbaWR4XS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmF2U3ViTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkQnRuID0gZmlsdGVyQnRuc1tpXTtcclxuXHJcbiAgICAgIHNlbGVjdGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2xvc2UgbmF2IG1lbnVzXHJcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbmF2U3ViTWVudXMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgbmF2U3ViTWVudXNbaWR4XS5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGFsbCBvdGhlciBmaWx0ZXJzIGxpc3RzXHJcbiAgICAgICAgLy8gRWFjaCBidXR0b24gYW5kIHRoZWlyIGNoaWxkIGVsZW1lbnRzIGNvbnRhaW4gdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFwiZmlsdGVyLWZvclwiLlxyXG4gICAgICAgIC8vIExpa2V3aXNlLCBlYWNoIGRyb3Bkb3duIG9wdGlvbiBkaXYgY29udGFpbiB0aGUgc2FtZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBUaGlzIGNoZWNrcyBmb3IgdGhlIGJ1dHRvbiBwcmVzc2VkLCBpZiBpdHMgXCJmaWx0ZXItZm9yXCIgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gbWF0Y2hlcyB0aGF0IG9mIGl0cyBkcm9wZG93biBvcHRpb25zLiBpZiBub3QsIHRoZW4gY2xvc2UuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWx0ZXJCdG5zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gZmlsdGVyQnRuc1tqXTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW0uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKSAhPVxyXG4gICAgICAgICAgICBzZWxlY3RlZEJ0bi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gSnVzdCBpbmNhc2UgdGhlIHN0cnVjdHVyZSBjaGFuZ2VzLCBhbmQgdGhlIG5leHQgc2libGluZyBpbnMgbm90IHRoZSBvcHRpb25zIGxpc3RcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nIS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmc/LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYnVpbGRfbWVudShkZE1lbnU6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBmdW5jdGlvbmFsaXR5IG9udG8gZWFjaCBkcm9wZG93biBtZW51LlxyXG4gICAgICovXHJcbiAgICBjb25zdCBvcHRpb25zQnRuID0gZGRNZW51LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIlxyXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0Q29udGFpbmVyID0gZGRNZW51LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RJdGVtcyA9IG9wdGlvbnNMaXN0Q29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxMYWJlbEVsZW1lbnQ+O1xyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIG9uIHRoZSBkcm9wZG93biBidXR0b24gd2hpY2ggd2lsbCBvcGVuL2Nsb3NlIHRoZSBvcHRpb25zXHJcbiAgICAvLyBsaXN0LlxyXG4gICAgb3B0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgb3B0aW9uc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBzZXR1cCBmb3IgZWFjaCBvcHRpb25cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBvcHRpb25JdGVyID0gMDtcclxuICAgICAgb3B0aW9uSXRlciA8IG9wdGlvbnNMaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICBvcHRpb25JdGVyKytcclxuICAgICkge1xyXG4gICAgICBsZXQgbGlzdEl0ZW0gPSBvcHRpb25zTGlzdEl0ZW1zW29wdGlvbkl0ZXJdO1xyXG4gICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaGlnaGxpZ2h0IGZyb20gYWxsIGxpc3QgaXRlbXMgYW5kIHJlYXBwbHkgdG8gdGhlIHNlbGVjdGVkXHJcbiAgICAgICAgLy8gbGlzdCBpdGVtIG9ubHlcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgbGV0IG9wdGlvblN1Ykl0ZXIgPSAwO1xyXG4gICAgICAgICAgb3B0aW9uU3ViSXRlciA8IG9wdGlvbnNMaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgb3B0aW9uU3ViSXRlcisrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBvcHRpb25zTGlzdEl0ZW1zW29wdGlvblN1Ykl0ZXJdLmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWwtLXNlbGVjdGVkXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbC0tc2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uIHRvIHRoZSB0ZXh0IG9mIHRoZSBzZWxlY3RlZCBpdGVtXHJcbiAgICAgICAgb3B0aW9uc0J0bi5pbm5lclRleHQgPSBsaXN0SXRlbS5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0IHZhbHVlc1xyXG4gICAgICAgIC8vIENsb3NlIHRoZSBtZW51XHJcbiAgICAgICAgb3B0aW9uc0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDEvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIE5hdmlnYXRpb24gYmFyLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIDEuIENvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGUgbmF2aWdhdGlvbiBzdWItbWVudXMgYW5kIGNvbnRyb2xzIGhvdyBhbmQgd2hlblxyXG4vLyAgICBpdCBleHBhbmRzIGFuZCBjbG9zZXMuXHJcbi8vIDIuIENvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGUgYmFza2V0IGFuZCBzbyBzbyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZVxyXG4vLyAgICBiYXNrZXQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZ1bmN0aW9ucyBmb3IgdGhlIG5hdmlnYXRpb24uXHJcbiAgICogVGhlc2UgaW5jbHVkZTpcclxuICAgKiAgLSBDbG9zaW5nIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZS5cclxuICAgKiAgLSBPcGVuaW5nL0Nsb3NpbmcgbWVudXMgb24gY2xpY2tcclxuICAgKi9cclxuICBtZW51QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZfX29wdGlvbl9fYnRuXCIpO1xyXG4gIG5hdlN1Yk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiKTtcclxuICB0b2dnbGVTaG93TmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3RvZ2dsZV9fYnRuXCIpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBBZGRzIGZ1bmN0aW9uIHRvIGNsb3NlIGFsbCBtZW51cyB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgZWxlbWVudFxyXG4gICAgdGhpcy5jbG9zZV9tZW51KCk7XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIGZ1bmN0aW9ucyBmb3IgYWxsIG1lbnUgZWxlbWVudHMuXHJcbiAgICBmb3IgKGNvbnN0IG1lbnVCdG4gb2YgdGhpcy5tZW51QnRucyBhcyBhbnkpIHtcclxuICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zdWJNZW51Q3RybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgdGhlIHJlc3BvbnNpdmUgZnVuY3Rpb25zIGZvciB0aGUgdG9nZ2xlIGJ1dHRvbnMuXHJcbiAgICB0aGlzLm5hdl90b2dnbGVfYnRuKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjbG9zZV9tZW51KCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjbG9zZXMgYWxsIG1lbnVzIHdoZW4gY2xpY2tlZCBvdXRzaWRlIHByIGFub3RoZXIgbmF2IG1lbnUuXHJcbiAgICAgKiBBbHNvIHdpbGwgY2xvc2UgYWxsIGZpbHRlciBtZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIENsb3NlIGFsbCBuYXYtbWVudXMgb24gY2xpY2sgb3V0c2lkZVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgdGhpcy5uYXZTdWJNZW51cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgdGhpcy5uYXZTdWJNZW51c1tpZHhdLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25MaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lbnVCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1lbnVCdG4gPSB0aGlzLm1lbnVCdG5zW2ldO1xyXG5cclxuICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIENsb3NlIGFsbCBkcm9wZG93bi1tZW51c1xyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uTGlzdCBvZiBvcHRpb25MaXN0cyBhcyBhbnkpIHtcclxuICAgICAgICAgIG9wdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnMtLWhpZGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG9zZSBvdGhlciBuYXZpZ2F0aW9uIG1lbnVzXHJcbiAgICAgICAgLy8gRWFjaCBidXR0b24gYW5kIHRoZWlyIGNoaWxkIGVsZW1lbnRzIHdpbGwgY29udGFpbiB0aGUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gXCJmaWx0ZXItZm9yXCIuXHJcbiAgICAgICAgLy8gTGlrZXdpc2UsIGVhY2ggZHJvcGRvd24gbWVudSBjb250YWluIHRoZSBzYW1lIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFRoaXMgY2hlY2tzIGZvciB0aGUgYnV0dG9uIHByZXNzZWQsIGlmIGl0cyBcImZpbHRlci1mb3JcIiBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBtYXRjaGVzIHRoYXQgb2YgaXRzIGRyb3Bkb3duIG9wdGlvbnMuIGlmIG5vdCwgdGhlbiBjbG9zZS5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWVudUJ0bnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSB0aGlzLm1lbnVCdG5zW2pdO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbS5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpICE9XHJcbiAgICAgICAgICAgIG1lbnVCdG4uZ2V0QXR0cmlidXRlKFwiZmlsdGVyLWZvclwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZz8uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0c1wiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVwbGFjZShcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdWJNZW51Q3RybChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aWxsIGhhbmRsZSBjbGljayBldmVudHMgb24gdGhlIG5hdmlnYXRpb24gZm9yIGV4cGFuZGluZ1xyXG4gICAgICogYW5kIGNvbGxhcHNpbmcgdGhlIHN1Yi1tZW51cy5cclxuICAgICAqL1xyXG5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnRzXHJcbiAgICB0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdGFyZ2V0Q2xhc3NlcyA9IHRhcmdldC5jbGFzc0xpc3Q7XHJcbiAgICBsZXQgc3ViTWVudTogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHRhcmdldENsYXNzZXMuY29udGFpbnMoXCJuYXYtc3ViLXByb2R1Y3RzXCIpKSB7XHJcbiAgICAgIHN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLm5hdi1zdWItcHJvZHVjdHNcIlxyXG4gICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXRDbGFzc2VzLmNvbnRhaW5zKFwibmF2LXN1Yi1yb29tc1wiKSkge1xyXG4gICAgICBzdWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5uYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy5uYXYtc3ViLXJvb21zXCJcclxuICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IFwiTmF2aWdhdGlvbiBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBleHBhbmRlZCA9IHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChleHBhbmRlZCkge1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIik7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiKTtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBuYXZfdG9nZ2xlX2J0bigpIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgbmF2aWdhdGlvbiB0b2dnbGUgYnV0dG9uIC0gYSByZXNwb25zaXZlXHJcbiAgICAgKiBmZWF0dXJlIHZpZXdhYmxlIHdoZW4gdGhlIHNjcmVlbiB3aWR0aCBpcyBzbWFsbCBlbm91Z2guXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCBvcHRpb25zTGlzdCA9IFtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fb3B0aW9uXCIpLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfX2FjY291bnQtYmFza2V0JylcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy50b2dnbGVTaG93TmF2QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zTGlzdFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgb3B0aW9uc0xpc3RbaV1bal0uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcHRpb24tLXNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwNC8wMi8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBOZXcgcmV2aWV3IHBvcCB1cCBodG1sIGJsb2NrIChfbmV3LXJldmlldy5odG1sIHBhcnRpYWwpXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIEZ1bmN0aW9uYWxpdHkgb24gdGhlIG5ldyByZXZpZXcgcG9wIHVwLiBUaGUgcG9wIHVwIGlzIGEgZm9ybSBjb250YWluaW5nXHJcbi8vIHRoZSByYXRpbmdzIGNvbXBvbmVudCBhbG9uZyB3aXRoIGl0cyBoaWRkZW4gYm94LCBvdGhlciBpbnB1dCBlbGVtZW50cywgYVxyXG4vLyBoaWRkZW4gYm94IHRvIHN0b3JlIGFuIGlkIGFuZCBjYW5jZWwvc3VibWl0IGJ1dHRvbnMuXHJcbi8vXHJcbi8vIERFU0lHTjpcclxuLy8gLS0tLS0tLVxyXG4vLyBUUklHR0VSOlxyXG4vLyBUaGlzIG1vZHVsZSB3aWxsIHRhcmdldCBhbGwgZWxlbWVudHMgd2l0aCB0aGUgYXR0cmlidXRlIFwibmV3UmV2aWV3UHJvZHVjdFwiXHJcbi8vIGFkZCBrZXliaW5kaW5nIHN1Y2ggdGhhdCB3aGVuIGFueSBvZiB0aGVzZSBlbGVtZW50cyBhcmUgY2xpY2tlZCwgdGhlIFwiaGlkZVwiXHJcbi8vIGNsYXNzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBwb3AgdXAgZWxlbWVudCBhbmQgYSBoaWRkZW4gaW5wdXQncyB2YWx1ZVxyXG4vLyBwb3B1bGF0ZWQgd2l0aCB0aGUgSUQuXHJcbi8vXHJcbi8vIEZPUk0gVkFMSURBVElPTjpcclxuLy8gV2lsbCBiZSBoYW5kbGVkIGJ5IHRoZSBiYWNrZW5kLlxyXG4vLyAjVE9ETzogQnVpbGQgZnJvbnQgZW5kIHZhbGlkYXRpb24gdG8gYXZvaWQgcG9pbnRsZXNzIFBPU1QgcmVxdWVzdC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBOZXdSZXZpZXcge1xyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyB0aGUgZnVuY3Rpb25hbGl0eSB0byBzdWJtaXQgbmV3IHJldmlld3MuXHJcbiAgICogVGhlIGNsYXNzIHdpbGwgc2VhcmNoIGZvciBhbGwgZWxlbWVudHMgd2l0aCBhbiBhdHRyaWJ1dGUgZm9yXHJcbiAgICogXCJuZXdSZXZpZXdQcm9kdWN0XCIgYW5kIGFkZCBrZXliaW5kaW5nIHN1Y2ggdGhhdCB3aGVuIHRoZXkgYXJlIGNsaWNrZWQgdGhlXHJcbiAgICogcG9wLXVwIGJveCB3aWxsIGFwcGVhciB3aGVyZSB0aGV5IGNhbiBlbnRlciB0aGUgcmV2aWV3LlxyXG4gICAqIFdpdGhpbiB0aGUgcG9wLXVwIGJveCwgaGlkZGVuIGlucHV0IGZpZWxkcyB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIHRoZVxyXG4gICAqIHZhbHVlIGZyb20gdGhlIFwibmV3UmV2aWV3UHJvZHVjdFwiIGFuZCBcIm5ld1Jldmlld1N0b3JlXCIgYXR0cmlidXRlIHdoaWNoXHJcbiAgICogaW5jbHVkZSB0aGUgcHJvZHVjdCBhbmQgc3RvcmUgSUQgcmVzcGVjdGl2ZWx5LlxyXG4gICAqL1xyXG5cclxuICByZXZpZXdCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltuZXdSZXZpZXdQcm9kdWN0XVwiKTtcclxuICBuZXdSZXZpZXdDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXYtcmV2aWV3LXBvcC11cFwiKSBhcyBIVE1MRWxlbWVudDtcclxuICBwcm9kdWN0SWRJbnB1dCA9IHRoaXMubmV3UmV2aWV3Q29udC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIjbmV3LXJldmlldy1wcm9kdWN0LWlkXCJcclxuICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgc3RvcmVJZElucHV0ID0gdGhpcy5uZXdSZXZpZXdDb250LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiI25ldy1yZXZpZXctc3RvcmUtaWRcIlxyXG4gICkgYXMgSFRNTElucHV0RWxlbWVudFxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3IgLSBjb250cm9sbGluZyB0aGUgb3JkZXIgaW4gd2hpY2ggZWFjaCBtZXRob2QgaXMgY2FsbGVkLlxyXG4gICAgICovXHJcbiAgICBmb3IgKGxldCByYiA9IDA7IHJiIDwgdGhpcy5yZXZpZXdCdG5zLmxlbmd0aDsgcmIrKykge1xyXG4gICAgICB0aGlzLnNldHVwX2J0bl9rZXliaW5kZXIodGhpcy5yZXZpZXdCdG5zW3JiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbG9zZV9wb3BfdXAoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgc2V0dXBfYnRuX2tleWJpbmRlcihyZXZpZXdCdG46IEVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBrZXliaW5kaW5nIG9uIGEgYnV0dG9uIHN1Y2ggdGhhdCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCwgdGhlXHJcbiAgICAgKiBwb3AgdXAgYm94IHdpbGwgYXBwZWFyIGJ5IHJlbW92aW5nIFwiaGlkZSBmcm9tIGNsYXNzIGxpc3QuXCJcclxuICAgICAqIFRoZSBwb3AgdXAgaXRlbSBhbHNvIGhhcyB0d28gaW5wdXQgYm94IGRlZGljYXRlZCB0byB0aGUgcHJvZHVjdCBhbmRcclxuICAgICAqIHN0b3JlIElkLCB0aGVzZSB3aWxsIGJlIHBvcHVsYXRlZCBieSByZWFkaW5nIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZVxyXG4gICAgICogZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkLlxyXG4gICAgICovXHJcbiAgICByZXZpZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMubmV3UmV2aWV3Q29udC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgdGhpcy5wcm9kdWN0SWRJbnB1dC52YWx1ZSA9IHJldmlld0J0bi5nZXRBdHRyaWJ1dGUoXCJuZXdSZXZpZXdQcm9kdWN0XCIpITtcclxuICAgICAgdGhpcy5zdG9yZUlkSW5wdXQudmFsdWUgPSByZXZpZXdCdG4uZ2V0QXR0cmlidXRlKFwibmV3UmV2aWV3U3RvcmVcIikhXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgY2xvc2VfcG9wX3VwKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB0byBjbG9zZSB0aGUgcG9wIHVwLCB0aGlzIG9jY3VycyB3aGVuZXZlciB0aGUgdXNlciBwcmVzc2VzXHJcbiAgICAgKiBjYW5jZWwsIG9yIGNsaWNrcyBvdXRzaWRlIHRoZSBib3guXHJcbiAgICAgKi9cclxuICAgIHRoaXMubmV3UmV2aWV3Q29udFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLm5ldy1yZXZpZXdfX2J0bltmb3I9XCJjYW5jZWxcIl0nKSFcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZXdSZXZpZXdDb250LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubmV3UmV2aWV3Q29udC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubmV3UmV2aWV3Q29udFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5uZXctcmV2aWV3X19mb3JtXCIpXHJcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjYvMDEvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gUGFnaW5hdGlvbiBPYmplY3RcclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gQnVpbGRzIHRoZSBsaW5rIChocmVmKSBvbiBlYWNoIHBhZ2luYXRpb24gYnV0dG9uLiBUaGlzIGlzIGFjaGlldmVkIGJ5XHJcbi8vIHVzaW5nIHRoZSBjdXJyZW50IHVybCB0byBidWlsZCBtb3N0IHBhcnQgb2YgdGhlIGhyZWYgYW5kIGFwcGVuZGluZyB0byBpdFxyXG4vLyB0aGUgcGFnZSBxdWVyeS5cclxuLy9cclxuLy8gRWFjaCBlbGVtZW50IHdpbGwgY29udGFpbiBhIFwicGFnZVwiIGF0dHJpYnV0ZSB3aGljaCB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZVxyXG4vLyBwYWdlIHBhcnQgb2YgdGhlIGhyZWYuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbiB7XHJcbiAgLyoqIEJ1aWxkcyB0aGUgcGFnaW5hdGlvbiBsaW5rIChocmVmKS4gKi9cclxuICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2luYXRpb25cIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKiBCdWlsZHMgdGhlIGxpbmtzIG9udG8gdGhlIHBhZ2luYXRpb24gbGlua3MgaWYgI3BhZ2luYXRpb24gZXhpc3RzLiAqL1xyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRfbGlua3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX2xpbmtzKCkge1xyXG4gICAgLyoqIEJ1aWxkcyBsaW5rcyBvbnRvIHRoZSBwYWdpbmF0aW9uIGxpbmsgZWxlbWVudHMuICovXHJcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMuY29udGFpbmVyIS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFnaW5hdGlvbl9fbGlua1wiKTtcclxuICAgIGNvbnN0IGJhc2VIcmVmID1cclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvJigoLio/JiQpfChwYWdlPVswLTldezEsfSl8KHBhZ2U9KSkvZywgXCJcIikgK1xyXG4gICAgICBcIiZwYWdlPVwiO1xyXG5cclxuICAgIGZvciAobGV0IGwgPSAwOyBsIDwgbGlua3MubGVuZ3RoOyBsKyspIHtcclxuICAgICAgaWYgKGxpbmtzW2xdLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGxpbmtzW2xdLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYmFzZUhyZWYgKyBsaW5rc1tsXS5nZXRBdHRyaWJ1dGUoXCJwYWdlXCIpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDEyLzAxLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFJlZ2lzdHJhdGlvbiBwYWdlcy5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gV2hlbiBwYXNzd29yZHMgZG8gbm90IG1hdGNoLCB1cGRhdGUgdGhlIGF0dHJpYnV0ZSBvZiB0aGUgcGFzc3dvcmQgZWxlbWVudHNcclxuLy8gdG8gYGludmFsaWQ9XCJ0cnVlXCIuIFRoaXMgd2lsbCBhbGxvdyB0aGUgdGhlIENTUyB0byBjaGFuZ2UgdGhlIGJvcmRlclxyXG4vLyBvZiB0aGUgcGFzc3dvcmQgZWxlbWVudHMgdG8gcmVkIGFuZCBzaG93IGFuIGVycm9yIG1lc3NhZ2UgZm9yIGEgZmV3IHNlY29uZHMuXHJcbi8vXHJcbi8vIElmIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gsIHRoZW4gYWRkIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgdG8gdGhlIHN1Ym1pdFxyXG4vLyBidXR0b24uXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGVjayB7XHJcbiAgLyoqIENoZWNrcyBpZiBwYXNzd29yZHMgbWF0Y2gsIGlmIHRoZXkgZG8gbm90LCB0aGVuIHVwZGF0ZSB0aGUgYXR0cmlidXRlXHJcbiAgICogb2YgdGhlIHBhc3N3b3JkIGVsZW1lbnRzIHdoaWNoIHdpbGwgaW4gdHVybiB1cGRhdGUgc2libGluZ3MgdG8gdGFrZSBvblxyXG4gICAqIHNvbWUgQ1NTIHN0eWxpbmcgKGNvbnRyb2xsZWQgdGhyb3VnaCBDU1MpLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcGFzc3dvcmRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnQtcGFzc3dvcmRcIlxyXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGNvbmZpcm1QYXNzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY2NvdW50LXBhc3N3b3JkLWNvbmZpcm1cIlxyXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY2NvdW50LXN1Ym1pdFwiXHJcbiAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGVycm9yTXNnRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJhY2NvdW50LWVycm9yc1wiXHJcbiAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIENvbnN0cnVjdG9yICovXHJcbiAgICB0aGlzLnNldF9rZXliaW5kZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGNoZWNrX3Bhc3N3b3JkcygpIHtcclxuICAgIC8qKiBDaGVja3MgaWYgdGhlIHBhc3N3b3JkcyBtYXRjaCwgYW5kIGlmIHNvLCBjaGVjayB0aGVpciBjb21wbGV4aXR5LiAqL1xyXG4gICAgY29uc3QgcGFzc3dvcmRUeHQgPSB0aGlzLnBhc3N3b3JkRWxlbT8udmFsdWU7XHJcbiAgICBjb25zdCBjb25maXJtUGFzc1R4dCA9IHRoaXMuY29uZmlybVBhc3NFbGVtPy52YWx1ZTtcclxuXHJcbiAgICBpZiAocGFzc3dvcmRUeHQgJiYgY29uZmlybVBhc3NUeHQpIHtcclxuICAgICAgaWYgKHBhc3N3b3JkVHh0ID09PSBjb25maXJtUGFzc1R4dCkge1xyXG4gICAgICAgIC8vIENoZWNrIGNvbXBsZXhpdHk6XHJcbiAgICAgICAgLy8gTGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgNiBhbmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgaW50ZWdlci5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBwYXNzd29yZFR4dC5sZW5ndGggPj0gNiAmJlxyXG4gICAgICAgICAgcGFzc3dvcmRUeHQubWF0Y2goL1swLTldLykgJiZcclxuICAgICAgICAgIHBhc3N3b3JkVHh0Lm1hdGNoKC9bQS16XS8pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1zZ0VsZW0udGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcgYW5kIGNvbnRhaW4gYXQgbGVhc3QgMSBudW1iZXIuXCI7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNc2dFbGVtLnRleHRDb250ZW50ID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHNldF9rZXliaW5kZXJzKCkge1xyXG4gICAgdGhpcy5jb25maXJtUGFzc0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVfZWxlbWVudF9hdHRycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV9lbGVtZW50X2F0dHJzKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBpbnB1dCBhbmQgYnV0dG9uIGVsZW1lbnRzIHRvIGFjY29yZGFuY2VcclxuICAgICAqIHdoZXRoZXIgb3Igbm90IHRoZSBwYXNzd29yZHMgbWF0Y2guXHJcbiAgICAgKi9cclxuICAgIGlmICh0aGlzLmNoZWNrX3Bhc3N3b3JkcygpKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRFbGVtLnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XHJcbiAgICAgIHRoaXMuY29uZmlybVBhc3NFbGVtLnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XHJcbiAgICAgIHRoaXMuc3VibWl0QnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYXNzd29yZEVsZW0uc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcInRydWVcIik7XHJcbiAgICAgIHRoaXMuY29uZmlybVBhc3NFbGVtLnNldEF0dHJpYnV0ZShcImludmFsaWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICB0aGlzLnN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDE2LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUFVSUE9TRVxyXG4vLyAtLS0tLS0tXHJcbi8vIEVuYWJsZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHF1YW50aXR5IGNvbXBvbmVudCwgdGh1cyBlbmFibGluZyArLy1cclxuLy8gYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW4gdGhlIGlucHV0IGJveC5cclxuLy9cclxuLy8gUkVMQVRFRCBGSUxFU1xyXG4vLyAtLS0tLS0tLS0tLS0tXHJcbi8vIF9xdWFudGl0eS5zY3NzXHJcbi8vXHJcbi8vIEhUTUwgRk9STUFUXHJcbi8vIC0tLS0tLS0tLS0tXHJcbi8vIDxkaXYgY2xhc3M9XCJjLXF1YW50aXR5XCI+XHJcbi8vICAgPGJ1dHRvbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0blwiIGNvbnRyb2w9XCJxdWFudGl0eS1kb3duXCI+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiPiYjNDU7PC9zcGFuPlxyXG4vLyAgIDwvYnV0dG9uPlxyXG4vLyAgIDxpbnB1dCBjbGFzcz1cImMtcXVhbnRpdHlfX2lucHV0XCIgdHlwZT1cIm51bWJlclwiLz5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LXVwXCI+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiPiYjNDU7PC9zcGFuPlxyXG4vLyAgIDwvYnV0dG9uPlxyXG4vLyA8L2Rpdj5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIEltcG9ydHNcclxuaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFF1YW50aXR5Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBCdWlsZHMgZnVuY3Rpb25hbGl0eSBvbnRvIHRoZSBxdWFudGl0eSBjb21wb25lbnQgdGh1cyBlbmFibGluZyB0aGUgKy8tXHJcbiAgICogYnV0dG9ucyB0byBjb250cm9sIHRoZSBudW1iZXIgaW5zaWRlIHRoZSBpbnB1dCBib3guXHJcbiAgICovXHJcblxyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgXCJjLXF1YW50aXR5XCJcclxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgIE5vIGFyZ3VtZW50cyAtIGNsYXNzIHVzZXMgb2JqZWN0cyBmb3VuZCBvbiB0aGUgRE9NLlxyXG4gICAgKi9cclxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5fc2V0X2VsZW1lbnRzKHRoaXMuY29udGFpbmVyc1tjXSk7XHJcbiAgICAgIGNvbnN0IGJ0bkRvd24gPSBlbGVtZW50c1swXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgY29uc3QgYnRuVXAgPSBlbGVtZW50c1sxXSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgY29uc3QgaW5wdXRCb3ggPSBlbGVtZW50c1syXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBOdW1iZXIoaW5wdXRCb3guZ2V0QXR0cmlidXRlKFwibWluXCIpKTtcclxuICAgICAgY29uc3QgbWF4VmFsdWUgPSBOdW1iZXIoaW5wdXRCb3guZ2V0QXR0cmlidXRlKFwibWF4XCIpKTtcclxuXHJcbiAgICAgIHRoaXMuX2J1aWxkX21pbnVzX2J1dHRvbihidG5Eb3duLCBidG5VcCwgaW5wdXRCb3gsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX3BsdXNfYnV0dG9uKGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgICAgdGhpcy5fYnVpbGRfaW5wdXRfYm94KGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3NldF9lbGVtZW50cyhjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgY29udGFpbmVyLCB3aWxsIHJldHVybiB0aGUgYnV0dG9ucyBhbmQgaW5wdXQgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGJ0bkRvd24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvbltjb250cm9sPVwicXVhbnRpdHktZG93blwiXSdcclxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBidG5VcCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS11cFwiXSdcclxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dEJveCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcImlucHV0LmMtcXVhbnRpdHlfX2lucHV0XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gW2J0bkRvd24sIGJ0blVwLCBpbnB1dEJveF07XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF9taW51c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIG1pbnVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCByZWR1Y2VcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtaW5pbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIHBsdXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBsZXNzIHRoYW4gdGhlIG1heFZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoYnRuRG93bi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpIC0gMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpIDwgbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPT09IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICBidG5Eb3duLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX3BsdXNfYnV0dG9uKFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uIGNsaWNraW5nIHRoZSBwbHVzIGJ1dHRvbiwgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgd2lsbCBpbmNyZWFzZWRcclxuICAgICAqIGJ5IG9uZSB1bnRpbCBpdCByZWFjaGVzIGl0cyBtYXhpbXVtIHZhbHVlLCBhdCB3aGljaCBwb2ludCwgdGhlIGJ1dHRvblxyXG4gICAgICogYmVjb21lcyBkaXNhYmxlZC4gQWxzbyB3aWxsIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZyb20gdGhlIG1pbnVzXHJcbiAgICAgKiBidXR0b24gaWYgaXQgaXMgZ3JlYXRlciB0aGFuIHRoZSBtaW5WYWx1ZS5cclxuICAgICAqL1xyXG5cclxuICAgIGJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChidG5VcC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSAhPSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICBpbnB1dEJveC52YWx1ZSA9IFN0cmluZyhOdW1iZXIoaW5wdXRCb3gudmFsdWUpICsgMSk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpID4gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA9PT0gbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX2lucHV0X2JveChcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmNlIGEgbmV3IHZhbHVlIGhhcyBiZWVuIGVudGVyZWQgaW50byB0aGUgaW5wdXQgYm94LFxyXG4gICAgICogZGlzYWJsZS9yZS1lbmFibGUgdGhlIHBsdXMgYW5kIG1pbnVzIGJ1dHRvbnMgaW4gYWNjb3JkYW5jZSB3aXRoIHdoZXRoZXJcclxuICAgICAqIHRoZSB2YWx1ZSBpcyBlcXVhbCB0byB0aGUgbWluL21heCB2YWx1ZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIGlucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0Qm94LnZhbHVlKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC4gSWYgbm90LCB1cGRhdGUgYXR0cmlidXRlcyB0aGUgaGlnaGxpZ2h0XHJcbiAgICAgIC8vIHRoaXMgdG8gdGhlIHVzZXIgYW5kIGRpc2FibGUgYnV0dG9ucy5cclxuICAgICAgaWYgKFZhbGlkYXRpb24uY2hlY2tfaWZfcG9zaXRpdmVfaW50KHZhbHVlKSkge1xyXG4gICAgICAgIC8vIEluY2FzZSB0aGUgYnV0dG9ucyB3ZXJlIHByZXZpb3VzbHkgZGlzYWJsZWQsIHJlc2V0IGJ5IHJlLWVuYWJsaW5nXHJcbiAgICAgICAgLy8gZXZlcnl0aGluZy5cclxuICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGlucHV0Qm94LnBhcmVudEVsZW1lbnQhLnJlbW92ZUF0dHJpYnV0ZSgnaW52YWxpZCcpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSBtaW4gdmFsdWVcclxuICAgICAgICBpZiAodmFsdWUgPD0gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnRuRG93bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgYnRuVXAncyBtYXggdmFsdWVcclxuICAgICAgICBpZiAodmFsdWUgPj0gbWF4VmFsdWUpIHtcclxuICAgICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJ0blVwLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdmFsdWUgaXMgZWl0aGVyIDwgMCBvciBhIGZsb2F0LlxyXG4gICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBidG5VcC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGlucHV0Qm94LnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZSgnaW52YWxpZCcsICd0cnVlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDAyLzAyLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gLS0tLS1cclxuLy8gT24gaXRlbXMgd2l0aCB0aGUgcmF0aW5nc19fc3RhcnMgY2xhc3MuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gLS0tLS0tLVxyXG4vLyBGb3IgY29udGFpbmVycyB3aGVyZSB0aGUgc2VsZWN0YWJsZSBhdHRyaWJ1dGUgaXMgc2V0IHRvIHRydWUsIGtleWJpbmRlcnNcclxuLy8gd2lsbCBiZSBhdHRhY2hlZCBzdWNoIHRoYXQgaWYgYSBwYXJ0aWN1bGFyIHN0YXIgaXMgaG92ZXJlZCBvdmVyLCB0aGF0IHN0YXJcclxuLy8gYW5kIGFsbCBwcmVjZWRpbmcgc3RhcnRzIHdpbGwgaGlnaGxpZ2h0LlxyXG4vLyBPbiBjbGljayBvZiB0aGF0IHN0YXIsIHRoYXQgc3RhcnQgd2lsbCBiZSBjb21lIHNlbGVjdGVkIGFuZCBzbyB0aGUgY2xhc3Nlc1xyXG4vLyB3aWxsIHVwZGF0ZSBhY2NvcmRpbmdseS5cclxuLy9cclxuLy8gUkVRVUlSRU1FTlRTXHJcbi8vIC0tLS0tLS0tLS0tLVxyXG4vLyAtIE11c3QgaGF2ZSBhIGNvbnRhaW5lciB3aXRoICNwcm9kdWN0LXJldmlld3MtdXNlci1yYXRpbmcgZm9yIGFsbCB0aGUgcmF0aW5nXHJcbi8vICAgZWxlbWVudHMuXHJcbi8vXHJcbi8vIC0gT24gcmV2aWV3IGVsZW1lbnQsIG11c3QgYXR0cmlidXRlcyBmb3IgXCJuZXdSZXZpZXdQcm9kdWN0XCIgYW5kXHJcbi8vICAgXCJuZXdSZXZpZXdTdG9yZVwiIHdoaWNoIHNob3VsZCBlcXVhbCB0byB0aGUgcHJvZHVjdCBJRCBhbmQgc3RvcmUgSURcclxuLy8gICByZXNwZWN0aXZlbHkuXHJcbi8vXHJcbi8vIC0gRm9yIFBPU1QgcmVxdWVzdCwgbXVzdCBoYXZlIGEgZm9ybSBlbGVtZW50IHdpdGggI3VzZXItcmV2aWV3LXJhdGluZy4gVGhlXHJcbi8vICAgSmF2YVNjcmlwdCB3aWxsIHVwZGF0ZSB0aGlzIGlucHV0IHZhbHVlIHdpdGggdGhlIHJhdGluZyBzZWxlY3RlZC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdzIHtcclxuICBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhdGluZ19fc3RhcnNbc2VsZWN0YWJsZT1cInRydWVcIl0nKTtcclxuICBzZWxlY3RlZENsYXNzID0gXCJpLXN0YXItLWNoZWNrZWRcIjtcclxuICB1c2VyUmF0aW5nID0gMDtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFJhdGluZ3M7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXJzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnVzZXJSYXRpbmcgPSBOdW1iZXIoXHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3Byb2R1Y3QtcmV2aWV3cy11c2VyLXJhdGluZ1wiKSFcclxuICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJ1c2VyUmF0aW5nXCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICAgIGNvbnN0IHN0YXJzOiBIVE1MRWxlbWVudFtdID0gW1xyXG4gICAgICAgICAgdGhpcy5jb250YWluZXJzW2NdLnF1ZXJ5U2VsZWN0b3IoJy5pLXN0YXJbdmFsdWU9XCIxXCJdJykgYXMgSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10ucXVlcnlTZWxlY3RvcignLmktc3Rhclt2YWx1ZT1cIjJcIl0nKSBhcyBIVE1MRWxlbWVudCxcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyc1tjXS5xdWVyeVNlbGVjdG9yKCcuaS1zdGFyW3ZhbHVlPVwiM1wiXScpIGFzIEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgdGhpcy5jb250YWluZXJzW2NdLnF1ZXJ5U2VsZWN0b3IoJy5pLXN0YXJbdmFsdWU9XCI0XCJdJykgYXMgSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10ucXVlcnlTZWxlY3RvcignLmktc3Rhclt2YWx1ZT1cIjVcIl0nKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBzZWxlY3Rpb25cclxuICAgICAgICB0aGlzLnVwZGF0ZV9zZWxlY3Rpb24oc3RhcnMpO1xyXG5cclxuICAgICAgICAvLyBBZGRzIGtleWJpbmRlcnMgb250byB0aGUgdGhlIHN0YXJzIGZvciBtb3VzZW92ZXIsIG1vdXNlb3V0IGFuZCBjbGljay5cclxuICAgICAgICB0aGlzLmJ1aWxkX3N0YXJfZnVuY3Rpb25zKHN0YXJzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IFJhdGluZ3Mge1xyXG4gICAgaWYgKCFSYXRpbmdzLmluc3RhbmNlKSB7XHJcbiAgICAgIFJhdGluZ3MuaW5zdGFuY2UgPSBuZXcgUmF0aW5ncygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJhdGluZ3MuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV9zZWxlY3Rpb24oc3RhcnM6IEhUTUxFbGVtZW50W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc2VsZWN0ZWQgY2xhc3MgdG8gdGhlIHN0YXJzIGluIGFjY29yZGFuY2UgdG8gd2hhdCB0aGVcclxuICAgICAqIHVzZXIncyBjdXJyZW50IHJhdGluZyBpcy5cclxuICAgICAqIFdpbGwgYWxzbyB1cGRhdGUgYSBoaWRkZW4gaW5wdXQgaWYgaXQgZXhpc3RzIHdpdGggdGhlIHVzZXIncyByYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIC8vIFJlc2V0XHJcbiAgICB0aGlzLnJlbW92ZV9hbGxfc3RhcnMoc3RhcnMpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJSYXRpbmcgPSB0aGlzLnVzZXJfcmF0aW5nO1xyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID49IDEpIHtcclxuICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID49IDIpIHtcclxuICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID49IDMpIHtcclxuICAgICAgc3RhcnNbMl0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID49IDQpIHtcclxuICAgICAgc3RhcnNbM10uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyUmF0aW5nID09IDUpIHtcclxuICAgICAgc3RhcnNbNF0uY2xhc3NMaXN0LmFkZCh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0IGlmIGl0IGV4aXN0cy5cclxuICAgIGNvbnN0IGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwidXNlci1yZXZpZXctcmF0aW5nXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XHJcbiAgICBpZiAoaGlkZGVuSW5wdXQpIHtcclxuICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSB1c2VyUmF0aW5nLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHJlbW92ZV9hbGxfc3RhcnMoc3RhcnM6IEhUTUxFbGVtZW50W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGNsYXNzIGxpc3Qgb2YgYWxsIHRoZSBzdGFycyBzbyB0aGF0IG5vbmUgb2YgdGhlXHJcbiAgICAgKiBzdGFycyBhcmUgc2VsZWN0ZWQuXHJcbiAgICAgKi9cclxuXHJcbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHN0YXJzLmxlbmd0aDsgcysrKSB7XHJcbiAgICAgIHN0YXJzW3NdLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZWxlY3RlZENsYXNzKTtcclxuICAgICAgc3RhcnNbc10ucmVtb3ZlQXR0cmlidXRlKFwiaGlnaGxpZ2h0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZ2V0IHVzZXJfcmF0aW5nKCk6IG51bWJlciB7XHJcbiAgICAvKiogR2V0cyB0aGUgdXNlciByYXRpbmcuICovXHJcbiAgICByZXR1cm4gdGhpcy51c2VyUmF0aW5nO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc2V0IHVzZXJfcmF0aW5nKG5ld1JhdGluZzogbnVtYmVyKSB7XHJcbiAgICAvKiogU2V0cyB0aGUgdXNlciByYXRpbmcuICovXHJcbiAgICB0aGlzLnVzZXJSYXRpbmcgPSBuZXdSYXRpbmc7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3N0YXJfZnVuY3Rpb25zKHN0YXJzOiBIVE1MRWxlbWVudFtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZvciB0aGUgc2VsZWN0YWJsZSByYXRpbmcsIG9uIGhvdmVyLCBmaXJzdGx5IGFsbCBzdGFydHMgd2lsbCBkaXNhcHBlYXJcclxuICAgICAqIGFuZCB3aGVuIGVhY2ggc3RhciBpcyBob3ZlcmVkIG92ZXIsIHRoZXkgd2lsbCBoaWdobGlnaHQuIEZpbmFsbHksIHdoZW5cclxuICAgICAqIHRoZSBtb3VzZSBpcyBtb3ZlZCBhd2F5IGZyb20gdGhlIGVsZW1lbnQsIHJlc2V0IHRoZSBzdGFycyB0byB3aGF0ZXZlclxyXG4gICAgICogaXMgd2FzIHByZXZpb3VzbHkuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IHN0YXIgPSAwOyBzdGFyIDwgc3RhcnMubGVuZ3RoOyBzdGFyKyspIHtcclxuICAgICAgc3RhcnNbc3Rhcl0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVfYWxsX3N0YXJzKHN0YXJzKTtcclxuICAgICAgICBmb3IgKGxldCBwcmV2U3RhciA9IDA7IHByZXZTdGFyIDw9IHN0YXI7IHByZXZTdGFyKyspXHJcbiAgICAgICAgICBzdGFyc1twcmV2U3Rhcl0uc2V0QXR0cmlidXRlKFwiaGlnaGxpZ2h0XCIsIFwidHJ1ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdGFyc1tzdGFyXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3NlbGVjdGlvbihzdGFycyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc3RhcnNbc3Rhcl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJfcmF0aW5nID0gc3RhciArIDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfc2VsZWN0aW9uKHN0YXJzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDgvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBNYW5hZ2VzIHRoZSBzZWFyY2ggZmlsdGVycyBvbiB0aGUgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBSZXNwb25zaWJsZSBmb3IgY2FsbGluZyB0aGUgc2VhcmNoIEFQSSB3aGljaCB3aWxsIGZpbHRlciByZXN1bHQgYmFzZWQgb25cclxuLy8gd2hhdCB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdXNpbmcgdGhlIGZpbHRlcnMuXHJcbi8vXHJcbi8vIFdpbGwgdXNlIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBiYXIncyBmb3JtIHRvIGludGVyYWN0IHdpdGggdGhlIEFQSS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJzIHtcclxuICAvKipcclxuICAgKiBXaWxsIGV4cGFuZCB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggYmFyIGFuZCB0aGUgZm9ybSBlbGVtZW50IHRvIGFsbG93IGl0IHRvXHJcbiAgICogdGFrZSBpbiB0aGUgZmlsdGVyIG9wdGlvbnMgYXMgcGFydCBvZiB0aGUgR0VUIHJlcXVlc3Qgd2hlbmV2ZXIgYSB1c2VyXHJcbiAgICogaW5pdGlhdGVzIGEgc2VhcmNoLlxyXG4gICAqXHJcbiAgICogQ2FsbHMgdGhlIEFQSSB0byBmaWx0ZXIgdGhlIHJlc3VsdHMuXHJcbiAgICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciBkb2VzIG5vdCByZXF1aXJlIGFueSBhcmd1bWVudHMgYW5kIHdpbGwgaW5zdGVhZCB1c2VcclxuICAgICAqIGVsZW1lbnRzIGZyb20gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5fZXhwYW5kX25hdl9zZWFyY2goKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9leHBhbmRfbmF2X3NlYXJjaCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogRXhwYW5kcyBvbiB0aGUgbmF2aWdhdGlvbiBzZWFyY2ggZWxlbWVudHMgc28gdGhhdCB3aGVuIHNlbmRpbmcgYSBHRVRcclxuICAgICAqIHJlcXVlc3QsIGZpbHRlcnMgd2lsIGJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG5hdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcIm5hdl9fc2VhcmNoXCJcclxuICAgIClbMF0gYXMgSFRNTEZvcm1FbGVtZW50O1xyXG5cclxuICAgIC8vIEFkZCBoaWRkZW4gaW5wdXRzIHRvIGNvbnRhaW4gdGhlIHZhbHVlcyBvbiB0aGUgZmlsdGVycy5cclxuICAgIGNvbnN0IGlucHV0TmFtZXMgPSBbXCJmLW1pblByaWNlXCIsIFwiZi1tYXhQcmljZVwiLCBcImYtY2F0ZWdvcnlcIiwgXCJmLWNvbG91clwiXTtcclxuICAgIGZvciAoY29uc3QgaW5wdXROYW1lIG9mIGlucHV0TmFtZXMpIHtcclxuICAgICAgY29uc3QgaGlkZGVuSW5wdXROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcclxuICAgICAgICBcIklOUFVUXCJcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcclxuICAgICAgaGlkZGVuSW5wdXROb2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0TmFtZSk7XHJcbiAgICAgIG5hdkZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuSW5wdXROb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGhpZGRlbiBpbnB1dHMgd2hlbiBhIGZpbHRlciBpcyBzZWxlY3RlZFxyXG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gICAgZm9yIChsZXQgb3B0ID0gMDsgb3B0IDwgZHJvcGRvd25PcHRpb25zLmxlbmd0aDsgb3B0KyspIHtcclxuICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBkcm9wZG93bk9wdGlvbnNbb3B0XTtcclxuICAgICAgbGV0IGhpZGRlbklucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgc3dpdGNoIChkcm9wZG93bk9wdGlvbi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpKSB7XHJcbiAgICAgICAgY2FzZSBcIm1pbi1wcmljZVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJtYXgtcHJpY2VcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1tYXhQcmljZVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY2F0ZWdvcnlcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgIFwiZi1jYXRlZ29yeVwiXHJcbiAgICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY29sb3VyXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZi1jb2xvdXJcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGhpZGRlbklucHV0KSB7XHJcbiAgICAgICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgaGlkZGVuSW5wdXQhLnZhbHVlID0gZHJvcGRvd25PcHRpb24ucHJldmlvdXNFbGVtZW50U2libGluZyEudGV4dENvbnRlbnQhO1xyXG5cclxuICAgICAgICAgIC8vIENhbGxzIHRoZSBzZWFyY2ggcmVzdWx0IEFQSSBhbmQgdGhlbiBmaWx0ZXIgdGhlIHJlc3VsdHMuXHJcbiAgICAgICAgICBjb25zdCBBUElQYXRoID0gdGhpcy5fQVBJX3BhdGgoKTtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KSBhcyBbXTtcclxuICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJfcmVzdWx0cyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9BUElfcGF0aCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBBUEkgaHJlZiBwYXRoIHdoZXJlIHRoZSByZXF1ZXN0IHdpbGwgYmUgc2VudC5cclxuICAgICAqIFRoaXMgaW1wbGVtZW50cyB0aGUgZmlsdGVycyB3aXRoaW4gdGhlIGFjdHVhbCBVUkwuXHJcbiAgICAgKi9cclxuICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcIi9zZWFyY2gvXCIsIFwiL3NlYXJjaC1yZXN1bHRzL1wiKTtcclxuICAgIGlmICghaHJlZi5pbmNsdWRlcygnL3NlYXJjaC1yZXN1bHRzLz8nKSkge1xyXG4gICAgICBocmVmID0gaHJlZi5yZXBsYWNlKFwiL3NlYXJjaC1yZXN1bHRzL1wiLCBcIi9zZWFyY2gtcmVzdWx0cy8/c2VhcmNoPVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpZGRlbkluTWluUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluTWF4UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ29sb3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1jb2xvdXJcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5NaW5QcmljZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtbWluUHJpY2U9XCIgKyBoaWRkZW5Jbk1pblByaWNlLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1taW5QcmljZT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLW1pblByaWNlPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluTWF4UHJpY2UudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLW1heFByaWNlPVwiICsgaGlkZGVuSW5NYXhQcmljZS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtbWF4UHJpY2U9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1tYXhQcmljZT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5JbkNhdGVnb3J5LnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1jYXRlZ29yeT1cIiArIGhpZGRlbkluQ2F0ZWdvcnkudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLWNhdGVnb3J5PS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtY2F0ZWdvcnk9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5Db2xvdXIudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLWNvbG91cj1cIiArIGhpZGRlbkluQ29sb3VyLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1jb2xvdXI9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1jb2xvdXI9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaHJlZjtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIF9maWx0ZXJfcmVzdWx0cyhBUElSZXN1bHRzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaWx0ZXJzIHRoZSByZXN1bHRzIG9uIHRoZSBzZWFyY2ggcGFnZSBpbiBhY2NvcmRhbmNlIHRvIHRoZSBkYXRhXHJcbiAgICAgKiByZXRyaWV2ZWQgZnJvbSB0aGUgc2VhcmNoIEFQSS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzJylbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcmlnUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHNfX3Jlc3VsdCcpO1xyXG5cclxuICAgIGxldCB2YWxpZFByb2R1Y3RzID0gW107XHJcbiAgICByZXN1bHQ6IEpTT047XHJcbiAgICBmb3IgKGNvbnN0IHJlc3VsdCBpbiBBUElSZXN1bHRzKSB7XHJcbiAgICAgIHZhbGlkUHJvZHVjdHMucHVzaChBUElSZXN1bHRzW3Jlc3VsdF0ucHJvZHVjdF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgcklEID0gMDsgcklEPG9yaWdSZXN1bHRzLmxlbmd0aDsgcklEKyspIHtcclxuICAgICAgaWYgKHZhbGlkUHJvZHVjdHMuaW5jbHVkZXMoTnVtYmVyKG9yaWdSZXN1bHRzW3JJRF0uZ2V0QXR0cmlidXRlKCdJRCcpISkpKSB7XHJcbiAgICAgICAgb3JpZ1Jlc3VsdHNbcklEXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3JpZ1Jlc3VsdHNbcklEXS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDI4LzExLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb250YWlucyBpbXBvcnRzIG9mIGFsbCB0aGUgbWFpbiBjbGFzc2VzLlxyXG4vLyBCZWhhdmVzIGFzIHRoZSBtYWluIGh1YiBmb3IgdGhlIGpzIGJ1bmRsZS5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gQ29tcG9uZW50IEltcG9ydHNcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnVcIjtcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3F1YW50aXR5XCI7XHJcbmltcG9ydCB7IFNlYXJjaEZpbHRlcnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaF9maWx0ZXJzXCI7XHJcbmltcG9ydCB7IFBhc3N3b3JkQ2hlY2sgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Bhc3N3b3JkLXZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEltZ3MgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3NcIjtcclxuaW1wb3J0IHsgUmF0aW5ncyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmF0aW5nc1wiO1xyXG5pbXBvcnQgeyBOZXdSZXZpZXcgfSBmcm9tIFwiLi9jb21wb25lbnRzL25ld19yZXZpZXdcIjtcclxuXHJcbi8vIFN0YXRlIEltcG9ydHNcclxuaW1wb3J0IHsgQmFza2V0U3RhdGUgfSBmcm9tIFwiLi9zdGF0ZS9iYXNrZXQtaXRlbXNcIjtcclxuXHJcbi8vIFBhZ2VzIEltcG9ydHNcclxuaW1wb3J0IHsgRXh0ZW5kUHJvZHVjdFBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IFByb2R1Y3RVc2VyUmV2aWV3IH0gZnJvbSBcIi4vcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHNfdXNlcl9yZXZpZXdcIjtcclxuaW1wb3J0IHsgQmFza2V0UGFnZSB9IGZyb20gXCIuL3BhZ2VzL2Jhc2tldC9iYXNrZXRcIjtcclxuXHJcbi8vIEJ1aWxkIHRoZSBuYXZpZ2F0aW9uXHJcbm5ldyBOYXZpZ2F0aW9uKCk7XHJcblxyXG4vLyBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBiYXNrZXRcclxubmV3IEJhc2tldFN0YXRlKCk7XHJcblxyXG4vLyBCdWlsZCB0aGUgZHJvcGRvd24gbWVudVxyXG5uZXcgRHJvcGRvd25NZW51KCk7XHJcblxyXG4vLyBCdWlsZCB0aGUgc2VhcmNoIGZpbHRlcnNcclxubmV3IFNlYXJjaEZpbHRlcnMoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBwYWdpbmF0aW9uXHJcbm5ldyBQYWdpbmF0aW9uKCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBQQUdFIFNQRUNJRklDIEpBVkFTQ1JJUFRcclxuY29uc3QgQ1VSUkVOVF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHJcbmlmIChDVVJSRU5UX1VSTC5zZWFyY2goL1xcL3Byb2R1Y3RzXFwvWzAtOV17MSx9LykgIT0gLTEpIHtcclxuICAvLyBQcm9kdWN0IFBhZ2VcclxuICBuZXcgRXh0ZW5kUHJvZHVjdFBhZ2UoKTtcclxuICBuZXcgUXVhbnRpdHlDb21wb25lbnQoKTtcclxuICBuZXcgQ2Fyb3VzZWxJbWdzKCk7XHJcbiAgUmF0aW5ncy5nZXRJbnN0YW5jZSgpO1xyXG4gIG5ldyBQcm9kdWN0VXNlclJldmlldygpO1xyXG59IGVsc2UgaWYgKENVUlJFTlRfVVJMLmluY2x1ZGVzKFwiL2Jhc2tldC9cIikpIHtcclxuICAvLyBCYXNrZXQgUGFnZVxyXG4gIG5ldyBCYXNrZXRQYWdlKCk7XHJcbn0gZWxzZSBpZiAoXHJcbiAgLy8gQWNjb3VudCByZWdpc3RyYXRpb24gYW5kIGNoYW5nZSBwYXNzd29yZCBwYWdlc1xyXG4gIENVUlJFTlRfVVJMLmluY2x1ZGVzKFwidXNlci9yZWdpc3RlclwiKSB8fFxyXG4gIENVUlJFTlRfVVJMLmluY2x1ZGVzKFwidXNlci9jaGFuZ2UtcGFzc3dvcmRcIilcclxuKSB7XHJcbiAgbmV3IFBhc3N3b3JkQ2hlY2soKTtcclxufSBlbHNlIGlmIChDVVJSRU5UX1VSTC5pbmNsdWRlcyhcIi9vcmRlci1oaXN0b3J5L1wiKSkge1xyXG4gIG5ldyBOZXdSZXZpZXcoKTtcclxuICBSYXRpbmdzLmdldEluc3RhbmNlKCk7XHJcbn0gZWxzZSBpZiAoQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCIvcHJvZHVjdHMvcmV2aWV3cy9cIikpIHtcclxuICBSYXRpbmdzLmdldEluc3RhbmNlKCk7XHJcbiAgbmV3IFByb2R1Y3RVc2VyUmV2aWV3KCk7XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwNS8wMS8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIFRoZSBiYXNrZXQgcGFnZS5cclxuLy9cclxuLy8gRlVOQ1RJT05BTElUWVxyXG4vLyAtIENhbGxzIHRoZSBiYXNrZXQtaW5mby1BUEkgd2hlcmUgdXNpbmcgdGhlIGxvY2FsIHN0b3JhZ2UgaXQgaXMgYWJsZSB0byBzZW5kXHJcbi8vICAgYSBHRVQgcmVxdWVzdCB0byB0ZWggQVBJIHNpdGUgdXNpbmcgdGhlIHByaW1hcnkga2V5cyBvZiB0aGUgaXRlbXMgaW4gdGhlXHJcbi8vICAgYmFza2V0LlxyXG4vLyAtIEJ1aWxkcyBwYXJ0IG9mIHRoZSBET00gd2hpY2ggd2lsbCBkaXNwbGF5IGluZm9ybWF0aW9uIHJlZ2FyZGluZyB3aGF0IGlzIGluXHJcbi8vICAgYmFza2V0LlxyXG4vLyAtIFNldHMga2V5IGJpbmRlcnMgb24gdGhlIHF1YW50aXR5IG9wdGlvbiBhbmQgXCJ4XCIgb3B0aW9uIHNvIHRoYXQgaXQgdXBkYXRlc1xyXG4vLyAgIHRoZSBiYXNrZXQuXHJcbi8vIC0gVXBkYXRlcyB0b3RhbHMgc2VjdGlvbiBvbiBsb2FkIGlmIHRoZXJlIGlzIHNvbWV0aGluZyBpbiB0aGUgYmFza2V0LlxyXG4vLyAtIFNldCBrZXkgYmluZGVycyBzbyB0aGF0IHdoZW5ldmVyIHRoZXJlIGlzIGEgY2hhbmdlIHRvIHRoZSBiYXNrZXQgaXRlbXMsXHJcbi8vICAgdGhlIHRvdGFscyB3aWxsIGFsc28gdXBkYXRlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gSU1QT1JUU1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IE51bWJlckZvcm1hdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbnVtYmVyX2Zvcm1hdFwiO1xyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9iYXNrZXQtaXRlbXNcIjtcclxuaW1wb3J0IHsgUXVhbnRpdHlDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWFudGl0eVwiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIEJhc2tldFBhZ2UgZXh0ZW5kcyBCYXNrZXRTdGF0ZSB7XHJcbiAgLyoqXHJcbiAgICogV2lsbCBidWlsZCBlbGVtZW50cyBvbnRvIGJhc2tldCBwYWdlIHVzaW5nIGFuIEFQSSB0byByZXRyaWV2ZVxyXG4gICAqIGluZm9ybWF0aW9uIG9uIHByb2R1Y3RzIGN1cnJlbnRseSBpbiB0aGUgdXNlcidzIGJhc2tldCAoaW5mb3JtYXRpb25cclxuICAgKiBzdG9yZWQgaW4gbG9jYWwgc3RvcmFnZSlcclxuICAgKi9cclxuXHJcbiAgLy8gVGhlIG1haW4gbG9jYXRpb24gYXMgdG8gd2hlcmUgZWFjaCBwcm9kdWN0IHdpbGwgYmUgaW5zZXJ0ZWQgZnJvbSB0aGVcclxuICAvLyB1c2VyJ3MgYmFza2V0LlxyXG4gIHN1bW1hcnlJdGVtc1BhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJiYXNrZXQtc3VtbWFyeS1kYXRhXCJcclxuICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBiYXNrZXRJdGVtczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIHByb2Nlc3MgaW4gd2hpY2ggdGhlIGJhc2tldCBwYWdlIERPTSBpcyBidWlsZC5cclxuICAgICAqL1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGlmICh0aGlzLml0ZW1zICE9IG51bGwgJiYgdGhpcy5pdGVtcyAhPSBcInt9XCIpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gSlNPTi5wYXJzZSh0aGlzLml0ZW1zKSkge1xyXG4gICAgICAgIHRoaXMuYmFza2V0SXRlbXMucHVzaChrZXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBiYXNrZXRJdGVtc1N0ciA9IHRoaXMuYmFza2V0SXRlbXMuam9pbihcIixcIik7XHJcblxyXG4gICAgICAvLyBDYWxsIEFQSVxyXG4gICAgICBjb25zdCBBUElQYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcclxuICAgICAgICAvYmFza2V0LiovLFxyXG4gICAgICAgIFwiYmFza2V0LWluZm8tQVBJLz9wa3M9XCIgKyBiYXNrZXRJdGVtc1N0clxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCBBUElSZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgaWYgKEFQSVJlc3BvbnNlLnByb2R1Y3RzSW5mbykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkX2Jhc2tldF9zdW1tYXJ5KEFQSVJlc3BvbnNlLnByb2R1Y3RzSW5mbyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX2Jhc2tldF9zdW1tYXJ5KGFsbFByb2R1Y3RzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgZWFjaCBlbGVtZW50IGludG8gdGhlIERPTSBpbnNpZGUgdGhlIHRhcmdldCBwYXJlbnQgY29udGFpbmVyLlxyXG4gICAgICogVGhlcmUgZWxlbWVudHMgYmVpbmcgYWRkZWQgd2lsbCBiZSB0aGUgcHJvZHVjdCdzIGltYWdlLCBuYW1lLCBzdG9yZVxyXG4gICAgICogbmFtZSAsIGNvbG91ciwgcXVhbnRpdHkgb3B0aW9ucywgcHJpY2UgYW5kIGEgYnV0dG9uIHRvIHJlbW92ZSBhbiBpdGVtXHJcbiAgICAgKiBmcm9tIHRoZSBiYXNrZXQuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGFycmFuZ2VtZW50IG9mIHRoZSBIVE1MIGlzIHN1Y2ggdGhhdCB0aGUgaW1hZ2UgaXMgb24gdGhlIGxlZnQgaGFuZFxyXG4gICAgICogc2lkZS4gUHJvZHVjdCBpbmZvcm1hdGlvbiBhbG9uZyB3aXRoIHRoZSBxdWFudGl0eSBvcHRpb25zIGFyZSBpbiB0aGVcclxuICAgICAqIG1pZGRsZS4gUHJpY2UgYW5kIHRoZSBvcHRpb24gdG8gcmVtb3ZlIGFuIGl0ZW0gaXMgb24gdGhlIHJpZ2h0IGhhbmRcclxuICAgICAqIHNpZGUuIEFzIHN1Y2gsIHRoZXJlIHdpbGwgYmUgdGhyZWUgc3ViLWNvbnRhaW5lcnMgd2hlcmUgZWFjaCBlbGVtZW50XHJcbiAgICAgKiB3aWxsIGJlIGFkZGVkIHRvIHRoYXQgY29udGFpbmVyLlxyXG4gICAgICpcclxuICAgICAqIEVhY2ggb2YgdGhvc2UgY29udGFpbmVycyB3aWxsIHRoZW4gYmUgYWRkZWQgdG8gYSBtYWluIGNvbnRhaW5lclxyXG4gICAgICogcmVwcmVzZW50aW5nIGEgcm93IG9mIGRhdGEgd2hpY2ggd2lsbCB0aGVuIGJlIGFkZGVkIHRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHByb2R1Y3RQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvYmFza2V0LiovLCBcInByb2R1Y3RzL1wiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJvZHVjdCA9IGFsbFByb2R1Y3RzW2ldO1xyXG4gICAgICBjb25zdCBpdGVtcyA9IE51bWJlcihKU09OLnBhcnNlKHRoaXMuaXRlbXMpW3Byb2R1Y3QucHJvZHVjdElkXSk7XHJcblxyXG4gICAgICAvLyBNYWluIGNvbnRhaW5lciBhbmQgc3ViLWNvbnRhaW5lci5cclxuICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIGNvbnN0IHByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgIC8vIERpdiB0byBjb250YWluIGFsbCBwcm9kdWN0IGVsZW1lbnRzLCB3aGljaCB3aWxsIHRoZW4gYmUgYXBwZW5kZWRcclxuICAgICAgLy8gaW50byB0aGUgcGFyZW50IGVsZW1lbnQuXHJcbiAgICAgIG1haW5Db250YWluZXIuY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93XCI7XHJcbiAgICAgIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwicHJvZHVjdC1pZFwiLCBwcm9kdWN0LnByb2R1Y3RJZCk7XHJcblxyXG4gICAgICBpbWdDb250YWluZXIuY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19jb250YWluZXIgYmFza2V0LXN1bW1hcnlfX3Jvd19fY29udGFpbmVyLS1pbWdcIlxyXG4gICAgICBpbmZvQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fY29udGFpbmVyXCJcclxuICAgICAgcHJpY2VDb250YWluZXIuY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19jb250YWluZXJcIlxyXG5cclxuICAgICAgaW1nQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29udGVudHMnLCAncHJvZHVjdC1pbWcnKVxyXG4gICAgICBpbmZvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29udGVudHMnLCAncHJvZHVjdC1pbmZvJylcclxuICAgICAgcHJpY2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdjb250ZW50cycsICdwcm9kdWN0LXByaWNlJylcclxuXHJcbiAgICAgIC8vIFByb2R1Y3QgSW1hZ2UgRW1iZWRkZWQgaW4gTGluayBFbGVtZW50XHJcbiAgICAgIGNvbnN0IGltZ0FUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgaW1nQVRhZy5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2RhdGFcIjtcclxuICAgICAgaW1nQVRhZy5ocmVmID0gcHJvZHVjdFBhZ2UgKyBwcm9kdWN0LnByb2R1Y3RJZDtcclxuICAgICAgaW1nQVRhZy5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtaW1hZ2VcIik7XHJcbiAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpbWdFbGVtLnNyYyA9IHByb2R1Y3QuaW1hZ2U7XHJcbiAgICAgIGltZ0VsZW0uYWx0ID0gXCJJbWFnZSBvZiBcIiArIHByb2R1Y3QucHJvZHVjdE5hbWU7XHJcbiAgICAgIGltZ0FUYWcuYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcblxyXG4gICAgICAvLyBQcm9kdWN0IE5hbWVcclxuICAgICAgY29uc3QgbmFtZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgbmFtZUVsZW0uY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19kYXRhIHRleHQtbGlua1wiO1xyXG4gICAgICBuYW1lRWxlbS5ocmVmID0gcHJvZHVjdFBhZ2UgKyBwcm9kdWN0LnByb2R1Y3RJZDtcclxuICAgICAgbmFtZUVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LW5hbWVcIik7XHJcbiAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5wcm9kdWN0TmFtZTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3QgU3RvcmVcclxuICAgICAgY29uc3Qgc3RvcmVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIHN0b3JlRWxlbS5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2RhdGEgdGV4dC1saW5rXCI7XHJcbiAgICAgIHN0b3JlRWxlbS5ocmVmID0gXCIvc3RvcmVzL1wiICsgcHJvZHVjdC5zdG9yZUlkO1xyXG4gICAgICBzdG9yZUVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXN0b3JlXCIpO1xyXG4gICAgICBzdG9yZUVsZW0udGV4dENvbnRlbnQgPSBwcm9kdWN0LnN0b3JlTmFtZTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3QgQ29sb3VyXHJcbiAgICAgIGNvbnN0IGNvbG91ckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgY29sb3VyRWxlbS5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2RhdGFcIjtcclxuICAgICAgY29sb3VyRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtY29sb3VyXCIpO1xyXG4gICAgICBjb2xvdXJFbGVtLnRleHRDb250ZW50ID0gcHJvZHVjdC5jb2xvdXJOYW1lO1xyXG5cclxuICAgICAgLy8gUXVhbnRpdHlcclxuICAgICAgLy8gTk9URTogVGhlIEhUTUwgZm9ybWF0IG11c3QgZm9sbG93IHRoZSBzdHJ1Y3R1cmUgZGVmaW5lZCBpbiB0aGUgcXVhbnRpdHlcclxuICAgICAgLy8gY29tcG9uZW50LlxyXG4gICAgICBjb25zdCBxdWFudGl0eUNvbnRhaW5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5IGJhc2tldC1zdW1tYXJ5X19yb3dfX2Z1bmN0aW9uXCI7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5pZCA9IFwicHJvZHVjdC1cIiArIHByb2R1Y3QucHJvZHVjdElkO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJxdWFudGl0eVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2lucHV0XCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQubWluID0gXCIwXCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuc3RlcCA9IFwiMVwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0Lm1heCA9IHByb2R1Y3QuaW52ZW50b3J5O1xyXG4gICAgICBxdWFudGl0eUlucHV0LnZhbHVlID0gaXRlbXMudG9TdHJpbmcoKTtcclxuICAgICAgcXVhbnRpdHlJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBlbnRlcmVkIGlzIGEgcG9zaXRpdmUgaW50ZWdlciB0aGVuIHRoZSBjZXJ0YWluIHVwZGF0ZXNcclxuICAgICAgICAvLyB3aWxsIHRha2UgcGxhY2UuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVhbnRpdHlJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKFZhbGlkYXRpb24uY2hlY2tfaWZfcG9zaXRpdmVfaW50KE51bWJlcihxdWFudGl0eUlucHV0LnZhbHVlKSkpIHtcclxuICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBlbnRlcmVkIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbWF4LCB0aGVuIHNldCBpdCB0byB0aGUgbWF4LlxyXG4gICAgICAgICAgbGV0IHZhbHVlID0gTnVtYmVyKHF1YW50aXR5SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgaWYgKHZhbHVlID4gTnVtYmVyKHF1YW50aXR5SW5wdXQubWF4KSkge1xyXG4gICAgICAgICAgICBxdWFudGl0eUlucHV0LnZhbHVlID0gcXVhbnRpdHlJbnB1dC5tYXg7XHJcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHF1YW50aXR5SW5wdXQubWF4KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGxvY2FsIHN0b3JhZ2UgKHVzZXIncyBiYXNrZXQpXHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZV9zaW5nbGVfaXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcHJpY2VcclxuICAgICAgICAgIHByaWNlU3Bhbi50ZXh0Q29udGVudCA9ICh2YWx1ZSAqIHByb2R1Y3QucHJpY2UpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBiYXNrZXQgdG90YWxzXHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG1pbnVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgbWludXNCdG4uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19idG5cIjtcclxuICAgICAgbWludXNCdG4uc2V0QXR0cmlidXRlKFwiY29udHJvbFwiLCBcInF1YW50aXR5LWRvd25cIik7XHJcbiAgICAgIG1pbnVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVfYW5faXRlbShwcm9kdWN0LnByb2R1Y3RJZCwgcHJvZHVjdC5wcmljZSwgcHJpY2VTcGFuKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcGx1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIHBsdXNCdG4uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19idG5cIjtcclxuICAgICAgcGx1c0J0bi5zZXRBdHRyaWJ1dGUoXCJjb250cm9sXCIsIFwicXVhbnRpdHktdXBcIik7XHJcbiAgICAgIHBsdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmFkZF9hbl9pdGVtKHByb2R1Y3QucHJvZHVjdElkLCBwcm9kdWN0LnByaWNlLCBwcmljZVNwYW4pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgfSk7XHJcbi8vXHJcbiAgICAgIGNvbnN0IG1pbnVzQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICBtaW51c0J0blNwYW4uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19idG5fX3RleHRcIjtcclxuICAgICAgbWludXNCdG5TcGFuLnRleHRDb250ZW50ID0gXCItXCI7XHJcbi8vXHJcbiAgICAgIGNvbnN0IHBsdXNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIHBsdXNCdG5TcGFuLmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI7XHJcbiAgICAgIHBsdXNCdG5TcGFuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbi8vXHJcbiAgICAgIG1pbnVzQnRuLmFwcGVuZENoaWxkKG1pbnVzQnRuU3Bhbik7XHJcbiAgICAgIHBsdXNCdG4uYXBwZW5kQ2hpbGQocGx1c0J0blNwYW4pO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQobWludXNCdG4pO1xyXG4gICAgICBxdWFudGl0eUNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQocXVhbnRpdHlJbnB1dCk7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChwbHVzQnRuKTtcclxuLy9cclxuICAgICAgLy8gUHJpY2VcclxuICAgICAgY29uc3QgcHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgIHByaWNlRWxlbS5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2RhdGFcIjtcclxuICAgICAgcHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgICBjb25zdCBwb3VuZEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgcG91bmRJLnRleHRDb250ZW50ID0gXCLCo1wiO1xyXG4gICAgICBwb3VuZEkuc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXByaWNlLWN1cnJlbmN5XCIpO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocG91bmRJKTtcclxuLy9cclxuICAgICAgY29uc3QgcHJpY2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHByaWNlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtcHJpY2UtdmFsdWVcIik7XHJcbiAgICAgIHByaWNlU3Bhbi50ZXh0Q29udGVudCA9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBhcmF0ZWRfMmRwKFxyXG4gICAgICAgIE51bWJlcihwcm9kdWN0LnByaWNlKSAqIGl0ZW1zXHJcbiAgICAgICk7XHJcbiAgICAgIHByaWNlRWxlbS5hcHBlbmRDaGlsZChwcmljZVNwYW4pO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIEl0ZW0gQnV0dG9uXHJcbiAgICAgIGNvbnN0IHJlbW92ZUl0ZW1TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLmNsYXNzTmFtZSA9IFwiYmFza2V0X19pY29uXCI7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicmVtb3ZlLWl0ZW1cIik7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgLy8gT24gcmVtb3ZhbCwgdXBkYXRlIHRoZSBET00gYW5kIHRoZSBiYXNrZXQvbG9jYWwgc3RvcmFnZSBhY2NvcmRpbmdseS5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJlbW92ZV93aG9sZV9pdGVtKHByb2R1Y3QucHJvZHVjdElkLCBtYWluQ29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYXNrZXRfdG90YWxzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZW1vdmVJdGVtSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJXCIpO1xyXG4gICAgICByZW1vdmVJdGVtSS5jbGFzc05hbWUgPSBcImZhIGZhLXRpbWVzXCI7XHJcbiAgICAgIHJlbW92ZUl0ZW1TcGFuLmFwcGVuZENoaWxkKHJlbW92ZUl0ZW1JKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHJlbW92ZUl0ZW1TcGFuKTtcclxuXHJcbiAgICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byB0aGVpciByZXNwZWN0aXZlIGNvbnRhaW5lcnMsIGFwcGVuZCB0aGF0IGNvbnRhaW5lclxyXG4gICAgICAvLyB0byB0aGUgbWFpbiBjb250YWluZXIgYW5kIHRoZW4gZmluYWxseSBhcHBlbmQgdGhlIG1haW4gY29udGFpbmVyIHRvIHRoZVxyXG4gICAgICAvLyBET00gdGFyZ2V0IGVsZW1lbnQuXHJcbiAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdBVGFnKVxyXG4gICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVFbGVtKVxyXG4gICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0b3JlRWxlbSlcclxuICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvdXJFbGVtKVxyXG4gICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1YW50aXR5Q29udGFpbmVyRWxlbSlcclxuICAgICAgcHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2VFbGVtKVxyXG4gICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcilcclxuICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKVxyXG4gICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlQ29udGFpbmVyKVxyXG4gICAgICB0aGlzLnN1bW1hcnlJdGVtc1BhcmVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IHRoZSBKYXZhU2NyaXB0IHRvIGVhY2ggcXVhbnRpdHkgY29tcG9uZW50LlxyXG4gICAgbmV3IFF1YW50aXR5Q29tcG9uZW50KCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV9iYXNrZXRfdG90YWxzKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSB0b3RhbHMgc2VjdGlvbiBpbiB0aGUgYmFza2V0IHBhZ2UuXHJcbiAgICAgKiBUaGUgSFRNTCBkZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHNldCB0aGUgbG9hZHMgdGhlIGVsZW1lbnRzIGFuZCBzZXQgdGhlXHJcbiAgICAgKiB2YWx1ZXMgdG8gwqMwLjAwIGZvciBlYWNoIGVsZW1lbnQuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgdXBkYXRlIHRoZSB0b3RhbHMuXHJcbiAgICAgKi9cclxuICAgIC8vIEJhc2tldCBFbGVtZW50cyBpbiB0aGUgRE9NXHJcbiAgICBjb25zdCBzdWJ0b3RhbEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldC1zdWJ0b3RhbFwiKSFcclxuICAgICAgLmNoaWxkcmVuWzFdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGNvbnN0IHZhdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldC12YXRcIikhXHJcbiAgICAgIC5jaGlsZHJlblsxXSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB0b3RhbEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldC10b3RhbFwiKSFcclxuICAgICAgLmNoaWxkcmVuWzFdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgICAvLyBJbml0aWFsIFZhbHVlXHJcbiAgICBsZXQgdG90YWxQcmljZSA9IDA7XHJcblxyXG4gICAgLy8gUmV0cmlldmUgYWxsIGVsZW1lbnRzIHdoZXJlIHRoZXJlIGlzIGEgcHJpY2UgYW5kIGl0ZXJhdGl2ZWx5IHVwZGF0ZVxyXG4gICAgLy8gdGhlIHRvdGFsIHByaWNlLlxyXG4gICAgY29uc3QgcHJpY2VFbGVtcyA9IGRvY3VtZW50XHJcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImJhc2tldC1zdW1tYXJ5LWRhdGFcIikhXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbZmllbGQ9XCJwcm9kdWN0LXByaWNlLXZhbHVlXCJdJyk7XHJcblxyXG4gICAgZm9yIChsZXQgcHJpY2VJZHggPSAwOyBwcmljZUlkeCA8IHByaWNlRWxlbXMubGVuZ3RoOyBwcmljZUlkeCsrKSB7XHJcbiAgICAgIHRvdGFsUHJpY2UgKz0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcF90b19mbG9hdChcclxuICAgICAgICBwcmljZUVsZW1zW3ByaWNlSWR4XS50ZXh0Q29udGVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgRE9NIHdpbGwgdGhlIG5ldyB0b3RhbCBmaWd1cmVzLlxyXG4gICAgY29uc3Qgc3ViVG90YWwgPSB0b3RhbFByaWNlIC8gMS4yO1xyXG4gICAgY29uc3QgdmF0ID0gdG90YWxQcmljZSAtIHN1YlRvdGFsO1xyXG5cclxuICAgIHN1YnRvdGFsRWxlbS50ZXh0Q29udGVudCA9IHN1YlRvdGFsLnRvRml4ZWQoMik7XHJcbiAgICB2YXRFbGVtLnRleHRDb250ZW50ID0gdmF0LnRvRml4ZWQoMik7XHJcbiAgICB0b3RhbEVsZW0udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcCh0b3RhbFByaWNlKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgcmVtb3ZlX2FuX2l0ZW0oXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuIER1cmluZyB0aGUgcHJvY2VzcywgaXQgd2lsbCB1cGRhdGVcclxuICAgICAqIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCB1cGRhdGUgdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmcsXHJcbiAgICBwcmljZTogc3RyaW5nLFxyXG4gICAgcHJpY2VFbGVtOiBIVE1MRWxlbWVudFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LlxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlbW92ZV9pdGVtKE51bWJlcihwcm9kdWN0SWQpLCAxKTtcclxuICAgIHByaWNlRWxlbS50ZXh0Q29udGVudCA9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBhcmF0ZWRfMmRwKFxyXG4gICAgICBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwX3RvX2Zsb2F0KHByaWNlRWxlbS50ZXh0Q29udGVudCkgLSBOdW1iZXIocHJpY2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBhZGRfYW5faXRlbShcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC4gRHVyaW5nIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwcm9kdWN0SWQ6IHN0cmluZyxcclxuICAgIHByaWNlOiBzdHJpbmcsXHJcbiAgICBwcmljZUVsZW06IEhUTUxFbGVtZW50XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkX2l0ZW0oTnVtYmVyKHByb2R1Y3RJZCksIDEpO1xyXG4gICAgcHJpY2VFbGVtLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgIE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBfdG9fZmxvYXQocHJpY2VFbGVtLnRleHRDb250ZW50KSArIE51bWJlcihwcmljZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHJlbW92ZV93aG9sZV9pdGVtKHByb2R1Y3RJZDogc3RyaW5nLCBwYXJlbnRDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gZW50aXJlIGl0ZW0gZnJvbSB0aGUgYmFza2V0LiBJbiB0aGUgcHJvY2VzcywgaXQgd2lsbCB1cGRhdGVcclxuICAgICAqIGxvY2FsIHN0b3JhZ2UgYW5kIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVtb3ZlX2VudGlyZV9pdGVtKHByb2R1Y3RJZCk7XHJcbiAgICBwYXJlbnRDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjcvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyBGdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gV2lsbCBoYW5kbGUgdGhlIGZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS4gVGhlc2UgaW5jbHVkZSB0aGVcclxuLy8gZm9sbG93aW5nOlxyXG4vL1xyXG4vLyAgLSBXaWxsIGJ1aWxkIG9udG8gdGhlIEhUTUwgYWRkaW5nIG9udG8gdGhlIGNvbG91cnMgZmlsdGVyIG9wdGlvbnMgYXMgd2VsbCBhc1xyXG4vLyAgICB0aGUgcHJvZHVjdCBpbmZvIHNlY3Rpb24uIFRoZXJlIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gd2hhdCBvdGhlclxyXG4vLyAgICByZWxhdGVkIHByb2R1Y3RzIHRoZXJlIGFyZSB0byB0aGUgY3VycmVudCBwYWdlLiBUaGlzIGluZm9ybWF0aW9uIHdpbGwgYmVcclxuLy8gICAgcmV0cmlldmVkIGZyb20gYW4gQVBJLlxyXG4vL1xyXG4vLyAgLSBXaWxsIGJ1aWxkIHRoZSBmdW5jdGlvbiBmb3IgdGhlIGFkZCB0byBiYXNrZXQgYnV0dG9uIGFsbG93aW5nIGl0ZW1zXHJcbi8vICAgIHRvIGJlIGFkZGVkIHRvIHRoZSBiYXNrZXQgYW5kIGZvciB0aGUgcGFnZSB0byBiZSByZWZyZXNoZWQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9iYXNrZXQtaXRlbXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbmRQcm9kdWN0UGFnZSBleHRlbmRzIEJhc2tldFN0YXRlIHtcclxuICAvKipcclxuICAgKiBXaWxsIGhhbmRsZSB0aGUgSlMgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLiBUaGVzZSBpbmNsdWRlIHRoZVxyXG4gICAqIGZvbGxvd2luZzpcclxuICAgKlxyXG4gICAqICAtIFdpbGwgYnVpbGQgb250byB0aGUgSFRNTCBhZGRpbmcgb250byB0aGUgY29sb3VycyBmaWx0ZXIgb3B0aW9ucyBhcyB3ZWxsIGFzXHJcbiAgICogICAgdGhlIHByb2R1Y3QgaW5mbyBzZWN0aW9uLiBUaGVyZSBlbGVtZW50cyB3aWxsIGJlIGFkZGVkIGJhc2VkIG9uIHdoYXQgb3RoZXJcclxuICAgKiAgICByZWxhdGVkIHByb2R1Y3RzIHRoZXJlIGFyZSB0byB0aGUgY3VycmVudCBwYWdlLiBUaGlzIGluZm9ybWF0aW9uIHdpbGwgYmVcclxuICAgKiAgICByZXRyaWV2ZWQgZnJvbSBhbiBBUEkuXHJcbiAgICpcclxuICAgKiAgLSBXaWxsIGJ1aWxkIHRoZSBmdW5jdGlvbiBmb3IgdGhlIGFkZCB0byBiYXNrZXQgYnV0dG9uIGFsbG93aW5nIGl0ZW1zXHJcbiAgICogICAgdG8gYmUgYWRkZWQgdG8gdGhlIGJhc2tldCBhbmQgZm9yIHRoZSBwYWdlIHRvIGJlIHJlZnJlc2hlZC5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIC0gUmV0cmlldmVzIGRhdGEgZnJvbSB0aGUgQVBJIGFuZCBjYWxscyBtZXRob2RzIHRvIGJ1aWxkIG9udG8gdGhlIERPTS5cclxuICAgICAqIC0gQWRkcyBmdW5jdGlvbmFsaXR5IG9udG8gdGhlIFwiYWRkIHRvIGJhc2tldCBidXR0b25cIi5cclxuICAgICAqL1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IEFQSVBhdGggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFxyXG4gICAgICBcIi9wcm9kdWN0cy9cIixcclxuICAgICAgXCIvcHJvZHVjdHMvaW5mby1hcGkvXCJcclxuICAgICk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgQVBJUGF0aCk7XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0ICYmIHJlcXVlc3Quc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAvLyBBZGRpbmcgY29sb3VyIHZhcmlhdGlvbnNcclxuICAgICAgICBpZiAoZGF0YS5jb2xvdXJzKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX2NvbG91cnMoZGF0YS5jb2xvdXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIG90aGVyIHByb2R1Y3RzIG9mIHRoZSBzYW1lIHNldFxyXG4gICAgICAgIGlmIChkYXRhLnNldHMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfcHJvZHVjdF9zZXRzKGRhdGEuc2V0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZGluZyBzaW1pbGFyIHByb2R1Y3RzXHJcbiAgICAgICAgaWYgKGRhdGEuc2ltaWxhcikge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9zaW1pbGFyX3Byb2R1Y3RzKGRhdGEuc2ltaWxhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZGluZyBmZWF0dXJlcyBpbmZvcm1hdGlvblxyXG4gICAgICAgIGlmIChkYXRhLmZlYXR1cmVzKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX2ZlYXR1cmVzKGRhdGEuZmVhdHVyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmFkZF90b19iYXNrZXQoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfY29sb3VycyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIG9udG8gdGhlIGRyb3Bkb3duIGNvbG91cnMgZHJvcGRvd24gbWVudSBhbmQgYWRkcyBtb3JlIGNvbG91cnNcclxuICAgICAqIGluIGFjY29yZGFuY2UgdG8gaG93IG1hbnkgaG93IG1hbnkgY29sb3VycyB3ZXJlIHJldHVybmVkIGZyb20gdGhlIEFQSS5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgYXBwZW5kIGVsZW1lbnRzIG9udG8gdGhlIGVsZW1lbnRcclxuICAgICAqICNwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zXHJcbiAgICAgKlxyXG4gICAgICogRm9yIGVhY2ggY29sb3VyLCB0aGUgZm9sbG93aW5nIEhUTUwgd2lsbCBiZSBhcHBlbmRlZDpcclxuICAgICAqXHJcbiAgICAgKiA8YVxyXG4gICAgICogICBocmVmPVwie2xpbmsgdG8gcHJvZHVjdH1cIlxyXG4gICAgICogICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsXCJcclxuICAgICAqICAgZm9yPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIlxyXG4gICAgICogLz5cclxuICAgICAqICAgPGxhYmVsIGZvcj1cImNvbG91ci17Y29sb3VyIG5hbWV9XCI+XHJcbiAgICAgKiAgICAgPHNwYW5cclxuICAgICAqICAgICAgIGNsYXNzPVwic20tY29sb3VyLWJveFwiXHJcbiAgICAgKiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB7Y29sb3VyIGhleCB2YWx1ZX07XCI+XHJcbiAgICAgKiAgICAgPC9zcGFuPlxyXG4gICAgICogICAgIHtjb2xvdXItbmFtZX1cclxuICAgICAqICAgPC9sYWJlbD5cclxuICAgICAqIDwvYT5cclxuICAgICAqIDxpbnB1dFxyXG4gICAgICogICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICogICBjbGFzcz1cImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX3JhZGlvLWJ0blwiXHJcbiAgICAgKiAgIG5hbWU9XCJwcm9kLWYtY29sb3VyXCJcclxuICAgICAqICAgaWQ9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAgIHZhbHVlPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIlxyXG4gICAgICogLz5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1jb2xvdXItdmFyaWF0aW9uc1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGF0dHJzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgY29uc3QgY29sb3VyID0gYXR0cnNbYV0uY29sX25hbWU7XHJcbiAgICAgICAgY29uc3QgaGV4X3ZhbCA9IGF0dHJzW2FdLmNvbF9oZXhfdmFsO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJhXCIgdGFnXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQVwiKTtcclxuICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImxhYmVsXCIgdGFnXHJcbiAgICAgICAgY29uc3QgbGFiZWxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpO1xyXG4gICAgICAgIGxhYmVsRWxlbS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb2xvdXItXCIgKyBjb2xvdXIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgXCJzcGFuXCIgdGFnXHJcbiAgICAgICAgY29uc3Qgc3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICBzcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNtLWNvbG91ci1ib3hcIik7XHJcbiAgICAgICAgc3BhbkVsZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGhleF92YWwgKyBcIjtcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImlucHV0XCIgdGFnXHJcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvZC1mLWNvbG91clwiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb2xvdXItXCIgKyBjb2xvdXIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyBlYWNoIHRhZyB0byB0aGVpciByZXNwZWN0aXZlIHBhcmVudCBlbGVtZW50cy5cclxuICAgICAgICBsYWJlbEVsZW0uYXBwZW5kQ2hpbGQoc3BhbkVsZW0pO1xyXG4gICAgICAgIGxhYmVsRWxlbS5hcHBlbmQoY29sb3VyKTtcclxuICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChsYWJlbEVsZW0pO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmRpbmcgdGhlIGVsZW1lbnRzIHRvIHRoZSB0YXJnZXQgZWxlbWVudCBpbiB0aGUgRE9NLlxyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQoaW5wdXRFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnMgZG9lcyBub3QgZXhpc3QsIGFsdGVybmF0aXZlIGNvbG91cnMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGJ1aWxkX3Byb2R1Y3Rfc2V0cyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIG9udG8gdGhlIFwicHJvZHVjdCBzZXRzXCIgc2VjdGlvbnMuXHJcbiAgICAgKiBXaWxsIGFwcGVuZCBlYWNoIHByb2R1Y3Qgc2V0IG9udG8gI3Byb2R1Y3Qtc2V0cy5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBwcm9kdWNlIHRoZSBmb2xsb3dpbmcgSFRNTCBmb3IgZWFjaCBzZXQ6XHJcbiAgICAgKlxyXG4gICAgICogPGEgY2xhc3M9XCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIiBocmVmPVwie3Byb2R1Y3QgdXJsfVwiXHJcbiAgICAgKiAgIDxpbWdcclxuICAgICAqICAgICBjbGFzcz1cInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICogICAgIGFsdD1cIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIHtwcm9kdWN0IG5hbWV9XCJcclxuICAgICAqICAgPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0IG5hbWV9PC9zcGFuPlxyXG4gICAgICogICA8c3BhbiBjbGFzcz1cInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCI+e3Byb2R1Y3QgcHJpY2V9PC9zcGFuPlxyXG4gICAgICogPC9hPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LXNldHNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgaWYgKGF0dHJzLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgIC8vIFVzaW5nIGRhdGEgcmV0cmlldmVkIGZyb20gdGhlIEFQSSB0byBidWlsZCBjb25zdGFudHNcclxuICAgICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbYV0ubmFtZTtcclxuICAgICAgICAgIGNvbnN0IGltZyA9IGF0dHJzW2FdLnNob3djYXNlX2ltYWdlO1xyXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBhdHRyc1thXS5wcmljZTtcclxuXHJcbiAgICAgICAgICAvLyBcIkFcIiB0YWcgd2hpY2ggd2lsbCBjb250YWluIHRoZSBpbWFnZSBhbmQgdGhlIHRleHQuXHJcbiAgICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LXNldCByZWxhdGVkLXByb2R1Y3RcIik7XHJcbiAgICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG5cclxuICAgICAgICAgIC8vIFwiSU1HXCIgdGFnIGZvciBwcm9kdWN0IGltYWdlLlxyXG4gICAgICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInByb2R1Y3Qtc2V0X19pbWcgcmVsYXRlZC1wcm9kdWN0X19pbWdcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJhbHRcIixcclxuICAgICAgICAgICAgXCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiAoXCIgKyBuYW1lICsgXCJ9XCJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgLy8gXCJTUEFOXCIgdGFncyBjb250YWluaW5nIHRoZSBwcm9kdWN0IG5hbWUgYW5kIHByaWNlXHJcbiAgICAgICAgICBjb25zdCB0ZXh0U3BhbkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgICAgIHRleHRTcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgICAgXCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRleHRTcGFuRWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgICAgY29uc3QgdGV4dFByaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgICAgdGV4dFByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgICAgXCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGV4dFByaWNlRWxlbS50ZXh0Q29udGVudCA9IFwiwqNcIiArIHByaWNlO1xyXG5cclxuICAgICAgICAgIC8vIFNldCB0aGUgaW1hZ2UgYW5kIHRleHQgZWxlbWVudHMgdG8gYmVjb21lIGNoaWxkcmVuIG9mIHRoZSBsaW5rRWxlbVxyXG4gICAgICAgICAgLy8gYW5kIGFwcGVuZCB0aGVtIG9udG8gdGhlIHRhcmdldEVsZW0gaW4gdGhlIERPTS5cclxuICAgICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtKTtcclxuICAgICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRQcmljZUVsZW0pO1xyXG4gICAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldEVsZW0ucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNwcm9kdWN0LXNldHMgZG9lcyBub3QgZXhpc3QsIHByb2R1Y3Qtc2V0cyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfc2ltaWxhcl9wcm9kdWN0cyhhdHRyczogYW55W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIG9udG8gdGhlIFwic2ltaWxhciBwcm9kdWN0c1wiIHNlY3Rpb25zLlxyXG4gICAgICogV2lsbCBhcHBlbmQgZWFjaCBwcm9kdWN0IHNldCBvbnRvICNzaW1pbGFyLXByb2R1Y3RzLlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHByb2R1Y2UgdGhlIGZvbGxvd2luZyBIVE1MIGZvciBlYWNoIHNldDpcclxuICAgICAqXHJcbiAgICAgKiA8YSBjbGFzcz1cInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiIGhyZWY9XCJ7cHJvZHVjdCB1cmx9XCJcclxuICAgICAqICAgPGltZ1xyXG4gICAgICogICAgIGNsYXNzPVwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgKiAgICAgYWx0PVwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4ge3Byb2R1Y3QgbmFtZX1cIlxyXG4gICAgICogICA+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCI+e3Byb2R1Y3QgbmFtZX08L3NwYW4+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIj57cHJvZHVjdCBwcmljZX08L3NwYW4+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbWlsYXItcHJvZHVjdHNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgaWYgKGF0dHJzLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgIC8vIFVzaW5nIGRhdGEgcmV0cmlldmVkIGZyb20gdGhlIEFQSSB0byBidWlsZCBjb25zdGFudHNcclxuICAgICAgICAgIGNvbnN0IGhyZWYgPSBcIi9wcm9kdWN0cy9cIiArIGF0dHJzW2FdLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbYV0ubmFtZTtcclxuICAgICAgICAgIGNvbnN0IGltZyA9IGF0dHJzW2FdLnNob3djYXNlX2ltYWdlO1xyXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBhdHRyc1thXS5wcmljZTtcclxuXHJcbiAgICAgICAgICAvLyBcIkFcIiB0YWcgd2hpY2ggd2lsbCBjb250YWluIHRoZSBpbWFnZSBhbmQgdGhlIHRleHQuXHJcbiAgICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaW1pbGFyLXByb2R1Y3QgcmVsYXRlZC1wcm9kdWN0XCIpO1xyXG4gICAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbiAgICAgICAgICAvLyBcIklNR1wiIHRhZyBmb3IgcHJvZHVjdCBpbWFnZS5cclxuICAgICAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImFsdFwiLFxyXG4gICAgICAgICAgICBcIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIChcIiArIG5hbWUgKyBcIn1cIlxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAvLyBcIlNQQU5cIiB0YWdzIGNvbnRhaW5pbmcgdGhlIHByb2R1Y3QgbmFtZSBhbmQgcHJpY2VcclxuICAgICAgICAgIGNvbnN0IHRleHRTcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgICAgdGV4dFNwYW5FbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRleHRTcGFuRWxlbS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICAgICAgY29uc3QgdGV4dFByaWNlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgICAgdGV4dFByaWNlRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiY2xhc3NcIixcclxuICAgICAgICAgICAgXCJzaW1pbGFyLXByb2R1Y3RfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRleHRQcmljZUVsZW0udGV4dENvbnRlbnQgPSBcIsKjXCIgKyBwcmljZTtcclxuXHJcbiAgICAgICAgICAvLyBTZXQgdGhlIGltYWdlIGFuZCB0ZXh0IGVsZW1lbnRzIHRvIGJlY29tZSBjaGlsZHJlbiBvZiB0aGUgbGlua0VsZW1cclxuICAgICAgICAgIC8vIGFuZCBhcHBlbmQgdGhlbSBvbnRvIHRoZSB0YXJnZXRFbGVtIGluIHRoZSBET00uXHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuICAgICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRTcGFuRWxlbSk7XHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0UHJpY2VFbGVtKTtcclxuICAgICAgICAgIHRhcmdldEVsZW0uYXBwZW5kQ2hpbGQobGlua0VsZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRFbGVtLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjc2ltaWxhci1wcm9kdWN0cyBkb2VzIG5vdCBleGlzdCwgc2ltaWxhci1wcm9kdWN0cyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGJ1aWxkX2ZlYXR1cmVzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGZlYXR1cmVzIHNlY3Rpb24gb2YgcHJvZHVjdCBpbmZvcm1hdGlvbiBiYXNlZCBvbiByZXN1bHRzXHJcbiAgICAgKiByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJLlxyXG4gICAgICogV2lsbCBjcmVhdGUgYSBcIlBcIiB0YWcgZm9yIGVhY2ggZmlsdGVyIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgdGFyZ2V0XHJcbiAgICAgKiBlbGVtZW50IGluIHRoZSBET00uXHJcbiAgICAgKi9cclxuXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWZlYXR1cmVzXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgYXR0cnMubGVuZ3RoOyBmKyspIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gYXR0cnNbZl0ubmFtZTtcclxuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3QtaW5mb19fc2VjdGlvbl9fdGV4dFwiKTtcclxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChuZXdFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3QtZmVhdHVyZXMgZG9lcyBub3QgZXhpc3QsIHNpbWlsYXItcHJvZHVjdHMgY2Fubm90IGJlIGFkZGVkLlwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGFkZF90b19iYXNrZXQoKSB7XHJcbiAgICAvKiogQWRkcyBwcm9kdWN0cyBpbnRvIHRoZSBiYXNrZXQgKi9cclxuICAgIGNvbnN0IGlucHV0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcInF1YW50aXR5LWN0cmxcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcHJvZHVjdElkID0gTnVtYmVyKGlucHV0RWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlkXCIpKTtcclxuXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJhZGQtdG8tYmFza2V0LWJ0blwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHF1YW50aXR5ID0gTnVtYmVyKGlucHV0RWxlbS52YWx1ZSk7XHJcblxyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihxdWFudGl0eSkpIHtcclxuICAgICAgICBzdXBlci5hZGRfaXRlbShwcm9kdWN0SWQsIHF1YW50aXR5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcIkNoZWNrIHRoZSBxdWFudGl0eSwgaXQgaXMgZWl0aGVyIE5hTiBvciBhIGZsb2F0LiBNdXN0IGJlIGEgbnVtYmVyXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwMi8wMi8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIFJldmlld3Mgc2VjdGlvbiBvbiBhIHByb2R1Y3QgcGFnZS9cclxuLy9cclxuLy8gT1ZFUlZJRVdcclxuLy8gT24gdGhlIHByb2R1Y3RzIHBhZ2UgaWYgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZCBhbmQgdGhlIHVzZXIgaGFzIGxlZnRcclxuLy8gY29tbWVudHMsIHRoZXJlIHdpbGwgYmUgb3Bwb3J0dW5pdHkgdG8gdXBkYXRlIG9yIGRlbGV0ZSB0aGF0IGNvbW1lbnQuXHJcbi8vXHJcbi8vIE9uIGxvYWQsIHRoZSBjb21tZW50IHdpbGwgYmUgcGxhY2VkIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UsIHdpdGggYW4gZWRpdCBhbmRcclxuLy8gZGVsZXRlIGJ1dHRvbi5cclxuLy9cclxuLy8gSWYgdXNlciBjbGlja3Mgb24gdGhlIGVkaXQgYnV0dG9uLCByZXBsYWNlIHRoZSBjb21tZW50IHdpdGggZm9ybSBlbGVtZW50c1xyXG4vLyBhbGxvd2luZyB0aGUgdXNlciB0byBlZGl0IHRoZSByYXRpbmcsIHRpdGxlIGFuZCBjb21tZW50LiBPbiBjbGlja2luZyBlZGl0LFxyXG4vLyBhIGhpZGRlbiBpbnB1dCBidXR0b24gd2lsbCBiZSB1cGRhdGVkIHRoZSBpbmRpY2F0ZSB0aGF0IHRoZSB1c2VyIGhhcyBjaG9zZW5cclxuLy8gdG8gdXBkYXRlIHRoZWlyIGNvbnRlbnQuXHJcbi8vXHJcbi8vIEJlbG93IGFsbCBvZiB0aGlzLCB0aGVyZSB3aWxsIGJlIGEgc3VibWl0IGFuZCBjYW5jZWwgYnV0dG9uLiBUaGUgY2FuY2VsXHJcbi8vIGJ1dHRvbiB3aWxsIG5vdCBtYWtlIGFueSBjaGFuZ2VzLCByYXRoZXIgcmV0dXJuIHRvIHRoZSBvcmlnaW5hbCB2aWV3LlxyXG4vL1xyXG4vLyBJZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBzdWJtaXQgYnV0dG9uLCBhIGhpZGRlbiBzdWJtaXQgYnV0dG9uIHdvdWxkIG5lZWQgdG9cclxuLy8gY2xpY2tlZCB0aHJvdWdoIHRoZSBKYXZhU2NyaXB0IHdoaWNoIHdpbGwgc2VudCBhIFBPU1QgcmVxdWVzdCB0byB0aGUgYmFja2VuZC5cclxuLy9cclxuLy8gSWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgZGVsZXRlIGJ1dHRvbiwgdGhlcmUgd2lsbCBiZSBhIHBvcCB1cCBhc2tpbmcgdGhlbSB0b1xyXG4vLyBjb25maXJtIHRoYXQgdGhleSB3YW50IHRvIGRlbGV0ZSB0aGVpciBwb3N0LiBJZiBjb25maXJtZWQsIHRoZW4gYW4gaGlkZGVuXHJcbi8vIGlucHV0IHdpbGwgYmUgdXBkYXRlZCBhbmQgYSB0aGUgc3VibWl0IGNsaWNrZWQgc2VuZGluZyBhIFBPU1QgcmVxdWVzdCBvdCB0aGVcclxuLy8gYmFja2VuZC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VXNlclJldmlldyB7XHJcbiAgLy8gRm9ybSBjb250YWluaW5nIHRoZSB1c2VyIHJldmlldyBvciBudWxsLlxyXG4gIHVzZXJSZXZpZXdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInByb2R1Y3QtdXNlci1yZXZpZXctZm9ybVwiXHJcbiAgKSBhcyBIVE1MRm9ybUVsZW1lbnQgfCBudWxsO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yIGhvbGRzIHRoZSBjb25zdGFudHMgYW5kIGRpY3RhdGVzIHRoZSBidWlsZCBvcmRlciBvZiBlYWNoXHJcbiAgICAgKiBlbGVtZW50LlxyXG4gICAgICovXHJcblxyXG4gICAgaWYgKHRoaXMudXNlclJldmlld0Zvcm0pIHtcclxuICAgICAgLy8gRWxlbWVudHMgZnJvbSB0aGUgZm9ybSB0aGF0IHdpbCBiZSBpbnRlcmFjdGVkIHdpdGguXHJcblxyXG4gICAgICAvLyBDdXJyZW50IHVzZXIgcmV2aWV3IHNlY3Rpb25cclxuICAgICAgY29uc3QgY3VycmVudFJldmlld1NlY3RzID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICdbdXNlclNlY3Rpb249XCJjdXJyZW50LXNlY3Rpb25cIl0nXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZVJldmlld1NlY3RzID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICdbdXNlclNlY3Rpb249XCJ1cGRhdGUtc2VjdGlvblwiXSdcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29uZmlybURlbGV0ZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgXCJwcm9kdWN0LXJldmlld3NfX3Jldmlld19fY29uZmlybS1kZWxldGVcIlxyXG4gICAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgLy8gQnV0dG9uc1xyXG4gICAgICBjb25zdCBlZGl0QnRuID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3VzZXItcmV2aWV3LWVkaXQtc3RhcnRcIlxyXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjdXNlci1yZXZpZXctZWRpdC1jYW5jZWxcIlxyXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3VzZXItcmV2aWV3LWRlbGV0ZS1zdGFydFwiXHJcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1zdWJtaXRcIlxyXG4gICAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgICAgLy8gSW5wdXQgZWxlbWVudHNcclxuICAgICAgY29uc3QgdXNlclN1Ym1pdEJ0biA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1lZGl0LXN1Ym1pdFwiXHJcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAvLyAgIC8vIEhpZGRlbiBpbnB1dHNcclxuICAgICAgY29uc3Qgb3BlcmF0aW9uSElucHV0ID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3VzZXItcmV2aWV3LW9wZXJhdGlvblwiXHJcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgLy8gICBjb25zdCB1c2VyUmF0aW5nSElucHV0ID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5nZXRFbGVtZW50QnlJZChcclxuICAgICAgLy8gICAgIFwidXNlci1yZXZpZXctcmF0aW5nXCJcclxuICAgICAgLy8gICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUJvb2xISW5wdXQgPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjdXNlci1yZXZpZXctZGVsZXRlLWJvb2xcIlxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICB0aGlzLl9idWlsZF91cGRhdGVfY29tbWVudHNfZWRpdF9idG4oXHJcbiAgICAgICAgZWRpdEJ0bixcclxuICAgICAgICBjdXJyZW50UmV2aWV3U2VjdHMsXHJcbiAgICAgICAgdXBkYXRlUmV2aWV3U2VjdHNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fYnVpbGRfdXBkYXRlX2NvbW1lbnRzX2NhbmNlbF9idG4oXHJcbiAgICAgICAgY2FuY2VsQnRuLFxyXG4gICAgICAgIGN1cnJlbnRSZXZpZXdTZWN0cyxcclxuICAgICAgICB1cGRhdGVSZXZpZXdTZWN0c1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9idWlsZF91cGRhdGVfY29tbWVudHNfc3VibWl0X2J0bihcclxuICAgICAgICB1c2VyU3VibWl0QnRuLFxyXG4gICAgICAgIHN1Ym1pdEJ0bixcclxuICAgICAgICBvcGVyYXRpb25ISW5wdXRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fYnVpbGRfZGVsZXRlX2Z1bmN0aW9ucyhcclxuICAgICAgICBkZWxldGVCdG4sXHJcbiAgICAgICAgb3BlcmF0aW9uSElucHV0LFxyXG4gICAgICAgIGNvbmZpcm1EZWxldGVCb3gsXHJcbiAgICAgICAgZGVsZXRlQm9vbEhJbnB1dCxcclxuICAgICAgICBzdWJtaXRCdG5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF91cGRhdGVfY29tbWVudHNfZWRpdF9idG4oXHJcbiAgICBlZGl0QnRuOiBIVE1MRWxlbWVudCxcclxuICAgIGN1cnJlbnRSZXZpZXdTZWN0czogTm9kZUxpc3QsXHJcbiAgICB1cGRhdGVSZXZpZXdTZWN0czogTm9kZUxpc3RcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBjb250cm9scyBmb3IgdGhlIGVkaXQgYnV0dG9uLlxyXG4gICAgICogT24gY2xpY2ssIHRoZSB1c2VyJ3MgcmV2aWV3IGluIHRoZSBmb3JtIG9mIGJsb2NrIHRleHQgd2lsbCBoaWRlXHJcbiAgICAgKiBhbmQgYSBmb3JtIHdpbGwgYmUgc2hvd24gd2hlcmUgdGhlIHVzZXIgd2lsbCBiZSBhYmxlIHRvIHVwZGF0ZVxyXG4gICAgICogdGhlaXIgY29tbWVudHMgYW5kIHJhdGluZy5cclxuICAgICAqL1xyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBzZWN0aW9uID0gMDsgc2VjdGlvbiA8IGN1cnJlbnRSZXZpZXdTZWN0cy5sZW5ndGg7IHNlY3Rpb24rKykge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSBjdXJyZW50UmV2aWV3U2VjdHNbc2VjdGlvbl0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgc2VjdGlvbiA9IDA7IHNlY3Rpb24gPCB1cGRhdGVSZXZpZXdTZWN0cy5sZW5ndGg7IHNlY3Rpb24rKykge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSB1cGRhdGVSZXZpZXdTZWN0c1tzZWN0aW9uXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0YXJnZXRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF91cGRhdGVfY29tbWVudHNfY2FuY2VsX2J0bihcclxuICAgIGNhbmNlbEJ0bjogSFRNTEVsZW1lbnQsXHJcbiAgICBjdXJyZW50UmV2aWV3U2VjdHM6IE5vZGVMaXN0LFxyXG4gICAgdXBkYXRlUmV2aWV3U2VjdHM6IE5vZGVMaXN0XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgY29udHJvbHMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uLlxyXG4gICAgICogT24gY2xpY2ssIHRoZSB1c2VyJ3MgcmV2aWV3IGluIHRoZSBmb3JtIG9mIGJsb2NrIHRleHQgd2lsbCBzaG93XHJcbiAgICAgKiBhbmQgdGhlIHRoZSB1cGRhdGUgY29tbWVudHMgc2VjdGlvbiB3aWxsIGhpZGUuXHJcbiAgICAgKi9cclxuXHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgc2VjdGlvbiA9IDA7IHNlY3Rpb24gPCBjdXJyZW50UmV2aWV3U2VjdHMubGVuZ3RoOyBzZWN0aW9uKyspIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gY3VycmVudFJldmlld1NlY3RzW3NlY3Rpb25dIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRhcmdldEVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IHNlY3Rpb24gPSAwOyBzZWN0aW9uIDwgdXBkYXRlUmV2aWV3U2VjdHMubGVuZ3RoOyBzZWN0aW9uKyspIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtID0gdXBkYXRlUmV2aWV3U2VjdHNbc2VjdGlvbl0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfZGVsZXRlX2Z1bmN0aW9ucyhcclxuICAgIGRlbGV0ZUJ0bjogSFRNTEVsZW1lbnQsXHJcbiAgICBoT3BlcmF0aW9uSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBjb25maXJtRGVsZXRlQm94OiBIVE1MRGl2RWxlbWVudCxcclxuICAgIGhDb25maXJtRGVsZXRlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBzdWJtaXRCdG46IEhUTUxCdXR0b25FbGVtZW50XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgZGVsZXRlIGZ1bmN0aW9uYWxpdHkgd2hlcmUgYSB1c2VyIGlzIGFibGUgdG8gZGVsZXRlIHRoZWlyXHJcbiAgICAgKiBvd24gY29tbWVudHMuXHJcbiAgICAgKiBXaGVuIGEgdXNlciBwcmVzc2VzIGRlbGV0ZSwgcmV2ZWFsIHRoZSBjb25maXJtIHBvcCB1cFxyXG4gICAgICogKGNvbmZpcm1EZWxldGVCb3gpIHdoZXJlIHRoZSB1c2VyIGhhcyB0aGUgb3B0aW9uIHRvIGVpdGhlciBjb25maXJtXHJcbiAgICAgKiBkZWxldGUgb3IgY2FuY2VsLlxyXG4gICAgICogSWYgdGhlIHVzZXIgcHJlc3NlcyBjYW5jZWwgb3IgYW55d2hlcmUgb3V0c2lkZSB0aGUgYm94LFxyXG4gICAgICogaGlkZSB0aGUgcG9wIHVwIGFuZCB0YWtlIG5vIGZ1cnRoZXIgYWN0aW9uLlxyXG4gICAgICogT3RoZXJ3aXNlLCBpZiB0aGUgdXNlciBjb25maXJtcyB0aGV5IHdpc2ggdG8gZGVsZXRlIHRoZSBwb3N0LCB1cGRhdGVcclxuICAgICAqIHRoZSBoaWRkZW4gaW5wdXRzIChoT3BlcmF0aW9uSW5wdXQgYW5kIGhDb25maXJtRGVsZXRlSW5wdXQpIGFuZFxyXG4gICAgICogc3VibWl0IHRoZSBmb3JtIChjbGljayBvbiBzdWJtaXRCdG4pLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gU2hvdyB0aGUgcG9wIHVwIGlmIHVzZXIgY2xpY2tzIG9uIGRlbGV0ZS5cclxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBjb25maXJtRGVsZXRlQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhpZGUgdGhlIGZvcm0gaWYgdGhlIHVzZXIgcHJlc3NlcyBjYW5jZWwgb24gdGhlIHBvcCB1cCBib3ggb3IgY2xpY2tzXHJcbiAgICAvLyBvdXRzaWRlIHRoZSBib3guXHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbmZpcm1EZWxldGVCb3guY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25maXJtRGVsZXRlQm94XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm0tZGVsZXRlX19pbm5lci1jb250YWluZXJcIilcclxuICAgICAgPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25maXJtRGVsZXRlQm94XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybS1kZWxldGVfX2J0bltmb3I9XCJjYW5jZWxcIl0nKSFcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uZmlybURlbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gSWYgdGhlIHVzZXIgY29uZmlybXMgdGhleSB3YW50IHRvIGRlbGV0ZSB0aGVpciByZXZpZXcsIHBvcHVsYXRlXHJcbiAgICAvLyB0aGUgaGlkZGVuIGlucHV0cyBhY2NvcmRpbmdseSBhbmQgc3VibWl0IHRoZSBmb3JtLlxyXG4gICAgY29uZmlybURlbGV0ZUJveFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tZGVsZXRlX19idG5bZm9yPVwiZGVsZXRlXCJdJykhXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGhPcGVyYXRpb25JbnB1dC52YWx1ZSA9IFwiZGVsZXRlXCI7XHJcbiAgICAgICAgaENvbmZpcm1EZWxldGVJbnB1dC52YWx1ZSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGljaygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF91cGRhdGVfY29tbWVudHNfc3VibWl0X2J0bihcclxuICAgIHVzZXJTdWJtaXRCdG46IEhUTUxFbGVtZW50LFxyXG4gICAgc3VibWl0QnRuOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGhPcGVyYXRpb25JbnB1dDogSFRNTElucHV0RWxlbWVudFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gdXBkYXRlIGNvbW1lbnRzLlxyXG4gICAgICogV2hlbiB0aGUgXCJlZGl0IGNvbW1lbnRzXCIgZm9ybSBlbGVtZW50cyBhcmUgdmlzaWJsZSwgdGhlIHVzZXIgd2lsbCBoYXZlXHJcbiAgICAgKiB0aGUgYWJpbGl0eSB0byBjaGFuZ2UgdGhlIHJhdGluZywgdXBkYXRlIHRoZSB0aXRsZSBhbmQgY29tbWVudC5cclxuICAgICAqIElmIHRoZSB1c2VyIHByZXNzZXMgc3VibWl0LCBjYXB0dXJlIGFuZCBzdWJtaXQgdGhlIGZvcm0uXHJcbiAgICAgKiBUaGlzIGlzIGRvbmUgdXNpbmcgdGhlIG5hbWUgYXR0cmlidXRlIG9uIHRoZSBpbnB1dCBlbGVtZW50cy5cclxuICAgICAqIEZvciB0aGUgcmF0aW5ncywgdGhpcyBpcyBoYW5kbGVkIGJ5IGl0cyBvd24gbW9kdWxlIHdoZXJlIGEgaGlkZGVuXHJcbiAgICAgKiBpbnB1dCBpcyB1cGRhdGVkIHdpdGggdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICB1c2VyU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGhPcGVyYXRpb25JbnB1dC52YWx1ZSA9IFwidXBkYXRlXCI7XHJcbiAgICAgIHN1Ym1pdEJ0bi5jbGljaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMzAvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFBhZ2VzIHdoZXJlIGludGVyYWN0aW9uIHdpdGggaXRlbXMgaW4gdGhlIGJhc2tldCBuZWVkIHRvIGJlIGFjY2VzcyBhbmQvb3JcclxuLy8gbW9kaWZpZWQuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIC0gTWFuYWdlIHRoZSBiYXNrZXQgaXRlbXNcclxuLy8gLSBLZWVwIGJhc2tldCBkYXRhIHdoZW5ldmVyIHVzZXIgbW92ZXMgYXdheSBmcm9tIHRoZSBwYWdlXHJcbi8vIC0gVXBkYXRlcyB0aGUgYmFza2V0IGl0ZW1zIGNvdW50XHJcbi8vXHJcbi8vIERFU0NSSVBUSU9OOlxyXG4vLyAtLS0tLS0tLS0tLS1cclxuLy8gTGV2ZXJhZ2VzIHRoZSBwb3dlciBvZiBsb2NhbCBzdG9yYWdlIHRvIGtlZXAgYSB0cmFjayBvZiB0aGUgYmFza2V0LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIEJhc2tldFN0YXRlIHtcclxuICB0b3RhbEl0ZW1zOiBzdHJpbmcgfCBudWxsIHwgbnVtYmVyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgXCJ0b3RhbEJhc2tldFNpemVcIlxyXG4gICk7XHJcbiAgaXRlbXM6IGFueSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhc2tldEl0ZW1zXCIpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXBkYXRlX2Jhc2tldF9jb3VudGVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9yZWFkX2l0ZW1zKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHRvdGFsIGFuZCBiYXNrZXQgc2l6ZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCBjb252ZXJ0c1xyXG4gICAgICogdGhlIHZhbHVlcyBpbnRvIHR5cGVzIHRoYXQgY2FuIGJlIHdvcmtlZCB3aXRoLlxyXG4gICAgICovXHJcbiAgICBpZiAoIXRoaXMudG90YWxJdGVtcykge1xyXG4gICAgICB0aGlzLnRvdGFsSXRlbXMgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pdGVtcykge1xyXG4gICAgICB0aGlzLml0ZW1zID0gSlNPTi5wYXJzZSh0aGlzLml0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSB7fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3NldF9pdGVtcygpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGxvY2FsIHN0b3JhZ2UgaXRlbXMgaW50byBzdHJpbmdzIGFuZCBzYXZlcyB0aGVtIG9udG8gdGhlXHJcbiAgICAgKiBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICogVXBkYXRlcyB0aGUgYmFza2V0IGl0ZW1zIGNvdW50ZXIuXHJcbiAgICAgKi9cclxuXHJcbiAgICBpZiAoIXRoaXMudG90YWxJdGVtcykge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b3RhbEJhc2tldFNpemVcIiwgXCIwXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgIFwidG90YWxCYXNrZXRTaXplXCIsXHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zLnRvU3RyaW5nKClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXRlbXMpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFza2V0SXRlbXNcIiwgXCJ7fVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFza2V0SXRlbXNcIiwgdGhpcy5pdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBiYXNrZXRcclxuICAgIHRoaXMudXBkYXRlX2Jhc2tldF9jb3VudGVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBhZGRfaXRlbShpZDogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICAvKiogTWV0aG9kIGZvciBhZGRpbmcgaXRlbXMgaW50byB0aGUgYmFza2V0LiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG5cclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zICs9IHF1YW50aXR5O1xyXG5cclxuICAgIGlmICh0aGlzLml0ZW1zW2lkXSkge1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSArPSBxdWFudGl0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdID0gcXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHJlbW92ZV9pdGVtKGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgIC8qKiBNZXRob2QgZm9yIHJlbW92aW5nIGl0ZW1zIGZyb20gdGhlIGJhc2tldC4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuXHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIGlmICh0aGlzLnRvdGFsSXRlbXMgPiAwKSB7XHJcbiAgICAgIHRoaXMudG90YWxJdGVtcyAtPSBxdWFudGl0eTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlX2Jhc2tldF9jb3VudGVyKHRoaXMudG90YWxJdGVtcyk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXRlbXNbaWRdKSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdID0gTnVtYmVyKHRoaXMuaXRlbXNbaWRdKTtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gLT0gcXVhbnRpdHk7XHJcbiAgICAgIGlmICh0aGlzLml0ZW1zW2lkXSA9PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlbXNbaWRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICByZW1vdmVfZW50aXJlX2l0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgLyoqIFJlbW92ZXMgYW5kIGVudGlyZSBpdGVtLiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcykgLSBOdW1iZXIodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgZGVsZXRlIHRoaXMuaXRlbXNbaWRdO1xyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB1cGRhdGVfYmFza2V0X2NvdW50ZXIobmV3TnVtOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSB7XHJcbiAgICAvKiogVXBkYXRlcyB0aGUgYmFza2V0IGNvdW50ZXIgbnVtYmVyICovXHJcbiAgICBjb25zdCBiYXNrZXRDb3VudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJiYXNrZXQtdG90YWwtaXRlbXNcIlxyXG4gICAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKG5ld051bSkge1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS50ZXh0Q29udGVudCA9IG5ld051bS50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgdXBkYXRlX3NpbmdsZV9pdGVtKHByb2R1Y3RJZDogc3RyaW5nIHwgbnVtYmVyLCBuZXdOdW06IG51bWJlcikge1xyXG4gICAgLyoqIFVwZGF0ZXMgdGhlIGxvY2FsIHN0b3JhZ2UgZm9yIGEgc2luZ2xlIGl0ZW0gd2l0aCBhIG5ldyBxdWFudGl0eS4gKi9cclxuICAgIHRoaXMuX3JlYWRfaXRlbXMoKTtcclxuICAgIGNvbnN0IHByZXZWYWx1ZSA9IE51bWJlcih0aGlzLml0ZW1zW3Byb2R1Y3RJZF0pXHJcbiAgICB0aGlzLml0ZW1zW3Byb2R1Y3RJZF0gPSBuZXdOdW07XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKSArIG5ld051bSAtIHByZXZWYWx1ZTtcclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA4LzAxLzIwMjAwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gVXRpbGl0eSBjbGFzcyB0byByZWZvcm1hdCBudW1iZXIuXHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyRm9ybWF0IHtcclxuICAvKiogIFV0aWxpdHkgY2xhc3MgdG8gY29udmVydCBudW1iZXJzIHRvIGRpZmZlcmVudCBmb3JtYXRzLiAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgdGhvdXNhbmRfc2VwYXJhdGVkXzJkcChudW06IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgLyoqIENvdmVydHMgYSBudW1iZXIgdG8gYSB0aG91c2FuZCBzZXBhcmF0ZWQgc3RyaW5nIHRvIDIuZC5wICovXHJcbiAgICByZXR1cm4gTnVtYmVyKG51bSlcclxuICAgICAgLnRvRml4ZWQoMilcclxuICAgICAgLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN0YXRpYyB0aG91c2FuZF9zZXBfdG9fZmxvYXQobnVtOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDb252ZXJ0cyBhIHRob3VzYW5kIHNlcGFyYXRlZCBmbG9hdCB0byBhIGZsb2F0LiBJZiB0aGUgYXJndW1lbnQgPSBudWxsXHJcbiAgICAgICAqIHRoZW4gMCB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICAgKi9cclxuICAgIGlmICghbnVtKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIE51bWJlcihudW0ucmVwbGFjZShcIixcIiwgXCJcIikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA3LzAxLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBVdGlsaXR5IHByb3ZpZGluZyB2YWxpZGF0aW9uIG9wdGlvbnMuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogQSB1dGlsaXRpZXMgY2xhc3MgY29udGFpbmluZyBzdGF0aWMgbWV0aG9kIHdoaWNoIHJ1biBzb21lIGZvcm0gb2ZcclxuICAgKiB2YWxpZGF0aW9uLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgY2hlY2tfaWZfcG9zaXRpdmVfaW50KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAvKiogQ2hlY2tzIGlmIGFuIGl0ZW0gaXMgYSBwb3NpdGl2ZSBpbnRlZ2VyICovXHJcblxyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0gIT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gPj0gMCAmJiBpdGVtID09PSBNYXRoLnJvdW5kKGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdCB0aGlzIHN0YWdlLCB0aGUgb25seSBicmFuY2ggc3VnZ2VzdHMgdGhhdCB0aGUgbnVtYmVyIGlzIDwgMC5cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=