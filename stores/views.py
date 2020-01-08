"""
==================================================================================================================================
Date Created:   08/01/2020
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Renders pages relating to stores.
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.shortcuts import render, get_object_or_404

# Local Imports
from products.models import Products
from stores.models import Stores

# ------------------------------------------------------------------------------------------------------------------------------ #
def store(request, pk):
    """ Results a single store given its private key. """
    store = get_object_or_404(Stores, pk=pk)
    latestProducts = Products.objects.order_by('-upload_date').filter(store_id=pk)[:6]

    context = {
        'store': store,
        'latestProducts': latestProducts
    }

    return render(request, 'stores/store.html', context)
