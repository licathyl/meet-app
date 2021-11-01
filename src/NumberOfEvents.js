import React, { Component } from 'react';

class NumberOfEvents extends Component {
  handleInputChanged = (event) => {
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return(
      <div className="numberOfEvents">
        Number of Events:
        <input
          type='text'
          className='eventsNumber'
          value={this.props.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;