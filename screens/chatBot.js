import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import freeIconHome7478461 from '../assets/splash.png';

export function ChatScreen() {
  return (
    <View style={styles.root}>
      {/* Header */}
      <View style={styles.rectangle23} />
      <Text style={styles.headerText}>Chat</Text>

      {/* Chat Content */}
      <View style={styles.rectangle24}>
        {/* Chat messages go here */}
      </View>

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 360,
    height: 640,
  },
  rectangle23: {
    width: 360,
    height: 62,
    backgroundColor: 'rgba(74, 85, 162, 1)', // Use your header background color here
  },
  headerText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 15,
  },
  rectangle24: {
    width: 360,
    height: 442, // Adjust the height as needed
    backgroundColor: '#FFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#A0BFE0',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  sendButton: {
    marginLeft: 12,
    backgroundColor: 'rgba(74, 85, 162, 1)', // Use your send button background color here
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFF',

    fontSize: 15,
    fontWeight: '700',
  },
});

export default ChatScreen;

