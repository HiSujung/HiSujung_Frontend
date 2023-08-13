import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const openLink = () => {
  // Linking.openURL('#');
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.homeButton}>
          <AntDesign name="home" size={24} color="rgba(74, 85, 162, 1)" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>포트폴리오 관리</Text>
      </View>
      <View style={styles.nav}>
        <LinearGradient
          colors={['#E2D0F8', '#A0BFE0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradient}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navContent}>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>포트폴리오1</Text>
              <Text style={styles.portfolioNavTitle}>작게 포트폴리오 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>포트폴리오2</Text>
              <Text style={styles.portfolioNavTitle}>큰 포트폴리오 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>포트폴리오3</Text>
              <Text style={styles.portfolioNavTitle}>중간 포트폴리오 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButtonPlus}>
              <Text style={styles.navButtonTextPlus}>추가</Text>
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      </View>

      <View style={styles.main}>
        <View style={styles.portfolioInfo}>
          <Text style={styles.portfolioName}>포트폴리오 1</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>수정</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>서가은 수정</Text>
        <Text style={styles.infoLabel}>포트폴리오 제목</Text>
        <TextInput style={styles.infoInput} />
        <Text style={styles.infoLabel}>포트폴리오 링크</Text>
        <TextInput style={styles.infoInput} />
        <Text style={styles.infoLabel}>내용</Text>
        <TextInput style={styles.bigInfoInput} multiline numberOfLines={4} />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>저장하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
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
    marginBottom:10,
  },
  navButtonText: {
    color: 'rgba(74, 85, 162, 1)',
    fontWeight: 'bold',
  },
  navButtonPlus: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderStyle: 'dotted',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom:10,
  },
  navButtonTextPlus: {
    color: 'white',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  portfolioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  portfolioName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  editButtonText: {
    color: 'rgba(74, 85, 162, 1)',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoInput: {
    backgroundColor: 'rgba(226, 208, 248, 0.3)',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  bigInfoInput: {
    backgroundColor: 'rgba(226, 208, 248, 0.3)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: 'rgba(160, 191, 224, 1)',
    borderRadius: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  portfolioNavTitle: {
    color: 'rgba(74, 85, 162, 1)',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
