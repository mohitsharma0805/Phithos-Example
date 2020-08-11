import React from 'react';
import { shallow } from 'enzyme';
import { SafeAreaView, View, Text } from 'react-native';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import Dashboard from '../Dashboard';
import { ExBanner } from '../../components';

describe('Dashboard', () => {
  describe('Render UI with show banner', () => {
    const sagaMiddleware = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleware]);
    const store = mockStore({
      banner: true,
      user: { email: 'mohit@gmail.com' },
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementationOnce(() => store.getState().banner)
      .mockImplementationOnce(() => store.getState().user);

    const wrapper = shallow(<Dashboard />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(View).length).toEqual(1);
      expect(wrapper.find(Text).length).toEqual(1);
      expect(wrapper.find(ExBanner).length).toEqual(1);
    });
  });
  describe('Render UI with banner hidden', () => {
    const sagaMiddleware = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleware]);
    const store = mockStore({
      banner: false,
      user: { email: 'mohit@gmail.com' },
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementationOnce(() => store.getState().banner)
      .mockImplementationOnce(() => store.getState().user);

    const wrapper = shallow(<Dashboard />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(View).length).toEqual(1);
      expect(wrapper.find(Text).length).toEqual(1);
    });
  });
});
