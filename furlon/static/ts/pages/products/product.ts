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
    const productInfo = this.fetch_product_info() as JSON|null;

    if (productInfo) {
        if (productInfo.json) {

        }
    }


  }

  // ---------------------------------------------------------------------------
  fetch_product_info() {
    const APIPath = window.location.href.replace(
      "/products/",
      "/products/info-"
    );
    const request = new XMLHttpRequest();
    request.open("GET", APIPath);
    request.send();
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        return JSON.parse(request.responseText) as JSON;
      } else {
          throw 'ExtendProductPage failed to call API'

      }
    };
    return null

  }
}
