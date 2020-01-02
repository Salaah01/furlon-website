"""
================================================================================================================================
Date Created:   26/12/2019
Created By:     Salaah Amin
================================================================================================================================
SCRIPT FUNCTION

Queries the database to retrieve additional information realting to a product. This includes related products, features,
sub-categories and other bits of data where otherwise a one-to-many relationship have to exist between a field in
products_products and another table.

OUTPUT
Each method in the class returns the following information as JSON:

METHOD                  DESCRIPTION
get_colours             Product of the kind but of other colours.
get_features            The features of the current product.
get_sets                Products which along with the current product make up a set.
get_similar             Other products which are similar to the current product.
this_product_info       Information regarding the current product.
================================================================================================================================
"""

# Python Library Imports
from datetime import datetime
import json

# Third Party Library Imports
from django.db import connection

# Local Imports
from .models import Products, Colours


# ================================================================================================================================
class Productinfo:
    """ Queries the database to retrieve additional information realting to a product. This includes related products, features,
        sub-categories and other bits of data where otherwise a one-to-many relationship have to exist between a field in
        products_products and another table.

        A list of desired information must be provied (infoList). The list can contain the following elements:

        ELEMENT                     DESCRIPTION                                             REQUIRED KWARGS
        colours                     Products which are other colour variations of the       pk - product primary key
                                    same product.
        sets                        Products which along with the current product make      pk - product primary key
                                    a set.
        similar                     Products which are similar to the current product       pk - product primary key
        features                    Features of the current product                         pk - product primary key
        multipleProducts            Basic information of a lit of products                  pks - list of product primary keys
    """

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __init__(self, infoList, **kwargs):
        """
        infoList (str[])    list of information to be collected. Each list item will add another element to the final JSON. See
                            class docstring for information on valid list items.

        Using the infoList and/or pk, different methods will be called in order to product a JSON containing information produced
        by each method.
        """
        self.infoList = infoList
        self.pk = kwargs.get('pk', None)
        self.pks = kwargs.get('pks', None)
        self.kwargs = kwargs

        self.cursor = connection.cursor()
        self.productInfo = self.get_product_info()

    # -------------------------------------------------------------------------------------------------------------------------- #
    def get_product_info(self):
        """ Will decide which method is run based on the relation argument provide. """

        results = {}
        if 'colours' in self.infoList:
            results['colours'] = self.get_colours()

        if 'sets' in self.infoList:
            results['sets'] = self.get_sets()

        if 'similar' in self.infoList:
            results['similar'] = self.get_similar()

        if 'features' in self.infoList:
            results['features'] = self.get_features()


        return json.dumps(
            {
                "colours": self.get_colours(),
                "sets": self.get_sets(),
                "similar": self.get_similar(),
                "features": self.get_features(),
            }
        )

    # -------------------------------------------------------------------------------------------------------------------------- #
    def get_colours(self):
        """ Gets products of the same kind of which there are different colours """
        sql = """
            SELECT pp.product_id, pcol.name, pcol.hex_val
            FROM products_products pp, products_colours pcol
            WHERE pp.product_id IN (
                SELECT plp.related_product_id
                FROM products_products pp
                INNER JOIN products_linkedproducts plp ON pp.product_id = plp.product_id
                WHERE pp.product_id = %s
                AND plp.relation_id = 'colour'
            )
            AND pp.colour_id = pcol.id
            """

        keys = ('product_id', 'col_name', 'col_hex_val')

        self.cursor.execute(sql, [self.pk])
        queryResults = self.cursor.fetchall()

        return self.query_results_to_dict(queryResults, keys)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def get_sets(self):
        """ Gets linked products that are a set of this product """
        sql = """
        SELECT pp.name, pp.product_id, pp.showcase_image, pp.price
        FROM products_products pp
        WHERE pp.product_id IN (
            SELECT plp.related_product_id
            FROM products_linkedproducts plp
            WHERE plp.product_id = %s
            AND plp.relation_id = 'set'
        )
        """

        keys = ('name', 'product_id', 'showcase_image', 'price')

        self.cursor.execute(sql, [self.pk])
        queryResults = self.cursor.fetchall()

        return self.query_results_to_dict(queryResults, keys)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def get_similar(self):
        """ Gets similar products """
        sql = """
        SELECT pp.name, pp.product_id, pp.showcase_image, pp.price
        FROM products_products pp
        WHERE pp.product_id IN (
            SELECT plp.related_product_id
            FROM products_linkedproducts plp
            WHERE plp.product_id = %s
            AND plp.relation_id = 'similar'
        )
        """

        keys = ('name', 'product_id', 'showcase_image', 'price')

        self.cursor.execute(sql, [self.pk])
        queryResults = self.cursor.fetchall()

        return self.query_results_to_dict(queryResults, keys)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def get_features(self):
        """ Gets a list of feature names for a given product """
        sql = """
        SELECT f.name
        FROM products_features f
        WHERE f.feature_id = (
            SELECT pf.feature_id
            FROM products_productfeatures pf
            WHERE pf.feature_id = f.feature_id
            AND pf.product_id = %s
        )
        """

        keys = ('name', )

        self.cursor.execute(sql, [self.pk])
        queryResults = self.cursor.fetchall()

        return self.query_results_to_dict(queryResults, keys)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def multiple_products_info(self):
        """ Returns information of the the products specified by the list of product IDs """
        productIDs = self.kwargs['pks']

        # When building the SQL, if the length of the list is 1, then the tuple equivalent will be (product_id, ).
        # This will not work in the SQL due to the empty item after the comma, so in such cases place a dummy value.
        if len(productIDs) == 1:
            productIDs.append('dummy')

        sql = """
            SELECT pp.product_id, pp.name, ss.store_id, ss.name, pcol.name, pp.inventory, pp.price, pp.showcase_image
            FROM products_products pp, stores_stores ss, products_colours pcol
            WHERE pp.store_id = ss.store_id
            AND pp.colour_id = pcol.id
            AND pp.product_id in (%s)
            """

        keys = ('productId', 'productName', 'storeId', 'storeName', 'colourName', 'inventory', 'price', 'image')

        self.cursor.execute(sql, tuple(productIDs))
        queryResults = self.cursor.fetchall()

        return self.query_results_to_dict(queryResults, keys)

    # -------------------------------------------------------------------------------------------------------------------------- #
    def query_results_to_dict(self, queryResults, keys):
        """ Using keys and query results, builds and returns the results as a dictionary. """
        results = []
        for queryResult in queryResults:
            results.append(dict(zip(keys, queryResult)))

        return results
