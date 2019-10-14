"""
==================================================================================================================================
Date Created:   26/09/2019
Created By:     Salaah Amin
Last Update:    26/09/2019
==================================================================================================================================
SCRIPT FUNCTION

Will allow access to the following tables via the admin page:
    - Stores: stores_stores
    - Deliveries: stores_deliveries
    - StoreReviews: stores_storereviews
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.contrib import admin

# Local Imports
from .models import Stores, Deliveries, StoreReviews


##################################################################################################################################
class StoresAdmin(admin.ModelAdmin):
    """ Registers Stores (stores_stores) table to the admin page """
    list_display = ('name', 'postcode', 'city', 'country', 'rating', 'ratings', 'last_activity', 'status', )
    list_display_links = ('name', )
    search_fields = ('name', 'postcode', 'address_line_1', )
    list_filter = ('status', )


##################################################################################################################################
class DeliveriesAdmin(admin.ModelAdmin):
    """ Registers Deliveries (stores_deliveries) table to the admin page """
    list_display = ('store', 'label', 'price', 'min_dist', 'max_dist', 'min_total', 'max_total', )
    list_display_links = ('store', 'label', )
    search_fields = ('store__name', 'store__address_line_1', 'store__postcode', 'label', )


##################################################################################################################################
class StoreReviewsAdmin(admin.ModelAdmin):
    """ Registers Store Reviews (stores_storereviews) table to thEadmin page """
    list_display = ('store', 'user', 'rating', 'review_date', )
    list_display_links = ('store', )
    search_fields = ('store__name', 'store__address_line_1', 'user__username', 'user__email', 'rating', )


admin.site.register(Stores, StoresAdmin)
admin.site.register(Deliveries, DeliveriesAdmin)
admin.site.register(StoreReviews, StoreReviewsAdmin)
