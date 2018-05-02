import React from 'react';
import { Text, TextInput, View } from 'react-native';

// const Input = ({value, onChangeText, label}) => {
// this is a way to decuntruct instead of using props

const Input = (props) => {
  const { inputStyle, lableStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={lableStyle}>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        autoCorrect={false}
        style={inputStyle}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  )
}

  const styles = {
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    lableStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex:1
    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
  }
}

export default Input;
