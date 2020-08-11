import React from 'react';
import { View, StyleSheet } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const ExTabIcon = ({ containerStyle, iconName, iconStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <SimpleLineIcons name={iconName} style={[styles.icon, iconStyle]} />
    </View>
  );
};

export default ExTabIcon;

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    margin: 5,
  },
  icon: { marginTop: 4, fontSize: 22 },
});
