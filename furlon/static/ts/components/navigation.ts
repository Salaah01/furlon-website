// ============================================================================
// Date Created: 01/11/2019
// Creatd By: Salaah Amin
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

// Close sub-menus when user has clicked out of the navigation.
const navSubMenus = document.querySelectorAll(".nav__option__dropdown-opts");

window.addEventListener("mouseup", event => {
  let target = event.target as HTMLElement;
  event.stopPropagation();
  event.stopImmediatePropagation();
//   console.log(target.classList.contains('nav__option__btn'))
  for (const navSubMenu of navSubMenus as any) {
    
    if (!target.classList.contains('nav__option__btn') && (target.parentNode) != navSubMenu) {
      navSubMenu.classList.add("nav__option__dropdown-opts--collapse");
      navSubMenu.classList.remove("nav__option__dropdown-opts--expanded");

    } 
    console.log(target.classList.contains('nav__option__btn') && navSubMenu.classList.contains('nav__option__dropdown-opts--expanded'))
    console.log(target.classList.contains('nav__option__btn') && navSubMenu.classList.contains('nav__option__dropdown-opts--collapse'))
    if (target.classList.contains('nav__option__btn') && navSubMenu.classList.contains('nav__option__dropdown-opts--expanded')) {
        console.log(1)
        navSubMenu.classList.add("nav__option__dropdown-opts--collapse");
        navSubMenu.classList.remove("nav__option__dropdown-opts--expanded");
    } else if (target.classList.contains('nav__option__btn') && navSubMenu.classList.contains('nav__option__dropdown-opts--collapse')) {
        console.log(2)
        navSubMenu.classList.remove("nav__option__dropdown-opts--collapse");
        navSubMenu.classList.add("nav__option__dropdown-opts--expanded");
    }
  }
});

function subMenuCtrl(event: MouseEvent) {
  // Function will handle click events on the navigation for expanding
  // and collapasing the sub-menus.
    event.stopPropagation()
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

const menuBtns = document.getElementsByClassName("nav__option__btn");
for (const menuBtn of menuBtns as any) {
  menuBtn.addEventListener("click", subMenuCtrl);
}
