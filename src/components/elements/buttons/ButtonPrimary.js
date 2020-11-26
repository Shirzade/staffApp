import React from 'react'
import {TouchableOpacity} from 'react-native'
import {buttonStyles} from '../../../../assets/styles'
import {showMessageSetQuantity, showModalErrorLogin, showModalUpdateProduct} from '../../../redux/actions'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import TextMediumWhite from '../../elements/texts/TextMediumWhite'

class ButtonPrimary extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<TouchableOpacity onPress={() => this.manageClick(this.props.page)} style={buttonStyles.buttonPrimaryStyle}>
				<TextMediumWhite title={this.props.title}/>
			</TouchableOpacity>
		)
	}

	manageClick(page) {
		switch (page) {
			case 'LOGIN':
				this.props.showModalErrorLogin(false)
				break
			case 'IMPORT': {
				this.props.showModalUpdateProduct(false, true, this.props.messageType)
				Actions.jump('importProduct')
			}

				break
			case 'SET_QTY': {
				if (this.props.messageStatus) Actions.jump('importProduct')
				this.props.showMessageSetQuantity(false, '', false)
			}
				break
		}
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		showModalUpdateProduct: (showModelFlag, showSuccessFlag, messageType) =>
			dispatch(showModalUpdateProduct(showModelFlag, showSuccessFlag, messageType)),
		showModalErrorLogin: (showModalLoginFlag) => dispatch(showModalErrorLogin(showModalLoginFlag)),
		showMessageSetQuantity: (showMessageSetQTY, messageQuantity) =>
			dispatch(showMessageSetQuantity(showMessageSetQTY, messageQuantity))
	}
}
const mapStateToProps = (state) => {
	return {
		showModalFlag: state.showModal.showModalFlag,
		messageType: state.showModal.messageType,
		messageStatus: state.showModal.messageStatus,
		showModalLoginFlag: state.showModalLogin.showModalLoginFlag
	}
}

export default connect(mapStateToProps, mapDisPatchToProps)(ButtonPrimary)
