"""
=================================================================================================================================
Date Created:   20/09/2019
Created By:     Salaah Amin
Last Update:   20/09/2019
=================================================================================================================================
SCRIPT FUNCTION

Creates the views for the following pages:

index:      /
=================================================================================================================================
"""

# Python Library Imports

# Third Party Imports
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages

# Local Imports


# ------------------------------------------------------------------------------------------------------------------------------ #
def login(request):
    return HttpResponse("<h1>LOGIN HTTP RESPONSE</h1>")


# ------------------------------------------------------------------------------------------------------------------------------ #
def logout(request):
    return HttpResponse("<h1>LOGOUT HTTP RESPONSE</h1>")


# ------------------------------------------------------------------------------------------------------------------------------ #
def register(request):
    if request.method == 'POST':
        # Get Form Values
        firstName = request.POST['first_name']
        lastName = request.POST['last_name']
        email = request.POST['email']
        password = request.POST['password']
        passwordConfirm = request.POST['password-confirm']

        # The checking of the password is handled at the front end, this check is a fallback incase the front end check passes.
        if password == passwordConfirm:
            messages.error(request, 'Passwords do not match')
            return redirect('register')

        # Check if the email address is already in use.
        elif User.objects.filter(email=email).exists():
            messages.error(request, 'This email address is already in use')
            return redirect('register')

        else:
            # Register User
            user = User.objects.create_user(
                username=email,
                first_name=first_name,
                last_name=last_name,
                email=email,
                password=password
            )
            user.save()
            messages.success(
                request, 'Congratulations! You are now registered')
            return redirect('login')

    else:
        return render(request, 'accounts/register.html')


# ------------------------------------------------------------------------------------------------------------------------------ #
def account(request):
    return HttpResponse("<h1>ACCOUNT HTTP RESPONSE</h1>")


# ------------------------------------------------------------------------------------------------------------------------------ #
def help(request):
    return HttpResponse("<h1>HELP HTTP RESPONSE</h1>")
