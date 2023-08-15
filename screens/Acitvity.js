import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
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
          <Text style={styles.headerTitle}>게시물 목록</Text>
        </View>
      </LinearGradient>
      <View style={styles.nav}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navContent}>
          {/* 네비 버튼들 */}
        </ScrollView>
      </View>

      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.activityList}>
          {/* 활동 1 */}
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
          </TouchableOpacity>
          {/* 활동 2 */}
          
          {/* 활동 3 */}
        </ScrollView>

        {/* 추천 게시물 */}
        <View style={styles.recommended}>
          <Text style={styles.recommendedTitle}>추천 게시물</Text>
          <TouchableOpacity style={styles.recommendedItem}>
            <Text style={styles.recommendedItemTitle}>추천 게시물 1</Text>
            <Text style={styles.recommendedItemDate}>마감일: 2023-09-15</Text>
          </TouchableOpacity>
          {/* 여기에 3개 더 추가 */}
          <TouchableOpacity style={styles.recommendedItem}>
            <Text style={styles.recommendedItemTitle}>추천 게시물 1</Text>
            <Text style={styles.recommendedItemDate}>마감일: 2023-09-15</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendedItem}>
            <Text style={styles.recommendedItemTitle}>추천 게시물 1</Text>
            <Text style={styles.recommendedItemDate}>마감일: 2023-09-15</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendedItem}>
            <Text style={styles.recommendedItemTitle}>추천 게시물 1</Text>
            <Text style={styles.recommendedItemDate}>마감일: 2023-09-15</Text>
          </TouchableOpacity>
        </View>
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
    height: '80%', // Adjusted height to make room for recommended items
  },
  activityItem: {
    width: '100%',
    height: 700, // Adjusted height for the activity item
    backgroundColor: 'rgba(226, 208, 248, 0.3)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
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
  activitySubTitle: {
    fontSize: 14,
    color: 'rgba(74, 85, 162, 1)',
    marginBottom: 5,
  },
  activityDescription: {
    fontSize: 14,
  },
  recommended: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 20, // Added paddingHorizontal to center the recommended items
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendedItem: {
    backgroundColor: 'rgba(226, 208, 248, 0.3)',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 5,
  },
  recommendedItemTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  recommendedItemDate: {
    fontSize: 12,
    color: 'rgba(74, 85, 162, 1)',
  },
});
