import json
from PIL import Image
import requests
from io import BytesIO
import random

# Define the filename and location for the file
filename = r"D:\Asher's Documents\Computer Programming\SDMM\Assignments\Twitter APP\twittershowcase\Client\@elonmusk.json"

# Open the file for reading
with open(filename, "r") as f:
    # Load the dictionary from the file in JSON format
    tweet_data = json.load(f)

# Extract data from the JSON file
tweet_count=1
# random_tweet = random.choice(tweet_data)
# print(random_tweet)
tweets=[]
images1 = []
for tweet in tweet_data['statuses']:
    full_text = tweet['text']
    username = tweet['user']['screen_name']
    retweet_count = tweet['retweet_count']
    favorite_count = tweet['favorite_count']
    images = []
    if 'media' in tweet['entities']:
        for media in tweet['entities']['media']:
            images.append(media['media_url'])
    # if 'media' in tweet['entities']:
    #     for media in tweet['entities']['media']:
    #         images.append(media['media_url'])
    # image = None
    # if 'media' in tweet['entities']:
    #     image = tweet['entities']['media'][0]['media_url']
    # Printing the tweets
    print("Tweet Number: ", tweet_count)
    print('Full Text: ', full_text)
    print('Username: ', username)
    print('Retweet Count: ', retweet_count)
    print('Favorite Count: ', favorite_count)
    if 'media' in tweet['entities']:
        for media in tweet['entities']['media']:
            images1.append(media['media_url'])
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
    tweet_dict = {
        'full_text': full_text,
        'username': username,
        'retweet_count': retweet_count,
        'favorite_count': favorite_count,
        'images': images
    }
    tweets.append(tweet_dict)
print(tweet_dict)
print(tweets)
print(images1)
random_tweet = random.choice(tweets)
print(random_tweet)
# from PIL import Image
# import requests
# from io import BytesIO
#
# images = ["https://images.pexels.com/photos/1762858/pexels-photo-1762858.jpeg",          "https://images.pexels.com/photos/1124601/pexels-photo-1124601.jpeg"]
#
# for image_url in images:
#     response = requests.get(image_url)
#     img = Image.open(BytesIO(response.content))
#     img.show()


