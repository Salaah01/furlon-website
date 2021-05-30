"""
==================================================================================================================================
Date Created:   05/02/2020
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Converts the results from an SQL query along with a list of keys to a list of
dictionaries.
For example:
If the sql results = (('Bed', '100', 'Blue'), ('Wardrobe', '200', 'Black'))
and keys = ['furniture', 'price', colour']
Then the function will return:
[
    {'furniture': 'Bed', 'price': 100, 'colour': 'Blue'},
    {'furniture': 'Wardrobe', 'price': 200, 'colour': 'Black'},
]
==================================================================================================================================
"""


# ================================================================================================================================
def SQLQueryToDict(queryResults, keys):
    """ Zips the keys and queryResults to produce a list of dictionaries.

    queryResults need to be a tuple of tuples. For example:
    (('Bed', '100', 'Blue'), ('Wardrobe', '200', 'Black'))

    keys need to be a list of corresponding keys to each value in a given tuple.
    For example: ['furniture', 'price', colour'].

    The length of queryResults must equal to the length of keys.
    """
    results = []
    for queryResult in queryResults:
        results.append(dict(zip(keys, queryResult)))

    return results
