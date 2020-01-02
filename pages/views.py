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

from django.shortcuts import render
from products.models import Products
from products import product_info


# ------------------------------------------------------------------------------------------------------------------------------ #
def index(request):
    """ Loads the Index Page """
    latest_products = Products.objects.order_by('-upload_date').filter(status='Active')[:6]
    context = {
        'latest_products': latest_products
    }
    return render(request, 'pages/index.html', context)


# ------------------------------------------------------------------------------------------------------------------------------ #
def basket(request):
    """ Loads the basket page """
    return render(request, 'pages/basket.html')
