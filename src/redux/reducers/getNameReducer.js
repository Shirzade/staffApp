import { GET_PRODUCT_NAME } from '../actions/type';

const initalState = {
	productName: '',
	sid: ''
};
export default (getName = (state = initalState, action = {}) => {
	switch (action.type) {
		case GET_PRODUCT_NAME:
			const { name } = action.payload;
			const { sid } = action.payload;
			return {
				productName: name,
				sid: sid
			};
			break;
		default:
			return state;
	}
});
