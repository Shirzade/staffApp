import {CREATE_NEW_PRODUCT} from '../actions/type';

const initalState = {
  newProduct: false,
  productName: '',
};
export default (createProduct = (state = initalState, action = {}) => {
  switch (action.type) {
    case CREATE_NEW_PRODUCT:
      const {newProduct} = action.payload;
      const {productName} = action.payload;
      return {
        newProduct: newProduct,
        productName: productName,
      };
      break;
    default:
      return state;
  }
});
