describe('user login', function() {
    it('login', function() {
    cy.visit('https://studio-dev.inits.xyz')
    cy.get('.top-right > a').click()
    cy.get('.col-sm-4').type('george@initsng.com')
    cy.get('.col-md-4').type('password')      
    cy.get('#submitButton').click()

    })
    })