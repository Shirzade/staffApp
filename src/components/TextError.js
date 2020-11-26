import React from "react";
import { AppRegistry,TouchableOpacity,View ,Image,ImageBackground,StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import {mainStyle} from '../../assets/styles' 

export default class TextError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: this.props.error
        };
      }
   render() {
    return (
       <Text style={mainStyle.textErrorStyle}>{this.state.error}</Text>
    );
  }
}