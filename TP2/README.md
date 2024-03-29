Cyprien Charlot
3.
 a. docker pull nginx
 b. docker image list
 c. # done
 d. docker run -it --rm -d -p 8080:80 --name web -v ./html:/usr/share/nginx/html nginx
    la page par default est dans /usr/share/nginx/html
 e. docker stop web
 e. docker rm web
 f. docker cp ./html web:/usr/share/nginx/html

4.
 a. ./Dockerfile
 b. docker build --tag nginx-web-truc .
 b. docker run -p 8080:80 --detach 'nginx-web-truc'
 c. simple de fou et config bcp plus custom + plus lisible et facile a partager