import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    this.setState({
      numberOfEvents: number,
    });
  };

  render() {
    return(
      <div className="numberOfEvents">
        <input
          type='text'
          className='eventsNumber'
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;