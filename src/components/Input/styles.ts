import styled, { css } from 'styled-components/native';

interface FieldProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: column;
`;

export const Label = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 13px;
  color: rgba(50, 52, 56, 0.8);
`;

export const Field = styled.View<FieldProps>`
  margin-top: 15px;
  flex-direction: row;
  border-radius: 29.5px;
  border: 2px solid rgba(169, 169, 169, 0.1);
  background-color: rgba(169, 169, 169, 0.1);
  padding: 15px 20px;

  ${(props) => 
    props.isFocused && css`
      border: 2px solid #17BDC8;
      background-color: #fff;
    `
  }

`;

export const InputText = styled.TextInput`
  width: 100%;
  padding: 0 10px;
  font-family: 'Nunito_400Regular';
  font-size: 16px;
`;