describe('user login', function() {
  it('login', function() {
  cy.visit('https://studio-dev.inits.xyz')
  cy.get('.top-right > a').click()
  cy.get('.col-sm-4').type('george@initsng.com')
  cy.get('.col-md-4').type('051167')      
  cy.get('#submitButton').click()
  cy.get('.btn-link').click()
  cy.get('.col-md-4')
  cy.get('#email').type('george@initsng.com')
  cy.get('#submitButton').click()

  })
  })