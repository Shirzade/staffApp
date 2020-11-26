import React from 'react';
import {  Text } from 'native-base';
import { mainStyle } from '../../assets/styles';

export default class NvText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text
		};
	}
	render() {
		return <Text style={mainStyle.NvtextStyle}>{this.state.text}</Text>;
	}
}
