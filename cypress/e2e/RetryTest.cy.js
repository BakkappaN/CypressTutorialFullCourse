describe('Retry Rerun Suite',()=>{

    it('Retry Rerun Test',{retries:2},()=>{

        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')

        cy.get('textarea[type="search"]').then((element)=>{
            cy.log("Text from Google 1: "+element.text())
        })

        cy.get('#APjFqb').then((element)=>{
            cy.log("Text from Google 2: "+element.text())
        }) 

       //class
       cy.get('[class="LC20lb MBeuO DKV0Md"]').eq(1).click();

    })

})