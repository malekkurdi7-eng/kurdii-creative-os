import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/theme';
import HomeScreen from './src/screens/HomeScreen';
import PackagesScreen from './src/screens/PackagesScreen';
import PackageDetailScreen from './src/screens/PackageDetailScreen';
import QuoteScreen from './src/screens/QuoteScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const icons: Record<string, [any, any]> = {
  Home: ['home', 'home-outline'],
  Packages: ['map', 'map-outline'],
  Quote: ['document-text', 'document-text-outline'],
  Contact: ['call', 'call-outline'],
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.navyLight, borderTopColor: colors.border },
        tabBarIcon: ({ focused, color, size }) => <Ionicons name={icons[route.name][focused ? 0 : 1]} size={size} color={color} />,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Packages" component={PackagesScreen} />
      <Tab.Screen name="Quote" component={QuoteScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={{ ...DarkTheme, colors: { ...DarkTheme.colors, background: colors.navy, card: colors.navyLight, primary: colors.gold } }}>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.navyLight }, headerTintColor: colors.gold, headerTitleStyle: { color: colors.white } }}>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="PackageDetail" component={PackageDetailScreen} options={{ title: '', headerBackTitle: 'Back' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
