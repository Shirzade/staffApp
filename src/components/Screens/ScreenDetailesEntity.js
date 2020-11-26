import React from 'react'
import {Alert,Text,ActivityIndicator,TouchableOpacity, Animated,FlatList, AsyncStorage, Easing,ScrollView, Image, ImageBackground, Platform, StatusBar, View} from 'react-native'
import {Body, Button, Container,Content, Header, Icon, Item, Left, Picker, Right, Spinner, Title} from 'native-base'
import {detailesBedStyle} from '../../../assets/styles'
import {Actions} from 'react-native-router-flux'
import {configuration} from '../../utils/config'
import {restApi} from '../../utils/restApi'
import containers from '../../style/containers'
import text from '../../style/text'
import MainHeader from '../elements/MainHeader'
import {valueString} from '../../utils/valueString'
import {getProductBarCode,managerLoading, getSessionId, getSid, showModalErrorLogin, setRefresh,getItemsEntity} from '../../redux/actions'
import {connect} from 'react-redux'
import ItemService from '../elements/items/ItemService'
import ItemServiceDetaile from '../elements/items/ItemServiceDetaile'
import { importProductStyles} from '../../../assets/styles';

class DetailesEntity extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            selectedService:0

    }
}



    render() {
		return (
			<Container>
				<MainHeader
					showBach={true}
					subject="IN_PERSON_REPORT"
					title={valueString.VALUE_INTITY_DETAILES}
				/>
                 {this.showLoading()}
                <View style={{flex:5}}>
                
				<Content>       
                    <View style={detailesBedStyle.containrePage}>
                            <View style={detailesBedStyle.titleStyle}>
                                <Text>{valueString.VALUE_DETAILES_BED_TITLE}</Text>
                            </View>  
                            <View style={detailesBedStyle.valueStyle}>
                                <Text>{this.props.informationEntity.title}</Text>    
                            </View>   
                    </View>
                    <View style={detailesBedStyle.containrePage}>
                            <View style={detailesBedStyle.titleStyle}>
                                <Text>{valueString.VALUE_DETAILES_BED_DESCRIPTION}</Text>
                            </View>  
                            <View style={detailesBedStyle.valueStyle}>
                                <Text>{this.props.informationEntity.description}</Text>    
                            </View>   
                    </View>
                    <View style={detailesBedStyle.containrePage}>
                            <View style={detailesBedStyle.titleStyle}>
                                <Text>{valueString.VALUE_DETAILES_BED_ITEM_COUNT}</Text>
                            </View>  
                            <View style={detailesBedStyle.valueStyle}>
                                <Text>{this.props.informationEntity.items_count}</Text>    
                            </View>   
                    </View>
                    <View style={detailesBedStyle.containrePage}>
                            <View style={detailesBedStyle.titleStyle}>
                                <Text>{valueString.VALUE_DETAILES_BED_ALL_SERVICES}</Text>
                            </View>  
                            <View style={detailesBedStyle.valueStyle}>
                     <Picker
                            renderHeader={(backAction) => (
                                <Header style={{backgroundColor: '#232d37'}}>
                                    <Left/>
                                    <Body style={{flex: 3}}>
                                    <Title style={importProductStyles.titleSelectCategory}>
                                        select service
                                    </Title>
                                    </Body>
                                    <Right>
                                        <Button transparent onPress={backAction}>
                                        <Icon type="FontAwesome" name="chevron-right" style={{color: '#fff'}} />
                                        </Button>
                                    </Right>
                                </Header>
                            )}
                            mode="dropdown"
                            iosIcon={<Icon type="FontAwesome" name="chevron-down"/>}
                            placeholder="select service"
                            onValueChange={this.onValueChangeService.bind(this)}
                            selectedValue={this.state.selectedService}
                            style={{width: '100%', fontFamily: 'BYekan'}}>
                            {this.showListServices(this.props.items)}
			          </Picker>
                            </View>   
                    </View>
                    <View style={detailesBedStyle.containrePage}>
                            <View style={detailesBedStyle.titleStyle}>
                                <Text>{valueString.VALUE_DETAILES_BED_SERVICE}</Text>
                            </View>  
                            <View style={detailesBedStyle.valueServiceStyle}>
                                <FlatList
                                    data={this.props.informationEntityItemList}
                                    numColumns={2}
                                    renderItem={this.renderItemsServices.bind(this)}
                                    keyExtractor={item => item.id}
                                    refreshing={this.props.refreshing}
                                />
                            </View>   
                    </View>
                    <View style={detailesBedStyle.containrePage}>
                            <View style={detailesBedStyle.titleStyle}>
                                <Text>{valueString.VALUE_DETAILES_BED_ACTIVE_STATUSE}</Text>
                            </View>  
                            <View style={detailesBedStyle.valueStyleStatuse}>
                               {this.showActiveStatus(this.props.informationEntity.active)}
                            </View>   
                    </View>
                </Content>
                
                </View>
                <View style={{height:100,borderTopColor:"#555",borderTopWidth:2, backgroundColor:"#c8c8c8",width:'100%',paddingBottom:10}}>
				<TouchableOpacity
                                onPress={() => this.updatingEntityBed(this.props.informationEntity.id)}
                                style={[containers.orangButtonAllR]}
                            >
                                <Text style={text.titleWhite}>
									{valueString.VALUE_UPDATING_ENTITY}
								</Text>
                            </TouchableOpacity>
				</View>
                </Container>
        )
   }

   // updating entity items
   updatingEntityBed(entityId){
    this.props.managerLoading(true)
      let entityItems = this.props.informationEntityItemList
      console.log(entityItems)
      let formBody = [];
      for (let i = 0; i < entityItems.length; i++) {
        let encodedKey = encodeURIComponent('items[]');
        let encodedValue = encodeURIComponent(entityItems[i].id);
        formBody.push(encodedKey+"="+encodedValue); 
      }
      formBody = formBody.join("&");

    fetch(`${configuration.MAIN_URL}` + `${restApi.API_DETAILS_ENTITY}`+ entityId +"/item", {
        method: 'PUT',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer '+this.props.sessionId
        },
        body:formBody
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            if(responseJson.errors == undefined){
               
                this.showMessage("",valueString.VALUE_UPDATE_SUCCESS)
            }
            this.props.managerLoading(false)
              		
        })
        .catch((error) => {
            console.error(error)
        })
   }

   showActiveStatus(status){
    if(status == 1)
       return <Image
                style={{ width: 30, height: 30 }}
                source={require('../../../public/img/ic_available.png')}
            />
    else 
       return   <Image
                style={{ width:20, height: 20 }}
                source={require('../../../public/img/ic_not_available.png')}
            />
}

   onValueChangeService(value){
	let selectedServices = []
	selectedServices = this.props.informationEntityItemList
	if(selectedServices.find(element => element.id == value.id) == undefined)
         selectedServices.push(value)	 
	this.props.getItemsEntity(selectedServices)
    this.props.setRefresh(!this.props.refreshing)
	this.setState({
		selectedService :value 
	})
}



   showListServices(listAllEntity) {
    let listEntity = []
     for (let i = 0; i < listAllEntity.length; i++) {
         listEntity.push(<Item label={listAllEntity[i].title} value={listAllEntity[i]}/>)
     }
     return listEntity
 }

   renderItemsServices (service) {
    return <ItemServiceDetaile service={service}/>
} 

