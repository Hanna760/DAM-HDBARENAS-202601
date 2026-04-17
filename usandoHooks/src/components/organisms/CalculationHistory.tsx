import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { colors, space } from '../../Themes';

type Props = {
  history: string[];
};

function CalculationHistory({ history }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
      {history.length === 0 ? (
        <Text style={styles.empty}>Sin operaciones</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          scrollEnabled={false}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    paddingHorizontal: space.md,
    paddingVertical: space.sm,
    borderWidth: 1,
    borderColor: colors.operator,
    gap: space.xs,
    minHeight: 84,
  },
  title: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '700',
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
  item: {
    color: colors.textPrimary,
    fontSize: 14,
    paddingVertical: 2,
  },
  list: {
    maxHeight: 44,
  },
});

export default CalculationHistory;