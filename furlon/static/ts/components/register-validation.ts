// =============================================================================
// Date Created: 12/01/2019
// Created By: Salaah Amin
// ============================================================================
// SCOPE:
// ------
// Registration pages.
//
// PURPOSE:
// --------
// When passwords do not match, update the attribute of the password elements
// to `invalid="true". This will allow the the CSS to change the border
// of the password elements to red and show an error message for a few seconds.
//
// If passwords do not match, then add the disabled attribute to the submit
// button.
// =============================================================================

// =============================================================================
export class RegisterPasswordCheck {
  /** Checks if passwords match, if they do not, then update the attribute
   * of the password elements which will in turn update siblings to take on
   * some CSS styling (controlled through CSS).
   */
  private passwordElem = document.getElementById(
    "register-password"
  ) as HTMLInputElement;
  private confirmPassElem = document.getElementById(
    "register-password-confirm"
  ) as HTMLInputElement;
  private submitBtn = document.getElementById(
    "register-submit"
  ) as HTMLButtonElement;
  private errorMsgElem = document.getElementById(
    "register-errors"
  ) as HTMLSpanElement;

  // ---------------------------------------------------------------------------
  constructor() {
    /** Constructor */
    this.set_keybinders();
  }

  // ---------------------------------------------------------------------------
  private check_passwords() {
    /** Checks if the passwords match, and if so, check their complexity. */
    const passwordTxt = this.passwordElem?.value;
    const confirmPassTxt = this.confirmPassElem?.value;

    if (passwordTxt && confirmPassTxt) {
      if (passwordTxt === confirmPassTxt) {
        // Check complexity:
        // Length must be at least 6 and must contain at least 1 integer.
        if (
          passwordTxt.length >= 6 &&
          passwordTxt.match(/[0-9]/) &&
          passwordTxt.match(/[A-z]/)
        ) {
          return true;
        } else {
          this.errorMsgElem.textContent =
            "Password must be at least 6 characters long and contain at least 1 number.";
          return false;
        }
      } else {
        this.errorMsgElem.textContent = "Passwords do not match.";
        return false;
      }
    } else {
      return true;
    }
  }

  // ---------------------------------------------------------------------------
  private set_keybinders() {
    this.confirmPassElem.addEventListener("focusout", () => {
      this.update_element_attrs();
    });
  }

  // ---------------------------------------------------------------------------
  private update_element_attrs() {
    /**
     * Updates the attributes of the input and button elements to accordance
     * whether or not the passwords match.
     */
    if (this.check_passwords()) {
      this.passwordElem.removeAttribute("invalid");
      this.confirmPassElem.removeAttribute("invalid");
      this.submitBtn.removeAttribute("disabled");
    } else {
      this.passwordElem.setAttribute("invalid", "true");
      this.confirmPassElem.setAttribute("invalid", "true");
      this.submitBtn.setAttribute("disabled", "disabled");
    }
  }
}
