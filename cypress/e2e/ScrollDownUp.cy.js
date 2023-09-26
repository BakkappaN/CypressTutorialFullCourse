
describe('Scroll Up Down Suite', () => {

    it('Scroll Test', () => {
  
      cy.visit('https://www.youtube.com/watch?v=ACUMZ3OkExQ&list=PLUeDIlio4THFLrS29tJnP9yz-QKhn4mdB&index=1')

      cy.wait(5000);

      cy.contains('JavaScript Full Course Overview')
        .scrollIntoView().should('be.visible').click();
   
    })
  
  })