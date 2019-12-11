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
from django.http import JsonResponse

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

    return render(request, 'products/search.html', context)


# ------------------------------------------------------------------------------------------------------------------------------ #
def search_results(request):
    """ Returns user's search results as a JSON object.
    The results will be generated based on what has been submitted using the search bar and the filters.
    """
    # Filter Options
    minPrice = request.GET['minPrice'] if 'minPrice' in request.GET else 0
    maxPrice = request.GET['maxPrice'] if 'maxPrice' in request.GET else 9999999999
    category = request.GET['category'] if 'category' in request.GET else None
    colour = request.GET['colour'] if 'colour' in request.GET else None


    # Search Option
    # - It is assumed that the delimiter between keywords will be either ', ' or ','.
    # - Each keyword should check the value somewhat matches a value from various fields.
    # - Where the keyword = 'x', the search should be similar to <field> IS LIKE '%x%'.
    if 'search' in request.GET:
        search = request.GET['search']
        search = search.replace(' ', '').split(',') if ',' in search else search.split()
        searchSQL = 'AND ('
        searchBindVars = []
        for keyword in search:
            searchBindVars += searchBindVars + [keyword] * 5
            searchSQL += """
                LOWER(name) like %s
                OR  (
                    SELECT COUNT (*)
                    FROM stores_stores ss
                    WHERE pp.store_id = ss.store_id
                    AND LOWER(ss.name) like %s
                ) > 0
                OR  (
                    SELECT COUNT (*)
                    FROM products_colours pcol
                    WHERE pp.colour_id = pcol.id
                    AND (lower(pcol.name) like %s OR lower(pcol.col_families) like %s)
                ) > 0
                OR (
                    SELECT COUNT (*)
                    FROM products_categories pcat
                    WHERE pp.category_id = pcat.cat_id
                    AND pcat.name like %s
                ) > 0
            """
    else:
        searchBindVars = []
        searchSQL = ''

    # fullSQL consists of an sql build based on the filters and the searchSQL.
    # As a list of bindVars is used as supposed to a dictionary of bindVars, order matters.
    # This is done to prevent SQL injection when building the search query.
    fullSQL = """
        SELECT name, height, length
        FROM products_products
        WHERE price >= %s
        AND price <= %s
        """
    if category:
        fullSQL += "AND category_id %s"
    if colour:
        fullSQL += "AND colour_id %s"

    fullSQL += searchSQL + ';'

    bindVars = [float(minPrice), float(maxPrice)]
    if category:
        bindVars.append(category)
    if colour:
        bindVars.append(colour)
    bindVars = bindVars + searchBindVars

    from django.db import connection
    import json
    from django.http import HttpResponse
    cursor = connection.cursor()
    cursor.execute(fullSQL, bindVars)
    dataRows = cursor.fetchall()
    keys = ('name', 'height', 'length')
    result = []
    for dataRow in dataRows:
        result.append(dict(zip(keys, dataRow)))

    json_data = json.dumps(result)
    return HttpResponse(json_data, content_type="application/json")
