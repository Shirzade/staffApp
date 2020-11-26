import {
    GET_ALL_ENTITY,
    REFRESH_LIST,
    GET_LIST_BEDS,
    GET_DETAILES_ENTITY,
    GET_ITEMS_ENTITY
} from '../actions/type'


const initalState = {
    entityListAll: [],
    listBeds:[],
    refreshing:false,
    informationEntity:{},
    informationEntityTitle:'',
    informationEntityDescription:'',
    informationEntityAuthTypeName:'',
    informationEntityItemsCount:'',
    informationEntityItemList:[],
    informationEntityActiveStatus:''
}
export default (entityManager = (state = initalState, action = {}) => {
	switch (action.type) {
	case GET_ALL_ENTITY:
        const { entityListAll } = action.payload
		return {
            ...state ,entityListAll
		}
        break
    case REFRESH_LIST:
        const {refreshing } = action.payload
        return {...state,refreshing}
        break
    case GET_LIST_BEDS:
        const {listBeds} = action.payload
            return {...state,listBeds}
        break
    case GET_DETAILES_ENTITY:
        const {informationEntity} = action.payload
        return {...state,informationEntity}
        break
    case GET_ITEMS_ENTITY:
        const {informationEntityItemList} = action.payload
        return {...state,informationEntityItemList}
        break    
	default:
		return state
    }
    
})