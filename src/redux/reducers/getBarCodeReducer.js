import {
	GET_PRODUCT_BAR_CODE,
	GET_PRODUCT_BY_NAME
} from '../actions/type'

const initalState = {
	productBarCode: '',
	sid: '',
	typeSearch: '',
	productName: '',
	active: 0,
	title : '',
	description :'',
	authTypeName : '',
	payable : 0,
	icon:'',
	items : []
}
export default (getBarCode = (state = initalState, action = {}) => {
	switch (action.type) {
		case GET_PRODUCT_BAR_CODE:
			const {
				active
			} = action.payload
			const {
				title
			} = action.payload
			const {
				description
			} = action.payload
			const {
				authTypeName
			} = action.payload
			const {
				payable
			} = action.payload
			const {
				items
			} = action.payload
			

			console.log(items)
			return {
				    active: active,
					title: title,
					description : description,
					authTypeName : authTypeName,
					payable : payable,
					items : items
			}
			break
		case GET_PRODUCT_BY_NAME:
			const {
				productName
			} = action.payload
			return {
				productName: productName
			}
			break
		default:
			return state
	}
})