# Lambdas

* Three states:

    * Cold- It needs to boot up, therefore will be slow when called

    * Warm- It's ready

    * Hot- It's doing something 

* Lambdas live for 15 minutes, meaning they will only be warm or hot for 15 minutes. 

* Lambdas can host and run many different programming languages as applications. 
* Eventually consistent in their process, "Fire and forget". Asynchronous 
* Used for firing and forgetting input for processing. 

* These functions are typically known as ***microservices***:
    * Services that exist in smaller environments that are so niche/specific so that you don't need to consolidate them into a larger service. Typically also split because of their asynchronous nature, however with a lot of throughput  and bandwidth it might make more sense to spin them up as a service.



### Creating a function

* Typically author from scratch, other choices like using a blueprint, container image, or browse serverless app repo
* Different runtimes to choose from (python, node.js, C#)
* Architecture usually is x86_64 (Intel)
* Creating a set of code that is executed by demand on a suite of servers owned by AWS
* Gives a URL to hit it from (or done programmatically)

