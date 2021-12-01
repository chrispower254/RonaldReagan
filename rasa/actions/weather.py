import requests

api_key = "79ad63d1e7ce4e3d965102123210112"


def get_query_string(location):
    url = "http://api.weatherapi.com/v1/current.json?key={}&q={}&aqi=no".format(api_key, location)
    return url


def get_temperature(location):
    url = get_query_string(location)
    response = requests.get(url).json()
    temperature = response["current"]["temp_c"]
    return round(temperature)
