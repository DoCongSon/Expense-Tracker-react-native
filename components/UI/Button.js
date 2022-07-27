import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../../constants/styles';
const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.buttonFlat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.buttonFlatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: { borderRadius: 4, padding: 8, backgroundColor: globalStyles.colors.primary500 },
  buttonFlat: { backgroundColor: 'transparent' },
  buttonText: { textAlign: 'center', color: 'white', fontSize: 16 },
  buttonFlatText: { color: globalStyles.colors.primary500 },
  pressed: {
    opacity: 0.7,
    backgroundColor: globalStyles.colors.primary100,
    borderRadius: 4,
  },
});

export default Button;
