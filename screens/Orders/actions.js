import * as actionTypes from './actionTypes';

// dialog
export const getOrderTrack = (data) => {
  return {
    type: actionTypes.SELECT_ORDER_HISTORY,
    data,
  };
};
