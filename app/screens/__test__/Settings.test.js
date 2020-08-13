import React from 'react';
import { shallow } from 'enzyme';
import { SafeAreaView } from 'react-native';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import Settings from '../Settings';
import { ExBanner, ExSwitchCell } from '../../components';

describe('Login', () => {
  const dispatch = jest.fn();
  redux.useDispatch.mockReturnValue(dispatch);
  describe('Rendering with show banner', () => {
    const mockStore = configureStore();
    const store = mockStore({
      banner: true,
    });

    jest.spyOn(redux, 'useSelector').mockImplementationOnce(() => store.getState().banner);

    const wrapper = shallow(<Settings />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(ExSwitchCell).length).toEqual(1);
      expect(wrapper.find(ExBanner).length).toEqual(1);
    });
    it('Simulate TextInput and Button', () => {
      const switchCell = wrapper.find(ExSwitchCell).first();
      switchCell.props().onSwitchValueChange();
      expect(switchCell).toBeTruthy();
    });
  });
  describe('Rendering with hide banner', () => {
    const mockStore = configureStore();
    const store = mockStore({
      banner: false,
    });

    jest.spyOn(redux, 'useSelector').mockImplementationOnce(() => store.getState().banner);

    const wrapper = shallow(<Settings />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(ExSwitchCell).length).toEqual(1);
      expect(wrapper.find(ExBanner).length).toEqual(0);
    });
    it('Simulate TextInput and Button', () => {
      const switchCell = wrapper.find(ExSwitchCell).first();
      switchCell.props().onSwitchValueChange();
      expect(switchCell).toBeTruthy();
    });
  });
});
