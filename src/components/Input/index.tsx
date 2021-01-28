import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Label, Field, InputText } from './styles';

interface IProps<GLYPHS extends string> {
  iconLeft?: GLYPHS;
  colorIconLeft?: string;
  colorIconRight?: string;
  iconRight?: string;
  placeholder?: string;
  label?: string;
  size?: number;
}

interface InputValueReference {
  value: string;
}

export default function Input({iconLeft, iconRight, placeholder = "", label = "", size = 22}: IProps<any>) {
  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({ value: '' });
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container>
      <Label>{label}</Label>
      <Field isFocused={isFocused || isFilled}>
        {iconLeft && <Feather name={iconLeft} color={isFocused || isFilled ? '#17BDC8' : 'rgba(169, 169, 169, 0.8)'} size={size} />}
        <InputText 
          ref={inputElementRef}
          style={styles.input} 
          placeholder={placeholder}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
        />
      </Field>
    </Container>
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