import styled, { css } from 'styled-components/native';

// interface ICodeProps {
//   isFocused: boolean;
// }

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Code = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 61px;
  border-radius: 30px;
  background-color: rgba(169, 169, 169, 0.1);
  border: 2px solid #17BDC8;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  text-align: center;
  color: #323438;
  font-family: 'Nunito_700Bold';
  font-size: 24;
`;  