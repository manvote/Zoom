import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Logo</Text>

      <Text style={styles.welcome}>Create an Account</Text>
      <Text style={styles.subText}>Signup and starting managing{"\n"}your account</Text>

      <Text style={styles.label}>Name</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.dont}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.signUpText}>SignIn</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Image 
            source={require('./assets/download.png')}
            style={styles.icon1} 
        />
        <Text style={styles.socialText}>Sign in with an account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image 
          source={require('./assets/images.png')} 
          style={styles.icon2} 
          resizeMode="contain"
        />
        <Text style={styles.socialText}>Sign in with an account</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center'
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 3,
  },
  subText: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 18
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 55,
    backgroundColor: '#f0f0f0ff'
  },
  icon1: {
    width: 30,
    height: 30,
    marginRight: 13,
  },
  icon2: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  socialText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 8,
    color: '#aaa',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 5,
    height: 55,
    backgroundColor: '#f0f0f0ff'
  },
  signInButton: {
    backgroundColor: '#4BA4D0',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    height: 55
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  forgotPassword: {
    marginTop: 10,
    color: '#4798d8',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  signUpText: {
    color: '#4798d8',
    fontWeight: 'bold'
  },
  dont: {
    fontWeight: 'bold',
    fontSize: 15
  }
});
