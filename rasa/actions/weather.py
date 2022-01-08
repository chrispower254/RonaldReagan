import requests

api_key = "79ad63d1e7ce4e3d965102123210112"


def get_query_string(location):
    url = "http://api.weatherapi.com/v1/current.json?key={}&q={}&aqi=no".format(api_key, location)
    return url


def get_forecast_query_string(location):
    url = "http://api.weatherapi.com/v1/forecast.json?key={}&q={}&aqi=no&days=3".format(api_key, location)
    return url


def get_temperature(location):
    url = get_query_string(location)
    response = requests.get(url).json()
    temperature = response["current"]["temp_c"]
    return round(temperature)


def get_temperature_forecast(location):
    url = get_forecast_query_string(location)
    response = requests.get(url).json()
    test_response = response["forecast"]["forecastday"]
    weather_forecast = list(
        ({"temperature": x["day"]["avgtemp_c"], "condition": x["day"]["condition"]["text"]}) for x in test_response)
    return weather_forecast
