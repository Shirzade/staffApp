import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {Container} from 'native-base'
import {Grid, Row} from 'react-native-easy-grid'
import {homeStyles} from '../../../assets/styles'
import MainHeader from '../elements/MainHeader'
import image from '../../style/image'
import text from '../../style/text'
import containers from '../../style/containers'
import ItemMainPage from '../elements/items/ItemMainPage'
import MomentReportShop from '../elements/screenItems/MomentReportShop'
import {Actions} from 'react-native-router-flux'
import {valueString} from '../../utils/valueString'


export default class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Container>
				<MainHeader showBach={false}/>
				<Grid style={{backgroundColor:'#232d37'}}>
					<Row size={3}>  
						
					</Row> 
					<Row size={4} style={homeStyles.containersBottom}>
					<View style={{flex: 1}}>
							<View style={{flex: 1, flexDirection: 'row'}}>
								<ItemMainPage subject="INTERNET_REPORT"/>
								<ItemMainPage subject="IN_PERSON_REPORT"/>
							</View>
							<View style={{flex: 1, flexDirection: 'row'}}>
								<ItemMainPage subject="NEED_SHOP"/>
								<ItemMainPage subject="IMPORT_PRODUCT"/>
							</View>
							<View/>
						</View>
						
					</Row>
					<Row size={3}>  
						
					</Row> 
				</Grid>
			</Container>
		)
	}
	toggleStatusScanner() {
		Actions.barCodeReader({from: 'IMPORT_PRODUCT'})
		// this.props.getPlaceUser("IMPORT_PRODUCT")
	}
}
