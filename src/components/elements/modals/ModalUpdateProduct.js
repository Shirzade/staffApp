import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import { showModalUpdateProduct } from "../../../redux/actions";
import { modalStyle } from "../../../../assets/styles";
import { valueString } from "../../../utils/valueString";
import TextMessage from "../../elements/texts/TextMessage";
import ButtonPrimary from "../../elements/buttons/ButtonPrimary";

class ModalUpdateProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal animationIn="slideInUp" isVisible={this.props.showModalFlag}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: 250,
              height: 180,
              backgroundColor: "#fff",
              justifyContent: "center"
            }}
          >
            <View style={modalStyle.container}>
              <View style={modalStyle.firstSection}>
                {this.showImageMessage(this.props.showSuccessFlag)}
              </View>
              <View style={modalStyle.secondSection}>
                {}
                <TextMessage
                  title={this.showTextMessage(this.props.messageType)}
                />
              </View>
            </View>
            <ButtonPrimary
              page="IMPORT"
              title={valueString.VALUE_MESSAGE_CONFIRM}
            />
          </View>
        </View>
      </Modal>
    );
  }

  // show TextMessage
  showTextMessage(messageType) {
    switch (messageType) {
      case "UPDATE_SUCCESS":
        return valueString.VALUE_MESSAGE_SUCCESS_UPDATE_PRODUCT;
        break;
      case "UPDATE_ERROR":
        return valueString.VALUE_MESSAGE_ERROR_UPDATE_PRODUCT;
        break;
      case "CREATE_SUCCESS":
        return valueString.VALUE_MESSAGE_SUCCESS_CREATE_PRODUCT;
        break;
      case "CREATE_ERROR":
        return valueString.VALUE_MESSAGE_ERROR_CREATE_PRODUCT;
        break;
    }
  }

  // show ImageMessage
  showImageMessage(showMessage) {
    if (showMessage)
      return (
        <Image
          style={modalStyle.iconStyle}
          source={require("../../../../public/img/ic_success.png")}
        />
      );
    else
      return (
        <Image
          style={modalStyle.iconStyle}
          source={require("../../../../public/img/ic_failure.png")}
        />
      );
  }

  hideModal() {
    this.setState({
      showModal: false
    });
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
    showSuccessFlag: state.showModal.showSuccessFlag,
    messageType: state.showModal.messageType
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(ModalUpdateProduct);
