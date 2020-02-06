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
    if not corefunctions.cursor:
        corefunctions.cursor = connection.cursor()

    corefunctions.cursor.execute(sql, bindVars)
    results = corefunctions.cursor.fetchall()

    if keys:
        return corefunctions.SQLQueryToDict(results, keys)
    else:
        return results
