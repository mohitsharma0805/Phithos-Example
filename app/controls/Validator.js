import { Alert } from 'react-native';

export const validateLoginDetails = (email, password) => {
  const chkReg = /^[_A-Za-z0-9-']+(\.[_A-Za-z0-9-']+)*@[A-Za-z0-9-]+(\.[a-z0-9-]+)*(\.[A-Za-z]{2,4})$/;
  if (email.trim() === '' || !chkReg.test(email)) {
    Alert.alert('', 'Please Enter valid email');
    return false;
  }
  if (password.trim() === '') {
    Alert.alert('', 'Please Enter password');
    return false;
  }
  return true;
};
