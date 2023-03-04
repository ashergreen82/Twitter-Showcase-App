import os


def setup_server():
    os.system("pip install -r requirements.txt")


def setup_client():
    os.system("npm install --prefix Client")
    os.system("npm run build --prefix Client")


if __name__ == "__main__":
    setup_server()
    setup_client()
