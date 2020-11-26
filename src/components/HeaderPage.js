import React from 'react'
import {Text, View} from 'react-native'
import {mainStyle} from '../../assets/styles'

export default class HeaderPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image: this.props.image
		};
	}
	render() {
		const imageUrl = '../../public/img/' + this.state.image;
		return (
			<View style={mainStyle.headerPage}>
				<Text style={mainStyle.headerPageText}>{this.props.title}</Text>
			</View>
		);
	}
}
