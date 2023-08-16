import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function NoticeScreen() {
  const [heartFilled, setHeartFilled] = useState(false);

  const toggleHeart = () => {
    setHeartFilled(!heartFilled);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E2D0F8', '#A0BFE0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <View style={styles.homeButton}>
            <AntDesign name="home" size={24} color="rgba(74, 85, 162, 1)" />
          </View>
          <Text style={styles.headerTitle}>공지사항</Text>
        </View>
      </LinearGradient>
      <View style={styles.nav}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navContent}>
          {/* 네비 버튼들 */}
        </ScrollView>
      </View>

      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.activityList}>
          <TouchableOpacity style={styles.activityItem}>
            <View style={styles.activityDetails}>
              <Text style={styles.activityCategory}>대외활동</Text>
              <Text style={styles.activityDday}>D-10</Text>
            </View>
            <Text style={styles.activityItemTitle}>활동 1</Text>
            <Text style={styles.activitySubTitle}>대외활동 제목 1</Text>
            <Text style={styles.activitySubTitle}>마감일: 2023-09-01</Text>
            <Text style={styles.activityDescription}>
              활동 소개 내용이 들어갑니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla ut feugiat erat. Sed in urna eget lorem fermentum blandit.
            </Text>
            <TouchableOpacity style={styles.heartButton} onPress={toggleHeart}>
              <AntDesign
                name={heartFilled ? 'heart' : 'hearto'}
                size={20}
                color={heartFilled ? 'red' : 'black'}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          {/* 다른 활동들 */}
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
    paddingVertical: 10,
  },
  homeButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
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
  activityList: {
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '80%',
  },
  activityItem: {
    width: '100%',
    height: '100%',
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
  heartButton: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
});
