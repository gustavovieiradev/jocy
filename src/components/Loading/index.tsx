import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
    height: '100%',
    width: '100%',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    width: 79,
    height: 79,
    backgroundColor: '#fff',
    borderRadius: 20,
  }
});