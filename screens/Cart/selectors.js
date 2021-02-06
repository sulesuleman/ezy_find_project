// interface State {
//   [KEY: string]: any;
// }

export const getCartProducts = (state) =>
  state.cart.cartProducts;

export const getAmount = (state) => state.cart.amount;
  
export const getFavouriteProducts = (state) =>
  state.cart.favouriteProducts;

export const getDeliveryCase = (state) =>
  state.cart.deviveryCase;

export const getCardPament = (state) => state.cart.card;

export const getAddressPayment = (state) =>
  state.cart.address;

export const getTotalPrice = (state) =>
  state.cart.ordertotal;
