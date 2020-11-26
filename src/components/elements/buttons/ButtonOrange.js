import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { valueString } from "../../../utils/valueString";
import { buttonStyles } from "../../../../assets/styles";
import { showModalUpdateProduct } from "../../../redux/actions";
import { connect } from "react-redux";
import TextMediumWhite from "../../elements/texts/TextMediumWhite";

class ButtonOrange extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.showModalUpdateProduct(false, true, this.props.messageType)
        }
        style={buttonStyles.buttonPrimaryStyle}
      >
        <TextMediumWhite title={this.props.title} />
      </TouchableOpacity>
    );
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    showModalUpdateProduct: (showModelFlag, showSuccessFlag, messageType) =>
      dispatch(
        showModalUpdateProduct(showModelFlag, showSuccessFlag, messageType)
      )
  };
};
const mapStateToProps = state => {
  return {
    showModalFlag: state.showModal.showModalFlag,
    messageType: state.showModal.messageType
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(ButtonOrange);
