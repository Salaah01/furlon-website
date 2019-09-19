"""
=======================================================================================================================
Date Created:   20/09/2019
Created By:     Salaah Amin
Last Update:   20/09/2019
=======================================================================================================================
SCRIPT FUNCTION

Creates the views for the following pages:

index:      /
=======================================================================================================================
"""

from django.shortcuts import render


def index(request):
    """ Loads the Index Page """
    context = {}
    return render(request, 'pages/index.html', context)