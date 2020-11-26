import { ATTENDANCE_FLAG , ALLOW_READ_SCANNER } from '../actions/type';


const initalState = {
	attendanceFlag:false,
	flagAllow : true
};
export default (managerAttendance = (state = initalState, action = {}) => {
	switch (action.type) {
		case ATTENDANCE_FLAG:
			const { attendanceFlag } = action.payload;
			return {
				...state,
				attendanceFlag: attendanceFlag
			};
			break;
		case ALLOW_READ_SCANNER:
			const {flagAllow} = action.payload
            return {
				...state,
				flagAllow : flagAllow
			}
			break
		default:
			return state;
	}
});