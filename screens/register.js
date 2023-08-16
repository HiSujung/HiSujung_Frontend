import React, { useState } from 'react';
import { Linking, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native'; // 라우트 훅 가져오기


const openLink = () => {
  Linking.openURL('#');
};

export default function RegisterScreen({navigation}) {
  const [selectedDepartment, setSelectedDepartment] = useState("학과1");
  const [selectedValue, setSelectedValue] = useState("select");
  const [username, setUsername] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
//  const [email, setEmail] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const route = useRoute(); // 라우트 훅 사용
  const { email } = route.params; // 네비게이션 파라미터에서 email 값 가져오기


  const handleRegister = () => {
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Registration logic here
    // ...
  };

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

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>학과1</Text>
          <Picker
            selectedValue={selectedDepartment}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedDepartment(itemValue)}>
            <Picker.Item style={styles.Itemtext} label="학과1" value="학과1" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>학과2</Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
            <Picker.Item style={styles.Itemtext} label="학과2" value="학과2" />
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="이메일"
          value={email}
          editable={isEditMode}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="유저 이름"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setPasswordMatchError(false);
          }}
          secureTextEntry
        />

        {passwordMatchError && (
          <Text style={styles.errorText}>비밀번호가 일치하지 않습니다.</Text>
        )}

        <TouchableOpacity style={styles.commit} onPress={handleRegister}>
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
    marginTop: 80,
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
    fontWeight: '700',
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
    borderWidth: 2,
    borderColor: 'white',
  },
  pickerContainer: {
    borderColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pickerLabel: {
    color: 'white',
    marginRight: 10,
    fontSize: 16,
  },
  picker: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  Itemtext: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'white',
  },
  commit: {
    marginTop: 10,
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
  errorText: {
    color: 'red',
    marginTop: 5,
    textAlign: 'center',
  },
});
