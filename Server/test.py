import json
from PIL import Image
import requests
from io import BytesIO

# Define the filename and location for the file
filename = r"D:\Asher's Documents\Computer Programming\SDMM\Assignments\Twitter APP\twittershowcase\@elonmusk.json"

# Open the file for reading
with open(filename, "r") as f:
    # Load the dictionary from the file in JSON format
    tweet_data = json.load(f)

# Extract data from the JSON file
tweet_count=1
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


