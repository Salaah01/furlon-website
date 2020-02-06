"""
==================================================================================================================================
Date Created:   06/02/2020
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION
Context manager for the categories page.
Class will will a context dictionary (self.context)

ARGUMENTS
methods [dict]: A dictionary containing the name of the context item as the key
                and the name of a method as the argument. The name will be set
                as the key name in the context object and the value will be the
                returned value of the method called. For example:
                If the method = {'abc': 'a', 'bbb': 'b'} then methods self.a
                and self.b will be called and the final context will be:
                context = {
                    'abc': a(),
                    'bbb: 'b'
                }

**kwargs [dict]:    A dictionary of additional arguments that may be needed from
                    some of the other methods.

==================================================================================================================================
"""

# Python Library Imports

# Third Party Library Imports

# Local Imports
import corefunctions


# ================================================================================================================================
class CategoriesContextManger:

    # ----------------------------------------------------------------------------------------------------------------------------
    def __init__(self, methods, **kwargs):
        """ Builds a context manager using the methods dictionary where each
        key will the key in the context dictionary and each value will be
        a method called where the returned value will be added to the context
        dictionary.

        **kwargs should contain any additional attributes the methods may need.
        """

        self.kwargs = kwargs

        self.context = {}
        for methodName, method in methods.items():
            self.context.update({methodName: getattr(self, method)()})

    # ----------------------------------------------------------------------------------------------------------------------------
    def get_category_subcategories(self):
        """ Get all the sub-categories which belong to self.category """
        sql = """
        SELECT psc.id, psc.name
        FROM products_subcategories psc
        WHERE psc.category_id = (SELECT pcat.cat_id
                                 FROM products_categories pcat
                                 WHERE pcat.name = %s)
        """

        bindVars = [self.kwargs['category']]
        keys = ['id', 'name']

        return corefunctions.DatabaseQuery(sql, bindVars, keys)

    # ----------------------------------------------------------------------------------------------------------------------------
    def get_category_products(self):
        """ Get all the products that belong to this category.
        Will also retrieve the store_id and store_name.
        """
        sql = """
            SELECT pp.product_id, pp.name, pp.height, pp.height_units, pp.length,
                pp.length_units, pp.width, pp.width_units, pp.features,
                pp.showcase_image, pp.price, pp.store_id, ss.name
            FROM products_products pp, stores_stores ss
            WHERE pp.store_id = ss.store_id
            AND pp.category_id = (SELECT pcat.cat_id
                                FROM products_categories pcat
                                WHERE pcat.name = %s)
            """
        bindVars = [self.kwargs['category']]

        keys = ['id', 'name', 'height', 'height_units', 'length', 'length_units'
                'width', 'width_units', 'features', 'showcase_image', 'price',
                'store_id', 'store_name']

        return corefunctions.DatabaseQuery(sql, bindVars, keys)
