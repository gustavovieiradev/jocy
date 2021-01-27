import React from 'react';
import { StyleSheet } from 'react-native';

export default function Style(disabled: boolean) {
  return StyleSheet.create({
    button: {
      height: 57,
      borderWidth: 2,
      borderColor: !disabled ? '#17BDC8' : 'rgba(50, 52, 56, 0.4)',
      backgroundColor: !disabled ? '#17BDC8' : '#fff',
      borderRadius: 29,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: 'Nunito_700Bold',
      fontSize: 18,
      color: !disabled ? '#ffff' : '#A9A9A9'
    },
  })
}