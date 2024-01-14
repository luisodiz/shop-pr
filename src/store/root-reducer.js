import { combineReducers } from 'redux';
import { productsReducer } from '@store/products/products-reducer';
import { cartReducer } from '@store/cart/cart-reducer';
import { favoritesReducer } from '@store/favorites/favoites-reducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  favorites: favoritesReducer
});