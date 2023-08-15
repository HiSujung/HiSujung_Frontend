import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
// 사용자 정보 가져오기 위해 import
import { useAuth } from './../utils/AuthContext';

const ChatListScreen = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const { user, token } = useAuth(); // 현재 로그인한 유저의 user, token
  const navigation = useNavigation();
  const route = useRoute();

  const fetchUserChatRooms = async () => {
    try {
      if (!token) {
        console.error('No token found');
        return;
      }

      // 헤더에 토큰 포함해서 GET 요청
      const headers = {
        Authorization: `Bearer ${token}`
      };

      const response = await axios.get('http://172.20.10.8:8080/chat-rooms', { headers });

      if (response.status === 200) {
        console.log('updated Chat Room List:');
        response.data.forEach(room => {
          console.log('Room ID:', room.roomId);
          console.log('Room Name:', room.roomName);
        });
        setChatRooms(response.data);

      } else {
        console.log('Failed to fetch chat rooms');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchUserChatRooms();
    if (route.params?.updated) {
      // 업데이트된 채팅 목록을 가져와서 상태 업데이트
      fetchUserChatRooms();
      navigation.setParams({ updated: false }); // 업데이트 파라미터 초기화
    }
  }, [token, route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>채팅 목록</Text>
      <Button title="+" onPress={() => navigation.navigate('CreateChatRoom')} />
      <FlatList
        data={chatRooms}
        keyExtractor={(item) => item.roomId}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.roomItem}
            onPress={() => navigation.navigate('ChattingRoom2', { roomId: item.roomId })}
          >
            <Text>{item.roomName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  roomItem: {
    borderBottomWidth: 1,
    paddingVertical: 40,
  },
});

export default ChatListScreen;