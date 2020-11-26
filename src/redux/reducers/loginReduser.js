import {
   SET_USERNAME,
   SHOW_USERNAME_FORM,
   SET_UUID
   } from "../actions/type";

const initalState = {
    username:0,
    showUsername:false,
    uuid:''
};
export default (setUserName = (state = initalState, action = {}) => {
  switch (action.type) {
    case SET_USERNAME:
      const { username } = action.payload;
      return {
        ...state,
        username: username
      };
      break;
      case SHOW_USERNAME_FORM:
        const {showUsername} = action.payload
        return {
          ...state,
          showUsername : showUsername
        }
        break
      case SET_UUID:
        const {uuid} = action.payload
        return {
          ...state,
          uuid : uuid
        }
        break
    default:
      return state;
  }
});