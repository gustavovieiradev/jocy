import React from 'react';
import { Image } from 'react-native';

import { Background, Container, Logo, Content, Title, Description } from './styles';

import group from '../../images/group.png';
import box from '../../images/box.png';
import Codes from '../../components/Codes';

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
          <Codes qtd={4} />
        </Content>
      </Background>
    </Container>      
  );
}