import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }


  handleInputChanged = (event) => {
    const number = event.target.value;
    this.setState({
      numberOfEvents: number,
    });
    this.props.updateEvents(number);
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
      </div>
    );
  }
}

export default NumberOfEvents;