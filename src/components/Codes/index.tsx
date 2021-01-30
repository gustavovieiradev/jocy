import React, { useCallback, useMemo, useRef, useState } from 'react';
import InputCode from '../InputCode';

import { Container, Code, Input } from './styles';

interface IProps {
  qtd: number;
}

export default function Codes({ qtd }: IProps) {

  const renderCodes = useMemo(() => {
    const codes = [];

    for (let i = 0; i < qtd; i++) {
      codes.push(
        <InputCode />
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