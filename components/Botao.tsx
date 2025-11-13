import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface BotaoProps extends PressableProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
}

export function Botao({
  label,
  backgroundColor = '#1E8449',
  textColor = '#FFFFFF',
  style,
  ...pressableProps
}: BotaoProps) {
  return (
    <Pressable
      style={({ pressed }) => {
        const resolvedStyle =
          typeof style === 'function' ? style({ pressed }) : style;
        return [
          styles.base,
          { backgroundColor },
          pressed && styles.pressed,
          resolvedStyle,
        ];
      }}
      android_ripple={{ color: '#00000022', borderless: true }}
      {...pressableProps}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 70,
    height: 70,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
  label: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

