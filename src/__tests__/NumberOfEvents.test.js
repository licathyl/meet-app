import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberofEventsWrapper;
  beforeAll(() => {
    NumberofEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberofEventsWrapper.find('.eventsNumber')).toHaveLength(1);
  });

  // test('render text input correctly', () => {
  //   const numberOfEvents = NumberofEventsWrapper.prop('numberOfEvents');
  //   expect(NumberofEventsWrapper.find('.eventsNumber').prop('value')).toBe(numberOfEvents);
  // });
}); 