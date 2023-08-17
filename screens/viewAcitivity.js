import React from 'react';
import { View, Text,TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

export default function App(props) { //prop으로 stack에서 스크린 받아온거 받아오기
  const { navigation } = props; // navigation을 추출
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E2D0F8', '#A0BFE0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.homeButton}>
            <AntDesign name="home" size={24} color="rgba(74, 85, 162, 1)" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>게시물 목록</Text>
        </View>
      </LinearGradient>
      <View style={styles.nav}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navContent}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>전체</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>기획</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>아이디어</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>브랜드/네이밍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>광고/마케팅</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>사진</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>개발/프로그래밍</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.main}>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="무엇을 검색하시나요?"
          />
          <TouchableOpacity
            style={styles.sendButton}
            //onPress={}
          >
            <Text>검색</Text>
        </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.activityList}>
          {/* 활동 1 */}
          <TouchableOpacity style={styles.activityItem}>
            <View style={styles.activityDetails}>
              <Text style={styles.activityCategory}>대외활동</Text>
              <Text style={styles.activityDday}>D-10</Text>
            </View>
            <Text style={styles.activityItemTitle}>활동 1</Text>
          </TouchableOpacity>
          {/* 활동 2 */}
          <TouchableOpacity style={styles.activityItem}>
            <View style={styles.activityDetails}>
              <Text style={styles.activityCategory}>대외활동</Text>
              <Text style={styles.activityDday}>D-5</Text>
            </View>
            <Text style={styles.activityItemTitle}>활동 2</Text>
          </TouchableOpacity>
          {/* 활동 3 */}
          <TouchableOpacity style={styles.activityItem}>
            <View style={styles.activityDetails}>
              <Text style={styles.activityCategory}>대외활동</Text>
              <Text style={styles.activityDday}>D-20</Text>
            </View>
            <Text style={styles.activityItemTitle}>활동 3</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  homeButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop:10,
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  nav: {
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    overflow: 'hidden',
  },
  navContent: {
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  navButtonText: {
    color: 'rgba(74, 85, 162, 1)',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  activityList: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  activityItem: {
    backgroundColor: 'rgba(226, 208, 248, 0.3)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  activityDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  activityCategory: {
    fontWeight: 'bold',
    color: 'rgba(74, 85, 162, 1)',
  },
  activityDday: {
    fontWeight: 'bold',
  },
  activityItemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputContainer: {
    width:"70%",
    height:"5%",
    marginBottom:20,
    flexDirection: 'row',
    alignItems: 'right',
    padding: 1,
    borderColor: '#EDEDED',
    backgroundColor: 'white',
  },
  inputText: {
    flex: 1,
    borderRadius: 1,
    backgroundColor: '#EDEDED',
    padding: 1,
    fontSize:10,
  },
  sendButton: {
    padding: 3,
    fontSize:10,
    backgroundColor: 'rgba(74, 85, 162, 1)',
    borderRadius: 5,
    marginLeft: 10,
  },
});
