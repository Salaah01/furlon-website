"""
==================================================================================================================================
Date Created:   19/09/2019
Created By:     Salaah Amin
Last Update:    19/09/2019
==================================================================================================================================
SCRIPT FUNCTION

Script manages the database structure for the databases mentioned below.
Models contain data regarding product sales.
==================================================================================================================================
"""

# IMPORTS
# Python Core Library
from datetime import datetime

# Third Party Imports
from django.db import models
from django.contrib.auth.models import User

# Local Imports
from misc.models import Countries, Cities
from stores.models import Stores
from products.models import Products


##################################################################################################################################
class Invoices(models.Model):
    """
    PURPOSE:
    Contains the top level data on invoices. The sales_sales table will
    contain the breakdown of each item in the invoice.

    This table along with the sales_sales will be used to replicate a
    dictionary with models_invoices being the key and sales_sales being the
    items of the dictionary.

    This table contains the sale_ids for rows of data in sales_sales.

    DEPENDENCIES:
    - misc_countries: countries
    - misc_cities: cities
    - auth_user: user

    DEPENDENCIES WITHOUT EXPLICIT RELATIONSHIP FIELD:
    The Following are shown as CharFields where their relationship is actually
    one-to-many
    - products_products: products
    - user_id: user (This in incase of guest login)

    TABLES DEPENDENT ON MODEL:
    - models_sales: invoice
    """

    invoice_id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, default=0)
    sale_IDs = models.CharField(max_length=500)
    order_date = models.DateTimeField(default=datetime.now)

    user = models.CharField(max_length=100, default='guest')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address_line_1 = models.CharField(max_length=256, blank=True)
    address_line_2 = models.CharField(max_length=256, blank=True)
    city = models.ForeignKey(Cities, on_delete=models.DO_NOTHING)
    postcode = models.CharField(max_length=10, blank=True)
    country = models.ForeignKey(Countries, on_delete=models.DO_NOTHING)
    telephone = models.CharField(max_length=20, blank=True)
    email = models.EmailField()

    expected_delivery = models.DateField()
    actual_delivery = models.DateTimeField(blank=True)
    delivered = models.BooleanField(default=False)
    deliv_time_from = models.TimeField(blank=True)
    deliv_time_to = models.TimeField(blank=True)

    total_delivery = models.FloatField()
    total_assembly = models.FloatField()
    tot_prods_exVat = models.FloatField()
    vat = models.FloatField()
    grand_total = models.FloatField()

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.invoice_id

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Invoices"


##################################################################################################################################
class Sales(models.Model):
    """
    PURPOSE:
    Contains the detailed information on each item on a given invoice.
    This table works alongside with sales_invoices in a dictionary kind of
    relationship with sales_invoices containing the keys
    and this take containing the items.

    Contains details for each item sold.

    DEPENDENCIES:
    - sales_invoices: invoice
    - stores_stores: store
    - products_products: products
    - auth_user: user

    TABLES DEPENDENT ON MODEL:
    - None
    """

    sale_id = models.BigAutoField(primary_key=True)
    transaction_ref = models.CharField(max_length=1000, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, default=0)
    store = models.ForeignKey(Stores, on_delete=models.DO_NOTHING)
    product = models.ForeignKey(Products, on_delete=models.DO_NOTHING)

    delivery = models.FloatField(default=0)
    assembly = models.FloatField(default=0)
    exVat = models.FloatField(default=0)
    vat = models.FloatField(default=0)
    total = models.FloatField(default=0)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return f'{self.sale_id}-{self.transaction_ref}'

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Sales"
