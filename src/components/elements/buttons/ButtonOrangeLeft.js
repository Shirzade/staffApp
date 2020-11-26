import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { valueString } from "../../../utils/valueString";
import { buttonStyles } from "../../../../assets/styles";
import { showModalExitApp } from "../../../redux/actions";
import { connect } from "react-redux";
import TextMediumWhite from "../../elements/texts/TextMediumWhite";

class ButtonOrangeLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.showModalExitApp(false)}
        style={buttonStyles.buttonOrangeLeftStyle}
      >
        <TextMediumWhite title={this.props.title} />
      </TouchableOpacity>
    );
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    showModalExitApp: showModalExitFlag =>
      dispatch(showModalExitApp(showModalExitFlag))
  };
};
const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(ButtonOrangeLeft);
