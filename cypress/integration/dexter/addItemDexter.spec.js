describe('Search a random item in a cart', () => {

    beforeEach(()=>{
        cy.fixture('interface.json').as("testValues")
    })

    it('Search Item', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const {search,url} = testValues.dexter;
            cy.visit(url)
            cy.searchItems(search)
        })
    });

    it('Add Items', ()=>{
        cy.get('@testValues').then((testValues)=>{
            //Add items to cart
            const {selectItem,addItems} = testValues.dexter;
            cy.addItem(addItems,selectItem);
            const itemsLength =selectItem.numbersItem.length;
            cy.addItemsExpect(itemsLength,addItems);
            //Delete items to cart
            const {deleteItems} = testValues.dexter;
            cy.deleteItem(deleteItems);
            cy.wait(2200);
            cy.deleteItemExpect(itemsLength,deleteItems)
        })
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    });

});
