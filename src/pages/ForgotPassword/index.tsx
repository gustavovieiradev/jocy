import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import group from '../../images/group.png';
import box from '../../images/box.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={group} style={styles.image}>
        <View style={styles.boxLogo}>
          <Image source={box} />
        </View>
        <View style={styles.content}>
          <View>  
            <TouchableOpacity onPress={goBack}>
              <Feather name="arrow-left" size={28} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subTitle}>Enter your e-mail and we will send you 4 digits code for verification.</Text>
            <Input iconLeft="mail" label="E-Mail Address" placeholder="Enter your e-mail" />
          </View>
          <View>  
            <Button textButton="Continue" disabled />
            <View style={styles.help}>
              <Text style={styles.helpText}>Can’t use e-mail?</Text>
              <TouchableOpacity>
                <Text style={styles.helpLink}> Use Phone Number</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  boxLogo: {
    flex: .2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  content: {
    flex: .8,
    backgroundColor: '#fff',
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    paddingVertical: 30,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 50,
    height: 57,
    borderWidth: 2,
    borderColor: 'rgba(50, 52, 56, 0.4)',
    backgroundColor: '#fff',
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    color: '#A9A9A9'
  },
  title: {
    fontFamily: 'Nunito_700Bold',
    color: '#323438',
    fontSize: 20,
    marginTop: 20,
  },
  subTitle: {
    fontFamily: 'Nunito_400Regular',
    color: 'rgba(50, 52, 56, 0.6)',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 40,
  },
  help: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  helpText: {
    color: 'rgba(50, 52, 56, 0.6)',
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
  },
  helpLink: {
    color: '#17BDC8',
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
  }
});