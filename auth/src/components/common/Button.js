import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
// TouchableOpacity provides feedback for the user that they clicked something
// onPress happens when ever the user presses the element. must take a function
const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1, // want the button to fill as much content as possible
    alignSelf: 'stretch', // fill container
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    alignSelf: 'center',  //centers inside the button
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
