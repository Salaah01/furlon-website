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
import copy

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

        if 'categoryName' in kwargs:
            self.categoryName = kwargs['categoryName']

        self.queryCache = {}

        self.context = {}
        for methodName, method in methods.items():
            self.context.update({methodName: getattr(self, method)()})

    # ----------------------------------------------------------------------------------------------------------------------------
    def get_category_id(self):
        """ Lazy getter for getting category ID """
        if not hasattr(self, 'categoryID') and not hasattr(self, 'category'):
            sql = """
                SELECT cat_id
                FROM products_categories
                WHERE name = %s
                """

            self.categoryID = corefunctions.DatabaseQuery(
                sql, self.categoryName)

        return self.categoryID

    # ----------------------------------------------------------------------------------------------------------------------------
    def get_subcategories_details(self):
        """ Get all the sub-categories which belong to self.category """
        if not self.queryCache.get('categorySubcategories'):

            sql = """
            SELECT psc.id, psc.name
            FROM products_subcategories psc
            WHERE psc.category_id = %s
            """

            keys = ['id', 'name']

            self.queryCache['categorySubcategories'] = corefunctions.DatabaseQuery(
                sql, self.get_category_id(), keys
            )

        return self.queryCache['categorySubcategories']

    # ----------------------------------------------------------------------------------------------------------------------------
    def get_product_details(self):
        """ Get all the products that belong to this category.
        Will also retrieve the store_id and store_name.
        """
        if not self.queryCache.get('categoryProducts'):
            sql = """
                SELECT pp.product_id, pp.name, pp.height, pp.height_units,
                    pp.length, pp.length_units, pp.width, pp.width_units,
                    pp.sub_categories, pp.features, pp.showcase_image, pp.price,
                    pp.store_id, ss.name
                FROM products_products pp, stores_stores ss
                WHERE pp.store_id = ss.store_id
                AND pp.category_id = %s
                """

            keys = ['id', 'name', 'height', 'height_units', 'length',
                    'length_units', 'width', 'width_units', 'sub_categories',
                    'features', 'showcase_image', 'price', 'store_id',
                    'store_name']

            self.queryCache['categoryProducts'] = corefunctions.DatabaseQuery(
                sql,
                self.get_category_id(),
                keys
            )

        return self.queryCache['categoryProducts']

    # ----------------------------------------------------------------------------------------------------------------------------
    def get_products_by_subcategory(self):
        """ Returns a dictionary of subcategories belonging to a given category
        with a list of dictionaries as the values where each dictionary is a
        product of the subcategory.
        """

        # List of dictionaries containing subcategory ids (id) and names (name).
        subCats = self.get_subcategories_details()

        # Later, the subCats object will need to iterated over, to avoid this,
        # will convert the entire object into a dictionary in the format
        # id: name.
        subCats = {str(subCat['id']): subCat['name'] for subCat in subCats}

        # products_products has the column "sub_categories" which is a comma
        # seperated array of sub category IDs.
        productDetails = copy.deepcopy(self.get_product_details())

        productsBySubCats = {}
        for product in productDetails:
            # Though in theory this should not be the case, some products may
            # not have a subcategory. Script set to check if the product has
            # subcategories, not doing this set may cause the script to crash.
            # TODO: Use such information to build an automated error logger.
            if product['sub_categories']:
                productSubCats = product['sub_categories'].split(',')

                for productSubCat in productSubCats:
                    # The subcategory may not be a valid subcategory.
                    # Therefore, before proceeding, check if it can be found in
                    # the subCats dictionary.
                    # TODO: Use such information to build an automated error
                    # logger.
                    subCatName = subCats.get(productSubCat)
                    if subCatName:
                        # Dynamically build productsBySubCat.
                        if subCatName not in productsBySubCats:
                            productsBySubCats.update(
                                {subCatName: []}
                            )

                        productsBySubCats[subCatName].append(product)

        # Limit the results
        if 'limitResults' in self.kwargs:
            for subCats in productsBySubCats:
                productsBySubCats[subCats] = productsBySubCats[subCats][:self.kwargs['limitResults']]

        return productsBySubCats
