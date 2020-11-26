import React, { Component } from 'react';
import { itemSuggestionStyle } from '../../assets/styles';
import { connect } from 'react-redux';
import { selectItemSearch } from '../redux/actions';
import { Text, TouchableOpacity } from 'react-native';

class ItemSuggestion extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				style={itemSuggestionStyle.container}
				onPress={() => this.props.selectItemSearch(this.props.item,"ITEM_LIST")}
			>
				<Text style={itemSuggestionStyle.title}>{this.props.item.name}</Text>
			</TouchableOpacity>
		);
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		selectItemSearch: (item,from) => dispatch(selectItemSearch(item,from))
	};
};
const mapStateToProps = (state) => {
	return {};
};

export default connect(null, mapDisPatchToProps)(ItemSuggestion);
