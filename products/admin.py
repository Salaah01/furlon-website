"""
=======================================================================================================================
Date Created:   26/09/2019
Created By:     Salaah Amin
Last Update:    26/09/2019
=======================================================================================================================
SCRIPT FUNCTION

Will allow access to the following tables via the admin page:
    - ColourFamilies: products_colourfamilies
    - Colours: products_colours
    - Rooms: products_rooms
    - Categories: products_categories
    - SubCategories: products_subcategories
    - Features: products_features
    - Products: products_products
    - RelatedProductVars: products_relatedproductvars
    - ProductColourVars: products_productcolourvars
    - ProductReviews: products_productreviews
=======================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.contrib import admin

# Local Imports
from .models import *


###############################################################################
class ColourFamiliesAdmin(admin.ModelAdmin):
    """ Registers Colour Families (products_colourfamilies) table to the
    admin page """
    list_display = ('name',)
    list_display_links = ('name',)
    search_fields = ('name',)


###############################################################################
class ColoursAdmin(admin.ModelAdmin):
    """ Registers Colours (products_colours) table to the admin page """
    list_display = ('col_families', 'name', 'hex_val')
    list_display_links = ('col_families', )
    search_fields = ('name',)


###############################################################################
class RoomsAdmin(admin.ModelAdmin):
    """ Registers Rooms (products_rooms) table to the admin page """
    list_display = ('name',)
    list_display_links = ('name',)
    search_fields = ('name',)


###############################################################################
class CategoriesAdmin(admin.ModelAdmin):
    """ Registers Categories (products_categories) table to the admin page """
    list_display = ('name',)
    list_display_links = ('name',)
    search_fields = ('name',)


###############################################################################
class SubCategoriesAdmin(admin.ModelAdmin):
    """ Registers Sub Categories (products_subcategories) table to the
    admin page """
    list_display = ('name', 'category')
    list_display_links = ('name',)
    search_fields = ('name', 'category__name',)
    list_filter = ('name', 'category',)


###############################################################################
class FeaturesAdmin(admin.ModelAdmin):
    """ Registers Features (products_features) table to the admin page """
    list_display = ('name', 'category',)
    list_display_links = ('name',)
    list_filter = ('category',)
    search_fields = ('name', 'category__name',)


###############################################################################
class ProductsAdmin(admin.ModelAdmin):
    """ Registers Products (products_products) table to the admin page """
    list_display = ('name', 'store', 'price', 'rating', 'room', 'category',
                    'sub_categories', 'colour', 'inventory', 'status',
                    'upload_date', 'last_purchase_date',)
    list_display_links = ('name',)
    list_filter = ('category', 'status', 'room',)
    search_fields = ('name', 'store__name', 'store__postcode',
                     'room__name', 'category__name',)


###############################################################################
class RelatedProductVarsAdmin(admin.ModelAdmin):
    """ Registers Related Product Variations (products_relatedproductvars)
    table to the admin page """
    list_display = ('product', 'linked',)
    list_display_links = ('product',)
    search_fields = ('product__name', 'linked__name',)


###############################################################################
class ProductColourVarsAdmin(admin.ModelAdmin):
    """ Registers Product Colour Variations (products_productcolourvars) table
    to the admin page """
    list_display = ('product', 'linked',)
    list_display_links = ('product',)
    search_fields = ('product__name', 'linked__name',)


###############################################################################
class ProductReviewsAdmin(admin.ModelAdmin):
    """ Registers Product Reviews (products_productreviews) table
    to the admin page """
    list_display = ('product', 'store', 'user', 'rating', 'review_date')
    list_display_links = ('product', )
    search_fields = ('product__name', 'store__name', 'store__name',
                     'user__first_name', 'user__last_name', 'user__email',
                     'user__username',)


admin.site.register(ColourFamilies, ColourFamiliesAdmin)
admin.site.register(Colours, ColoursAdmin)
admin.site.register(Rooms, RoomsAdmin)
admin.site.register(Categories, CategoriesAdmin)
admin.site.register(SubCategories, SubCategoriesAdmin)
admin.site.register(Features, FeaturesAdmin)
admin.site.register(Products, ProductsAdmin)
admin.site.register(RelatedProductVars, RelatedProductVarsAdmin)
admin.site.register(ProductColourVars, ProductColourVarsAdmin)
admin.site.register(ProductReviews, ProductReviewsAdmin)
