"""
==================================================================================================================================
Date Created:   20/09/2019
Created By:     Salaah Amin
Last Update:   20/09/2019
==================================================================================================================================
SCRIPT FUNCTION

Creates the views for the following pages:

index:      /
==================================================================================================================================
"""

from django.shortcuts import render
from products.models import Products


# ------------------------------------------------------------------------------------------------------------------------------ #
def index(request):
    """ Loads the Index Page """
    latest_products = Products.objects.order_by('-upload_date').filter(status='Active')[:6]
    context = {
        'latest_products': latest_products
    }
    return render(request, 'pages/index.html', context)
