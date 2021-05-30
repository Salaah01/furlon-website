"""
==================================================================================================================================
Date Created:   31/12/2019
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Handles url routing for views related to the sales.
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.urls import path

# Local Imports
from . import views

urlpatterns = [
    path('order-history/', views.order_history, name='order-history'),
    path('pending-orders/', views.pending_orders, name='pending-orders'),
    path('order-history/details/<str:transactionRef>', views.order_details, name='order-details')
]
