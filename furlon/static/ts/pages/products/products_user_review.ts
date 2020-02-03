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
      const confirmDeleteBox = document.getElementsByClassName(
        "product-reviews__review__confirm-delete"
      )[0] as HTMLDivElement;

      // Buttons
      const editBtn = this.userReviewForm.querySelector(
        "#user-review-edit-start"
      ) as HTMLElement;
      const cancelBtn = this.userReviewForm.querySelector(
        "#user-review-edit-cancel"
      ) as HTMLElement;

      const deleteBtn = this.userReviewForm.querySelector(
        "#user-review-delete-start"
      ) as HTMLElement;
      const submitBtn = this.userReviewForm.querySelector(
        "#user-review-submit"
      ) as HTMLButtonElement;

      // Input elements
      const userSubmitBtn = this.userReviewForm.querySelector(
        "#user-review-edit-submit"
      ) as HTMLElement;

      //   // Hidden inputs
      const operationHInput = this.userReviewForm.querySelector(
        "#user-review-operation"
      ) as HTMLInputElement;
      //   const userRatingHInput = this.userReviewForm.getElementById(
      //     "user-review-rating"
      //   ) as HTMLInputElement;
      const deleteBoolHInput = this.userReviewForm.querySelector(
        "#user-review-delete-bool"
      ) as HTMLInputElement;

      this._build_update_comments_edit_btn(
        editBtn,
        currentReviewSects,
        updateReviewSects
      );
      this._build_update_comments_cancel_btn(
        cancelBtn,
        currentReviewSects,
        updateReviewSects
      );
      this._build_update_comments_submit_btn(
        userSubmitBtn,
        submitBtn,
        operationHInput
      );
      this._build_delete_functions(
        deleteBtn,
        operationHInput,
        confirmDeleteBox,
        deleteBoolHInput,
        submitBtn
      );
    }
  }

  // -------------------------------------------------------------------------
  private _build_update_comments_edit_btn(
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
  private _build_update_comments_cancel_btn(
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

  // -------------------------------------------------------------------------
  private _build_delete_functions(
    deleteBtn: HTMLElement,
    hOperationInput: HTMLInputElement,
    confirmDeleteBox: HTMLDivElement,
    hConfirmDeleteInput: HTMLInputElement,
    submitBtn: HTMLButtonElement
  ) {
    /**
     * Builds the delete functionality where a user is able to delete their
     * own comments.
     * When a user presses delete, reveal the confirm pop up
     * (confirmDeleteBox) where the user has the option to either confirm
     * delete or cancel.
     * If the user presses cancel or anywhere outside the box,
     * hide the pop up and take no further action.
     * Otherwise, if the user confirms they wish to delete the post, update
     * the hidden inputs (hOperationInput and hConfirmDeleteInput) and
     * submit the form (click on submitBtn).
     */

    // Show the pop up if user clicks on delete.
    deleteBtn.addEventListener("click", event => {
      confirmDeleteBox.classList.remove("hide");
      event.stopPropagation();
    });

    // Hide the form if the user presses cancel on the pop up box or clicks
    // outside the box.
    document.body.addEventListener("click", () => {
      confirmDeleteBox.classList.add("hide");
    });

    confirmDeleteBox
      .querySelector(".confirm-delete__inner-container")
      ?.addEventListener("click", event => {
        event.stopPropagation();
      });

    confirmDeleteBox
      .querySelector('.confirm-delete__btn[for="cancel"]')!
      .addEventListener("click", () => {
        confirmDeleteBox.classList.add("hide");
      });

    // If the user confirms they want to delete their review, populate
    // the hidden inputs accordingly and submit the form.
    confirmDeleteBox
      .querySelector('.confirm-delete__btn[for="delete"]')!
      .addEventListener("click", () => {
        hOperationInput.value = "delete";
        hConfirmDeleteInput.value = "true";
        submitBtn.click();
      });
  }

  // -------------------------------------------------------------------------
  private _build_update_comments_submit_btn(
    userSubmitBtn: HTMLElement,
    submitBtn: HTMLButtonElement,
    hOperationInput: HTMLInputElement
  ) {
    /**
     * Builds the functionality to update comments.
     * When the "edit comments" form elements are visible, the user will have
     * the ability to change the rating, update the title and comment.
     * If the user presses submit, capture and submit the form.
     * This is done using the name attribute on the input elements.
     * For the ratings, this is handled by its own module where a hidden
     * input is updated with the value.
     */
    userSubmitBtn.addEventListener("click", () => {
      hOperationInput.value = "update";
      submitBtn.click();
    });
  }
}
