from flask import Flask
import requests
import os
import json
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)


@app.route("/api")
def getTweets():
    url = "https://api.twitter.com/1.1/search/tweets.json"
    payload = {
        "q": "@WBrettWilson",
        "count": "2"
    }
    headers = {
        "Authorization": "Bearer " + os.environ.get("API_KEY")
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    dict = response.json()
    filename = "@WBrettWilson2count.json"
    # with open(filename, "w") as f:
    #     json.dump(dict, f)
    # print(dict)
    return dict


if __name__ == "__main__":
    app.run(debug=True)
