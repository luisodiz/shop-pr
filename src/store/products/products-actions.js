import {
  ADD_ALL_PRODUCTS,
  SET_ADDED_TO_CART,
  SET_ADDED_TO_FAVORITES,
  SET_REMOVED_FROM_CART, SET_REMOVED_FROM_FAVORITES,
} from '@store/products/products-constants';

export const addAllProducts = (items) => {
  return {
    type: ADD_ALL_PRODUCTS,
    payload: items
  }
};

export const setAddedToCart = (id) => ({
  type: SET_ADDED_TO_CART,
  payload: id
});

export const setRemovedFromCart = (id) => ({
  type: SET_REMOVED_FROM_CART,
  payload: id
});

export const setAddedToFavorites = (id) => ({
  type: SET_ADDED_TO_FAVORITES,
  payload: id
});

export const setRemovedFromFavorites = (id) => ({
  type: SET_REMOVED_FROM_FAVORITES,
  payload: id
});