import React from "react";
import { AppRegistry,TouchableOpacity,View ,Image,ImageBackground,StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import {mainStyle} from '../../assets/styles' 

export default class NvTextMedium extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: this.props.text
        };
      }
   render() {
    return (
       <Text style={mainStyle.NvtextMediumStyle}>{this.state.text}</Text>
    );
  }
}
