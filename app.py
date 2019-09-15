import os
from flask import Flask, request, url_for, redirect, render_template
import mongo_helpers

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/rules')
def rules():
    return render_template('rules.html', rules=mongo_helpers.get_rules())


if __name__ == "__main__":
    host = os.environ.get('IP', '0.0.0.0')
    port = os.environ.get('PORT', 5000)
    app.run()
