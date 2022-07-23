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

// IMPORTS
import { Validation } from "../../utilities/validation";
import { NumberFormat } from "../../utilities/number_format";
import { BasketState } from "../../state/basket-items";
import { QuantityComponent } from "../../components/quantity";

// =============================================================================
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
     * There elements being added will be the product's image, name, store
     * name , colour, quantity options, price and a button to remove an item
     * from the basket.
     *
     * The arrangement of the HTML is such that the image is on the left hand
     * side. Product information along with the quantity options are in the
     * middle. Price and the option to remove an item is on the right hand
     * side. As such, there will be three sub-containers where each element
     * will be added to that container.
     *
     * Each of those containers will then be added to a main container
     * representing a row of data which will then be added to the DOM.
     */
    const productPage = window.location.href.replace(/basket.*/, "products/");
    for (let i = 0; i < allProducts.length; i++) {
      const product = allProducts[i];
      const items = Number(JSON.parse(this.items)[product.productId]);

      // Main container and sub-container.
      const mainContainer = document.createElement("div");
      const imgContainer = document.createElement("div")
      const infoContainer = document.createElement('div')
      const priceContainer = document.createElement('div')

      // Div to contain all product elements, which will then be appended
      // into the parent element.
      mainContainer.className = "basket-summary__row";
      mainContainer.setAttribute("product-id", product.productId);

      imgContainer.className = "basket-summary__row__container basket-summary__row__container--img"
      infoContainer.className = "basket-summary__row__container"
      priceContainer.className = "basket-summary__row__container"

      imgContainer.setAttribute('contents', 'product-img')
      infoContainer.setAttribute('contents', 'product-info')
      priceContainer.setAttribute('contents', 'product-price')

      // Product Image Embedded in Link Element
      const imgATag = document.createElement("a");
      imgATag.className = "basket-summary__row__data";
      imgATag.href = productPage + product.productId;
      imgATag.setAttribute("field", "product-image");
      const imgElem = document.createElement("img");
      imgElem.src = product.image;
      imgElem.alt = "Image of " + product.productName;
      imgATag.appendChild(imgElem);

      // Product Name
      const nameElem = document.createElement("a");
      nameElem.className = "basket-summary__row__data text-link";
      nameElem.href = productPage + product.productId;
      nameElem.setAttribute("field", "product-name");
      nameElem.textContent = product.productName;

      // Product Store
      const storeElem = document.createElement("a");
      storeElem.className = "basket-summary__row__data text-link";
      storeElem.href = "/stores/" + product.storeId;
      storeElem.setAttribute("field", "product-store");
      storeElem.textContent = product.storeName;

      // Product Colour
      const colourElem = document.createElement("P");
      colourElem.className = "basket-summary__row__data";
      colourElem.setAttribute("field", "product-colour");
      colourElem.textContent = product.colourName;

      // Quantity
      // NOTE: The HTML format must follow the structure defined in the quantity
      // component.
      const quantityContainerElem = document.createElement("DIV");
      quantityContainerElem.className = "c-quantity basket-summary__row__function";
      quantityContainerElem.id = "product-" + product.productId;
      quantityContainerElem.setAttribute("field", "quantity");

      const quantityInput = document.createElement("INPUT") as HTMLInputElement;
      quantityInput.className = "c-quantity__input";
      quantityInput.min = "0";
      quantityInput.step = "1";
      quantityInput.max = product.inventory;
      quantityInput.value = items.toString();
      quantityInput.type = "number";
      quantityInput.addEventListener("focusout", event => {
        // If the value entered is a positive integer then the certain updates
        // will take place.
        event.stopPropagation();
        console.log(quantityInput.value);
        if (Validation.check_if_positive_int(Number(quantityInput.value))) {
          // If the value entered is greater than the max, then set it to the max.
          let value = Number(quantityInput.value);
          if (value > Number(quantityInput.max)) {
            quantityInput.value = quantityInput.max;
            value = Number(quantityInput.max);
          }

          // Update the local storage (user's basket)
          this.update_single_item(product.productId, value);

          // Update the price
          priceSpan.textContent = (value * product.price).toString();

          // Update the basket totals
          this.update_basket_totals();
        }
      });

      const minusBtn = document.createElement("button");
      minusBtn.className = "c-quantity__btn";
      minusBtn.setAttribute("control", "quantity-down");
      minusBtn.addEventListener("click", event => {
        event.stopPropagation();
        this.remove_an_item(product.productId, product.price, priceSpan);
        this.update_basket_totals();
      });

      const plusBtn = document.createElement("button");
      plusBtn.className = "c-quantity__btn";
      plusBtn.setAttribute("control", "quantity-up");
      plusBtn.addEventListener("click", event => {
        event.stopPropagation();
        this.add_an_item(product.productId, product.price, priceSpan);
        this.update_basket_totals();
      });
//
      const minusBtnSpan = document.createElement("SPAN");
      minusBtnSpan.className = "c-quantity__btn__text";
      minusBtnSpan.textContent = "-";
//
      const plusBtnSpan = document.createElement("SPAN");
      plusBtnSpan.className = "c-quantity__btn__text";
      plusBtnSpan.textContent = "+";
//
      minusBtn.appendChild(minusBtnSpan);
      plusBtn.appendChild(plusBtnSpan);
      quantityContainerElem.appendChild(minusBtn);
      quantityContainerElem.appendChild(quantityInput);
      quantityContainerElem.appendChild(plusBtn);
//
      // Price
      const priceElem = document.createElement("P");
      priceElem.className = "basket-summary__row__data";
      priceElem.setAttribute("field", "product-price-container");

      const poundI = document.createElement("span");
      poundI.textContent = "£";
      poundI.setAttribute("field", "product-price-currency");
      priceElem.appendChild(poundI);
//
      const priceSpan = document.createElement("span");
      priceSpan.setAttribute("field", "product-price-value");
      priceSpan.textContent = NumberFormat.thousand_separated_2dp(
        Number(product.price) * items
      );
      priceElem.appendChild(priceSpan);

      // Remove Item Button
      const removeItemSpan = document.createElement("SPAN");
      removeItemSpan.className = "basket__icon";
      removeItemSpan.setAttribute("field", "remove-item");
      removeItemSpan.addEventListener("click", event => {
        // On removal, update the DOM and the basket/local storage accordingly.
        event.stopPropagation();
        this.remove_whole_item(product.productId, mainContainer);
        this.update_basket_totals();
      });
      const removeItemI = document.createElement("I");
      removeItemI.className = "fa fa-times";
      removeItemSpan.appendChild(removeItemI);
      priceElem.appendChild(removeItemSpan);

      // Append elements to their respective containers, append that container
      // to the main container and then finally append the main container to the
      // DOM target element.
      imgContainer.appendChild(imgATag)
      infoContainer.appendChild(nameElem)
      infoContainer.appendChild(storeElem)
      infoContainer.appendChild(colourElem)
      infoContainer.appendChild(quantityContainerElem)
      priceContainer.appendChild(priceElem)
      mainContainer.appendChild(imgContainer)
      mainContainer.appendChild(infoContainer)
      mainContainer.appendChild(priceContainer)
      this.summaryItemsParent.appendChild(mainContainer)
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
      .querySelectorAll('[field="product-price-value"]');

    for (let priceIdx = 0; priceIdx < priceElems.length; priceIdx++) {
      totalPrice += NumberFormat.thousand_sep_to_float(
        priceElems[priceIdx].textContent
      );
    }

    // Update the DOM will the new total figures.
    const subTotal = totalPrice / 1.2;
    const vat = totalPrice - subTotal;

    subtotalElem.textContent = subTotal.toFixed(2);
    vatElem.textContent = vat.toFixed(2);
    totalElem.textContent = NumberFormat.thousand_separated_2dp(totalPrice);
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
    priceElem.textContent = NumberFormat.thousand_separated_2dp(
      NumberFormat.thousand_sep_to_float(priceElem.textContent) - Number(price)
    );
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
    priceElem.textContent = NumberFormat.thousand_separated_2dp(
      NumberFormat.thousand_sep_to_float(priceElem.textContent) + Number(price)
    );
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