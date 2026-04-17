import React from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
  Text,
} from 'react-native';

import { colors } from '../../Themes';

export type CalculatorButtonVariant =
  | 'default'
  | 'operator'
  | 'action'
  | 'danger';

type Props = PressableProps & {
  label: string;
  variant?: CalculatorButtonVariant;
  flex?: number;
};

function CalculatorButton({
  label,
  variant = 'default',
  flex = 1,
  style,
  ...pressableProps
}: Props) {
  const resolveStyle = (state: PressableStateCallbackType) => {
    const pressedStyle =
      typeof style === 'function' ? style(state) : style ?? undefined;

    return [
      styles.button,
      styles[variant],
      { flex, opacity: state.pressed ? 0.72 : 1 },
      pressedStyle,
    ];
  };

  return (
    <Pressable
      {...pressableProps}
      style={resolveStyle}
    >
      <Text style={[styles.label, styles[`${variant}Label`]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 74,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.operator,
    margin: 1,
  },
  label: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  default: {
    backgroundColor: colors.surface,
  },
  operator: {
    backgroundColor: colors.operator,
    borderColor: colors.utility,
  },
  action: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  danger: {
    backgroundColor: colors.utility,
    borderColor: colors.utility,
  },
  defaultLabel: {
    color: colors.textPrimary,
  },
  operatorLabel: {
    color: colors.textPrimary,
  },
  actionLabel: {
    color: colors.textPrimary,
  },
  dangerLabel: {
    color: colors.textPrimary,
  },
});

export default CalculatorButton;