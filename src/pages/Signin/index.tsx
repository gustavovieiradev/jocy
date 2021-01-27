import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Input from '../../components/Input';

export default function Signin() {
  const { navigate } = useNavigation();

  const handleGoToForgotPassword = useCallback(() => {
    navigate('ForgotPassword');
  }, [])

  return (
    <View style={styles.form}>
      <View style={styles.formField}>
        <Input iconLeft="mail" colorIconLeft="rgba(169, 169, 169, 0.8)" size={22} placeholder="Enter your e-mail" label="E-mail Address"/>
      </View>
      <View style={styles.formField}>
        <Input iconLeft="lock" colorIconLeft="rgba(169, 169, 169, 0.8)" size={22} placeholder="Enter your password" label="Password"/>
      </View>
      <TouchableOpacity style={styles.forgotPassword} onPress={handleGoToForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
  },
  switch: {
    flexDirection: 'row',
    borderRadius: 33.5,
    padding: 6,
    backgroundColor: 'rgba(23, 189, 200, 0.1);'
  },
  switchActive: {
    flex: .5,
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17BDC8',
    borderRadius: 29,
    height: 55,
  },
  switchInactive: {
    // borderWidth: 1,
    // borderColor: 'red',
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  switchActiveText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 20,
    color: '#fff'
  },
  switchInactiveText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 20,
    color: 'rgba(23, 189, 200, 0.6)'
  },
  form: {
    flexDirection: 'column',
  },
  formField: {
    flexDirection: 'column',
    marginTop: 30,
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
    paddingHorizontal: 10,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPasswordText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
    color: '#323438'
  },
  button: {
    marginTop: 50,
    height: 57,
    borderWidth: 2,
    borderColor: 'rgba(50, 52, 56, 0.4)',
    backgroundColor: '#fff',
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    color: '#A9A9A9'
  }
});