import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {connect} from 'react-redux'
import {internetOrderStyles} from '../../../../assets/styles'
import {sendOrderDetailsInPerson} from '../../../redux/actions'
import {Actions} from 'react-native-router-flux'
import {configuration} from '../../../utils/config'
import {restApi} from '../../../utils/restApi'


class ItemInPersonSale extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			statusOrder: ((this.props.order.item.status == 0) ? false : true) 
		}
	}

	render() {
		const {order} = this.props
		return (
			<View
				style={
					order.index % 2 == 0
						? internetOrderStyles.containerItemListOdd
						: internetOrderStyles.containerItemList
				}>
				<View style={internetOrderStyles.mainList}>
					 
			    	<Text style={internetOrderStyles.mainListTextNumber}>
						{order.item.requestId}
					 </Text>
					 <Text style={internetOrderStyles.mainListText}>
					 	{order.item.from}
					 </Text>
					 <Text style={internetOrderStyles.mainListText}>
					 	{order.item.itemName}
					 </Text>
			         <Text style={internetOrderStyles.mainListText}>
						 {order.item.priority}
					 </Text>
					<Text style={internetOrderStyles.mainListText}>
					 	{order.item.data}
					 </Text>
					
					 {this.showActionButton(order.item.requestId)}  
				</View>
			</View>
		)
	}
	showActionButton(status){
		if(this.state.statusOrder)
		return (<TouchableOpacity onPress={()=>this.acceptedRequest(status)} style={internetOrderStyles.containerAction}>
		         <Text style={{color:'white',fontSize:10}}>accept</Text>
	          </TouchableOpacity> )
	   else return(
		       <View style={{justifyContent:'center'}}>
				   <Text style={{color:'green',fontSize:10}}>
				      accepted
			       </Text>
			   </View>
	   )
	}

	showStatus (status){
	   if(this.state.statusOrder)
	     return (<Text style={internetOrderStyles.mainListText}>
			       pending
			   </Text>)
		else return (
			<Text style={internetOrderStyles.mainListText}>
			       accepted
			   </Text>)	   
	}
	acceptedRequest(requestId) {
		
		let formData = new URLSearchParams();
		formData.append('request_item_id', requestId);
		fetch(`${configuration.MAIN_URL}` + `${restApi.ACCEPT_ORDERS}`, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'content-Type':'application/x-www-form-urlencoded',
				'Authorization':  'Bearer '+this.props.sessionId
			},
			body:formData.toString()
		})
			.then(response => response.json())
			.then(responseJson => {

				if(responseJson.data.result)
				    this.setState({
						statusOrder:false
					})
				   	
			})
			.catch(error => {
				console.error(error)
			})		
	}
}

const mapDisPatchToProps = dispatch => {
	return {
		sendOrderDetailsInPerson: (
			items
		) =>
			dispatch(
				sendOrderDetailsInPerson(
					items
				)
			)
	}
}

const mapStateToProps = (state) => {
    return {
        sessionId : state.getSessionId.sessionId
    }
}

export default connect(
	mapStateToProps,
	mapDisPatchToProps
)(ItemInPersonSale)
