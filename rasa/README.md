# RonaldReagan

Chatbot that can tell you the weather

# Start the Rasa Server

1. cd into rasa
2. activate virtual enviroment: `source ./venv/bin/activate`
3. In order to handle custom actions, you need to start both the action server and rasa server
4. To train a new model run `rasa train`
5. To start action server: new Terminal with enabled venv and run: `rasa run actions`
6. Start Rasa server with open API: `rasa run --enable-api --cors "*"`
