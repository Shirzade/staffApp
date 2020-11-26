import React from "react";
import { TouchableOpacity, Text, View ,Image} from "react-native";
import { connect } from "react-redux";
import { entityPage ,detailesBedStyle } from "../../../../assets/styles";
import { Actions } from "react-native-router-flux";
import { sendOrderDetails,getItemsEntity,setRefresh } from "../../../redux/actions";
import {configuration} from '../../../utils/config'
import {restApi} from '../../../utils/restApi'

class ItemServiceDetaile extends React.Component {
	constructor(props) {
		super(props)
    }
    
    render() {
		const {service} = this.props
        return (
            <View style={detailesBedStyle.serviceItem}>
                 <View style={detailesBedStyle.textContainerServiceItem}>
				     <Text>{service.item.title}</Text>
				 </View>
				 <TouchableOpacity onPress={()=>this.deleteService(service.item)}>
					<Image
						source={require('../../../../public/img/ic_remove.png')}
					/>
				 </TouchableOpacity>
             </View>
        )
	}
	
	deleteService(entity){
		let selectedService = []
		selectedService = this.props.informationEntityItemList
		for (let i = 0; i < selectedService.length; i++) {
		   if(selectedService[i].id == entity.id)
		   selectedService.splice(i, 1)
		}
	   this.props.getItemsEntity(selectedService)
	   this.props.setRefresh(!this.props.refreshing)
   }
}

const mapDisPatchToProps = dispatch => {
	return {
		getItemsEntity:(informationEntityItemList)=>dispatch(getItemsEntity(informationEntityItemList)),
		setRefresh:(refreshing)=>dispatch(setRefresh(refreshing))
	}
}

const mapStateToProps = (state) => {
    return {
		sessionId : state.getSessionId.sessionId,
		refreshing : state.entityManager.refreshing,
		informationEntityItemList : state.entityManager.informationEntityItemList,
    }
}


export default connect(mapStateToProps,mapDisPatchToProps)(ItemServiceDetaile)