import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { globalStyles } from '../../constants/styles';

const Input = ({ label, textInputConfig, style, invalid }) => {
  const inputStyle = [styles.textInput];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.textInputMultiline);
  }

  if (!invalid) {
    inputStyle.push(styles.textInputInvalid);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, !invalid && styles.labelInvalid]}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: globalStyles.colors.primary500,
    marginBottom: 4,
  },
  labelInvalid: {
    color: globalStyles.colors.error400,
  },
  textInput: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 16,
    color: globalStyles.colors.gray500,
    borderRadius: 4,
    backgroundColor: globalStyles.colors.gray100,
    borderWidth: 1,
    borderColor: globalStyles.colors.primary500,
  },
  textInputInvalid: {
    backgroundColor: globalStyles.colors.error100,
    borderColor: globalStyles.colors.error400,
  },
  textInputMultiline: {
    minHeight: 150,
    textAlignVertical: 'top',
  },
});

export default Input;
