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
`run.sh`: `docker run --name tp3-container -dp 127.0.0.1:3000:3000 tp3-cyprien`
`start.sh`: `docker start tp3-container`