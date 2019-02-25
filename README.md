# Jusbrasil Challenge Repo
this is my repo for the challenge of interniship job at ## Jusbrasil 

## link: http://jpbahiense.com 

### Tecnologies:
 - React JS
 - Node JS
 - Material UI
 - ElasticSearch
 - Docker
 - 


### how to use ?

``` 

curl -XPOST -H "Content-type: application/json" -d '{ "title": "TEST", "type": " TEST AGAIN " }' 'http://jpbahiense.com:5000/entities'

``` 

### how to get the entity created?

``` 

curl -XGET 'http://jpbahiense.com:5000/entities/?q=<NAME OF THE ENTITY>'

``` 

### how to get by entity_type?

``` 

curl -XGET 'http://jpbahiense.com:5000/entities/?q=<NAME OF THE ENTITY>&entity_type=<TYPE OF THE ENTITIE>'

``` 

