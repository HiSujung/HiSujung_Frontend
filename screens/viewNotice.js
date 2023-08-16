import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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
          <TouchableOpacity style={styles.homeButton}>
            <AntDesign name="home" size={24} color="rgba(74, 85, 162, 1)" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>공지사항</Text>
        </View>
      </LinearGradient>

      <View style={styles.main}>
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
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
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
});
