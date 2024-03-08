import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Icon,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';

const home = ({navigation}) => {
  const handlePressHeader = () => {
    navigation.navigate('header');
  };
  const handlePressSection = () => {
    navigation.navigate('section');
  };
  const handlePressTextInput = () => {
    navigation.navigate('textinput');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={styles.signInButton} onPress={handlePressHeader}>
        <Text style={styles.signInButtonText}>Custom header</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={handlePressSection}>
        <Text style={styles.signInButtonText}>Custom section</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={handlePressTextInput}>
        <Text style={styles.signInButtonText}>TextInputLayout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signInButton: {
    backgroundColor: '#D17842',
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 10,
    height: 57,
    width: 300,
  },
  signInButtonText: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular.ttf',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
  },
});

export default home;
