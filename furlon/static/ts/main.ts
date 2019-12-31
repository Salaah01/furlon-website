// ============================================================================
// Date Created: 28/11/2019
// Created By: Salaah Amin
// ============================================================================
// Contains imports of all the main classes.
// Behaves as the main hub for the js bundle.
// ============================================================================

import { Navigation } from "./components/navigation";
import { DropdownMenu } from "./components/dropdown-menu";
import { QuantityComponent } from "./components/quantity";
import { SearchFilters } from "./components/search_filters";
import { ExtendProductPage } from "./pages/products/product";
import { CarouselImgs } from "./components/carousel-imgs";
import { BasketState } from "./state/basket-items";

// Build the navigation
new Navigation();

// Update the state of the basket
new BasketState();

// Build the dropdown menu
new DropdownMenu();

// Build the search filters
new SearchFilters();

if (window.location.href.includes("/products/")) {
  new ExtendProductPage();
  new QuantityComponent();
  new CarouselImgs();
}
