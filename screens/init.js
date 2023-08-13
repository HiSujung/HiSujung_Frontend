import React from 'react';
import { Linking, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const openLink = () => {
  Linking.openURL('#');
};


export default function App() {
  return (
    <LinearGradient
      colors={['#E2D0F8', '#A0BFE0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Hi, 수정이</Text>
        <Text style={styles.title2}>HISUJUNG - E</Text>
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
    alignItems: 'flex-start',
    marginTop:0,
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    fontWeight:'700',
    textAlign:'left',
    textAlign: 'left',
  },
  title2: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    textAlign:'left',
    letterSpacing:9,
    textAlign: 'left',
  },
});
