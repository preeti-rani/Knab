Given('I open Trello login page', () => {
        cy.visit('https://trello.com/login')
});

When('I fill in incorrect email and password', () => {
          cy.get('#user').type('abc@gma.com')
          cy.get('#password').type('Os1206')
          
    })
When('I click on login button to continue', () => {
        cy.get('#login').click()
        //cy.get('.btn').contains('login').should('be.visible').click
});

Then('I should get error msg', () => {
        cy.contains('Incorrect email address and / or password. Do you need help logging in?')
});


