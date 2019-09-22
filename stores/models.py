"""
=======================================================================================================================
Date Created:   16/09/2019
Created By:     Salaah Amin
Last Update:    17/09/2019
=======================================================================================================================
SCRIPT FUNCTION

Script manages the database structure for the databases mentioned below.
Models primarily include data on the stores who sell on Furlon.
=======================================================================================================================
"""

# IMPORTS
# Python Core Library
from datetime import datetime

# Third Party Imports
from django.db import models
from django.contrib.auth.models import User

# Local Imports
from misc.models import Countries, Cities


class Stores(models.Model):
    """
    PURPOSE:
    Contains data for each store.

    DEPENDENCIES:
    - misc_countries: country
    - misc_cities: city

    TABLES DEPENDENT ON MODEL:
    - products_products: store
    - store_deliveries: store
    - stores_storereviews: store
    """

    store_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=256)
    address_line_1 = models.CharField(max_length=256, blank=True)
    address_line_2 = models.CharField(max_length=256, blank=True)
    city = models.ForeignKey(Cities, on_delete=models.DO_NOTHING)
    postcode = models.CharField(max_length=10, blank=True)
    country = models.ForeignKey(Countries, on_delete=models.DO_NOTHING)
    telephone = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    website = models.URLField(blank=True)
    rating = models.FloatField(blank=True)
    longitude = models.FloatField(blank=True)
    latitude = models.FloatField(blank=True)
    max_delivery_distance = models.CharField(max_length=64, default='5')
    std_delivery_price = models.FloatField(default=0.00)
    description = models.CharField(max_length=2048, blank=True)
    established = models.DateField(blank=True)
    join_date = models.DateTimeField(default=datetime.now, blank=True)
    last_activity = models.DateTimeField(blank=True)
    status = models.CharField(max_length=16, default='Active')

    def __str__(self):
        return self.name + " " + self.address_line_1


class Deliveries(models.Model):
    """
    PURPOSE:
    Contains data on the deliveries made by each store.

    DEPENDENCIES:
    - stores_stores: store

    TABLES DEPENDENT ON MODEL:
    None
    """

    store = models.ForeignKey(Stores, on_delete=models.CASCADE)
    label = models.CharField(max_length=128)
    min_dist = models.CharField(max_length=8, default='0')
    max_dist = models.CharField(max_length=8)
    min_total = models.FloatField()
    max_total = models.FloatField()
    price = models.FloatField()


class StoreReviews(models.Model):
    """
    PURPOSE:
    Contains data on reviews about the store made by users.

    DEPENDENCIES:
    - stores_stores: store
    - auth.user = user

    TABLES DEPENDENT ON MODEL:
    None
    """
    
    store = models.ForeignKey(Stores, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    rating = models.FloatField()
    comments = models.CharField(max_length=2048, blank=True)
    review_date = models.DateTimeField(default=datetime.now, blank=True)