import React from 'react';
import { Text as RNText, StyleSheet, TextStyle, TextProps as RNTextProps } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useTranslation } from '../../hooks/useTranslation';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'title' | 'subtitle' | 'body' | 'caption' | 'button';

interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: keyof typeof Colors | string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}

export function Text({
  variant = 'body',
  color = 'gray.800',
  align,
  weight,
  style,
  children,
  ...props
}: TextProps) {
  const { isRTL } = useTranslation();
  
  // Get color value
  let colorValue: string = Colors.gray[800];
  if (color && typeof color === 'string') {
    if (color.includes('.')) {
      const [colorName, shade] = color.split('.');
      // @ts-ignore
      colorValue = Colors[colorName]?.[shade] || color;
    } else {
      // @ts-ignore
      colorValue = Colors[color] || color;
    }
  }

  const textStyles: TextStyle[] = [
    styles.default,
    styles[variant],
    { color: colorValue },
    align ? { textAlign: align } : isRTL ? { textAlign: 'right' } : { textAlign: 'left' },
    weight ? { fontWeight: weight } : {},
    style as TextStyle,
  ];

  return (
    <RNText style={textStyles} {...props}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Roboto-Regular',
  },
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
});