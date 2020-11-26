import React from 'react';
import { View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { modalStyle } from '../../../../assets/styles';
import { valueString } from '../../../utils/valueString';
import TextMessage from '../../elements/texts/TextMessage';
import ButtonPrimary from '../../elements/buttons/ButtonPrimary';
import { showMessageSetQuantity } from '../../../redux/actions';

class ModalMessageSetQuantity extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Modal animationIn="slideInUp" isVisible={this.props.showMessageSetQTY}>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignContent: 'center',
						alignItems: 'center'
					}}
				>
					<View
						style={{
							width: 280,
							height: 150,
							backgroundColor: '#fff',
							justifyContent: 'center'
						}}
					>
						<View style={modalStyle.container}>
							<View style={modalStyle.firstSection}>
								{this.showImageMessage(this.props.messageStatus)}
							</View>
							<View style={modalStyle.secondSection}>
								<TextMessage title={this.props.messageQuantity} />
							</View>
						</View>
						<ButtonPrimary page="SET_QTY" title={valueString.VALUE_MESSAGE_CONFIRM} />
					</View>
				</View>
			</Modal>
		);
	}

	// show ImageMessage
	showImageMessage(showMessage) {
		if (showMessage)
			return <Image style={modalStyle.iconStyle} source={require('../../../../public/img/ic_success.png')} />;
		else return <Image style={modalStyle.iconStyle} source={require('../../../../public/img/ic_failure.png')} />;
	}
	hideModal() {
		this.setState({
			showModal: false
		});
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		showMessageSetQuantity: (showMessageSetQTY, messageQuantity) =>
			dispatch(showMessageSetQuantity(showMessageSetQTY, messageQuantity))
	};
};
const mapStateToProps = (state) => {
	return {
		showMessageSetQTY: state.showModal.showMessageSetQTY,
		messageQuantity: state.showModal.messageQuantity,
		messageStatus: state.showModal.messageStatus
	};
};

export default connect(mapStateToProps, mapDisPatchToProps)(ModalMessageSetQuantity);
