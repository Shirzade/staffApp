import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import { showModalExitApp , showModalExitAttendance } from "../../../redux/actions";
import { modalStyle } from "../../../../assets/styles";
import { valueString } from "../../../utils/valueString";
import TextMessage from "../../elements/texts/TextMessage";
import ButtonOrangeLeft from "../../elements/buttons/ButtonOrangeLeft";
import ButtonPrimaryRight from "../../elements/buttons/ButtonPrimaryRight";

class ModalExitAttendance extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal animationIn="slideInUp" isVisible={this.props.showModalExitAttendanceFlag}>
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
              width: 300,
              height: 150,
              backgroundColor: "#fff",
              justifyContent: "center"
            }}
          >
            <View style={modalStyle.container}>
              <View style={modalStyle.secondSection}>
                 <Image
						style={{ width: 50, height: 50 }}
						source={require('../../../../public/img/ic_attendace.png')}
					/>
                <TextMessage
                  title={valueString.VALUE_MESSAGE_EXIT_FROM_ATTENDANCE}
                />
              </View>
            </View>
            <View style={modalStyle.buttonSectionExitModal}>
              <ButtonPrimaryRight type="ATTENDANCE" title={valueString.VALUE_MESSAGE_YES} />
              <ButtonOrangeLeft title={valueString.VALUE_MESSAGE_NO} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapDisPatchToProps = dispatch => {
  return {
    showModalExitApp: showModalExitFlag =>
      dispatch(showModalExitApp(showModalExitFlag)),
    showModalExitAttendance : showModalExitAttendanceFlag=>dispatch(showModalExitAttendance(showModalExitAttendanceFlag))
  };
};
const mapStateToProps = state => {
  return {
    showModalExitAttendanceFlag: state.manageModalExit.showModalExitAttendanceFlag
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(ModalExitAttendance);
