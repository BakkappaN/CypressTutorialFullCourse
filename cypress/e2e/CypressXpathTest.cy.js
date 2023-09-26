describe('Cypress Xpath Suite', () => {

    it('Cypress Xpath Test', () => {
  
      cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')

      cy.xpath('//*[@type="search"]').clear()

      cy.xpath('//*[@type="search"]').type("api testing by testers talk")

      cy.xpath('//*[text()="Github"]').click();
    
    })

  
  })