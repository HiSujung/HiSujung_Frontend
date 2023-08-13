import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const API_URL = 'http://3.39.104.119:8080/member/login';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL, {
        email: username,
        password: password,
      });
      console.log(username);
      console.log(password);
      if (response.data.success) {
        // Login successful
        Alert.alert('로그인 성공');
      } else {
        // Login failed
        console.log(response.data.error);
        Alert.alert('로그인 실패', '아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('로그인 에러', '로그인 중에 오류가 발생했습니다.');
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
        <Text style={styles.title}>Hi, 수정이</Text>
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
        {/* ... */}
      </View>
    </LinearGradient>
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
});
