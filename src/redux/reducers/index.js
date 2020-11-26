import {combineReducers} from 'redux';
import selectItem from './selectItemReducer';
import getDetailsOrder from './getDetailsOrderReducer';
import getDetailsOrderInPerson from './getDetailsOrderInPersonReducer';
import createProduct from './createNewProductReducer';
import showModal from './showModalReducer';
import manageModalExit from './manageModalExitReducer';
import getBarCode from './getBarCodeReducer';
import getSessionId from './getSessionIdReducer';
import showModalLogin from './showModalLoginReducer';
import getName from './getNameReducer';
import getDetailsProduct from './getDetailsProductSetQtyReducer';
import getSId from './getSidReducer';
import typeSearchMethod from './getTypeSearchReducer';
import getCountAndAmountSale from './getCountAndAmountSaleReducer';
import getPlace from './getPlaceUser';
import entityManager from './entityManagerReducer';
import services from './servicesReduser';
import managerLoading from './managerLoadingReducer';
import managerAttendance from './managerAttendaceReducer';
import getVerifyCode from './getVerifyCodeReducer';
import setUserName from './loginReduser'

export default combineReducers({
  setUserName,
  selectItem,
  getVerifyCode,
  getDetailsOrder,
  services,
  managerAttendance,
  managerLoading,
  getDetailsOrderInPerson,
  createProduct,
  showModal,
  manageModalExit,
  getBarCode,
  getSessionId,
  showModalLogin,
  getName,
  getDetailsProduct,
  getSId,
  getPlace,
  entityManager,
  getCountAndAmountSale,
  typeSearchMethod,
});
