import Product from '../../Product';

import { Row } from 'react-bootstrap';
import styles from './ProductList.module.scss';

const ProductList = ({products}) => {
  return (
    <div>
      <Row className={styles.products}>
        {products && products.map((product, idx) => <Product key={idx} {...product}/>)}
      </Row>
      {products ? <h1>Есть товары</h1> : <h1>Нет товаров</h1>}
    </div>
  );
};

export default ProductList;