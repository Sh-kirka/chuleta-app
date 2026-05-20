import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { LanguageProvider, useLang } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import TensesScreen from './screens/TensesScreen';
import VerbsScreen from './screens/VerbsScreen';
import GrammarScreen from './screens/GrammarScreen';
import DictionaryScreen from './screens/DictionaryScreen';

const Tab = createBottomTabNavigator();

const tabLabels = {
  Tenses:     { ukr: 'Часи',      eng: 'Tenses',    esp: 'Tiempos'   },
  Verbs:      { ukr: 'Дієслова',  eng: 'Verbs',     esp: 'Verbos'    },
  Grammar:    { ukr: 'Граматика', eng: 'Grammar',   esp: 'Gramática' },
  Dictionary: { ukr: 'Словник',   eng: 'Dictionary',esp: 'Vocab'     },
};

const tabIcons = {
  Tenses:     '🕐',
  Verbs:      '⚡',
  Grammar:    '📖',
  Dictionary: '📚',
};

function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
      <Text style={styles.logo}>🇪🇸 Chuleta</Text>
      <LanguageSwitcher />
    </View>
  );
}

function Tabs() {
  const { lang } = useLang();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#C0392B',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          paddingBottom: Platform.OS === 'ios' ? 4 : 8,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
        tabBarIcon: ({ color }) => (
          <Text style={{ fontSize: 20 }}>{tabIcons[route.name]}</Text>
        ),
        tabBarLabel: tabLabels[route.name]?.[lang] ?? route.name,
      })}
    >
      <Tab.Screen name="Tenses" component={TensesScreen} />
      <Tab.Screen name="Verbs" component={VerbsScreen} />
      <Tab.Screen name="Grammar" component={GrammarScreen} />
      <Tab.Screen name="Dictionary" component={DictionaryScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <View style={styles.root}>
          <Header />
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        </View>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#C0392B' },
  header: {
    backgroundColor: '#C0392B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  logo: { fontSize: 20, fontWeight: '800', color: '#fff', letterSpacing: 0.5 },
});
