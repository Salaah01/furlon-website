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
// - Sets key binders on the quantity option and "x" option so that it updates
//   the basket.
// - Updates totals section on load if there is something in the basket.
// - Set key binders so that whenever there is a change to the basket items,
//   the totals will also update.
// =============================================================================

// =============================================================================
import { BasketState } from "./../../state/basket-items";
import { QuantityComponent } from "./../../components/quantity";

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

      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
          const APIResponse = JSON.parse(request.responseText);
          if (APIResponse.productsInfo) {
            this.build_basket_summary(APIResponse.productsInfo);
            this.update_basket_totals();
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
      const items = Number(JSON.parse(this.items)[product.productId]);

      // Div to contain all product elements, which will then be appended
      // into the parent element.
      container.setAttribute("class", "table__row");
      container.setAttribute("product-id", product.productId);

      // Product Image
      const imgATag = document.createElement("A");
      imgATag.setAttribute("class", "table__field table__field");
      imgATag.setAttribute("href", productPage + product.productId);
      imgATag.setAttribute("field", "product-image");
      const imgElem = document.createElement("IMG");
      imgElem.setAttribute("src", product.image);
      imgElem.setAttribute("alt", "Image of " + product.productName);
      imgElem.setAttribute("class", "table__field table__field--img");
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
      // NOTE: The HTML format must follow the structure defined in the quantity
      // component.
      const quantityContainerElem = document.createElement("DIV");
      quantityContainerElem.setAttribute("class", "c-quantity table__field");
      quantityContainerElem.setAttribute("field", "quantity");
      quantityContainerElem.setAttribute("id", "product-" + product.productId);

      const quantityInput = document.createElement("INPUT");
      quantityInput.setAttribute("class", "c-quantity__input");
      quantityInput.setAttribute("min", "0");
      quantityInput.setAttribute("step", "1");
      quantityInput.setAttribute("max", product.inventory);
      quantityInput.setAttribute("value", items.toString());
      quantityInput.setAttribute("type", "number");

      const minusBtn = document.createElement("BUTTON");
      minusBtn.setAttribute("class", "c-quantity__btn");
      minusBtn.setAttribute("control", "quantity-down");
      minusBtn.addEventListener("click", event => {
        event.stopPropagation();
        this.remove_an_item(product.productId, product.price, priceSpan);
        this.update_basket_totals();
      });

      const plusBtn = document.createElement("BUTTON");
      plusBtn.setAttribute("class", "c-quantity__btn");
      plusBtn.setAttribute("control", "quantity-up");
      plusBtn.addEventListener("click", event => {
        event.stopPropagation();
        this.add_an_item(product.productId, product.price, priceSpan);
        this.update_basket_totals();
      });

      const minusBtnSpan = document.createElement("SPAN");
      minusBtnSpan.setAttribute("class", "c-quantity__btn__text");
      minusBtnSpan.textContent = "-";

      const plusBtnSpan = document.createElement("SPAN");
      plusBtnSpan.setAttribute("class", "c-quantity__btn__text");
      plusBtnSpan.textContent = "+";

      minusBtn.appendChild(minusBtnSpan);
      plusBtn.appendChild(plusBtnSpan);
      quantityContainerElem.appendChild(minusBtn);
      quantityContainerElem.appendChild(quantityInput);
      quantityContainerElem.appendChild(plusBtn);

      // Price
      const priceElem = document.createElement("P");
      priceElem.setAttribute("class", "table__field");
      priceElem.setAttribute("field", "product-price-container");

      const poundI = document.createElement("SPAN");
      poundI.textContent = "£";
      poundI.setAttribute("field", "product-price-currency");
      priceElem.appendChild(poundI);

      const priceSpan = document.createElement("SPAN");
      priceSpan.setAttribute("field", "product-price-value");
      priceSpan.textContent = (Number(product.price) * items).toString();
      priceElem.appendChild(priceSpan);

      // Remove Item Button
      const removeItemSpan = document.createElement("SPAN");
      removeItemSpan.setAttribute("class", "table__icon");
      removeItemSpan.setAttribute("field", "remove-item");
      removeItemSpan.addEventListener("click", event => {
        event.stopPropagation();
        this.remove_whole_item(product.productId, container);
        this.update_basket_totals();
      });
      const removeItemI = document.createElement("I");
      removeItemI.setAttribute("class", "fa fa-times");
      removeItemSpan.appendChild(removeItemI);
      priceElem.appendChild(removeItemSpan);

      // Append elements to target element.
      container.appendChild(imgATag);
      container.appendChild(nameElem);
      container.appendChild(storeElem);
      container.appendChild(colourElem);
      container.appendChild(quantityContainerElem);
      container.appendChild(priceElem);
      this.summaryItemsParent.appendChild(container);
    }
    // Apply the JavaScript to each quantity component.
    new QuantityComponent();
  }

  // ---------------------------------------------------------------------------
  private update_basket_totals() {
    /**
     * Updates the totals section in the basket page.
     * The HTML default behavior is to set the loads the elements and set the
     * values to £0.00 for each element.
     * The method will update the totals.
     */
    // Basket Elements in the DOM
    const subtotalElem = document.getElementById("basket-subtotal")!
      .children[1] as HTMLSpanElement;
    const vatElem = document.getElementById("basket-vat")!
      .children[1] as HTMLSpanElement;
    const totalElem = document.getElementById("basket-total")!
      .children[1] as HTMLSpanElement;

    // Initial Value
    let totalPrice = 0;

    // Retrieve all elements where there is a price and iteratively update
    // the total price.
    const priceElems = document
      .getElementById("basket-summary-data")!
      .querySelectorAll('.table__field>[field="product-price-value"]');

    for (let priceIdx = 0; priceIdx < priceElems.length; priceIdx++) {
      totalPrice += Number(priceElems[priceIdx].textContent);
    }

    // Update the DOM will the new total figures.
    const subTotal = totalPrice / 1.2;
    const vat = totalPrice - subTotal;

    subtotalElem.textContent = subTotal.toFixed(2);
    vatElem.textContent = vat.toFixed(2);
    totalElem.textContent = totalPrice.toString();
  }

  // ---------------------------------------------------------------------------
  private remove_an_item(
    /**
     * Removes an item from the basket. During the process, it will update
     * the local storage and update the DOM.
     */
    productId: string,
    price: string,
    priceElem: HTMLElement
  ) {
    /**
     * Removes an item from the basket.
     */
    this.remove_item(Number(productId), 1);
    priceElem.textContent = (
      Number(priceElem.textContent) - Number(price)
    ).toString();
  }

  // ---------------------------------------------------------------------------
  private add_an_item(
    /**
     * Removes an item from the basket. During the process, it will update
     * the local storage and update the DOM.
     */
    productId: string,
    price: string,
    priceElem: HTMLElement
  ) {
    /**
     * Removes an item from the basket.
     */
    this.add_item(Number(productId), 1);
    priceElem.textContent = (
      Number(priceElem.textContent) + Number(price)
    ).toString();
  }

  // ---------------------------------------------------------------------------
  private remove_whole_item(productId: string, parentContainer: HTMLElement) {
    /**
     * Removes an entire item from the basket. In the process, it will update
     * local storage and the DOM.
     */
    this.remove_entire_item(productId);
    parentContainer.remove();
  }
}
