"""
=================================================================================================================================
Date Created:   20/09/2019
Created By:     Salaah Amin
Last Update:   20/09/2019
=================================================================================================================================
SCRIPT FUNCTION

Sets how each path is handled.
=================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.urls import path

# Local Imports
from . import views


urlpatterns = [
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('register', views.register, name='register'),
    path('change-password', views.changePassword, name='change-password'),
    path('account', views.account, name='account'),
]