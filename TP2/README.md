## Cyprien Charlot

3.
    - **a:** docker pull nginx<br />
    - **b:** docker image list<br />
    - **c:** # done<br />
    - **d:** docker run -it --rm -d -p 8080:80 --name web -v ./html:/usr/share/nginx/html nginx<br />
    la page par default est dans /usr/share/nginx/html
    - e. docker stop web<br />
    docker rm web<br />
    - f. docker cp ./html web:/usr/share/nginx/html
<br /><br />

4.
    - **a:** ./Dockerfile
    - **b:** docker build --tag nginx-web-truc .<br />
    docker run -p 8080:80 --detach 'nginx-web-truc'<br />
    - **c:** simple de fou et config bcp plus custom + plus lisible et facile a partager<br />