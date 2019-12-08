// ============================================================================
// Date Created: 08/11/2019
// Created By: Salaah Amin
// ============================================================================
// SCOPE
// Search filters in the search page.
//
// PURPOSE
// 1. When filters are applied, to copy any values currently sitting in the
//    search bar to an hidden input named 'search'.
// ============================================================================

const search = document.getElementById("search") as HTMLInputElement;
if (window.location.href.indexOf("/search/") > -1) {
  const searchCopy = document.getElementById("search-copy") as HTMLInputElement;
  const filtersSubmitBtn = document.getElementById(
    "filters-submit"
  ) as HTMLButtonElement;

  filtersSubmitBtn.addEventListener("click", () => {
    if (search.value.trim()) {
      searchCopy.value = search.value;
    }
  });
}
