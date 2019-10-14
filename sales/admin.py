"""
================================================================================================================================
Date Created:   26/09/2019
Created By:     Salaah Amin
Last Update:    26/09/2019
================================================================================================================================
SCRIPT FUNCTION

Will allow access to the following tables via the admin page:
    - Invoices: sales_invoices
    - Sales: sales_sales
================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.contrib import admin

# Local Imports
from .models import *


##################################################################################################################################
class InvoicesAdmin(admin.ModelAdmin):
    """ Registers Invoices (sales_invoices) table to the admin page """
    list_display = ('invoice_id', 'sale_IDs', 'order_date', 'expected_delivery', 'grand_total')
    list_display_links = ('invoice_id',)
    search_fields = ('invoice_id', 'sale_IDs',)


##################################################################################################################################
class SalesAdmin(admin.ModelAdmin):
    """ Registers Sales (sales_sales) table to the admin page """
    list_display = ('sale_id', 'store', 'product', 'total',)
    list_display_links = ('sale_id',)
    search_fields = ('sale_id', 'store__name', 'store__address_line_1', 'product__name',)


admin.site.register(Invoices, InvoicesAdmin)
admin.site.register(Sales, SalesAdmin)
