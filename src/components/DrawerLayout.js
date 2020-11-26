import React from 'react'
import {Text, View} from 'native-base'
import {AsyncStorage, ImageBackground, Platform, ScrollView} from 'react-native'
import {mainStyle} from '../../assets/styles'
import image from '../style/image'
import containers from '../style/containers'
import ModalExitApp from '../components/elements/modals/ModalExitApp'
import ModalExitAttendance from '../components/elements/modals/ModalExitAttendance'
import {connect} from 'react-redux'
import {showModalExitApp} from '../redux/actions'
import {valueString} from '../utils/valueString'
import ItemMainMenu from '../components/elements/items/ItemMainMenu'

class DrawerLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			shop_name: '',
			shop_phone: '',
			shop_owner: '',
			shop_email: ''
		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
				{this.showMessageExit()}
                {this.showMessageExitAttendance()}
				<ImageBackground
					source={require('../../public/img/ic_back_menu.jpg')}
					style={[image.backgroundImage, containers.alignCenter]}>
					<View>
						<Text style={mainStyle.textHeaderDrawerTitle}>{this.state.shop_name}</Text>
						<Text style={mainStyle.textHeaderDrawer}>{this.state.shop_owner}</Text>
						<Text style={mainStyle.textHeaderDrawer}>{this.state.shop_phone}</Text>
						<Text style={mainStyle.textHeaderDrawer}>{this.state.shop_email}</Text>
					</View>
				</ImageBackground>
				<ScrollView style={{padding: 5}}>
					<ItemMainMenu navigate="HOME" title={valueString.VALUE_MAIN_MENU_HOME}/>
					{/* <ItemMainMenu navigate="INTITEIS_LIST" title={valueString.VALUE_HOME_PAGE_IMPORT_PRODUCT}/> */}
					<ItemMainMenu navigate="BEDS_LIST" title={valueString.VALUE_ENTITY_MENU}/>
					{/* <ItemMainMenu navigate="BEDS_LIST" title={valueString.VALUE_BEDS}/> */}
					{/* <ItemMainMenu navigate="SERVICES" title={valueString.VALUE_SERVICES}/>
					{this.showSupportItem()} */}
					{/* <ItemMainMenu navigate="HELP_PAGE" title={valueString.VALUE_MAIN_MENU_HELP}/> */}
					<ItemMainMenu navigate="EXIT" title={valueString.VALUE_MAIN_MENU_EXIT}/>
					<ItemMainMenu navigate="LOGOUT" title={valueString.VALUE_MAIN_MENU_LOGOUT}/>
				</ScrollView>
			</View>
		)
	}

	showSupportItem() {
		if (Platform.OS == 'ios') return null
		else return <ItemMainMenu navigate="SUPPORT" title={valueString.VALUE_MAIN_MENU_SUPPORT}/>
	}

	showMessageExit() {
		if (Platform.OS == 'ios') return null
		else return <ModalExitApp/>
	}

	showMessageExitAttendance(){
		return <ModalExitAttendance/>
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		showModalExitApp: (showModalExitFlag) => dispatch(showModalExitApp(showModalExitFlag))
	}
}
const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, mapDisPatchToProps)(DrawerLayout)
