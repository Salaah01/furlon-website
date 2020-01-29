"""
==================================================================================================================================
Date Created:   31/12/2019
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Renders pages related to sales.
Render the following pages:
    - sales/basket.html
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

# Local Imports
from .models import Sales


# ------------------------------------------------------------------------------------------------------------------------------ #
def order_history(request):
    """ View for loading the user's order history. Uses pagination to split number of results. Sales data is stored in
    sales_sales.
    """
    sales = Sales.objects.filter(user=request.user).order_by('-sale_id')

    # Pagination
    paginator = Paginator(sales, 20)
    page = request.GET.get('page')
    pagedSales = paginator.get_page(page)

    context = {
        'sales': pagedSales
    }
    return render(request, 'sales/order-history.html', context)


# ------------------------------------------------------------------------------------------------------------------------------ #
def pending_orders(request):
    """ View for loading the user's pending orders. Uses pagination to split number of results. Sales data is stored in
    sales_sales.
    """
    sales = Sales.objects.filter(user=request.user).filter(status='Processing').order_by('-sale_id')

    # Pagination
    paginator = Paginator(sales, 20)
    page = request.GET.get('page')
    pagedSales = paginator.get_page(page)

    context = {
        'sales': pagedSales
    }
    return render(request, 'sales/pending-orders.html', context)

# ------------------------------------------------------------------------------------------------------------------------------ #
def order_details(request, transactionRef):
    """ View for details on a single transaction.
    Queries the """
    orders = Sales.objects.filter(user=request.user).filter(transaction_ref=transactionRef)

    context = {
        'orders': orders
    }
    return render(request, 'sales/order-details.html', context)