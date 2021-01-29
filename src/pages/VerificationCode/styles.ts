import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 50px;
  flex: 1;
  background-color: #FAFAFA;
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Logo = styled.View`
  flex: .2;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.Image`

`;

export const Content = styled.View`
  flex: .8;
  box-shadow: 0px 0px 75px rgba(155, 155, 155, 0.08);
  background-color: #fff;
  border-radius: 34px;
  padding: 30px 25px;
`;

export const BackButton = styled.TouchableOpacity`

`;

export const Title = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #323438;
  font-size: 20px;
  line-height: 29px;
  margin-top: 20px;
`;

export const Description = styled.Text`
  font-family: 'Nunito_400Regular';
  color: 'rgba(50, 52, 56, 0.6)';
  text-align: justify;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 40px;
`;

export const Codes = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Code = styled.View`
  width: 50px;
  height: 61px;
  border-radius: 30px;
  background-color: rgba(169, 169, 169, 0.1);
`;