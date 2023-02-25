from flask import Flask, request
import requests
import os
import json
from io import BytesIO
from PIL import Image
from dotenv import load_dotenv
from flask import jsonify
load_dotenv()

app = Flask(__name__)


def getTweetsTest(query):
    url = "https://api.twitter.com/1.1/search/tweets.json"
    payload = {
        "q": query,
        "count": "7"
    }
    headers = {
        "Authorization": "Bearer " + os.environ.get("API_KEY")
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    tweet_data = response.json()
    # filename = "@WBrettWilson4count.json"
    # with open(filename, "w") as f:
    #     json.dump(dict, f)
    # print(dict)
    tweets = []
    for tweet in tweet_data['statuses']:
        full_text = tweet['text']
        username = tweet['user']['screen_name']
        retweet_count = tweet['retweet_count']
        favorite_count = tweet['favorite_count']
        images = []
        if 'media' in tweet['entities']:
            for media in tweet['entities']['media']:
                images.append(media['media_url'])

        tweet_dict = {
            'full_text': full_text,
            'username': username,
            'retweet_count': retweet_count,
            'favorite_count': favorite_count,
            'images': images
        }
        tweets.append(tweet_dict)

    tweet_count = 0
    for tweet in tweet_data['statuses']:
        full_text = tweet['text']
        username = tweet['user']['screen_name']
        retweet_count = tweet['retweet_count']
        favorite_count = tweet['favorite_count']
        images = []
        if 'media' in tweet['entities']:
            for media in tweet['entities']['media']:
                images.append(media['media_url'])
        print("Tweet Number: ", tweet_count)
        print('Full Text: ', full_text)
        print('Username: ', username)
        print('Retweet Count: ', retweet_count)
        print('Favorite Count: ', favorite_count)
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
    return jsonify(tweets)


@app.route("/api")
def getTweets():
    url = "https://api.twitter.com/1.1/search/tweets.json"
    # query = request.json.get('query')
    payload = {
        "q": "elonmusk",
        "count": "10"
    }
    headers = {
        "Authorization": "Bearer " + os.environ.get("API_KEY")
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    tweet_data = response.json()
    # filename = "@WBrettWilson4count.json"
    # with open(filename, "w") as f:
    #     json.dump(dict, f)
    # print(dict)
    tweets = []
    for tweet in tweet_data['statuses']:
        full_text = tweet['text']
        username = tweet['user']['screen_name']
        retweet_count = tweet['retweet_count']
        favorite_count = tweet['favorite_count']
        images = []
        if 'media' in tweet['entities']:
            for media in tweet['entities']['media']:
                images.append(media['media_url'])

        tweet_dict = {
            'full_text': full_text,
            'username': username,
            'retweet_count': retweet_count,
            'favorite_count': favorite_count,
            'images': images
        }
        tweets.append(tweet_dict)

    tweet_count = 0
    for tweet in tweet_data['statuses']:
        full_text = tweet['text']
        username = tweet['user']['screen_name']
        retweet_count = tweet['retweet_count']
        favorite_count = tweet['favorite_count']
        images = []
        if 'media' in tweet['entities']:
            for media in tweet['entities']['media']:
                images.append(media['media_url'])
        print("Tweet Number: ", tweet_count)
        print('Full Text: ', full_text)
        print('Username: ', username)
        print('Retweet Count: ', retweet_count)
        print('Favorite Count: ', favorite_count)
        if images:
            print('Image: ', images)
            # for image_url in images:
            #     response = requests.get(image_url)
            #     img = Image.open(BytesIO(response.content))
            #     img.show()
            print("\n")
        else:
            print("Image: No Image\n")
        tweet_count += 1
    return jsonify(tweets)


@app.route("/api/search", methods=["POST"])
def searchTweets():
    query = request.json.get('query')
    tweets = getTweetsTest(query)
    return tweets


@app.route("/api/random_search", methods=["POST"])
def searchRandomTweets():
    query = request.json.get('query')
    tweets = getTweetsTest(query)
    # code to select random tweet
    return tweets


if __name__ == "__main__":
    app.run(debug=True)
