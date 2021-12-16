import React, { Component } from "react";
import Event from "./Event";
import { WarningAlert } from "./Alert";
import { Row, Col } from "react-bootstrap";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Row className="d-flex justify-content-center mt-3">
        {!navigator.onLine ? (
          <WarningAlert text="Warning! No internet connection. The events displayed may not be up to date" />
        ) : (
          ""
        )}
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
