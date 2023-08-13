import React, {useState} from 'react';
import { Linking, picker, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const openLink = () => {
  Linking.openURL('#');
};


export default function App() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <LinearGradient
      colors={['#E2D0F8', '#A0BFE0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Hi, 수정이</Text>
        <Text style={styles.subtitle}>반가워요 새로운 수정!</Text>
        
        <TextInput style={styles.input} placeholder="이름" />
        <TextInput style={styles.input} placeholder="아이디" />
        <TextInput style={styles.input} placeholder="비밀번호" />
        <View style={styles.email}>
        <TextInput style={styles.inputemail} placeholder="이메일" />
        <TouchableOpacity style={styles.checkmail}>
          <Text style={styles.checkmailText}>인증하기</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.pickerView}>
          <Picker 
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item style={styles.Itemtext} label="학과선택" value="select" />
          <Picker.Item style={styles.Itemtext} label="컴퓨터공학과" value="cs" />
        </Picker>
        </View>
        <TouchableOpacity style={styles.commit}>
          <Text style={styles.commitText}>회원가입</Text>
        </TouchableOpacity>
        
        
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
    padding: 50,
    alignItems: 'center',
    marginTop:80,
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
    fontWeight:'700',

  },
  subtitle: {
    fontSize: 15,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'rgba(131, 131, 131, 1)',
    borderWidth:2,
    borderColor:'white',
    
  },
  email:{
    width: 300,
    height: 40,
    display:'flex',
    flexDirection:'row',
  },

  inputemail: {
    width: 220,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth:2,
    borderColor:'white',
    marginRight:10,
  },
  checkmail: {
    width: 85,
    height: 40,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 4,
  },
  checkmailText: {
    color:'rgba(0, 123, 184, 1)',
    fontSize:12,
  },
  picker: {
    width:150,
    height:50,
    alignItems: "center",
    borderWidth:2,
    borderColor:'black',
  },

  Itemtext: {
    color:'black',
    borderWidth:1,
    borderColor:'white',
  },

  commit: {
    marginTop:10,
    width: 200,
    height: 40,
    backgroundColor: 'rgba(197, 223, 248, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 4,
  },
  commitText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  linkText:{
    textDecorationLine: 'underline',
    fontSize:15,
    marginTop:10,
    color: 'white',
  },

});
