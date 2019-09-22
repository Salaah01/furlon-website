"""
=======================================================================================================================
Date Created:   16/09/2019
Created By:     Salaah Amin
Last Update:    17/09/2019
=======================================================================================================================
SCRIPT FUNCTION

Script manages the database structure for the databases mentioned below.
Models primarily date on the products sold on Furlon.
=======================================================================================================================
"""

# IMPORTS
# Python Core Library
from datetime import datetime

# Third Party Imports
from django.db import models

# Local Imports
from stores.models import Stores
from django.contrib.auth.models import User


class ColourFamilies(models.Model):
    """
    PURPOSE:
    Contains the top level/family name for each colour in the Colours table.
    This will allow users to filter colours.

    DEPENDENCIES:
    None

    TABLES DEPENDENT ON MODEL:
    products_colours: family
    """
    name = models.CharField(max_length=50, unique=True, primary_key=True)

    def __str__(self):
        return self.name


class Colours(models.Model):
    """
    PURPOSE:
    Contains the name and hex code of each available colour.

    DEPENDENCIES:
    - ColourFamilies: family

    DEPENDENCIES WITHOUT EXPLICIT RELATIONSHIP FIELD:
    - products_products: colour
    """

    col_families = models.CharField(max_length=50)
    name = models.CharField(max_length=50, unique=True)
    hex_val = models.CharField(max_length=9)

    def __str__(self):
        return self.name + ' ' + self.hex_


class Rooms(models.Model):
    """
    PURPOSE:
    Contains the name of each available room.

    DEPENDENCIES:
    None

    TABLES DEPENDENT ON MODEL:
    - products_products: room
    """

    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Categories(models.Model):
    """
    PURPOSE:
    Contains the name of each available category.

    DEPENDENCIES:
    None

    TABLES DEPENDENT ON MODEL:
    - products_products: category
    - products_features: category
    """

    cat_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return self.name


class SubCategories(models.Model):
    """
    PURPOSE:
    Table contains sub-categories for further refinement of search.

    DEPENDENCIES:
    product_categories: category

    TABLES DEPENDENT ON MODEL:
    products_products: sub_category
    """

    name = models.CharField(max_length=50)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)


class Features(models.Model):
    """
    PURPOSE:
    Contains the name of each available product feature.

    DEPENDENCIES:
    None

    TABLES DEPENDENT ON MODEL:
    - products_products: features
    """

    feature_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Products(models.Model):
    """
    PURPOSE:
    Table contains each product whether or not they are available.

    DEPENDENCIES:
    - stores_stores: store
    - products_categories: category
    - products_colours: colours
    - products_rooms: room

    DEPENDENCIES WITHOUT EXPLICIT RELATIONSHIP FIELD:
    The Following are shown as CharFields where their relationship is actually one-to-many
    - products_features: features
    - products_products: related
    - products_products: variations_with_alt_colours
    - products_products: variations_with_alt_sizes
    - products_subcategories: subcategories

    TABLES DEPENDENT ON MODEL:
    - products_productreviews: product
    """

    product_id = models.BigAutoField(primary_key=True)
    store = models.ForeignKey(Stores, on_delete = models.CASCADE)
    name = models.CharField(max_length=50)
    room = models.ForeignKey(Rooms, on_delete=models.DO_NOTHING)
    category = models.ForeignKey(Categories, on_delete=models.DO_NOTHING)
    sub_categories = models.CharField(max_length=128, blank=True)
    colour = models.ForeignKey(Colours, on_delete=models.DO_NOTHING)
    height = models.FloatField(blank=True)
    length = models.FloatField(blank=True)
    width = models.FloatField(blank=True)
    weight = models.FloatField(blank=True)
    features = models.CharField(max_length=100, blank=True)
    related = models.CharField(max_length=100, blank=True)
    variations_with_alt_colours = models.CharField(max_length=100, blank=True)
    variations_with_alt_sizes = models.CharField(max_length=100, blank=True)
    showcase_image = models.ImageField(upload_to=f'{store}/{product_id}/')
    image_1 = models.ImageField(upload_to=f'{store}/{product_id}/', blank=True)
    image_2 = models.ImageField(upload_to=f'{store}/{product_id}/', blank=True)
    image_3 = models.ImageField(upload_to=f'{store}/{product_id}/', blank=True)
    image_4 = models.ImageField(upload_to=f'{store}/{product_id}/', blank=True)
    image_5 = models.ImageField(upload_to=f'{store}/{product_id}/', blank=True)
    image_6 = models.ImageField(upload_to=f'{store}/{product_id}/', blank=True)
    description = models.CharField(max_length=2048, default='', blank=True)
    price = models.FloatField()
    rating = models.FloatField(blank=True)
    upload_date = models.DateTimeField(default=datetime.now, blank=True)
    last_purchase_date = models.DateTimeField(blank=True)
    inventory = models.IntegerField()
    delivery_available = models.BooleanField()
    delivery_price = models.FloatField(blank=True)
    status = models.CharField(max_length=10, default='Active')

    def __str__(self):
        return self.name + " " + self.price


class ProductReviews(models.Model):
    """
    PURPOSE:
    Table contains the product reviews.

    DEPENDENCIES:
    - products_products: product
    - stores_stores: store
    - auth_users: user

    TABLES DEPENDENT ON MODEL:
    - None
    """

    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    store = models.ForeignKey(Stores, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    rating = models.FloatField()
    comments = models.CharField(max_length=2048, blank=True)
    review_date = models.DateTimeField(default=datetime.now, blank=True)