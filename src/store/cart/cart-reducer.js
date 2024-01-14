import { ADD_TO_CART, REMOVE_FROM_CART } from '@store/cart/cart-constants';

export const cartReducer = (state = [], {type, payload}) => {
  switch(type) {
    case ADD_TO_CART: {
      const existingProduct = state.filter(item => item.id === payload.id)[0];

      if (existingProduct) {
        return state;
      }

      return [
        ...state,
        payload
      ]
    }
    case REMOVE_FROM_CART: {
      return state.filter(item => item.id !== payload);
    }
    default: return state;
  }
};