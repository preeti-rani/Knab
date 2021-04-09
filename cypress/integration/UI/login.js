import Login from '../pageObjects/login'

const login = new Login()
Given('I open Trello login page', () => {
        cy.visit('https://trello.com/login')
        cy.url().should('include', 'login')
});

When('I fill in correct email and password', () => {
        login.email().type('preetirani0691@gmail.com')
        cy.get('#login').contains('Log in with Atlassian').click() 
})
When('I click on login button', () => {
       
        login.password().type('Os1201056')
        cy.get('#login-submit').should('be.visible').click()
        cy.reload()
});

Then('I should be redirected to Trello dashboard', () => {
        cy.contains('boards').should('be.visible')
});

