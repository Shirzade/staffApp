import React,{Component} from 'react'
import {
    Alert
} from 'react-native';


export default class AlertError extends Component{  
    constructor(props) {
        super(props);
        this.state = {
          error: this.props.error,
        }
      }  
  render() {
    return (
        alert("dddddd")
    );
  }
}