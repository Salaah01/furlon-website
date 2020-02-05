// ============================================================================
// Date Created: 28/11/2019
// Created By: Salaah Amin
// ============================================================================
// Contains imports of all the main classes.
// Behaves as the main hub for the js bundle.
// ============================================================================

// Component Imports
import { Navigation } from "./components/navigation";
import { DropdownMenu } from "./components/dropdown-menu";
import { QuantityComponent } from "./components/quantity";
import { SearchFilters } from "./components/search_filters";
import { PasswordCheck } from "./components/password-validation";
import { Pagination } from "./components/pagination";
import { CarouselImgs } from "./components/carousel-imgs";
import { Ratings } from "./components/ratings";
import { NewReview } from "./components/new_review";

// State Imports
import { BasketState } from "./state/basket-items";

// Pages Imports
import { ExtendProductPage } from "./pages/products/product";
import { ProductUserReview } from "./pages/products/products_user_review";
import { BasketPage } from "./pages/basket/basket";

// Build the navigation
new Navigation();

// Update the state of the basket
new BasketState();

// Build the dropdown menu
new DropdownMenu();

// Build the search filters
new SearchFilters();

// Build the pagination
new Pagination();

// -----------------------------------------------------------------------------
// PAGE SPECIFIC JAVASCRIPT
const CURRENT_URL = window.location.href;

if (CURRENT_URL.search(/\/products\/[0-9]{1,}/) != -1) {
  // Product Page
  new ExtendProductPage();
  new QuantityComponent();
  new CarouselImgs();
  Ratings.getInstance();
  new ProductUserReview();
} else if (CURRENT_URL.includes("/basket/")) {
  // Basket Page
  new BasketPage();
} else if (
  // Account registration and change password pages
  CURRENT_URL.includes("user/register") ||
  CURRENT_URL.includes("user/change-password")
) {
  new PasswordCheck();
} else if (CURRENT_URL.includes("/order-history/")) {
  new NewReview();
  Ratings.getInstance();
}
