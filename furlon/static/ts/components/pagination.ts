// =============================================================================
// Date Created: 26/01/2020
// Created By: Salaah Amin
// ============================================================================
// SCOPE:
// ------
// Pagination Object
//
// PURPOSE:
// --------
// Builds the link (href) on each pagination button. This is achieved by
// using the current url to build most part of the href and appending to it
// the page query.
//
// Each element will contain a "page" attribute which will be used to set the
// page part of the href.
// =============================================================================

// =============================================================================
export class Pagination {
  /** Builds the pagination link (href). */
  container = document.getElementById("pagination");

  // -------------------------------------------------------------------------
  constructor() {
    /** Builds the links onto the pagination links if #pagination exists. */
    if (this.container) {
      this.build_links();
    }
  }

  // -------------------------------------------------------------------------
  private build_links() {
    /** Builds links onto the pagination link elements. */
    const links = this.container!.getElementsByClassName("pagination__link");
    const baseHref =
      window.location.href.replace(/&((.*?&$)|(page=[0-9]{1,})|(page=))/g, "") +
      "&page=";

    for (let l = 0; l < links.length; l++) {
      if (links[l].getAttribute("disabled") != "disabled") {
        links[l].setAttribute("href", baseHref + links[l].getAttribute("page"));
      }
    }
  }
}
