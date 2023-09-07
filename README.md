# env_config
Test: How to avoid hardcoding environment variables in docker-compose.yml

# Compose file 
## Substitute with an .env file 
The .env file is useful if you have multiple environment variables you need to store.

Below is a simple example:
```yml
$ cat .env
TAG=v1.5

$ cat compose.yml
services:
  web:
    image: "webapp:${TAG}"
```
When you run `docker compose up`, the `web` service defined in the Compose file 
substitutes in the image `webapp:v1.5` which was set in the `.env` file. 
You can verify this with the config command, 
which prints your resolved application config to the terminal:

```
content_copy
$ docker compose config

services:
  web:
    image: 'webapp:v1.5'
```
