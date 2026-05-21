import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onSubmit?: () => void;
}

const Button = ({ title, onSubmit }: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onSubmit}>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#067680',
    borderRadius: 8,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default Button;
