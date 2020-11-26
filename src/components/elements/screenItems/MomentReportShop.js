import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {Spinner} from 'native-base'
import {momentStyles} from '../../../../assets/styles'
import {valueString} from '../../../utils/valueString'
import {configuration} from '../../../utils/config'
import {restApi} from '../../../utils/restApi'
import {connect} from 'react-redux'
import {getCountAndAmountSale} from '../../../redux/actions'


function getRandom(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']
const currencies = ['', '', '']

class MomentReportShop extends React.Component {
	state = {
		currency: '',
		inMonthPrice: '0',
		inDayPrice: '0',
		showLoading: false
	}

	componentDidMount() {
		this.getCountAndAmountSale(false)
		setInterval(() => {
			this.setState({
				currency: currencies[getRandom(0, 2)],
				inMonthPrice: this.numberWithCommas(this.props.inMonthPrice).toString().split('').reverse().join('') + '',
				inDayPrice: this.numberWithCommas(this.props.inDayPrice).toString().split('').reverse().join('') + ''
			})
		}, 5000)

	}

	render() {
		return (
			<View style={momentStyles.container}>
				<View style={momentStyles.MonthlySalesStyle}>
					<View style={momentStyles.titleSection}>
						<Text style={momentStyles.titles}>
							{valueString.VALUE_MOMENT_REPORT_DAILY}
						</Text>
					</View>
					<View style={momentStyles.valueSection}>
						
					</View>
					<View style={momentStyles.unitSection}>
						<Text style={momentStyles.titles}>
							{valueString.VALUE_REAL}
						</Text>
					</View>
				</View>
				<View style={momentStyles.dailySalesStyle}>
					<View style={momentStyles.titleSection}>
						<Text style={momentStyles.titles}>
							{valueString.VALUE_MOMENT_REPORT_MONTHLY}
						</Text>
					</View>
					<View style={momentStyles.valueSection}>
					
					</View>
					<View style={momentStyles.unitSection}>
						<Text style={momentStyles.titles}>
							{valueString.VALUE_REAL}
						</Text>
					</View>
				</View>
				<View style={momentStyles.updateSection}>
					{this.showUpdateLoading(this.state.showLoading)}
					<TouchableOpacity onPress={() => this.updateCounterSale()}>
						{this.showUpdateButton(this.state.showLoading)}
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	showLoading() {
		this.setState({
			showLoading: true
		})
	}

	hideLoading() {
		this.setState({
			showLoading: false
		})
	}


	showUpdateLoading(showLoading) {
		if (showLoading)
			return (
				<Spinner style={{height: 20}} color='white' size='small'/>
			)
	}

	showUpdateButton(showLoading) {
		if (!showLoading) {
			return (
				<Text style={momentStyles.updateSectionText}>
					{valueString.VALUE_UPDATE}
				</Text>
			)
		}
	}


	updateCounterSale() {
		this.showLoading()
		setTimeout(() => {
			this.getCountAndAmountSale(true)
		}, 500)
	}


	async getCountAndAmountSale(updateClick) {
		try {
			let response = await fetch(`${configuration.MAIN_URL}` + `${restApi.URL_COUNT_ORDERS}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-Openerp-Session-id': this.props.sessionId
				},
				body: JSON.stringify({
					jsonrpc: '2.0',
					method: 'call',
					params: {},
					id: '382893928'
				})
			})
			let json = await response.json()
			let result = json.result
			console.log(json)
			this.setState({
				inDayPrice: this.numberWithCommas(result.in_day_price).toString().split('').reverse().join('') + '',
				inMonthPrice: this.numberWithCommas(result.in_month_price).toString().split('').reverse().join('') + '',
			})
			this.props.getCountAndAmountSale(result.in_day, result.in_day_price, result.in_month, result.in_month_price)
			if (updateClick)
				this.hideLoading()

		} catch (error) {
			console.log(error)
		}
	}


	// add separator
	numberWithCommas(x) {
		x = x.toString()
		var pattern = /(-?\d+)(\d{3})/
		while (pattern.test(x)) x = x.replace(pattern, '$1,$2')
		return x
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		getCountAndAmountSale: (inDay, inDayPrice, inMonth, inMonthPrice) => dispatch(getCountAndAmountSale(inDay, inDayPrice, inMonth, inMonthPrice))
	}
}

const mapStateToProps = (state) => {
	return {
		sessionId: state.getSessionId.sessionId,
		inDay: state.getCountAndAmountSale.inDay,
		inDayPrice: state.getCountAndAmountSale.inDayPrice,
		inMonth: state.getCountAndAmountSale.inMonth,
		inMonthPrice: state.getCountAndAmountSale.inMonthPrice
	}
}

export default connect(mapStateToProps, mapDisPatchToProps)(MomentReportShop)

