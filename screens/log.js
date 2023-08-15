import React, { useState, useEffect } from 'react';
import { useAuth } from './../utils/AuthContext'; // AuthContext에서 useAuth 가져오기
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import { saveToken, getToken } from './../utils/jwtUtils';

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth(); // useAuth 훅을 통해 AuthContext 사용
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://172.20.10.8:8080/member/login', {
        // 서버IP: 3.39.104.119 
        email: email,
        password: password,
      });
  
      if (response.status === 200) {
        console.log('Login successful');
        console.log('response dataaaaaa: ' + response.data);
        const token = response.data.token;
        console.log(token);
        const userInfo = { id: response.data.userId, name: response.data.username }; // 사용자 정보
        login(token, userInfo); // 토큰 및 사용자 정보 저장
  
        navigation.navigate('ChatList');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;