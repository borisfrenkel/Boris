Feature: Existing Assets page

Scenario: Existing Assets page - set Show entries to 10 - verify 10 assets demonstrated
    Given Existing Assets page is open
    When I set Show entries to 10
    Then 10 Assets are demonstrated in the table

Scenario: Existing Assets page - set Show entries to 20 - verify 20 assets demonstrated
    Given Existing Assets page is open
    When I set Show entries to 20
    Then 20 Assets are demonstrated in the table

Scenario: Existing Assets page - set Show entries to 50 - verify 50 assets demonstrated
    Given Existing Assets page is open
    When I set Show entries to 50
    Then 50 Assets are demonstrated in the table

Scenario: Existing Assets page - set Show entries to 100 - verify 100 assets demonstrated
    Given Existing Assets page is open
    When I set Show entries to 100
    Then 100 Assets are demonstrated in the table

Scenario: Existing Assets page - click Page 2 - verify assets demonstrated
    Given Existing Assets page is open
    When I click on page 2
    Then 10 Assets are demonstrated in the table

Scenario: Existing Assets page - click Next Page - verify assets demonstrated
    Given Existing Assets page is open
    When I click on Next page
    Then Page 2 is open
    And 10 Assets are demonstrated in the table

Scenario: Existing Assets page - click Previous Page - verify assets demonstrated
    Given Existing Assets page is open
    When I click on Next page
    And I click on Previous page
    Then Page 1 is open

Scenario: Existing Assets page - enter existing Asset name - verify the Asset is demonstrated
    Given Existing Assets page is open
    When I enter existing Asset name into the Search box
    Then 1 Assets are demonstrated in the table

Scenario: Existing Assets page - enter not existing Asset name - verify no Assets are demonstrated
    Given Existing Assets page is open
    When I enter not existing Asset name into the Search box
    Then No matching records found message appears

Scenario: Existing Assets page - click on Name column header - verify table order has changed
    Given Existing Assets page is open
    When I click on Name column header
    Then 10 Assets are demonstrated in the table