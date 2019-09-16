from django.db import models
from datetime import datetime
from stores.models import Stores
from django.contrib.auth.models import User


class Colours(models.Model):
    name = models.CharField(max_length=50, unique=True)
    hex_val = models.CharField(max_length=9)

    def __str__(self):
        return self.name + ' ' + self.hex_


class Rooms(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Categories(models.Model):
    cat_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class Features(models.Model):
    feature_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


"""
The Following are shown as CharFields where their relationship is actually one-to-many as defined:
features: Features
related: Products
variations_with_alt_colours: Products
variations_with_alt_sizes: Products
"""
class Products(models.Model):
    product_id = models.BigAutoField(primary_key=True)
    store_id = models.ForeignKey(Stores, on_delete = models.CASCADE)
    name = models.CharField(max_length=50)
    room = models.ForeignKey(Rooms, on_delete=models.DO_NOTHING)
    category = models.ForeignKey(Categories, on_delete=models.DO_NOTHING)
    colour = models.ForeignKey(Colours, on_delete=models.DO_NOTHING)
    height = models.FloatField(blank=True)
    length = models.FloatField(blank=True)
    width = models.FloatField(blank=True)
    weight = models.FloatField(blank=True)
    features = models.CharField(max_length=100, blank=True)
    related = models.CharField(max_length=100, blank=True)
    variations_with_alt_colours = models.CharField(max_length=100, blank=True)
    variations_with_alt_sizes = models.CharField(max_length=100, blank=True)
    showcase_image = models.ImageField(upload_to=f'{store_id}/{product_id}/')
    image_1 = models.ImageField(upload_to=f'{store_id}/{product_id}/', blank=True)
    image_2 = models.ImageField(upload_to=f'{store_id}/{product_id}/', blank=True)
    image_3 = models.ImageField(upload_to=f'{store_id}/{product_id}/', blank=True)
    image_4 = models.ImageField(upload_to=f'{store_id}/{product_id}/', blank=True)
    image_5 = models.ImageField(upload_to=f'{store_id}/{product_id}/', blank=True)
    image_6 = models.ImageField(upload_to=f'{store_id}/{product_id}/', blank=True)
    description = models.CharField(max_length=2048, default='', blank=True)
    price = models.FloatField()
    rating = models.FloatField(blank=True)
    upload_date = models.DateTimeField(default=datetime.now, blank=True)
    last_purchase_date = models.DateTimeField(blank=True)
    inventory = models.IntegerField()
    status = models.CharField(max_length=10, default='Active')

    def __str__(self):
        return self.name + " " + self.price


class ProductReviews(models.Model):
    product_id = models.ForeignKey(Products, on_delete=models.CASCADE)
    store_id = models.ForeignKey(Stores, on_delete=models.CASCADE)
    user = models.CharField(max_length=50, blank=True)
    rating = models.FloatField()
    comments = models.CharField(max_length=2048, blank=True)
    review_date = models.DateTimeField(default=datetime.now, blank=True)