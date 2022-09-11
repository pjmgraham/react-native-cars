import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

const Button = props => {
  const {buttonStyle, textStyle} = styles;

  return (
    <TouchableOpacity onPress={props.buttonPress} style={buttonStyle}>
      <Text style={textStyle}>Click Me!</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 6,
    paddingBottom: 6,
    color: 'white',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginLeft: 7,
    marginRight: 7,
  },
};

export default Button;
