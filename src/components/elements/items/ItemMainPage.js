import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {homeStyles} from '../../../../assets/styles'
import {Actions} from 'react-native-router-flux'
import {valueString} from '../../../utils/valueString'
import {connect} from 'react-redux'
import {getProductBarCode} from '../../../redux/actions'

class ItemMainPage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<TouchableOpacity
				onPress={() => this.manageClick(this.props.subject)}
				style={this.manageStyle(this.props.subject)}
			>
				{this.manageImage(this.props.subject)}
				{this.manageTitle(this.props.subject)}
			</TouchableOpacity>
		)
	}

	getCountNumberNewOrders() {
		if (this.state.new_order_number == null) return null
		else
			return (
				<View style={homeStyles.countNewOrderStyle}>
					<Text style={homeStyles.countNewOrderTextStyle}>{this.state.new_order_number}</Text>
				</View>
			)
	}

	// ###########################  manage style #######################
	manageStyle(subject) {
		switch (subject) {
		case 'INTERNET_REPORT':
			return homeStyles.imageContainerRightButton
			break
		case 'IN_PERSON_REPORT':
			return homeStyles.imageContainerLeftButton
			break
		case 'NEED_SHOP':
			return homeStyles.imageContainerLeftTop
			break
		case 'IMPORT_PRODUCT':
			return homeStyles.imageContainerRightTop
			break
		}
	}
	// ########################### manage title ########################
	manageTitle(subject) {
		switch (subject) {
		case 'INTERNET_REPORT':
			return <Text style={homeStyles.textSection}>{valueString.VALUE_HOME_PAGE_INTERNET_REPORT}</Text>
			break
		case 'IN_PERSON_REPORT':
			return <Text style={homeStyles.textSection}>{valueString.VALUE_HOME_PAGE_IN_PERSON_REPORT}</Text>
		case 'NEED_SHOP':
			return <Text style={homeStyles.textSection}>{valueString.VALUE_HOME_PAGE_NEED_SHOP}</Text>
			break
		case 'IMPORT_PRODUCT':
			return <Text style={homeStyles.textSection}>{valueString.VALUE_HOME_PAGE_IMPORT_PRODUCT}</Text>
			break
		}
	}
	// ######################## manage images #########################
	manageImage(subject) {
		switch (subject) {
		case 'INTERNET_REPORT':
			return (
				<Image
					style={homeStyles.imageSections}
					source={require('../../../../public/img/ic_homePage_internetOrder.png')}
				/>
			)
			break
		case 'IN_PERSON_REPORT':
			return (
				<Image
					style={homeStyles.imageSections}
					source={require('../../../../public/img/ic_homePage_reportPersent.png')}
				/>
			)
			break
		case 'NEED_SHOP':
			return (
				<Image
					style={homeStyles.imageSections}
					source={require('../../../../public/img/ic_homePage_needShop.png')}
				/>
			)
		case 'IMPORT_PRODUCT':
			return (
				<Image
					style={homeStyles.imageSections}
					source={require('../../../../public/img/ic_homePage_importProduct.png')}
				/>
			)
			break
		}
	}
	// ######################### manage click ###########################
	manageClick(type) {
		switch (type) {
		case 'INTERNET_REPORT':
			Actions.jump('internetOrders')
			break
		case 'IN_PERSON_REPORT':
			Actions.jump('reportOrders')
			break
		case 'NEED_SHOP':
			Actions.jump('needShop')
			break
		case 'IMPORT_PRODUCT': {
			this.props.getProductBarCode('', '')
			Actions.jump('importProduct')
		}
			break
		case 'HELP_PAGE':
			Actions.jump('introduction')
			break
		}
	}

	// ###################### get number new order ####################
	getNumberNewOrders() {
		fetch(`${configuration.MAIN_URL}` + `${restApi.GET_NEW_ORDER_NUMBER}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Openerp-Session-id': this.state.session_id
			},
			body: JSON.stringify({
				jsonrpc: '2.0',
				method: 'call',
				params: {},
				id: '382893928'
			})
		})
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState(
					{
						// new_order_number: responseJson.result.order_count
					}
				)
			})
			.catch((error) => {
				console.error(error)
			})
	}
}
const mapDisPatchToProps = (dispatch) => {
	return {
		getProductBarCode: (barCode, sid) => dispatch(getProductBarCode(barCode, sid))
	}
}

export default connect(null, mapDisPatchToProps)(ItemMainPage)
