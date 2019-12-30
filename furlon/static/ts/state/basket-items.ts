// =============================================================================
// Date Created: 30/12/2019
// Created By: Salaah Amin
// =============================================================================
// SCOPE:
// ------
// Pages where interaction with items in the basket need to be access and/or
// modified.
//
// PURPOSE:
// --------
// - Manage the basket items
// - Keep basket data whenever user moves away from the page.
//
// DESCRIPTION:
// ------------
// Leverages the power of local storage to keep a track of the basket.
// =============================================================================

// =============================================================================
export class BasketState {
  totalItems: string | null | number = window.localStorage.getItem(
    "totalBasketSize"
  );
  items: any = window.localStorage.getItem("basketItems");

  // ---------------------------------------------------------------------------
  constructor() {}

  // ---------------------------------------------------------------------------
  private _read_items() {
    /**
     * Retrieves the total and basket size from the local storage and converts
     * the values into types that can be worked with.
     */
    if (!this.totalItems) {
      this.totalItems = 0;
    } else {
      Number(this.totalItems);
    }
    if (this.items) {
      this.items = JSON.parse(this.items);
    } else {
      this.items = {};
    }
  }

  // ---------------------------------------------------------------------------
  private _set_items() {
    /**
     * Converts the local storage items into strings and saves them onto the
     * local storage.
     */

    if (!this.totalItems) {
      window.localStorage.setItem("totalBasketSize", "0");
    } else {
      window.localStorage.setItem(
        "totalBasketSize",
        this.totalItems.toString()
      );
    }

    if (!this.items) {
      window.localStorage.setItem("basketItems", "{}");
    } else {
      this.items = JSON.stringify(this.items);
      window.localStorage.setItem("basketItems", this.items);
    }
  }

  // ---------------------------------------------------------------------------
  add_item(id: number, quantity: number) {
    /** Method for adding items into the basket. */
    this._read_items();

    this.totalItems = Number(this.totalItems);
    this.totalItems += quantity;

    if (this.items[id]) {
      this.items[id] += quantity;
    } else {
      this.items[id] = quantity;
    }

    this._set_items();
  }

  // ---------------------------------------------------------------------------
  remove_item(id: number, quantity: number) {
    /** Method for removing items from the basket. */
    this._read_items();

    this.totalItems = Number(this.totalItems);
    if (this.totalItems > 0) {
      this.totalItems -= quantity;
    }

    if (this.items[id]) {
      this.items[id] = Number(this.items[id]);
      this.items[id] -= quantity;
    }

    this._set_items();
  }
}
