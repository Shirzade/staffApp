import {SELECT_ITEM} from '../actions/type'

const initalState = {
	selectItem: '',
	from: ''
}
export default (selectItem = (state = initalState, action = {}) => {
	switch (action.type) {
		case SELECT_ITEM:
			const {item} = action.payload
			const {from} = action.payload
			return {
				selectItem: item,
				from: from
			}
			break
		default:
			return state
	}
})
