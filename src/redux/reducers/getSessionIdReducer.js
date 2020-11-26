import { GET_SESSION_ID } from "../actions/type";

const initalState = {
  sessionId: ""
};
export default (getSessionId = (state = initalState, action = {}) => {
  switch (action.type) {
    case GET_SESSION_ID:
      const { sessionId } = action.payload;
      return {
        sessionId: sessionId
      };
      break;
    default:
      return state;
  }
});
