// ============================================================================
// Date Created: 16/12/2019
// Created By: Salaah Amin
// ============================================================================
// SCOPE
// Custom dropdown menu
//
// PURPOSE
// Provides functions for a custom dropdown menu.
// The functions will work for dropdown menus in the following format:
//
// <div class="custom-select">
//   <select>
//     <option value="0">Select colour:</option>
//     <option value="1">Blue</option>
//     <option value="2">Pink</option>
//     <option value="3">Blue</option>
//     <option value="4">White</option>
//   </select>
// </div>
//
// METHOD
// Using the markup, the script will create two more DIVs to be appended to
// .custom-select.
// 
// The the top div will display the selected option whilst the bottom will
// contain the options list.
//
// The script will expand the options list whenever the first div is clicked,
// and will collapse whenever a option is selected, or user selects outside.
//
// FINAL FORMAT
// WHEN COLLAPSED
// <div class="custom-select">
//   <select>
//     <option value="0">Select colour:</option>
//     <option value="1">Blue</option>
//     <option value="2">Pink</option>
//     <option value="3">Blue</option>
//     <option value="4">White</option>
//   </select>
//   <div class="select-selected">
//     {selected value}
//   </div>
//   <div select-items select-hide>
//       <div>{option 1}</div>
//       <div>{option 2}</div>
//              ...
//   </div>
// </div>
//
// When expanded, the first child div will have the class select-arrow-active
// added and the second child div will have the class select-hide removed.
// ============================================================================

// Should encapsulate the select and options tag.

const dropDownMenus = document.getElementsByClassName('custom-select')
let selElem: HTMLSelectElement
var j;

for (let i = 0; i < dropDownMenus.length; i++) {
  selElem = dropDownMenus[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  let selectedElem = document.createElement("DIV");
  selectedElem.setAttribute("class", "select-selected");
  selectedElem.innerHTML = selElem.options[selElem.selectedIndex].innerHTML;
  dropDownMenus[i].appendChild(selectedElem);
  /* For each element, create a new DIV that will contain the option list: */
  let optionList = document.createElement("DIV");
  optionList.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElem.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    let optionItem = document.createElement("DIV");
    optionItem.innerHTML = selElem.options[j].innerHTML;
    optionItem.addEventListener("click", function() {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        let selectContainer = this.parentNode!.parentNode! as HTMLDivElement
        let selectedOption = this.parentNode as HTMLDivElement
        s = selectContainer.getElementsByTagName("select")[0] as HTMLSelectElement;
        h = selectedOption.previousSibling as HTMLOptionElement;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = selectedOption.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    optionList.appendChild(optionItem);
  }
  dropDownMenus[i].appendChild(optionList);
  selectedElem.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    let optionList1 = this.nextSibling as HTMLDivElement 
    optionList1.classList!.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elem: any): void {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elem == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect)


function closeAllSelect2(elem: any): void {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  const dropDownMenus = document.getElementsByClassName("dropdown-menu");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elem == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}


const dropdownMenus2 = document.getElementsByClassName("dropdown-menu") as HTMLCollectionOf<HTMLDivElement>
if (dropdownMenus2.length) {
  for (let menuIter = 0; menuIter < dropdownMenus2.length; menuIter++) {
    document.addEventListener("click", closeAllSelect2)
    buildFilters(dropdownMenus2[menuIter])
    
  }
}

function buildFilters(dropDownMenu: HTMLDivElement) {
  let optionsBtn = dropDownMenu.getElementsByClassName("dropdown-menu__selected")[0] as HTMLDivElement
  let optionsListContainer = dropDownMenu.getElementsByClassName("dropdown-menu__options")[0] as HTMLDivElement
  let optionsListItems = optionsListContainer.getElementsByClassName("dropdown-menu__options__label") as HTMLCollectionOf<HTMLLabelElement>
  optionsBtn.addEventListener("click", () => {
    optionsListContainer.classList.toggle("dropdown-menu__options--hide")
  })

  for (let optionIter = 0; optionIter < optionsListItems.length; optionIter++) {
    let listItem = optionsListItems[optionIter]
    listItem.addEventListener("click", () => {
      
    // Remove the highlight form all list items and reapply to the selected list item only
    for (let optionSubIter = 0; optionSubIter < optionsListItems.length; optionSubIter++) {
      optionsListItems[optionSubIter].classList.remove("dropdown-menu__options__label--selected")
    }
    listItem.classList.add("dropdown-menu__options__label--selected")

    // Close the menu
    optionsListContainer.classList.add("dropdown-menu__options--hide")

    })
  }

  


}