
Given('I open Trello login page', () => {
        cy.visit('https://trello.com/login')
        cy.title().should('eq','Log in to Trello')
});

When('I fill in non exist email and password', () => {
          cy.get('#user').type('preeti.rani0691@gmail.com')
          //cy.get('input[type="email]')
          cy.get('#password').type('Os1201056')
          
    })
When('I click on login button to continue', () => {
        cy.get('#login').click()
        //cy.get('.btn').contains('login').should('be.visible').click
        //cy.go('back')
});

Then('I should get error msg', () => {
        cy.contains('There isn\'t an account for this email').should('be.visible')
});



