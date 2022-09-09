import {View, Text} from 'react-native';
import React from 'react';

const Header = props => {
  const {textStyling, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyling}>{props.title}</Text>
    </View>
  );
};

const styles = {
  textStyling: {
    fontSize: 22,
  },

  viewStyle: {
    backgroundColor: 'grey',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
};

export default Header;
