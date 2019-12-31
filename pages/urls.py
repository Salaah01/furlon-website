"""
==================================================================================================================================
Date Created:   20/09/2019
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Sets how each path is handled.
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.urls import path

# Local Imports
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('basket/', views.basket, name='basket')
]
