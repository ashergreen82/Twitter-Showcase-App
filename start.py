import os


def start_server():
    os.system("gunicorn Server.server:app")


def start_client():
    os.system("npm start --prefix Client")


if __name__ == "__main__":
    start_server()
    start_client()
