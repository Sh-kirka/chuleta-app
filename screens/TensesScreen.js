import React, { useState, useMemo } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import AccordionCard from '../components/AccordionCard';
import SearchBar from '../components/SearchBar';
import { tenses } from '../data';
import { useLang } from '../context/LanguageContext';

export default function TensesScreen() {
  const { lang } = useLang();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return tenses;
    const q = query.toLowerCase();
    return tenses.filter((item) => {
      const searchable = [
        item.title?.ukr, item.title?.eng, item.title?.esp,
        item.subtitle?.ukr, item.subtitle?.eng, item.subtitle?.esp,
        item.body?.ukr, item.body?.eng, item.body?.esp,
        ...(item.examples || []).flatMap((e) => [e.esp, e.ukr, e.eng]),
      ].join(' ').toLowerCase();
      return searchable.includes(q);
    });
  }, [query]);

  const emptyLabel = { ukr: 'Нічого не знайдено', eng: 'Nothing found', esp: 'Sin resultados' };

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChange={setQuery} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AccordionCard item={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>{emptyLabel[lang]}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f9' },
  list: { paddingTop: 8, paddingBottom: 24 },
  empty: { textAlign: 'center', marginTop: 40, color: '#aaa', fontSize: 14 },
});
