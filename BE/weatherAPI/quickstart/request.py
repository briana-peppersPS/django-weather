# Not Secure :( - but it works for now
# api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=e5d34257028339deeacadca964b09ee7&units=imperial

import requests
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


# request handler for weather API ~ straight from BE


def get_forecast():
    apiKey = '3b08d3738060e474a9599907456b9fe9'
    city = 'Atlanta'
    url = f'http://api.openweathermap.org/data/2.5/forecast?q={city}&appid={apiKey}units=imperial'

    response = requests.get(url)

    return response.js
