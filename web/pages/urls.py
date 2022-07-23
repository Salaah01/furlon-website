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
    path('basket/', views.basket, name='basket'),
    path('basket-info-API/', views.basket_info_api, name='basketInfoAPI'),
    path('help/', views.help, name='help'),
    path('categories/beds/', views.categories_beds, name='categories-beds'),
    path('categories/wardrobes/', views.categories_wardrobes, name='categories-wardrobes'),
    path('categories/tables/', views.categories_tables, name='categories-tables'),
    path('categories/sofas/', views.categories_sofas, name='categories-sofas'),
    path('categories/bookcases-and-shelves/', views.categories_bookcases_shelves, name='categories-bookcases-shelves'),
]
