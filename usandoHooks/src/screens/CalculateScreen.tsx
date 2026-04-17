import React, { useMemo, useState } from 'react';

import CalculatorTemplate from '../components/templates/CalculatorTemplate';

type Operation = '+' | '-' | '×' | '÷';
const MAX_HISTORY_ITEMS = 3;

function CalculateScreen() {
  const [display, setDisplay] = useState('');
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [pendingOperation, setPendingOperation] = useState<Operation | null>(
    null,
  );
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const operationExpression = useMemo(() => {
    if (storedValue === null || pendingOperation === null) {
      return display;
    }

    const rightSide = waitingForOperand ? '...' : display;
    return `${formatNumber(storedValue)} ${pendingOperation} ${rightSide}`;
  }, [display, pendingOperation, storedValue, waitingForOperand]);

  const resetCalculator = () => {
    setDisplay('');
    setStoredValue(null);
    setPendingOperation(null);
    setWaitingForOperand(false);
  };

  const appendDigit = (digit: string) => {
    if (display === 'Error') {
      setDisplay(digit);
      setWaitingForOperand(false);
      return;
    }

    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
      return;
    }

    setDisplay(currentValue =>
      currentValue === '' || currentValue === '0' ? digit : `${currentValue}${digit}`,
    );
  };

  const appendDecimal = () => {
    if (display === 'Error') {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }

    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }

    setDisplay(currentValue =>
      currentValue.includes('.') ? currentValue : `${currentValue}.`,
    );
  };

  const removeLastDigit = () => {
    if (display === 'Error' || display === '' || waitingForOperand) {
      return;
    }

    setDisplay(currentValue =>
      currentValue.length <= 1 ? '' : currentValue.slice(0, -1),
    );
  };

  const toggleSign = () => {
    if (display === '' || display === '0' || display === 'Error') {
      return;
    }

    setDisplay(currentValue =>
      currentValue.startsWith('-') ? currentValue.slice(1) : `-${currentValue}`,
    );
  };

  const percent = () => {
    if (display === '' || display === 'Error') {
      return;
    }

    setDisplay(currentValue => formatNumber(parseDisplay(currentValue) / 100));
  };

  const calculate = (
    leftOperand: number,
    rightOperand: number,
    operation: Operation,
  ) => {
    switch (operation) {
      case '+':
        return leftOperand + rightOperand;
      case '-':
        return leftOperand - rightOperand;
      case '×':
        return leftOperand * rightOperand;
      case '÷':
        if (rightOperand === 0) {
          return null;
        }

        return leftOperand / rightOperand;
      default:
        return rightOperand;
    }
  };

  const commitCalculation = (nextOperation: Operation | null) => {
    if (display === '') {
      return;
    }

    const currentValue = parseDisplay(display);

    if (storedValue === null) {
      setStoredValue(currentValue);
      setPendingOperation(nextOperation);
      setWaitingForOperand(true);
      return;
    }

    if (pendingOperation === null) {
      setPendingOperation(nextOperation);
      setWaitingForOperand(true);
      return;
    }

    const nextValue = calculate(
      storedValue,
      waitingForOperand ? storedValue : currentValue,
      pendingOperation,
    );

    if (nextValue === null) {
      setDisplay('Error');
      setHistory([]);
      setStoredValue(null);
      setPendingOperation(null);
      setWaitingForOperand(false);
      return;
    }

    const nextDisplay = formatNumber(nextValue);
    setDisplay(nextDisplay);
    setStoredValue(nextValue);
    setPendingOperation(nextOperation);
    setWaitingForOperand(true);
  };

  const handleOperationPress = (operation: Operation) => {
    if (display === 'Error') {
      resetCalculator();
      return;
    }

    commitCalculation(operation);
  };

  const handleEqualsPress = () => {
    if (display === 'Error') {
      resetCalculator();
      return;
    }

    if (storedValue === null || pendingOperation === null) {
      return;
    }

    const rightOperand = waitingForOperand ? storedValue : parseDisplay(display);
    const nextValue = calculate(storedValue, rightOperand, pendingOperation);

    if (nextValue === null) {
      setDisplay('Error');
      setHistory([]);
      setStoredValue(null);
      setPendingOperation(null);
      setWaitingForOperand(false);
      return;
    }

    const resultText = `${formatNumber(storedValue)} ${pendingOperation} ${formatNumber(
      rightOperand,
    )} = ${formatNumber(nextValue)}`;
    setHistory(currentHistory =>
      [resultText, ...currentHistory].slice(0, MAX_HISTORY_ITEMS),
    );

    setDisplay(formatNumber(nextValue));
    setStoredValue(null);
    setPendingOperation(null);
    setWaitingForOperand(true);
  };

  return (
    <CalculatorTemplate
      display={display}
      expression={operationExpression}
      history={history}
      onDigitPress={appendDigit}
      onDecimalPress={appendDecimal}
      onClearPress={resetCalculator}
      onDeletePress={removeLastDigit}
      onToggleSignPress={toggleSign}
      onPercentPress={percent}
      onOperationPress={handleOperationPress}
      onEqualsPress={handleEqualsPress}
    />
  );
}

function parseDisplay(value: string) {
  return Number(value.replace(',', '.'));
}

function formatNumber(value: number) {
  const normalizedValue = Number(value.toFixed(10));

  if (Number.isInteger(normalizedValue)) {
    return `${normalizedValue}`;
  }

  return `${normalizedValue}`.replace(/0+$/, '').replace(/\.$/, '');
}

export default CalculateScreen;