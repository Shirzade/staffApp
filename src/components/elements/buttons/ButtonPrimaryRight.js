import React from 'react'
import {AsyncStorage, TouchableOpacity,Alert} from 'react-native'
import {buttonStyles} from '../../../../assets/styles'
import {showModalExitApp,showModalExitAttendance,managerAttendance} from '../../../redux/actions'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import TextMediumWhite from '../../elements/texts/TextMediumWhite'
import {configuration} from '../../../utils/config'
import {restApi} from '../../../utils/restApi'
import {valueString} from "../../../utils/valueString"

class ButtonPrimaryRight extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<TouchableOpacity
				onPress={() => this.exitFromApp(this.props.type)}
				style={buttonStyles.buttonPrimaryRightStyle}
			>
				<TextMediumWhite title={this.props.title}/>
			</TouchableOpacity>
		)
	}

	// exit From App
	exitFromApp(type) {
	if(type == "EXIT") {
        this.props.showModalExitApp(false)
		this.removeInformation()
	  } 
	else {
		this.props.showModalExitAttendance(false)
		this.props.managerAttendance(false)
		this.endAtteendance()
		this.setAttendance(false)
	   }	
	}


	 // end admin attendance
	 async endAtteendance() {
        try {
            let response = await fetch(`${configuration.MAIN_URL}`+ `${restApi.API_ATTENDANCE}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+this.props.sessionId
                },
            })
            let result = await response.json()    
			if(result.admin_id != undefined) {
				Actions.jump('barCodeReader')
				this.showMessage("",valueString.VALUE_MESSAGE_EXIT_ATTENDANCE_SUCCESS)
			}
			  
        } catch (error) {
            console.log(error)
        }
	}


	setAttendance(attendanceFlag) {
		AsyncStorage.setItem('@attendanceFlag:attendanceFlag', JSON.stringify(attendanceFlag))
	 }

	removeInformation() {
		AsyncStorage.removeItem('@informationUser:informations', (err, data) => {
			if (err) {
				console.error('Error Loading')
			} else {
				Actions.reset('splash')
			}
		})
	}
	showMessage(title, message) {
		Alert.alert(
			title,
			message,
			[
				{
					text: valueString.VALUE_CONFIRM,
					onPress: () => Actions.jump('barCodeReader')
				}
			],
			{cancelable: false}
		)
	}
}

const mapDisPatchToProps = dispatch => {
	return {
		showModalExitApp: showModalExitFlag =>
			dispatch(showModalExitApp(showModalExitFlag)),
			managerAttendance: (attendanceFlag) => dispatch(managerAttendance(attendanceFlag)),
			showModalExitAttendance : showModalExitAttendanceFlag=>dispatch(showModalExitAttendance(showModalExitAttendanceFlag))
	}
}
const mapStateToProps = state => {
	return {
		showModalFlag: state.showModal.showModalFlag,
		messageType: state.showModal.messageType,
		sessionId : state.getSessionId.sessionId
	}
}

export default connect(
	mapStateToProps,
	mapDisPatchToProps
)(ButtonPrimaryRight)
