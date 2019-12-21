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

// ============================================================================

class Navigation {
  /**
   * Sets up the functions for the navigation.
   * These include:
   *  - Closing menus when clicking outside.
   *  - Opening/Closing menus on click
   */
  menuBtns = document.getElementsByClassName("nav__option__btn");
  navSubMenus = document.querySelectorAll(".nav__option__dropdown-opts");

  // ---------------------------------------------------------------------------
  constructor() {
    /**
     * No arguments - class uses objects found on the DOM.
     */

    // Adds function to close all menus when clicking outside of element
    this.close_menu();

    // Build the functions for all menu elements.
    for (const menuBtn of this.menuBtns as any) {
      menuBtn.addEventListener("click", this.subMenuCtrl);
    }
  }

  // ---------------------------------------------------------------------------
  close_menu() {
    /**
     * closes all menus when clicked outside pr another nav menu.
     * Also will close all filter menus.
     */

    // Close all nav-menus on click outside
    document.addEventListener("click", () => {
      for (let idx = 0; idx < this.navSubMenus.length; idx++) {
        this.navSubMenus[idx].classList.replace(
          "nav__option__dropdown-opts--expanded",
          "nav__option__dropdown-opts--collapse"
        );
      }
    });

    const optionLists = document.getElementsByClassName(
      "dropdown-menu__options"
    );
    for (let i = 0; i < this.menuBtns.length; i++) {
      const menuBtn = this.menuBtns[i];

      menuBtn.addEventListener("click", () => {
        // Close all dropdown-menus
        for (const optionList of optionLists as any) {
          optionList.classList.add("dropdown-menu__options--hide");
        }

        // Close other navigation menus
        // Each button and their child elements will contain the attribute
        // "filter-for".
        // Likewise, each dropdown menu contain the same attribute
        // This checks for the button pressed, if its "filter-for" attribute
        // matches that of its dropdown options. if not, then close.
        for (let j = 0; j < this.menuBtns.length; j++) {
          const targetElem = this.menuBtns[j];

          if (
            targetElem.getAttribute("filter-for") !=
            menuBtn.getAttribute("filter-for")
          ) {
            if (
              targetElem.nextElementSibling?.classList.contains(
                "nav__option__dropdown-opts"
              )
            ) {
              targetElem.nextElementSibling.classList.replace(
                "nav__option__dropdown-opts--expanded",
                "nav__option__dropdown-opts--collapse"
              );
            }
          }
        }
      });
    }
  }

  // ---------------------------------------------------------------------------
  subMenuCtrl(event: MouseEvent) {
    /**
     * Function will handle click events on the navigation for expanding
     * and collapsing the sub-menus.
     */

    event.stopPropagation();
    let target = event.target as HTMLElement;

    // Handle click events
    target: HTMLElement;
    const targetClasses = target.classList;
    let subMenu: HTMLDivElement;

    if (targetClasses.contains("nav-sub-products")) {
      subMenu = document.querySelector(
        ".nav__option__dropdown-opts.nav-sub-products"
      ) as HTMLDivElement;
    } else if (targetClasses.contains("nav-sub-rooms")) {
      subMenu = document.querySelector(
        ".nav__option__dropdown-opts.nav-sub-rooms"
      ) as HTMLDivElement;
    } else {
      throw "Navigation element does not exist.";
    }

    let expanded = subMenu.classList.contains(
      "nav__option__dropdown-opts--expanded"
    );

    if (expanded) {
      subMenu.classList.add("nav__option__dropdown-opts--collapse");
      subMenu.classList.remove("nav__option__dropdown-opts--expanded");
    } else {
      subMenu.classList.remove("nav__option__dropdown-opts--collapse");
      subMenu.classList.add("nav__option__dropdown-opts--expanded");
    }
  }
}

new Navigation();
