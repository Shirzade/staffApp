import React from 'react';
import { Text } from 'react-native';
import BaseLightBox from './BaseLightBox';

export default class exitlightBox extends React.Component {
	render() {
		return (
			<BaseLightBox verticallPercent={0.7} horizontallPercent={0.5}>
				<Text>HyperYek Store</Text>
			</BaseLightBox>
		);
	}
}
