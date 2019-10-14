"""
=================================================================================================================================
Date Created:   17/09/2019
Created By:     Salaah Amin
Last Update:   17/09/2019
=================================================================================================================================
SCRIPT FUNCTION

Script manages the database structure for the databases mentioned below.
Script contains models which house miscellaneous data.
=================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.db import models

# Local Imports


##################################################################################################################################
class Countries(models.Model):
    """
    PURPOSE:
    Contains list of all the countries in the globe.

    DEPENDENCIES:
    None

    TABLES DEPENDENT ON MODEL:
    - accounts_customerdetails: country
    - stores_stores: country_code
    """

    country_code = models.CharField(
        max_length=3,
        primary_key=True,
        unique=True
    )
    name = models.CharField(
        max_length=50,
        unique=True
    )

# --------------------------------------------------------------------------- #
    def __str__(self):
        return self.name

# --------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Countries"


###############################################################################
class Cities(models.Model):
    """
    PURPOSE:
    Contains list of cities in the globe.
    Please note that this list is not complete and so some cities many need to
    be added at a later stage.

    DEPENDENCIES:
    misc_countries: country_code

    TABLES DEPENDENT ON MODEL:
    - accounts_customerdetails: country
    - stores_stores: city
    """

    city_id = models.AutoField(primary_key=True)
    country_code = models.ForeignKey(Countries, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=128)

# --------------------------------------------------------------------------- #
    def __str__(self):
        return self.name

# --------------------------------------------------------------------------- #
    class Meta:
        verbose_name_plural = "Cities"
