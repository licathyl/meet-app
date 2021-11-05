import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('the user hasn\'t selected an event', () => {
      AppWrapper = mount(<App />);
    });

    when('the user views the event list', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the user should see all events in a collapsed format', () => {
      expect(AppWrapper.find('.EventDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {
    let AppWrapper;
    given('app loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the event list is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user selects an event', () => {
      AppWrapper.find('.event .showDetails').at(0).simulate('click');
    });

    then('the user should see the selected event in an expanded format', () => {
      expect(AppWrapper.find('.event .EventDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    let AppWrapper;
    given('app loaded', () => {
      AppWrapper = mount(<App />);
    });
    
    and('an event is selected/expanded', () => {
      AppWrapper.update();
      AppWrapper.find('.event .showDetails').at(0).simulate('click');
      expect(AppWrapper.find('.event .EventDetails')).toHaveLength(1);
    });

    when('the user selects the expanded event again', () => {
      AppWrapper.find('.event .hideDetails').at(0).simulate('click');
    });

    then('the user should see the event in a collapsed format', () => {
      expect(AppWrapper.find('.event .EventDetails')).toHaveLength(0);
    });
  });
});
