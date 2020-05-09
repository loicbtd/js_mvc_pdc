#!/bin/sh

docker stop --time=0 mariadb-demo && docker rm --force mariadb-demo
docker rmi $(docker images --filter=dangling=true --quiet)
docker volume rm $(docker volume ls --filter=dangling=true --quiet)
docker build --tag=mariadb-demo ./mariadb
docker run \
  --detach \
  --name=mariadb-demo \
  --env=MYSQL_ROOT_PASSWORD=password \
  --env=MYSQL_DATABASE=mysql \
  --network=host \
  mariadb-demo

echo "Le serveur MariaDB est maintenant accessible sur le port 3306"

# Une fois le serveur en fonction, vous pourrez lancer :
# mysql -h 127.0.0.1 -u demo -D demo -p