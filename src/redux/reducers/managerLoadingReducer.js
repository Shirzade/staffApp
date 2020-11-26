import { SHOW_LOADING } from '../actions/type'

const initalState = {
	showLoading:false
}
export default (managerLoading = (state = initalState, action = {}) => {
	switch (action.type) {
		case SHOW_LOADING:
			const {showLoading} = action.payload
			return {
				showLoading : showLoading
			}
			break
		default:
			return state
	}
})