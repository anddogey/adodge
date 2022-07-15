# DynamoDB

* Our NoSQL DB service

* SQL follows strict schema - NoSQL doesn't.

* If you have a lot of connecting data, don't use NoSQL. 

    * If there is a lot of connecting data in one object, dynamoDB has a cap on what can be pulled. 

* DynamoDBs good for microservices where the data does not connect to a lot of pieces

    * ex. connects to a users table, dump the data and figure out schema from there

        