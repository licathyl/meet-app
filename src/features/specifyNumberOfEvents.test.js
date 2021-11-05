import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  
  test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has not specified a number of events', () => {
    
    });

    when('the event list is shown', () => {
      AppWrapper = mount(<App />);
    });

    then('the default number of events will be 32', () => {
      AppWrapper.update();
      expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specifies the number of events', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.find('input').simulate('change', { target: { value: 20 }});
    });

    then('the user should see a list of events that match the number they specified', () => {
      expect(AppWrapper.state('numberOfEvents')).toEqual(20);
    });
  });
});