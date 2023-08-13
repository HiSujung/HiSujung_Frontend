import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, 수정이</Text>
      <Text style={styles.title2}>원하시는 활동 카테고리를 {"\n"}선택해주세요</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>IT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>디자인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>마케팅</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>마케팅</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>마케팅</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>마케팅</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeButtonText}>선택완료</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    justifyContent: 'center', // 수직 중앙 정렬
    alignItems: 'center', // 수평 중앙 정렬
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    color: 'rgba(126, 140, 235, 1)',
    marginBottom: 20,
    fontWeight: '700',
    textAlign: 'left', // 가운데 정렬
  },
  title2: {
    fontSize: 20,
    color: 'rgba(74, 85, 162, 1)',
    marginBottom: 20,
    textAlign: 'left', // 가운데 정렬
    letterSpacing: 9,
  },
  buttonContainer: {
    justifyContent: 'center', // 수직 중앙 정렬
    alignItems: 'center', // 수평 중앙 정렬
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: '40%',
    height: 100,
    backgroundColor: 'rgba(226, 208, 248, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  completeButton: {
    width:200,
    backgroundColor: 'rgba(205, 164, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
  },
  completeButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
