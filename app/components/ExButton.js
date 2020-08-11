import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import config from '../config';

const ExButton = ({ buttonStyle, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ExButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    height: 50,
    backgroundColor: config.colors.appTheme,
  },
  text: { color: config.colors.white, fontSize: 17 },
});
