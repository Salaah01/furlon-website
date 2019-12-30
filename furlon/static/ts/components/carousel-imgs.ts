// =============================================================================
// Date Created: 29/12/2019
// Created By: Salaah Amin
// ============================================================================
// SCOPE:
// ------
// Carousel styled image slide shows.
//
// PURPOSE:
// --------
// On click of a image thumbnails or the current image, the current image should
// change accordingly.
// Animations are handled through the CSS, the JS sets up the event listeners to
// change the attributes of the display images accordingly so as to display the
// selected image.
// =============================================================================

// =============================================================================
export class CarouselImgs {
  /**
   * Builds event listeners on the carousel image images such that when
   * a thumbnail or the main picture is clicked on, the image will change.
   * The animation and positioning is controlled via the CSS, the class will
   * add and remove attributes from the elements, so that the animations can
   * be triggered.
   */
  containers = document.getElementsByClassName("carousel-container");

  // -------------------------------------------------------------------------
  constructor() {
    /**
     * Locates the elements where an event listeners need to be added and
     * calls methods to add event listeners depending on what the element
     * is.
     */
    for (let c = 0; c < this.containers.length; c++) {
      // DOM elements for event listeners to be added.
      const displayContainer = this.containers[c].getElementsByClassName(
        "carousel-container__display-section"
      )[c];
      const displayImages = displayContainer.getElementsByClassName(
        "carousel-container__display-section__img"
      );

      const imgThumbsContainer = this.containers[c].getElementsByClassName(
        "carousel-container__display-controls"
      )[0];
      const imgThumbs = imgThumbsContainer.getElementsByClassName(
        "carousel-container__display-controls-control"
      );

      //  Methods to add event listeners on each DOM element.
      this.on_clicking_thumbs(displayImages, imgThumbs);
      this.on_clicking_display_img(displayImages);
    }
  }

  // -------------------------------------------------------------------------
  private on_clicking_thumbs(
    displayImages: HTMLCollection,
    imgThumbs: HTMLCollection
  ) {
    /**
     * Each image thumbnail element has a "for" attribute which indicates
     * which element on the display section it represents. The display image
     * element has an "img" attribute with the same value.
     *
     * On clicking on a image thumbnail, the display attribute's position
     * attribute will become "show" where the same attribute value for all
     * other images will become "hide".
     *
     * NOTE: the initial image will have position="init" initially so as to
     * avoid any animations on start. If this image thumbnail is clicked, do
     * nothing.
     */
    for (let thumb = 0; thumb < imgThumbs.length; thumb++) {
      imgThumbs[thumb].addEventListener("click", () => {
        const controlsFor = imgThumbs[thumb].getAttribute("for");

        for (let im = 0; im < displayImages.length; im++) {
          if (displayImages[im].getAttribute("img") === controlsFor) {
            if (displayImages[im].getAttribute("position") != "init") {
              displayImages[im].setAttribute("position", "show");
            }
          } else {
            displayImages[im].setAttribute("position", "hide");
          }
        }
      });
    }
  }

  // -------------------------------------------------------------------------
  private on_clicking_display_img(
    /**
     * On click of the current display image, hide the image and show the
     * next.
     * Animation is handled by the css. For animation to work, on click,
     * "hide" is set to the attribute position on the current image, and on
     * the next image, the "show" is set to the position attribute.
     */
    displayImages: HTMLCollection
  ) {
    for (let im = 0; im < displayImages.length; im++) {
      displayImages[im].addEventListener("click", () => {
        displayImages[im].setAttribute("position", "hide");

        if (im === displayImages.length - 2) {
          displayImages[0].setAttribute("position", "show");
        } else {
          displayImages[im + 1].setAttribute("position", "show");
        }
      });
    }
  }
}
