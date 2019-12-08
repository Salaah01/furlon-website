"use strict";
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
var search = document.getElementById("search");
if (window.location.href.indexOf("/search/") > -1) {
    var searchCopy_1 = document.getElementById("search-copy");
    var filtersSubmitBtn = document.getElementById("filters-submit");
    filtersSubmitBtn.addEventListener("click", function () {
        if (search.value.trim()) {
            searchCopy_1.value = search.value;
        }
    });
}
//# sourceMappingURL=search_filters.js.map