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
  docker inspect ubuntu:14.04 \{\{.Architecture\}\}
docker history ubuntu:14.04
docker search
  docker search --automated -s 3 nginx
docker rmi [IMAGE]
  docker rmi myubuntu:latest
  docker rmi a21c0840213e
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
docker start
  docker start af
docker ps / docker ps -a
docker run
  docker run ubuntu /bin/echo 'Hello world'
  docker run -it ubuntu:14.04 /bin/bash
  docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1;"
docker logs
  docker logs ce5
docker stop
  docker stop ce5
docker attach
  docker run -itd ubuntu
  docker attach [CONTAINER]
docker exec
  docker exec -it 243c32535da7 /bin/bash
  To have ctrl+c stop the container you must use -it
  To detach from the container you should use ctrl+pq
docker rm
  docker rm 2ae
docker export
  docker export -o test_for_run.tar ce5
docker import
  docker import test_for_run.tar = test/ubuntu:v1.0
```

## Data Management
#### Data Volume
```
docker run -d -P web -v /webapp training/webapp python app.py
docker run -d -P web -v /src/webapp:/opt/webapp training/webapp python app.py
docker run -it --rm --name my-running-script -v "$PWD":/usr/src/app -w /usr/src/app node node test.js
```
#### Data Volume Container
```
docker run -it -v /dbdata --name dbdata ubuntu
docker run -it --volumes-from dbdata --name db1 ubuntu
docker run -it --volumes-from dbdata --name db2 ubuntu
```
#### Backup
```
docker run --volumes-from dbdata -v $(pwd):/backup --name worker ubuntu tar cvf /backup/backup.tar /dbdata
```
#### Restore
```
docker run -v /dbdata --name dbdata2 ubuntu /bin/bash
docker run --volumes-from dbdta2 -v $(pwd):/backup busybox tar xvf /backup/backup.tar
```

## Dockerfile
```
docker build -t build/ubuntu-nodejs ./
```

## Jekyll
```
docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:3.8 jekyll build
```