import {GET_SID} from '../actions/type'

const initalState = {
	sid: ''
}
export default (getSId = (state = initalState, action = {}) => {
	switch (action.type) {
		case GET_SID:
			const {sid} = action.payload
			return {
				sid: sid
			}
			break
		default:
			return state
	}
})
