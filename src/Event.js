import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class Event extends Component {
  state = {
    show: false,
  }

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    let event = this.props.event;
    
    return (
      <div className='event'>
        <h2 className='eventSummary'>{event.summary}</h2>
        <p className='eventDate'>{event.start.dateTime} {event.start.timeZone}</p> 
        <p className='eventLocation'>@{event.summary} | {event.location}</p>

        {this.state.show === false && (
          <Button variant="primary" className='showDetails' onClick={() => this.handleButton()}>
            Show Details
          </Button>
        )}

        {this.state.show === true && (
          <div className='EventDetails'>
            <h3>About the event:</h3>
            <a href={event.htmlLink} rel='noreferrer' target='_blank'>
              See details on Google Calendar
            </a> 
            <p className='eventDescription'>{event.description}</p>
            <Button variant="primary" className='hideDetails' onClick={() => this.handleButton()}>
              Hide Details
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
