// =============================================================================
// Date Created: 04/02/2020
// Created By: Salaah Amin
// ============================================================================
// SCOPE:
// ------
// New review pop up html block (_new-review.html partial)
//
// PURPOSE:
// --------
// Functionality on the new review pop up. The pop up is a form containing
// the ratings component along with its hidden box, other input elements, a
// hidden box to store an id and cancel/submit buttons.
//
// DESIGN:
// -------
// TRIGGER:
// This module will target all elements with the attribute "newReviewProduct"
// add keybinding such that when any of these elements are clicked, the "hide"
// class will be removed from the pop up element and a hidden input's value
// populated with the ID.
//
// FORM VALIDATION:
// Will be handled by the backend.
// #TODO: Build front end validation to avoid pointless POST request.
// =============================================================================

// =============================================================================
export class NewReview {
  /**
   * Builds the functionality to submit new reviews.
   * The class will search for all elements with an attribute for
   * "newReviewProduct" and add keybinding such that when they are clicked the
   * pop-up box will appear where they can enter the review.
   * Within the pop-up box, hidden input fields will be populated with the
   * value from the "newReviewProduct" and "newReviewStore" attribute which
   * include the product and store ID respectively.
   */

  reviewBtns = document.querySelectorAll("[newReviewProduct]");
  newReviewCont = document.getElementById("nev-review-pop-up") as HTMLElement;
  productIdInput = this.newReviewCont.querySelector(
    "#new-review-product-id"
  ) as HTMLInputElement;
  storeIdInput = this.newReviewCont.querySelector(
      "#new-review-store-id"
  ) as HTMLInputElement

  // ---------------------------------------------------------------------------
  constructor() {
    /**
     * Constructor - controlling the order in which each method is called.
     */
    for (let rb = 0; rb < this.reviewBtns.length; rb++) {
      this.setup_btn_keybinder(this.reviewBtns[rb]);
    }

    this.close_pop_up();
  }

  // ---------------------------------------------------------------------------
  private setup_btn_keybinder(reviewBtn: Element) {
    /**
     * Sets keybinding on a button such that when the button is clicked, the
     * pop up box will appear by removing "hide from class list."
     * The pop up item also has two input box dedicated to the product and
     * store Id, these will be populated by reading the attributes of the
     * element that was clicked.
     */
    reviewBtn.addEventListener("click", event => {
      event.stopPropagation();
      this.newReviewCont.classList.remove("hide");
      this.productIdInput.value = reviewBtn.getAttribute("newReviewProduct")!;
      this.storeIdInput.value = reviewBtn.getAttribute("newReviewStore")!
    });
  }

  // ---------------------------------------------------------------------------
  private close_pop_up() {
    /**
     * Function to close the pop up, this occurs whenever the user presses
     * cancel, or clicks outside the box.
     */
    this.newReviewCont
      .querySelector('.new-review__btn[for="cancel"]')!
      .addEventListener("click", () => {
        this.newReviewCont.classList.add("hide");
        this.productIdInput.value = "";
      });

    document.body.addEventListener("click", () => {
      this.newReviewCont.classList.add("hide");
    });

    this.newReviewCont
      .querySelector(".new-review__form")
      ?.addEventListener("click", event => {
        event.stopPropagation();
      });
  }
}
