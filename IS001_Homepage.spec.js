
    describe('Launch URL', function() {
      
        it('Verify user can view homepage', function() {
      
          
          cy.visit('https://studio-dev.inits.xyz')
          cy.get('.top-right > a').should('be.visible')

      
          

          })
          after (function()  {
            cy.clearCookie
            });  
        })
        
       