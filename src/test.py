import json

# Define the filename and location for the file
filename = "elonmusk.json"

# Open the file for reading
with open(filename, "r") as f:
    # Load the dictionary from the file in JSON format
    my_dict = json.load(f)

# Now you can use the dictionary as usual
print(my_dict)
