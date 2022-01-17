# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet
from rasa_sdk.executor import CollectingDispatcher

from actions import weather


class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_hello_world"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        dispatcher.utter_message(text="Hello World!")

        return []


class ActionCityWeather(Action):

    def name(self) -> Text:
        return "action_city_weather"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        city = tracker.get_slot("GPE")

        print("City in slot" + str(city))

        temperature = weather.get_temperature(city)
        response_message = "The current temperature at {} is {} degree Celsius.".format(city, temperature)
        dispatcher.utter_message(text=response_message)

        return []


class ActionCityWeatherForecast(Action):

    def name(self) -> Text:
        return "action_city_weather_forecast"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        city = tracker.get_slot("GPE")
        print("City in slot" + str(city))

        forecast = weather.get_temperature_forecast(city)

        dispatcher.utter_message(json_message=forecast)

        return []


class ActionCityRain(Action):

    def name(self) -> Text:
        return "action_city_rain"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        city = tracker.get_slot("GPE")

        print("City in slot" + str(city))

        forecast = weather.get_temperature_forecast(city)

        dispatcher.utter_message(text="Yes it is going to rain")

        return []



