import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/styles';

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={globalStyles.colors.primary500} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globalStyles.colors.primary50,
  },
});

export default LoadingOverlay;
