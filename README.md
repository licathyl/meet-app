# Meet App
## Project Description
This is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique that allows users to browse upcoming events happening in a certain city. The application uses the Google Calendar API to fetch upcoming events. 
## Project Features
* Filter events by city
* Show/hide event details
* Specify number of events
* Use the app when offline
* Add an app shortcut to the home screen
* View a chart showing the number of upcoming events by city
## User Stories
* As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
* As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
* As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
* As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
* As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
* As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
## Scenarios
### Feature 1: Filter events by city
#### Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.
* Given user hasn't searched for any city
* When the user opens the app
* Then the user should see a list of all upcoming events
#### Scenario 2: User should see a list of suggestions when they search for a city.
* Given the main page is open
* When user starts typing in the city textbox
* Then the user should see a list of cities (suggestions) that match what they've typed
#### Scenario 3: User can select a city from the suggested list.
* Given the user was typing "Berlin" in the city textbox and the list of suggested cities is showing
* When the user selects a city (e.g., "Berlin, Germany") from the list
* Then their city should be changed to that city (i.e., "Berlin, Germany") and the user should receive a list of upcoming events in that city
### Feature 2: Show/hide an event's details
#### Scenario 1: An event element is collapsed by default
* Given the user hasn't selected an event
* When the user views the event list
* Then the user should see all events in a collapsed format
#### Scenario 2: User can expand an event to see its details
* Given the event list is showing
* When the user selects an event
* Then the user should see the selected event in an expanded format
#### Scenario 3: User can collapse an event to hide its details
* Given the event list is showing and an event is selected/expanded
* When the user selects the expanded event again
* Then the user should see the event in a collapsed format
### Feature 3: Specify number of events
#### Scenario 1: When user hasn't specified a number, 32 is the default number
* Given the user has not specified a number of events
* When the event list is shown
* Then the default number of events will be 32
#### Scenario 2: User can change the number of events they want to see
* Given the main page is open
* When the user specifies the number of events
* Then the user should see a list of events that match the number they specified
### Feature 4: Use the app when offline
#### Scenario 1: Show cached data when there's no internet connection
* Given there is no internet connection
* When the user opens the app
* Then the user should see a cached version of the app from the last time they were online
#### Scenario 2: Show error when user changes the settings (city, time range)
* Given the app is offline and user is viewing cached version of the app
* When the user changes the settings
* Then user should see an error message that they are offline
### Feature 5: Data Visualization
#### Scenario 1: Show a chart with the number of upcoming events in each city
* Given user would like to see a visual representation of events
* When user selects charts
* Then user should see a chart with the number of upcoming events in each city
## Project Links
* GitHub repository link: https://github.com/licathyl/meet-app.git
* GitHub Pages link: https://licathyl.github.io/meet-app
## Project Dependencies
* Javascript
* React
