import {GET_PLACE} from '../actions/type'

const initalState = {
	page: ''
}
export default (getPlace = (state = initalState, action = {}) => {

	switch (action.type) {
		case GET_PLACE:
			const {page} = action.payload
			return {
				page: page
			}
			break
		default:
			return state
	}
})