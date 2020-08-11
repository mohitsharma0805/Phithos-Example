import React from 'react';
import { shallow } from 'enzyme';
import { SafeAreaView } from 'react-native';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import Login from '../Login';
import { ExTextInput, ExButton } from '../../components';

describe('Login', () => {
  const dispatch = jest.fn();
  redux.useDispatch.mockReturnValue(dispatch);
  const navigation = {
    navigate: jest.fn(),
  };
  describe('UI test cases', () => {
    const sagaMiddleware = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleware]);
    const store = mockStore({
      banner: true,
      user: {},
    });

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementationOnce(() => store.getState().banner)
      .mockImplementationOnce(() => store.getState().user);

    const wrapper = shallow(<Login navigation={navigation} />);
    it('renders the main view', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(ExTextInput).length).toEqual(2);
      expect(wrapper.find(ExButton).length).toEqual(1);
    });
    it('Simulate TextInput and Button', () => {
      const textInput = wrapper.find(ExTextInput).first();
      textInput.simulate('changeText', 'test4@mediccreations.com');

      const passowrdtextInput = wrapper.find(ExTextInput).at(1);
      passowrdtextInput.simulate('changeText', 'Medic123@');

      const button = wrapper.find(ExButton);
      button.simulate('press');
      expect(button).toBeTruthy();
    });
  });
});
