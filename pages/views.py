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

# Third Party Library Imports
from django.shortcuts import render
from django.http import HttpResponse

# Local Imports
from products.models import Products
from products.product_info import Productinfo
from .categories_context_manager import CategoriesContextManger


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
def categories_beds(request):
    """ Handles the bedroom view """
    methods = {
        'subCategories': 'get_subcategories_details',
        'products': 'get_products_by_subcategory'
    }
    context = CategoriesContextManger(methods, categoryName='Beds').context
    return render(request, 'pages/categories-beds.html', context)
