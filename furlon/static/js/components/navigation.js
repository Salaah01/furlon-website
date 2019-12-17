"use strict";
// ============================================================================
// Date Created: 01/11/2019
// Created By: Salaah Amin
// ============================================================================
// SCOPE
// Navigation bar.
//
// PURPOSE
// 1. Controls the state of the navigation sub-menus and controls how and when
//    it expands and closes.
// 2. Controls the state of the basket and so so the number of items in the
//    basket.
// ============================================================================
var __values = (this && this.__values) || function(o) {
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
var e_1, _a;
// Close sub-menus when user has clicked out of the navigation.
var navSubMenus = document.querySelectorAll(".nav__option__dropdown-opts");
function subMenuCtrl(event) {
    // Function will handle click events on the navigation for expanding
    // and collapasing the sub-menus.
    event.stopPropagation();
    var target = event.target;
    // Handle click events
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
}
var menuBtns = document.getElementsByClassName("nav__option__btn");
try {
    for (var _b = __values(menuBtns), _c = _b.next(); !_c.done; _c = _b.next()) {
        var menuBtn = _c.value;
        menuBtn.addEventListener("click", subMenuCtrl);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=navigation.js.map