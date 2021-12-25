# TharwahCaseStudyProject

Build a full stack Django + React Case Study with a CRUD App. The back-end server uses Django with Rest Framework for REST APIs and interacts with PostgreSQL database. Front-end side is made with React.

### Django CRUD with PostgreSQL overview

| Methods | Urls                          | Actions                                           |
| ------- | ----------------------------- | ------------------------------------------------- |
| GET     | api/employees                 | get all Employees                                 |
| GET     | api/employees/:id             | get Employee by id                                |
| POST    | api/employees                 | add new Employee                                  |
| PUT     | api/employees/:id             | update Employee by id                             |
| DELETE  | api/employees/:id             | remove Employee by id                             |
| DELETE  | api/employees                 | remove all Employees                              |
| GET     | api/employees?first_name=[kw] | find all Employees which first_name contains 'kw' |

### Roadmap of the project in Trello:

https://trello.com/invite/b/sRPUIJKW/53504c97aa597e39d58247686e945415/tharwah-case-study-project
