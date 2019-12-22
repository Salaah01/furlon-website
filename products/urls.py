"""
==================================================================================================================================
Date Created:   08/12/2019
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Handles url routing for views related to the products.
These include the search page and detailed page on each product.
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.urls import path

# Local Imports
from . import views

urlpatterns = [
    path('search/', views.search, name='search'),
    path('search-results/', views.search_results, name='search_results'),
    path('<int:pk>', views.product, name='product')
]
