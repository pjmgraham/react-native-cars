import {View, Text, Image} from 'react-native';
import React from 'react';

import Item from './Item';
import ItemSection from './ItemSection';

const CarDetail = ({brand}) => {
  const {headerContainer, headerText, imageStyle} = styles;

  return (
    <Item>
      <ItemSection>
        <View style={headerContainer}>
          <Text style={headerText}>{brand.brand}</Text>
          <Text style={headerText}>{brand.model[0].name}</Text>
        </View>
      </ItemSection>
      <ItemSection>
        <Image style={imageStyle} source={{uri: brand.model[0].image}} />
      </ItemSection>
    </Item>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default CarDetail;
