# Dynamic Audit Log Problem

## Problem

A small team has posted a gig listing on a software freelancer site, asking for a developer to create the API service software and database schema necessary to store and retrieve an audit log of events. They've accepted your offer to complete the work, but they don't seem to be the most forgiving or patient. They refuse to give further information about what sort of product they're building, and they're very particular about the technical work they're paying for. They are requiring REST for the API and SQL for the database schema.

## Challenge

1. Design the database schema.
2. Design the REST API.
3. Be prepared for any ad hoc requirement changes or advanced conceptual questions the interviewer might throw at you. This may include considerations for any of the following items:
    1. Performance
    2. Pagination
    3. Error Handling
    4. Breaking Change Handling
    5. Versioning
    6. Filtering

## Product Requirements

*Not provided* — and they won't tell us.

## Technical Requirements

1. As some app, I want an API service that stores events with the following request body format, so that I have an audit log for future reference:
    ```typescript
    type AddAuditLogRequestBody = {
        subjectId: string;
    	actionType: 'add' | 'remove' | 'modify';
        targetId?: string;
        previous?: any;
        next?: any;
    };
    ```

2. As some app, I want an API service that is capable of retrieving logs through the following filters, so that I am able to customize my audit log response:

    1. `subjectId`
    2. `actionType`
    3. `targetId`
    4. `dateTime`