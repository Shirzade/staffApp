import {GET_INFORMATION_FOR_SET_QTY} from '../actions/type'

const initalState = {
	productId: '',
	name: '',
	sid: ''
}
export default (getDetailsProduct = (state = initalState, action = {}) => {
	switch (action.type) {
		case GET_INFORMATION_FOR_SET_QTY:
			const {productId, name, sid} = action.payload
			console.log(productId)
			console.log(name)
			console.log(sid)
			return {
				productId: productId,
				name: name,
				sid: sid
			}
			break
		default:
			return state
	}
})
