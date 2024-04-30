# TP3

## Etapes

### 1

`docker run --name tp3-mysql -e MYSQL_ROOT_PASSWORD=root -d mysql`

### 2

Lancer build.sh
Lancer run.sh
Lancer start.sh

### 3

Aller sur [localhost:3000](http://localhost:3000/)

# Description

## MySQL

On crée un conteneur (tp3-mysql-cyprien)

`docker run --name tp3-mysql-cyprien -e MYSQL_ROOT_PASSWORD=root -d mysql`

## Dockerfile

### Lancer

Lancer dans l'ordre exact en etant dans le dossier `TP3`:

```sh
$ sh ./build.sh
$ sh ./run.sh
$ sh ./start.sh
```

### Fichiers

`build.sh`: `docker build -t tp3-cyprien .`
`run.sh`: `sudo docker run --name tp3-container --network container:tp3-mysql-cyprien -dp 127.0.0.1:3000:3000 tp3-cyprien`
`start.sh`: `docker start tp3-container`