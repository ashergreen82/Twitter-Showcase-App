from flask import Flask, request, send_file
import requests
import os
import json
from io import BytesIO
# from PIL import Image
from dotenv import load_dotenv
from flask import jsonify
import random
load_dotenv()

# app = Flask(__name__)
app = Flask(__name__, static_folder='../Client/build', static_url_path='/')


def getTweets(query):
    url = "https://api.twitter.com/1.1/search/tweets.json"
    payload = {
        "q": query,
        "count": "20"
    }
    headers = {
        "Authorization": "Bearer " + os.environ.get("API_KEY")
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    tweet_data = response.json()
    # filename = "@Robertjsawyer.json"
    # with open(filename, "w") as f:
    #     json.dump(dict, f)
    # print(dict)
    image = ""
    tweets = []
    for tweet in tweet_data['statuses']:
        full_text = tweet['text']
        username = tweet['user']['screen_name']
        retweet_count = tweet['retweet_count']
        favorite_count = tweet['favorite_count']
        if 'media' in tweet['entities']:
            image = tweet['entities']['media'][0]['media_url_https']

        tweet_dict = {
            'full_text': full_text,
            'username': username,
            'retweet_count': retweet_count,
            'favorite_count': favorite_count,
            'image': image
        }
        tweets.append(tweet_dict)

    tweet_count = 0
    for tweet in tweet_data['statuses']:
        full_text = tweet['text']
        username = tweet['user']['screen_name']
        retweet_count = tweet['retweet_count']
        favorite_count = tweet['favorite_count']
        # print("Image: ", image)
        # print("Tweet Number: ", tweet_count)
        # print('Full Text: ', full_text)
        # print('Username: ', username)
        # print('Retweet Count: ', retweet_count)
        # print('Favorite Count: ', favorite_count)
        # if images:
        #     print('Image: ', images)
        #     for image_url in images:
        #         response = requests.get(image_url)
        #         img = Image.open(BytesIO(response.content))
        #         img.show()
        #     print("\n")
        # else:
        #     print("Image: No Image\n")
        tweet_count += 1

    return tweets


@app.route("/api/search", methods=["POST"])
def searchTweets():
    query = request.json.get('query')
    tweets = getTweets(query)
    return tweets


@app.route("/api/random_search", methods=["POST"])
def searchRandomTweets():
    query = request.json.get('query')
    tweets = getTweets(query)
    random_tweet = random.choice(tweets)
    return random_tweet


@app.route("/")
def mainExecution():
    return send_file("../Client/build/index.html")


@app.route("/Randomsearch")
def mainRandomSearch():
    return send_file("../Client/build/index.html")


if __name__ == "__main__":
    app.run(debug=False)
