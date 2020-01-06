// =============================================================================
// Date Created: 05/01/2020
// Created By: Salaah Amin
// =============================================================================
// SCOPE
// The basket page.
//
// FUNCTIONALITY
// - Calls the basket-info-API where using the local storage it is able to send
//   a GET request to teh API site using the primary keys of the items in the
//   basket.
// - Builds part of the DOM which will display information regarding what is in
//   basket.
// =============================================================================

// =============================================================================
import { BasketState } from "./../../state/basket-items";

export class BasketPage extends BasketState {
  /**
   * Will build elements onto basket page using an API to retrieve
   * information on products currently in the user's basket (information
   * stored in local storage)
   */

  // The main location as to where each product will be inserted from the
  // user's basket.
  summaryItemsParent = document.getElementById(
    "basket-summary-data"
  ) as HTMLDivElement;

  basketItems: string[] = [];

  // ---------------------------------------------------------------------------
  constructor() {
    /**
     * Handles the process in which the basket page DOM is build.
     */
    super();
    if (this.items != null && this.items != "{}") {
      for (const key in JSON.parse(this.items)) {
        this.basketItems.push(key);
      }

      const basketItemsStr = this.basketItems.join(",");

      // Call API
      const APIPath = window.location.href.replace(
        /basket.*/,
        "basket-info-API/?pks=" + basketItemsStr
      );
      const request = new XMLHttpRequest();
      request.open("GET", APIPath);
      request.send();

      console.log(APIPath);
      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
          const APIResponse = JSON.parse(request.responseText);
          if (APIResponse.productsInfo) {
            this.build_basket_summary(APIResponse.productsInfo);
          }
        }
      };
    }
  }

  // ---------------------------------------------------------------------------
  private build_basket_summary(allProducts: any[]) {
    /**
     * Builds each element into the DOM inside the target parent container.
     */
    const productPage = window.location.href.replace(/basket.*/, "products/");
    for (let i = 0; i < allProducts.length; i++) {
      const product = allProducts[i];
      const container = document.createElement("DIV");

      // Div to contain all product elements, which will then be appended
      // into the parent element.
      container.setAttribute("class", "table__row");
      container.setAttribute("product-id", product.productID);

      // Product Image
      const imgATag = document.createElement("A");
      imgATag.setAttribute(
        "class",
        "table__field table__field--img"
      );
      imgATag.setAttribute("href", productPage + product.productId);
      imgATag.setAttribute("field", "product-image");
      const imgElem = document.createElement("IMG");
      imgElem.setAttribute("src", product.image);
      imgElem.setAttribute("alt", "Image of " + product.productName);
      imgATag.appendChild(imgElem);

      // Product Name
      const nameElem = document.createElement("A");
      nameElem.setAttribute("class", "table__field");
      nameElem.setAttribute("field", "product-name");
      nameElem.setAttribute("href", productPage + product.productId);
      nameElem.textContent = product.productName;

      // Product Store
      const storeElem = document.createElement("A");
      storeElem.setAttribute("class", "table__field");
      storeElem.setAttribute("href", "#");
      storeElem.setAttribute("field", "product-store");
      storeElem.textContent = product.storeName;

      // Product Colour
      const colourElem = document.createElement("P");
      colourElem.setAttribute("class", "table__field");
      colourElem.setAttribute("field", "product-colour");
      colourElem.textContent = product.colourName;

      // Quantity

      // Price
      const priceElem = document.createElement("P");
      priceElem.setAttribute("class", "table__field");
      priceElem.setAttribute("field", "product-price");
      priceElem.textContent = product.price;

      container.appendChild(imgATag);
      container.appendChild(nameElem);
      container.appendChild(storeElem);
      container.appendChild(colourElem);
      container.appendChild(priceElem);
      this.summaryItemsParent.appendChild(container);
    }
  }
}
