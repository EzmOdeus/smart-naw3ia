import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { Text } from './Text';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  textColor,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  // Determine text color based on variant
  const getTextColor = () => {
    if (textColor) return textColor;
    
    switch (variant) {
      case 'primary':
        return Colors.white;
      case 'secondary':
        return Colors.primary[500];
      case 'outline':
        return Colors.primary[500];
      case 'ghost':
        return Colors.primary[500];
      default:
        return Colors.white;
    }
  };

  return (
    <TouchableOpacity
      style={buttonStyles}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? Colors.white : Colors.primary[500]}
        />
      ) : (
        <View style={styles.contentContainer}>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          {typeof children === 'string' ? (
            <Text
              variant="button"
              color={getTextColor()}
              style={[styles[`${size}Text`]]}
            >
              {children}
            </Text>
          ) : (
            children
          )}
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: Layout.borderRadius.m,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: Colors.primary[500],
  },
  secondary: {
    backgroundColor: Colors.secondary[500],
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary[500],
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  small: {
    paddingVertical: Layout.spacing.xs,
    paddingHorizontal: Layout.spacing.m,
    minHeight: 32,
  },
  medium: {
    paddingVertical: Layout.spacing.s,
    paddingHorizontal: Layout.spacing.l,
    minHeight: 40,
  },
  large: {
    paddingVertical: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.xl,
    minHeight: 48,
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: Layout.spacing.s,
  },
  iconRight: {
    marginLeft: Layout.spacing.s,
  },
});