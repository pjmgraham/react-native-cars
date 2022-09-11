import {View} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';

import CarDetail from './CarDetail';

class CarList extends Component {
  constructor() {
    super();
    this.state = {
      carList: [],
    };
  }

  componentDidMount() {
    axios.get('https://givecars.herokuapp.com/').then(response => {
      this.setState({carList: response.data});
    });
  }

  renderList = () => {
    return this.state.carList.map(brand => {
      return <CarDetail brand={brand} key={brand.model[0].name} />;
    });
  };

  render() {
    return <View>{this.renderList()}</View>;
  }
}

export default CarList;
