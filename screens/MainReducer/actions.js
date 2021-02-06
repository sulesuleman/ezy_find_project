import {AsyncStorage} from 'react-native'
import * as actionTypes from './actionTypes';
import {USER_API_BASE_URL} from '../../APIs/axiosApi';
import axiosInstance from '../../APIs/axiosApi';


export const fetchProductsBegin = () => {
  return{
    type: actionTypes.FETCH_PRODUCTS_BEGIN
  };
};

export  const  receiveProducts = data => {
  return {
    type: actionTypes.RECEIVE_PRODUCTS,
    data
  };
};
export const getAllProducts = () => dispatch => {
  dispatch(fetchProductsBegin());
  return fetch(USER_API_BASE_URL+'farmerProducts/')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(products => {
      dispatch(receiveProducts(products))
      return products
      
  })
  .catch(error => console.log(error.message));
  
}

export const fetchProfileBegin = () => {
  return{
    type: actionTypes.FETCH_PROFILE_BEGIN
  }
};

// export const  getUserProfile = () => dispatch => {

//   dispatch(fetchProfileBegin())
//   return axiosInstance.getProfile().then((response) => {
//     if(response.status === 200){
//       AsyncStorage.setItem("category", response.data.profile.Category);
//       AsyncStorage.setItem("profilePicture", response.data.profile.photo);
//       AsyncStorage.setItem("firstname", response.data.first_name);
//       console.log("Category Data:",response.data.profile.Category);
//       alert('Login Successful!: ')
//       dispatch(receiveProfile(response.data))
//       return response.data;
//     }
//     else {
//       var error = new Error('Error ' + response.status + ': ' + response.statusText);
//       error.response = response;
//       throw error;
//       }
//     },
//     error => {
//           var errmess = new Error(error.message);
//           throw errmess;
//     })
//     // .then(profile => {
//     //   dispatch(receiveProfile(profile.data))
//     //   this.props.navigation.navigate('Asaan Kisaan Market')
//     //   return profile.data
//     // })
//   .catch(error => console.log(error.message));
// }

export const receiveProfile = data =>{
  return{
    type: actionTypes.RECEIVE_PROFILE,
    data
  };
};
// dialog
export const chooseCategoryItem = (data) => {
  return {
    type: actionTypes.CHOOSE_CATEGORY_ITEM,
    data,
  };
};

export function getNumberOfRecipes(products,category) {
  let count = 0;
  products.map(data => {
    if (data.category == category) {
      count++;
    }
  });
  return count;
}

export const chooseProductItem = (data) => {
  return {
    type: actionTypes.CHOOSE_PRODUCT_ITEM,
    data,
  };
};

export const updateProductResult = (data) => {
  return {
    type: actionTypes.UPDATE_PRODUCT_RESULT,
    data,
  };
};

export const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    data,
  };
};