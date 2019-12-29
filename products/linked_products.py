"""
================================================================================================================================
Date Created:   26/12/2019
Created By:     Salaah Amin
================================================================================================================================
SCRIPT FUNCTION

Queries the database and linked products when given a product key and some parameters to match.
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
class LinkedProducts:
    """ Queries the products_linkedproducts table and retrieves a collection or linked products based on the criterion provided.
    """

    # -------------------------------------------------------------------------------------------------------------------------- #
    def __init__(self, pk):
        """
        pk [int]:       primary key of a product.
        """
        self.pk = pk

        self.cursor = connection.cursor()
        self.linkedProducts = self.get_linked_products()

    # -------------------------------------------------------------------------------------------------------------------------- #
    def get_linked_products(self):
        """ Will decide which method is run based on the relation argument provide. """

        return json.dumps(
            {
                "colours": self.get_colours(),
                "sets": self.get_sets(),
                "similar": self.get_similar()
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
    def query_results_to_dict(self, queryResults, keys):
        """ Using keys and query results, builds and returns the results as a dictionary. """
        results = []
        for queryResult in queryResults:
            results.append(dict(zip(keys, queryResult)))

        return results
