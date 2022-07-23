// =============================================================================
// Date Created: 08/01/20200
// Created By: Salaah Amin
// =============================================================================
// SCOPE:
// ------
// Utility class to reformat number.
//
// =============================================================================

// =============================================================================
export class NumberFormat {
  /**  Utility class to convert numbers to different formats. */

  // ---------------------------------------------------------------------------
  static thousand_separated_2dp(num: number | string) {
    /** Coverts a number to a thousand separated string to 2.d.p */
    return Number(num)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // ---------------------------------------------------------------------------
  static thousand_sep_to_float(num: string | null) {
      /**
       * Converts a thousand separated float to a float. If the argument = null
       * then 0 will be returned.
       */
    if (!num) {
      return 0;
    } else {
      return Number(num.replace(",", ""));
    }
  }
}
