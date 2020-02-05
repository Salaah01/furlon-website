"""
==================================================================================================================================
Date Created:   20/09/2019
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Renders views. These include:
    - pages/index.html
    - pages/basket.html
==================================================================================================================================
"""

# Python Library Imports
import json

# Third Party Library Imports
from django.shortcuts import render
from django.http import HttpResponse
from django.db import connection

# Local Imports
from products.models import Products, SubCategories
from products.product_info import Productinfo
import corefunctions as cf


# ------------------------------------------------------------------------------------------------------------------------------ #
def index(request):
    """ Loads the Index Page """
    latest_products = Products.objects.order_by(
        '-upload_date').filter(status='Active')[:6]
    context = {
        'latest_products': latest_products
    }
    return render(request, 'pages/index.html', context)


# ------------------------------------------------------------------------------------------------------------------------------ #
def basket(request):
    """ Loads the basket page """
    context = {}
    if 'basketItems' in request:
        pks = request['basketItems'].split(',')
        products = Products.objects.get(id__in=pks)
        context = {
            'products': products
        }

    return render(request, 'pages/basket.html', context)


# ------------------------------------------------------------------------------------------------------------------------------ #
def basket_info_api(request):
    """ API for producing information required by the basket page.
    Expects "pks" in the request, using which JSON will be rendered containing information on each product.
    """
    if 'pks' in request.GET:
        pks = request.GET['pks'].split(',')

        return HttpResponse(
            Productinfo(infoList=['productsInfo'], pks=pks).productInfo,
            content_type="application/json"
        )
    else:
        return HttpResponse(
            {"error": "unknown error in GET request"},
            content_type="application/json"
        )


# ------------------------------------------------------------------------------------------------------------------------------ #
def help(request):
    """ View for the help page """
    return render(request, 'pages/help.html')


# ------------------------------------------------------------------------------------------------------------------------------ #
def categories_context_manager(category):
    """ A generic context manager for handling context for category pages. """

    # Default
    context = {}

    # Create a cursor
    cursor = connection.cursor()

    # Generic queries
    context['subcategories'] = SubCategories.objects.filter(category_id__name=category)

    # Get all the sub-categories which belong to this category.
    subCatsSQL = """
        SELECT psc.id, psc.name
        FROM products_subcategories psc
        WHERE psc.category_id = (SELECT pcat.cat_id
                                 FROM products_categories pcat
                                 WHERE pcat.name = %s)
        """
    keys = ['id', 'name']
    cursor.execute(subCatsSQL, [category])
    results = cursor.fetchall()

    subCategories = cf.SQLQueryToDict(results, keys)

    # Get all the products that belong to this category.
    # The query will also retrieve the store_id and store_name.
    productsSQL = """
        SELECT pp.product_id, pp.name, pp.height, pp.height_units, pp.length,
               pp.length_units, pp.width, pp.width_units, pp.features,
               pp.showcase_image, pp.price, pp.store_id, ss.name
        FROM products_products pp, stores_stores ss
        WHERE pp.store_id = ss.store_id
        AND pp.category_id = (SELECT pcat.cat_id
                              FROM products_categories pcat
                              WHERE pcat.name = %s)
        """
    keys = ['id', 'name', 'height', 'height_units', 'length', 'length_units'
            'width', 'width_units', 'features', 'showcase_image', 'price',
            'store_id', 'store_name']

    cursor.execute(productsSQL, [category])
    results = cursor.fetchall()

    products = cf.SQLQueryToDict(results, keys)

    # Building the context dictionary.
    context['subCategories'] = subCategories
    context['products'] = products

    return context

# ------------------------------------------------------------------------------------------------------------------------------ #
def categories_beds(request):
    """ Handles the bedroom view """
    return render(
        request,
        'pages/rooms-bedroom.html',
        categories_context_manager('Beds')
    )
