import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './src/pages/Login';
import { useFonts } from 'expo-font';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular, 
    Nunito_600SemiBold, 
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Login />
  );
}
