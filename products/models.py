"""
=======================================================================================================================
Date Created:   16/09/2019
Created By:     Salaah Amin
Last Update:    30/09/2019
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

    class Meta:
        verbose_name_plural = "Colour Families"


class Colours(models.Model):
    """
    PURPOSE:
    Contains the name and hex code of each available colour.

    DEPENDENCIES:
    - ColourFamilies: family

    TABLES DEPENDENT ON MODEL:
    products_colours: family
    """

    col_families = models.CharField(max_length=50)
    name = models.CharField(max_length=50, unique=True)
    hex_val = models.CharField(max_length=7)

    def __str__(self):
        return self.name + ' ' + self.hex_val

    class Meta:
        verbose_name_plural = "Colours"


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

    class Meta:
        verbose_name_plural = "Rooms"


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

    class Meta:
        verbose_name_plural = "Categories"


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

    class Meta:
        verbose_name_plural = "Sub Categories"


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

    class Meta:
        verbose_name_plural = "Features"


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
    - products_subcategories: subcategories

    TABLES DEPENDENT ON MODEL:
    - products_productreviews: product
    - products_relatedproductvars: product
    - products_relatedproductvars: main_product
    - products_productcolourvars: product
    - products_productcolourvars: main_col_prod
    """

    product_id = models.BigAutoField(primary_key=True)
    store = models.ForeignKey(Stores, on_delete = models.CASCADE)
    name = models.CharField(max_length=50)
    main_colour = models.BooleanField(default=True)
    room = models.ForeignKey(Rooms, on_delete=models.DO_NOTHING)
    category = models.ForeignKey(Categories, on_delete=models.DO_NOTHING)
    sub_categories = models.CharField(max_length=128, blank=True)
    colour = models.ForeignKey(Colours, on_delete=models.DO_NOTHING)
    height = models.FloatField(blank=True, null=True)
    length = models.FloatField(blank=True, null=True)
    width = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    features = models.CharField(max_length=100, blank=True)
    related = models.CharField(max_length=100, blank=True)
    showcase_image = models.ImageField(upload_to= 'products/')
    image_1 = models.ImageField(upload_to= 'products/', blank=True, null=True)
    image_2 = models.ImageField(upload_to= 'products/', blank=True, null=True)
    image_3 = models.ImageField(upload_to= 'products/', blank=True, null=True)
    image_4 = models.ImageField(upload_to= 'products/', blank=True, null=True)
    image_5 = models.ImageField(upload_to= 'products/', blank=True, null=True)
    image_6 = models.ImageField(upload_to= 'products/', blank=True, null=True)
    description = models.CharField(max_length=2048, default='', blank=True)
    price = models.FloatField()
    rating = models.FloatField(blank=True, null=True)
    upload_date = models.DateTimeField(default=datetime.now, blank=True, null=True)
    last_purchase_date = models.DateTimeField(blank=True, null=True)
    inventory = models.IntegerField()
    delivery_available = models.BooleanField()
    delivery_price = models.FloatField(blank=True, null=True)
    status = models.CharField(max_length=10, default='Active')

    def __str__(self):
        return self.name + " " + str(self.price)

    class Meta:
        verbose_name_plural = "Products"


class RelatedProductVars(models.Model):
    """
    PURPOSE:
    Table contains related products.
    In the main products table (product_products) can have various other items to it.
    This table will allow a related items be produced for each product.
    For each item which has a related item will have a seperate row for that related item.
    This will act as an one-to-many relationship.

    DEPENDENCIES:
    - products_products: product
    - products_products: linked

    TABLES DEPENDENT ON MODEL:
    - None
    """

    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='main_item')
    linked = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='related_product')

    def __str__(self):
        return self.product

    class Meta:
        verbose_name_plural = "Related Product Variations"


class ProductColourVars(models.Model):
    """
    PURPOSE:
    Table contains products linked to other products which are the same but of a different colour.
    This table will allow the user to select different colours at the front end.
    This will act as an one-to-many relationship.

    DEPENDENCIES:
    - products_products: product
    - products_products: linked

    TABLES DEPENDENT ON MODEL:
    - None
    """

    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='main_col_prod')
    linked = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='related_colour_prod')


    def __str__(self):
        return self.product

    class Meta:
        verbose_name_plural = "Related Colour Variations"


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

    class Meta:
        verbose_name_plural = "Product Reviews"