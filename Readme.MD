# Marvel characters APP 

Simple app using marvel api to get a list of characters containing their name and image if available.

# Setup
``make copy-env``

Then fill the env file with variables (Marvel API keys needed)

# Install

### Requirements
- Docker 

A Makefile is used to install the project : 
``make pull`` : Pull needed images

``make build`` : Build the application

``make up`` : Launch the application


# Access
```http://localhost:8080```

# Debug
```make logs```