#language US English

Feature: Feature name
    Feature Description

Scenario: Add new computer with all fields filled in
    Given that I am on the add computers page
    When I fill in all required fields with valid information
    And I click on the add button
    Then the computer is added successfully

# Scenario: Add new computer with required fields
#     Given that I'm on the add computers page
#     When I only fill in the required fields with valid information
#     And I click on the add button
#     Then the computer is added successfully

# Scenario: Trying to create a computer without filling in the required field
#     Given that I'm on the add computers page
#     When I try to add a new computer without filling in the required field
#     Then I see an error message indicating that the required field was not filled in
#     And the computer is not added to the list

# Scenario: Filter computer by name
#     Given that I am on the computer listing page
#     When I filter computers by the name "Macbook"
#     Then the list displays only computers with the corresponding name

# Scenario: Delete a computer from the list
#     Given that I am on the computer listing page
#     And there is a computer in the list with the name "ComputerToDelete"
#     When I select the computer for deletion
#     And I confirm the deletion
#     Then the computer is successfully removed from the list