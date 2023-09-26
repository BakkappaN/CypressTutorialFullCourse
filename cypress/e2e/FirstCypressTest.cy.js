describe('Test Suite 1', () => {

  it('My First Test 1', () => {

    cy.log("Test1 is started");
    cy.visit('https://www.youtube.com/')
    cy.log("Navigated to youtube site");

    cy.get('input[id="search"]').type("javascript by testers talk");

    cy.get('button[id="search-icon-legacy"] > yt-icon').click();
    cy.log("Test1 is completed");

   
   
  })

  it('My First Test 2', () => {

    cy.log("Test2 is started");
    cy.visit('https://www.youtube.com/')
    cy.log("Navigated to youtube site");

    cy.get('input[id="search"]').type("javascript by testers talk");

    cy.get('button[id="search-icon-legacy"] > yt-icon').click();
    cy.log("Test2 is completed...!!!");

  })

})