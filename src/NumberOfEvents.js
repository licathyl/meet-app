import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: ''
  }
  
  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
        infoText: 'Please enter a number between 1 and 32',
      })
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: '',
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return(
      <div className="numberOfEvents">
        Number of Events:
        <input
          type='text'
          className='eventsNumber'
          value={this.state.numberOfEvents}
          onChange={(e) => this.handleInputChanged(e)}
        />
        <ErrorAlert className='ErrorAlert' text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;