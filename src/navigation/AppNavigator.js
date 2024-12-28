import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: 'Quotes of the Day', 
          headerLeft: null // Menghapus tombol panah kembali pada header Home
        }} 
      />
      <Stack.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ headerShown: false }} // Menghapus header untuk layar About
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
