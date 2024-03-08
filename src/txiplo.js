import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import TextInputLayout from './TextInputLayout'; // Đường dẫn đến file TextInputLayout.js
import TextInputLayoutError from './TextInputLayoutError';

const txiplo = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [error3, setError3] = useState('');

  const handleTextChange1 = text => {
    setText1(text);
    setError1(text ? '' : 'Vui lòng nhập thông tin');
  };

  const handleTextChange2 = text => {
    setText2(text);
    setError2(text ? '' : 'Vui lòng nhập thông tin');
  };

  const handleTextChange3 = text => {
    setText3(text);
    setError3(text ? '' : 'Vui lòng nhập thông tin');
  };

  return (
    <View style={styles.container}>
      <TextInputLayoutError
        label="Name *"
        placeholder="Nhập thông tin 1"
        onChangeText={handleTextChange1}
        value={text1}
        errorMessage={error1}
        isValid={error1 === ''}
      />
      <TextInputLayoutError
        label="Email *"
        placeholder="Nhập thông tin 2"
        onChangeText={handleTextChange2}
        value={text2}
        errorMessage={error2}
        isValid={error2 === ''}
      />
      <TextInputLayoutError
        label="Description *"
        placeholder="Nhập thông tin 3"
        onChangeText={handleTextChange3}
        value={text3}
        errorMessage={error3}
        isValid={error3 === ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default txiplo;
