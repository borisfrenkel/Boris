Feature: Add new Asset

Scenario: Add new Asset with valid Id - verify valid message
    Given Add page is open
    When I type new Asset valid id and click Send
    Then Correct format message appears

Scenario: Add new Asset with invalid Id - verify valid message
    Given Add page is open
    When I type new Asset invalid id and click Send
    Then Correct format message does not appear

Scenario: Add new Asset with empty Id - verify valid message
    Given Add page is open
    When I type new Asset empty id and click Send
    Then Correct format message does not appear