import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
    infoText: '',
  }
  
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if(!navigator.onLine) {
        if (this.mounted) {
          this.setState({
            infoText: 'Warning! No internet connection. The events displayed may not be up to date ', 
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events) 
          });
        }
      } else {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events)
          });
        }
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      let locationEvents = 
        location === 'all'
        ? events 
        : events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state; 
      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  }

  updateNumberOfEvents = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }

  render() {
    return (
      <div className="App">
        <h1>Meet</h1>
        <WarningAlert className="WarningAlert" text={this.state.infoText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
