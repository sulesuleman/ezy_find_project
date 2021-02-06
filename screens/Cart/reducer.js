import * as actionType from './actionTypes';

const image1 = require('../../assets/imgs/images/products/image1.png');
const image2 = require('../../assets/imgs/images/products/image2.png');
const image3 = require('../../assets/imgs/images/products/image3.png');
const image4 = require('../../assets/imgs/images/products/image4.png');
const image5 = require('../../assets/imgs/images/products/image5.png');
const image6 = require('../../assets/imgs/images/products/image6.png');

const cartProducts = [
  
    
  
];
const favouriteProducts = [
  
    
  
];

const INITIAL_STATE = {
  cartProducts: cartProducts,
  favouriteProducts: favouriteProducts,
  deviveryCase: 1,
  ordertotal: 0,
  address: {
    isCheck: true,
    First_Name: 'Hamza',
    Last_Name: 'Iftikhar',
    Phone: '03319343219',
    Email: 'hamz@gmail.com',
    Address: 'street 123 ',
    City: 'Islamabad',
    State: 'Islamabad',
    Postal_code: '44000',
  },
  card: {},
};

const addProductToCart = (products, product) => {
  let isNew = true;
  
  const clone = {...product};
  products.forEach((item) => {
    if (item.id === product.id) {
      
      // item.amount += 1;
      isNew = false;
    }
  });
  if (isNew) {
    return [...products, clone];
  }
  return products;
};

const decreaseProductToCart = (products, product) => {
  if (product.productQuantity === 1) return deleteProductToCart(products, product);
  return products.map((item, index) => {
    const amount = item.id === product.id ? item.productQuantity - 1 : item.productQuantity;
    item.productQuantity = amount;
    return item;
  });
};

const increaseProductToCart = (products, product) => {
 
  return products.map((item, index) => {
    alert(item.id)
    const amount = item.id === product.id ? item.productQuantity + 1 : item.productQuantity;
    item.productQuantity = amount;
    return item;
  });
};

const deleteProductToCart = (products, product) => {
  return products.filter((item, index) => item.id !== product.id);
};
const deleteProductToFavourite = (products, product) => {
  return products.filter((item, index) => item.id !== product.id);
};

const MainReducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionType.ADD_PRODUCT_TO_CART:
      newState.cartProducts = [
        ...addProductToCart(newState.cartProducts, action.data),
      ];
      break;
    case actionType.DELETE_PRODUCT_FROM_CART:
      newState.cartProducts = deleteProductToCart(
        newState.cartProducts,
        action.data,
      );
      break;
      case actionType.ORDER_TOTAL_PRICE:
        newState.ordertotal = action.data;
        break; 
      case actionType.DELETE_PRODUCT_FROM_FAV:
      newState.favouriteProducts = deleteProductToFavourite(
        newState.favouriteProducts,
        action.data,
      );
      break;

    case actionType.INCREASE_PRODUCT_FROM_CART:
      newState.cartProducts = [
        ...increaseProductToCart(newState.cartProducts, action.data),
      ];
      break;

    case actionType.DECREASE_PRODUCT_FROM_CART:
      newState.cartProducts = [
        ...decreaseProductToCart(newState.cartProducts, action.data),
      ];
      break;

    case actionType.FAVOURITE_PRODUCT_FROM_CART:
      newState.favouriteProducts = [...newState.favouriteProducts, action.data];
      break;

    case actionType.SETTING_ADDRESS_PAYMENT:
      newState.address = Object.assign({}, action.data);
      break;

    case actionType.SETTING_CARD_PAYMENT:
      newState.card = Object.assign({}, action.data);
      break;

    case actionType.SETTING_DELIVERY_PAYMENT:
      newState.deviveryCase = action.data;
      break;
    default:
      return state;
  }
  return newState;
};

export default MainReducer;