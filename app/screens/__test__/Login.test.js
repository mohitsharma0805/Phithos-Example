import React from 'react';
import { shallow } from 'enzyme';
import { SafeAreaView } from 'react-native';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import Login from '../Login';
import { ExTextInput, ExButton } from '../../components';

describe('Songs', () => {
  describe('UI test cases', () => {
    const wrapper = shallow(<Login />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(ExTextInput).length).toEqual(2);
      expect(wrapper.find(ExButton).length).toEqual(1);
    });
  });
});
