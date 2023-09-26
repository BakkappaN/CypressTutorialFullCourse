describe('Cypress Assertion Suite',()=>{

    it('Cypress Assertion Test', ()=>{

        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')

        cy.get('textarea[type="search"]').then((element)=>{
            expect(element.text()).to.equal("javascript by testers talk");
        })

        cy.get('textarea[type="search"]').should("have.text","javascript by testers talk")

        cy.get('textarea[type="search"]').should("contain","javascript by testers talk")

        cy.get('textarea[type="search"]').should("be.visible")

        cy.get('textarea[type="search"]').should("have.html","javascript by testers talk")
   
        cy.get('textarea[type="search"]').should("have.html","javascript by testers talk")
        .and("have.attr","value")

        cy.get('textarea[type="search"]').should("have.html","javascript by testers talk")
        .and("have.attr","value").and("include","javascript by testers talk")

        cy.get('textarea[type="search"]').then((element)=>{
            expect(element.text()).to.have.length(26);
        })
    })

})