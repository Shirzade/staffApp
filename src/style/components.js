import React, {Component} from 'react'
import {
	StyleSheet,
	Dimensions
} from 'react-native'

const components = StyleSheet.create({
	spinner: {
		position: 'absolute',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width


	}
})
export default components