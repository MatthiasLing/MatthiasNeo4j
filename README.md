# Matthias_Neo4j
Neo4j consulting engineer assignment

React frontend connected with Node.js/Express (ERN stack).  Hosted on AWS Elastic Beanstalk using CodePipeline to GitHub repo, communicates with Neo4j database hosted on Aura.

# Features

  - Create employee node with name and ID
  - Detects incorrect or invalid values (not required but makes for better usability)
  - Get all employees from database and display on dashboard in list form
  - Returned nodes are sorted based on ID and then name in the case of same ID
  - Prints error messages and updates for clarity

# Instructions

This project can be run from the URL with no setup or locally.

Generally: 
  - Go to url at http://neo4j.eba-xdakrsum.us-east-2.elasticbeanstalk.com, you can start entering and pulling data right away, no further instructions needed
  - Database Connection URL: neo4j+s://d7f68664.databases.neo4j.io
  - Database user: neo4j
  - Database password: IoGs126CsTNJPig5X3SuTYfIK0wCwkQC6bcflMK07aE

Locally:
  - Download repository
  - install dependencies:
    ```npm install```
  - You can run the API normally now:
    ```npm run start```
    
Thanks for the great assignment!