renderLoading() {
    return (
        <ActivityIndicator
            style={{marginTop: 100}}
            size="large"
            animating={this.props.showLoading}
        />
    )
}

showLoading() {
    if (this.props.showLoading)
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(52, 52, 52,.5)',
                    zIndex: 10000,
                    position: 'absolute'
                }}
            >
                <Spinner color="white"/>
            </View>
        )
    return null
}

showMessage(title, message) {
    Alert.alert(
        title,
        message,
        [
            {
                text: valueString.VALUE_CONFIRM,
                onPress: () => Actions.jump('intiteisList')
            }
        ],
        {cancelable: false}
    )
}
}


const mapDisPatchToProps = (dispatch) => {
	return {
        managerLoading:(showLoading) =>dispatch(managerLoading(showLoading)),
        getItemsEntity:(informationEntityItemList)=>dispatch(getItemsEntity(informationEntityItemList)),
		setRefresh:(refreshing)=>dispatch(setRefresh(refreshing)),
	}
}

const mapStateToProps = (state) => {
    return {
        sessionId : state.getSessionId.sessionId,
        items : state.services.items,
        showLoading : state.managerLoading.showLoading,
        informationEntity : state.entityManager.informationEntity,
        informationEntityItemList : state.entityManager.informationEntityItemList,
        refreshing : state.entityManager.refreshing
    }
}

export default connect(mapStateToProps,mapDisPatchToProps)(DetailesEntity)