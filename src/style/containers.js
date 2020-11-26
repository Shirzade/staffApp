import React from 'react'
import {Dimensions, StyleSheet} from 'react-native'

const containers = StyleSheet.create({
	homeContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	informationContainerHome: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#232d37'
	},
	sectionsContainerHome: {
		flex: 3,
		backgroundColor: '#232d37'
	},
	topSetionContainerHome: {
		flex: 1,
		flexDirection: 'row'
	},
	subSetionContainerHome: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	discountBack: {
		backgroundColor: '#ffb3b3'
	},
	marginRight: {
		borderRightWidth: 0,
		borderColor: 'red'
	},
	topScreens: {
		flexDirection: 'row',
		backgroundColor: '#232d37',
		justifyContent: 'center',
		alignItems: 'center'
	},
	alignCenter: {
		justifyContent: 'center'
	},
	mainContainer: {
		flex: 1,
		backgroundColor: '#edf2f5'
	},
	mainLoginContainer: {
		flex: 1,
		width: undefined,
		height: undefined,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center'
	},
	containersRow: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#edf2f5'
	},
	topButtonOrderInternet: {
		flex: 1,
		margin: 5,
		borderRadius: 5,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#d9dde0',
		justifyContent: 'center',
		alignItems: 'center'
	},
	containersTitleList: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#f37022',
		margin: 5,
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5
	},
	leftRadius: {
		paddingTop: 10,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		backgroundColor: '#ccc2c2',
		justifyContent: 'center',
		alignItems: 'center'
	},
	containersTitleListNeedProduct: {
		backgroundColor: '#f37022',
		margin: 5,
		alignItems: 'center',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10
	},
	itemTitleList: {
		flex: 1,
		paddingTop: 3,
		paddingBottom: 3,
		margin: 8,
		fontSize: 17,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	containerSideBar: {
		height: 200,
		color: 'white'
	},
	containerImportProduct: {
		padding: 10,
		borderRadius: 5,
		margin: 20
	},
	containerNeedShop: {
		padding: 10,
		borderRadius: 5,
		// borderWidth: 1,
		// borderColor: '#f37022',
		margin: 20
	},
	containerSubImportProduct: {
		padding: 10,
		borderRadius: 5,
		// borderWidth: 1,
		// borderColor: '#f37022',
		marginRight: 20,
		marginLeft: 20
	},
	flexDirectionRow: {
		flexDirection: 'row'
	},
	orangButton: {
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		flex: 1,
		height: 45,
		alignItems: 'center',
		backgroundColor: '#232d37'
	},
	orangButtonAllR: {
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		height: 45,
		margin:20,
		alignItems: 'center',
		backgroundColor: '#3490dc'
	},
	primaryButton: {
		borderRadius: 5,
		// flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		width:250,
		height: 250,
		alignItems: 'center',
		backgroundColor: '#f37022'
	},
	primaryButtonLeftRadius: {
		borderRadius: 5,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		height: 45,
		alignItems: 'center',
		backgroundColor: '#f37022'
	},
	grayBack: {
		backgroundColor: 'red'
	},
	rightRadius: {
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ccc2c2'
	},
	smallContainer: {
		flex: 1
	},
	xsmallContainer: {
		flex: 2
	},
	xxsmallContainer: {
		flex: 3
	},
	mediumContainer: {
		flex: 4
	},
	xmediumContainer: {
		flex: 5
	},
	xxmediumContainer: {
		flex: 6
	},
	containerSearchIcon: {
		backgroundColor: '#bfed56',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textInputSearch: {
		height: 40,
		textAlign: 'right',
		borderColor: '#ccc2c2',
		borderWidth: 1,
		paddingLeft: 10,
		fontFamily: 'BYekan',
		paddingRight: 10,
		backgroundColor: 'white'
	},
	containerConnectScreen: {
		flex: 1
	},
	containerFlexRow: {
		flexDirection: 'row'
	},
	alignButton: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	alinRight: {
		alignItems: 'flex-end',
		alignSelf: 'flex-end',
		justifyContent: 'flex-end'
	},
	redBack: {
		backgroundColor: 'red'
	},
	loginContainer: {
		width: 350,
		padding: 10,
		justifyContent: 'center',
		backgroundColor: 'rgba(184, 190, 193, 0.46)'
	},
	spinner: {
		position: 'absolute'
	},
	lineContainer: {
		height: 1,
		flex: 1,
		marginTop: 2,
		marginBottom: 2,
		backgroundColor: '#f37022'
	},
	graybackground: {
		backgroundColor: '#d5d8dd',
		padding: 10
	},
	prodectItem: {
		borderWidth: 1,
		borderColor: '#aaaaaa',
		borderRadius: 5,
		marginTop: 5,
		backgroundColor: 'white'
	},
	TitleListNeedProduct: {
		backgroundColor: '#f37022',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		padding: 5
	},
	backGray: {
		padding: 10,
		backgroundColor: '#c1ccd7',
		borderWidth: 1,
		borderColor: '#c1ccd7'
	},
	loading: {
		position: 'absolute',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width
	},
	messages: {
		justifyContent: 'center',
		position: 'absolute',
		height: 350,
		width: Dimensions.get('window').width
	}
})
export default containers
