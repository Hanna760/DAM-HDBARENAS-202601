import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, space } from '../../Themes';

type Props = {
  expression: string;
  result: string;
};

function CalculatorDisplay({ expression, result }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.expression} numberOfLines={3}>
        {expression}
      </Text>
      <Text style={styles.result} numberOfLines={1}>
        {result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 28,
    paddingHorizontal: space.md,
    paddingVertical: space.md,
    borderWidth: 1,
    borderColor: colors.operator,
    justifyContent: 'space-between',
    minHeight: 136,
  },
  expression: {
    color: colors.textSecondary,
    fontSize: 18,
    minHeight: 52,
    lineHeight: 22,
  },
  result: {
    color: colors.textPrimary,
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
});

export default CalculatorDisplay;