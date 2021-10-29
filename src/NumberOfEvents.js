import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }


 

  render() {
    return(
      <div className="numberOfEvents">
        Number of Events:
        <input
          type='text'
          className='eventsNumber'
          value={this.state.numberOfEvents}
          onChange={(e) => this.props.handleInputChanged(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;