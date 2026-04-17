import React from 'react';
import { StyleSheet, View } from 'react-native';

import CalculationHistory from '../organisms/CalculationHistory';
import CalculatorDisplay from '../atoms/CalculatorDisplay';
import CalculatorKeypad from '../organisms/CalculatorKeypad';
import { space } from '../../Themes';

type Props = {
  display: string;
  expression: string;
  history: string[];
  onDigitPress: (digit: string) => void;
  onDecimalPress: () => void;
  onClearPress: () => void;
  onDeletePress: () => void;
  onToggleSignPress: () => void;
  onPercentPress: () => void;
  onOperationPress: (operation: '+' | '-' | '×' | '÷') => void;
  onEqualsPress: () => void;
};

function CalculatorTemplate({
  display,
  expression,
  history,
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
    <View style={styles.content}>
      <View style={styles.displayWrap}>
        <CalculatorDisplay
          expression={expression}
          result={display}
        />
      </View>

      <View style={styles.historyWrap}>
        <CalculationHistory history={history} />
      </View>

      <View style={styles.keypadWrap}>
        <CalculatorKeypad
          onDigitPress={onDigitPress}
          onDecimalPress={onDecimalPress}
          onClearPress={onClearPress}
          onDeletePress={onDeletePress}
          onToggleSignPress={onToggleSignPress}
          onPercentPress={onPercentPress}
          onOperationPress={onOperationPress}
          onEqualsPress={onEqualsPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: space.sm,
    paddingBottom: space.xs,
  },
  displayWrap: {
    height: '32%',
    minHeight: 140,
    justifyContent: 'flex-end',
  },
  historyWrap: {
    minHeight: 82,
  },
  keypadWrap: {
    marginTop: space.xs,
  },
});

export default CalculatorTemplate;