import React, {useState} from 'react';
import {View, TextInput, Image, Text, StyleSheet} from 'react-native';
import warningIcon from '../assets/mark.png';

const TextInputLayoutError = ({
  label,
  placeholder,
  onChangeText,
  value,
  errorMessage,
}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 10,
          }}>
          <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            style={[styles.input, errorMessage && styles.errorBorder]}
          />
          {errorMessage && (
            <Image source={warningIcon} style={styles.warningIcon} />
          )}
        </View>
      </View>
      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
  },
  errorBorder: {
    borderColor: 'red', // Màu viền khi có lỗi
  },
  warningIcon: {
    width: 20,
    height: 20,
  },
  errorContainer: {},
});

export default TextInputLayoutError;
