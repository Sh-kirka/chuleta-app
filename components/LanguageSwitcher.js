import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLang } from '../context/LanguageContext';

const langs = ['ukr', 'eng', 'esp'];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <View style={styles.row}>
      {langs.map((l) => (
        <TouchableOpacity
          key={l}
          style={[styles.btn, lang === l && styles.active]}
          onPress={() => setLang(l)}
          activeOpacity={0.7}
        >
          <Text style={[styles.label, lang === l && styles.activeLabel]}>
            {l.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 4, marginRight: 12 },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  active: { backgroundColor: '#fff' },
  label: { fontSize: 11, fontWeight: '700', color: 'rgba(255,255,255,0.85)', letterSpacing: 0.3 },
  activeLabel: { color: '#C0392B' },
});
