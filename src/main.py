from flask import Flask
import requests
import os
import json
from io import BytesIO
from PIL import Image
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)


@app.route("/api")
def getTweets():
    url = "https://api.twitter.com/1.1/search/tweets.json"
    payload = {
        "q": "WBrettWilson",
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
    tweet_count = 1
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
            for image_url in images:
                response = requests.get(image_url)
                img = Image.open(BytesIO(response.content))
                img.show()
            print("\n")
        else:
            print("Image: No Image\n")
        tweet_count += 1
    return tweet_data


if __name__ == "__main__":
    app.run(debug=True)
