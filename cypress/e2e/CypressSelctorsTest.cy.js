describe('Cypress Selectors Suite',()=>{

    it('Cypress Selector Test',()=>{

      //  cy.visit('https://www.youtube.com/@testerstalk');

        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')

        cy.get('textarea[type="search"]').then((element)=>{
            cy.log("Text from Google 1: "+element.text())
        })

        cy.get('#APjFqb').then((element)=>{
            cy.log("Text from Google 2: "+element.text())
        }) 

        //first element
       // cy.get('.IUOThf > a').first().click();

       //last element
       //cy.get('.IUOThf > a').last().click();

       //index element
       //cy.get('.IUOThf > a').eq(1).click();

        //starts-with
       // cy.get('button[type^="sub"]').click();

       //ends-with
      // cy.get('button[type$="mit"]').click()

       //contains - CSS
       //cy.get('button[type*="ubmi"]').click()

       //class
       cy.get('[class="LC20lb MBeuO DKV0Md"]').eq(1).click();

        //contains - Cypress
       //cy.contains('JavaScript by Testers Talk').click();
       
      //  cy.get('tp-yt-paper-tab > div').eq(2).click();

    })

})