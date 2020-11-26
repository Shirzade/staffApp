import React from "react";
import { AppRegistry,TouchableOpacity,View ,Image,ImageBackground,StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import containers from '../style/containers'; 
import text from '../style/text'; 

export default class MessageMedium extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: this.props.text
        };
      }
   render() {
    return (
       <Text style={text.messageMeduim}>{this.state.text}</Text>
    );
  }
}
