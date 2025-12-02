import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Tus pantallas
import Bienvenida from './screens/Bienvenida';
import Login from './screens/Login';
import RecuperarContrasena from './screens/RecuperarContrasena';
import Dashboard from './screens/Dashboard';
import Blogs from './screens/Blogs';
import Mapa from './screens/MapaIncidencias';
import Perfil from './screens/Perfil';
import NuevoIncidente from './screens/NuevoIncidente';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Botón flotante independiente
function FloatingButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NuevoIncidente')}
      style={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: [{ translateX: -30 }],
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#6A4BD8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,
        zIndex: 10,
      }}
    >
      <Ionicons name="add" size={28} color="#fff" />
    </TouchableOpacity>
  );
}

// Barra inferior con tabs
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Dashboard') return <Ionicons name="home" size={size} color={color} />;
          if (route.name === 'Blogs') return <Ionicons name="book" size={size} color={color} />;
          if (route.name === 'Mapa') return <Ionicons name="map" size={size} color={color} />;
          if (route.name === 'Perfil') return <Ionicons name="person" size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6A4BD8',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Blogs" component={Blogs} />
      <Tab.Screen name="Mapa" component={Mapa} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

// Wrapper que combina tabs + botón flotante
function MainScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TabNavigator />
      <FloatingButton />
    </View>
  );
}

// App principal con Stack
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RecuperarContrasena" component={RecuperarContrasena} />
        <Stack.Screen name="NuevoIncidente" component={NuevoIncidente} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}