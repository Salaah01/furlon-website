// =============================================================================
// Date Created: 08/11/2019
// Created By: Salaah Amin
// =============================================================================
// SCOPE
// Manages the search filters on the page. 
//
// PURPOSE
// Responsible for calling the search API which will filter result based on
// what the user has selected using the filters.
//
// Will use the navigation search bar's form to interact with the API.
// =============================================================================


// =============================================================================
class SearchFilters {
  /**
   * Will expand the navigation search bar and the form element to allow it to
   * take in the filter options as part of the GET request whenever a user
   * initiates a search.
   * 
   * Calls the API to filter the results.
   */

  // ---------------------------------------------------------------------------
  constructor() {
    /**
     * Constructor does not require any arguments and will instead use
     * elements from the DOM.
     */
    this._expand_nav_search();
  }
  

  // ---------------------------------------------------------------------------
  _expand_nav_search() {
    /**
     * Expands on the navigation search elements so that when sending a GET
     * request, filters wil be applied.
     */
    const navForm = document.getElementsByClassName('nav__search')[0] as HTMLFormElement;
    
    // Add hidden inputs to contain the values on the filters.
    const inputNames = ['f-minPrice', 'f-maxPrice', 'f-category', 'f-colour']
    for (const inputName of inputNames) {
      const hiddenInputNode = document.createElement('INPUT') as HTMLInputElement;
      hiddenInputNode.setAttribute('type', 'hidden');
      hiddenInputNode.setAttribute('name', inputName);
      hiddenInputNode.setAttribute('id', inputName);
      navForm.appendChild(hiddenInputNode);
    };

    // Update the hidden inputs when a filter is selected
    const dropdownOptions = document.getElementsByClassName('dropdown-menu__options') as HTMLCollectionOf<HTMLDivElement>

    for (let opt=0; opt<dropdownOptions.length; opt++) {
      const dropdownOption = dropdownOptions[opt];
      let hiddenInput: HTMLInputElement
      
      switch(dropdownOption.getAttribute('filter-for')) {
        case 'min-price':
          hiddenInput = document.getElementById('f-minPrice') as HTMLInputElement;
          break;
        case 'max-price':
          hiddenInput = document.getElementById('f-maxPrice') as HTMLInputElement;
          break;
        case 'category':
          hiddenInput = document.getElementById('f-category') as HTMLInputElement;
          break;
        case 'colour':
          hiddenInput = document.getElementById('f-colour') as HTMLInputElement;
      }

      dropdownOption.addEventListener('click', (event) => {
        event.stopPropagation();
        hiddenInput.value = dropdownOption.previousElementSibling!.textContent!;
        
        // Calls the search result API and returns the results as a JSON.
        const APIPath = window.location.href.replace('/search/','/search-results/')
        const request = new XMLHttpRequest();

        request.open('GET', APIPath);
        request.send();
        request.onreadystatechange = () => {
          if (request.readyState == 4 && request.status == 200) {
             const response = JSON.parse(request.responseText);
             console.log(response)
          } else {
            
          }
        }
      })

    }

  };

};

// ---------------------------------------------------------------------------


new SearchFilters();
