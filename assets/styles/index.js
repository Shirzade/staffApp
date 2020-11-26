import EStyleSheet from 'react-native-extended-stylesheet'
import {
	Dimensions
} from 'react-native'
import {
	colors
} from '../../src/utils/colors'


// detailes beds styles
export const detailesBedStyle = EStyleSheet.create({

	serviceItem: {
		backgroundColor: '$intityItemColor',
		padding: 4,
		margin: 3,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 5
	},
	textContainerServiceItem: {
		marginRight: 10
	},
	mainContainer: {
		flex: 1
	},
	containrePage: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10
	},

	titleStyle: {
		flex: 1,
		padding: 8,
	},
	valueStyle: {
		flex: 2,
		padding: 8,
		borderRadius: 5
	},
	valueServiceStyle: {
		flex: 2,
		padding: 8,
		borderRadius: 5,
		backgroundColor: '#d0dee8'
	},
	valueStyleStatuse: {
		flex: 2,
		padding: 5,

	}
})
// beds pages style 
export const bedsPage = EStyleSheet.create({
	containerItemOdd: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
		paddingBottom: 8,
		paddingTop: 8,
		backgroundColor: '#dae1e7',
		flexDirection: 'row'
	},
	itemTextStyle: {
		textAlign: 'center',
		fontSize: 10
	},
	containerItemEven: {
		flex: 1,
		marginLeft: 5,
		marginRight: 8,
		paddingBottom: 8,
		paddingTop: 5,
		backgroundColor: 'white',
		flexDirection: 'row'
	},
	textStyle: {
		color: 'white'
	},
	serviceTitle: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	serviceAction: {
		flex: 1,
		paddingTop: 5,
		paddingBottom: 5,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	serviceId: {
		flex: 0.3,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	titleList: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#3490dc',
		marginBottom: 2,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5
	},
	itemTitleListId: {
		flex: 1,
		paddingTop: 3,
		paddingBottom: 3,
		color: 'white',
		margin: 8,
		fontFamily: '$mainFont',
		fontSize: 12,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	itemTitleListTitle: {
		flex: 1,
		paddingTop: 3,
		paddingBottom: 3,
		color: 'white',
		margin: 8,
		fontFamily: '$mainFont',
		fontSize: 12,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'left'
	}
})
// services page style
export const servicesPage = EStyleSheet.create({
	containerItemOdd: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		backgroundColor: '#dae1e7',
		flexDirection: 'row'
	},
	containerItemEven: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
		paddingBottom: 5,
		paddingTop: 5,
		backgroundColor: 'white',
		flexDirection: 'row'
	},
	textStyle: {
		color: 'white',
		fontSize: 10
	},
	itemTextStyle: {
		textAlign: 'center',
		fontSize: 10
	},
	serviceTitle: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'flex-start'
	},
	serviceId: {
		flex: 0.3,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	titleList: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#3490dc',
		marginBottom: 2,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5
	},
	itemTitleListId: {
		flex: 0.3,
		paddingTop: 3,
		paddingBottom: 3,
		color: 'white',
		margin: 8,
		fontFamily: '$mainFont',
		fontSize: 12,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	itemTitleListTitle: {
		flex: 1,
		paddingTop: 3,
		paddingBottom: 3,
		color: 'white',
		margin: 8,
		fontFamily: '$mainFont',
		fontSize: 12,
		justifyContent: 'center',
		alignItems: 'flex-start',
		textAlign: 'left'
	}
})

