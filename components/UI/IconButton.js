import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, color, size, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.container}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { padding: 6, margin: 8, borderRadius: 24 },
  pressed: { opacity: 0.7 },
});

export default IconButton;
