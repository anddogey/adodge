# SQL

* `select * from <tablename>;` 

    * Retrieve all fields from the table

* `select distinct <column> from <tablename>`;

    * Retrieve column with unique values from the table

* `select * from <tablename> where <condition> <operator> <condition_pt.2>`;

    * list of valid operators:

        ```
        =
        >
        <
        >=
        <=
        <> //not equal, can also be !
        between
        like
        in
        ```

* `select * from <tablename> where <cond> = 5&& <cond> = true;`

    * and's/or's

* `select <column> from <table< order by <column>`

    * orders columns based on specified columns by ascending/descending order

* `select <col> from <tabl> where <col> is null; / is not null;`

    * duh

* `insert into <table name> (<col names from table>) values (<new info to add>)`;

    * can be shorthand if adding values into ALL columns

* `update <table> set <col> = <value> where <cond> = <value2>`;

    * updates

* `delete from <tab> where <cond>;`

    * yeah

* `select top <number> <col> from <table>...;`

    * selects top number of things from....

* `select count(<column>) from <table> where <cond>`;

    * returns number from column where condition matches

* `select <column> as` 

    * useful for joins

* ```
    inner join
    left join0
    right join
    full join
    self join
    ```

    * venn diagrams exist for these concepts - LOOK THEM UP LATER

* `select <col> from <table> where <cond> group by <cols>;`

    * groups rows that have the same values

* procedure - SQL functions / tasks 

* transaction - way of telling when something happened / can be referenced for rollbacks
