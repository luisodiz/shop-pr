import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '@store/favorites/favorites-constants';

export const addToFavorites = (id) => ({
  type: ADD_TO_FAVORITES,
  payload: id
});

export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id
});