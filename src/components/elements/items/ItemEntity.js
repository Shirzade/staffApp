import React from 'react'
import {Text, TouchableOpacity, View,Image} from 'react-native'
import {connect} from 'react-redux'
import {entityPage} from '../../../../assets/styles'
import {getAllEntityList,setRefresh,getDetailesEntity ,managerLoading , getItemsEntity , getAllServices} from '../../../redux/actions'
import {Actions} from 'react-native-router-flux'
import {configuration} from '../../../utils/config'
import {restApi} from '../../../utils/restApi'


class ItemEntity extends React.Component {
	constructor(props) {
		super(props)
		
	}

	render() {
        const {entity} = this.props
		return (
		     <View style={entityPage.entityItem}>
                 <View style={entityPage.textContainer}> 
				     <Text>{entity.item.title}</Text>
				 </View>
				  <View style={entityPage.containerButtons}>
						<TouchableOpacity onPress={()=>this.getInformationDetailesEntity(entity.item.id)} style={entityPage.buttonStyleEdit}>
							<Image
								source={require('../../../../public/img/ic_intity_edit.png')}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>this.deleteEntity(entity.item)} style={entityPage.buttonStyle}>
							<Image
								source={require('../../../../public/img/ic_remove.png')}
							/>
						</TouchableOpacity>
				  </View>
             </View>
		)
	}
   
	// edit entity 
	getInformationDetailesEntity(intityId){
        this.getAllServices()
        this.getDetailesEntity(intityId)
        this.getListItemsEntity(intityId)
	}
	

	
     //   get all services
	 getAllServices() {
		fetch(`${configuration.MAIN_URL}` + `${restApi.API_SERVICE_LIST}`, {
			method: 'GET',
			headers: {
				'Accept':'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer '+this.props.sessionId
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
		         this.props.getAllServices(responseJson.data)		
			})
			.catch((error) => {
				console.error(error)
			})
    }
    
    // get detailes intity
    getDetailesEntity(intityId){
        this.props.managerLoading(true)
        fetch(`${configuration.MAIN_URL}` + `${restApi.API_DETAILS_ENTITY}`+intityId, {
			method: 'GET',
			headers: {
				'Accept':'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer '+this.props.sessionId
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
                this.props.getDetailesEntity(responseJson.data)  
			})
			.catch((error) => {
				console.error(error)
			})
    }

    // get service the beds 
    getListItemsEntity(intityId){
        fetch(`${configuration.MAIN_URL}` + `${restApi.API_DETAILS_ENTITY}`+ intityId +'/item', {
			method: 'GET',
			headers: {
				'Accept':'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer '+this.props.sessionId
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
                console.log(responseJson.data)
                this.props.getItemsEntity(responseJson.data)
                Actions.jump('detailesEntity');
                this.props.managerLoading(false)
                
			})
			.catch((error) => {
				console.error(error)
			})
    }

	// delete entity 
	deleteEntity(entity){
		 let adminListEntity = []
	     adminListEntity = this.props.entityListAll
         for (let i = 0; i < adminListEntity.length; i++) {
			if(adminListEntity[i].id == entity.id)
			   adminListEntity.splice(i, 1)
		 }
		 console.log(adminListEntity)
		this.props.getAllEntityList(adminListEntity)
		this.props.setRefresh(!this.props.refreshing)
	}
	
}

const mapDisPatchToProps = dispatch => {
	return {
		getAllEntityList:(entityListAll)=>dispatch(getAllEntityList(entityListAll)),
		setRefresh:(refreshing)=>dispatch(setRefresh(refreshing)),
		managerLoading:(showLoading) =>dispatch(managerLoading(showLoading)),
        getAllServices:(items)=>dispatch(getAllServices(items)),
        getItemsEntity:(informationEntityItemList)=>dispatch(getItemsEntity(informationEntityItemList)),
		getDetailesEntity:(informationEntity)=>dispatch(getDetailesEntity(informationEntity))
	}
}

const mapStateToProps = (state) => {
    return {
		sessionId : state.getSessionId.sessionId,
		refreshing : state.entityManager.refreshing,
		entityListAll : state.entityManager.entityListAll
    }
}

export default connect(
	mapStateToProps,
	mapDisPatchToProps
)(ItemEntity)
