"""
==================================================================================================================================
Date Created:   06/02/2020
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION
Runs a database queries and formats returns results in a user defined way.
==================================================================================================================================
"""

# Python Library Imports

# Third Party Library Imports
from django.db import connection

# Local Imports
import corefunctions


def DatabaseQuery(sql, bindVars=None, keys=None):

    cursor = connection.cursor()
    if not isinstance(bindVars, dict) and not isinstance(bindVars, list):
        bindVars = [bindVars]

    cursor.execute(sql, bindVars)
    results = cursor.fetchall()

    if keys:
        return corefunctions.SQLQueryToDict(results, keys)
    else:
        return results
