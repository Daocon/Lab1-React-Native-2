import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const TextInputLayout = ({label, placeholder, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});

export default TextInputLayout;
