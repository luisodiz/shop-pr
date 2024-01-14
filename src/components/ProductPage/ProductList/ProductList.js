import Product from '@components/Product';

import { Row } from 'react-bootstrap';
import { selectAllProducts } from '@store/products/products-selectors';
import {
  setAddedToCart,
  setAddedToFavorites,
} from '@store/products/products-actions';
import { addToCart } from '@store/cart/cart-actions';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProductList.module.scss';
import { addToFavorites } from '@store/favorites/favorites-actions';

const ProductList = () => {
  const allProducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(setAddedToCart(product.id));
    dispatch(addToCart(product));
  };

  const handleAddToFavorites = (product) => {
    dispatch(setAddedToFavorites(product.id));
    dispatch(addToFavorites(product));
  };

  return (
    <div>
      <Row className={styles.products}>
        {allProducts.length && allProducts.map((product) =>
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            handleAddToFavorites={handleAddToFavorites}/>,
        )}
      </Row>
    </div>
  );
};

export default ProductList;