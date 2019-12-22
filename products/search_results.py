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

# Third Party Library Imports

# Local Imports
from .models import Products


# ------------------------------------------------------------------------------------------------------------------------------ #
def search_results(criteria):
    """ Given some criteria (from request.GET), the database will be queried, the results of which will be returned.
    