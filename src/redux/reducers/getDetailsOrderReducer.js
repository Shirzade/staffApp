import {SEND_ORDER_DETAILS} from '../actions/type'

const initalState = {
	user: '',
	number: '',
	confirmCartDate: '',
	amountTotal: '',
	orderId: '',
	stateOrder: '',
	note: ''
}
export default (getDetailsOrder = (state = initalState, action = {}) => {
	switch (action.type) {
		case SEND_ORDER_DETAILS:
			const {user} = action.payload
			const {number} = action.payload
			const {confirmCartDate} = action.payload
			const {amountTotal} = action.payload
			const {orderId} = action.payload
			const {stateOrder} = action.payload
			const {note} = action.payload
			return {
				user: user,
				number: number,
				confirmCartDate: confirmCartDate,
				amountTotal: amountTotal,
				orderId: orderId,
				stateOrder: stateOrder,
				note: note
			}
			break
		default:
			return state
	}
})
