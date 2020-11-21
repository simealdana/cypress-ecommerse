describe('Login generico', () => {

    beforeEach(()=>{
        cy.fixture('fb.json').as("testValues")
    })

    it('Search Items', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url} = testValues.isadora;
            cy.visit(url)
            cy.searchItems(search);
        })
    })
});
