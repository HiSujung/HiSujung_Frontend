// App.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const API_URL = 'http://3.39.104.119:8080/member/login';
let tokenProps="NULL";

import MainComponent from './myportfolio'; // main.js 파일의 컴포넌트를 import

function EmailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState(''); // token을 추가하고 초기값을 빈 문자열로 설정
  tokenProps=token;
  const handleLogin = async () => {
    if (!username || !password) {
      setShowErrorText(true);
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        email: String(username),
        password: String(password),
      });

      if (response.data.token) {
        setShowSuccessMessage(true);
        setShowErrorText(false);
        setErrorMessage('');
        setToken(response.data.token); // token 값을 설정
        tokenProps=response.data.token;
        navigation.navigate('Main'); // main.js 화면으로 이동
      } else {
        setShowSuccessMessage(false);
        setShowErrorText(true);

        if (response.data.error) {
          setErrorMessage(response.data.error);
        } else {
          setErrorMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('로그인 중에 오류가 발생했습니다.');
      setShowSuccessMessage(false);
      setShowErrorText(true);
    }
  };

  return (
    <LinearGradient
      colors={['#E2D0F8', '#A0BFE0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>안녕, 수정이</Text>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        {showSuccessMessage && (
          <Text style={styles.successMessage}>로그인 성공</Text>
        )}
        {showErrorText && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('EmailScreen')}>
          <Text style={styles.signupText}>계정이 없으신가요? <Text style={styles.signupLink}>회원가입</Text></Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Main"
          component={() => <MainComponent token={tokenProps} />} // token을 MainComponent로 전달
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 50,
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'rgba(131, 131, 131, 1)',
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: 'rgba(166, 208, 253, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
    marginTop: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  signupText: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
  },
  signupLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
