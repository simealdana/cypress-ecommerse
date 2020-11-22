describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('interface.json').as("testValues")
    })

    it('Search Items', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url,addItems} = testValues.isadora;
            cy.visit(url)
            cy.searchItems(search);
            // cy.addItems(addItems);
        })
    })
});
