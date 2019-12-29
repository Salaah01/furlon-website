// =============================================================================
// Date Created: 27/11/2019
// Created By: Salaah Amin
// =============================================================================
// SCOPE
// Functionality on the product page.
//
// PURPOSE
// Will build onto the HTML adding onto the colours filter options as well as
// the product info section.
// There elements will be added based on what other related products there are
// to the current page. This information will be retrieved from an API.
// =============================================================================

export class ExtendProductPage {
  /**
   * Extends onto the product using the product info API.
   *
   * This will be used to retrieve information on what related products there
   * are looking at similar products, colours variations of the same product
   * and products which go along with the current product to make a set.
   *
   * Using this, the product page will be extended with more HTML elements
   * being added linking to the related product.
   */

  // ---------------------------------------------------------------------------
  constructor() {
    /**
     * Retrieves data from the API and calls methods to build onto the DOM.
     */

    const APIPath = window.location.href.replace(
      "/products/",
      "/products/info-api/"
    );
    const request = new XMLHttpRequest();
    request.open("GET", APIPath);
    request.send();

    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);

        if (data.colours) {
          this.build_colours(data.colours);
        }

        if (data.sets) {
          this.build_product_sets(data.sets);
        }

        if (data.similar) {
          this.build_similar_products(data.similar);
        }
      }
    };
  }

  // ---------------------------------------------------------------------------
  private build_colours(attrs: any[]) {
    /**
     * Builds onto the dropdown colours dropdown menu and adds more colours
     * in accordance to how many how many colours were returned from the API.
     *
     * The method will append elements onto the element
     * #product-colour-variations
     *
     * For each colour, the following HTML will be appended:
     *
     * <a
     *   href="{link to product}"
     *   class="dropdown-menu__options__label"
     *   for="colour-{colour name}"
     * />
     *   <label for="colour-{colour name}">
     *     <span
     *       class="sm-colour-box"
     *        style="background-color: {colour hex value};">
     *     </span>
     *     {colour-name}
     *   </label>
     * </a>
     * <input
     *   type="radio"
     *   class="dropdown-menu__options__radio-btn"
     *   name="prod-f-colour"
     *   id="colour-{colour name}"
     *   value="colour-{colour name}"
     * />
     */
    const targetElem = document.getElementById("product-colour-variations");

    if (targetElem) {
      for (let a = 0; a < attrs.length; a++) {
        // Using data retrieved from the API to build constants
        const href = "/products/" + attrs[a].product_id;
        const colour = attrs[a].col_name;
        const hex_val = attrs[a].col_hex_val;

        // Creating the "a" tag
        const linkElem = document.createElement("A");
        linkElem.setAttribute("href", href);
        linkElem.setAttribute("class", "dropdown-menu__options__label");

        // Creating the "label" tag
        const labelElem = document.createElement("LABEL");
        labelElem.setAttribute("for", "colour-" + colour);

        // Creating the "span" tag
        const spanElem = document.createElement("SPAN");
        spanElem.setAttribute("class", "sm-colour-box");
        spanElem.setAttribute("style", "background-color: " + hex_val + ";");

        // Creating the "input" tag
        const inputElem = document.createElement("INPUT");
        inputElem.setAttribute("type", "radio");
        inputElem.setAttribute("class", "dropdown-menu__options__radio-btn");
        inputElem.setAttribute("name", "prod-f-colour");
        inputElem.setAttribute("id", "colour-" + colour);
        inputElem.setAttribute("value", "colour-" + colour);

        // Appending each tag to their respective parent elements.
        labelElem.appendChild(spanElem);
        labelElem.append(colour);
        linkElem.appendChild(labelElem);

        // Appending the elements to the target element in the DOM.
        targetElem.appendChild(linkElem);
        targetElem.appendChild(inputElem);
      }
    } else {
      console.warn(
        "#product-colour-variations does not exist, alternative colours cannot be added."
      );
    }
  }

  // ---------------------------------------------------------------------------
  private build_product_sets(attrs: any[]) {
    /**
     * Builds onto the "product sets" sections.
     * Will append each product set onto #product-sets.
     * The method will produce the following HTML for each set:
     *
     * <a class="product-set related-product" href="{product url}"
     *   <img
     *     class="product-set__img related-product__img"
     *     alt="Image of a product of which this product is a set. {product name}"
     *   >
     *   <span class="product-set__name related-product__name">{product name}</span>
     *   <span class="product-set__price related-product__price">{product price}</span>
     * </a>
     */
    const targetElem = document.getElementById("product-sets");

    if (targetElem) {
      for (let a = 0; a < attrs.length; a++) {
        // Using data retrieved from the API to build constants
        const href = "/products/" + attrs[a].product_id;
        const name = attrs[a].name;
        const img = attrs[a].showcase_image;
        const price = attrs[a].price;

        // "A" tag which will contain the image and the text.
        const linkElem = document.createElement("A");
        linkElem.setAttribute("class", "product-set related-product");
        linkElem.setAttribute("href", href);

        // "IMG" tag for product image.
        const imgElem = document.createElement("IMG");
        imgElem.setAttribute("class", "product-set__img related-product__img");
        imgElem.setAttribute("src", img);
        imgElem.setAttribute(
          "alt",
          "Image of a product of which this product is a set. (" + name + "}"
        );

        // "SPAN" tags containing the product name and price
        const textSpanElem = document.createElement("SPAN");
        textSpanElem.setAttribute(
          "class",
          "product-set__name related-product__name"
        );
        textSpanElem.textContent = name;

        const textPriceElem = document.createElement("SPAN");
        textPriceElem.setAttribute(
          "class",
          "product-set__price related-product__price"
        )
        textPriceElem.textContent = '£' +price;

        // Set the image and text elements to become children of the linkElem
        // and append them onto the targetElem in the DOM.
        linkElem.appendChild(imgElem);
        linkElem.appendChild(textSpanElem);
        linkElem.appendChild(textPriceElem);
        targetElem.appendChild(linkElem);
      }
    } else {
      console.warn(
        "#product-sets does not exist, product-sets cannot be added."
      );
    }
  }

  // ---------------------------------------------------------------------------
  private build_similar_products(attrs: any[]) {
    /**
     * Builds onto the "similar products" sections.
     * Will append each product set onto #similar-products.
     * The method will produce the following HTML for each set:
     *
     * <a class="product-set related-product" href="{product url}"
     *   <img
     *     class="product-set__img related-product__img"
     *     alt="Image of a product of which this product is a set. {product name}"
     *   >
     *   <span class="product-set__name related-product__name">{product name}</span>
     *   <span class="product-set__price related-product__price">{product price}</span>
     * </a>
     */
    const targetElem = document.getElementById("similar-products");

    if (targetElem) {
      for (let a = 0; a < attrs.length; a++) {
        // Using data retrieved from the API to build constants
        const href = "/products/" + attrs[a].product_id;
        const name = attrs[a].name;
        const img = attrs[a].showcase_image;
        const price = attrs[a].price;

        // "A" tag which will contain the image and the text.
        const linkElem = document.createElement("A");
        linkElem.setAttribute("class", "similar-product related-product");
        linkElem.setAttribute("href", href);

        // "IMG" tag for product image.
        const imgElem = document.createElement("IMG");
        imgElem.setAttribute("class", "similar-product__img related-product__img");
        imgElem.setAttribute("src", img);
        imgElem.setAttribute(
          "alt",
          "Image of a product of which this product is a set. (" + name + "}"
        );

        // "SPAN" tags containing the product name and price
        const textSpanElem = document.createElement("SPAN");
        textSpanElem.setAttribute(
          "class",
          "similar-product__name related-product__name"
        );
        textSpanElem.textContent = name;

        const textPriceElem = document.createElement("SPAN");
        textPriceElem.setAttribute(
          "class",
          "similar-product__price related-product__price"
        )
        textPriceElem.textContent = '£' + price;

        // Set the image and text elements to become children of the linkElem
        // and append them onto the targetElem in the DOM.
        linkElem.appendChild(imgElem);
        linkElem.appendChild(textSpanElem);
        linkElem.appendChild(textPriceElem);
        targetElem.appendChild(linkElem);
      }
    } else {
      console.warn(
        "#similar-products does not exist, similar-products cannot be added."
      );
    }
  }
}
