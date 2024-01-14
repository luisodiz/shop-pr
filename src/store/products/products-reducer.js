import {
  ADD_ALL_PRODUCTS,
  SET_ADDED_TO_CART,
  SET_REMOVED_FROM_CART,
  SET_ADDED_TO_FAVORITES,
  SET_REMOVED_FROM_FAVORITES
} from '@store/products/products-constants';

import uniqid from 'uniqid';

export const productsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_ALL_PRODUCTS: {
      return payload.map(item => ({
        ...item,
        id: uniqid(),
        inCart: false,
        inFavorites: false,
      }));
    }
    case SET_ADDED_TO_CART: {
      return state.map(item => (
        item.id === payload
          ? {
            ...item,
            inCart: true,
          }
          : item
      ));
    }
    case SET_REMOVED_FROM_CART: {
      return state.map(item => (
        item.id === payload
          ? {
            ...item,
            inCart: false,
          }
          : item
      ));
    }
    case SET_ADDED_TO_FAVORITES: {
      return state.map(item => (
        item.id === payload
          ? {
            ...item,
            inFavorites: true,
          }
          : item
      ));
    }
    case SET_REMOVED_FROM_FAVORITES: {
      return state.map(item => (
        item.id === payload
          ? {
            ...item,
            inFavorites: false,
          }
          : item
      ));
    }
    default:
      return state;
  }
};