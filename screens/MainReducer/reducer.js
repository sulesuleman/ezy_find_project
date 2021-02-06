import * as actionType from './actionTypes';

// const avatar1 = require('../../assets/imgs/images/avatar/avatar1.png');
// const avatar2 = require('../../assets/imgs/images/avatar/avatar2.png');

// const reviews=[
//   {
//     id:1,
//     image: avatar1,
//     reviewer_name: 'BeoPlay Speaker',
//     review_content:
//       'Wonderful jean, perfect gift for my girl for our anniversary!',
//     rate: 5,
//     product_id: 1,
//   },
//   {
//     id:2,
//     image: avatar2,
//     reviewer_name: 'BeoPlay Speaker',
//     review_content:
//       'I love this, paired it with a nice blouse and all eyes on me.',
//     rate: 5,
//     product_id: 1,
//   },
//   {
//     id:3,
//     image: avatar1,
//     reviewer_name: 'BeoPlay Speaker',
//     review_content:
//       'Wonderful jean, perfect gift for my girl for our anniversary!',
//     rate: 5,
//     product_id: 1,
//   },
//   {
//     id:4,
//     image: avatar2,
//     reviewer_name: 'BeoPlay Speaker',
//     review_content:
//       'I love this, paired it with a nice blouse and all eyes on me.',
//     rate: 5,
//     product_id: 1,
//   },
// ];



const INITIAL_STATE = {
  category: {},
  product: {},
  profile:{},
  products:[],
  reviews: [],
  auth:{},
  resultProducts: [],
};
// const addReview = (products, reviews) => {
//   let isNew = true;
//   const clone = {...reviews};
//   products.forEach((item) => {
//     if (item.id === reviews.id) {
//       item.amount += 1;
//       isNew = false;
//     }
//   });
//   if (isNew) {
//     return [...products, clone];
//   }
//   return products;
// };
const MainReducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionType.CHOOSE_CATEGORY_ITEM:
      newState.category = action.data;
      break;
    case actionType.RECEIVE_PRODUCTS:
      newState.products = action.data; 
      break;
    case actionType.RECEIVE_PROFILE:
      newState.profile = action.data; 
      break;
      case actionType.AUTH_SUCCESS:
        newState.auth = action.data; 
        break;
    case actionType.ADD_REVIEW:
      newState.reviews = [
        ...addReview(newState.reviews, action.data),
      ];
      break;
    case actionType.CHOOSE_PRODUCT_ITEM:
      newState.product = action.data;
      break;
    case actionType.UPDATE_PRODUCT_RESULT:
      newState.resultProducts = action.data;
      break;
    default:
      return state;
  }
  return newState;
};

export default MainReducer;
