# Jusbrasil Challenge Repo
This is my repo for the challenge of interniship job at Jusbrasil 

### WebSite: http://jpbahiense.com 

### Tecnologies:
 - React JS
 - Node JS
 - Material UI
 - ElasticSearch
 - Docker


### How to create a entity ?

``` 

curl -XPOST -H "Content-type: application/json" -d '{ "title": "TEST", "type": " TEST AGAIN " }' 'http://jpbahiense.com:5000/entities'

``` 

### How to get the entity created?

``` 

curl -XGET 'http://jpbahiense.com:5000/entities/?q=<NAME OF THE ENTITY>'

``` 

### How to get by entity_type?

``` 

curl -XGET 'http://jpbahiense.com:5000/entities/?q=<NAME OF THE ENTITY>&entity_type=<TYPE OF THE ENTITY>'

``` 

