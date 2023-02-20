from flask import Flask
import requests

app = Flask(__name__)


@app.route("/api")
def getTweets():
    url = "https://api.twitter.com/1.1/search/tweets.json"
    payload = {
        "q": "elonmusk",
        "count": "2"
    }
    headers = {
        "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAOgF9A%2Ff1SJN0O0utkX%2BNF%2B41TkM%3D5He51JIFSZ0dt3Do4oJM3dG7qu3XJ3Lqqych9p6olrbt016GTi"
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    dict = response.json()
    return dict


if __name__ == "__main__":
    app.run(debug=True)
