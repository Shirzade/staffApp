import { SHOW_MODAL_LOGIN_ERROR } from "../actions/type";

const initalState = {
  showModalLoginFlag: false
};
export default (showModalLogin = (state = initalState, action = {}) => {
  switch (action.type) {
    case SHOW_MODAL_LOGIN_ERROR:
      const { showModalLoginFlag } = action.payload;
      return {
        showModalLoginFlag: showModalLoginFlag
      };
      break;
    default:
      return state;
  }
});
