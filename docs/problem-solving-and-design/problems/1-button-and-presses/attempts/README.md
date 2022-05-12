# Buttons and Presses Problem

## Attempt 1

### Notes

* Design, server, DB up for creation
* MA and AA both retrieving info from "somewhere"
* How to design a connection between MA + AA and DB 

### Reflection

* Don't immediately start typing- could be taken wrongly
* Be engaged intentionally- full attention & establish ability to write down thoughts

## Attempt 2

### Notes

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