describe('Dropdown List Suite', () => {

    it('Dropdown List Test', () => {
  
      cy.visit('https://example.cypress.io/commands/actions')

       // cy.get('.action-select').select(2) //index

      // cy.get('.action-select').select('bananas'); //visible text

      cy.get('.action-select').select('fr-apples'); //value
    
    })

  })