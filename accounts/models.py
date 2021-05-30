"""
==================================================================================================================================
Date Created:   16/09/2019
Created By:     Salaah Amin
Last Update:    17/09/2019
==================================================================================================================================
SCRIPT FUNCTION

Script manages the database structure for the databases mentioned below.
Models include an extension of Django's user table.
Models primarily include that which involve store user and customer details
where the user table has been extended to include additional date.
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.db import models
from django.contrib.auth.models import User

# Local Imports
from stores.models import Stores
from misc.models import Countries, Cities


##################################################################################################################################
class StoreRights(models.Model):
    """
    PURPOSE:
    Contains the user rights a store user can be assigned.

    DEPENDENCIES:
    None

    TABLES DEPENDENT ON MODEL:
    - accounts_storeusers: rights
    """

    rights = models.CharField(max_length=256, blank=True)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __str__(self):
        return self.rights

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Store Rights"


##################################################################################################################################
class StoreUsers(models.Model):
    """
    PURPOSE:
    Contains the users associated with a store. This table extends of Django's
    user table and stores additional
    information about any user who is an employee of the store and may need to
    login to view/edit store/product details.

    DEPENDENCIES:
    - auth_user: user_id
    - stores_stores: store_id
    - accounts_storerights: rights

    TABLE DEPENDENT ON THIS MODEL
    None
    """

    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    store_id = models.ForeignKey(Stores, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=100, blank=True)
    rights = models.ForeignKey(StoreRights, on_delete=models.DO_NOTHING)
    status = models.CharField(max_length=20, default='Active')

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Store Users"


##################################################################################################################################
class CustomerDetails(models.Model):
    """
    PURPOSE:
    An extension of the Django user's table which includes additional
    information on customers who have signed up.

    DEPENDENCIES:
    - auth_user: user_id
    - misc_cities: city
    - misc_countries: country

    TABLE DEPENDENT ON THIS MODEL
    None
    """

    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    address_line_1 = models.CharField(max_length=128, blank=True)
    address_line_2 = models.CharField(max_length=128, blank=True)
    postcode = models.CharField(max_length=10, blank=True)
    city = models.ForeignKey(Cities, on_delete=models.DO_NOTHING)
    country = models.ForeignKey(Countries, on_delete=models.DO_NOTHING)
    telephone = models.CharField(max_length=20, blank=True)
    status = models.CharField(max_length=20, default='Active')
    verified = models.BooleanField(default=False)
    opt_in = models.BooleanField(default=False)

    # -------------------------------------------------------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Customer Details"
