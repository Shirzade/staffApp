import React,{Component} from 'react'
import {
    Text
} from 'react-native';
import containers from '../style/containers'

const images = {
  starFilled: require('../../public/img/ic_shopPage_ratin.png'),
}

export default class MediumText extends Component{    
  render() {
    return (
        <Text style={containers.lineContainer}></Text>
    );
  }
}