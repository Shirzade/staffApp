import React from "react";
import { TouchableOpacity, Text, View ,Image} from "react-native";
import { connect } from "react-redux";
import { servicesPage } from "../../../../assets/styles";
import { Actions } from "react-native-router-flux";
import { sendOrderDetails } from "../../../redux/actions";
import {configuration} from '../../../utils/config'
import {restApi} from '../../../utils/restApi'

class ItemService extends React.Component {
	constructor(props) {
		super(props)
    }
    
    render() {
		const {service} = this.props
		// console.log(order)
        return (
            <View   style={
                service.index % 2 == 0
                    ? servicesPage.containerItemEven
                    : servicesPage.containerItemOdd
                     }>
                 <View style={servicesPage.serviceId}>
                      <Text style={servicesPage.itemTextStyle}>
                           {service.item.id}
                      </Text>
                </View>
                <View style={servicesPage.serviceTitle}>
                      <Text style={servicesPage.itemTextStyle}>
                           {service.item.title}
                      </Text>
                </View>
                <View style={servicesPage.serviceTitle}>
                         <Text style={servicesPage.itemTextStyle}>
                             {service.item.price}
                        </Text>    
                </View>
                <View style={servicesPage.serviceTitle}>
                       <Text style={servicesPage.itemTextStyle}>
                            {service.item.priority.title}
                       </Text>
                </View>
                <View style={servicesPage.serviceTitle}>
                       {this.showActiveStatus(service.item.active)}
                </View>
                <View style={servicesPage.serviceTitle}>
                 <Image
                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                    source={{
                        uri:
                            `https://www.helpchattest.com` +
                            `${service.item.icon}`
                    }}
                /> 
                </View>
            </View>
        )
    }

    showActiveStatus(status){
        if(status == 1)
           return <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../../../../public/img/ic_available.png')}
                />
        else 
           return   <Image
                    style={{ width:20, height: 20 }}
                    source={require('../../../../public/img/ic_not_available.png')}
                />
    }
}


export default connect(null,null)(ItemService)