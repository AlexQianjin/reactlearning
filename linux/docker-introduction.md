# Docker Introduction

## Repository
```
docker pull NAME:[TAG] 
docker pull ubuntu:14.04

registry.hub.docker.com
docker pull hub.c.163.com/public/ubuntu:14.04

docker push
  docker tag test:latest user/test:latest
  docker push user/test:latest
docker search
  docker search ubuntu
```
## Image
```
docker images
docker image ls
docker tag ubuntu:latest myubuntu:latest
docker inspect ubuntu:14.04
  docker inspect ubuntu:14.04 {{.Architecture}}
docker history ubuntu:14.04
docker search
  docker search --automated -s 3 nginx
docker rm [IMAGE]
  docker rm myubuntu:latest
  docker rm a21c0840213e
```
#### Create Image
```
docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
  dokcer commit -m "add a new file" -a "Docker Newbee" a925cb40b3f0 test:0.1
docker import [OPTIONS] file|URL| - [REPOSITORY[:TAG]]
  cat ubuntu-14.04-x86_64-minimal.tar.gz | docker import - ubuntu:14:04
docker save / docker load
  docker save -o ubuntu_14.04.tar ubuntu:14.04
  docker load -- input ubuntu_14.04.tar
  docker load < ubuntu_14.04.tar
```

## Container
```
docker create
  docker create -it ubuntu:latest
```