import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native'; // Import TouchableOpacity
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './../utils/AuthContext';

const API_URL = 'http://192.168.0.27:8080/externalact/id';
const R_API_URL = 'http://3.39.104.119:5000/recommend/univ?activity_name=60';

export default function ActivityScreen({ route }) {
    const { activityId } = route.params;
    const [activityData, setActivityData] = useState({});
    const [recActivityData, setRecActivityData] = useState({});
    const { token } = useAuth();
    const navigation = useNavigation();
  
    useEffect(() => {
      fetchActivityDetail();
      fetchRecActivityDetail();
    }, []);
  
    const fetchActivityDetail = async () => {
        const headers = {
            Authorization: `Bearer ${token}`
          };

      try {
        const response = await axios.get(`${API_URL}?id=${activityId}`, { headers });
        if (response.status === 200) {
          setActivityData(response.data);
          // if (activityData && activityData.content) {
          //   const formattedContent = activityData.content.replace(/\n/g, '\n');
          //   console.log('content: ' + formattedContent);
          // } else {
          //   console.log('activityData or content is undefined');
          // }
        }
      } catch (error) {
        console.error('Error fetching activity detail:', error);
      }
      
    };

    // Frommated Content
    const handleReplace = () => {
      if (activityData && activityData.content) {
        return activityData.content.replaceAll('\\n', "\n");
      } else {
        console.log('activityData or content is undefined');
        return '';
      }
    };
    const formattedContent = handleReplace();

    // Get List of Recommend System
    const fetchRecActivityDetail = async () => {
      const headers = {
          Authorization: `Bearer ${token}`
        };

    try {
      const response = await axios.get(R_API_URL);
      if (response.status === 200) {
        setRecActivityData(response.data);
      }
    } catch (error) {
      console.error('Error fetching activity detail:', error);
    }
    
  };

    const handleActListPress = () => {
        navigation.navigate('ActList'); 
      };

      const handleActivityPress = () => {
        navigation.navigate('Activity');
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
          <TouchableOpacity  onPress={handleActListPress}>
            <Text style={styles.headerTitle}>게시물 목록</Text>
            </TouchableOpacity>
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
        <ScrollView contentContainerStyle={styles.activityList}>
          <View style={styles.activityItem}>
            <View style={styles.activityDetails}>
              <Text style={styles.activityCategory}>대외활동</Text>
              {/* <Text style={styles.activityDday}>D-10</Text> */}
            </View>
            <ScrollView>
            <Text style={styles.activityItemTitle}>{activityData.title}</Text>
            <Text style={styles.activitySubTitle}>{activityData.link}</Text>
            <Text style={styles.activityDescription}>{formattedContent}</Text>
            </ScrollView>
            </View>
        </ScrollView>

        {/* 추천 게시물 */}
        <View style={styles.recommended}>
          {/* <Text style={styles.recommendedTitle}>추천 게시물</Text>
          <FlatList
            data={setRecActivityData}
            keyExtractor={(item) => item.id.toString()} // Assuming 'id' is a unique identifier
            renderItem={({ item }) => (
              <TouchableOpacity
              style={styles.recommendedItem}
                onPress={() => navigation.navigate('Activity', { activityId: item.id })} // Pass the activityId to the 'Activity' screen
              >
               <Text style={styles.recommendedItemTitle}>{item.title}</Text>
             </TouchableOpacity>
          )}
          /> */}

          <TouchableOpacity style={styles.recommendedItem}>
            <Text style={styles.recommendedItemTitle}>추천 게시물 1</Text>
          </TouchableOpacity>
          {/* 여기에 3개 더 추가 */}
          <TouchableOpacity style={styles.recommendedItem}>
            <Text style={styles.recommendedItemTitle}>추천 게시물 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendedItem}>
            <Text style={styles.recommendedItemTitle}>추천 게시물 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recommendedItem}>
            <Text style={styles.recommendedItemTitle}>추천 게시물 1</Text>
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
    height: '90%', // Adjusted height to make room for recommended items
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
    paddingTop:10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  activitySubTitle: {
    fontSize: 14,
    color: 'rgba(74, 85, 162, 1)',
    marginBottom: 5,
  },
  activityDescription: {
    paddingTop:10,
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