describe('Repeat Test Suite',()=>{

    before('Running Before All Test', ()=>{
        cy.log('Running before all test!')
    })

    after('Running After All Test', ()=>{
        cy.log('Running after all test!')
    })

    beforeEach('Running Before Each Test',()=>{
        cy.log('Running before each test!')

        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
    })

    afterEach('Running After Each Test',()=>{
        cy.log('Running after each test!')
    })

    Cypress._.times(3, (k)=>{

        it('Repeat Test1',()=>{
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
    

   

})