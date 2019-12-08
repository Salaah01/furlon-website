"""
==================================================================================================================================
Date Created:   08/12/2019
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Renders pages relating to products.
This includes the search page and a dedicated page for each product.
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# Local Imports
from products.models import Products, Categories, ColourFamilies


# ------------------------------------------------------------------------------------------------------------------------------ #
def search(request):
    """ Loads the search page """
    results = Products.objects.order_by('-upload_date').filter(status='Active')

    # Retrieving results based on the search query.
    if 'search' in request.GET:
        if request.GET['search']:
            searchTerms = request.GET['search']
            searchTerms = searchTerms.replace(' ', '').split(',') if ',' in searchTerms else searchTerms.split()
            for searchTerm in searchTerms:
                results = Products.objects.raw(
                    """
                    SELECT *
                    FROM products_products pp
                    WHERE
                        LOWER(name) like %(search)s
                    OR  (
                        SELECT COUNT (*)
                        FROM stores_stores ss
                        WHERE pp.store_id = ss.store_id
                        AND LOWER(ss.name) like %(search)s
                    ) > 0
                    OR  (
                        SELECT COUNT (*)
                        FROM products_colours pcol
                        WHERE pp.colour_id = pcol.id
                        AND (lower(pcol.name) like %(search)s OR lower(pcol.col_families) like %(search)s)
                    ) > 0
                    OR (
                        SELECT COUNT (*)
                        FROM products_categories pcat
                        WHERE pp.category_id = pcat.cat_id
                        AND pcat.name like %(search)s
                    ) > 0
                    """,
                    {'search': '%' + searchTerm.lower() + '%'}
                )
                print(searchTerm)
                print(results)

    # Pagination
    paginator = Paginator(results, 20)
    page = request.GET.get('page')
    pagedListings = paginator.get_page(page)

    # Filter choices
    minPrice = {price: price for price in ['0', '20', '50', '100', '150', '200', '300', '450', '600', '750', '1000']}
    maxPrice = {key: value for key, value in minPrice.items() if key != '0'}
    maxPrice['2000'] = '2000'
    maxPrice['-1'] = '2000+'
    categories = Categories.objects.order_by('name')
    colourFamilies = ColourFamilies.objects.order_by('name')

    context = {
        'userValues': request.GET,
        'products': pagedListings,
        'minPrice': minPrice,
        'maxPrice': maxPrice,
        'categories': categories,
        'colourFamilies': colourFamilies
    }

    print(results)

    return render(request, 'products/search.html', context)
