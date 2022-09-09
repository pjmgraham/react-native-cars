import {View, Text} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';

class CarList extends Component {
  componentDidMount() {
    axios.get('https://givecars.herokuapp.com/').then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <View>
        <Text>Car List</Text>
      </View>
    );
  }
}

export default CarList;
