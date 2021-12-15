import React, { Component } from "react";
import Event from "./Event";
import { Row, Col } from 'react-bootstrap';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Row className="d-flex justify-content-center event-list-row">
      <Col md={10} sm={12} className="event-list-wrapper">
      <ul className="EventList">
        {events.map((event) => (
          <li 
          className="col-xl-3 col-lg-4 col-md-6 col-sm-12" 
          key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
      </Col>
      </Row>
    );
  }
}

export default EventList;
