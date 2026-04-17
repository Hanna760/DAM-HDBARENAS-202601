import React from 'react';
import { StyleSheet, View } from 'react-native';

import CalculatorButton from '../atoms/CalculatorButton';
import { space } from '../../Themes';

type Props = {
  onDigitPress: (digit: string) => void;
  onDecimalPress: () => void;
  onClearPress: () => void;
  onDeletePress: () => void;
  onToggleSignPress: () => void;
  onPercentPress: () => void;
  onOperationPress: (operation: '+' | '-' | '×' | '÷') => void;
  onEqualsPress: () => void;
};

function CalculatorKeypad({
  onDigitPress,
  onDecimalPress,
  onClearPress,
  onDeletePress,
  onToggleSignPress,
  onPercentPress,
  onOperationPress,
  onEqualsPress,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CalculatorButton label="C" variant="danger" onPress={onClearPress} />
        <CalculatorButton label="DEL" variant="operator" onPress={onDeletePress} />
        <CalculatorButton label="%" variant="operator" onPress={onPercentPress} />
        <CalculatorButton label="÷" variant="operator" onPress={() => onOperationPress('÷')} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="7" onPress={() => onDigitPress('7')} />
        <CalculatorButton label="8" onPress={() => onDigitPress('8')} />
        <CalculatorButton label="9" onPress={() => onDigitPress('9')} />
        <CalculatorButton label="×" variant="operator" onPress={() => onOperationPress('×')} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="4" onPress={() => onDigitPress('4')} />
        <CalculatorButton label="5" onPress={() => onDigitPress('5')} />
        <CalculatorButton label="6" onPress={() => onDigitPress('6')} />
        <CalculatorButton label="-" variant="operator" onPress={() => onOperationPress('-')} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="1" onPress={() => onDigitPress('1')} />
        <CalculatorButton label="2" onPress={() => onDigitPress('2')} />
        <CalculatorButton label="3" onPress={() => onDigitPress('3')} />
        <CalculatorButton label="+" variant="operator" onPress={() => onOperationPress('+')} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="+/-" variant="operator" onPress={onToggleSignPress} />
        <CalculatorButton label="0" flex={2} onPress={() => onDigitPress('0')} />
        <CalculatorButton label="." onPress={onDecimalPress} />
        <CalculatorButton label="=" variant="action" onPress={onEqualsPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: space.xs,
  },
  row: {
    flexDirection: 'row',
    gap: space.xs,
  },
});

export default CalculatorKeypad;