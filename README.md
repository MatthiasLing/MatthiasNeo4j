# Matthias_Neo4j
Neo4j consulting engineer assignment

React frontend connected with Node.js/Express backend, communicates with Neo4j database hosted on Aura with bolt driver.

# Features

  - Create employee node with name and ID
  - Detects incorrect or invalid values (not required but makes for more usability)
  - Get all employees from database and display on dashboard in list form
  - Returned nodes are sorted based on ID and then name in the case of same ID
  - Prints error messages and updates for clarity

# Instructions

This project can be run from a URL or locally with modifications.

Generally: 
  - Go to url at http://neo4j.eba-xdakrsum.us-east-2.elasticbeanstalk.com, you can start entering and pulling data right away, no further instructions needed
  - Database endpoint: neo4j+s://d7f68664.databases.neo4j.io
  - Database user: neo4j
  - Database pw: IoGs126CsTNJPig5X3SuTYfIK0wCwkQC6bcflMK07aE

Locally:
  - Pull repository
  - Create local database in Neo4j browser, start it 
  - change boltUrl field in neo4j.js to localhost url
  - change password field to database password 
  - install dependencies:
    ```npm install```
  - You can run the API normally now
    ```npm run start```
    
    
    
Thanks for the great assignment!