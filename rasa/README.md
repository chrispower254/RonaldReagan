# RonaldReagan

Chatbot that can tell you the weather

# Start the Rasa Server

1. cd into rasa
2. Set up an virtual enviroment with python 3.8, using venv or anaconda
3. install package rasa, rasa-sdk  in venv (if that takes forever checkout https://stackoverflow.com/questions/65806524/pip-install-rasa-x-takes-forever)
4. install spacy with `pip install -U pip setuptools wheel &&
pip install -U spacy &&
python -m spacy download en_core_web_sm`
5. activate virtual enviroment: `source ./venv/bin/activate` if you didnt use anaconda
6. In order to handle custom actions, you need to start both the action server and rasa server
7. To train a new model run `rasa train`
8. To start action server: new Terminal with enabled venv and run: `rasa run actions`
9. Start Rasa server with open API: `cd rasa/` and `rasa run --enable-api --cors "*"`
10. Post Requests to `http://localhost:5005/webhooks/rest/webhook` with body of request `{
    "sender": "Test",
    "message": "Whats the weather in Hamburg today"
}`


# Troubleshooting

- ImportError: cannot import name 'CompositionView' from 'sanic.views' (/usr/local/anaconda3/envs/RonaldReagan/lib/python3.8/site-packages/sanic/views.py) 
     https://github.com/RasaHQ/rasa/issues/10603
- ModuleNotFoundError: No module named 'rasa.actions' -> I dont know why, but there are always Problems with the Python-Path: It needs to be like this `/Users/lorenz/PycharmProjects/RonaldReagan/rasa:/Users/lorenz/PycharmProjects/RonaldReagan/rasa/actions
` -> adjusted on your enviroment. Change PythonPath with `export PYTHONPATH=$PYTHONPATH:/Users/lorenz/PycharmProjects/RonaldReagan/rasa/actions
`
