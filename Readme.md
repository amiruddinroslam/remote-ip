##  Use this docker image
- Pull [image](https://hub.docker.com/repository/docker/amiruddinroslam/remote-ip) from docker hub.
- Identify Image ID using `$ docker images`
- Run the container `$ docker run -p <desired port>:8080 <image ID>`

## Build the docker image
- `$ docker build -t amiruddinroslam/remote-ip:<tag number> .`
