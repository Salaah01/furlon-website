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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Nhcm91c2VsLWltZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL25ld19yZXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3Bhc3N3b3JkLXZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9jb21wb25lbnRzL3F1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9yYXRpbmdzLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvY29tcG9uZW50cy9zZWFyY2hfZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy9wYWdlcy9iYXNrZXQvYmFza2V0LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9mdXJsb24vc3RhdGljL3RzL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzX3VzZXJfcmV2aWV3LnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvc3RhdGUvYmFza2V0LWl0ZW1zLnRzIiwid2VicGFjazovLy8uL2Z1cmxvbi9zdGF0aWMvdHMvdXRpbGl0aWVzL251bWJlcl9mb3JtYXQudHMiLCJ3ZWJwYWNrOi8vLy4vZnVybG9uL3N0YXRpYy90cy91dGlsaXRpZXMvdmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtJQVdFO1FBSEEsZUFBVSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBYXZFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUUvQyxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQ2hFLHFDQUFxQyxDQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLENB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QUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJmdXJsb24vc3RhdGljL2pzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnVybG9uL3N0YXRpYy90cy9tYWluLnRzXCIpO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyOS8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBDYXJvdXNlbCBzdHlsZWQgaW1hZ2Ugc2xpZGUgc2hvd3MuXHJcbi8vXHJcbi8vIFBVUlBPU0U6XHJcbi8vIC0tLS0tLS0tXHJcbi8vIE9uIGNsaWNrIG9mIGEgaW1hZ2UgdGh1bWJuYWlscyBvciB0aGUgY3VycmVudCBpbWFnZSwgdGhlIGN1cnJlbnQgaW1hZ2Ugc2hvdWxkXHJcbi8vIGNoYW5nZSBhY2NvcmRpbmdseS5cclxuLy9cclxuLy8gQW5pbWF0aW9ucyBhcmUgaGFuZGxlZCB0aHJvdWdoIHRoZSBDU1MsIHRoZSBKUyBzZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgdG9cclxuLy8gY2hhbmdlIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBkaXNwbGF5IGltYWdlcyBhY2NvcmRpbmdseSBzbyBhcyB0byBkaXNwbGF5IHRoZVxyXG4vLyBzZWxlY3RlZCBpbWFnZS5cclxuLy9cclxuLy8gT24gZWFjaCB0aHVtYm5haWwsIGF0IGFuIGF0dHJpYnV0ZSB3aWxsIHdpbGwgZXF1YWwgdG8gdGhlIG51bWJlciB0b3RhbFxyXG4vLyB0aHVtYm5haWxzLCB0aGlzIHdpbGwgZW5hYmxlIHRoZSBDU1MgdG8gYWRqdXN0IGNlcnRhaW4gQ1NTIGF0dHJpYnV0ZXNcclxuLy8gYWNjb3JkaW5nbHkuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxJbWdzIHtcclxuICAvKipcclxuICAgKiBCdWlsZHMgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZSBjYXJvdXNlbCBpbWFnZSBpbWFnZXMgc3VjaCB0aGF0IHdoZW5cclxuICAgKiBhIHRodW1ibmFpbCBvciB0aGUgbWFpbiBwaWN0dXJlIGlzIGNsaWNrZWQgb24sIHRoZSBpbWFnZSB3aWxsIGNoYW5nZS5cclxuICAgKiBUaGUgYW5pbWF0aW9uIGFuZCBwb3NpdGlvbmluZyBpcyBjb250cm9sbGVkIHZpYSB0aGUgQ1NTLCB0aGUgY2xhc3Mgd2lsbFxyXG4gICAqIGFkZCBhbmQgcmVtb3ZlIGF0dHJpYnV0ZXMgZnJvbSB0aGUgZWxlbWVudHMsIHNvIHRoYXQgdGhlIGFuaW1hdGlvbnMgY2FuXHJcbiAgICogYmUgdHJpZ2dlcmVkLlxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2Fyb3VzZWwtY29udGFpbmVyX19tYWluXCIpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIExvY2F0ZXMgdGhlIGVsZW1lbnRzIHdoZXJlIGFuIGV2ZW50IGxpc3RlbmVycyBuZWVkIHRvIGJlIGFkZGVkIGFuZFxyXG4gICAgICogY2FsbHMgbWV0aG9kcyB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBlbGVtZW50XHJcbiAgICAgKiBpcy5cclxuICAgICAqXHJcbiAgICAgKiBGaW5hbGx5LCB3aWxsIGNhbGwgYSBtZXRob2QgdG8gdXBkYXRlIHRoZSB0aHVtYm5haWxzIHRvIGNvbnRhaW5cclxuICAgICAqIGluZm9ybWF0aW9uIG9uIGhvdyBtYW55IHRodW1ibmFpbHMgdGhlcmUgYXJlLiBUaGlzIHdpbGwgZW5hYmxlIHRvXHJcbiAgICAgKiBhZGp1c3QgY2VydGFpbiBDU1MgYXR0cmlidXRlcyBhY2NvcmRpbmdseS5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbnRhaW5lcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgLy8gRE9NIGVsZW1lbnRzIGZvciBldmVudCBsaXN0ZW5lcnMgdG8gYmUgYWRkZWQuXHJcbiAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbY10uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1zZWN0aW9uXCJcclxuICAgICAgKVtjXTtcclxuICAgICAgY29uc3QgZGlzcGxheUltYWdlcyA9IGRpc3BsYXlDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1zZWN0aW9uX19pbWdcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gSWYgdGhlcmUgaXMgaWYgb25seSBvbmUgZGlzcGxheUltYWdlLCB0aGVuIHRoaXMgc3VnZ2VzdHMgdGhhdCBvbmx5IGFcclxuICAgICAgLy8gc2hvd2Nhc2UgaW1hZ2UgZXhpc3RzLlxyXG4gICAgICBpZiAoZGlzcGxheUltYWdlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29uc3QgaW1nVGh1bWJzQ29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2NdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICBcImNhcm91c2VsLWNvbnRhaW5lcl9fZGlzcGxheS1jb250cm9sc1wiXHJcbiAgICAgICAgKVswXTtcclxuICAgICAgICBjb25zdCBpbWdUaHVtYnMgPSBpbWdUaHVtYnNDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICAgIFwiY2Fyb3VzZWwtY29udGFpbmVyX19kaXNwbGF5LWNvbnRyb2xzX19jb250cm9sXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyAgTWV0aG9kcyB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIG9uIGVhY2ggRE9NIGVsZW1lbnQuXHJcbiAgICAgICAgdGhpcy5vbl9jbGlja2luZ190aHVtYnMoZGlzcGxheUltYWdlcywgaW1nVGh1bWJzKTtcclxuICAgICAgICB0aGlzLm9uX2NsaWNraW5nX2Rpc3BsYXlfaW1nKGRpc3BsYXlJbWFnZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFNldHMgYW4gYXR0cmlidXRlIG9uIGVhY2ggdGh1bWJuYWlsIHRvIHRoZSB0b3RhbCBudW1iZXIgb2YgdGh1bWJuYWlscy5cclxuICAgICAgdGhpcy51cGRhdGVfdG90YWxfdGh1bWJzKFxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyc1tjXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgXCJjYXJvdXNlbC1jb250YWluZXJfX2Rpc3BsYXktY29udHJvbHNfX2NvbnRyb2xcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG9uX2NsaWNraW5nX3RodW1icyhcclxuICAgIGRpc3BsYXlJbWFnZXM6IEhUTUxDb2xsZWN0aW9uLFxyXG4gICAgaW1nVGh1bWJzOiBIVE1MQ29sbGVjdGlvblxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFYWNoIGltYWdlIHRodW1ibmFpbCBlbGVtZW50IGhhcyBhIFwiZm9yXCIgYXR0cmlidXRlIHdoaWNoIGluZGljYXRlc1xyXG4gICAgICogd2hpY2ggZWxlbWVudCBvbiB0aGUgZGlzcGxheSBzZWN0aW9uIGl0IHJlcHJlc2VudHMuIFRoZSBkaXNwbGF5IGltYWdlXHJcbiAgICAgKiBlbGVtZW50IGhhcyBhbiBcImltZ1wiIGF0dHJpYnV0ZSB3aXRoIHRoZSBzYW1lIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIE9uIGNsaWNraW5nIG9uIGEgaW1hZ2UgdGh1bWJuYWlsLCB0aGUgZGlzcGxheSBhdHRyaWJ1dGUncyBwb3NpdGlvblxyXG4gICAgICogYXR0cmlidXRlIHdpbGwgYmVjb21lIFwic2hvd1wiIHdoZXJlIHRoZSBzYW1lIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgYWxsXHJcbiAgICAgKiBvdGhlciBpbWFnZXMgd2lsbCBiZWNvbWUgXCJoaWRlXCIuXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogdGhlIGluaXRpYWwgaW1hZ2Ugd2lsbCBoYXZlIHBvc2l0aW9uPVwiaW5pdFwiIGluaXRpYWxseSBzbyBhcyB0b1xyXG4gICAgICogYXZvaWQgYW55IGFuaW1hdGlvbnMgb24gc3RhcnQuIElmIHRoaXMgaW1hZ2UgdGh1bWJuYWlsIGlzIGNsaWNrZWQsIGRvXHJcbiAgICAgKiBub3RoaW5nLlxyXG4gICAgICovXHJcbiAgICBmb3IgKGxldCB0aHVtYiA9IDA7IHRodW1iIDwgaW1nVGh1bWJzLmxlbmd0aDsgdGh1bWIrKykge1xyXG4gICAgICBpbWdUaHVtYnNbdGh1bWJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbHNGb3IgPSBpbWdUaHVtYnNbdGh1bWJdLmdldEF0dHJpYnV0ZShcImZvclwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW0gPSAwOyBpbSA8IGRpc3BsYXlJbWFnZXMubGVuZ3RoOyBpbSsrKSB7XHJcbiAgICAgICAgICBpZiAoZGlzcGxheUltYWdlc1tpbV0uZ2V0QXR0cmlidXRlKFwiaW1nXCIpID09PSBjb250cm9sc0Zvcikge1xyXG4gICAgICAgICAgICBpZiAoZGlzcGxheUltYWdlc1tpbV0uZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIikgIT0gXCJpbml0XCIpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5SW1hZ2VzW2ltXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIFwiaGlkZVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgb25fY2xpY2tpbmdfZGlzcGxheV9pbWcoXHJcbiAgICAvKipcclxuICAgICAqIE9uIGNsaWNrIG9mIHRoZSBjdXJyZW50IGRpc3BsYXkgaW1hZ2UsIGhpZGUgdGhlIGltYWdlIGFuZCBzaG93IHRoZVxyXG4gICAgICogbmV4dC5cclxuICAgICAqIEFuaW1hdGlvbiBpcyBoYW5kbGVkIGJ5IHRoZSBjc3MuIEZvciBhbmltYXRpb24gdG8gd29yaywgb24gY2xpY2ssXHJcbiAgICAgKiBcImhpZGVcIiBpcyBzZXQgdG8gdGhlIGF0dHJpYnV0ZSBwb3NpdGlvbiBvbiB0aGUgY3VycmVudCBpbWFnZSwgYW5kIG9uXHJcbiAgICAgKiB0aGUgbmV4dCBpbWFnZSwgdGhlIFwic2hvd1wiIGlzIHNldCB0byB0aGUgcG9zaXRpb24gYXR0cmlidXRlLlxyXG4gICAgICovXHJcbiAgICBkaXNwbGF5SW1hZ2VzOiBIVE1MQ29sbGVjdGlvblxyXG4gICkge1xyXG4gICAgZm9yIChsZXQgaW0gPSAwOyBpbSA8IGRpc3BsYXlJbWFnZXMubGVuZ3RoOyBpbSsrKSB7XHJcbiAgICAgIGRpc3BsYXlJbWFnZXNbaW1dLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheUltYWdlc1tpbV0uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICBpZiAoaW0gPT09IGRpc3BsYXlJbWFnZXMubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgZGlzcGxheUltYWdlc1swXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInNob3dcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BsYXlJbWFnZXNbaW0gKyAxXS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBcInNob3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHVwZGF0ZV90b3RhbF90aHVtYnModGh1bWJzOiBIVE1MQ29sbGVjdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGFuIGF0dHJpYnV0ZSBvbiBlYWNoIHRodW1ibmFpbCB3aGljaCBpcyB0aGUgdG90YWwgbnVtYmVyIG9mXHJcbiAgICAgKiB0aHVtYm5haWxzIHRoZXJlIGFyZS4gVGhpcyB3aWxsIGFsbG93IHRoZSBDU1MgdG8gdXBkYXRlIHN0eWxpbmcgYmFzZWRcclxuICAgICAqIG9uIHRoZSBudW1iZXIgb2YgdGh1bWJuYWlscy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdG90YWwgPSB0aHVtYnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCB0b3RhbDsgdCsrKSB7XHJcbiAgICAgIHRodW1ic1t0XS5zZXRBdHRyaWJ1dGUoXCJ0b3RhbHRodW1ic1wiLCB0b3RhbC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXRzIHRoZSBzYW1lIG9uIG90aGVyIGVsZW1lbnRzIHdoZXJlIHRoaXMgd291bGQgYmUgbmVlZGVkLlxyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZShcInRvdGFsdGh1bWJzXCIsIHRvdGFsLnRvU3RyaW5nKCkpO1xyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnByZXZpb3VzRWxlbWVudFNpYmxpbmchLnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJ0b3RhbHRodW1ic1wiLFxyXG4gICAgICB0b3RhbC50b1N0cmluZygpXHJcbiAgICApO1xyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJ0b3RhbHRodW1ic1wiLFxyXG4gICAgICB0b3RhbC50b1N0cmluZygpXHJcbiAgICApO1xyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJ0b3RhbHRodW1ic1wiLFxyXG4gICAgICB0b3RhbC50b1N0cmluZygpXHJcbiAgICApO1xyXG4gICAgdGh1bWJzWzBdLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJ0b3RhbHRodW1ic1wiLFxyXG4gICAgICB0b3RhbC50b1N0cmluZygpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDE2LzEyLzIwMTlcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIEN1c3RvbSBkcm9wZG93biBtZW51XHJcbi8vXHJcbi8vIFJFTEFURUQgRklMRVM6XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIF9kcm9wZG93bi1tZW51LnNjc3NcclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gUHJvdmlkZXMgZnVuY3Rpb25zIGZvciBhIGN1c3RvbSBkcm9wZG93biBtZW51LlxyXG4vLyBUaGUgZnVuY3Rpb25zIHdpbGwgd29yayBmb3IgZHJvcGRvd24gbWVudXMgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XHJcbi8vXHJcbi8vIDxmb3JtPlxyXG4vLyAgIC4uLlxyXG4vLyAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIj5cclxuLy8gICAgICAgPHNwYW4+Q29sb3VyPC9zcGFuPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiPlxyXG4vLyAgICAgICA8bGFiZWwgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiIGZvcj1cImNvbG91ci1yZWRcIj5cclxuLy8gICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIlxyXG4vLyAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbi8vICAgICAgICAgbmFtZT1cImYtY29sb3VyXCJcclxuLy8gICAgICAgICBpZD1jb2xvdXItcmVkXHJcbi8vICAgICAgICAgdmFsdWU9XCJyZWRcIlxyXG4vLyAgICAgICA+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gICAuLi5cclxuLy8gPC9mb3JtPlxyXG5cclxuLy8gQ1NTIHNob3VsZCBiZSBzZXQgdXAgdG8gaGlkZSB0aGUgaW5wdXQgdGFncyBhbmQgcmVseSBvbiB0aGUgbGFiZWxzIHRvIHNlbGVjdFxyXG4vLyB0aGUgcmFkaW8gYnV0dG9uLlxyXG4vL1xyXG4vLyBGVU5DVElPTlM6XHJcbi8vIC0tLS0tLS0tLS1cclxuLy8gIC0gV2hlbiB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gbWVudSwgZXhwYW5kIHRoZSBsaXN0IG9mIG9wdGlvbnMuXHJcbi8vICAtIFdoZW4gdXNlciBwcmVzc2VzIGFuIG9wdGlvbiwgaGlnaGxpZ2h0IHRoYXQgb3B0aW9uLCB1cGRhdGUgdGhlXHJcbi8vICAgIGJ1dHRvbidzIGlubmVyIHRleHQgdG8gbWF0Y2ggdGhhdCBvZmYgdGhlIGJ1dHRvbiB0ZXh0LlxyXG4vLyAgLSBXaGVuIHVzZXIgY2xpY2tzIG91dHNpZGUsIGNsb3NlIGFsbCBtZW51cy5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERyb3Bkb3duTWVudSBDbGFzc1xyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25NZW51IHtcclxuICAvKipcclxuICAgKiBTZXRzIHVwIHRoZSBmdW5jdGlvbmFsaXR5IGZvciB0aGUgY3VzdG9tIGRyb3Bkb3duIG1lbnVzLlxyXG4gICAqIFRoZXNlIGluY2x1ZGU6XHJcbiAgICogIC0gVG9nZ2xlIG9wZW4vY2xvc2Ugb2YgdGhlIG1lbnUgb24gY2xpY2tpbmcgdGhlIGJ1dHRvblxyXG4gICAqICAtIENsb3NlIHRoZSBtZW51IG9uIGNsaWNraW5nIG91dHNpZGVcclxuICAgKiAgLSBPbiBzZWxlY3RpbmcgYW4gaXRlbTpcclxuICAgKiAgICAtIEhpZ2hsaWdodCB0aGF0IGl0ZW1cclxuICAgKiAgICAtIENoYW5nZSB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uIHRoZSB0ZXh0IG9mIHRoZSBvcHRpb24gc2VsZWN0ZWRcclxuICAgKlxyXG4gICAqIE5vdGU6IHRoaXMgY2xhc3Mgd2lsbCBub3QgaGFuZGxlIEFQSSBjYWxscy5cclxuICAgKi9cclxuXHJcbiAgZGRNZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICBcImRyb3Bkb3duLW1lbnVcIlxyXG4gICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIEFkZHMgZnVuY3Rpb24gdG8gY2xvc2UgYWxsIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBlbGVtZW50XHJcbiAgICB0aGlzLmNsb3NlX21lbnUoKTtcclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgZnVuY3Rpb25zIGZvciBhbGwgbWVudSBlbGVtZW50cy5cclxuICAgIGZvciAobGV0IG1lbnVJZCA9IDA7IG1lbnVJZCA8IHRoaXMuZGRNZW51cy5sZW5ndGg7IG1lbnVJZCsrKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRfbWVudSh0aGlzLmRkTWVudXNbbWVudUlkXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjbG9zZV9tZW51KCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgYWxsIG1lbnVzIHdoZW4gY2xpY2tlZCBvdXRzaWRlIG9uIGFub3RoZXIgZmlsdGVyIGJ1dHRvbi5cclxuICAgICAqIEFsc28gY2FycmllcyBmdW5jdGlvbiB0byBjbG9zZSB0aGUgbmF2LW1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgZmlsdGVyQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fc2VsZWN0ZWRcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25MaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICApO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG9wdGlvbkxpc3RzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICBvcHRpb25MaXN0c1tpZHhdLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1tZW51X19vcHRpb25zLS1oaWRlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuYXZTdWJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCJcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlckJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRCdG4gPSBmaWx0ZXJCdG5zW2ldO1xyXG5cclxuICAgICAgc2VsZWN0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBDbG9zZSBuYXYgbWVudXNcclxuICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBuYXZTdWJNZW51cy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgICBuYXZTdWJNZW51c1tpZHhdLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgYWxsIG90aGVyIGZpbHRlcnMgbGlzdHNcclxuICAgICAgICAvLyBFYWNoIGJ1dHRvbiBhbmQgdGhlaXIgY2hpbGQgZWxlbWVudHMgY29udGFpbiB0aGUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gXCJmaWx0ZXItZm9yXCIuXHJcbiAgICAgICAgLy8gTGlrZXdpc2UsIGVhY2ggZHJvcGRvd24gb3B0aW9uIGRpdiBjb250YWluIHRoZSBzYW1lIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIFRoaXMgY2hlY2tzIGZvciB0aGUgYnV0dG9uIHByZXNzZWQsIGlmIGl0cyBcImZpbHRlci1mb3JcIiBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBtYXRjaGVzIHRoYXQgb2YgaXRzIGRyb3Bkb3duIG9wdGlvbnMuIGlmIG5vdCwgdGhlbiBjbG9zZS5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpbHRlckJ0bnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSBmaWx0ZXJCdG5zW2pdO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbS5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpICE9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQnRuLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBKdXN0IGluY2FzZSB0aGUgc3RydWN0dXJlIGNoYW5nZXMsIGFuZCB0aGUgbmV4dCBzaWJsaW5nIGlucyBub3QgdGhlIG9wdGlvbnMgbGlzdFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RWxlbS5uZXh0RWxlbWVudFNpYmxpbmchLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0YXJnZXRFbGVtLm5leHRFbGVtZW50U2libGluZz8uY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBidWlsZF9tZW51KGRkTWVudTogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIGZ1bmN0aW9uYWxpdHkgb250byBlYWNoIGRyb3Bkb3duIG1lbnUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9wdGlvbnNCdG4gPSBkZE1lbnUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19zZWxlY3RlZFwiXHJcbiAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RDb250YWluZXIgPSBkZE1lbnUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBvcHRpb25zTGlzdEl0ZW1zID0gb3B0aW9uc0xpc3RDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiXHJcbiAgICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTExhYmVsRWxlbWVudD47XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgb24gdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGljaCB3aWxsIG9wZW4vY2xvc2UgdGhlIG9wdGlvbnNcclxuICAgIC8vIGxpc3QuXHJcbiAgICBvcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBvcHRpb25zTGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIHNldHVwIGZvciBlYWNoIG9wdGlvblxyXG4gICAgZm9yIChcclxuICAgICAgbGV0IG9wdGlvbkl0ZXIgPSAwO1xyXG4gICAgICBvcHRpb25JdGVyIDwgb3B0aW9uc0xpc3RJdGVtcy5sZW5ndGg7XHJcbiAgICAgIG9wdGlvbkl0ZXIrK1xyXG4gICAgKSB7XHJcbiAgICAgIGxldCBsaXN0SXRlbSA9IG9wdGlvbnNMaXN0SXRlbXNbb3B0aW9uSXRlcl07XHJcbiAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBoaWdobGlnaHQgZnJvbSBhbGwgbGlzdCBpdGVtcyBhbmQgcmVhcHBseSB0byB0aGUgc2VsZWN0ZWRcclxuICAgICAgICAvLyBsaXN0IGl0ZW0gb25seVxyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgb3B0aW9uU3ViSXRlciA9IDA7XHJcbiAgICAgICAgICBvcHRpb25TdWJJdGVyIDwgb3B0aW9uc0xpc3RJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICBvcHRpb25TdWJJdGVyKytcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG9wdGlvbnNMaXN0SXRlbXNbb3B0aW9uU3ViSXRlcl0uY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbC0tc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNfX2xhYmVsLS1zZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSB0ZXh0IG9mIHRoZSBidXR0b24gdG8gdGhlIHRleHQgb2YgdGhlIHNlbGVjdGVkIGl0ZW1cclxuICAgICAgICBvcHRpb25zQnRuLmlubmVyVGV4dCA9IGxpc3RJdGVtLmlubmVyVGV4dDtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBoaWRkZW4gaW5wdXQgdmFsdWVzXHJcbiAgICAgICAgLy8gQ2xvc2UgdGhlIG1lbnVcclxuICAgICAgICBvcHRpb25zTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwMS8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gTmF2aWdhdGlvbiBiYXIuXHJcbi8vXHJcbi8vIFBVUlBPU0VcclxuLy8gMS4gQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSBuYXZpZ2F0aW9uIHN1Yi1tZW51cyBhbmQgY29udHJvbHMgaG93IGFuZCB3aGVuXHJcbi8vICAgIGl0IGV4cGFuZHMgYW5kIGNsb3Nlcy5cclxuLy8gMi4gQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSBiYXNrZXQgYW5kIHNvIHNvIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlXHJcbi8vICAgIGJhc2tldC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZnVuY3Rpb25zIGZvciB0aGUgbmF2aWdhdGlvbi5cclxuICAgKiBUaGVzZSBpbmNsdWRlOlxyXG4gICAqICAtIENsb3NpbmcgbWVudXMgd2hlbiBjbGlja2luZyBvdXRzaWRlLlxyXG4gICAqICAtIE9wZW5pbmcvQ2xvc2luZyBtZW51cyBvbiBjbGlja1xyXG4gICAqL1xyXG4gIG1lbnVCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fb3B0aW9uX19idG5cIik7XHJcbiAgbmF2U3ViTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCIpO1xyXG4gIHRvZ2dsZVNob3dOYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fdG9nZ2xlX19idG5cIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBObyBhcmd1bWVudHMgLSBjbGFzcyB1c2VzIG9iamVjdHMgZm91bmQgb24gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIC8vIEFkZHMgZnVuY3Rpb24gdG8gY2xvc2UgYWxsIG1lbnVzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBlbGVtZW50XHJcbiAgICB0aGlzLmNsb3NlX21lbnUoKTtcclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgZnVuY3Rpb25zIGZvciBhbGwgbWVudSBlbGVtZW50cy5cclxuICAgIGZvciAoY29uc3QgbWVudUJ0biBvZiB0aGlzLm1lbnVCdG5zIGFzIGFueSkge1xyXG4gICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnN1Yk1lbnVDdHJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWlsZCB0aGUgcmVzcG9uc2l2ZSBmdW5jdGlvbnMgZm9yIHRoZSB0b2dnbGUgYnV0dG9ucy5cclxuICAgIHRoaXMubmF2X3RvZ2dsZV9idG4oKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNsb3NlX21lbnUoKSB7XHJcbiAgICAvKipcclxuICAgICAqIGNsb3NlcyBhbGwgbWVudXMgd2hlbiBjbGlja2VkIG91dHNpZGUgcHIgYW5vdGhlciBuYXYgbWVudS5cclxuICAgICAqIEFsc28gd2lsbCBjbG9zZSBhbGwgZmlsdGVyIG1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gQ2xvc2UgYWxsIG5hdi1tZW51cyBvbiBjbGljayBvdXRzaWRlXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCB0aGlzLm5hdlN1Yk1lbnVzLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICB0aGlzLm5hdlN1Yk1lbnVzW2lkeF0uY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1leHBhbmRlZFwiLFxyXG4gICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tY29sbGFwc2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbkxpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgXCJkcm9wZG93bi1tZW51X19vcHRpb25zXCJcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVudUJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbWVudUJ0biA9IHRoaXMubWVudUJ0bnNbaV07XHJcblxyXG4gICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2xvc2UgYWxsIGRyb3Bkb3duLW1lbnVzXHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb25MaXN0IG9mIG9wdGlvbkxpc3RzIGFzIGFueSkge1xyXG4gICAgICAgICAgb3B0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbWVudV9fb3B0aW9ucy0taGlkZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENsb3NlIG90aGVyIG5hdmlnYXRpb24gbWVudXNcclxuICAgICAgICAvLyBFYWNoIGJ1dHRvbiBhbmQgdGhlaXIgY2hpbGQgZWxlbWVudHMgd2lsbCBjb250YWluIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAvLyBcImZpbHRlci1mb3JcIi5cclxuICAgICAgICAvLyBMaWtld2lzZSwgZWFjaCBkcm9wZG93biBtZW51IGNvbnRhaW4gdGhlIHNhbWUgYXR0cmlidXRlXHJcbiAgICAgICAgLy8gVGhpcyBjaGVja3MgZm9yIHRoZSBidXR0b24gcHJlc3NlZCwgaWYgaXRzIFwiZmlsdGVyLWZvclwiIGF0dHJpYnV0ZVxyXG4gICAgICAgIC8vIG1hdGNoZXMgdGhhdCBvZiBpdHMgZHJvcGRvd24gb3B0aW9ucy4gaWYgbm90LCB0aGVuIGNsb3NlLlxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tZW51QnRucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IHRoaXMubWVudUJ0bnNbal07XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikgIT1cclxuICAgICAgICAgICAgbWVudUJ0bi5nZXRBdHRyaWJ1dGUoXCJmaWx0ZXItZm9yXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICBcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzXCJcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRhcmdldEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIixcclxuICAgICAgICAgICAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN1Yk1lbnVDdHJsKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdpbGwgaGFuZGxlIGNsaWNrIGV2ZW50cyBvbiB0aGUgbmF2aWdhdGlvbiBmb3IgZXhwYW5kaW5nXHJcbiAgICAgKiBhbmQgY29sbGFwc2luZyB0aGUgc3ViLW1lbnVzLlxyXG4gICAgICovXHJcblxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vIEhhbmRsZSBjbGljayBldmVudHNcclxuICAgIHRhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB0YXJnZXRDbGFzc2VzID0gdGFyZ2V0LmNsYXNzTGlzdDtcclxuICAgIGxldCBzdWJNZW51OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBpZiAodGFyZ2V0Q2xhc3Nlcy5jb250YWlucyhcIm5hdi1zdWItcHJvZHVjdHNcIikpIHtcclxuICAgICAgc3ViTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIubmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMubmF2LXN1Yi1wcm9kdWN0c1wiXHJcbiAgICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldENsYXNzZXMuY29udGFpbnMoXCJuYXYtc3ViLXJvb21zXCIpKSB7XHJcbiAgICAgIHN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLm5hdi1zdWItcm9vbXNcIlxyXG4gICAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgXCJOYXZpZ2F0aW9uIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGV4cGFuZGVkID0gc3ViTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgIFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGV4cGFuZGVkKSB7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdl9fb3B0aW9uX19kcm9wZG93bi1vcHRzLS1jb2xsYXBzZVwiKTtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWV4cGFuZGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19vcHRpb25fX2Ryb3Bkb3duLW9wdHMtLWNvbGxhcHNlXCIpO1xyXG4gICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZfX29wdGlvbl9fZHJvcGRvd24tb3B0cy0tZXhwYW5kZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIG5hdl90b2dnbGVfYnRuKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBuYXZpZ2F0aW9uIHRvZ2dsZSBidXR0b24gLSBhIHJlc3BvbnNpdmVcclxuICAgICAqIGZlYXR1cmUgdmlld2FibGUgd2hlbiB0aGUgc2NyZWVuIHdpZHRoIGlzIHNtYWxsIGVub3VnaC5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnNMaXN0ID0gW1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2X19vcHRpb25cIiksXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9fYWNjb3VudC1iYXNrZXQnKVxyXG4gICAgXTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZVNob3dOYXZCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9wdGlvbnNMaXN0W2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBvcHRpb25zTGlzdFtpXVtqXS5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LW9wdGlvbi0tc2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA0LzAyLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIE5ldyByZXZpZXcgcG9wIHVwIGh0bWwgYmxvY2sgKF9uZXctcmV2aWV3Lmh0bWwgcGFydGlhbClcclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gRnVuY3Rpb25hbGl0eSBvbiB0aGUgbmV3IHJldmlldyBwb3AgdXAuIFRoZSBwb3AgdXAgaXMgYSBmb3JtIGNvbnRhaW5pbmdcclxuLy8gdGhlIHJhdGluZ3MgY29tcG9uZW50IGFsb25nIHdpdGggaXRzIGhpZGRlbiBib3gsIG90aGVyIGlucHV0IGVsZW1lbnRzLCBhXHJcbi8vIGhpZGRlbiBib3ggdG8gc3RvcmUgYW4gaWQgYW5kIGNhbmNlbC9zdWJtaXQgYnV0dG9ucy5cclxuLy9cclxuLy8gREVTSUdOOlxyXG4vLyAtLS0tLS0tXHJcbi8vIFRSSUdHRVI6XHJcbi8vIFRoaXMgbW9kdWxlIHdpbGwgdGFyZ2V0IGFsbCBlbGVtZW50cyB3aXRoIHRoZSBhdHRyaWJ1dGUgXCJuZXdSZXZpZXdQcm9kdWN0XCJcclxuLy8gYWRkIGtleWJpbmRpbmcgc3VjaCB0aGF0IHdoZW4gYW55IG9mIHRoZXNlIGVsZW1lbnRzIGFyZSBjbGlja2VkLCB0aGUgXCJoaWRlXCJcclxuLy8gY2xhc3Mgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHBvcCB1cCBlbGVtZW50IGFuZCBhIGhpZGRlbiBpbnB1dCdzIHZhbHVlXHJcbi8vIHBvcHVsYXRlZCB3aXRoIHRoZSBJRC5cclxuLy9cclxuLy8gRk9STSBWQUxJREFUSU9OOlxyXG4vLyBXaWxsIGJlIGhhbmRsZWQgYnkgdGhlIGJhY2tlbmQuXHJcbi8vICNUT0RPOiBCdWlsZCBmcm9udCBlbmQgdmFsaWRhdGlvbiB0byBhdm9pZCBwb2ludGxlc3MgUE9TVCByZXF1ZXN0LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE5ld1JldmlldyB7XHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIHN1Ym1pdCBuZXcgcmV2aWV3cy5cclxuICAgKiBUaGUgY2xhc3Mgd2lsbCBzZWFyY2ggZm9yIGFsbCBlbGVtZW50cyB3aXRoIGFuIGF0dHJpYnV0ZSBmb3JcclxuICAgKiBcIm5ld1Jldmlld1Byb2R1Y3RcIiBhbmQgYWRkIGtleWJpbmRpbmcgc3VjaCB0aGF0IHdoZW4gdGhleSBhcmUgY2xpY2tlZCB0aGVcclxuICAgKiBwb3AtdXAgYm94IHdpbGwgYXBwZWFyIHdoZXJlIHRoZXkgY2FuIGVudGVyIHRoZSByZXZpZXcuXHJcbiAgICogV2l0aGluIHRoZSBwb3AtdXAgYm94LCBoaWRkZW4gaW5wdXQgZmllbGRzIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggdGhlXHJcbiAgICogdmFsdWUgZnJvbSB0aGUgXCJuZXdSZXZpZXdQcm9kdWN0XCIgYW5kIFwibmV3UmV2aWV3U3RvcmVcIiBhdHRyaWJ1dGUgd2hpY2hcclxuICAgKiBpbmNsdWRlIHRoZSBwcm9kdWN0IGFuZCBzdG9yZSBJRCByZXNwZWN0aXZlbHkuXHJcbiAgICovXHJcblxyXG4gIHJldmlld0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25ld1Jldmlld1Byb2R1Y3RdXCIpO1xyXG4gIG5ld1Jldmlld0NvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldi1yZXZpZXctcG9wLXVwXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIHByb2R1Y3RJZElucHV0ID0gdGhpcy5uZXdSZXZpZXdDb250LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIiNuZXctcmV2aWV3LXByb2R1Y3QtaWRcIlxyXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBzdG9yZUlkSW5wdXQgPSB0aGlzLm5ld1Jldmlld0NvbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIjbmV3LXJldmlldy1zdG9yZS1pZFwiXHJcbiAgKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciAtIGNvbnRyb2xsaW5nIHRoZSBvcmRlciBpbiB3aGljaCBlYWNoIG1ldGhvZCBpcyBjYWxsZWQuXHJcbiAgICAgKi9cclxuICAgIGZvciAobGV0IHJiID0gMDsgcmIgPCB0aGlzLnJldmlld0J0bnMubGVuZ3RoOyByYisrKSB7XHJcbiAgICAgIHRoaXMuc2V0dXBfYnRuX2tleWJpbmRlcih0aGlzLnJldmlld0J0bnNbcmJdKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsb3NlX3BvcF91cCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBzZXR1cF9idG5fa2V5YmluZGVyKHJldmlld0J0bjogRWxlbWVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGtleWJpbmRpbmcgb24gYSBidXR0b24gc3VjaCB0aGF0IHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLCB0aGVcclxuICAgICAqIHBvcCB1cCBib3ggd2lsbCBhcHBlYXIgYnkgcmVtb3ZpbmcgXCJoaWRlIGZyb20gY2xhc3MgbGlzdC5cIlxyXG4gICAgICogVGhlIHBvcCB1cCBpdGVtIGFsc28gaGFzIHR3byBpbnB1dCBib3ggZGVkaWNhdGVkIHRvIHRoZSBwcm9kdWN0IGFuZFxyXG4gICAgICogc3RvcmUgSWQsIHRoZXNlIHdpbGwgYmUgcG9wdWxhdGVkIGJ5IHJlYWRpbmcgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlXHJcbiAgICAgKiBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWQuXHJcbiAgICAgKi9cclxuICAgIHJldmlld0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5uZXdSZXZpZXdDb250LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICB0aGlzLnByb2R1Y3RJZElucHV0LnZhbHVlID0gcmV2aWV3QnRuLmdldEF0dHJpYnV0ZShcIm5ld1Jldmlld1Byb2R1Y3RcIikhO1xyXG4gICAgICB0aGlzLnN0b3JlSWRJbnB1dC52YWx1ZSA9IHJldmlld0J0bi5nZXRBdHRyaWJ1dGUoXCJuZXdSZXZpZXdTdG9yZVwiKSFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBjbG9zZV9wb3BfdXAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBwb3AgdXAsIHRoaXMgb2NjdXJzIHdoZW5ldmVyIHRoZSB1c2VyIHByZXNzZXNcclxuICAgICAqIGNhbmNlbCwgb3IgY2xpY2tzIG91dHNpZGUgdGhlIGJveC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5uZXdSZXZpZXdDb250XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcubmV3LXJldmlld19fYnRuW2Zvcj1cImNhbmNlbFwiXScpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLm5ld1Jldmlld0NvbnQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SWRJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5uZXdSZXZpZXdDb250LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uZXdSZXZpZXdDb250XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1yZXZpZXdfX2Zvcm1cIilcclxuICAgICAgPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyNi8wMS8yMDIwXHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBQYWdpbmF0aW9uIE9iamVjdFxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBCdWlsZHMgdGhlIGxpbmsgKGhyZWYpIG9uIGVhY2ggcGFnaW5hdGlvbiBidXR0b24uIFRoaXMgaXMgYWNoaWV2ZWQgYnlcclxuLy8gdXNpbmcgdGhlIGN1cnJlbnQgdXJsIHRvIGJ1aWxkIG1vc3QgcGFydCBvZiB0aGUgaHJlZiBhbmQgYXBwZW5kaW5nIHRvIGl0XHJcbi8vIHRoZSBwYWdlIHF1ZXJ5LlxyXG4vL1xyXG4vLyBFYWNoIGVsZW1lbnQgd2lsbCBjb250YWluIGEgXCJwYWdlXCIgYXR0cmlidXRlIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBzZXQgdGhlXHJcbi8vIHBhZ2UgcGFydCBvZiB0aGUgaHJlZi5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uIHtcclxuICAvKiogQnVpbGRzIHRoZSBwYWdpbmF0aW9uIGxpbmsgKGhyZWYpLiAqL1xyXG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnaW5hdGlvblwiKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIEJ1aWxkcyB0aGUgbGlua3Mgb250byB0aGUgcGFnaW5hdGlvbiBsaW5rcyBpZiAjcGFnaW5hdGlvbiBleGlzdHMuICovXHJcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcclxuICAgICAgdGhpcy5idWlsZF9saW5rcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfbGlua3MoKSB7XHJcbiAgICAvKiogQnVpbGRzIGxpbmtzIG9udG8gdGhlIHBhZ2luYXRpb24gbGluayBlbGVtZW50cy4gKi9cclxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jb250YWluZXIhLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYWdpbmF0aW9uX19saW5rXCIpO1xyXG4gICAgY29uc3QgYmFzZUhyZWYgPVxyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8mKCguKj8mJCl8KHBhZ2U9WzAtOV17MSx9KXwocGFnZT0pKS9nLCBcIlwiKSArXHJcbiAgICAgIFwiJnBhZ2U9XCI7XHJcblxyXG4gICAgZm9yIChsZXQgbCA9IDA7IGwgPCBsaW5rcy5sZW5ndGg7IGwrKykge1xyXG4gICAgICBpZiAobGlua3NbbF0uZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgIT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgbGlua3NbbF0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBiYXNlSHJlZiArIGxpbmtzW2xdLmdldEF0dHJpYnV0ZShcInBhZ2VcIikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTIvMDEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gUmVnaXN0cmF0aW9uIHBhZ2VzLlxyXG4vL1xyXG4vLyBQVVJQT1NFOlxyXG4vLyAtLS0tLS0tLVxyXG4vLyBXaGVuIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gsIHVwZGF0ZSB0aGUgYXR0cmlidXRlIG9mIHRoZSBwYXNzd29yZCBlbGVtZW50c1xyXG4vLyB0byBgaW52YWxpZD1cInRydWVcIi4gVGhpcyB3aWxsIGFsbG93IHRoZSB0aGUgQ1NTIHRvIGNoYW5nZSB0aGUgYm9yZGVyXHJcbi8vIG9mIHRoZSBwYXNzd29yZCBlbGVtZW50cyB0byByZWQgYW5kIHNob3cgYW4gZXJyb3IgbWVzc2FnZSBmb3IgYSBmZXcgc2Vjb25kcy5cclxuLy9cclxuLy8gSWYgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCwgdGhlbiBhZGQgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB0byB0aGUgc3VibWl0XHJcbi8vIGJ1dHRvbi5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoZWNrIHtcclxuICAvKiogQ2hlY2tzIGlmIHBhc3N3b3JkcyBtYXRjaCwgaWYgdGhleSBkbyBub3QsIHRoZW4gdXBkYXRlIHRoZSBhdHRyaWJ1dGVcclxuICAgKiBvZiB0aGUgcGFzc3dvcmQgZWxlbWVudHMgd2hpY2ggd2lsbCBpbiB0dXJuIHVwZGF0ZSBzaWJsaW5ncyB0byB0YWtlIG9uXHJcbiAgICogc29tZSBDU1Mgc3R5bGluZyAoY29udHJvbGxlZCB0aHJvdWdoIENTUykuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwYXNzd29yZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiYWNjb3VudC1wYXNzd29yZFwiXHJcbiAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybVBhc3NFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnQtcGFzc3dvcmQtY29uZmlybVwiXHJcbiAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnQtc3VibWl0XCJcclxuICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgZXJyb3JNc2dFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImFjY291bnQtZXJyb3JzXCJcclxuICApIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKiogQ29uc3RydWN0b3IgKi9cclxuICAgIHRoaXMuc2V0X2tleWJpbmRlcnMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgY2hlY2tfcGFzc3dvcmRzKCkge1xyXG4gICAgLyoqIENoZWNrcyBpZiB0aGUgcGFzc3dvcmRzIG1hdGNoLCBhbmQgaWYgc28sIGNoZWNrIHRoZWlyIGNvbXBsZXhpdHkuICovXHJcbiAgICBjb25zdCBwYXNzd29yZFR4dCA9IHRoaXMucGFzc3dvcmRFbGVtPy52YWx1ZTtcclxuICAgIGNvbnN0IGNvbmZpcm1QYXNzVHh0ID0gdGhpcy5jb25maXJtUGFzc0VsZW0/LnZhbHVlO1xyXG5cclxuICAgIGlmIChwYXNzd29yZFR4dCAmJiBjb25maXJtUGFzc1R4dCkge1xyXG4gICAgICBpZiAocGFzc3dvcmRUeHQgPT09IGNvbmZpcm1QYXNzVHh0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgY29tcGxleGl0eTpcclxuICAgICAgICAvLyBMZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA2IGFuZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBpbnRlZ2VyLlxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBhc3N3b3JkVHh0Lmxlbmd0aCA+PSA2ICYmXHJcbiAgICAgICAgICBwYXNzd29yZFR4dC5tYXRjaCgvWzAtOV0vKSAmJlxyXG4gICAgICAgICAgcGFzc3dvcmRUeHQubWF0Y2goL1tBLXpdLylcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTXNnRWxlbS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZyBhbmQgY29udGFpbiBhdCBsZWFzdCAxIG51bWJlci5cIjtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1zZ0VsZW0udGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgc2V0X2tleWJpbmRlcnMoKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1QYXNzRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZV9lbGVtZW50X2F0dHJzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgdXBkYXRlX2VsZW1lbnRfYXR0cnMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGlucHV0IGFuZCBidXR0b24gZWxlbWVudHMgdG8gYWNjb3JkYW5jZVxyXG4gICAgICogd2hldGhlciBvciBub3QgdGhlIHBhc3N3b3JkcyBtYXRjaC5cclxuICAgICAqL1xyXG4gICAgaWYgKHRoaXMuY2hlY2tfcGFzc3dvcmRzKCkpIHtcclxuICAgICAgdGhpcy5wYXNzd29yZEVsZW0ucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcclxuICAgICAgdGhpcy5jb25maXJtUGFzc0VsZW0ucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcclxuICAgICAgdGhpcy5zdWJtaXRCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkRWxlbS5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgdGhpcy5jb25maXJtUGFzc0VsZW0uc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcInRydWVcIik7XHJcbiAgICAgIHRoaXMuc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMTYvMTIvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQVVJQT1NFXHJcbi8vIC0tLS0tLS1cclxuLy8gRW5hYmxlcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgcXVhbnRpdHkgY29tcG9uZW50LCB0aHVzIGVuYWJsaW5nICsvLVxyXG4vLyBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbiB0aGUgaW5wdXQgYm94LlxyXG4vL1xyXG4vLyBSRUxBVEVEIEZJTEVTXHJcbi8vIC0tLS0tLS0tLS0tLS1cclxuLy8gX3F1YW50aXR5LnNjc3NcclxuLy9cclxuLy8gSFRNTCBGT1JNQVRcclxuLy8gLS0tLS0tLS0tLS1cclxuLy8gPGRpdiBjbGFzcz1cImMtcXVhbnRpdHlcIj5cclxuLy8gICA8YnV0dG9uIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuXCIgY29udHJvbD1cInF1YW50aXR5LWRvd25cIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vICAgPGlucHV0IGNsYXNzPVwiYy1xdWFudGl0eV9faW5wdXRcIiB0eXBlPVwibnVtYmVyXCIvPlxyXG4vLyAgIDxidXR0b24gY2xhc3M9XCJjLXF1YW50aXR5X19idG5cIiBjb250cm9sPVwicXVhbnRpdHktdXBcIj5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYy1xdWFudGl0eV9fYnRuX190ZXh0XCI+JiM0NTs8L3NwYW4+XHJcbi8vICAgPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gSW1wb3J0c1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgUXVhbnRpdHlDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBmdW5jdGlvbmFsaXR5IG9udG8gdGhlIHF1YW50aXR5IGNvbXBvbmVudCB0aHVzIGVuYWJsaW5nIHRoZSArLy1cclxuICAgKiBidXR0b25zIHRvIGNvbnRyb2wgdGhlIG51bWJlciBpbnNpZGUgdGhlIGlucHV0IGJveC5cclxuICAgKi9cclxuXHJcbiAgY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICBcImMtcXVhbnRpdHlcIlxyXG4gICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgTm8gYXJndW1lbnRzIC0gY2xhc3MgdXNlcyBvYmplY3RzIGZvdW5kIG9uIHRoZSBET00uXHJcbiAgICAqL1xyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvbnRhaW5lcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9zZXRfZWxlbWVudHModGhpcy5jb250YWluZXJzW2NdKTtcclxuICAgICAgY29uc3QgYnRuRG93biA9IGVsZW1lbnRzWzBdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBidG5VcCA9IGVsZW1lbnRzWzFdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBjb25zdCBpbnB1dEJveCA9IGVsZW1lbnRzWzJdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IE51bWJlcihpbnB1dEJveC5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpO1xyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IE51bWJlcihpbnB1dEJveC5nZXRBdHRyaWJ1dGUoXCJtYXhcIikpO1xyXG5cclxuICAgICAgdGhpcy5fYnVpbGRfbWludXNfYnV0dG9uKGJ0bkRvd24sIGJ0blVwLCBpbnB1dEJveCwgbWluVmFsdWUsIG1heFZhbHVlKTtcclxuICAgICAgdGhpcy5fYnVpbGRfcGx1c19idXR0b24oYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgICB0aGlzLl9idWlsZF9pbnB1dF9ib3goYnRuRG93biwgYnRuVXAsIGlucHV0Qm94LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfc2V0X2VsZW1lbnRzKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBjb250YWluZXIsIHdpbGwgcmV0dXJuIHRoZSBidXR0b25zIGFuZCBpbnB1dCBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYnRuRG93biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2NvbnRyb2w9XCJxdWFudGl0eS1kb3duXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGJ0blVwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICdidXR0b25bY29udHJvbD1cInF1YW50aXR5LXVwXCJdJ1xyXG4gICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0Qm94ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiaW5wdXQuYy1xdWFudGl0eV9faW5wdXRcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiBbYnRuRG93biwgYnRuVXAsIGlucHV0Qm94XTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX21pbnVzX2J1dHRvbihcclxuICAgIGJ0bkRvd246IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgYnRuVXA6IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaW5wdXRCb3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBtaW5WYWx1ZTogTnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IE51bWJlclxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjbGlja2luZyB0aGUgbWludXMgYnV0dG9uLCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGJ1dCB3aWxsIHJlZHVjZVxyXG4gICAgICogYnkgb25lIHVudGlsIGl0IHJlYWNoZXMgaXRzIG1pbmltdW0gdmFsdWUsIGF0IHdoaWNoIHBvaW50LCB0aGUgYnV0dG9uXHJcbiAgICAgKiBiZWNvbWVzIGRpc2FibGVkLiBBbHNvIHdpbGwgcmVtb3ZlIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgcGx1c1xyXG4gICAgICogYnV0dG9uIGlmIGl0IGlzIGxlc3MgdGhhbiB0aGUgbWF4VmFsdWUuXHJcbiAgICAgKi9cclxuXHJcbiAgICBidG5Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChidG5Eb3duLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGlucHV0Qm94LnZhbHVlID0gU3RyaW5nKE51bWJlcihpbnB1dEJveC52YWx1ZSkgLSAxKTtcclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPCBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTnVtYmVyKGlucHV0Qm94LnZhbHVlKSA9PT0gbWluVmFsdWUpIHtcclxuICAgICAgICAgIGJ0bkRvd24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfcGx1c19idXR0b24oXHJcbiAgICBidG5Eb3duOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGJ0blVwOiBIVE1MQnV0dG9uRWxlbWVudCxcclxuICAgIGlucHV0Qm94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgbWluVmFsdWU6IE51bWJlcixcclxuICAgIG1heFZhbHVlOiBOdW1iZXJcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogT24gY2xpY2tpbmcgdGhlIHBsdXMgYnV0dG9uLCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGJ1dCB3aWxsIGluY3JlYXNlZFxyXG4gICAgICogYnkgb25lIHVudGlsIGl0IHJlYWNoZXMgaXRzIG1heGltdW0gdmFsdWUsIGF0IHdoaWNoIHBvaW50LCB0aGUgYnV0dG9uXHJcbiAgICAgKiBiZWNvbWVzIGRpc2FibGVkLiBBbHNvIHdpbGwgcmVtb3ZlIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgbWludXNcclxuICAgICAqIGJ1dHRvbiBpZiBpdCBpcyBncmVhdGVyIHRoYW4gdGhlIG1pblZhbHVlLlxyXG4gICAgICovXHJcblxyXG4gICAgYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGJ0blVwLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpICE9IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgIGlucHV0Qm94LnZhbHVlID0gU3RyaW5nKE51bWJlcihpbnB1dEJveC52YWx1ZSkgKyAxKTtcclxuXHJcbiAgICAgICAgaWYgKE51bWJlcihpbnB1dEJveC52YWx1ZSkgPiBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgYnRuRG93bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIoaW5wdXRCb3gudmFsdWUpID09PSBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfYnVpbGRfaW5wdXRfYm94KFxyXG4gICAgYnRuRG93bjogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBidG5VcDogSFRNTEJ1dHRvbkVsZW1lbnQsXHJcbiAgICBpbnB1dEJveDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIG1pblZhbHVlOiBOdW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogTnVtYmVyXHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIE9uY2UgYSBuZXcgdmFsdWUgaGFzIGJlZW4gZW50ZXJlZCBpbnRvIHRoZSBpbnB1dCBib3gsXHJcbiAgICAgKiBkaXNhYmxlL3JlLWVuYWJsZSB0aGUgcGx1cyBhbmQgbWludXMgYnV0dG9ucyBpbiBhY2NvcmRhbmNlIHdpdGggd2hldGhlclxyXG4gICAgICogdGhlIHZhbHVlIGlzIGVxdWFsIHRvIHRoZSBtaW4vbWF4IHZhbHVlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgaW5wdXRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXRCb3gudmFsdWUpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIHZhbGlkLiBJZiBub3QsIHVwZGF0ZSBhdHRyaWJ1dGVzIHRoZSBoaWdobGlnaHRcclxuICAgICAgLy8gdGhpcyB0byB0aGUgdXNlciBhbmQgZGlzYWJsZSBidXR0b25zLlxyXG4gICAgICBpZiAoVmFsaWRhdGlvbi5jaGVja19pZl9wb3NpdGl2ZV9pbnQodmFsdWUpKSB7XHJcbiAgICAgICAgLy8gSW5jYXNlIHRoZSBidXR0b25zIHdlcmUgcHJldmlvdXNseSBkaXNhYmxlZCwgcmVzZXQgYnkgcmUtZW5hYmxpbmdcclxuICAgICAgICAvLyBldmVyeXRoaW5nLlxyXG4gICAgICAgIGJ0bkRvd24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgaW5wdXRCb3gucGFyZW50RWxlbWVudCEucmVtb3ZlQXR0cmlidXRlKCdpbnZhbGlkJyk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGFnYWluc3QgdGhlIG1pbiB2YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA8PSBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBidG5Eb3duLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgYWdhaW5zdCBidG5VcCdzIG1heCB2YWx1ZVxyXG4gICAgICAgIGlmICh2YWx1ZSA+PSBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgYnRuVXAuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnRuVXAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB2YWx1ZSBpcyBlaXRoZXIgPCAwIG9yIGEgZmxvYXQuXHJcbiAgICAgICAgYnRuRG93bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIGJ0blVwLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgaW5wdXRCb3gucGFyZW50RWxlbWVudCEuc2V0QXR0cmlidXRlKCdpbnZhbGlkJywgJ3RydWUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDIvMDIvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRVxyXG4vLyAtLS0tLVxyXG4vLyBPbiBpdGVtcyB3aXRoIHRoZSByYXRpbmdzX19zdGFycyBjbGFzcy5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyAtLS0tLS0tXHJcbi8vIEZvciBjb250YWluZXJzIHdoZXJlIHRoZSBzZWxlY3RhYmxlIGF0dHJpYnV0ZSBpcyBzZXQgdG8gdHJ1ZSwga2V5YmluZGVyc1xyXG4vLyB3aWxsIGJlIGF0dGFjaGVkIHN1Y2ggdGhhdCBpZiBhIHBhcnRpY3VsYXIgc3RhciBpcyBob3ZlcmVkIG92ZXIsIHRoYXQgc3RhclxyXG4vLyBhbmQgYWxsIHByZWNlZGluZyBzdGFydHMgd2lsbCBoaWdobGlnaHQuXHJcbi8vIE9uIGNsaWNrIG9mIHRoYXQgc3RhciwgdGhhdCBzdGFydCB3aWxsIGJlIGNvbWUgc2VsZWN0ZWQgYW5kIHNvIHRoZSBjbGFzc2VzXHJcbi8vIHdpbGwgdXBkYXRlIGFjY29yZGluZ2x5LlxyXG4vL1xyXG4vLyBSRVFVSVJFTUVOVFNcclxuLy8gLS0tLS0tLS0tLS0tXHJcbi8vIC0gTXVzdCBoYXZlIGEgY29udGFpbmVyIHdpdGggI3Byb2R1Y3QtcmV2aWV3cy11c2VyLXJhdGluZyBmb3IgYWxsIHRoZSByYXRpbmdcclxuLy8gICBlbGVtZW50cy5cclxuLy9cclxuLy8gLSBPbiByZXZpZXcgZWxlbWVudCwgbXVzdCBhdHRyaWJ1dGVzIGZvciBcIm5ld1Jldmlld1Byb2R1Y3RcIiBhbmRcclxuLy8gICBcIm5ld1Jldmlld1N0b3JlXCIgd2hpY2ggc2hvdWxkIGVxdWFsIHRvIHRoZSBwcm9kdWN0IElEIGFuZCBzdG9yZSBJRFxyXG4vLyAgIHJlc3BlY3RpdmVseS5cclxuLy9cclxuLy8gLSBGb3IgUE9TVCByZXF1ZXN0LCBtdXN0IGhhdmUgYSBmb3JtIGVsZW1lbnQgd2l0aCAjdXNlci1yZXZpZXctcmF0aW5nLiBUaGVcclxuLy8gICBKYXZhU2NyaXB0IHdpbGwgdXBkYXRlIHRoaXMgaW5wdXQgdmFsdWUgd2l0aCB0aGUgcmF0aW5nIHNlbGVjdGVkLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFJhdGluZ3Mge1xyXG4gIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF0aW5nX19zdGFyc1tzZWxlY3RhYmxlPVwidHJ1ZVwiXScpO1xyXG4gIHNlbGVjdGVkQ2xhc3MgPSBcImktc3Rhci0tY2hlY2tlZFwiO1xyXG4gIHVzZXJSYXRpbmcgPSAwO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUmF0aW5ncztcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICh0aGlzLmNvbnRhaW5lcnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudXNlclJhdGluZyA9IE51bWJlcihcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdC1yZXZpZXdzLXVzZXItcmF0aW5nXCIpIVxyXG4gICAgICAgICAgLmdldEF0dHJpYnV0ZShcInVzZXJSYXRpbmdcIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnM6IEhUTUxFbGVtZW50W10gPSBbXHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10ucXVlcnlTZWxlY3RvcignLmktc3Rhclt2YWx1ZT1cIjFcIl0nKSBhcyBIVE1MRWxlbWVudCxcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyc1tjXS5xdWVyeVNlbGVjdG9yKCcuaS1zdGFyW3ZhbHVlPVwiMlwiXScpIGFzIEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgdGhpcy5jb250YWluZXJzW2NdLnF1ZXJ5U2VsZWN0b3IoJy5pLXN0YXJbdmFsdWU9XCIzXCJdJykgYXMgSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY10ucXVlcnlTZWxlY3RvcignLmktc3Rhclt2YWx1ZT1cIjRcIl0nKSBhcyBIVE1MRWxlbWVudCxcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyc1tjXS5xdWVyeVNlbGVjdG9yKCcuaS1zdGFyW3ZhbHVlPVwiNVwiXScpIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IHNlbGVjdGlvblxyXG4gICAgICAgIHRoaXMudXBkYXRlX3NlbGVjdGlvbihzdGFycyk7XHJcblxyXG4gICAgICAgIC8vIEFkZHMga2V5YmluZGVycyBvbnRvIHRoZSB0aGUgc3RhcnMgZm9yIG1vdXNlb3ZlciwgbW91c2VvdXQgYW5kIGNsaWNrLlxyXG4gICAgICAgIHRoaXMuYnVpbGRfc3Rhcl9mdW5jdGlvbnMoc3RhcnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUmF0aW5ncyB7XHJcbiAgICBpZiAoIVJhdGluZ3MuaW5zdGFuY2UpIHtcclxuICAgICAgUmF0aW5ncy5pbnN0YW5jZSA9IG5ldyBSYXRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmF0aW5ncy5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgdXBkYXRlX3NlbGVjdGlvbihzdGFyczogSFRNTEVsZW1lbnRbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzZWxlY3RlZCBjbGFzcyB0byB0aGUgc3RhcnMgaW4gYWNjb3JkYW5jZSB0byB3aGF0IHRoZVxyXG4gICAgICogdXNlcidzIGN1cnJlbnQgcmF0aW5nIGlzLlxyXG4gICAgICogV2lsbCBhbHNvIHVwZGF0ZSBhIGhpZGRlbiBpbnB1dCBpZiBpdCBleGlzdHMgd2l0aCB0aGUgdXNlcidzIHJhdGluZy5cclxuICAgICAqL1xyXG4gICAgLy8gUmVzZXRcclxuICAgIHRoaXMucmVtb3ZlX2FsbF9zdGFycyhzdGFycyk7XHJcblxyXG4gICAgY29uc3QgdXNlclJhdGluZyA9IHRoaXMudXNlcl9yYXRpbmc7XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPj0gMSkge1xyXG4gICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPj0gMikge1xyXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPj0gMykge1xyXG4gICAgICBzdGFyc1syXS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPj0gNCkge1xyXG4gICAgICBzdGFyc1szXS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXJSYXRpbmcgPT0gNSkge1xyXG4gICAgICBzdGFyc1s0XS5jbGFzc0xpc3QuYWRkKHRoaXMuc2VsZWN0ZWRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBoaWRkZW4gaW5wdXQgaWYgaXQgZXhpc3RzLlxyXG4gICAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJ1c2VyLXJldmlldy1yYXRpbmdcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIGlmIChoaWRkZW5JbnB1dCkge1xyXG4gICAgICBoaWRkZW5JbnB1dC52YWx1ZSA9IHVzZXJSYXRpbmcudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgcmVtb3ZlX2FsbF9zdGFycyhzdGFyczogSFRNTEVsZW1lbnRbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgY2xhc3MgbGlzdCBvZiBhbGwgdGhlIHN0YXJzIHNvIHRoYXQgbm9uZSBvZiB0aGVcclxuICAgICAqIHN0YXJzIGFyZSBzZWxlY3RlZC5cclxuICAgICAqL1xyXG5cclxuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc3RhcnMubGVuZ3RoOyBzKyspIHtcclxuICAgICAgc3RhcnNbc10uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgICBzdGFyc1tzXS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWdobGlnaHRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBnZXQgdXNlcl9yYXRpbmcoKTogbnVtYmVyIHtcclxuICAgIC8qKiBHZXRzIHRoZSB1c2VyIHJhdGluZy4gKi9cclxuICAgIHJldHVybiB0aGlzLnVzZXJSYXRpbmc7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBzZXQgdXNlcl9yYXRpbmcobmV3UmF0aW5nOiBudW1iZXIpIHtcclxuICAgIC8qKiBTZXRzIHRoZSB1c2VyIHJhdGluZy4gKi9cclxuICAgIHRoaXMudXNlclJhdGluZyA9IG5ld1JhdGluZztcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfc3Rhcl9mdW5jdGlvbnMoc3RhcnM6IEhUTUxFbGVtZW50W10pIHtcclxuICAgIC8qKlxyXG4gICAgICogRm9yIHRoZSBzZWxlY3RhYmxlIHJhdGluZywgb24gaG92ZXIsIGZpcnN0bHkgYWxsIHN0YXJ0cyB3aWxsIGRpc2FwcGVhclxyXG4gICAgICogYW5kIHdoZW4gZWFjaCBzdGFyIGlzIGhvdmVyZWQgb3ZlciwgdGhleSB3aWxsIGhpZ2hsaWdodC4gRmluYWxseSwgd2hlblxyXG4gICAgICogdGhlIG1vdXNlIGlzIG1vdmVkIGF3YXkgZnJvbSB0aGUgZWxlbWVudCwgcmVzZXQgdGhlIHN0YXJzIHRvIHdoYXRldmVyXHJcbiAgICAgKiBpcyB3YXMgcHJldmlvdXNseS5cclxuICAgICAqL1xyXG4gICAgZm9yIChsZXQgc3RhciA9IDA7IHN0YXIgPCBzdGFycy5sZW5ndGg7IHN0YXIrKykge1xyXG4gICAgICBzdGFyc1tzdGFyXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZV9hbGxfc3RhcnMoc3RhcnMpO1xyXG4gICAgICAgIGZvciAobGV0IHByZXZTdGFyID0gMDsgcHJldlN0YXIgPD0gc3RhcjsgcHJldlN0YXIrKylcclxuICAgICAgICAgIHN0YXJzW3ByZXZTdGFyXS5zZXRBdHRyaWJ1dGUoXCJoaWdobGlnaHRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHN0YXJzW3N0YXJdLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfc2VsZWN0aW9uKHN0YXJzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzdGFyc1tzdGFyXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlcl9yYXRpbmcgPSBzdGFyICsgMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9zZWxlY3Rpb24oc3RhcnMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAwOC8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIE1hbmFnZXMgdGhlIHNlYXJjaCBmaWx0ZXJzIG9uIHRoZSBwYWdlLlxyXG4vL1xyXG4vLyBQVVJQT1NFXHJcbi8vIFJlc3BvbnNpYmxlIGZvciBjYWxsaW5nIHRoZSBzZWFyY2ggQVBJIHdoaWNoIHdpbGwgZmlsdGVyIHJlc3VsdCBiYXNlZCBvblxyXG4vLyB3aGF0IHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB1c2luZyB0aGUgZmlsdGVycy5cclxuLy9cclxuLy8gV2lsbCB1c2UgdGhlIG5hdmlnYXRpb24gc2VhcmNoIGJhcidzIGZvcm0gdG8gaW50ZXJhY3Qgd2l0aCB0aGUgQVBJLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlcnMge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgZXhwYW5kIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBiYXIgYW5kIHRoZSBmb3JtIGVsZW1lbnQgdG8gYWxsb3cgaXQgdG9cclxuICAgKiB0YWtlIGluIHRoZSBmaWx0ZXIgb3B0aW9ucyBhcyBwYXJ0IG9mIHRoZSBHRVQgcmVxdWVzdCB3aGVuZXZlciBhIHVzZXJcclxuICAgKiBpbml0aWF0ZXMgYSBzZWFyY2guXHJcbiAgICpcclxuICAgKiBDYWxscyB0aGUgQVBJIHRvIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgKi9cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yIGRvZXMgbm90IHJlcXVpcmUgYW55IGFyZ3VtZW50cyBhbmQgd2lsbCBpbnN0ZWFkIHVzZVxyXG4gICAgICogZWxlbWVudHMgZnJvbSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICB0aGlzLl9leHBhbmRfbmF2X3NlYXJjaCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2V4cGFuZF9uYXZfc2VhcmNoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBhbmRzIG9uIHRoZSBuYXZpZ2F0aW9uIHNlYXJjaCBlbGVtZW50cyBzbyB0aGF0IHdoZW4gc2VuZGluZyBhIEdFVFxyXG4gICAgICogcmVxdWVzdCwgZmlsdGVycyB3aWwgYmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgY29uc3QgbmF2Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgIFwibmF2X19zZWFyY2hcIlxyXG4gICAgKVswXSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gQWRkIGhpZGRlbiBpbnB1dHMgdG8gY29udGFpbiB0aGUgdmFsdWVzIG9uIHRoZSBmaWx0ZXJzLlxyXG4gICAgY29uc3QgaW5wdXROYW1lcyA9IFtcImYtbWluUHJpY2VcIiwgXCJmLW1heFByaWNlXCIsIFwiZi1jYXRlZ29yeVwiLCBcImYtY29sb3VyXCJdO1xyXG4gICAgZm9yIChjb25zdCBpbnB1dE5hbWUgb2YgaW5wdXROYW1lcykge1xyXG4gICAgICBjb25zdCBoaWRkZW5JbnB1dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxyXG4gICAgICAgIFwiSU5QVVRcIlxyXG4gICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGhpZGRlbklucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpbnB1dE5hbWUpO1xyXG4gICAgICBoaWRkZW5JbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXROYW1lKTtcclxuICAgICAgbmF2Rm9ybS5hcHBlbmRDaGlsZChoaWRkZW5JbnB1dE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgaGlkZGVuIGlucHV0cyB3aGVuIGEgZmlsdGVyIGlzIHNlbGVjdGVkXHJcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICBcImRyb3Bkb3duLW1lbnVfX29wdGlvbnNcIlxyXG4gICAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgICBmb3IgKGxldCBvcHQgPSAwOyBvcHQgPCBkcm9wZG93bk9wdGlvbnMubGVuZ3RoOyBvcHQrKykge1xyXG4gICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRyb3Bkb3duT3B0aW9uc1tvcHRdO1xyXG4gICAgICBsZXQgaGlkZGVuSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICBzd2l0Y2ggKGRyb3Bkb3duT3B0aW9uLmdldEF0dHJpYnV0ZShcImZpbHRlci1mb3JcIikpIHtcclxuICAgICAgICBjYXNlIFwibWluLXByaWNlXCI6XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICBcImYtbWluUHJpY2VcIlxyXG4gICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1heC1wcmljZVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOlxyXG4gICAgICAgICAgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjb2xvdXJcIjpcclxuICAgICAgICAgIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmLWNvbG91clwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaGlkZGVuSW5wdXQpIHtcclxuICAgICAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBoaWRkZW5JbnB1dCEudmFsdWUgPSBkcm9wZG93bk9wdGlvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIS50ZXh0Q29udGVudCE7XHJcblxyXG4gICAgICAgICAgLy8gQ2FsbHMgdGhlIHNlYXJjaCByZXN1bHQgQVBJIGFuZCB0aGVuIGZpbHRlciB0aGUgcmVzdWx0cy5cclxuICAgICAgICAgIGNvbnN0IEFQSVBhdGggPSB0aGlzLl9BUElfcGF0aCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpIGFzIFtdO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcl9yZXN1bHRzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX0FQSV9wYXRoKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIEFQSSBocmVmIHBhdGggd2hlcmUgdGhlIHJlcXVlc3Qgd2lsbCBiZSBzZW50LlxyXG4gICAgICogVGhpcyBpbXBsZW1lbnRzIHRoZSBmaWx0ZXJzIHdpdGhpbiB0aGUgYWN0dWFsIFVSTC5cclxuICAgICAqL1xyXG4gICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiL3NlYXJjaC9cIiwgXCIvc2VhcmNoLXJlc3VsdHMvXCIpO1xyXG5cclxuICAgIGNvbnN0IGhpZGRlbkluTWluUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1pblByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluTWF4UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLW1heFByaWNlXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJmLWNhdGVnb3J5XCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGhpZGRlbkluQ29sb3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwiZi1jb2xvdXJcIlxyXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGlmIChoaWRkZW5Jbk1pblByaWNlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1N0ciA9IFwiZi1taW5QcmljZT1cIiArIGhpZGRlbkluTWluUHJpY2UudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLW1pblByaWNlPS4qPyYvKSkge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoL2YtbWluUHJpY2U9Lio/Ji8sIG5ld1N0ciArIFwiJlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBocmVmID0gaHJlZi5jb25jYXQoXCImXCIsIG5ld1N0cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlkZGVuSW5NYXhQcmljZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtbWF4UHJpY2U9XCIgKyBoaWRkZW5Jbk1heFByaWNlLnZhbHVlO1xyXG4gICAgICBpZiAoaHJlZi5tYXRjaCgvZi1tYXhQcmljZT0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLW1heFByaWNlPS4qPyYvLCBuZXdTdHIgKyBcIiZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYuY29uY2F0KFwiJlwiLCBuZXdTdHIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhpZGRlbkluQ2F0ZWdvcnkudmFsdWUpIHtcclxuICAgICAgY29uc3QgbmV3U3RyID0gXCJmLWNhdGVnb3J5PVwiICsgaGlkZGVuSW5DYXRlZ29yeS52YWx1ZTtcclxuICAgICAgaWYgKGhyZWYubWF0Y2goL2YtY2F0ZWdvcnk9Lio/Ji8pKSB7XHJcbiAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZSgvZi1jYXRlZ29yeT0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWRkZW5JbkNvbG91ci52YWx1ZSkge1xyXG4gICAgICBjb25zdCBuZXdTdHIgPSBcImYtY29sb3VyPVwiICsgaGlkZGVuSW5Db2xvdXIudmFsdWU7XHJcbiAgICAgIGlmIChocmVmLm1hdGNoKC9mLWNvbG91cj0uKj8mLykpIHtcclxuICAgICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9mLWNvbG91cj0uKj8mLywgbmV3U3RyICsgXCImXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhyZWYgPSBocmVmLmNvbmNhdChcIiZcIiwgbmV3U3RyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBocmVmO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgX2ZpbHRlcl9yZXN1bHRzKEFQSVJlc3VsdHM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZpbHRlcnMgdGhlIHJlc3VsdHMgb24gdGhlIHNlYXJjaCBwYWdlIGluIGFjY29yZGFuY2UgdG8gdGhlIGRhdGFcclxuICAgICAqIHJldHJpZXZlZCBmcm9tIHRoZSBzZWFyY2ggQVBJLlxyXG4gICAgICovXHJcblxyXG4gICAgLy8gY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHMnKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IG9yaWdSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0c19fcmVzdWx0Jyk7XHJcblxyXG4gICAgbGV0IHZhbGlkUHJvZHVjdHMgPSBbXTtcclxuICAgIHJlc3VsdDogSlNPTjtcclxuICAgIGZvciAoY29uc3QgcmVzdWx0IGluIEFQSVJlc3VsdHMpIHtcclxuICAgICAgdmFsaWRQcm9kdWN0cy5wdXNoKEFQSVJlc3VsdHNbcmVzdWx0XS5wcm9kdWN0X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBySUQgPSAwOyBySUQ8b3JpZ1Jlc3VsdHMubGVuZ3RoOyBySUQrKykge1xyXG4gICAgICBpZiAodmFsaWRQcm9kdWN0cy5pbmNsdWRlcyhOdW1iZXIob3JpZ1Jlc3VsdHNbcklEXS5nZXRBdHRyaWJ1dGUoJ0lEJykhKSkpIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcmlnUmVzdWx0c1tySURdLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMjgvMTEvMjAxOVxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbnRhaW5zIGltcG9ydHMgb2YgYWxsIHRoZSBtYWluIGNsYXNzZXMuXHJcbi8vIEJlaGF2ZXMgYXMgdGhlIG1haW4gaHViIGZvciB0aGUganMgYnVuZGxlLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBDb21wb25lbnQgSW1wb3J0c1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudVwiO1xyXG5pbXBvcnQgeyBRdWFudGl0eUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcXVhbnRpdHlcIjtcclxuaW1wb3J0IHsgU2VhcmNoRmlsdGVycyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoX2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRDaGVjayB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFzc3dvcmQtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IENhcm91c2VsSW1ncyB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2Fyb3VzZWwtaW1nc1wiO1xyXG5pbXBvcnQgeyBSYXRpbmdzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9yYXRpbmdzXCI7XHJcbmltcG9ydCB7IE5ld1JldmlldyB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmV3X3Jldmlld1wiO1xyXG5cclxuLy8gU3RhdGUgSW1wb3J0c1xyXG5pbXBvcnQgeyBCYXNrZXRTdGF0ZSB9IGZyb20gXCIuL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5cclxuLy8gUGFnZXMgSW1wb3J0c1xyXG5pbXBvcnQgeyBFeHRlbmRQcm9kdWN0UGFnZSB9IGZyb20gXCIuL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgUHJvZHVjdFVzZXJSZXZpZXcgfSBmcm9tIFwiLi9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0c191c2VyX3Jldmlld1wiO1xyXG5pbXBvcnQgeyBCYXNrZXRQYWdlIH0gZnJvbSBcIi4vcGFnZXMvYmFza2V0L2Jhc2tldFwiO1xyXG5cclxuLy8gQnVpbGQgdGhlIG5hdmlnYXRpb25cclxubmV3IE5hdmlnYXRpb24oKTtcclxuXHJcbi8vIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGJhc2tldFxyXG5uZXcgQmFza2V0U3RhdGUoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBkcm9wZG93biBtZW51XHJcbm5ldyBEcm9wZG93bk1lbnUoKTtcclxuXHJcbi8vIEJ1aWxkIHRoZSBzZWFyY2ggZmlsdGVyc1xyXG5uZXcgU2VhcmNoRmlsdGVycygpO1xyXG5cclxuLy8gQnVpbGQgdGhlIHBhZ2luYXRpb25cclxubmV3IFBhZ2luYXRpb24oKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFBBR0UgU1BFQ0lGSUMgSkFWQVNDUklQVFxyXG5jb25zdCBDVVJSRU5UX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuaWYgKENVUlJFTlRfVVJMLnNlYXJjaCgvXFwvcHJvZHVjdHNcXC9bMC05XXsxLH0vKSAhPSAtMSkge1xyXG4gIC8vIFByb2R1Y3QgUGFnZVxyXG4gIG5ldyBFeHRlbmRQcm9kdWN0UGFnZSgpO1xyXG4gIG5ldyBRdWFudGl0eUNvbXBvbmVudCgpO1xyXG4gIG5ldyBDYXJvdXNlbEltZ3MoKTtcclxuICBSYXRpbmdzLmdldEluc3RhbmNlKCk7XHJcbiAgbmV3IFByb2R1Y3RVc2VyUmV2aWV3KCk7XHJcbn0gZWxzZSBpZiAoQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCIvYmFza2V0L1wiKSkge1xyXG4gIC8vIEJhc2tldCBQYWdlXHJcbiAgbmV3IEJhc2tldFBhZ2UoKTtcclxufSBlbHNlIGlmIChcclxuICAvLyBBY2NvdW50IHJlZ2lzdHJhdGlvbiBhbmQgY2hhbmdlIHBhc3N3b3JkIHBhZ2VzXHJcbiAgQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCJ1c2VyL3JlZ2lzdGVyXCIpIHx8XHJcbiAgQ1VSUkVOVF9VUkwuaW5jbHVkZXMoXCJ1c2VyL2NoYW5nZS1wYXNzd29yZFwiKVxyXG4pIHtcclxuICBuZXcgUGFzc3dvcmRDaGVjaygpO1xyXG59IGVsc2UgaWYgKENVUlJFTlRfVVJMLmluY2x1ZGVzKFwiL29yZGVyLWhpc3RvcnkvXCIpKSB7XHJcbiAgbmV3IE5ld1JldmlldygpO1xyXG4gIFJhdGluZ3MuZ2V0SW5zdGFuY2UoKTtcclxufSBlbHNlIGlmIChDVVJSRU5UX1VSTC5pbmNsdWRlcyhcIi9wcm9kdWN0cy9yZXZpZXdzL1wiKSkge1xyXG4gIFJhdGluZ3MuZ2V0SW5zdGFuY2UoKTtcclxuICBuZXcgUHJvZHVjdFVzZXJSZXZpZXcoKTtcclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDA1LzAxLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gVGhlIGJhc2tldCBwYWdlLlxyXG4vL1xyXG4vLyBGVU5DVElPTkFMSVRZXHJcbi8vIC0gQ2FsbHMgdGhlIGJhc2tldC1pbmZvLUFQSSB3aGVyZSB1c2luZyB0aGUgbG9jYWwgc3RvcmFnZSBpdCBpcyBhYmxlIHRvIHNlbmRcclxuLy8gICBhIEdFVCByZXF1ZXN0IHRvIHRlaCBBUEkgc2l0ZSB1c2luZyB0aGUgcHJpbWFyeSBrZXlzIG9mIHRoZSBpdGVtcyBpbiB0aGVcclxuLy8gICBiYXNrZXQuXHJcbi8vIC0gQnVpbGRzIHBhcnQgb2YgdGhlIERPTSB3aGljaCB3aWxsIGRpc3BsYXkgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHdoYXQgaXMgaW5cclxuLy8gICBiYXNrZXQuXHJcbi8vIC0gU2V0cyBrZXkgYmluZGVycyBvbiB0aGUgcXVhbnRpdHkgb3B0aW9uIGFuZCBcInhcIiBvcHRpb24gc28gdGhhdCBpdCB1cGRhdGVzXHJcbi8vICAgdGhlIGJhc2tldC5cclxuLy8gLSBVcGRhdGVzIHRvdGFscyBzZWN0aW9uIG9uIGxvYWQgaWYgdGhlcmUgaXMgc29tZXRoaW5nIGluIHRoZSBiYXNrZXQuXHJcbi8vIC0gU2V0IGtleSBiaW5kZXJzIHNvIHRoYXQgd2hlbmV2ZXIgdGhlcmUgaXMgYSBjaGFuZ2UgdG8gdGhlIGJhc2tldCBpdGVtcyxcclxuLy8gICB0aGUgdG90YWxzIHdpbGwgYWxzbyB1cGRhdGUuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBJTVBPUlRTXHJcbmltcG9ydCB7IFZhbGlkYXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgTnVtYmVyRm9ybWF0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9udW1iZXJfZm9ybWF0XCI7XHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5pbXBvcnQgeyBRdWFudGl0eUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1YW50aXR5XCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgQmFza2V0UGFnZSBleHRlbmRzIEJhc2tldFN0YXRlIHtcclxuICAvKipcclxuICAgKiBXaWxsIGJ1aWxkIGVsZW1lbnRzIG9udG8gYmFza2V0IHBhZ2UgdXNpbmcgYW4gQVBJIHRvIHJldHJpZXZlXHJcbiAgICogaW5mb3JtYXRpb24gb24gcHJvZHVjdHMgY3VycmVudGx5IGluIHRoZSB1c2VyJ3MgYmFza2V0IChpbmZvcm1hdGlvblxyXG4gICAqIHN0b3JlZCBpbiBsb2NhbCBzdG9yYWdlKVxyXG4gICAqL1xyXG5cclxuICAvLyBUaGUgbWFpbiBsb2NhdGlvbiBhcyB0byB3aGVyZSBlYWNoIHByb2R1Y3Qgd2lsbCBiZSBpbnNlcnRlZCBmcm9tIHRoZVxyXG4gIC8vIHVzZXIncyBiYXNrZXQuXHJcbiAgc3VtbWFyeUl0ZW1zUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImJhc2tldC1zdW1tYXJ5LWRhdGFcIlxyXG4gICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGJhc2tldEl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0aGUgcHJvY2VzcyBpbiB3aGljaCB0aGUgYmFza2V0IHBhZ2UgRE9NIGlzIGJ1aWxkLlxyXG4gICAgICovXHJcbiAgICBzdXBlcigpO1xyXG4gICAgaWYgKHRoaXMuaXRlbXMgIT0gbnVsbCAmJiB0aGlzLml0ZW1zICE9IFwie31cIikge1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBKU09OLnBhcnNlKHRoaXMuaXRlbXMpKSB7XHJcbiAgICAgICAgdGhpcy5iYXNrZXRJdGVtcy5wdXNoKGtleSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJhc2tldEl0ZW1zU3RyID0gdGhpcy5iYXNrZXRJdGVtcy5qb2luKFwiLFwiKTtcclxuXHJcbiAgICAgIC8vIENhbGwgQVBJXHJcbiAgICAgIGNvbnN0IEFQSVBhdGggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFxyXG4gICAgICAgIC9iYXNrZXQuKi8sXHJcbiAgICAgICAgXCJiYXNrZXQtaW5mby1BUEkvP3Brcz1cIiArIGJhc2tldEl0ZW1zU3RyXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIEFQSVBhdGgpO1xyXG4gICAgICByZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IEFQSVJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICBpZiAoQVBJUmVzcG9uc2UucHJvZHVjdHNJbmZvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRfYmFza2V0X3N1bW1hcnkoQVBJUmVzcG9uc2UucHJvZHVjdHNJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfYmFza2V0X3N1bW1hcnkoYWxsUHJvZHVjdHM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBlYWNoIGVsZW1lbnQgaW50byB0aGUgRE9NIGluc2lkZSB0aGUgdGFyZ2V0IHBhcmVudCBjb250YWluZXIuXHJcbiAgICAgKiBUaGVyZSBlbGVtZW50cyBiZWluZyBhZGRlZCB3aWxsIGJlIHRoZSBwcm9kdWN0J3MgaW1hZ2UsIG5hbWUsIHN0b3JlXHJcbiAgICAgKiBuYW1lICwgY29sb3VyLCBxdWFudGl0eSBvcHRpb25zLCBwcmljZSBhbmQgYSBidXR0b24gdG8gcmVtb3ZlIGFuIGl0ZW1cclxuICAgICAqIGZyb20gdGhlIGJhc2tldC5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgYXJyYW5nZW1lbnQgb2YgdGhlIEhUTUwgaXMgc3VjaCB0aGF0IHRoZSBpbWFnZSBpcyBvbiB0aGUgbGVmdCBoYW5kXHJcbiAgICAgKiBzaWRlLiBQcm9kdWN0IGluZm9ybWF0aW9uIGFsb25nIHdpdGggdGhlIHF1YW50aXR5IG9wdGlvbnMgYXJlIGluIHRoZVxyXG4gICAgICogbWlkZGxlLiBQcmljZSBhbmQgdGhlIG9wdGlvbiB0byByZW1vdmUgYW4gaXRlbSBpcyBvbiB0aGUgcmlnaHQgaGFuZFxyXG4gICAgICogc2lkZS4gQXMgc3VjaCwgdGhlcmUgd2lsbCBiZSB0aHJlZSBzdWItY29udGFpbmVycyB3aGVyZSBlYWNoIGVsZW1lbnRcclxuICAgICAqIHdpbGwgYmUgYWRkZWQgdG8gdGhhdCBjb250YWluZXIuXHJcbiAgICAgKlxyXG4gICAgICogRWFjaCBvZiB0aG9zZSBjb250YWluZXJzIHdpbGwgdGhlbiBiZSBhZGRlZCB0byBhIG1haW4gY29udGFpbmVyXHJcbiAgICAgKiByZXByZXNlbnRpbmcgYSByb3cgb2YgZGF0YSB3aGljaCB3aWxsIHRoZW4gYmUgYWRkZWQgdG8gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgY29uc3QgcHJvZHVjdFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9iYXNrZXQuKi8sIFwicHJvZHVjdHMvXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwcm9kdWN0ID0gYWxsUHJvZHVjdHNbaV07XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gTnVtYmVyKEpTT04ucGFyc2UodGhpcy5pdGVtcylbcHJvZHVjdC5wcm9kdWN0SWRdKTtcclxuXHJcbiAgICAgIC8vIE1haW4gY29udGFpbmVyIGFuZCBzdWItY29udGFpbmVyLlxyXG4gICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgY29uc3QgcHJpY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgLy8gRGl2IHRvIGNvbnRhaW4gYWxsIHByb2R1Y3QgZWxlbWVudHMsIHdoaWNoIHdpbGwgdGhlbiBiZSBhcHBlbmRlZFxyXG4gICAgICAvLyBpbnRvIHRoZSBwYXJlbnQgZWxlbWVudC5cclxuICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dcIjtcclxuICAgICAgbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlkXCIsIHByb2R1Y3QucHJvZHVjdElkKTtcclxuXHJcbiAgICAgIGltZ0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2NvbnRhaW5lciBiYXNrZXQtc3VtbWFyeV9fcm93X19jb250YWluZXItLWltZ1wiXHJcbiAgICAgIGluZm9Db250YWluZXIuY2xhc3NOYW1lID0gXCJiYXNrZXQtc3VtbWFyeV9fcm93X19jb250YWluZXJcIlxyXG4gICAgICBwcmljZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2NvbnRhaW5lclwiXHJcblxyXG4gICAgICBpbWdDb250YWluZXIuc2V0QXR0cmlidXRlKCdjb250ZW50cycsICdwcm9kdWN0LWltZycpXHJcbiAgICAgIGluZm9Db250YWluZXIuc2V0QXR0cmlidXRlKCdjb250ZW50cycsICdwcm9kdWN0LWluZm8nKVxyXG4gICAgICBwcmljZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRzJywgJ3Byb2R1Y3QtcHJpY2UnKVxyXG5cclxuICAgICAgLy8gUHJvZHVjdCBJbWFnZSBFbWJlZGRlZCBpbiBMaW5rIEVsZW1lbnRcclxuICAgICAgY29uc3QgaW1nQVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBpbWdBVGFnLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fZGF0YVwiO1xyXG4gICAgICBpbWdBVGFnLmhyZWYgPSBwcm9kdWN0UGFnZSArIHByb2R1Y3QucHJvZHVjdElkO1xyXG4gICAgICBpbWdBVGFnLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1pbWFnZVwiKTtcclxuICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltZ0VsZW0uc3JjID0gcHJvZHVjdC5pbWFnZTtcclxuICAgICAgaW1nRWxlbS5hbHQgPSBcIkltYWdlIG9mIFwiICsgcHJvZHVjdC5wcm9kdWN0TmFtZTtcclxuICAgICAgaW1nQVRhZy5hcHBlbmRDaGlsZChpbWdFbGVtKTtcclxuXHJcbiAgICAgIC8vIFByb2R1Y3QgTmFtZVxyXG4gICAgICBjb25zdCBuYW1lRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBuYW1lRWxlbS5jbGFzc05hbWUgPSBcImJhc2tldC1zdW1tYXJ5X19yb3dfX2RhdGEgdGV4dC1saW5rXCI7XHJcbiAgICAgIG5hbWVFbGVtLmhyZWYgPSBwcm9kdWN0UGFnZSArIHByb2R1Y3QucHJvZHVjdElkO1xyXG4gICAgICBuYW1lRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtbmFtZVwiKTtcclxuICAgICAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBwcm9kdWN0LnByb2R1Y3ROYW1lO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBTdG9yZVxyXG4gICAgICBjb25zdCBzdG9yZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgc3RvcmVFbGVtLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fZGF0YSB0ZXh0LWxpbmtcIjtcclxuICAgICAgc3RvcmVFbGVtLmhyZWYgPSBcIi9zdG9yZXMvXCIgKyBwcm9kdWN0LnN0b3JlSWQ7XHJcbiAgICAgIHN0b3JlRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3Qtc3RvcmVcIik7XHJcbiAgICAgIHN0b3JlRWxlbS50ZXh0Q29udGVudCA9IHByb2R1Y3Quc3RvcmVOYW1lO1xyXG5cclxuICAgICAgLy8gUHJvZHVjdCBDb2xvdXJcclxuICAgICAgY29uc3QgY29sb3VyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICBjb2xvdXJFbGVtLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fZGF0YVwiO1xyXG4gICAgICBjb2xvdXJFbGVtLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1jb2xvdXJcIik7XHJcbiAgICAgIGNvbG91ckVsZW0udGV4dENvbnRlbnQgPSBwcm9kdWN0LmNvbG91ck5hbWU7XHJcblxyXG4gICAgICAvLyBRdWFudGl0eVxyXG4gICAgICAvLyBOT1RFOiBUaGUgSFRNTCBmb3JtYXQgbXVzdCBmb2xsb3cgdGhlIHN0cnVjdHVyZSBkZWZpbmVkIGluIHRoZSBxdWFudGl0eVxyXG4gICAgICAvLyBjb21wb25lbnQuXHJcbiAgICAgIGNvbnN0IHF1YW50aXR5Q29udGFpbmVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHkgYmFza2V0LXN1bW1hcnlfX3Jvd19fZnVuY3Rpb25cIjtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmlkID0gXCJwcm9kdWN0LVwiICsgcHJvZHVjdC5wcm9kdWN0SWQ7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInF1YW50aXR5XCIpO1xyXG5cclxuICAgICAgY29uc3QgcXVhbnRpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBxdWFudGl0eUlucHV0LmNsYXNzTmFtZSA9IFwiYy1xdWFudGl0eV9faW5wdXRcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5taW4gPSBcIjBcIjtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5zdGVwID0gXCIxXCI7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQubWF4ID0gcHJvZHVjdC5pbnZlbnRvcnk7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBpdGVtcy50b1N0cmluZygpO1xyXG4gICAgICBxdWFudGl0eUlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICBxdWFudGl0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGVudGVyZWQgaXMgYSBwb3NpdGl2ZSBpbnRlZ2VyIHRoZW4gdGhlIGNlcnRhaW4gdXBkYXRlc1xyXG4gICAgICAgIC8vIHdpbGwgdGFrZSBwbGFjZS5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdWFudGl0eUlucHV0LnZhbHVlKTtcclxuICAgICAgICBpZiAoVmFsaWRhdGlvbi5jaGVja19pZl9wb3NpdGl2ZV9pbnQoTnVtYmVyKHF1YW50aXR5SW5wdXQudmFsdWUpKSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGVudGVyZWQgaXMgZ3JlYXRlciB0aGFuIHRoZSBtYXgsIHRoZW4gc2V0IGl0IHRvIHRoZSBtYXguXHJcbiAgICAgICAgICBsZXQgdmFsdWUgPSBOdW1iZXIocXVhbnRpdHlJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPiBOdW1iZXIocXVhbnRpdHlJbnB1dC5tYXgpKSB7XHJcbiAgICAgICAgICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSBxdWFudGl0eUlucHV0Lm1heDtcclxuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIocXVhbnRpdHlJbnB1dC5tYXgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgbG9jYWwgc3RvcmFnZSAodXNlcidzIGJhc2tldClcclxuICAgICAgICAgIHRoaXMudXBkYXRlX3NpbmdsZV9pdGVtKHByb2R1Y3QucHJvZHVjdElkLCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBwcmljZVxyXG4gICAgICAgICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gKHZhbHVlICogcHJvZHVjdC5wcmljZSkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJhc2tldCB0b3RhbHNcclxuICAgICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbWludXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBtaW51c0J0bi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0blwiO1xyXG4gICAgICBtaW51c0J0bi5zZXRBdHRyaWJ1dGUoXCJjb250cm9sXCIsIFwicXVhbnRpdHktZG93blwiKTtcclxuICAgICAgbWludXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJlbW92ZV9hbl9pdGVtKHByb2R1Y3QucHJvZHVjdElkLCBwcm9kdWN0LnByaWNlLCBwcmljZVNwYW4pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgcGx1c0J0bi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0blwiO1xyXG4gICAgICBwbHVzQnRuLnNldEF0dHJpYnV0ZShcImNvbnRyb2xcIiwgXCJxdWFudGl0eS11cFwiKTtcclxuICAgICAgcGx1c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWRkX2FuX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIHByb2R1Y3QucHJpY2UsIHByaWNlU3Bhbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfYmFza2V0X3RvdGFscygpO1xyXG4gICAgICB9KTtcclxuLy9cclxuICAgICAgY29uc3QgbWludXNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgIG1pbnVzQnRuU3Bhbi5jbGFzc05hbWUgPSBcImMtcXVhbnRpdHlfX2J0bl9fdGV4dFwiO1xyXG4gICAgICBtaW51c0J0blNwYW4udGV4dENvbnRlbnQgPSBcIi1cIjtcclxuLy9cclxuICAgICAgY29uc3QgcGx1c0J0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgcGx1c0J0blNwYW4uY2xhc3NOYW1lID0gXCJjLXF1YW50aXR5X19idG5fX3RleHRcIjtcclxuICAgICAgcGx1c0J0blNwYW4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuLy9cclxuICAgICAgbWludXNCdG4uYXBwZW5kQ2hpbGQobWludXNCdG5TcGFuKTtcclxuICAgICAgcGx1c0J0bi5hcHBlbmRDaGlsZChwbHVzQnRuU3Bhbik7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChtaW51c0J0bik7XHJcbiAgICAgIHF1YW50aXR5Q29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChxdWFudGl0eUlucHV0KTtcclxuICAgICAgcXVhbnRpdHlDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKHBsdXNCdG4pO1xyXG4vL1xyXG4gICAgICAvLyBQcmljZVxyXG4gICAgICBjb25zdCBwcmljZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgcHJpY2VFbGVtLmNsYXNzTmFtZSA9IFwiYmFza2V0LXN1bW1hcnlfX3Jvd19fZGF0YVwiO1xyXG4gICAgICBwcmljZUVsZW0uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJwcm9kdWN0LXByaWNlLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHBvdW5kSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBwb3VuZEkudGV4dENvbnRlbnQgPSBcIsKjXCI7XHJcbiAgICAgIHBvdW5kSS5zZXRBdHRyaWJ1dGUoXCJmaWVsZFwiLCBcInByb2R1Y3QtcHJpY2UtY3VycmVuY3lcIik7XHJcbiAgICAgIHByaWNlRWxlbS5hcHBlbmRDaGlsZChwb3VuZEkpO1xyXG4vL1xyXG4gICAgICBjb25zdCBwcmljZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgcHJpY2VTcGFuLnNldEF0dHJpYnV0ZShcImZpZWxkXCIsIFwicHJvZHVjdC1wcmljZS12YWx1ZVwiKTtcclxuICAgICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgICAgTnVtYmVyKHByb2R1Y3QucHJpY2UpICogaXRlbXNcclxuICAgICAgKTtcclxuICAgICAgcHJpY2VFbGVtLmFwcGVuZENoaWxkKHByaWNlU3Bhbik7XHJcblxyXG4gICAgICAvLyBSZW1vdmUgSXRlbSBCdXR0b25cclxuICAgICAgY29uc3QgcmVtb3ZlSXRlbVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uY2xhc3NOYW1lID0gXCJiYXNrZXRfX2ljb25cIjtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uc2V0QXR0cmlidXRlKFwiZmllbGRcIiwgXCJyZW1vdmUtaXRlbVwiKTtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAvLyBPbiByZW1vdmFsLCB1cGRhdGUgdGhlIERPTSBhbmQgdGhlIGJhc2tldC9sb2NhbCBzdG9yYWdlIGFjY29yZGluZ2x5LlxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlX3dob2xlX2l0ZW0ocHJvZHVjdC5wcm9kdWN0SWQsIG1haW5Db250YWluZXIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2Jhc2tldF90b3RhbHMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUl0ZW1JID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklcIik7XHJcbiAgICAgIHJlbW92ZUl0ZW1JLmNsYXNzTmFtZSA9IFwiZmEgZmEtdGltZXNcIjtcclxuICAgICAgcmVtb3ZlSXRlbVNwYW4uYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbUkpO1xyXG4gICAgICBwcmljZUVsZW0uYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbVNwYW4pO1xyXG5cclxuICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIHRoZWlyIHJlc3BlY3RpdmUgY29udGFpbmVycywgYXBwZW5kIHRoYXQgY29udGFpbmVyXHJcbiAgICAgIC8vIHRvIHRoZSBtYWluIGNvbnRhaW5lciBhbmQgdGhlbiBmaW5hbGx5IGFwcGVuZCB0aGUgbWFpbiBjb250YWluZXIgdG8gdGhlXHJcbiAgICAgIC8vIERPTSB0YXJnZXQgZWxlbWVudC5cclxuICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0FUYWcpXHJcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUVsZW0pXHJcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcmVFbGVtKVxyXG4gICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG91ckVsZW0pXHJcbiAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocXVhbnRpdHlDb250YWluZXJFbGVtKVxyXG4gICAgICBwcmljZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZUVsZW0pXHJcbiAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKVxyXG4gICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpXHJcbiAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2VDb250YWluZXIpXHJcbiAgICAgIHRoaXMuc3VtbWFyeUl0ZW1zUGFyZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwbHkgdGhlIEphdmFTY3JpcHQgdG8gZWFjaCBxdWFudGl0eSBjb21wb25lbnQuXHJcbiAgICBuZXcgUXVhbnRpdHlDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgdXBkYXRlX2Jhc2tldF90b3RhbHMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHRvdGFscyBzZWN0aW9uIGluIHRoZSBiYXNrZXQgcGFnZS5cclxuICAgICAqIFRoZSBIVE1MIGRlZmF1bHQgYmVoYXZpb3IgaXMgdG8gc2V0IHRoZSBsb2FkcyB0aGUgZWxlbWVudHMgYW5kIHNldCB0aGVcclxuICAgICAqIHZhbHVlcyB0byDCozAuMDAgZm9yIGVhY2ggZWxlbWVudC5cclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCB1cGRhdGUgdGhlIHRvdGFscy5cclxuICAgICAqL1xyXG4gICAgLy8gQmFza2V0IEVsZW1lbnRzIGluIHRoZSBET01cclxuICAgIGNvbnN0IHN1YnRvdGFsRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0LXN1YnRvdGFsXCIpIVxyXG4gICAgICAuY2hpbGRyZW5bMV0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgY29uc3QgdmF0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0LXZhdFwiKSFcclxuICAgICAgLmNoaWxkcmVuWzFdIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGNvbnN0IHRvdGFsRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0LXRvdGFsXCIpIVxyXG4gICAgICAuY2hpbGRyZW5bMV0gYXMgSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgIC8vIEluaXRpYWwgVmFsdWVcclxuICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuXHJcbiAgICAvLyBSZXRyaWV2ZSBhbGwgZWxlbWVudHMgd2hlcmUgdGhlcmUgaXMgYSBwcmljZSBhbmQgaXRlcmF0aXZlbHkgdXBkYXRlXHJcbiAgICAvLyB0aGUgdG90YWwgcHJpY2UuXHJcbiAgICBjb25zdCBwcmljZUVsZW1zID0gZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYmFza2V0LXN1bW1hcnktZGF0YVwiKSFcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tmaWVsZD1cInByb2R1Y3QtcHJpY2UtdmFsdWVcIl0nKTtcclxuXHJcbiAgICBmb3IgKGxldCBwcmljZUlkeCA9IDA7IHByaWNlSWR4IDwgcHJpY2VFbGVtcy5sZW5ndGg7IHByaWNlSWR4KyspIHtcclxuICAgICAgdG90YWxQcmljZSArPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwX3RvX2Zsb2F0KFxyXG4gICAgICAgIHByaWNlRWxlbXNbcHJpY2VJZHhdLnRleHRDb250ZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBET00gd2lsbCB0aGUgbmV3IHRvdGFsIGZpZ3VyZXMuXHJcbiAgICBjb25zdCBzdWJUb3RhbCA9IHRvdGFsUHJpY2UgLyAxLjI7XHJcbiAgICBjb25zdCB2YXQgPSB0b3RhbFByaWNlIC0gc3ViVG90YWw7XHJcblxyXG4gICAgc3VidG90YWxFbGVtLnRleHRDb250ZW50ID0gc3ViVG90YWwudG9GaXhlZCgyKTtcclxuICAgIHZhdEVsZW0udGV4dENvbnRlbnQgPSB2YXQudG9GaXhlZCgyKTtcclxuICAgIHRvdGFsRWxlbS50ZXh0Q29udGVudCA9IE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBhcmF0ZWRfMmRwKHRvdGFsUHJpY2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSByZW1vdmVfYW5faXRlbShcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC4gRHVyaW5nIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwcm9kdWN0SWQ6IHN0cmluZyxcclxuICAgIHByaWNlOiBzdHJpbmcsXHJcbiAgICBwcmljZUVsZW06IEhUTUxFbGVtZW50XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBiYXNrZXQuXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVtb3ZlX2l0ZW0oTnVtYmVyKHByb2R1Y3RJZCksIDEpO1xyXG4gICAgcHJpY2VFbGVtLnRleHRDb250ZW50ID0gTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcGFyYXRlZF8yZHAoXHJcbiAgICAgIE51bWJlckZvcm1hdC50aG91c2FuZF9zZXBfdG9fZmxvYXQocHJpY2VFbGVtLnRleHRDb250ZW50KSAtIE51bWJlcihwcmljZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIGFkZF9hbl9pdGVtKFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYmFza2V0LiBEdXJpbmcgdGhlIHByb2Nlc3MsIGl0IHdpbGwgdXBkYXRlXHJcbiAgICAgKiB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgdXBkYXRlIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHByb2R1Y3RJZDogc3RyaW5nLFxyXG4gICAgcHJpY2U6IHN0cmluZyxcclxuICAgIHByaWNlRWxlbTogSFRNTEVsZW1lbnRcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGJhc2tldC5cclxuICAgICAqL1xyXG4gICAgdGhpcy5hZGRfaXRlbShOdW1iZXIocHJvZHVjdElkKSwgMSk7XHJcbiAgICBwcmljZUVsZW0udGV4dENvbnRlbnQgPSBOdW1iZXJGb3JtYXQudGhvdXNhbmRfc2VwYXJhdGVkXzJkcChcclxuICAgICAgTnVtYmVyRm9ybWF0LnRob3VzYW5kX3NlcF90b19mbG9hdChwcmljZUVsZW0udGV4dENvbnRlbnQpICsgTnVtYmVyKHByaWNlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgcmVtb3ZlX3dob2xlX2l0ZW0ocHJvZHVjdElkOiBzdHJpbmcsIHBhcmVudENvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBlbnRpcmUgaXRlbSBmcm9tIHRoZSBiYXNrZXQuIEluIHRoZSBwcm9jZXNzLCBpdCB3aWxsIHVwZGF0ZVxyXG4gICAgICogbG9jYWwgc3RvcmFnZSBhbmQgdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5yZW1vdmVfZW50aXJlX2l0ZW0ocHJvZHVjdElkKTtcclxuICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAyNy8xMS8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFXHJcbi8vIEZ1bmN0aW9uYWxpdHkgb24gdGhlIHByb2R1Y3QgcGFnZS5cclxuLy9cclxuLy8gUFVSUE9TRVxyXG4vLyBXaWxsIGhhbmRsZSB0aGUgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcHJvZHVjdCBwYWdlLiBUaGVzZSBpbmNsdWRlIHRoZVxyXG4vLyBmb2xsb3dpbmc6XHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgb250byB0aGUgSFRNTCBhZGRpbmcgb250byB0aGUgY29sb3VycyBmaWx0ZXIgb3B0aW9ucyBhcyB3ZWxsIGFzXHJcbi8vICAgIHRoZSBwcm9kdWN0IGluZm8gc2VjdGlvbi4gVGhlcmUgZWxlbWVudHMgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB3aGF0IG90aGVyXHJcbi8vICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4vLyAgICByZXRyaWV2ZWQgZnJvbSBhbiBBUEkuXHJcbi8vXHJcbi8vICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuLy8gICAgdG8gYmUgYWRkZWQgdG8gdGhlIGJhc2tldCBhbmQgZm9yIHRoZSBwYWdlIHRvIGJlIHJlZnJlc2hlZC5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCB7IEJhc2tldFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlL2Jhc2tldC1pdGVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZFByb2R1Y3RQYWdlIGV4dGVuZHMgQmFza2V0U3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgaGFuZGxlIHRoZSBKUyBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwcm9kdWN0IHBhZ2UuIFRoZXNlIGluY2x1ZGUgdGhlXHJcbiAgICogZm9sbG93aW5nOlxyXG4gICAqXHJcbiAgICogIC0gV2lsbCBidWlsZCBvbnRvIHRoZSBIVE1MIGFkZGluZyBvbnRvIHRoZSBjb2xvdXJzIGZpbHRlciBvcHRpb25zIGFzIHdlbGwgYXNcclxuICAgKiAgICB0aGUgcHJvZHVjdCBpbmZvIHNlY3Rpb24uIFRoZXJlIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gd2hhdCBvdGhlclxyXG4gICAqICAgIHJlbGF0ZWQgcHJvZHVjdHMgdGhlcmUgYXJlIHRvIHRoZSBjdXJyZW50IHBhZ2UuIFRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZVxyXG4gICAqICAgIHJldHJpZXZlZCBmcm9tIGFuIEFQSS5cclxuICAgKlxyXG4gICAqICAtIFdpbGwgYnVpbGQgdGhlIGZ1bmN0aW9uIGZvciB0aGUgYWRkIHRvIGJhc2tldCBidXR0b24gYWxsb3dpbmcgaXRlbXNcclxuICAgKiAgICB0byBiZSBhZGRlZCB0byB0aGUgYmFza2V0IGFuZCBmb3IgdGhlIHBhZ2UgdG8gYmUgcmVmcmVzaGVkLlxyXG4gICAqL1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogLSBSZXRyaWV2ZXMgZGF0YSBmcm9tIHRoZSBBUEkgYW5kIGNhbGxzIG1ldGhvZHMgdG8gYnVpbGQgb250byB0aGUgRE9NLlxyXG4gICAgICogLSBBZGRzIGZ1bmN0aW9uYWxpdHkgb250byB0aGUgXCJhZGQgdG8gYmFza2V0IGJ1dHRvblwiLlxyXG4gICAgICovXHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uc3QgQVBJUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXHJcbiAgICAgIFwiL3Byb2R1Y3RzL1wiLFxyXG4gICAgICBcIi9wcm9kdWN0cy9pbmZvLWFwaS9cIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBBUElQYXRoKTtcclxuICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIC8vIEFkZGluZyBjb2xvdXIgdmFyaWF0aW9uc1xyXG4gICAgICAgIGlmIChkYXRhLmNvbG91cnMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfY29sb3VycyhkYXRhLmNvbG91cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRpbmcgb3RoZXIgcHJvZHVjdHMgb2YgdGhlIHNhbWUgc2V0XHJcbiAgICAgICAgaWYgKGRhdGEuc2V0cykge1xyXG4gICAgICAgICAgdGhpcy5idWlsZF9wcm9kdWN0X3NldHMoZGF0YS5zZXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIHNpbWlsYXIgcHJvZHVjdHNcclxuICAgICAgICBpZiAoZGF0YS5zaW1pbGFyKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkX3NpbWlsYXJfcHJvZHVjdHMoZGF0YS5zaW1pbGFyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkaW5nIGZlYXR1cmVzIGluZm9ybWF0aW9uXHJcbiAgICAgICAgaWYgKGRhdGEuZmVhdHVyZXMpIHtcclxuICAgICAgICAgIHRoaXMuYnVpbGRfZmVhdHVyZXMoZGF0YS5mZWF0dXJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYWRkX3RvX2Jhc2tldCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9jb2xvdXJzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgZHJvcGRvd24gY29sb3VycyBkcm9wZG93biBtZW51IGFuZCBhZGRzIG1vcmUgY29sb3Vyc1xyXG4gICAgICogaW4gYWNjb3JkYW5jZSB0byBob3cgbWFueSBob3cgbWFueSBjb2xvdXJzIHdlcmUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBtZXRob2Qgd2lsbCBhcHBlbmQgZWxlbWVudHMgb250byB0aGUgZWxlbWVudFxyXG4gICAgICogI3Byb2R1Y3QtY29sb3VyLXZhcmlhdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBGb3IgZWFjaCBjb2xvdXIsIHRoZSBmb2xsb3dpbmcgSFRNTCB3aWxsIGJlIGFwcGVuZGVkOlxyXG4gICAgICpcclxuICAgICAqIDxhXHJcbiAgICAgKiAgIGhyZWY9XCJ7bGluayB0byBwcm9kdWN0fVwiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fbGFiZWxcIlxyXG4gICAgICogICBmb3I9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICogICA8bGFiZWwgZm9yPVwiY29sb3VyLXtjb2xvdXIgbmFtZX1cIj5cclxuICAgICAqICAgICA8c3BhblxyXG4gICAgICogICAgICAgY2xhc3M9XCJzbS1jb2xvdXItYm94XCJcclxuICAgICAqICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHtjb2xvdXIgaGV4IHZhbHVlfTtcIj5cclxuICAgICAqICAgICA8L3NwYW4+XHJcbiAgICAgKiAgICAge2NvbG91ci1uYW1lfVxyXG4gICAgICogICA8L2xhYmVsPlxyXG4gICAgICogPC9hPlxyXG4gICAgICogPGlucHV0XHJcbiAgICAgKiAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgKiAgIGNsYXNzPVwiZHJvcGRvd24tbWVudV9fb3B0aW9uc19fcmFkaW8tYnRuXCJcclxuICAgICAqICAgbmFtZT1cInByb2QtZi1jb2xvdXJcIlxyXG4gICAgICogICBpZD1cImNvbG91ci17Y29sb3VyIG5hbWV9XCJcclxuICAgICAqICAgdmFsdWU9XCJjb2xvdXIte2NvbG91ciBuYW1lfVwiXHJcbiAgICAgKiAvPlxyXG4gICAgICovXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWNvbG91ci12YXJpYXRpb25zXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXR0cnMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAvLyBVc2luZyBkYXRhIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkgdG8gYnVpbGQgY29uc3RhbnRzXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICBjb25zdCBjb2xvdXIgPSBhdHRyc1thXS5jb2xfbmFtZTtcclxuICAgICAgICBjb25zdCBoZXhfdmFsID0gYXR0cnNbYV0uY29sX2hleF92YWw7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcImFcIiB0YWdcclxuICAgICAgICBjb25zdCBsaW5rRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJBXCIpO1xyXG4gICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICAgICAgbGlua0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19sYWJlbFwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwibGFiZWxcIiB0YWdcclxuICAgICAgICBjb25zdCBsYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcbiAgICAgICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBcInNwYW5cIiB0YWdcclxuICAgICAgICBjb25zdCBzcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgIHNwYW5FbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic20tY29sb3VyLWJveFwiKTtcclxuICAgICAgICBzcGFuRWxlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IFwiICsgaGV4X3ZhbCArIFwiO1wiKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIFwiaW5wdXRcIiB0YWdcclxuICAgICAgICBjb25zdCBpbnB1dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wZG93bi1tZW51X19vcHRpb25zX19yYWRpby1idG5cIik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9kLWYtY29sb3VyXCIpO1xyXG4gICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbG91ci1cIiArIGNvbG91cik7XHJcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiY29sb3VyLVwiICsgY29sb3VyKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kaW5nIGVhY2ggdGFnIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGFyZW50IGVsZW1lbnRzLlxyXG4gICAgICAgIGxhYmVsRWxlbS5hcHBlbmRDaGlsZChzcGFuRWxlbSk7XHJcbiAgICAgICAgbGFiZWxFbGVtLmFwcGVuZChjb2xvdXIpO1xyXG4gICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGxhYmVsRWxlbSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGVuZGluZyB0aGUgZWxlbWVudHMgdG8gdGhlIHRhcmdldCBlbGVtZW50IGluIHRoZSBET00uXHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChpbnB1dEVsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1jb2xvdXItdmFyaWF0aW9ucyBkb2VzIG5vdCBleGlzdCwgYWx0ZXJuYXRpdmUgY29sb3VycyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYnVpbGRfcHJvZHVjdF9zZXRzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgXCJwcm9kdWN0IHNldHNcIiBzZWN0aW9ucy5cclxuICAgICAqIFdpbGwgYXBwZW5kIGVhY2ggcHJvZHVjdCBzZXQgb250byAjcHJvZHVjdC1zZXRzLlxyXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHByb2R1Y2UgdGhlIGZvbGxvd2luZyBIVE1MIGZvciBlYWNoIHNldDpcclxuICAgICAqXHJcbiAgICAgKiA8YSBjbGFzcz1cInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiIGhyZWY9XCJ7cHJvZHVjdCB1cmx9XCJcclxuICAgICAqICAgPGltZ1xyXG4gICAgICogICAgIGNsYXNzPVwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgKiAgICAgYWx0PVwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4ge3Byb2R1Y3QgbmFtZX1cIlxyXG4gICAgICogICA+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX25hbWUgcmVsYXRlZC1wcm9kdWN0X19uYW1lXCI+e3Byb2R1Y3QgbmFtZX08L3NwYW4+XHJcbiAgICAgKiAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zZXRfX3ByaWNlIHJlbGF0ZWQtcHJvZHVjdF9fcHJpY2VcIj57cHJvZHVjdCBwcmljZX08L3NwYW4+XHJcbiAgICAgKiA8L2E+XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3Qtc2V0c1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBpZiAoYXR0cnMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1thXS5uYW1lO1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gYXR0cnNbYV0uc2hvd2Nhc2VfaW1hZ2U7XHJcbiAgICAgICAgICBjb25zdCBwcmljZSA9IGF0dHJzW2FdLnByaWNlO1xyXG5cclxuICAgICAgICAgIC8vIFwiQVwiIHRhZyB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGltYWdlIGFuZCB0aGUgdGV4dC5cclxuICAgICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3Qtc2V0IHJlbGF0ZWQtcHJvZHVjdFwiKTtcclxuICAgICAgICAgIGxpbmtFbGVtLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcblxyXG4gICAgICAgICAgLy8gXCJJTUdcIiB0YWcgZm9yIHByb2R1Y3QgaW1hZ2UuXHJcbiAgICAgICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwicHJvZHVjdC1zZXRfX2ltZyByZWxhdGVkLXByb2R1Y3RfX2ltZ1wiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nKTtcclxuICAgICAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImFsdFwiLFxyXG4gICAgICAgICAgICBcIkltYWdlIG9mIGEgcHJvZHVjdCBvZiB3aGljaCB0aGlzIHByb2R1Y3QgaXMgYSBzZXQuIChcIiArIG5hbWUgKyBcIn1cIlxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAvLyBcIlNQQU5cIiB0YWdzIGNvbnRhaW5pbmcgdGhlIHByb2R1Y3QgbmFtZSBhbmQgcHJpY2VcclxuICAgICAgICAgIGNvbnN0IHRleHRTcGFuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4gICAgICAgICAgdGV4dFNwYW5FbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInByb2R1Y3Qtc2V0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGV4dFNwYW5FbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgICBjb25zdCB0ZXh0UHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgICB0ZXh0UHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInByb2R1Y3Qtc2V0X19wcmljZSByZWxhdGVkLXByb2R1Y3RfX3ByaWNlXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0UHJpY2VFbGVtLnRleHRDb250ZW50ID0gXCLCo1wiICsgcHJpY2U7XHJcblxyXG4gICAgICAgICAgLy8gU2V0IHRoZSBpbWFnZSBhbmQgdGV4dCBlbGVtZW50cyB0byBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIGxpbmtFbGVtXHJcbiAgICAgICAgICAvLyBhbmQgYXBwZW5kIHRoZW0gb250byB0aGUgdGFyZ2V0RWxlbSBpbiB0aGUgRE9NLlxyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XHJcbiAgICAgICAgICBsaW5rRWxlbS5hcHBlbmRDaGlsZCh0ZXh0U3BhbkVsZW0pO1xyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFByaWNlRWxlbSk7XHJcbiAgICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKGxpbmtFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiI3Byb2R1Y3Qtc2V0cyBkb2VzIG5vdCBleGlzdCwgcHJvZHVjdC1zZXRzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBidWlsZF9zaW1pbGFyX3Byb2R1Y3RzKGF0dHJzOiBhbnlbXSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgb250byB0aGUgXCJzaW1pbGFyIHByb2R1Y3RzXCIgc2VjdGlvbnMuXHJcbiAgICAgKiBXaWxsIGFwcGVuZCBlYWNoIHByb2R1Y3Qgc2V0IG9udG8gI3NpbWlsYXItcHJvZHVjdHMuXHJcbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgcHJvZHVjZSB0aGUgZm9sbG93aW5nIEhUTUwgZm9yIGVhY2ggc2V0OlxyXG4gICAgICpcclxuICAgICAqIDxhIGNsYXNzPVwicHJvZHVjdC1zZXQgcmVsYXRlZC1wcm9kdWN0XCIgaHJlZj1cIntwcm9kdWN0IHVybH1cIlxyXG4gICAgICogICA8aW1nXHJcbiAgICAgKiAgICAgY2xhc3M9XCJwcm9kdWN0LXNldF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAqICAgICBhbHQ9XCJJbWFnZSBvZiBhIHByb2R1Y3Qgb2Ygd2hpY2ggdGhpcyBwcm9kdWN0IGlzIGEgc2V0LiB7cHJvZHVjdCBuYW1lfVwiXHJcbiAgICAgKiAgID5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fbmFtZSByZWxhdGVkLXByb2R1Y3RfX25hbWVcIj57cHJvZHVjdCBuYW1lfTwvc3Bhbj5cclxuICAgICAqICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXNldF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiPntwcm9kdWN0IHByaWNlfTwvc3Bhbj5cclxuICAgICAqIDwvYT5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltaWxhci1wcm9kdWN0c1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbSkge1xyXG4gICAgICBpZiAoYXR0cnMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhdHRycy5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgLy8gVXNpbmcgZGF0YSByZXRyaWV2ZWQgZnJvbSB0aGUgQVBJIHRvIGJ1aWxkIGNvbnN0YW50c1xyXG4gICAgICAgICAgY29uc3QgaHJlZiA9IFwiL3Byb2R1Y3RzL1wiICsgYXR0cnNbYV0ucHJvZHVjdF9pZDtcclxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1thXS5uYW1lO1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gYXR0cnNbYV0uc2hvd2Nhc2VfaW1hZ2U7XHJcbiAgICAgICAgICBjb25zdCBwcmljZSA9IGF0dHJzW2FdLnByaWNlO1xyXG5cclxuICAgICAgICAgIC8vIFwiQVwiIHRhZyB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGltYWdlIGFuZCB0aGUgdGV4dC5cclxuICAgICAgICAgIGNvbnN0IGxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkFcIik7XHJcbiAgICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpbWlsYXItcHJvZHVjdCByZWxhdGVkLXByb2R1Y3RcIik7XHJcbiAgICAgICAgICBsaW5rRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG5cclxuICAgICAgICAgIC8vIFwiSU1HXCIgdGFnIGZvciBwcm9kdWN0IGltYWdlLlxyXG4gICAgICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9faW1nIHJlbGF0ZWQtcHJvZHVjdF9faW1nXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcpO1xyXG4gICAgICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwiYWx0XCIsXHJcbiAgICAgICAgICAgIFwiSW1hZ2Ugb2YgYSBwcm9kdWN0IG9mIHdoaWNoIHRoaXMgcHJvZHVjdCBpcyBhIHNldC4gKFwiICsgbmFtZSArIFwifVwiXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIC8vIFwiU1BBTlwiIHRhZ3MgY29udGFpbmluZyB0aGUgcHJvZHVjdCBuYW1lIGFuZCBwcmljZVxyXG4gICAgICAgICAgY29uc3QgdGV4dFNwYW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgICB0ZXh0U3BhbkVsZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICBcImNsYXNzXCIsXHJcbiAgICAgICAgICAgIFwic2ltaWxhci1wcm9kdWN0X19uYW1lIHJlbGF0ZWQtcHJvZHVjdF9fbmFtZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGV4dFNwYW5FbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgICAgICBjb25zdCB0ZXh0UHJpY2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcbiAgICAgICAgICB0ZXh0UHJpY2VFbGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJjbGFzc1wiLFxyXG4gICAgICAgICAgICBcInNpbWlsYXItcHJvZHVjdF9fcHJpY2UgcmVsYXRlZC1wcm9kdWN0X19wcmljZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGV4dFByaWNlRWxlbS50ZXh0Q29udGVudCA9IFwiwqNcIiArIHByaWNlO1xyXG5cclxuICAgICAgICAgIC8vIFNldCB0aGUgaW1hZ2UgYW5kIHRleHQgZWxlbWVudHMgdG8gYmVjb21lIGNoaWxkcmVuIG9mIHRoZSBsaW5rRWxlbVxyXG4gICAgICAgICAgLy8gYW5kIGFwcGVuZCB0aGVtIG9udG8gdGhlIHRhcmdldEVsZW0gaW4gdGhlIERPTS5cclxuICAgICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xyXG4gICAgICAgICAgbGlua0VsZW0uYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtKTtcclxuICAgICAgICAgIGxpbmtFbGVtLmFwcGVuZENoaWxkKHRleHRQcmljZUVsZW0pO1xyXG4gICAgICAgICAgdGFyZ2V0RWxlbS5hcHBlbmRDaGlsZChsaW5rRWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldEVsZW0ucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIiNzaW1pbGFyLXByb2R1Y3RzIGRvZXMgbm90IGV4aXN0LCBzaW1pbGFyLXByb2R1Y3RzIGNhbm5vdCBiZSBhZGRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYnVpbGRfZmVhdHVyZXMoYXR0cnM6IGFueVtdKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgZmVhdHVyZXMgc2VjdGlvbiBvZiBwcm9kdWN0IGluZm9ybWF0aW9uIGJhc2VkIG9uIHJlc3VsdHNcclxuICAgICAqIHJldHJpZXZlZCBmcm9tIHRoZSBBUEkuXHJcbiAgICAgKiBXaWxsIGNyZWF0ZSBhIFwiUFwiIHRhZyBmb3IgZWFjaCBmaWx0ZXIgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSB0YXJnZXRcclxuICAgICAqIGVsZW1lbnQgaW4gdGhlIERPTS5cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtZmVhdHVyZXNcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW0pIHtcclxuICAgICAgZm9yIChsZXQgZiA9IDA7IGYgPCBhdHRycy5sZW5ndGg7IGYrKykge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdHRyc1tmXS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdC1pbmZvX19zZWN0aW9uX190ZXh0XCIpO1xyXG4gICAgICAgIG5ld0VsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICB0YXJnZXRFbGVtLmFwcGVuZENoaWxkKG5ld0VsZW0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCIjcHJvZHVjdC1mZWF0dXJlcyBkb2VzIG5vdCBleGlzdCwgc2ltaWxhci1wcm9kdWN0cyBjYW5ub3QgYmUgYWRkZWQuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgYWRkX3RvX2Jhc2tldCgpIHtcclxuICAgIC8qKiBBZGRzIHByb2R1Y3RzIGludG8gdGhlIGJhc2tldCAqL1xyXG4gICAgY29uc3QgaW5wdXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwicXVhbnRpdHktY3RybFwiXHJcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwcm9kdWN0SWQgPSBOdW1iZXIoaW5wdXRFbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtaWRcIikpO1xyXG5cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImFkZC10by1iYXNrZXQtYnRuXCJcclxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgcXVhbnRpdHkgPSBOdW1iZXIoaW5wdXRFbGVtLnZhbHVlKTtcclxuXHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHF1YW50aXR5KSkge1xyXG4gICAgICAgIHN1cGVyLmFkZF9pdGVtKHByb2R1Y3RJZCwgcXVhbnRpdHkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIFwiQ2hlY2sgdGhlIHF1YW50aXR5LCBpdCBpcyBlaXRoZXIgTmFOIG9yIGEgZmxvYXQuIE11c3QgYmUgYSBudW1iZXJcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBEYXRlIENyZWF0ZWQ6IDAyLzAyLzIwMjBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEVcclxuLy8gUmV2aWV3cyBzZWN0aW9uIG9uIGEgcHJvZHVjdCBwYWdlL1xyXG4vL1xyXG4vLyBPVkVSVklFV1xyXG4vLyBPbiB0aGUgcHJvZHVjdHMgcGFnZSBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkIGFuZCB0aGUgdXNlciBoYXMgbGVmdFxyXG4vLyBjb21tZW50cywgdGhlcmUgd2lsbCBiZSBvcHBvcnR1bml0eSB0byB1cGRhdGUgb3IgZGVsZXRlIHRoYXQgY29tbWVudC5cclxuLy9cclxuLy8gT24gbG9hZCwgdGhlIGNvbW1lbnQgd2lsbCBiZSBwbGFjZWQgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSwgd2l0aCBhbiBlZGl0IGFuZFxyXG4vLyBkZWxldGUgYnV0dG9uLlxyXG4vL1xyXG4vLyBJZiB1c2VyIGNsaWNrcyBvbiB0aGUgZWRpdCBidXR0b24sIHJlcGxhY2UgdGhlIGNvbW1lbnQgd2l0aCBmb3JtIGVsZW1lbnRzXHJcbi8vIGFsbG93aW5nIHRoZSB1c2VyIHRvIGVkaXQgdGhlIHJhdGluZywgdGl0bGUgYW5kIGNvbW1lbnQuIE9uIGNsaWNraW5nIGVkaXQsXHJcbi8vIGEgaGlkZGVuIGlucHV0IGJ1dHRvbiB3aWxsIGJlIHVwZGF0ZWQgdGhlIGluZGljYXRlIHRoYXQgdGhlIHVzZXIgaGFzIGNob3NlblxyXG4vLyB0byB1cGRhdGUgdGhlaXIgY29udGVudC5cclxuLy9cclxuLy8gQmVsb3cgYWxsIG9mIHRoaXMsIHRoZXJlIHdpbGwgYmUgYSBzdWJtaXQgYW5kIGNhbmNlbCBidXR0b24uIFRoZSBjYW5jZWxcclxuLy8gYnV0dG9uIHdpbGwgbm90IG1ha2UgYW55IGNoYW5nZXMsIHJhdGhlciByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIHZpZXcuXHJcbi8vXHJcbi8vIElmIHRoZSB1c2VyIHByZXNzZXMgdGhlIHN1Ym1pdCBidXR0b24sIGEgaGlkZGVuIHN1Ym1pdCBidXR0b24gd291bGQgbmVlZCB0b1xyXG4vLyBjbGlja2VkIHRocm91Z2ggdGhlIEphdmFTY3JpcHQgd2hpY2ggd2lsbCBzZW50IGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBiYWNrZW5kLlxyXG4vL1xyXG4vLyBJZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBkZWxldGUgYnV0dG9uLCB0aGVyZSB3aWxsIGJlIGEgcG9wIHVwIGFza2luZyB0aGVtIHRvXHJcbi8vIGNvbmZpcm0gdGhhdCB0aGV5IHdhbnQgdG8gZGVsZXRlIHRoZWlyIHBvc3QuIElmIGNvbmZpcm1lZCwgdGhlbiBhbiBoaWRkZW5cclxuLy8gaW5wdXQgd2lsbCBiZSB1cGRhdGVkIGFuZCBhIHRoZSBzdWJtaXQgY2xpY2tlZCBzZW5kaW5nIGEgUE9TVCByZXF1ZXN0IG90IHRoZVxyXG4vLyBiYWNrZW5kLlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RVc2VyUmV2aWV3IHtcclxuICAvLyBGb3JtIGNvbnRhaW5pbmcgdGhlIHVzZXIgcmV2aWV3IG9yIG51bGwuXHJcbiAgdXNlclJldmlld0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwicHJvZHVjdC11c2VyLXJldmlldy1mb3JtXCJcclxuICApIGFzIEhUTUxGb3JtRWxlbWVudCB8IG51bGw7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3IgaG9sZHMgdGhlIGNvbnN0YW50cyBhbmQgZGljdGF0ZXMgdGhlIGJ1aWxkIG9yZGVyIG9mIGVhY2hcclxuICAgICAqIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuXHJcbiAgICBpZiAodGhpcy51c2VyUmV2aWV3Rm9ybSkge1xyXG4gICAgICAvLyBFbGVtZW50cyBmcm9tIHRoZSBmb3JtIHRoYXQgd2lsIGJlIGludGVyYWN0ZWQgd2l0aC5cclxuXHJcbiAgICAgIC8vIEN1cnJlbnQgdXNlciByZXZpZXcgc2VjdGlvblxyXG4gICAgICBjb25zdCBjdXJyZW50UmV2aWV3U2VjdHMgPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgJ1t1c2VyU2VjdGlvbj1cImN1cnJlbnQtc2VjdGlvblwiXSdcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdXBkYXRlUmV2aWV3U2VjdHMgPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgJ1t1c2VyU2VjdGlvbj1cInVwZGF0ZS1zZWN0aW9uXCJdJ1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjb25maXJtRGVsZXRlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICBcInByb2R1Y3QtcmV2aWV3c19fcmV2aWV3X19jb25maXJtLWRlbGV0ZVwiXHJcbiAgICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgICAvLyBCdXR0b25zXHJcbiAgICAgIGNvbnN0IGVkaXRCdG4gPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjdXNlci1yZXZpZXctZWRpdC1zdGFydFwiXHJcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1lZGl0LWNhbmNlbFwiXHJcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjdXNlci1yZXZpZXctZGVsZXRlLXN0YXJ0XCJcclxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3Qgc3VibWl0QnRuID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3VzZXItcmV2aWV3LXN1Ym1pdFwiXHJcbiAgICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgICAvLyBJbnB1dCBlbGVtZW50c1xyXG4gICAgICBjb25zdCB1c2VyU3VibWl0QnRuID0gdGhpcy51c2VyUmV2aWV3Rm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3VzZXItcmV2aWV3LWVkaXQtc3VibWl0XCJcclxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIC8vICAgLy8gSGlkZGVuIGlucHV0c1xyXG4gICAgICBjb25zdCBvcGVyYXRpb25ISW5wdXQgPSB0aGlzLnVzZXJSZXZpZXdGb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjdXNlci1yZXZpZXctb3BlcmF0aW9uXCJcclxuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAvLyAgIGNvbnN0IHVzZXJSYXRpbmdISW5wdXQgPSB0aGlzLnVzZXJSZXZpZXdGb3JtLmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAvLyAgICAgXCJ1c2VyLXJldmlldy1yYXRpbmdcIlxyXG4gICAgICAvLyAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgY29uc3QgZGVsZXRlQm9vbEhJbnB1dCA9IHRoaXMudXNlclJldmlld0Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiN1c2VyLXJldmlldy1kZWxldGUtYm9vbFwiXHJcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgIHRoaXMuX2J1aWxkX3VwZGF0ZV9jb21tZW50c19lZGl0X2J0bihcclxuICAgICAgICBlZGl0QnRuLFxyXG4gICAgICAgIGN1cnJlbnRSZXZpZXdTZWN0cyxcclxuICAgICAgICB1cGRhdGVSZXZpZXdTZWN0c1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9idWlsZF91cGRhdGVfY29tbWVudHNfY2FuY2VsX2J0bihcclxuICAgICAgICBjYW5jZWxCdG4sXHJcbiAgICAgICAgY3VycmVudFJldmlld1NlY3RzLFxyXG4gICAgICAgIHVwZGF0ZVJldmlld1NlY3RzXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX2J1aWxkX3VwZGF0ZV9jb21tZW50c19zdWJtaXRfYnRuKFxyXG4gICAgICAgIHVzZXJTdWJtaXRCdG4sXHJcbiAgICAgICAgc3VibWl0QnRuLFxyXG4gICAgICAgIG9wZXJhdGlvbkhJbnB1dFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9idWlsZF9kZWxldGVfZnVuY3Rpb25zKFxyXG4gICAgICAgIGRlbGV0ZUJ0bixcclxuICAgICAgICBvcGVyYXRpb25ISW5wdXQsXHJcbiAgICAgICAgY29uZmlybURlbGV0ZUJveCxcclxuICAgICAgICBkZWxldGVCb29sSElucHV0LFxyXG4gICAgICAgIHN1Ym1pdEJ0blxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX3VwZGF0ZV9jb21tZW50c19lZGl0X2J0bihcclxuICAgIGVkaXRCdG46IEhUTUxFbGVtZW50LFxyXG4gICAgY3VycmVudFJldmlld1NlY3RzOiBOb2RlTGlzdCxcclxuICAgIHVwZGF0ZVJldmlld1NlY3RzOiBOb2RlTGlzdFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGNvbnRyb2xzIGZvciB0aGUgZWRpdCBidXR0b24uXHJcbiAgICAgKiBPbiBjbGljaywgdGhlIHVzZXIncyByZXZpZXcgaW4gdGhlIGZvcm0gb2YgYmxvY2sgdGV4dCB3aWxsIGhpZGVcclxuICAgICAqIGFuZCBhIGZvcm0gd2lsbCBiZSBzaG93biB3aGVyZSB0aGUgdXNlciB3aWxsIGJlIGFibGUgdG8gdXBkYXRlXHJcbiAgICAgKiB0aGVpciBjb21tZW50cyBhbmQgcmF0aW5nLlxyXG4gICAgICovXHJcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IHNlY3Rpb24gPSAwOyBzZWN0aW9uIDwgY3VycmVudFJldmlld1NlY3RzLmxlbmd0aDsgc2VjdGlvbisrKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IGN1cnJlbnRSZXZpZXdTZWN0c1tzZWN0aW9uXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0YXJnZXRFbGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBzZWN0aW9uID0gMDsgc2VjdGlvbiA8IHVwZGF0ZVJldmlld1NlY3RzLmxlbmd0aDsgc2VjdGlvbisrKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IHVwZGF0ZVJldmlld1NlY3RzW3NlY3Rpb25dIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRhcmdldEVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX3VwZGF0ZV9jb21tZW50c19jYW5jZWxfYnRuKFxyXG4gICAgY2FuY2VsQnRuOiBIVE1MRWxlbWVudCxcclxuICAgIGN1cnJlbnRSZXZpZXdTZWN0czogTm9kZUxpc3QsXHJcbiAgICB1cGRhdGVSZXZpZXdTZWN0czogTm9kZUxpc3RcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBjb250cm9scyBmb3IgdGhlIGNhbmNlbCBidXR0b24uXHJcbiAgICAgKiBPbiBjbGljaywgdGhlIHVzZXIncyByZXZpZXcgaW4gdGhlIGZvcm0gb2YgYmxvY2sgdGV4dCB3aWxsIHNob3dcclxuICAgICAqIGFuZCB0aGUgdGhlIHVwZGF0ZSBjb21tZW50cyBzZWN0aW9uIHdpbGwgaGlkZS5cclxuICAgICAqL1xyXG5cclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCBzZWN0aW9uID0gMDsgc2VjdGlvbiA8IGN1cnJlbnRSZXZpZXdTZWN0cy5sZW5ndGg7IHNlY3Rpb24rKykge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSBjdXJyZW50UmV2aWV3U2VjdHNbc2VjdGlvbl0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGFyZ2V0RWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgc2VjdGlvbiA9IDA7IHNlY3Rpb24gPCB1cGRhdGVSZXZpZXdTZWN0cy5sZW5ndGg7IHNlY3Rpb24rKykge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW0gPSB1cGRhdGVSZXZpZXdTZWN0c1tzZWN0aW9uXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0YXJnZXRFbGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBwcml2YXRlIF9idWlsZF9kZWxldGVfZnVuY3Rpb25zKFxyXG4gICAgZGVsZXRlQnRuOiBIVE1MRWxlbWVudCxcclxuICAgIGhPcGVyYXRpb25JbnB1dDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIGNvbmZpcm1EZWxldGVCb3g6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgaENvbmZpcm1EZWxldGVJbnB1dDogSFRNTElucHV0RWxlbWVudCxcclxuICAgIHN1Ym1pdEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnRcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBkZWxldGUgZnVuY3Rpb25hbGl0eSB3aGVyZSBhIHVzZXIgaXMgYWJsZSB0byBkZWxldGUgdGhlaXJcclxuICAgICAqIG93biBjb21tZW50cy5cclxuICAgICAqIFdoZW4gYSB1c2VyIHByZXNzZXMgZGVsZXRlLCByZXZlYWwgdGhlIGNvbmZpcm0gcG9wIHVwXHJcbiAgICAgKiAoY29uZmlybURlbGV0ZUJveCkgd2hlcmUgdGhlIHVzZXIgaGFzIHRoZSBvcHRpb24gdG8gZWl0aGVyIGNvbmZpcm1cclxuICAgICAqIGRlbGV0ZSBvciBjYW5jZWwuXHJcbiAgICAgKiBJZiB0aGUgdXNlciBwcmVzc2VzIGNhbmNlbCBvciBhbnl3aGVyZSBvdXRzaWRlIHRoZSBib3gsXHJcbiAgICAgKiBoaWRlIHRoZSBwb3AgdXAgYW5kIHRha2Ugbm8gZnVydGhlciBhY3Rpb24uXHJcbiAgICAgKiBPdGhlcndpc2UsIGlmIHRoZSB1c2VyIGNvbmZpcm1zIHRoZXkgd2lzaCB0byBkZWxldGUgdGhlIHBvc3QsIHVwZGF0ZVxyXG4gICAgICogdGhlIGhpZGRlbiBpbnB1dHMgKGhPcGVyYXRpb25JbnB1dCBhbmQgaENvbmZpcm1EZWxldGVJbnB1dCkgYW5kXHJcbiAgICAgKiBzdWJtaXQgdGhlIGZvcm0gKGNsaWNrIG9uIHN1Ym1pdEJ0bikuXHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBTaG93IHRoZSBwb3AgdXAgaWYgdXNlciBjbGlja3Mgb24gZGVsZXRlLlxyXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGNvbmZpcm1EZWxldGVCb3guY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSGlkZSB0aGUgZm9ybSBpZiB0aGUgdXNlciBwcmVzc2VzIGNhbmNlbCBvbiB0aGUgcG9wIHVwIGJveCBvciBjbGlja3NcclxuICAgIC8vIG91dHNpZGUgdGhlIGJveC5cclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uZmlybURlbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbmZpcm1EZWxldGVCb3hcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybS1kZWxldGVfX2lubmVyLWNvbnRhaW5lclwiKVxyXG4gICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbmZpcm1EZWxldGVCb3hcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWRlbGV0ZV9fYnRuW2Zvcj1cImNhbmNlbFwiXScpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25maXJtRGVsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBJZiB0aGUgdXNlciBjb25maXJtcyB0aGV5IHdhbnQgdG8gZGVsZXRlIHRoZWlyIHJldmlldywgcG9wdWxhdGVcclxuICAgIC8vIHRoZSBoaWRkZW4gaW5wdXRzIGFjY29yZGluZ2x5IGFuZCBzdWJtaXQgdGhlIGZvcm0uXHJcbiAgICBjb25maXJtRGVsZXRlQm94XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybS1kZWxldGVfX2J0bltmb3I9XCJkZWxldGVcIl0nKSFcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaE9wZXJhdGlvbklucHV0LnZhbHVlID0gXCJkZWxldGVcIjtcclxuICAgICAgICBoQ29uZmlybURlbGV0ZUlucHV0LnZhbHVlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgc3VibWl0QnRuLmNsaWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX2J1aWxkX3VwZGF0ZV9jb21tZW50c19zdWJtaXRfYnRuKFxyXG4gICAgdXNlclN1Ym1pdEJ0bjogSFRNTEVsZW1lbnQsXHJcbiAgICBzdWJtaXRCdG46IEhUTUxCdXR0b25FbGVtZW50LFxyXG4gICAgaE9wZXJhdGlvbklucHV0OiBIVE1MSW5wdXRFbGVtZW50XHJcbiAgKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgZnVuY3Rpb25hbGl0eSB0byB1cGRhdGUgY29tbWVudHMuXHJcbiAgICAgKiBXaGVuIHRoZSBcImVkaXQgY29tbWVudHNcIiBmb3JtIGVsZW1lbnRzIGFyZSB2aXNpYmxlLCB0aGUgdXNlciB3aWxsIGhhdmVcclxuICAgICAqIHRoZSBhYmlsaXR5IHRvIGNoYW5nZSB0aGUgcmF0aW5nLCB1cGRhdGUgdGhlIHRpdGxlIGFuZCBjb21tZW50LlxyXG4gICAgICogSWYgdGhlIHVzZXIgcHJlc3NlcyBzdWJtaXQsIGNhcHR1cmUgYW5kIHN1Ym1pdCB0aGUgZm9ybS5cclxuICAgICAqIFRoaXMgaXMgZG9uZSB1c2luZyB0aGUgbmFtZSBhdHRyaWJ1dGUgb24gdGhlIGlucHV0IGVsZW1lbnRzLlxyXG4gICAgICogRm9yIHRoZSByYXRpbmdzLCB0aGlzIGlzIGhhbmRsZWQgYnkgaXRzIG93biBtb2R1bGUgd2hlcmUgYSBoaWRkZW5cclxuICAgICAqIGlucHV0IGlzIHVwZGF0ZWQgd2l0aCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHVzZXJTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaE9wZXJhdGlvbklucHV0LnZhbHVlID0gXCJ1cGRhdGVcIjtcclxuICAgICAgc3VibWl0QnRuLmNsaWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRGF0ZSBDcmVhdGVkOiAzMC8xMi8yMDE5XHJcbi8vIENyZWF0ZWQgQnk6IFNhbGFhaCBBbWluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNDT1BFOlxyXG4vLyAtLS0tLS1cclxuLy8gUGFnZXMgd2hlcmUgaW50ZXJhY3Rpb24gd2l0aCBpdGVtcyBpbiB0aGUgYmFza2V0IG5lZWQgdG8gYmUgYWNjZXNzIGFuZC9vclxyXG4vLyBtb2RpZmllZC5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gLSBNYW5hZ2UgdGhlIGJhc2tldCBpdGVtc1xyXG4vLyAtIEtlZXAgYmFza2V0IGRhdGEgd2hlbmV2ZXIgdXNlciBtb3ZlcyBhd2F5IGZyb20gdGhlIHBhZ2VcclxuLy8gLSBVcGRhdGVzIHRoZSBiYXNrZXQgaXRlbXMgY291bnRcclxuLy9cclxuLy8gREVTQ1JJUFRJT046XHJcbi8vIC0tLS0tLS0tLS0tLVxyXG4vLyBMZXZlcmFnZXMgdGhlIHBvd2VyIG9mIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCBhIHRyYWNrIG9mIHRoZSBiYXNrZXQuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgQmFza2V0U3RhdGUge1xyXG4gIHRvdGFsSXRlbXM6IHN0cmluZyB8IG51bGwgfCBudW1iZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICBcInRvdGFsQmFza2V0U2l6ZVwiXHJcbiAgKTtcclxuICBpdGVtczogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFza2V0SXRlbXNcIik7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHByaXZhdGUgX3JlYWRfaXRlbXMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgdG90YWwgYW5kIGJhc2tldCBzaXplIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIGNvbnZlcnRzXHJcbiAgICAgKiB0aGUgdmFsdWVzIGludG8gdHlwZXMgdGhhdCBjYW4gYmUgd29ya2VkIHdpdGguXHJcbiAgICAgKi9cclxuICAgIGlmICghdGhpcy50b3RhbEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMudG90YWxJdGVtcyA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKHRoaXMuaXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IHt9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcHJpdmF0ZSBfc2V0X2l0ZW1zKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgbG9jYWwgc3RvcmFnZSBpdGVtcyBpbnRvIHN0cmluZ3MgYW5kIHNhdmVzIHRoZW0gb250byB0aGVcclxuICAgICAqIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBiYXNrZXQgaXRlbXMgY291bnRlci5cclxuICAgICAqL1xyXG5cclxuICAgIGlmICghdGhpcy50b3RhbEl0ZW1zKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsQmFza2V0U2l6ZVwiLCBcIjBcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgXCJ0b3RhbEJhc2tldFNpemVcIixcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMudG9TdHJpbmcoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pdGVtcykge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYXNrZXRJdGVtc1wiLCBcInt9XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYXNrZXRJdGVtc1wiLCB0aGlzLml0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGJhc2tldFxyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGFkZF9pdGVtKGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpIHtcclxuICAgIC8qKiBNZXRob2QgZm9yIGFkZGluZyBpdGVtcyBpbnRvIHRoZSBiYXNrZXQuICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcblxyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gTnVtYmVyKHRoaXMudG90YWxJdGVtcyk7XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgKz0gcXVhbnRpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXRlbXNbaWRdKSB7XHJcbiAgICAgIHRoaXMuaXRlbXNbaWRdICs9IHF1YW50aXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gPSBxdWFudGl0eTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NldF9pdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgcmVtb3ZlX2l0ZW0oaWQ6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgLyoqIE1ldGhvZCBmb3IgcmVtb3ZpbmcgaXRlbXMgZnJvbSB0aGUgYmFza2V0LiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG5cclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpO1xyXG4gICAgaWYgKHRoaXMudG90YWxJdGVtcyA+IDApIHtcclxuICAgICAgdGhpcy50b3RhbEl0ZW1zIC09IHF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVfYmFza2V0X2NvdW50ZXIodGhpcy50b3RhbEl0ZW1zKTtcclxuXHJcbiAgICBpZiAodGhpcy5pdGVtc1tpZF0pIHtcclxuICAgICAgdGhpcy5pdGVtc1tpZF0gPSBOdW1iZXIodGhpcy5pdGVtc1tpZF0pO1xyXG4gICAgICB0aGlzLml0ZW1zW2lkXSAtPSBxdWFudGl0eTtcclxuICAgICAgaWYgKHRoaXMuaXRlbXNbaWRdID09IDApIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pdGVtc1tpZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHJlbW92ZV9lbnRpcmVfaXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAvKiogUmVtb3ZlcyBhbmQgZW50aXJlIGl0ZW0uICovXHJcbiAgICB0aGlzLl9yZWFkX2l0ZW1zKCk7XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSBOdW1iZXIodGhpcy50b3RhbEl0ZW1zKSAtIE51bWJlcih0aGlzLml0ZW1zW2lkXSk7XHJcbiAgICBkZWxldGUgdGhpcy5pdGVtc1tpZF07XHJcbiAgICB0aGlzLl9zZXRfaXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHVwZGF0ZV9iYXNrZXRfY291bnRlcihuZXdOdW06IHN0cmluZyB8IG51bWJlciB8IG51bGwpIHtcclxuICAgIC8qKiBVcGRhdGVzIHRoZSBiYXNrZXQgY291bnRlciBudW1iZXIgKi9cclxuICAgIGNvbnN0IGJhc2tldENvdW50RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICBcImJhc2tldC10b3RhbC1pdGVtc1wiXHJcbiAgICApIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgICBpZiAobmV3TnVtKSB7XHJcbiAgICAgIGJhc2tldENvdW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgYmFza2V0Q291bnRFbGVtLnRleHRDb250ZW50ID0gbmV3TnVtLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYXNrZXRDb3VudEVsZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB1cGRhdGVfc2luZ2xlX2l0ZW0ocHJvZHVjdElkOiBzdHJpbmcgfCBudW1iZXIsIG5ld051bTogbnVtYmVyKSB7XHJcbiAgICAvKiogVXBkYXRlcyB0aGUgbG9jYWwgc3RvcmFnZSBmb3IgYSBzaW5nbGUgaXRlbSB3aXRoIGEgbmV3IHF1YW50aXR5LiAqL1xyXG4gICAgdGhpcy5fcmVhZF9pdGVtcygpO1xyXG4gICAgY29uc3QgcHJldlZhbHVlID0gTnVtYmVyKHRoaXMuaXRlbXNbcHJvZHVjdElkXSlcclxuICAgIHRoaXMuaXRlbXNbcHJvZHVjdElkXSA9IG5ld051bTtcclxuICAgIHRoaXMudG90YWxJdGVtcyA9IE51bWJlcih0aGlzLnRvdGFsSXRlbXMpICsgbmV3TnVtIC0gcHJldlZhbHVlO1xyXG4gICAgdGhpcy5fc2V0X2l0ZW1zKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDgvMDEvMjAyMDBcclxuLy8gQ3JlYXRlZCBCeTogU2FsYWFoIEFtaW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NPUEU6XHJcbi8vIC0tLS0tLVxyXG4vLyBVdGlsaXR5IGNsYXNzIHRvIHJlZm9ybWF0IG51bWJlci5cclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJGb3JtYXQge1xyXG4gIC8qKiAgVXRpbGl0eSBjbGFzcyB0byBjb252ZXJ0IG51bWJlcnMgdG8gZGlmZmVyZW50IGZvcm1hdHMuICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN0YXRpYyB0aG91c2FuZF9zZXBhcmF0ZWRfMmRwKG51bTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAvKiogQ292ZXJ0cyBhIG51bWJlciB0byBhIHRob3VzYW5kIHNlcGFyYXRlZCBzdHJpbmcgdG8gMi5kLnAgKi9cclxuICAgIHJldHVybiBOdW1iZXIobnVtKVxyXG4gICAgICAudG9GaXhlZCgyKVxyXG4gICAgICAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgc3RhdGljIHRob3VzYW5kX3NlcF90b19mbG9hdChudW06IHN0cmluZyB8IG51bGwpIHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIENvbnZlcnRzIGEgdGhvdXNhbmQgc2VwYXJhdGVkIGZsb2F0IHRvIGEgZmxvYXQuIElmIHRoZSBhcmd1bWVudCA9IG51bGxcclxuICAgICAgICogdGhlbiAwIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAgICAgICAqL1xyXG4gICAgaWYgKCFudW0pIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKG51bS5yZXBsYWNlKFwiLFwiLCBcIlwiKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERhdGUgQ3JlYXRlZDogMDcvMDEvMjAyMFxyXG4vLyBDcmVhdGVkIEJ5OiBTYWxhYWggQW1pblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTQ09QRTpcclxuLy8gLS0tLS0tXHJcbi8vIFV0aWxpdHkgcHJvdmlkaW5nIHZhbGlkYXRpb24gb3B0aW9ucy5cclxuLy9cclxuLy8gUFVSUE9TRTpcclxuLy8gLS0tLS0tLS1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uIHtcclxuICAvKipcclxuICAgKiBBIHV0aWxpdGllcyBjbGFzcyBjb250YWluaW5nIHN0YXRpYyBtZXRob2Qgd2hpY2ggcnVuIHNvbWUgZm9ybSBvZlxyXG4gICAqIHZhbGlkYXRpb24uXHJcbiAgICovXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIHN0YXRpYyBjaGVja19pZl9wb3NpdGl2ZV9pbnQoaXRlbTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgIC8qKiBDaGVja3MgaWYgYW4gaXRlbSBpcyBhIHBvc2l0aXZlIGludGVnZXIgKi9cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgaXRlbSAhPSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbSA+PSAwICYmIGl0ZW0gPT09IE1hdGgucm91bmQoaXRlbSkpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF0IHRoaXMgc3RhZ2UsIHRoZSBvbmx5IGJyYW5jaCBzdWdnZXN0cyB0aGF0IHRoZSBudW1iZXIgaXMgPCAwLlxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==