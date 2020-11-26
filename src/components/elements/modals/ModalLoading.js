import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Spinner } from 'native-base';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { showModalExitApp } from '../../../redux/actions';
import { modalStyle } from '../../../../assets/styles';
import { valueString } from '../../../utils/valueString';
import TextMessage from '../../elements/texts/TextMessage';
import ButtonOrangeLeft from '../../elements/buttons/ButtonOrangeLeft';
import ButtonPrimaryRight from '../../elements/buttons/ButtonPrimaryRight';

class ModalLoading extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Modal animationIn="slideInUp" isVisible={this.props.showModalLoadingFlag}>
				<Spinner />
			</Modal>
		);
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		showModalExitApp: (showModalExitFlag) => dispatch(showModalExitApp(showModalExitFlag))
	};
};
const mapStateToProps = (state) => {
	return {
		showModalExitFlag: state.manageModalExit.showModalExitFlag
	};
};

export default connect(mapStateToProps, mapDisPatchToProps)(ModalLoading);
