import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/styles';

const ErrorOverlay = ({ message, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: globalStyles.colors.error100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: globalStyles.colors.error400,
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    color: globalStyles.colors.error400,
  },
});

export default ErrorOverlay;
