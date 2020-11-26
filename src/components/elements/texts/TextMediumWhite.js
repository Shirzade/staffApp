import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { valueString } from "../../../utils/valueString";
import { textsStyle } from "../../../../assets/styles";

export default class TextMediumWhite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text style={textsStyle.TextMediumWhiteStyle}>{this.props.title}</Text>;
  }
}
