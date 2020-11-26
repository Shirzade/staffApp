import { SHOW_MODAL, SHOW_MODAL_MESSAGE_SET_QTY } from '../actions/type';

const initalState = {
	showModalFlag: false,
	showSuccessFlag: true,
	showMessageSetQTY: false,
	messageStatus: false,
	messageType: '',
	messageQuantity: ''
};
export default (showModal = (state = initalState, action = {}) => {
	switch (action.type) {
		case SHOW_MODAL:
			const { showModalFlag } = action.payload;
			const { showSuccessFlag } = action.payload;
			const { messageType } = action.payload;
			return {
				showModalFlag: showModalFlag,
				showSuccessFlag: showSuccessFlag,
				messageType: messageType
			};
			break;
		case SHOW_MODAL_MESSAGE_SET_QTY:
			const { showMessageSetQTY } = action.payload;
			const { messageQuantity } = action.payload;
			const { messageStatus } = action.payload;
			return {
				showMessageSetQTY: showMessageSetQTY,
				messageQuantity: messageQuantity,
				messageStatus: messageStatus
			};
		default:
			return state;
	}
});
