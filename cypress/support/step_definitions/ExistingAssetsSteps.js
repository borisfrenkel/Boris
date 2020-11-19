import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import ExistingAssetsPage from './ExistingAssetsPage';
import AddAssetPage from './AddAssetPage'
import AddAssetSteps from './AddAssetSteps';

When(/^I click on Existing Assets button$/, () => {
    ExistingAssetsPage.goTo();
});


Given(/^Existing Assets page is open$/, () => {
    ExistingAssetsPage.visit();
});

When(/^I set Show entries to (.*)$/, (numOfAssetsToShow) => {
    ExistingAssetsPage.setShowEntriesTo(numOfAssetsToShow);
});

Then(/^(.*) Assets are demonstrated in the table$/, (numberOfEntries) => {
    ExistingAssetsPage.verifyNumberOfEntries(numberOfEntries);
});

When(/^I click on page (.*)$/, (pageNumber) => {
    ExistingAssetsPage.clickOnPageNumber(pageNumber);
});

When(/^I click on Next page$/, () => {
    ExistingAssetsPage.clickOnPageNumber('Next');
});

When(/^I click on Previous page$/, () => {
    ExistingAssetsPage.clickOnPageNumber('Previous');
});

Then(/^Page (.*) is open$/, (pageNumber) => {
    ExistingAssetsPage.verifyPageNumberIsOpen(pageNumber);
});

When(/^I enter existing Asset name into the Search box$/, () => {
    cy.get('tbody tr td').eq(3).invoke('text').then((existingAssetName) => {
        ExistingAssetsPage.search(existingAssetName);
    });    
});

When(/^I enter Asset (.*) into the Search box$/, (assetName) => {
    ExistingAssetsPage.search(assetName);
});

When(/^I enter not existing Asset name into the Search box$/, () => {
    ExistingAssetsPage.search('dsfgdsgdfhftgjhfgjghkghgkhf');
});

Then(/^No Asset is demonstrated in the table$/, () => {
    ExistingAssetsPage.verifyNumberOfEntries(0);
});

Then(/^No matching records found message appears$/, () => {
    ExistingAssetsPage.verifyNoMatchingRecordsFoundMessageAppears();
});

When(/^I click on Name column header$/, () => {
    cy.get('.sorting').click();
});

When(/^Search for the new Asset$/, () => {
    cy.log('globalValidId: ' + AddAssetPage.globalValidId);
    ExistingAssetsPage.search(AddAssetPage.globalValidId);
});

Then(/^The new Asset is found$/, () => {
    cy.get('tbody tr td').eq(0).should('contain', AddAssetPage.globalValidId);
});
// Then(/^Table order is changed$/, () => {

// });