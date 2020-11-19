/// <reference types="cypress" />

//import { Given } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from './AddAssetPage'
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given(/^Add page is open$/, () => {
  AddAssetPage.visit();
});

When(/^I type new Asset valid id and click Send$/, () => {
  var validId = AddAssetPage.generateValidId()
  AddAssetPage.type(validId);
  AddAssetPage.send();
});

When(/^I type new Asset valid id, click Send and close Success Dialog$/, () => {
  var validId = AddAssetPage.generateValidId();
  cy.log('validId: ' + validId);
  cy.log('globalValidId: ' + AddAssetPage.globalValidId);
  AddAssetPage.type(validId);
  AddAssetPage.send();
  AddAssetPage.closeSuccessDialog();
});

When(/^I type new Asset invalid id and click Send$/, () => {
  AddAssetPage.type('hgjkhjkh');
  AddAssetPage.send();
});

When(/^I type new Asset empty id and click Send$/, () => {
  AddAssetPage.type(' ');
  AddAssetPage.send();
});

Then(/^Correct format message appears$/, () => {
  AddAssetPage.verifyValidFeedbacklabelIsVisible();
});

Then(/^Correct format message does not appear$/, () => {
  AddAssetPage.verifyInvalidFeedbacklabelIsNotVisible();
});

When(/^I go to Existing Assets page$/, () => {
  cy.get('a.item').contains('Existing Assets').click();
  cy.get('.mdb-datatable-filter', { timeout: 12000 });
});

When(/^I go to Description page$/, () => {
  cy.get('a.item').contains('Description').click();
});

Then(/^Verify I am on Description page$/, () => {
  cy.get('article', {timeout: 12000}).should('contain', 'System requirements');
  cy.get('article').should('contain', 'User has abbility to Add asset');
  cy.get('article').should('contain', 'User has abbility to see Existing asset');
});

When(/^I go to Add Asset page$/, () => {
  cy.get('a.item').contains('Add Asset').click();
});

Then(/^Verify I am on Add Asset page$/, () => {
  cy.get('.grey-text', {timeout: 20000}).should('contain', 'New Asset');
  cy.get('.btn-warning').should('contain', 'Send');
  cy.get('.AppHeader h1').should('contain', 'Frontend test-developer technical assignment');
});
