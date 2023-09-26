describe('Module2 Suite', () => {

    it('Module2 Test', () => {
  
      cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')

      cy.xpath('//*[@type="search"]').clear()

      cy.xpath('//*[@type="search"]').type("api testing by testers talk")

     // cy.xpath('//*[text()="Github"]').click();
    
    })

  
  })