// entity page
export const entityPage = EStyleSheet.create({
	containerButtons: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignContent: 'flex-end',
		alignItems: 'flex-end',
		textAlign: 'right'

	},
	entityItem: {
		flex: 1,
		backgroundColor: '$intityItemColor',
		padding: 15,
		margin: 3,
		flexDirection: 'row',
		borderRadius: 5

	},
	textContainer: {
		flex: 1,
		justifyContent: 'center'
	
	},
	buttonStyle: {
		width:30,
		height:30,
		margin:2,
		backgroundColor:'red',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	buttonStyleEdit: {
		width:30,
		height:30,
		margin:2,
		backgroundColor:'#3490dc',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	entityPageTopSectionStyle: {
		flex: 8,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'

	},
	titlePickerStyle: {
		flex: 2,
		marginTop: 8
	},
	valuePickerStyle: {
		flex: 1,
		flexDirection: 'row'
	},
	titleStyle: {
		fontSize: 15
	},
	sectionSelectNewEntity: {
		flex: 1,
		marginTop: 30,
		paddingLeft: 10,
		paddingRight: 10,
		flexDirection: 'row'
	},
	sectionSelectedEntity: {
		flex: 7,
		width: '100%',
		paddingLeft: 20,
		paddingRight: 20,
		borderWidth: 2,
		borderLeftColor: 'white',
		borderRightColor: 'white',
		borderBottomColor: 'white',
		borderTopColor: '$orangColor'
	},
	selectedSectionTitle: {
		padding: 20,
		fontSize: 15
	}
})
// splashScreen Styles
export const splash = EStyleSheet.create({
	rememberMe: {
		flexDirection: 'row'
	},
	textTopPage: {
		fontSize: 20,
		color: 'black'
	},
	splashContainer: {
		justifyContent: 'center',
		backgroundColor: '$orangColor',
		alignItems: 'center'
	},
	containerImages: {
		flex: 1,
		flexDirection: 'row',
		paddingBottom: 30
	},
	splashBackground: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: '$orangColor',
		justifyContent: 'center',
		alignItems: 'center'
	},
	loadingImage: {
		resizeMode: 'contain',
		height: 500,
		width: 250
	},
	splashText: {
		fontSize: 20,
		color: 'black'
	}
})
// style details product
export const detailsProductScreen = EStyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	}
})

// style Details need shop
export const detailsNeedShop = EStyleSheet.create({
	container: {
		padding: 20
	},
	messageStyle: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center'
	},
	messageTextStyle: {
		fontFamily: '$mainFont',
		fontSize: 20,
		color: '$MainColor'
	},
	containerImage: {
		width: 350,
		height: 250,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	imageStyle: {
		width: 300,
		height: 200,
		resizeMode: 'contain',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	}

})

// style set quantity screen
export const setQuantityScreen = EStyleSheet.create({
	container: {
		flex: 1
	},
	buttonSetQuantity: {
		backgroundColor: colors.COLOR_ORANGE,
		borderColor: colors.COLOR_ORANGE,
		height: 50,
		width: '70%',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		borderRadius: 5
	},
	firstSection: {
		backgroundColor: 'red',

		flex: 2
	},
	secondSection: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
	},
	thirdSection: {
		flex: 1
	}
})
// style reader barCode
export const barCodeReaderStyle = EStyleSheet.create({
	buttonReturn: {
		borderColor: colors.COLOR_BORDER_BUTTON,
		borderWidth: 2,
		width: 200,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	}
})
// login Styles
export const loginStyles = EStyleSheet.create({
	forgetPassword :{
		marginTop: 50
	},
	rememberMe: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	}
})

