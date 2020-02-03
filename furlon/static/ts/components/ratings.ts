// =============================================================================
// Date Created: 02/02/2020
// Created By: Salaah Amin
// =============================================================================
// SCOPE
// -----
// On items with the ratings__stars class.
//
// PURPOSE
// -------
// For containers where the selectable attribute is set to true, keybinders
// will be attached such that if a particular star is hovered over, that star
// and all preceding starts will highlight.
// On click of that star, that start will be come selected and so the classes
// will update accordingly.
// =============================================================================

// =============================================================================
export class Ratings {
  containers = document.querySelectorAll('.rating__stars[selectable="true"]');
  selectedClass = "i-star--checked";
  userRating = 0;

  // ---------------------------------------------------------------------------
  private static instance: Ratings;

  // ---------------------------------------------------------------------------
  private constructor() {
    if (this.containers) {
      this.userRating = Number(
        document
          .querySelector("#product-reviews-user-rating")!
          .getAttribute("userRating")
      );

      for (let c = 0; c < this.containers.length; c++) {
        const stars: HTMLElement[] = [
          this.containers[c].querySelector('.i-star[value="1"]') as HTMLElement,
          this.containers[c].querySelector('.i-star[value="2"]') as HTMLElement,
          this.containers[c].querySelector('.i-star[value="3"]') as HTMLElement,
          this.containers[c].querySelector('.i-star[value="4"]') as HTMLElement,
          this.containers[c].querySelector('.i-star[value="5"]') as HTMLElement
        ];

        // Update the current selection
        this.update_selection(stars);

        // Adds keybinders onto the the stars for mouseover, mouseout and click.
        this.build_star_functions(stars);
      }
    }
  }

  // ---------------------------------------------------------------------------
  static getInstance(): Ratings {
      if (!Ratings.instance) {
          Ratings.instance = new Ratings();
      }
      return Ratings.instance;
  }

  // ---------------------------------------------------------------------------
  private update_selection(stars: HTMLElement[]) {
    /**
     * Sets the selected class to the stars in accordance to what the
     * user's current rating is.
     */
    // Reset
    this.remove_all_stars(stars);

    const userRating = this.user_rating;

    if (userRating >= 1) {
      stars[0].classList.add(this.selectedClass);
    }

    if (userRating >= 2) {
      stars[1].classList.add(this.selectedClass);
    }

    if (userRating >= 3) {
      stars[2].classList.add(this.selectedClass);
    }

    if (userRating >= 4) {
      stars[3].classList.add(this.selectedClass);
    }

    if (userRating == 5) {
      stars[4].classList.add(this.selectedClass);
    }
  }

  // ---------------------------------------------------------------------------
  private remove_all_stars(stars: HTMLElement[]) {
    /**
     * Removes an item from the class list of all the stars so that none of the
     * stars are selected.
     */

    for (let s = 0; s < stars.length; s++) {
      stars[s].classList.remove(this.selectedClass);
      stars[s].removeAttribute("highlight");
    }
  }

  // ---------------------------------------------------------------------------
  get user_rating(): number {
    /** Gets the user rating. */
    return this.userRating;
  }

  // ---------------------------------------------------------------------------
  set user_rating(newRating: number) {
    /** Sets the user rating. */
    this.userRating = newRating;
  }

  // ---------------------------------------------------------------------------
  private build_star_functions(stars: HTMLElement[]) {
    /**
     * For the selectable rating, on hover, firstly all starts will disappear
     * and when each star is hovered over, they will highlight. Finally, when
     * the mouse is moved away from the element, reset the stars to whatever
     * is was previously.
     */
    for (let star = 0; star < stars.length; star++) {
      stars[star].addEventListener("mouseover", () => {
        this.remove_all_stars(stars);
        for (let prevStar = 0; prevStar <= star; prevStar++)
          stars[prevStar].setAttribute("highlight", "true");
      });

      stars[star].addEventListener("mouseout", () => {
        this.update_selection(stars);
      });

      stars[star].addEventListener("click", () => {
        this.user_rating = star + 1;
        this.update_selection(stars);
      });
    }
  }
}
