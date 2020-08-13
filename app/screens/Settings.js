import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ExBanner, ExSwitchCell } from '../components';
import { selectBannerStatus, saveBannerStatus } from '../state/Settings';

const Settings = () => {
  const dispatch = useDispatch();
  const bannerStatus = useSelector(selectBannerStatus);

  const switchValueChanged = (value) => {
    dispatch(saveBannerStatus(value));
  };

  return (
    <SafeAreaView style={styles.contentView}>
      {bannerStatus && <ExBanner />}
      <ExSwitchCell switchValue={bannerStatus} onSwitchValueChange={switchValueChanged} />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  contentView: { flex: 1 },
  container: { flex: 1, justifyContent: 'center' },
});
