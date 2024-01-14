import {
  REMOVE_FROM_FAVORITES,
  ADD_TO_FAVORITES,
} from '@store/favorites/favorites-constants';

export const favoritesReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_TO_FAVORITES: {
      const existingProduct = state.filter(item => item.id === payload.id)[0];

      if (existingProduct) {
        return state;
      }

      return [
        ...state,
        payload
      ];
    }
    case REMOVE_FROM_FAVORITES: {
      return state.filter(item => item.id !== payload);
    }
    default:
      return state;
  }
};