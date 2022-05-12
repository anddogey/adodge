# Process

1. Listen to/read the prompt. ***REALLY*** absorb the requirements mentioned, directly/indirectly.
2. Think about what pieces are involved: actors(doing an actions), handlers(having something done to them), storage.
3. Think about how to connect the pieces in a diagram.
4. Ask if any pieces currently exist. if so ask about the additional context re: the pieces. if not, ask if there are any preferred specs.
5. Write a list of product requirements.
6. Translate them to a list of technical requirements.
7. Design the data models (typically in SQL).
8. Design the API (typically in REST)
9. Walkthrough expanded features for more advanced considerations (filtering, performance, versioning)
10. Be ready to iterate per changing requirements.



## There's a button...

* All brand new, no previous software preferences, product vs. technical, REST API + SQL DB, etc....



1. Understand the problem. (There's a button)
2. Clarify the context. (All brand new, no prev. software preferences)
3. Translate the requirements. (Product vs. technical)
4. Attempt a  solution. (REST API + SQL DB)
5. Reconsider and iterate.  (.... But what if?)





## Attempt 1

Notes

* Design, server, DB up for creation
* MA and AA both retrieving info from "somewhere"
* How to design a connection between MA + AA and DB 

Reflection

* Don't immediately start typing- could be taken wrongly
* Be engaged intentionally- full attention & establish ability to write down thoughts

## Attempt 2

Notes

* No language needed for creating MA/AA, designs done, just linking API service to the database
* No service provided, creating in process (GET/PUT) 
* DB Host AWS RDS No tables
* Two tables - User + button id , button + id + presses
* separate presses into button table, compartmentalize
* get users/${userid}/button (people pleaser answer)
* put updating the information in DB, sending back to MA
* users/${userid}/button (could be users/:userid/button or /:userid/presses or /:userid/button/presses)
* what is the request/response bodies look like?
* 

req body =  { "presses:" < savednum> }

response: {"presses" : < savednumfromDB>}

* 

put req: { "presses" :

​				"releases": }





### Reflection 

* **Every time we think about a simplification, we have to think about what our assumptions are**,
* Don't compromise ground for simplification 
* get doesn't have a request **body** 
* types of changes: additions, removals, changes/modifications
* Record IC/OOC notes separately in future 
* Correct word choice mistakes/flubs/things that don't make sense  
