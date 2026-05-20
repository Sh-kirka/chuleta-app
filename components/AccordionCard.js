import React, { useState, useRef } from 'react';
import {
  View, Text, TouchableOpacity, Animated, StyleSheet,
} from 'react-native';

import { useLang } from '../context/LanguageContext';

export default function AccordionCard({ item }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  function toggle() {
    Animated.timing(rotation, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  }

  const rotate = rotation.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });

  const title = item.title?.[lang] || item.title?.ukr || '';
  const subtitle = item.subtitle?.[lang] || item.subtitle?.ukr || '';
  const body = item.body?.[lang] || item.body?.ukr || '';
  const examples = item.examples || [];

  function renderBody(text) {
    return text.split('\n').map((line, i) => {
      const boldParts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <Text key={i} style={styles.bodyLine}>
          {boldParts.map((part, j) =>
            j % 2 === 1
              ? <Text key={j} style={styles.bold}>{part}</Text>
              : <Text key={j}>{part}</Text>
          )}
        </Text>
      );
    });
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggle} activeOpacity={0.75} style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.title}>{title}</Text>
          {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Text style={{ fontSize: 16, color: '#C0392B' }}>▼</Text>
        </Animated.View>
      </TouchableOpacity>

      {open && (
        <View style={styles.body}>
          <View style={styles.bodyText}>{renderBody(body)}</View>

          {examples.length > 0 && (
            <View style={styles.examples}>
              <Text style={styles.examplesLabel}>
                {lang === 'ukr' ? 'Приклади' : lang === 'eng' ? 'Examples' : 'Ejemplos'}
              </Text>
              {examples.map((ex, i) => (
                <View key={i} style={styles.exampleRow}>
                  <Text style={styles.exampleEsp}>{ex.esp}</Text>
                  <Text style={styles.exampleTrans}>{ex[lang] || ex.ukr}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: { flex: 1, marginRight: 8 },
  title: { fontSize: 15, fontWeight: '700', color: '#1a1a2e' },
  subtitle: { fontSize: 12, color: '#888', marginTop: 2 },
  body: { borderTopWidth: 1, borderTopColor: '#f0f0f0', paddingHorizontal: 16, paddingBottom: 16, paddingTop: 12 },
  bodyText: { marginBottom: 8 },
  bodyLine: { fontSize: 13, color: '#333', lineHeight: 20, marginBottom: 2 },
  bold: { fontWeight: '700', color: '#1a1a2e' },
  examples: { marginTop: 10, backgroundColor: '#fdf6f0', borderRadius: 8, padding: 10 },
  examplesLabel: { fontSize: 11, fontWeight: '700', color: '#C0392B', textTransform: 'uppercase', marginBottom: 6, letterSpacing: 0.5 },
  exampleRow: { marginBottom: 8 },
  exampleEsp: { fontSize: 13, fontWeight: '600', color: '#C0392B', fontStyle: 'italic' },
  exampleTrans: { fontSize: 12, color: '#555', marginTop: 1 },
});
