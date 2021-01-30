import React, { useCallback, useRef, useState } from 'react';

import { Code, Input } from './style';

interface InputValueReference {
  value: string;
}

export default function InputCode() {

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
    <Code isFocused={isFocused || isFilled}>
      <Input 
        ref={inputElementRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
      />
    </Code>
  )
}