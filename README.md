# Knab

## Test Trello platform for UI and API calls

### Primary goal
This project is to test CRUD operations for Trello platform which includer spec files for UI and BE test.

### Brief description to run test
This project covers BDD framework as well as execution of spec.js run.
POM has been used to enhance access to web elemnts.(/Users/preetirani/Desktop/CypressWorkspace/cypress/integration/pageObjects)
This project also provides a very well formatted HTML report using Mochawesone-merge plugin.Most of the varient approaches and commands has been using in implemetiong the scripts.

UI test: This project includes UI.feature file under /Users/preetirani/Desktop/CypressWorkspace/cypress/integration/UI.feature where below three test cases has been impleted using BDD faremwork.
1. Successfull login(failed deliberatly at assertion to get one failed test in report)
2. Getting error message for non existing email ID
3. asserting msg on the page for incorrect password

API test: This project includes api.js files where below POST,GET and DELETE API calls has been implememted using key and token.
1. Getting deatils of a memeber 
2. Creating a board 
3. deleting a board 
To run all test(BE+FE): npm run test (This command will execute all spec.js and feature files)

Tests can be run using cypress test runner as well using below steps:
1. open test runner: yarn run cypress open
2. select the feature/spec.js you want to execute

#### Reporting 
once above execution is completed a report will be generated under folder path /Users/preetirani/Desktop/CypressWorkspace/cypress/reports/mochareports where list of all passed/failed/skipped test along with time stamp,run time can ve validated.


**Note: This project only for demo purpose.


