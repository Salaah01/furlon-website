// =============================================================================
// Date Created: 07/01/20200
// Created By: Salaah Amin
// =============================================================================
// SCOPE:
// ------
// Utility providing validation options.
//
// PURPOSE:
// --------
// =============================================================================

// =============================================================================
export class Validation {
  /**
   * A utilities class containing static method which run some form of
   * validation.
   */

  // ---------------------------------------------------------------------------
  static check_if_positive_int(item: any): boolean {
      /** Checks if an item is a positive integer */

      if (typeof item != 'number') {
          return false
      } else if (item >= 0 && item === Math.round(item)) {
          console.log(item, item >= 0)
          return true
      }

      // At this stage, the only branch suggests that the number is < 0.
      return false
  }
}
