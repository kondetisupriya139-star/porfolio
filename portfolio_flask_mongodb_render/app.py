from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient
import os

app = Flask(__name__)

MONGO_URI = os.environ.get("MONGO_URI", "mongodb://localhost:27017/")
client = MongoClient(MONGO_URI)
db = client["portfolio_db"]
contacts_collection = db["contacts"]

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')

        contacts_collection.insert_one({
            "name": name,
            "email": email,
            "message": message
        })

        return redirect(url_for('home'))

    return render_template("contact.html")

if __name__ == '__main__':
    app.run(debug=True)
