import * as actionTypes from './actionTypes';

// dialog
export const addProductToCart = (data) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    data,
  };
};

export const OrderTotal = (data) => {
  return {
    type: actionTypes.ORDER_TOTAL_PRICE,
    data,
  };
};

export const deleteProductFromCart = (data) => {
  return {
    type: actionTypes.DELETE_PRODUCT_FROM_CART,
    data,
  };
};
export const deleteProductToFavourite = (data) => {
  return {
    type: actionTypes.DELETE_PRODUCT_FROM_FAV,
    data,
  };
};
export const favouriteProductFromCart = (data) => {
  return {
    type: actionTypes.FAVOURITE_PRODUCT_FROM_CART,
    data,
  };
};

export const increaseProductAmount = (data) => {
  return {
    type: actionTypes.INCREASE_PRODUCT_FROM_CART,
    data,
  };
};

export const decreaseProductAmount = (data) => {
  return {
    type: actionTypes.DECREASE_PRODUCT_FROM_CART,
    data,
  };
};

export const settingDeliveryPayment = (data) => {
  return {
    type: actionTypes.SETTING_DELIVERY_PAYMENT,
    data,
  };
};

export const settingAddressPayment = (data) => {
  return {
    type: actionTypes.SETTING_ADDRESS_PAYMENT,
    data,
  };
};

export const settingCardPayment = (data) => {
  return {
    type: actionTypes.SETTING_CARD_PAYMENT,
    data,
  };
};
