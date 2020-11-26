import React from "react";
import { View, Image, Text } from "react-native";
import { mainStyle } from "../../../assets/styles";

export default class SubHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={mainStyle.headerPage}>
        <Text style={mainStyle.headerPageText}>{this.props.title}</Text>
        {/* {this.manageImageHeader(this.props.subject)} */}
      </View>
    );
  }

  // ######################## manage images #########################
  manageImageHeader(subject) {
    switch (subject) {
      case "INTERNET_REPORT":
        return (
          <Image
            style={mainStyle.imageHeader}
            source={require("../../../public/img/ic_homePage_internetOrder.png")}
          />
        );
        break;
      case "IN_PERSON_REPORT":
        return (
          <Image
            style={mainStyle.imageHeader}
            source={require("../../../public/img/ic_homePage_internetOrder.png")}
          />
        );
        break;
      case "NEED_SHOP":
        return (
          <Image
            style={mainStyle.imageHeader}
            source={require("../../../public/img/ic_homePage_internetOrder.png")}
          />
        );
      case "IMPORT_PRODUCT":
        return (
          <Image
            style={mainStyle.imageHeader}
            source={require("../../../public/img/ic_homePage_importProduct.png")}
          />
        );
        break;
    }
  }
}
