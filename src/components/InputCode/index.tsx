import React, { useCallback, useMemo, useRef, useState } from 'react';

import { Container, Code, Input } from './styles';

interface IProps {
  qtd: number;
}

export default function InputCode({ qtd }: IProps) {

  const renderCodes = useMemo(() => {
    const codes = [];

    for (let i = 0; i < qtd; i++) {
      codes.push(
        <Code>
          <Input />
        </Code>
      );
    }

    return codes;

  }, []);

  return (
    <Container>
      {renderCodes}
    </Container>
  )
};