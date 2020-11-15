const defaultFormAddAsset = '#defaultFormAddAsset';
const sendButton = 'button';
const validFeedbackLabel = 'div.valid-feedback';

class AddAssetPage{ 
    static visit(){
        cy.visit(Cypress.config().baseUrl + '/add');
        cy.reload();
    }

    static type(id) {
        cy.get(defaultFormAddAsset)
          .type(id); 
    }

    static send() {
        cy.get(sendButton)
          .click(); 
    }

    static verifyValidFeedbacklabelIsVisible(){
        cy.get(validFeedbackLabel).should('be.visible');
    }

    static verifyInvalidFeedbacklabelIsNotVisible(){
        cy.get(validFeedbackLabel).should('not.be.visible');
    }

    static generateValidId(){
        var result = '';
        var capitalCharacters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = capitalCharacters.length;
        for ( var i = 0; i < 4; i++ ) {
            result += capitalCharacters.charAt(Math.floor(Math.random() * charactersLength));            
        }  
        for ( var i = 0; i < 10; i++ ) {
            var num = Math.floor((Math.random() * 9) + 1);
            result += num;
        }
        return result;
    }
}
export default AddAssetPage;