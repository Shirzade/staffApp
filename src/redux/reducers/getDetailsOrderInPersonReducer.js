import {SEND_ORDER_DETAILS_IN_PERSON} from '../actions/type'

const initalState = {
	items: [],
}
export default (getDetailsOrderInPerson = (
	state = initalState,
	action = {}
) => {
	switch (action.type) {
		case SEND_ORDER_DETAILS_IN_PERSON:
			const {items} = action.payload

			return {
				items:items
			}
			break
		default:
			return state
	}
})
