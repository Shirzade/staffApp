import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { valueString } from "../../../utils/valueString";
import { textsStyle } from "../../../../assets/styles";

export default class TextMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text style={textsStyle.messageStyle}>{this.props.title}</Text>;
  }
}
