Feature: Show/hide event details

Scenario: An event element is collapsed by default
Given the user hasn't selected an event
When the user views the event list
Then the user should see all events in a collapsed format

Scenario: User can expand an event to see its details
Given app loaded
And the event list is showing 
When the user selects an event 
Then the user should see the selected event in an expanded format 

Scenario: User can collapse an event to hide its details 
Given app loaded
And an event is selected/expanded 
When the user selects the expanded event again
Then the user should see the event in a collapsed format 