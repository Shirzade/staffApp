import React from "react";
import { TouchableOpacity, Text, View ,Image} from "react-native";
import { connect } from "react-redux";
import { bedsPage } from "../../../../assets/styles";
import { Actions } from "react-native-router-flux";
import {getDetailesEntity ,managerLoading , getItemsEntity , getAllServices} from "../../../redux/actions";
import {configuration} from '../../../utils/config'
import {restApi} from '../../../utils/restApi'

class ItemBed extends React.Component {
	constructor(props) {
		super(props)
    }
    
    render() {
		const {bed} = this.props
        return (
            <TouchableOpacity onPress={() => this.getInformationDetailesEntity(bed.item.id)}  style={
                bed.index % 2 == 0
                    ? bedsPage.containerItemEven
                    : bedsPage.containerItemOdd
                     }>
                 <View style={bedsPage.serviceId}>
                      <Text style={bedsPage.itemTextStyle}>
                           {bed.index + 1}
                      </Text>
                  </View>
                  <View style={bedsPage.serviceTitle}>
                      <Text style={bedsPage.itemTextStyle}>
                          {bed.item.title}
                      </Text>
                 </View>
                 <View style={bedsPage.serviceTitle}>
                         <Text style={bedsPage.itemTextStyle}>
                           {bed.item.auth_type_name}
                        </Text>    
                </View>
            
                <View style={bedsPage.serviceAction}>
                       {this.showActiveStatus()}
                </View>
            </TouchableOpacity>
        )
    }

    getInformationDetailesEntity(intityId){
        this.getAllServices()
        this.getDetailesEntity(intityId)
        this.getListItemsEntity(intityId)
    }


    showActiveStatus(){
           return <Image
                    style={{ width: 20, height: 20 ,justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'}}
                    source={require('../../../../public/img/ic_edit.png')}
                />
    }
}

const mapDisPatchToProps = (dispatch) => {
	return {
        managerLoading:(showLoading) =>dispatch(managerLoading(showLoading)),
        getAllServices:(items)=>dispatch(getAllServices(items)),
        getItemsEntity:(informationEntityItemList)=>dispatch(getItemsEntity(informationEntityItemList)),
		getDetailesEntity:(informationEntity)=>dispatch(getDetailesEntity(informationEntity))
	}
}

const mapStateToProps = (state) => {
    return {
		sessionId : state.getSessionId.sessionId
    }
}


export default connect(mapStateToProps,mapDisPatchToProps)(ItemBed)