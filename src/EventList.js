import React, { Component } from "react";
import Event from "./Event";
import { Row, Col } from 'react-bootstrap';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Row className="d-flex justify-content-center mt-3">
        <Col md={12}>
          <ul className="EventList">
            {events.map((event) => (
              <li className="EventItem" key={event.id}>
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
