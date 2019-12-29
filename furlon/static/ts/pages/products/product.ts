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
     * Constructor does not require any arguments and will instead use
     * elements from the DOM.
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
          this.build_colours(data.colours)
        }

      }
    };





  }

  // ---------------------------------------------------------------------------
  private build_colours(attrs: any[]) {
    const targetElem = document.getElementById("product-colour-variations");

    if (targetElem) {
      for (let a = 0; a < attrs.length; a++) {
        const href = "/products/" + attrs[a].product_id;
        const colour = attrs[a].col_name;
        const hex_val = attrs[a].col_hex_val;

        const linkElem = document.createElement("A");
        linkElem.setAttribute("href", href);

        const labelElem = document.createElement("LABEL");
        labelElem.setAttribute("for", "colour-" + colour);
        labelElem.setAttribute("class", "dropdown-menu__options__label");



        const spanElem = document.createElement("SPAN");
        spanElem.setAttribute("class", "sm-colour-box");
        spanElem.setAttribute("style", "background-color: " + hex_val + ";");

        const inputElem = document.createElement("INPUT");
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
        console.log(targetElem)
      }
    } else {
      console.warn(
        "#product-colour-variations does not exist, alternative colours cannot be added"
      );
    }
  }
}