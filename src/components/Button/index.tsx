import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import StyleSheet from './styles';

interface IProps {
  disabled?: boolean;
  textButton: string
}

export default function Button({ disabled = false, textButton }: IProps) {
  const styles = StyleSheet(disabled);
  return (
    <>
      {disabled ? (
        <View style={styles.button}>
          <Text style={styles.buttonText}>{textButton}</Text>
        </View>
      ) : (
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>{textButton}</Text>
        </RectButton>
      )}
    </>
  )
}