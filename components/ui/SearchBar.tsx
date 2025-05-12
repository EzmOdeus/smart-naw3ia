import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { useTranslation } from '../../hooks/useTranslation';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
  onClear?: () => void;
  style?: any;
  defaultValue?: string;
  onKeyDown?: (e: any) => void;
}

export function SearchBar({
  placeholder,
  onSearch,
  onClear,
  style,
  defaultValue = '',
  onKeyDown,
}: SearchBarProps) {
  const [searchText, setSearchText] = useState(defaultValue);
  const { t, isRTL } = useTranslation();

  const handleClear = () => {
    setSearchText('');
    if (onClear) onClear();
  };

  const handleChangeText = (text: string) => {
    setSearchText(text);
    if (onSearch) onSearch(text);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.searchIconContainer, isRTL && styles.searchIconContainerRTL]}>
        <Search size={20} color={Colors.gray[500]} />
      </View>
      <TextInput
        style={[
          styles.input,
          isRTL && styles.inputRTL,
          Platform.OS === 'web' && { outlineStyle: 'none' as any },
        ]}
        placeholder={placeholder || t('common.search')}
        placeholderTextColor={Colors.gray[400]}
        value={searchText}
        onChangeText={handleChangeText}
        textAlign={isRTL ? 'right' : 'left'}
        {...(Platform.OS === 'web' && onKeyDown ? { onKeyDown } : {})}
      />
      {searchText.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <X size={18} color={Colors.gray[500]} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.gray[100],
    borderRadius: Layout.borderRadius.round,
    alignItems: 'center',
    height: 44,
    paddingHorizontal: Layout.spacing.s,
  },
  searchIconContainer: {
    paddingHorizontal: Layout.spacing.s,
  },
  searchIconContainerRTL: {
    // order: 1, // Removed invalid property
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.gray[800],
    height: '100%',
    paddingVertical: Layout.spacing.s,
  },
  inputRTL: {
    textAlign: 'right',
  },
  clearButton: {
    padding: Layout.spacing.s,
  },
});