Feature: Add new Asset page

Scenario: Add Asset page - Add new Asset with valid Id - verify valid message
    Given Add page is open
    When I type new Asset valid id and click Send
    Then Correct format message appears

Scenario: Add Asset page - Add new Asset with invalid Id - verify valid message
    Given Add page is open
    When I type new Asset invalid id and click Send
    Then Correct format message does not appear

Scenario: Add Asset page - Add new Asset with empty Id - verify valid message
    Given Add page is open
    When I type new Asset empty id and click Send
    Then Correct format message does not appear

Scenario: Add Asset page - Add new Asset - go to Existing Assets page - Search for the Asset - verify the new Asset is found
    Given Add page is open
    When I type new Asset valid id, click Send and close Success Dialog
    And I go to Existing Assets page
    And Search for the new Asset
    Then The new Asset is found

Scenario: Add Asset page - go to Description page - verify Description page is open
    Given Add page is open
    When I go to Description page
    Then Verify I am on Description page


Scenario: Add Asset page - go to Description page - go back to Add Asset page - verify Add Asset page is open
    Given Add page is open
    When I go to Description page
    And I go to Add Asset page
    Then Verify I am on Add Asset page