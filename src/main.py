from flask import Flask
import requests
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)


@app.route("/api")
def getTweets():
    url = "https://api.twitter.com/1.1/search/tweets.json"
    payload = {
        "q": "elonmusk",
        "count": "2"
    }
    headers = {
        "Authorization": "Bearer " + os.environ.get("API_KEY")
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    dict = response.json()
    return dict


if __name__ == "__main__":
    app.run(debug=True)
