import {
  CREATE_NEW_PRODUCT,
  GET_COUNT_AMOUNT_SALE,
  GET_INFORMATION_FOR_SET_QTY,
  GET_PRODUCT_BAR_CODE,
  GET_PRODUCT_BY_NAME,
  GET_PRODUCT_NAME,
  GET_SESSION_ID,
  GET_SID,
  GET_TYPE_SEARCH,
  MANAGE_EXIT_MODAL,
  SELECT_ITEM,
  SEND_ORDER_DETAILS,
  SEND_ORDER_DETAILS_IN_PERSON,
  SHOW_MODAL,
  SHOW_MODAL_LOGIN_ERROR,
  SHOW_MODAL_MESSAGE_SET_QTY,
  GET_PLACE,
  GET_ALL_ENTITY,
  REFRESH_LIST,
  GET_ALL_SERVICES,
  SHOW_LOADING,
  GET_LIST_BEDS,
  GET_DETAILES_ENTITY,
  GET_ITEMS_ENTITY,
  SHOW_MODAL_EXIT_ATTENDANCE,
  ATTENDANCE_FLAG,
  GET_VERIFY_CODE,
  SET_USERNAME,
  SHOW_USERNAME_FORM,
  ALLOW_READ_SCANNER,
  SET_UUID
} from '../actions/type';


// allow read scanner


export const setUniqUserId= (uuid)=>({
  type : SET_UUID,
  payload :{
    uuid : uuid
  }
})

export const setAllowToReadScanner = (flagAllow)=>({
   type : ALLOW_READ_SCANNER,
   payload :{
     flagAllow : flagAllow
   }
})

// navigate
export const selectItemSearch = (item, from) => ({
  type: SELECT_ITEM,
  payload: {
    item: item,
    from: from,
  },
});


// set username
export const setUserName = (username)=>({
  type:SET_USERNAME,
  payload:{
    username : username
  }
})

export const showUsernameForm = (showUsername)=>({
   type:SHOW_USERNAME_FORM,
   payload :{
    showUsername : showUsername
   }
})



export const getVerifyCode = verifyCode => ({
  type: GET_VERIFY_CODE,
  payload: {
    verifyCode: verifyCode,
  },
});

export const sendOrderDetails = (
  user,
  number,
  confirmCartDate,
  amountTotal,
  orderId,
  stateOrder,
  note,
) => ({
  type: SEND_ORDER_DETAILS,
  payload: {
    user,
    number,
    confirmCartDate,
    amountTotal,
    orderId,
    stateOrder,
    note,
  },
});

export const sendOrderDetailsInPerson = items => ({
  type: SEND_ORDER_DETAILS_IN_PERSON,
  payload: {
    items,
  },
});

export const createNewProduct = (newProduct, productName) => ({
  type: CREATE_NEW_PRODUCT,
  payload: {
    newProduct,
    productName,
  },
});

export const showModalUpdateProduct = (
  showModalFlag,
  showSuccessFlag,
  messageType,
) => ({
  type: SHOW_MODAL,
  payload: {
    showModalFlag,
    showSuccessFlag,
    messageType,
  },
});

export const showModalExitApp = showModalExitFlag => ({
  type: MANAGE_EXIT_MODAL,
  payload: {
    showModalExitFlag,
  },
});

export const showModalErrorLogin = showModalLoginFlag => ({
  type: SHOW_MODAL_LOGIN_ERROR,
  payload: {
    showModalLoginFlag,
  },
});

export const showModalExitAttendance = showModalExitAttendanceFlag => ({
  type: SHOW_MODAL_EXIT_ATTENDANCE,
  payload: {
    showModalExitAttendanceFlag: showModalExitAttendanceFlag,
  },
});

export const getProductBarCode = (
  active,
  title,
  description,
  authTypeName,
  payable,
  items,
  icon,
) => ({
  type: GET_PRODUCT_BAR_CODE,
  payload: {
    active,
    title,
    description,
    authTypeName,
    payable,
    items,
    icon,
  },
});

export const getProductByName = productName => ({
  type: GET_PRODUCT_BY_NAME,
  payload: {
    productName,
  },
});
export const getTypeSearch = searchType => ({
  type: GET_TYPE_SEARCH,
  payload: {
    searchType,
  },
});
export const getSessionId = sessionId => ({
  type: GET_SESSION_ID,
  payload: {
    sessionId,
  },
});

export const getProductName = (name, sid) => ({
  type: GET_PRODUCT_NAME,
  payload: {
    name,
    sid,
  },
});
export const getDetailsProduct = (productId, name, sid) => ({
  type: GET_INFORMATION_FOR_SET_QTY,
  payload: {
    productId: productId,
    name: name,
    sid: sid,
  },
});

export const showMessageSetQuantity = (
  showMessageSetQTY,
  messageQuantity,
  messageStatus,
) => ({
  type: SHOW_MODAL_MESSAGE_SET_QTY,
  payload: {
    showMessageSetQTY: showMessageSetQTY,
    messageQuantity: messageQuantity,
    messageStatus: messageStatus,
  },
});

export const getSid = sid => ({
  type: GET_SID,
  payload: {
    sid: sid,
  },
});

export const getCountAndAmountSale = (
  inDay,
  inDayPrice,
  inMonth,
  inMonthPrice,
) => ({
  type: GET_COUNT_AMOUNT_SALE,
  payload: {
    inDay: inDay,
    inDayPrice: inDayPrice,
    inMonth: inMonth,
    inMonthPrice: inMonthPrice,
  },
});

export const getPlaceUser = page => ({
  type: GET_PLACE,
  payload: {
    page: page,
  },
});

export const getAllEntityList = entityListAll => ({
  type: GET_ALL_ENTITY,
  payload: {
    entityListAll: entityListAll,
  },
});

export const setRefresh = refreshing => ({
  type: REFRESH_LIST,
  payload: {
    refreshing: refreshing,
  },
});

export const getAllServices = items => ({
  type: GET_ALL_SERVICES,
  payload: {
    items: items,
  },
});

export const managerLoading = showLoading => ({
  type: SHOW_LOADING,
  payload: {
    showLoading: showLoading,
  },
});

export const getListBeds = listBeds => ({
  type: GET_LIST_BEDS,
  payload: {
    listBeds: listBeds,
  },
});

export const getDetailesEntity = informationEntity => ({
  type: GET_DETAILES_ENTITY,
  payload: {
    informationEntity: informationEntity,
  },
});

export const getItemsEntity = informationEntityItemList => ({
  type: GET_ITEMS_ENTITY,
  payload: {
    informationEntityItemList: informationEntityItemList,
  },
});

export const managerAttendance = attendanceFlag => ({
  type: ATTENDANCE_FLAG,
  payload: {
    attendanceFlag: attendanceFlag,
  },
});
