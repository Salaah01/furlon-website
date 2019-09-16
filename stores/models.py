from django.db import models
from datetime import datetime
from django.contrib.auth.models import User


class Countries(models.Model):
    country_code = models.AutoField(primary_key=True)
    name = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return self.name


class Cities(models.Model):
    city_id = models.AutoField(primary_key=True)
    country_code = models.ForeignKey(Countries, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name

class Stores(models.Model):
    store_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=256)
    address_line_1 = models.CharField(max_length=256, blank=True)
    address_line_2 = models.CharField(max_length=256, blank=True)
    city = models.ForeignKey(Cities, on_delete=models.DO_NOTHING)
    postcode = models.CharField(max_length=10, blank=True)
    country_code = models.ForeignKey(Countries, on_delete=models.DO_NOTHING)
    telephone = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    website = models.URLField(blank=True)
    rating = models.FloatField(blank=True)
    longitude = models.FloatField(blank=True)
    latitude = models.FloatField(blank=True)
    nax_delivery_distance = models.CharField(max_length=64, default='5')
    std_delivery_price = models.FloatField(default=0.00)
    description = models.CharField(max_length=2048, blank=True)
    established = models.DateField(blank=True)
    join_date = models.DateTimeField(default=datetime.now, blank=True)
    last_activity = models.DateTimeField(blank=True)
    status = models.CharField(max_length=16, default='Active')

    def __str__(self):
        return self.name + " " + self.address_line_1


class Deliveries(models.Model):
    store_id = models.ForeignKey(Stores, on_delete=models.CASCADE)
    label = models.CharField(max_length=128)
    min_dist = models.CharField(max_length=8, default='0')
    max_dist = models.CharField(max_length=8)
    min_total = models.FloatField()
    max_total = models.FloatField()
    price = models.FloatField()


class StoreReviews(models.Model):
    store_id = models.ForeignKey(Stores, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    rating = models.FloatField()
    comments = models.CharField(max_length=2048, blank=True)
    review_date = models.DateTimeField(default=datetime.now, blank=True)