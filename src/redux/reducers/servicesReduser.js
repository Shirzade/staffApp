import {
    GET_ALL_SERVICES
   } from '../actions/type'

const initalState = {
	items: []
}
export default (services = (state = initalState, action = {}) => {
	switch (action.type) {
		case GET_ALL_SERVICES:
			const {items} = action.payload
			return {
				items:items
			}
			break
		default:
			return state
	}
})