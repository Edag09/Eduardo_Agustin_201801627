from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config['DEBUG'] = True

CORS(app)

@app.route('/')
def home():
    return 'SERVER IS WORKING!!!'

if __name__ == '__main__':
    app.run(debug=True)