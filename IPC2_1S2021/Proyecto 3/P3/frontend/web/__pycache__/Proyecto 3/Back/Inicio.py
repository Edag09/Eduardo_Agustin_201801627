from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask('nombre')
app.config['DEBUG'] = True

CORS(app)

@app.route('/')
def home():
    return 'SERVER IS WORKING!!!'

app.run(debug=True)
