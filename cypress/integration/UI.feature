Feature: UI test

I want to login Trello dashboard and Perform CRUD operations 


@smoke
Scenario:  Error msg for non existing email ID

    Given I open Trello login page
    When I fill in non exist email and password
    When I click on login button to continue
    Then I should get error msg 

Scenario:  Error msg for incorrect email ID

    Given I open Trello login page
    When I fill in incorrect email and password
    When I click on login button to continue
    Then I should get error msg 


Scenario:  login with valid ID

    Given I open Trello login page
    When I fill in correct email and password
    When I click on login button
    Then I should be redirected to Trello dashboard