import 'cypress-iframe'

describe('IFrame Suite', () => {

    it('IFrame Test', () => {
  
      cy.visit('./iframesdemo.html')

     // cy.frameLoaded('[name="myframe"]'); //frame name

     cy.frameLoaded('#buttonframe'); //frame id

      cy.iframe().contains('Downloads').click();
     
    })
  
  })