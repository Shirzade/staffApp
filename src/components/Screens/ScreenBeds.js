import React from 'react'
import {Alert, TouchableOpacity,Text,ActivityIndicator, Animated,FlatList, AsyncStorage, Easing,ScrollView, Image, ImageBackground, Platform, StatusBar, View} from 'react-native'
import {Container, Spinner} from 'native-base'
import {flexStyles, bedsPage} from '../../../assets/styles'
import {Actions} from 'react-native-router-flux'
import {configuration} from '../../utils/config'
import {restApi} from '../../utils/restApi'
import MainHeader from '../elements/MainHeader'
import {valueString} from '../../utils/valueString'
import {getProductBarCode, getSessionId, getSid, showModalErrorLogin} from '../../redux/actions'
import {connect} from 'react-redux'
import ItemBed from '../elements/items/ItemBed'

class Beds extends React.Component {
    constructor(props) {
		super(props)

	}



    render() {
		return (
			<Container>
				<MainHeader
					showBach={true}
					subject="IN_PERSON_REPORT"
					title={valueString.VALUE_ENTITY}
				/>
				<ScrollView>
                <TouchableOpacity style={bedsPage.titleList}>
                       <View style={bedsPage.itemTitleListId}>
                             
                       </View>
                       <View  style={bedsPage.itemTitleListTitle}> 
                            <Text style={bedsPage.textStyle}>
                               Title
                            </Text>  
                       </View>
                       <View style={bedsPage.itemTitleListTitle}>
                             <Text style={bedsPage.textStyle}>
                             Auth Type 
                             </Text>
                       </View>
                    
                       <View style={bedsPage.itemTitleListTitle}>
                                <Text style={bedsPage.textStyle}>
                                    Action
                                </Text>
                       </View> 
                   </TouchableOpacity>

                       <FlatList
							data={this.props.listBeds}
							renderItem={this.renderItems.bind(this)}
							keyExtractor={item => item.id}
						/>
                        {this.renderLoading()}
                </ScrollView>
                </Container>
        )
   }

   renderItems(bed) {
      return <ItemBed bed={bed}/>
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
}

const mapStateToProps = (state) => {
    return {
        sessionId : state.getSessionId.sessionId,
        items : state.services.items,
        listBeds:state.entityManager.listBeds,
        showLoading : state.managerLoading.showLoading
    }
}

export default connect(mapStateToProps,null)(Beds)