import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ExBanner } from '../components';
import { selectBannerStatus } from '../state/Settings';
import { selectUser } from '../state/User';

const Dashboard = () => {
  const bannerStatus = useSelector(selectBannerStatus);
  const user = useSelector(selectUser);

  return (
    <SafeAreaView style={styles.contentView}>
      {bannerStatus && <ExBanner />}
      <View style={styles.container}>
        <Text style={styles.text}>{user.email}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  contentView: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22 },
});
