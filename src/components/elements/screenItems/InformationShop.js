import React from 'react'
import {AsyncStorage, Image, Platform, Text, TouchableOpacity, View} from 'react-native'
import {homeStyles} from '../../../../assets/styles'
import {configuration} from '../../../utils/config'
import {restApi} from '../../../utils/restApi'
import {valueString} from '../../../utils/valueString'
import StarRating from 'react-native-star-rating'
import call from 'react-native-phone-call'

const args = {
	number: valueString.VALUE_PHONE_SUPPORT_NUMBER,
	prompt: false
};

export default class InformationShop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			session_id: '',
			shop_id: '',
			shop_name: '',
			shop_stare: '',
			shop_coverage: '',
			shop_product_count: ''
		};
		this.getShopInformationFromDB();
	}

	render() {
		return (
			<View style={homeStyles.containers}>
				<TouchableOpacity onPress={() => this.handleFirstPage()}>
					<Image style={homeStyles.icone} source={require('../../../../public/img/ic_logo_shop.png')} />
				</TouchableOpacity>

				<Text style={homeStyles.mainTitle}>{this.state.shop_name}</Text>
				<StarRating
					emptyStar={'ios-star-outline'}
					fullStar={'ios-star'}
					halfStar={'ios-star-half'}
					iconSet={'Ionicons'}
					rating={this.state.shop_stare}
					fullStarColor={'red'}
				/>
				<Text style={homeStyles.subTitle}>
					{valueString.VALUE_HOME_PAGE_COVERAGE}
					{this.state.shop_coverage / 1000}
					{valueString.VALUE_HOME_PAGE_KM}
				</Text>
				<Text style={homeStyles.subTitle}>
					{valueString.VALUE_HOME_PAGE_VARIETY_OF_GOODS}
					{this.state.shop_product_count}
					{valueString.VALUE_HOME_PAGE_NUMBER}
				</Text>
			</View>
		);
	}
	// ##############################  handleFirstPage  ##############################
	handleFirstPage() {
		if (Platform.OS == 'android') call(args).catch(console.error);
		else return null;
	}
	// ######################   get information from BD      #########################
	getShopInformationFromDB() {
		AsyncStorage.getItem('@informationUser:informations', (err, data) => {
			if (err) {
				console.error('Error Loading');
			} else {
				const informations = JSON.parse(data);
				this.setState({
					shop_id: informations[2],
					session_id: informations[0]
				});
				this.getInformationShop(this.state.shop_id);
			}
		});
	}
	// ######################   get information from server   #########################
	getInformationShop(shopId) {
		fetch(`${configuration.MAIN_URL}` + `${restApi.GET_INFO_SHOP}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Openerp-Session-id': this.state.session_id
			},
			body: JSON.stringify({
				jsonrpc: '2.0',
				method: 'call',
				params: {
					shop_id: shopId
				},
				id: '382893928'
			})
		})
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					shop_name: responseJson.result.shop.name,
					shop_coverage: responseJson.result.shop.coverage,
					shop_stare: responseJson.result.shop.star,
					shop_product_count: responseJson.result.shop.product_count
				});
			})
			.catch((error) => {});
	}
}
