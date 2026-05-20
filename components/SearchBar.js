import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { useLang } from '../context/LanguageContext';

const placeholders = {
  ukr: 'Пошук...',
  eng: 'Search...',
  esp: 'Buscar...',
};

export default function SearchBar({ value, onChange }) {
  const { lang } = useLang();
  return (
    <View style={styles.container}>
      <Text style={[styles.icon, { color: '#aaa', fontSize: 14 }]}>🔍</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholders[lang]}
        placeholderTextColor="#bbb"
        clearButtonMode="while-editing"
        returnKeyType="search"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 4,
    paddingHorizontal: 10,
    height: 38,
  },
  icon: { marginRight: 6 },
  input: { flex: 1, fontSize: 14, color: '#333', paddingVertical: 0 },
});
