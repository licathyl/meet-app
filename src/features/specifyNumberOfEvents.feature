Feature: Specify number of events

Scenario: When user hasn't specified a number, 32 is the default number
Given the user has not specified a number of events
When the event list is shown
Then the default number of events will be 32

Scenario: User can change the number of events they want to see
Given the main page is open
When the user specifies the number of events
Then the user should see a list of events that match the number they specified