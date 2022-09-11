import {View, Text} from 'react-native';
import React from 'react';

const CarDetail = props => {
  return (
    <View>
      <Text>{props.brand.model[0].name}</Text>
    </View>
  );
};

export default CarDetail;
