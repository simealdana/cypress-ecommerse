describe('Search a random item in a cart', () => {
    let local = null;
    beforeEach(()=>{
        cy.fixture('interface.json').as("testValues")
    })

    it('Select Item', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url} = testValues.dexter;
            cy.visit(url)
            cy.searchItems(search)
            cy.location().should((loc) => {
                local = loc.toString();
            });
        })
    });

    it('Select Item', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {selectItem} = testValues.dexter;
            cy.SelectItem(selectItem);
            cy.locationExpectNotEqual(local);
        })
    });
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

});
