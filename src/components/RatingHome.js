import React, { Component } from 'react';

import { Text } from 'react-native';
import StarRating from 'react-native-star-rating';

const images = {
	starFilled: require('../../public/img/ic_shopPage_ratin.png')
};

export default class RatingHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starCountRating: this.props.stareCount
		};
	}

	render() {
		return (
			<StarRating
				emptyStar={'ios-star-outline'}
				fullStar={'ios-star'}
				halfStar={'ios-star-half'}
				iconSet={'Ionicons'}
				rating={this.state.starCountRating}
				starColor={'red'}
			/>
		);
	}
}
