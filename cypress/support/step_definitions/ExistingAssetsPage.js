class ExistingAssetsPage{ 
    static visit(){
        cy.visit(Cypress.config().baseUrl + '/assets');
        cy.reload();
        cy.get('.mdb-datatable-filter', { timeout: 20000 });
    }

    static goTo(){
        cy.get('a[href*=\'assets\']').click();
        cy.get('.mdb-datatable-filter', { timeout: 20000 });
    }
    
    static setShowEntriesTo(numberOfEntriesToShow){
        cy.get('.dataTables_info').invoke('text').then((text) => {            
            if(text.includes('to ' + numberOfEntriesToShow + ' of') == false){
                cy.get('.bs-select .custom-select').select(numberOfEntriesToShow);
            }
        });
    }
    
    static verifyNumberOfEntries(numberOfEntries){
        cy.get('tbody td').should('have.length', numberOfEntries);
    }

    static verifyNoMatchingRecordsFoundMessageAppears(){
        cy.get('tbody td').should('contain', 'No matching records found')
    }

    static clickOnPageNumber(pageNumber){
        cy.get('.page-link').contains(pageNumber).click();
    }

    static verifyPageNumberIsOpen(pageNumber){
        cy.get('.dataTables_info').invoke('text').then((text) => {
            expect(text).to.contain('to ' + pageNumber + '0');  
        });
    }
    
    static getExistingAssetName(){
        // cy.get('tbody tr td').its('length').then((size) => {
        //     cy.log('size: ' + size);
        //     cy.get('tbody tr td').eq(Math.round(Math.random() * (size - 1))).invoke('text').then((text) => {
        //         cy.log('text: ' + text);
        //         return text;  
        //     });
        // })
        cy.get('tbody tr td').eq(3).invoke('text').then((text) => {
            cy.log('text: ' + text);
            return text;  
        });
    }

    static search(assetName){
        cy.get('.mdb-datatable-filter input').type(assetName);
    }

    static verifyAssetIsInTheTable(assetName){
        cy.get('tbody tr td').contains(assetName).should('exist');
    }
    
    static randomGenerator (number) {
        return Math.round(Math.random() * (number - 1));
    }
}

export default ExistingAssetsPage;