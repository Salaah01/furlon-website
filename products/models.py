"""
==================================================================================================================================
Date Created:   16/09/2019
Created By:     Salaah Amin
Last Update:    30/09/2019
==================================================================================================================================
SCRIPT FUNCTION

Script manages the database structure for the databases mentioned below.
Models primarily date on the products sold on Furlon.
==================================================================================================================================
"""

# IMPORTS
# Python Core Library
from datetime import datetime

# Third Party Imports
from django.db import models

# Local Imports
from stores.models import Stores
from django.contrib.auth.models import User


##################################################################################################################################
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

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.name

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Colour Families"


##################################################################################################################################
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
    hex_val = models.CharField(max_length=7, unique=True)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.name + ' ' + self.hex_val

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Colours"


##################################################################################################################################
class Rooms(models.Model):
    """
    PURPOSE:
    Contains the name of each available room.

    DEPENDENCIES:
    None

    TABLES DEPENDENT ON MODEL:
    - products_products: room
    """
    name = models.CharField(max_length=50, unique=True, primary_key=True)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.name

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Rooms"


##################################################################################################################################
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

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.name

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Categories"


##################################################################################################################################
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
    category = models.ForeignKey(
        Categories, on_delete=models.CASCADE, null=True)

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Sub Categories"


##################################################################################################################################
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
    category = models.ForeignKey(
        Categories, on_delete=models.CASCADE, null=True)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.name

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Features"


##################################################################################################################################
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
    The Following are shown as CharFields where their relationship is actually
    one-to-many
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
    store = models.ForeignKey(Stores, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    main_colour = models.BooleanField(default=True)
    room = models.ForeignKey(Rooms, on_delete=models.DO_NOTHING)

    category = models.ForeignKey(Categories, on_delete=models.DO_NOTHING)
    sub_categories = models.CharField(max_length=128, blank=True)

    colour = models.ForeignKey(Colours, on_delete=models.DO_NOTHING)

    height = models.FloatField(blank=True, null=True)
    height_units = models.CharField(max_length=10, null=True)
    length = models.FloatField(blank=True, null=True)
    length_units = models.CharField(max_length=10, null=True)
    width = models.FloatField(blank=True, null=True)
    width_units = models.CharField(max_length=10, null=True)
    weight = models.FloatField(blank=True, null=True)
    weight_units = models.CharField(max_length=10, null=True)

    features = models.CharField(max_length=100, blank=True)

    related = models.CharField(max_length=100, blank=True, null=True)

    showcase_image = models.ImageField(upload_to='products/')
    image_1 = models.ImageField(upload_to='products/', blank=True, null=True)
    image_2 = models.ImageField(upload_to='products/', blank=True, null=True)
    image_3 = models.ImageField(upload_to='products/', blank=True, null=True)
    image_4 = models.ImageField(upload_to='products/', blank=True, null=True)
    image_5 = models.ImageField(upload_to='products/', blank=True, null=True)
    image_6 = models.ImageField(upload_to='products/', blank=True, null=True)

    description = models.CharField(max_length=2048, default='', blank=True)

    price = models.FloatField()

    rating = models.FloatField(default=99)
    ratings = models.IntegerField(default=0)

    upload_date = models.DateTimeField(
        default=datetime.now,
        blank=True,
        null=True
    )
    last_purchase_date = models.DateTimeField(blank=True, null=True)
    inventory = models.IntegerField()

    delivery_available = models.BooleanField()
    delivery_price = models.FloatField(default=-1)
    status = models.CharField(max_length=10, default='Active')

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.name + " " + str(self.price)

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Products"


##################################################################################################################################
class RelationType(models.Model):
    """
    PURPOSE:
    Lists the types of relationships between two products can exist.

    DEPENDENCIES:
    None

    DEPENDENTS:
    - products_linkedproducts
    """
    relation = models.CharField(max_length=30, unique=True, primary_key=True)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.relation

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Relation Types"


##################################################################################################################################
class LinkedProducts(models.Model):
    """
    PURPOSE:
    Contains a list of products and it's related products where the relation could be a similar type of product, a product that
    matches and so go wells with the current product, and products which are of the same kind but of a different colour.

    DEPENDENCIES:
    - products_products: product
    - stores_stores: store

    DEPENDENTS:
    None
    """

    id = models.BigAutoField(primary_key=True)
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='product', default=0)
    related_product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='related_product', default=0)
    relation = models.ForeignKey(RelationType, on_delete=models.DO_NOTHING, default=0)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.product.name

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Linked Products"


##################################################################################################################################
class ProductFeatures(models.Model):
    """
    PURPOSE:
    Contains a list of features a product has.

    DEPENDENCIES:
    - products_products: product
    - products_features: feature

    DEPENDANTS:
    None
    """

    id = models.BigAutoField(primary_key=True)
    product = models.ForeignKey(Products, on_delete=models.CASCADE, default=0)
    feature = models.ForeignKey(Features, on_delete=models.DO_NOTHING, default=0)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.product.name +  ", " + self.feature.name

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Product Features"


##################################################################################################################################
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
    review_title = models.CharField(max_length=50, blank=True, null=True)
    comments = models.CharField(max_length=2048, blank=True, null=True)
    review_date = models.DateTimeField(default=datetime.now, blank=True)

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Product Reviews"
