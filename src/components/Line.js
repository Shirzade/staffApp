import React,{Component} from 'react'
import {
    Text,
    View
} from 'react-native';
import containers from '../style/containers'

const images = {
  starFilled: require('../../public/img/ic_shopPage_ratin.png'),
}

export default class Line extends Component{    
  render() {
    return (
        <View style={containers.lineContainer}></View>
    );
  }
}