import React from 'react';
import { View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { showModalErrorLogin } from '../../../redux/actions';
import { modalStyle } from '../../../../assets/styles';
import { valueString } from '../../../utils/valueString';
import TextMessage from '../../elements/texts/TextMessage';
import ButtonPrimary from '../../elements/buttons/ButtonPrimary';

class ModalErrorLogin extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Modal animationIn="slideInUp" isVisible={this.props.showModalLoginFlag}>
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
							<View style={modalStyle.secondSection}>
								<TextMessage title={this.props.message} />
							</View>
						</View>
						<ButtonPrimary page="LOGIN" title={valueString.VALUE_MESSAGE_CONFIRM} />
					</View>
				</View>
			</Modal>
		);
	}

	hideModal() {
		this.setState({
			showModal: false
		});
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		showModalErrorLogin: (showModalLoginFlag) => dispatch(showModalErrorLogin(showModalLoginFlag))
	};
};
const mapStateToProps = (state) => {
	return {
		showModalLoginFlag: state.showModalLogin.showModalLoginFlag
	};
};

export default connect(mapStateToProps, mapDisPatchToProps)(ModalErrorLogin);
