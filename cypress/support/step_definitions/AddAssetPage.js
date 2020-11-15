/// <reference types="cypress" />

//import { Given } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from '../common/addAssetUtils'
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

  Given(/^Add page is open$/, () => {
    AddAssetPage.visit();
  });
  
  When(/^I type new Asset valid id and click Send$/, () => {
    var validId = AddAssetPage.generateValidId()
    AddAssetPage.type(validId);
    cy.wait(1000);
    AddAssetPage.send();
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
