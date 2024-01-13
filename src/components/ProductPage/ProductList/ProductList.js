import Product from '@components/Product';

import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = ({products}) => {
  return (
    <div>
      <Row className={styles.products}>
        {products && products.map((product) => <Product key={product.id} {...product}/>)}
      </Row>
    </div>
  );
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array
};