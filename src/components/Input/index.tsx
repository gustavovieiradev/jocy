import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IProps<GLYPHS extends string> {
  iconLeft?: GLYPHS;
  colorIconLeft?: string;
  colorIconRight?: string;
  iconRight?: string;
  placeholder?: string;
  label?: string;
  size?: number;
}

export default function Input({iconLeft, iconRight, placeholder = "", label = "", size = 22}: IProps<any>) {
  return (
    <View style={styles.formField}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.field}>
        {iconLeft && <Feather name={iconLeft} color="rgba(169, 169, 169, 0.8)" size={size} />}
        <TextInput style={styles.input} placeholder={placeholder}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formField: {
    flexDirection: 'column',
  },
  label: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 13,
    color: ' rgba(50, 52, 56, 0.8)',
  },
  field: {
    marginTop: 15,
    flexDirection: 'row',
    borderRadius: 29.5,
    backgroundColor: 'rgba(169, 169, 169, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  input: {
    width: '100%',
    paddingHorizontal: 10,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  },
});