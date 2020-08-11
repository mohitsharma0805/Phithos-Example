import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import { ExButton, ExTextInput, ExBanner } from '../components';
import config from '../config';
import { validateLoginDetails } from '../controls/Validator';
import { selectBannerStatus } from '../state/Settings';
import { selectUser } from '../state/User';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const bannerStatus = useSelector(selectBannerStatus);
  const user = useSelector(selectUser);

  useEffect(() => {
    loginSuccessfully();
  }, [user]);

  const loginSuccessfully = () => {
    if (Object.values(email).length > 0) {
      navigation.dispatch(StackActions.replace(config.routes.BOTTOM_TAB_NAVIGATION));
    }
  };

  const loginClicked = () => {
    if (validateLoginDetails(email, password)) {
      dispatch({ type: 'LOGIN', payload: { email, password } });
    }
  };

  return (
    <SafeAreaView style={styles.contentView}>
      {bannerStatus && <ExBanner />}
      <View style={styles.container}>
        <ExTextInput
          placeholder={config.strings.EMAIL}
          autoCapitalize={config.strings.NONE}
          returnKeyType={config.strings.NEXT}
          keyboardType={config.strings.EMAIL_ADDRESS_KEYBOARD_TYPE}
          blurOnSubmit={false}
          onChangeText={(text) => setEmail(text)}
        />
        <ExTextInput
          placeholder={config.strings.PASSWORD}
          secureTextEntry
          autoCapitalize={config.strings.NONE}
          returnKeyType={config.strings.DONE}
          keyboardType={config.strings.EMAIL_ADDRESS_KEYBOARD_TYPE}
          blurOnSubmit={false}
          onChangeText={(text) => setPassword(text)}
        />
        <ExButton buttonStyle={styles.button} text={config.strings.LOGIN} onPress={loginClicked} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  contentView: { flex: 1 },
  container: { marginTop: 125 },
  button: { marginTop: 50 },
});
