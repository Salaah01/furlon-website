"""
================================================================================================================================
Date Created:   22/12/2019
Created By:     Salaah Amin
================================================================================================================================
SCRIPT FUNCTION

Queries the database and returns search results based on user inputs.
================================================================================================================================
"""

# Python Library Imports
from datetime import datetime
import json

# Third Party Library Imports
from django.db import connection

# Local Imports
from .models import Products


# ------------------------------------------------------------------------------------------------------------------------------ #
def search_query(criteria, jsonResponse=False):
    """ Given some criteria (from request.GET), the database will be queried, the results of which will be returned. """
    # Filter Options
    minPrice = criteria['f-minPrice'] if 'f-minPrice' in criteria else 0
    maxPrice = criteria['f-maxPrice'] if 'f-maxPrice' in criteria else 9999999999
    category = criteria['f-category'] if 'f-category' in criteria else None
    colour = criteria['f-colour'] if 'f-colour' in criteria else None
    
    # Search Option
    # - It is assumed that the delimiter between keywords will be either ', ' or ','.
    # - Each keyword should check the value somewhat matches a value from various fields.
    # - Where the keyword = 'x', the search should be similar to <field> IS LIKE '%x%'.
    if 'search' in criteria:
        search = criteria['search']
        search = search.replace(' ', '').split(',') if ',' in search else search.split()
        searchSQL = 'AND ('
        searchBindVars = []
        for keyword in search:
            searchBindVars += searchBindVars + ['%' + keyword + '%'] * 5
            searchSQL += """
                LOWER(pp.name) like %s
                OR  (
                    SELECT COUNT (*)
                    FROM stores_stores ss
                    WHERE pp.store_id = ss.store_id
                    AND LOWER(ss.name) like %s
                ) > 0
                OR  (
                    SELECT COUNT (*)
                    FROM products_colours pcol
                    WHERE pp.colour_id = pcol.id
                    AND (lower(pcol.name) like %s OR lower(pcol.col_families) like %s)
                ) > 0
                OR (
                    SELECT COUNT (*)
                    FROM products_categories pcat
                    WHERE pp.category_id = pcat.cat_id
                    AND pcat.name like %s
                ) > 0
            )
            """
    else:
        searchBindVars = []
        searchSQL = ''

    # fullSQL consists of an sql build based on the filters and the searchSQL.
    # As a list of bindVars is used as supposed to a dictionary of bindVars, order matters.
    # This is done to prevent SQL injection when building the search query.
    # Note: The fields selected are the same as the filters set in the search page.
    
    # NOTE: MAIN COLOUR IS SET TO TRUE OR FALSE IN DEV, REMOVE WHEN THERE ARE ENOUGH PRODUCTS
    fullSQL = """
        SELECT
            pp.product_id, pp.name pp_name, pp.height, pp.length, pp.width, pp.features, pp.related,
            pp.showcase_image, pp.description, pp.price, pp.rating, TO_CHAR(pp.upload_date, 'dd/mm/yyyy'), pp.inventory, pp.status,
            pp.category_id, pp.colour_id, pp.store_id, pp.delivery_available, pp.main_colour, pp.ratings,
            ss.name ss_name
        FROM products_products pp, stores_stores ss
        WHERE pp.price >= %s
        AND pp.price <= %s
        AND (pp.main_colour = true OR pp.main_colour = false)
        AND pp.status = 'Active'
        AND pp.store_id = ss.store_id
        """

    if category:
        fullSQL += "AND pp.category_id %s"
    if colour:
        fullSQL += "AND pp.colour_id %s"

    fullSQL += searchSQL

    bindVars = [float(minPrice), float(maxPrice)]
    if category:
        bindVars.append(category)
    if colour:
        bindVars.append(colour)
    bindVars = bindVars + searchBindVars

    cursor = connection.cursor()
    cursor.execute(fullSQL, bindVars)
    dataRows = cursor.fetchall()

    if jsonResponse:
        cursor = connection.cursor()
        cursor.execute(fullSQL, bindVars)
        dataRows = cursor.fetchall()
        results = [dataRow[0] for dataRow in dataRows]

        return json.dumps(results)
    else:

        return Products.objects.raw(fullSQL, bindVars)
