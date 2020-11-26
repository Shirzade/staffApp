import {GET_VERIFY_CODE} from '../actions/type';

const initalState = {
  verifyCode: '',
};
export default (getVerifyCode = (state = initalState, action = {}) => {
  switch (action.type) {
    case GET_VERIFY_CODE:
      const {verifyCode} = action.payload;
      return {
        verifyCode: verifyCode,
      };
      break;
    default:
      return state;
  }
});
