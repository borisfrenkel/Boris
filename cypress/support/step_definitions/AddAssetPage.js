const defaultFormAddAsset = '#defaultFormAddAsset';
const sendButton = 'button';
const validFeedbackLabel = 'div.valid-feedback';

class AddAssetPage{ 
    static globalValidId = '';
    
    static getGlobalValidId(){
        return this.globalValidId;
    }

    static visit(){
        cy.visit(Cypress.config().baseUrl + '/add');
        cy.reload();
    }

    static type(id) {
        cy.get(defaultFormAddAsset, {timeout: 12000})
          .type(id); 
    }

    static send() {
        cy.get(sendButton, {timeout: 12000})
          .click(); 
    }

    static verifyValidFeedbacklabelIsVisible(){
        cy.get(validFeedbackLabel).should('be.visible');
    }

    static verifyInvalidFeedbacklabelIsNotVisible(){
        cy.get(validFeedbackLabel).should('not.be.visible');
    }

    static closeSuccessDialog(){
        cy.get('div.modal-footer button.btn-warning').click();
    }

    static generateValidId(){ 
        AddAssetPage.globalValidId = '';       
        var capitalCharacters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = capitalCharacters.length;

        for ( var i = 0; i < 4; i++ ) {
            AddAssetPage.globalValidId += capitalCharacters.charAt(Math.floor(Math.random() * charactersLength));            
        }  
        for ( var i = 0; i < 10; i++ ) {
            var num = Math.floor((Math.random() * 9) + 1);
            AddAssetPage.globalValidId += num;
        }
        return AddAssetPage.globalValidId;
    }
}

export default AddAssetPage;