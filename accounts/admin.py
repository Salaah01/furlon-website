"""
==================================================================================================================================
Date Created:   26/09/2019
Created By:     Salaah Amin
Last Update:    26/09/2019
==================================================================================================================================
SCRIPT FUNCTION

Will allow access to the following tables via the admin page:
    - CustomerDetails: accounts_customerdetails
    - StoreUsers: accounts_storeusers
    - StoreRights: accounts_storerights
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.contrib import admin

# Local Imports
from .models import CustomerDetails, StoreRights, StoreUsers


##################################################################################################################################
class CustomerDetailsAdmin(admin.ModelAdmin):
    """ Registers Customer Details (accounts_customerdetails) table to the
    admin page """
    list_display = ('user_id', 'city', 'postcode', 'country', 'status', 'verified', 'opt_in')
    list_display_links = ('user_id', )
    list_filter = ('verified', 'status', 'opt_in', )
    list_editable = ('verified', 'opt_in', )
    search_fields = ('user_id__id', 'user_id__first_name', 'user_id__last_name', 'user_id__email', 'user_id__username', )


##################################################################################################################################
class StoreUserAdmin(admin.ModelAdmin):
    """ Registers Store User (accounts_storeuser) table to the admin page """
    list_display = ('user_id', 'store_id', 'title', 'rights', 'status')
    list_display_links = ('user_id', )
    list_filter = ('status', )
    search_fields = ('user_id__first_name', 'user_id__last_name', 'user_id__email', 'user_id__username', 'store_id__name',
                     'store_id__id', 'store_id__postcode', )


##################################################################################################################################
class StoreRightsAdmin(admin.ModelAdmin):
    """
    Registers Store Rights (accounts_storerights) table to the admin page
    """
    list_display = ('rights',)
    list_display_links = ('rights',)
    search_fields = ('rights',)


admin.site.register(CustomerDetails, CustomerDetailsAdmin)
admin.site.register(StoreUsers, StoreUserAdmin)
admin.site.register(StoreRights, StoreRightsAdmin)
