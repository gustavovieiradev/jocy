import React from 'react';
import { Image } from 'react-native';

import { Background, Container, Logo, Content, Title, Description, Codes, Code } from './styles';

import group from '../../images/group.png';
import box from '../../images/box.png';
import InputCode from '../../components/InputCode';

export default function VerificationCode() {
  return (
    <Container>
      <Background source={group}>
        <Logo>
          <Image source={box} />
        </Logo>
        <Content>
          <Title>Verification</Title>
          <Description>Enter your verification code that we sent you through your e-mail or phone number.</Description>
          <InputCode qtd={4} />
        </Content>
      </Background>
    </Container>      
  );
}