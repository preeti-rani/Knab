class login {

    email(){
        return cy.get('#user')
    }

    password(){
        return  cy.get('input[type="password"]')
    }
}

export default login