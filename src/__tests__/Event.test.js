import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  })

  test('render event summary', () => {
    expect(EventWrapper.find('.eventSummary')).toHaveLength(1);
  });
  test('render event location', () => {
    expect(EventWrapper.find('.eventLocation')).toHaveLength(1);
  });
  test('render event date and time zone', () => {
    expect(EventWrapper.find('.eventDate')).toHaveLength(1);
  })
  test('render event element in a collapsed format by default', () => {
    EventWrapper.setState({
      show: false,
    });
    expect(EventWrapper.find('.EventDetails')).toHaveLength(0);
  });
  test('change show state on click', () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('show')).toEqual(true);
  })
  test('show event details on click', () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.find('.EventDetails')).toHaveLength(1);
  })
  test('hide event details on click', () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find('.hideDetails').simulate('click');
    expect(EventWrapper.find('.EventDetails')).toHaveLength(0);
  })
}); 
