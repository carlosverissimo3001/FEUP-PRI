# Processing and Information Retrieval - 2022/2023 @FEUP

The final projects consists of a search engine for the [IMDB](https://www.imdb.com/) top feature films dataset.

There are two data collection phases.

- The first one consists of collecting feature films from the IMDB website as well as using the TMDBM API for extra information., not available on the IMDB website.
- The second one consists of collecting the reviews for each film. The 25 most voted reviews were collected.

Solr was used to index the data and the [React](https://reactjs.org/) framework to build the front-end, to make the experience more interactive.

The main idea for the front-end was to make it as simple as possible, so that the user can easily find the information they are looking for. It is based on the implementation carried out in the following tutorial: [React JS Full Course 2022](https://www.youtube.com/watch?v=b9eMGE7QtTk&t=3138s)

## Grades

| Milestone 1 | Milestone 2 | Milestone 3 | Final Project | Exam | Final Grade |
| ----------- | ----------- | ----------- | ------------- | ---- | ----------- |
|     16.0    |     16.2    |     17.2    |    16.62      | 15.9 |     16      |

## Setting up Solr

### Create a core
```bash
docker exec pri bin/solr create_core -c <CORE_NAME>
```

### Update the schema

> Assuming a collection(core) called movies

```bash
curl -X POST -H 'Content-type:application/json' \
--data-binary @schema.json \
http://localhost:8983/solr/movies/schema
```

### Post data

> Assuming a collection(core) called movies

```bash
curl -X POST -H 'Content-type:application/json' \
--data-binary @output/movies-stage-{i}.json \
http://localhost:8983/solr/movies/update?commit=true
```

### Login as root on docker container
```bash
docker exec -u 0 -it pri bash
```

### Modify CORS

> Go to server/solr-webapp/webapp/WEB-INF/

Add the following to the `web.xml` configuration file
```xml
 <filter>
   <filter-name>cross-origin</filter-name>
   <filter-class>org.eclipse.jetty.servlets.CrossOriginFilter</filter-class>
   <init-param>
     <param-name>allowedOrigins</param-name>
     <param-value>*</param-value>
   </init-param>
   <init-param>
     <param-name>allowedMethods</param-name>
     <param-value>GET,POST,OPTIONS,DELETE,PUT,HEAD</param-value>
   </init-param>
   <init-param>
     <param-name>allowedHeaders</param-name>
     <param-value>origin, content-type, accept</param-value>
   </init-param>
 </filter>

 <filter-mapping>
   <filter-name>cross-origin</filter-name>
   <url-pattern>/*</url-pattern>
 </filter-mapping>
```

## Other

### Delete a core
```bash
docker exec pri bin/solr delete -c <CORE_NAME>
```
