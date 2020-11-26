import { GET_TYPE_SEARCH } from '../actions/type';

const initalState = {
	searchType: ''
};
export default (typeSearchMethod = (state = initalState, action = {}) => {
	switch (action.type) {
		case GET_TYPE_SEARCH:
			const { searchType } = action.payload;
			return {
				searchType: searchType
			};
			break;
		default:
			return state;
	}
});
