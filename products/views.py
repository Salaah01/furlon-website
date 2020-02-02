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
from django.http import HttpResponse
from django.db import connection
from django.db.models import Avg


# Local Imports
from products.models import Products, Categories, ColourFamilies, Colours, ProductReviews
from .search_query import search_query
from .product_info import Productinfo
from django.contrib.auth.models import User


# ------------------------------------------------------------------------------------------------------------------------------ #
def search(request):
    """ Loads the search page """
    # Results need to be queried using raw SQL as the when the user sends a GET request, raw SQL is used to query the database,
    # during which the variables are renamed.
    # NOTE: MAIN COLOUR IS SET TO TRUE OR FALSE IN DEV, REMOVE WHEN THERE ARE ENOUGH PRODUCTS
    results = Products.objects.raw(
        """
        SELECT  pp.product_id, pp.name pp_name, pp.height, pp.length, pp.width, pp.features, pp.related,
                pp.showcase_image, pp.description, pp.price, pp.rating, pp.upload_date, pp.inventory, pp.status,
                pp.category_id, pp.colour_id, pp.store_id, pp.delivery_available, pp.main_colour, pp.ratings,
                ss.name ss_name
        FROM products_products pp, stores_stores ss
        WHERE (pp.main_colour = true OR pp.main_colour = false)
        AND pp.status = 'Active'
        AND pp.store_id = ss.store_id
        """
    )

    # Retrieving results based on the search query.
    if 'search' in request.GET:
        query = {}
        if 'search' in request.GET:
            query[search] = request.GET['search']

        criterion = ['search', 'f-minPrice',
                     'f-maxPrice', 'f-category', 'f-colour']
        # query = {criteria: request.GET[criteria] for criteria in criterion if request.GET[criteria]}
        query = {}
        for criteria in criterion:
            if criteria in request.GET and request.GET[criteria]:
                query[criteria] = request.GET[criteria]

        results = search_query(query, 20)

    # Pagination
    paginator = Paginator(results, 20)
    page = request.GET.get('page')
    pagedListings = paginator.get_page(page)

    # Filter choices
    minPrice = {price: price for price in [
        '0', '20', '50', '100', '150', '200', '300', '450', '600', '750', '1000']}
    maxPrice = {key: value for key, value in minPrice.items() if key != '0'}
    maxPrice['2000'] = '2000'
    maxPrice['-1'] = '2000+'
    categories = Categories.objects.order_by('name')
    colourFamilies = ColourFamilies.objects.order_by('name')

    context = {
        'noResults': len(results),
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
    criterion = ['search', 'f-minPrice',
                 'f-maxPrice', 'f-category', 'f-colour']
    query = {criteria: request.GET[criteria]
             for criteria in criterion if request.GET[criteria]}

    searchResults = search_query(query, 20, True)
    return HttpResponse(searchResults, content_type="application/json")


# ------------------------------------------------------------------------------------------------------------------------------ #
def product(request, pk):
    """ Results a single product given its private key. """

    # Base Querysets - getting the product and the reviews.
    product = get_object_or_404(Products, pk=pk)
    reviews = ProductReviews.objects.filter(product=pk).order_by('-review_date')

    # Defaults
    userReview = None
    otherReviews = reviews[:5]
    rating = -1

    ratingsCount = reviews.count()

    if ratingsCount:
        rating = reviews.aggregate(Avg('rating'))

        # If user is logged in, remove the user's review from
        if request.user.is_authenticated:
            userReview = reviews.get(user=request.user)
            otherReviews = reviews.exclude(user=request.user).order_by('-review_date')

    context = {
        'product': product,
        'userReview': userReview,
        'otherReviews': otherReviews,
        'ratingsCount': ratingsCount,
        'rating': rating
    }

    # FUTURE DEVELOPMENT
    # Retrieving the colour families where the product's colours are attached to.
    # colourFamiliesSQL = """
    #     SELECT name
    #     FROM products_colourfamilies
    #     WHERE (
    #         SELECT pcol.col_families
    #         FROM products_products pp, products_colours pcol
    #         WHERE pp.colour_id = pcol.id
    #         AND pp.product_id = %s
    #     ) LIKE '%' || name || '%'
    #     """

    return render(request, 'products/product.html', context)


# ------------------------------------------------------------------------------------------------------------------------------ #
def product_info_api(request, pk):
    """ API for returning information on a product. These information that will be provided related to that which is available
    in thelinked product table.
    """
    return HttpResponse(
        Productinfo(infoList=['colours', 'sets',
                              'similar', 'features'], pk=pk).productInfo,
        content_type="application/json"
    )