// moment report style
export const momentStyles = EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	dailySalesStyle: {
		alignItems: 'center',
		borderColor: 'white',
		borderWidth: 2,
		margin: 5,
		paddingLeft: 5,
		paddingRight: 5,
		height: 50,
		flexDirection: 'row',
		borderRadius: 10,
		justifyContent: 'center',
		alignContent: 'center',
	},
	MonthlySalesStyle: {
		flexDirection: 'row',
		height: 50,
		paddingLeft: 5,
		paddingRight: 5,
		alignItems: 'center',
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 10,
		margin: 5,
		justifyContent: 'center',
		alignContent: 'center'
	},
	valueStyle: {
		fontSize: 20,
		color: '#FFF',
		fontFamily: '$mainFont',
	},
	titleSection: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',

	},
	valueSection: {
		flex: 3,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	unitSection: {
		flex: 1,
		alignItems: 'flex-end'
	},
	titles: {
		color: '#ffffff',
		fontFamily: '$mainFont',
		fontSize: 15
	},
	updateSection: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		height: 50,
		alignContent: 'center'
	},
	updateSectionText: {
		color: 'white',
		fontSize: 15,
		fontFamily: '$mainFont'
	}

})
// home page styles
export const homeStyles = EStyleSheet.create({
	containerTop: {
		backgroundColor: '$MainColor',
		width: '60%',
		padding: 50,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	icone: {
		width: 130,
		height: 70,
		resizeMode: 'contain'
	},
	containers: {
		backgroundColor: '$MainColor',
		justifyContent: 'center',
		alignItems: 'center'
	},
	containersBottom: {
		padding: 25,
		alignContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		backgroundColor: '$MainColor'
	},
	mainTitle: {
		fontFamily: '$mainFont',
		color: 'white',
		fontSize: 20,
		margin: 1
	},
	subTitle: {
		fontFamily: '$mainFont',
		color: 'white',
		fontSize: 14,
		padding: 1,
		margin: 5
	},
	imageSections: {
		width: 60,
		height: 60
	},
	imageContainerLeftTop: {
		flex: 1,
		borderWidth: 1,
		borderLeftColor: '$MainColor',
		borderRightColor: '#ffffff',
		borderBottomColor: '$MainColor',
		borderTopColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainerLeftButton: {
		flex: 1,
		borderWidth: 1,
		borderLeftColor: '#ffffff',
		borderRightColor: '$MainColor',
		borderBottomColor: '#ffffff',
		borderTopColor: '$MainColor',
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainerRightButton: {
		flex: 1,
		borderWidth: 1,
		borderRightColor: '#ffffff',
		borderLeftColor: '$MainColor',
		borderBottomColor: '#ffffff',
		borderTopColor: '$MainColor',
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainerRightTop: {
		flex: 1,
		borderWidth: 1,
		borderRightColor: '$MainColor',
		borderLeftColor: '#ffffff',
		borderBottomColor: '$MainColor',
		borderTopColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textSection: {
		fontSize: 13,
		color: 'white',
		marginTop: 5,
		fontFamily: '$mainFont'
	},
	countNewOrderStyle: {
		borderWidth: 4,
		paddingRight: 2,
		paddingLeft: 2,
		marginLeft: 5,
		marginBottom: 5,
		backgroundColor: '$orangColor',
		color: 'white',
		borderColor: '$orangColor',
		borderRadius: 50
	},
	countNewOrderTextStyle: {
		color: 'white',
		fontSize: 10,
		fontFamily: '$mainFont'
	}
})
// button styles
export const buttonStyles = EStyleSheet.create({
	buttonPrimaryStyle: {
		backgroundColor: '$headerColorBotton',
		justifyContent: 'center',
		height: 40,
		borderColor: '$headerColorBotton',
		borderRadius: 5,
		margin: 2,
		alignItems: 'center',
		alignContent: 'center'
	},
	buttonPrimaryRightStyle: {
		backgroundColor: '$headerColorBotton',
		justifyContent: 'center',
		height: 40,
		flex: 1,
		borderColor: '$headerColorBotton',
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRadius: 5,
		marginLeft: 2,
		marginBottom: 3,
		alignItems: 'center',
		alignContent: 'center'
	},
	buttonOrangeLeftStyle: {
		backgroundColor: '$orangColor',
		justifyContent: 'center',
		height: 40,
		flex: 1,
		borderColor: '$orangColor',
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		borderRadius: 5,
		marginRight: 2,
		marginBottom: 3,
		alignItems: 'center',
		alignContent: 'center'
	}
})

// internet orders page styles
export const internetOrderStyles = EStyleSheet.create({
	containerAction: {
		backgroundColor: '#f37022',
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 10
	},
	subContainerRequestDetails: {
		flexDirection: 'row',
		flex: 1
	},
	containerRequestDetails: {
		flexDirection: 'row'
	},
	containerItemListOddDetails: {
		backgroundColor: '#c4c4c4',
		borderColor: "#000",
		borderWidth: 1,
		margin: 3
	},

	containerItemListDetails: {
		backgroundColor: 'white'
	},

	containerItemListOdd: {
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: '#dae1e7'
	},
	containerItemList: {
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: 'white'
	},
	containers: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '$backColor'
	},
	imageStates: {
		width: 40,
		height: 40,
		resizeMode: 'contain',
		margin: 15
	},
	imageStatesAnyOrder: {
		width: 20,
		height: 20,
		resizeMode: 'contain'
	},
	containerState: {
		flex: 1,
		margin: 5,
		borderRadius: 5,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '$borderColor',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textState: {
		fontFamily: '$mainFont',
		fontSize: 10,
		marginBottom: 5
	},
	titleList: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#3490dc',
		marginBottom: 2,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5
	},
	itemTitleList: {
		flex: 1,
		paddingTop: 3,
		paddingBottom: 3,
		color: 'white',
		margin: 8,
		fontFamily: '$mainFont',
		fontSize: 10,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'right'
	},
	itemTitleListId: {
		flex: 1.5,
		paddingTop: 3,
		paddingBottom: 3,
		color: 'white',
		margin: 8,
		fontFamily: '$mainFont',
		fontSize: 10,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	itemTitleListFrom: {
		flex: 1,
		paddingTop: 3,
		paddingBottom: 3,
		color: 'white',
		margin: 8,
		fontFamily: '$mainFont',
		fontSize: 10,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'left'
	},
	itemTitleListDAte: {
		flex: 2.5,
		paddingTop: 3,
		paddingBottom: 3,
		color: 'white',
		margin: 10,
		fontFamily: '$mainFont',
		fontSize: 10,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	mainList: {
		flexDirection: 'row',
		padding: 5
	},
	mainListDetailsRequest: {

		padding: 15
	},
	mainListText: {
		flex: 1,
		fontSize: 9,
		color: '$MainColor',
		margin: 2,
		textAlign: 'center'
	},
	mainListTextDate: {
		flex: 1.2,
		fontSize: 8,
		color: '$MainColor',
		margin: 2,
		textAlign: 'center'
	},
	mainListTextNumber: {
		flex: 0.7,
		fontSize: 10,
		color: '$MainColor',
		margin: 2,
		textAlign: 'center'
	}
})
export const lightBoxStyles = EStyleSheet.create({
	loginLightBox: {
		backgroundColor: 'rgba(52,52,52,.5)',
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
// detailsInternetOrder page styles
export const detailsInternetOrderStyles = EStyleSheet.create({
	mainContainer: {
		marginLeft: 5,
		marginRight: 5
	},
	SubContainer: {
		flexDirection: 'row',
		flex: 1
	},
	titleImageSubPage: {
		marginTop: 5,
		width: 40,
		resizeMode: 'contain',
		height: 40
	},
	showDetailsOrder: {
		backgroundColor: '#d5d8dd',
		padding: 10,
		marginTop: 5,
		marginBottom: 5,
		flexDirection: 'row'
	},
	itemProducts: {
		flexDirection: 'row',
		flex: 1,
		padding: 5,
		borderWidth: 1,
		borderColor: '#aaaaaa',
		borderRadius: 5,
		marginTop: 5,
		backgroundColor: 'white'
	},
	imageToggle: {
		width: 15,
		height: 10
	},
	textToggle: {
		paddingTop: 3,
		paddingBottom: 5,
		fontFamily: '$mainFont',
		alignItems: 'flex-start',
		color: '$MainColor',
		flex: 1
	},
	itemContent: {
		flexDirection: 'row',
		padding: 5,
		marginTop: 5,
		backgroundColor: 'white'
	},
	textItems: {
		flex: 1,
		alignItems: 'flex-start',
		alignSelf: 'flex-start',
		justifyContent: 'flex-start'
	},
	rightText: {
		alignItems: 'flex-start',
		alignSelf: 'flex-start',
		justifyContent: 'flex-start'
	},
	availableing: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	availableImage: {
		width: 25,
		resizeMode: 'contain',
		height: 25
	},
	availableText: {
		fontFamily: '$mainFont',
		fontSize: 18,
		color: '$availableColor',
		marginBottom: 5,
		marginLeft: 5,
		marginRight: 5
	},
	notAvailableText: {
		fontFamily: '$mainFont',
		fontSize: 18,
		color: '$notAvailableColor',
		marginBottom: 5,
		marginLeft: 5,
		marginRight: 5
	},
	addNewProduct: {
		flex: 1,
		margin: 5,
		padding: 15,
		justifyContent: 'flex-end',
		color: '#ffffff',
		backgroundColor: '$MainColor'
	},
	addNewProductText: {
		textAlign: 'left',
		color: 'white',
		fontSize: 18,
		fontFamily: '$mainFont'
	},
	addNewProductContainerButtons: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
		marginTop: 10
	},
	buttonAddNewProductText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 18,
		fontFamily: '$mainFont'
	},
	addNewProductButtons: {
		width: 150,
		margin: 3,
		padding: 8,
		borderColor: '$orangColor',
		borderWidth: 1,
		borderRadius: 3,
		backgroundColor: '$orangColor'
	},
	pakeSetionStyle: {
		backgroundColor: '#d5d8dd',
		flex: 1,
		marginBottom: 5
	},
	selectPake: {
		flexDirection: 'row',
		padding: 5
	},
	buttonSetPake: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
		borderRadius: 5,
		borderColor: '$orangColor',
		borderWidth: 1,
		backgroundColor: '$orangColor',
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 10
	},
	buttonSetPakeText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		fontFamily: '$mainFont'
	},
	messageDelivery: {
		color: '$orangColor',
		fontSize: 16,
		marginTop: 15,
		marginBottom: 25,
		textAlign: 'center',
		fontFamily: '$mainFont'
	},
	styleTitlePicker: {
		color: '#fff',
		fontFamily: '$mainFont'
	}
})

// import products page
export const importProductStyles = EStyleSheet.create({
	stylePercentInput: {
		backgroundColor: '#eeeeee',
		fontFamily: 'BYekan'
	},
	textPercent: {
		fontSize: 18
	},
	itemsInputs: {
		flexDirection: 'row',
		justifyContent: 'center',
		borderColor: '#b3b3b3',
		backgroundColor: '#eeeeee',
		borderRadius: 5,
		borderWidth: 1
	},
	subItemsInputs: {
		justifyContent: 'center',
		alignContent: 'center',
		marginLeft: 10,
		alignItems: 'center',
		backgroundColor: '#eeeeee'
	},
	textTile: {
		fontFamily: '$mainFont',
		paddingTop: 3,
		textAlign: 'center',
		color: '$MainColor',
		paddingBottom: 5
	},
	titleStyle: {
		color: '$MainColor',
		fontSize: 20
	},
	titleSelectCategory: {
		color: '#fff',
		fontFamily: '$mainFont'
	}
})

// form Styles
export const formStyles = EStyleSheet.create({
	form: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 25,
		fontFamily: '$mainFont',
		marginRight: 25,
		width: 330,
		padding: 30,
		backgroundColor: 'rgba(184, 190, 193, 0.46)'
	},
	item: {
		borderRadius: 5,
		borderColor: '#999',
		marginTop: 5,
		height: 40,
		backgroundColor: 'white'
	},
	button: {
		backgroundColor: '$MainColor',
		borderRadius: 5,
		marginTop: 5
	},
	textButton: {
		color: 'white',
		fontSize: 20,
		fontFamily: '$mainFont'
	},
	inputText: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		textAlign: 'left'
	},
	icon: {
		color: '#999'
	}
})

// flex styls
export const flexStyles = EStyleSheet.create({
	flexSmall: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	flexOnlySmall: {
		flex: 1
	},
	flexDn: {
		flexDirection: 'row'
	},
	flexCenter: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	flexOnlyMedium: {
		flex: 5
	},
	flexSmallAndRow: {
		flex: 1,
		flexDirection: 'row'
	}
})
export const importProductsStyle = EStyleSheet.create({
	containerMain: {
		padding: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#f37022',
		margin: 20
	}
})

// style modal
export const modalStyle = EStyleSheet.create({
	iconStyle: {
		width: 60,
		height: 60
	},
	container: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center'
	},
	firstSection: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	secondSection: {
		flex: 1,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
	},
	buttonSectionExitModal: {
		flexDirection: 'row'
	}
})

// message text style
export const textsStyle = EStyleSheet.create({
	messageStyle: {
		fontFamily: '$mainFont',
		fontSize: 15,
		lineHeight:21,
		textAlign: 'center',
		alignItems: 'center'
	},
	TextMediumWhiteStyle: {
		fontFamily: '$mainFont',
		fontSize: 15,
		color: 'white',
		textAlign: 'center',
		alignItems: 'center'
	}
})

// item suggestion style
export const itemSuggestionStyle = EStyleSheet.create({
	container: {
		padding: 5,
		borderBottomColor: '#CCC',
		borderLeftColor: '#fff',
		borderRightColor: '#fff',
		borderTopColor: '#fff',
		borderWidth: 1,
		backgroundColor: '#eeeeee'
	},
	title: {
		fontFamily: '$mainFont',
		fontSize: 15,
		padding: 3,
		color: '$MainColor',
		textAlign: 'left'
	}
})
// main style
export const mainStyle = EStyleSheet.create({
	textHeader: {
		color: 'white'
	},
	HeaderStyle: {
		backgroundColor: '$headerColor',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		borderBottomColor: '$headerColorBotton'
	},
	headerPageImage: {
		resizeMode: 'contain',
		width: 200,
		height: 40,
		marginRight: -20
	},
	HeaderBodyStyle: {
		flex: 1,
		marginTop: 12,
		flexDirection: 'row'
	},
	cameraStyle: {
		flex: 1,
		height: 400,
		marginTop: 10
	},
	cameraStyleAndroid: {
		flex: 1,
		height: 590,
		marginTop: 75,
		marginBottom: 65
	},
	addressText: {
		fontFamily: '$mainFont',
		fontSize: 15,
		color: '$MainColor',
		textAlign: 'left'
	},
	imageHeader: {
		resizeMode: 'contain',
		height: 30,
		width: 100
	},
	HeaderMainMenuImage: {
		resizeMode: 'contain',
		height: 45,
		width: 20
	},
	menuIcon: {
		color: 'white'
	},
	menuIconBackIcon: {
		color: 'white',
		marginLeft: 25,
		marginRight: 15
	},
	itemDrawerLayout: {
		flexDirection: 'row',
		padding: 10,
		textAlign: 'center',
		justifyContent: 'flex-start',

	},
	itemDrawerLayoutText: {
		fontFamily: '$mainFont',
		color: '#000',
		justifyContent: 'flex-start',
		padding: 5
	},
	textHeaderDrawerTitle: {
		fontSize: 20,
		color: '$orangColor',
		fontFamily: '$mainFont',
		backgroundColor: 'transparent',
		textAlign: 'center'
	},
	textHeaderDrawer: {
		fontFamily: '$mainFont',
		backgroundColor: 'transparent',
		color: 'white',
		margin: 5,
		textAlign: 'center'
	},
	headerPage: {
		flexDirection: 'row',
		height: 60,
		backgroundColor: '$MainColor',
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerPageText: {
		fontFamily: '$mainFont',
		fontSize: 15,
		marginTop: 5,
		color: 'white'
	},
	imageHeader: {
		width: 40,
		height: 50,
		marginRight: 15,
		marginLeft: 15,
		resizeMode: 'contain'
	},
	loading: {
		position: 'absolute',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width
	},
	messages: {
		marginTop: 50,
		position: 'absolute',
		height: 350,
		width: Dimensions.get('window').width
	},
	textMediumStyle: {
		flex: 1,
		textAlign: 'center',
		fontFamily: '$mainFont'
	},
	NvtextStyle: {
		fontFamily: '$mainFont',
		padding: 3,
		fontSize: 15,
		textAlign: 'right'
	},
	NvtextMediumStyle: {
		fontFamily: '$mainFont',
		fontSize: 13,
		padding: 3,
		textAlign: 'left',
		alignItems: 'flex-start',
		alignSelf: 'flex-start'
	},
	textErrorStyle: {
		color: 'red',
		fontSize: 10,
		fontFamily: 'BYekan',
		textAlign: 'right'
	}
})

export default (styles = {
	splash
})