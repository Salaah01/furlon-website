"""
==================================================================================================================================
Date Created:   31/12/2019
Created By:     Salaah Amin
==================================================================================================================================
SCRIPT FUNCTION

Renders pages related to sales.
Render the following pages:
    - sales/basket.html
==================================================================================================================================
"""

# IMPORTS
# Python Core Library

# Third Party Imports
from django.shortcuts import render, redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db import connection
from django.contrib import messages, auth

# Local Imports
from .models import Sales
from products.models import ProductReviews


# ------------------------------------------------------------------------------------------------------------------------------ #
def order_history(request):
    """ View for loading the user's order history. Uses pagination to split number of results. Sales data is stored in
    sales_sales.
    """
    sales = Sales.objects.filter(user=request.user).order_by('-sale_id')

    if request.POST:
        reviewResult, reviewMsg = process_new_review(request)
        if reviewResult == 'success':
            messages.success(request, reviewMsg)
        else:
            messages.error(request, reviewMsg)

        return redirect('order-history')

    # A list of the product ids where the user has left review.
    userReviewListSQL = ("""SELECT DISTINCT product_id
                        FROM products_productreviews
                        WHERE user_id=%s""")

    cursor = connection.cursor()
    cursor.execute(userReviewListSQL, [request.user.id])
    userReviewList = cursor.fetchone()

    # Pagination
    paginator = Paginator(sales, 20)
    page = request.GET.get('page')
    pagedSales = paginator.get_page(page)

    context = {
        'sales': pagedSales,
        'userReviewList': userReviewList or []
    }
    return render(request, 'sales/order-history.html', context)


# ------------------------------------------------------------------------------------------------------------------------------ #
def pending_orders(request):
    """ View for loading the user's pending orders. Uses pagination to split number of results. Sales data is stored in
    sales_sales.
    """
    sales = Sales.objects.filter(user=request.user).filter(
        status='Processing').order_by('-sale_id')

    # Pagination
    paginator = Paginator(sales, 20)
    page = request.GET.get('page')
    pagedSales = paginator.get_page(page)

    context = {
        'sales': pagedSales
    }
    return render(request, 'sales/pending-orders.html', context)


# ------------------------------------------------------------------------------------------------------------------------------ #
def order_details(request, transactionRef):
    """ View for details on a single transaction.
    Queries the """

    if request.POST:
        reviewResult, reviewMsg = process_new_review(request)
        if reviewResult == 'success':
            messages.success(request, reviewMsg)
        else:
            messages.error(request, reviewMsg)

        return redirect('order-details', transactionRef)

    orders = Sales.objects.filter(user=request.user).filter(
        transaction_ref=transactionRef)

    # A list of the product ids where the user has left review.
    userReviewListSQL = ("""SELECT DISTINCT product_id
                        FROM products_productreviews
                        WHERE user_id=%s""")

    # Totals
    totalsSQL = """
        SELECT SUM(delivery_price), SUM(assembly_price), SUM(ex_vat), SUM(vat), SUM(total)
        FROM sales_sales
        WHERE transaction_ref = %s
        """

    # DB query execution
    cursor = connection.cursor()

    cursor.execute(userReviewListSQL, [request.user.id])
    userReviewList = cursor.fetchone()

    cursor.execute(totalsSQL, [transactionRef])
    totalsArr = cursor.fetchone()

    context = {
        'orders': orders,
        'total_delivery': totalsArr[0],
        'total_assembly': totalsArr[1],
        'total_exVat': totalsArr[2],
        'total_vat': totalsArr[3],
        'total_total': totalsArr[4],
        'userReviewList': userReviewList or []
    }

    return render(request, 'sales/order-details.html', context)


# ------------------------------------------------------------------------------------------------------------------------------ #
def process_new_review(request):
    """ Handles the the POST request of a new review.
    This includes validation and saving the new review onto the database.

    Validation Rules:
     - At least the ratings need to be selected.
     - If a user decided to leave a comment, then they must set a title.
     - General validation incase there was some manipulation at the front end.
    """

    # DEFAULTS
    title = ''
    comments = ''

    postRequest = request.POST

    # VALIDATION
    # Validate product ID
    # TODO: Make this validation more strict by testing what should already be on the
    # page and check if different products have been returned.
    if not postRequest['product-id']:
        return ('fail', 'Error with submitting your review, please try again.')
    else:
        productId = postRequest['product-id']

    # Validate store ID
    # TODO: Make this validation more strict by testing what should already be on the
    # page and check if different products have been returned.
    if not postRequest['store-id']:
        return ('fail', 'Error with submitting your review, please try again.')
    else:
        storeId = postRequest['store-id']

    # Validate rating
    if not postRequest['user-review-rating']:
        return ('fail', 'Please select a rating.')
    else:
        # Test that the HTML hasn't been amended before POST.
        try:
            rating = int(postRequest['user-review-rating'])
            if rating not in [1, 2, 3, 4, 5]:
                return ('fail', 'Please select a rating.')
        except ValueError:
            return ('fail', 'Error with submitting your review, please try again.')

    # Validate comments title - if there are comments then there must be a title.
    if postRequest['user-review-comments'] and not postRequest['user-review-title']:
        return ('fail', 'You have a title if you wish you leave comments.')
    else:
        title = postRequest['user-review-title']
        comments = postRequest['user-review-comments']

    newReview = ProductReviews(
        rating=rating,
        comments=comments,
        product_id=productId,
        store_id=storeId,
        user_id=request.user.id,
        review_title=title
    )

    newReview.save()
    return ('success', "Thank you for your review. You're review has been saved.")
