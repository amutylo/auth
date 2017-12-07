import React from 'react';
import { TextInput, View, Text} from 'react-native';

const Input = ({ label, value, OnChangeText }) => {

  return (
    <View>
      <Text>{ label }</Text>
      <TextInput
        value={value}
        onChangeText={OnChangeText}
        style={{height: 20, width: 100}}
      />
    </View>
  )
}

export { Input };