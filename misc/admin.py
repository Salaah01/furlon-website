"""
=================================================================================================================================
Date Created:   26/09/2019
Created By:     Salaah Amin
Last Update:    26/09/2019
=================================================================================================================================
SCRIPT FUNCTION

Will allow access to the following tables via the admin page:
    - Countries: misc_countries
    - Cities: misc_cities
=================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.contrib import admin

# Local Imports
from .models import Countries, Cities


##################################################################################################################################
class CountriesAdmin(admin.ModelAdmin):
    """ Registers Countries (misc_countries) table to the admin page """
    list_display = ('country_code', 'name',)
    list_display_links = ('country_code', 'name',)
    search_fields = ('country_code', 'name',)


##################################################################################################################################
class CitiesAdmin(admin.ModelAdmin):
    """ Registers Cities (misc_cities) table to the admin page """
    list_display = ('name', 'country_code',)
    list_filter = ('country_code',)
    list_display_links = ('name',)
    search_fields = ('country_code__country_code', 'country_code__name', 'name',)


admin.site.register(Countries, CountriesAdmin)
admin.site.register(Cities, CitiesAdmin)
