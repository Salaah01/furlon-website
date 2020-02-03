// =============================================================================
// Date Created: 02/02/2020
// Created By: Salaah Amin
// =============================================================================
// SCOPE
// Reviews section on a product page/
//
// OVERVIEW
// On the products page if the user is authenticated and the user has left
// comments, there will be opportunity to update or delete that comment.
//
// On load, the comment will be placed at the top of the page, with an edit and
// delete button.
//
// If user clicks on the edit button, replace the comment with form elements
// allowing the user to edit the rating, title and comment. On clicking edit,
// a hidden input button will be updated the indicate that the user has chosen
// to update their content.
//
// Below all of this, there will be a submit and cancel button. The cancel
// button will not make any changes, rather return to the original view.
//
// If the user presses the submit button, a hidden submit button would need to
// clicked through the JavaScript which will sent a POST request to the backend.
//
// If the user presses the delete button, there will be a pop up asking them to
// confirm that they want to delete their post. If confirmed, then an hidden
// input will be updated and a the submit clicked sending a POST request ot the
// backend.
// =============================================================================

// =============================================================================
export class ProductUserReview {
  // Form containing the user review or null.
  userReviewForm = document.getElementById(
    "product-user-review-form"
  ) as HTMLFormElement | null;

  // -------------------------------------------------------------------------
  constructor() {
    /**
     * Constructor holds the constants and dictates the build order of each
     * element.
     */

    if (this.userReviewForm) {
      // Elements from the form that wil be interacted with.

      // Current user review section
      const currentReviewSects = this.userReviewForm.querySelectorAll(
        '[userSection="current-section"]'
      );
      const updateReviewSects = this.userReviewForm.querySelectorAll(
        '[userSection="update-section"]'
      );

      // Buttons
      const editBtn = this.userReviewForm.querySelector(
        "#user-review-edit-start"
      ) as HTMLElement;
      const cancelBtn = this.userReviewForm.querySelector(
        "#user-review-edit-cancel"
      ) as HTMLElement;

      //   const deleteBtn = this.userReviewForm.getElementById(
      //     "user-review-delete-start"
      //   ) as HTMLElement;
      //   const submitBtn = this.userReviewForm.getElementById(
      //     "user-review-submit"
      //   ) as HTMLElement;

      //   // Input elements
      //   const ratingsInput = this.userReviewForm.getElementById(
      //     "user-review-ratings-input"
      //   );
      //   const commentTitleInput = this.userReviewForm.getElementById(
      //     "user-review-title"
      //   );
      //   const commentsInput = this.userReviewForm.getElementById("user-comments");

      //   // Hidden inputs
      //   const operationHInput = this.userReviewForm.getElementById(
      //     "user-review-operation"
      //   ) as HTMLInputElement;
      //   const userRatingHInput = this.userReviewForm.getElementById(
      //     "user-review-rating"
      //   ) as HTMLInputElement;
      //   const deleteBoolHInput = this.userReviewForm.getElementById(
      //     "user-reiew-delete-bool"
      //   ) as HTMLInputElement;

      this._build_edit_btn(editBtn, currentReviewSects, updateReviewSects);
      this._build_cancel_btn(cancelBtn, currentReviewSects, updateReviewSects);
    }
  }

  // -------------------------------------------------------------------------
  private _build_edit_btn(
    editBtn: HTMLElement,
    currentReviewSects: NodeList,
    updateReviewSects: NodeList
  ) {
    /**
     * Builds the controls for the edit button.
     * On click, the user's review in the form of block text will hide
     * and a form will be shown where the user will be able to update
     * their comments and rating.
     */
    editBtn.addEventListener("click", () => {
      for (let section = 0; section < currentReviewSects.length; section++) {
        const targetElem = currentReviewSects[section] as HTMLElement;
        targetElem.classList.add("hide");
      }

      for (let section = 0; section < updateReviewSects.length; section++) {
        const targetElem = updateReviewSects[section] as HTMLElement;
        targetElem.classList.remove("hide");
      }
    });
  }

  // -------------------------------------------------------------------------
  private _build_cancel_btn(
    cancelBtn: HTMLElement,
    currentReviewSects: NodeList,
    updateReviewSects: NodeList
  ) {
    /**
     * Builds the controls for the cancel button.
     * On click, the user's review in the form of block text will show
     * and the the update comments section will hide.
     */

    cancelBtn.addEventListener("click", () => {
      for (let section = 0; section < currentReviewSects.length; section++) {
        const targetElem = currentReviewSects[section] as HTMLElement;
        targetElem.classList.remove("hide");
      }

      for (let section = 0; section < updateReviewSects.length; section++) {
        const targetElem = updateReviewSects[section] as HTMLElement;
        targetElem.classList.add("hide");
      }
    });
  }
}
