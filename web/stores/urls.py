"""
==================================================================================================================================
Date Created:   08/01/2020
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Handles url routing for views related to the stores.
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.urls import path

# Local Imports
from . import views

urlpatterns = [
    path('<int:pk>', views.store, name='store'),
]
