import { MANAGE_EXIT_MODAL ,SHOW_MODAL_EXIT_ATTENDANCE } from "../actions/type";

const initalState = {
  showModalExitFlag: false,
  showModalExitAttendanceFlag:false
};
export default (manageModalExit = (state = initalState, action = {}) => {
  switch (action.type) {
    case MANAGE_EXIT_MODAL:
      const { showModalExitFlag } = action.payload;
      return {
        showModalExitFlag: showModalExitFlag
      };
      break;
      case SHOW_MODAL_EXIT_ATTENDANCE:
        const {showModalExitAttendanceFlag} = action.payload
        return {
           ...state , showModalExitAttendanceFlag
        }
        break;
    default:
      return state;
  }
});
