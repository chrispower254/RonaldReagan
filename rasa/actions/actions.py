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


class ActionCityWeather(Action):

    def name(self) -> Text:
        return "action_city_weather"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        city = tracker.get_slot("GPE")
        weather_type = tracker.get_slot("weather_type")

        print("City in slot" + str(city))
        print("Which type" + str(weather_type))

        if weather_type == "weather_rain":
            response_message = weather.get_rain_text(city)
            dispatcher.utter_message(text=response_message)
        elif weather_type == "weather_forecast":
            forecast = weather.get_temperature_forecast(city)
            dispatcher.utter_message(json_message=forecast)
        elif weather_type == "weather_today":
            temperature = weather.get_temperature(city)
            response_message = "The current temperature at {} is {} degree Celsius.".format(city, temperature)
            dispatcher.utter_message(text=response_message)

        return []







