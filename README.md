~~~
-------------------
- DOCKER CHEET SHEET
-------------------
$ docker run [OPTIONS][--name my-name][--network=my-net][--restart=always/no/on-failure][--rm][-d][-v $(pwd):/opt][-p 80:80] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
$ docker stop $(docker ps -q)
$ docker rm $(docker ps -aq)
$ docker build .

-------------------
- MONGO
-------------------
$ docker run --name test-mongo --rm=true -d -p 27017:27017 -v $(pwd):/opt/dump mongo
# docker exec -it test-mongo bash

-------------------
- MYSQL
-------------------
$ docker run --name test-mysql --rm -d -p 3306:3306 -v $(pwd):/opt/dump -e MYSQL_ROOT_PASSWORD=root mysql
# docker exec -it test-mysql bash
# mysql -u root -p
# mysqldump -u username -p database_name > data-dump.sql
# mysql -u username -p new_database < data-dump.sql
-------------------

-------------------
- JHIPSTER
-------------------
# https://github.com/jhipster/generator-jhipster
# docker build .
# docker run -d -v $(pwd):/home/jhipster/app e0f30b3b72dc
# docker pull donghd84/jhipster

-------------------
- REST MOCK API
-------------------
# npm install -g json-server
# Create a "db.json" file
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
# json-server --watch db.json
# REST
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
# Filter
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode
# Paginate
GET /posts?_page=7
GET /posts?_page=7&_limit=20
# Sort
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
# Operators
GET /posts?views_gte=10&views_lte=20
GET /posts?id_ne=1
GET /posts?title_like=server
# Full-text search
GET /posts?q=internet
# More: https://github.com/typicode/json-server

~~~
