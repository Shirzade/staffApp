import React from 'react'
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native'
import {mainStyle} from '../../../assets/styles'
import {Body, Header, Icon, Left, Right} from 'native-base'
import {Actions} from 'react-native-router-flux'
import call from 'react-native-phone-call'
import {valueString} from '../../utils/valueString'

const args = {
	number: valueString.VALUE_PHONE_SUPPORT_NUMBER, // String value with the number to call
	prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}

export default class MainHeader extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Header style={mainStyle.HeaderStyle}>
				<StatusBar backgroundColor="#232d37" barStyle="light-content"/>
				<Left>
				  <View style={{flexDirection: 'row'}}>
						<Icon
							style={mainStyle.menuIcon}
							type="FontAwesome"
							name="bars"
							onPress={() => Actions.drawerOpen()}
						/>
					</View>
				</Left>
				<Body>
				<View style={mainStyle.HeaderBodyStyle}>
					<Text style={mainStyle.headerPageText}>{this.props.title}</Text>
					{/* {this.manageImageHeader(this.props.subject)} */}
					{/*<Image style={mainStyle.headerPageImage} source={require("../../../public/img/ic_logo_shop.png")}/>*/}
				</View>
				</Body>
				<Right>
				</Right>
			</Header>
		)
	}

	manageImageHeader(subject) {
		switch (subject) {
			case 'INTERNET_REPORT':
				return (
					<Image
						style={mainStyle.imageHeader}
						source={require('../../../public/img/ic_homePage_internetOrder.png')}
					/>
				)
				break
			case 'IN_PERSON_REPORT':
				return (
					<Image
						style={mainStyle.imageHeader}
						source={require('../../../public/img/ic_homePage_internetOrder.png')}
					/>
				)
				break
			case 'NEED_SHOP':
				return (
					<Image
						style={mainStyle.imageHeader}
						source={require('../../../public/img/ic_homePage_internetOrder.png')}
					/>
				)
			case 'IMPORT_PRODUCT':
				return (
					<Image
						style={mainStyle.imageHeader}
						source={require('../../../public/img/ic_homePage_importProduct.png')}
					/>
				)
				break
		}
	}

	showBackIcon(showBach) {
		if (showBach)
			return null
		else return (<TouchableOpacity onPress={() => call(args).catch(console.error)}>
			<Text style={mainStyle.textHeader}>QR Code</Text>
		</TouchableOpacity>)


	}
}
