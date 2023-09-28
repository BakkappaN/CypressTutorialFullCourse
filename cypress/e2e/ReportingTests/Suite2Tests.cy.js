describe('Suite2', () => {

    it('Suit2 Test1', () => {
  
      cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')

      cy.xpath('//*[@type="search"]').clear()

      cy.xpath('//*[@type="search"]').type("api testing by testers talk")

     // cy.xpath('//*[text()="Github"]').click();
    
    })

    it('Suit2 Test2', () => {
  
      cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')

      cy.xpath('//*[@type="search"]').clear()

      cy.xpath('//*[@type="search"]').type("api testing by testers talk")

     // cy.xpath('//*[text()="Github"]').click();
    
    })

  
  })