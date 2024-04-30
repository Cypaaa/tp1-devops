# TP3

Il y a un README.md dans chacun des deux dossier ci-dessous.

Mon projet initial etant en Go je n'ai pu m'en servir et ai du trouver des codes sample disponible sur internet.<br />
Ils ne correspondent donc pas a des codes de production et ne servent specifiquement qu'a montrer un exemple d'utilisation de docker.

`db.config.js` est donc nommé `config.js`.

`EXPOSE` n'est pas utilisé dans docker-compose.yaml puisqu'il n'est pas utile.

`docker inspect` n'est pas utilisé puisque la connection se fait grace a l'adresse (nom du service) grace au bridge (network).

`without SQL`: Il y a pas de lien entre nodejs et mysql meme si mysql est crée pour faire jolie<br />
`with SQL`: Il y a un lien entre nodejs et mysql. nodejs appel une procedure implémenté dans sql/init.sql sous la creation de la table et de ses inserts

## Questions

### 1

Une erreur "Port déjà utilisé" est élevé.

### 2

L'argument `--production` permet d'installer uniquement les dependances requise pour la production.

#### bis

Pour éviter d'installer des dépendances utile uniquement pour le développement; Tel que les librairies de debug, de test, de compilation, de linting, ...

### 3

Il est possible d'analyser la sécurité d'une application grace aux commandes [`docker scan`](https://github.com/docker/scan-cli-plugin) (plugin Docker Desktop) ainsi que [`docker scout`](https://docs.docker.com/scout/quickstart/)

### 4

À l'étape numéro 6, l'application NodeJS ainsi que la base de données MySQL ne peuvent comminuquées dû au fait que chacune se trouve sur un réseau différent, puisque Docker n'authorise pas la connection entre les conteneurs ou l'host **par défaut**.