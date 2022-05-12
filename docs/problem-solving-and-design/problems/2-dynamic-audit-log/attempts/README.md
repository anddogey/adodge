# Dynamic Audit Log Problem

## Attempt 0

### Notes

* Requirement 1:

    * AddAuditLogRequest Body = {

        subjectId: string; 																					   Id of the subject (actor) of this event

        actiontype: 'add'  | 'remove' | 'modify';													What is being done

        targetId?: string //? = undefined and sometimes null or optional		id of the recipient/victim of the event

        previous?: any;																						  the data that existed prior to the action

        next?: any;  //any = num/string/obj/boolean										   the data that replaces "previous" during action

        }

    * PUT - update/upserting (inserting or updating combo)

    * ..../log 

        {.... AddAuditLogRequestBody}

* Requirement 2: retrieving 

    * GET - retrieving (can include parameters to narrow down)
        * /log?subjectId=__&actionType=_ &... &dateTimeMin= __ / &dateTimeMax= __
    * Logs table(contains): 
        * id: string (randomized)
        * subjectId: string & Fk
        * actionType: 'add' | 'remove' | 'modify';
        * targetId: string | null;
        * prev: string | null;
        * next: string | null;
        * dateTime: Date; (time we created the record, "NOW")

* picture

    ![image-20220512004913353](C:\Users\Jewish 2.0\Dropbox\My PC (DESKTOP-SB26MAP)\Documents\Projects\adodge\docs\problem-solving-and-design\problems\2-dynamic-audit-log\attempts\README.assets\image-20220512004913353.png)



## Attempt 1

### Notes

### Reflection

## Attempt 2

### Notes

### Reflection

