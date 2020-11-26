import {GET_COUNT_AMOUNT_SALE} from '../actions/type'

const initalState = {
	inDay: 0,
	inDayPrice: 0,
	inMonth: 0,
	inMonthPrice: 0

}
export default (getCountAndAmountSale = (state = initalState, action = {}) => {
	switch (action.type) {
		case GET_COUNT_AMOUNT_SALE:
			const {inDay} = action.payload
			const {inDayPrice} = action.payload
			const {inMonth} = action.payload
			const {inMonthPrice} = action.payload
			return {
				inDay: inDay,
				inDayPrice: inDayPrice,
				inMonth: inMonth,
				inMonthPrice: inMonthPrice
			}
			break
		default:
			return state
	}
})
