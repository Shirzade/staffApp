import React from 'react';
import { Image, Text, TouchableOpacity, Platform, Alert, AsyncStorage } from 'react-native';
import { mainStyle } from '../../../../assets/styles';
import { Actions } from 'react-native-router-flux';
import { valueString } from '../../../utils/valueString';
import { showModalExitApp ,getListBeds, getAllServices ,managerLoading,showModalExitAttendance } from '../../../redux/actions';
import {configuration} from '../../../utils/config'
import {restApi} from '../../../utils/restApi'
import { connect } from 'react-redux';
import call from 'react-native-phone-call';

const args = {
	number: valueString.VALUE_PHONE_SUPPORT_NUMBER, // String value with the number to call
	prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
};

class ItemMainMenu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<TouchableOpacity
				style={mainStyle.itemDrawerLayout}
				onPress={() => this.navigateToPages(this.props.navigate)}
			>
				
				{this.showImageMenu(this.props.navigate)}
				<Text style={mainStyle.itemDrawerLayoutText}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}

	// Exit From App Message
	showModalMessageExit() {
		if (Platform.OS == 'ios') this.showMessageExit();
	    this.props.showModalExitApp(true);
	}

	showMessageExit() {
		Alert.alert(
			valueString.VALUE_TITLE_EXIT_FROM_ACCOUNT,
			valueString.VALUE_MESSAGE_EXIT_FROM_ACCOUNT,
			[
				{
					text: valueString.VALUE_MESSAGE_NO,
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{
					text: valueString.VALUE_MESSAGE_YES,
					onPress: () => this.removeInformation()
				}
			],
			{ cancelable: false }
		);
	}

	removeInformation() {
		AsyncStorage.removeItem('@informationUser:informations', (err, data) => {
			if (err) {
				console.error('Error Loading');
			} else {
				Actions.reset('splash');
			}
		});
	}

	//show Image Menu
	showImageMenu(navigate) {
		switch (navigate) {
			case 'HOME':
				return (
					<Image
						style={{ width: 30, height: 30 }}
						source={require('../../../../public/img/ic_menu_home.png')}
					/>
				);
				break;
			case 'BEDS_LIST':
				return (
					<Image
						style={{ width: 30, height: 30 }}
						source={require('../../../../public/img/ic_bed.png')}
					/>
				);
				break;
			case 'INTITEIS_LIST':
				return (
					<Image
						style={{ width: 30, height: 30 }}
						source={require('../../../../public/img/ic_menu_import.png')}
					/>
				);
				break;
			case 'NEED_SHOP':
				return (
					<Image
						style={{ width: 30, height: 30 }}
						source={require('../../../../public/img/ic_menu_need.png')}
					/>
				);
				break;
			case 'SERVICES':
				return (
					<Image
						style={{ width: 30, height: 30 }}
						source={require('../../../../public/img/ic_menu_services.png')}
					/>
				);
				break;
			case 'SUPPORT':
				return (
					<Image
						style={{ width: 30, height: 30 }}
						source={require('../../../../public/img/ic_menu_support.png')}
					/>
				);
				break;
			case 'HELP_PAGE':
				return (
					<Image
						style={{ width: 30, height: 30 }}
						source={require('../../../../public/img/ic_menu_help.png')}
					/>
				);
				break;
			case 'EXIT':
				return (
					<Image
						style={{ width: 30, height: 30 }}
						source={require('../../../../public/img/ic_menu_logout.png')}
					/>
				);
				break;
				case 'LOGOUT':
					return (
						<Image
							style={{ width: 30, height: 30 }}
							source={require('../../../../public/img/ic_menu_exit.png')}
						/>
					);
					break;
		}
	}

	// navigate to screens
	navigateToPages(page) {
		Actions.drawerClose();
		switch (page) {
			case 'HOME':{
				if(this.props.attendanceFlag)
				    Actions.jump('listRequest');
				else
			    	Actions.jump('barCodeReader')
			}
				
				return;
			case 'BEDS_LIST':
				   Actions.jump('intiteisList')
				return;
			// case 'BEDS_LIST':{
			// 	this.getAllBeds(this.props.sessionId)
			// 	this.props.managerLoading(true)
			// 	Actions.jump('beds');
			// }
			// 	return;
			case 'SERVICES':{
				this.getAllServices(this.props.sessionId)
				this.props.managerLoading(true)
				Actions.jump('services');
			}
				return;
			case 'NEED_SHOP':
				Actions.jump('needShop');
				return;
			case 'IN_PERSON_REPORT':
				Actions.jump('reportOrders');
				break;
			case 'SUPPORT':
				call(args).catch(console.error);
				break;
			case 'LOGOUT':
				this.showModalMessageExit();
				break;
			case 'EXIT':
				this.props.showModalExitAttendance(true)
				// this.endAtteendance()
				break;
			case 'HELP_PAGE':
				Actions.jump('introduction');
				break;
		}
	}

	
	

	 //   get all services
	 getAllServices(authorization) {
		fetch(`${configuration.MAIN_URL}` + `${restApi.API_SERVICE_LIST}`, {
			method: 'GET',
			headers: {
				'Accept':'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer '+authorization
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				 this.props.managerLoading(false)
		         this.props.getAllServices(responseJson.data)		
			})
			.catch((error) => {
				console.error(error)
			})
	}

	// get list beds 
	getAllBeds(authorization) {
		fetch(`${configuration.MAIN_URL}` + `${restApi.API_ENTITY_LIST}`, {
			method: 'GET',
			headers: {
				'Accept':'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer '+authorization
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				this.props.managerLoading(false)
				this.props.getListBeds(responseJson.data)
			})
			.catch((error) => {
				console.error(error)
			})
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		showModalExitApp: (showModalExitFlag) => dispatch(showModalExitApp(showModalExitFlag)),
		getAllServices:(items)=>dispatch(getAllServices(items)),
		managerLoading:(showLoading) =>dispatch(managerLoading(showLoading)),
		getListBeds:(listBeds)=>dispatch(getListBeds(listBeds)),
		showModalExitAttendance : (showModalExitAttendanceFlag)=>dispatch(showModalExitAttendance(showModalExitAttendanceFlag))

	};
};
const mapStateToProps = (state) => {
	return {
		sessionId : state.getSessionId.sessionId,
		attendanceFlag:state.managerAttendance.attendanceFlag
	};
};
export default connect(mapStateToProps, mapDisPatchToProps)(ItemMainMenu);
