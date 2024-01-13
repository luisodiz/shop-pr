import { useState, useEffect } from 'react';
import ProductList from '../../components/ProductPage/ProductList';
import { Container } from 'react-bootstrap';

import { API_GOODS } from '../../constants/api';
import { getApiResource } from '../../utils/js/network';

const ProductsPage = () => {
  const [products, setProducts] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    setProducts(res.items);
  };

  useEffect(() => {
    getResource(API_GOODS);
  }, []);

  return (
    <Container>
      <ProductList products={products}/>
    </Container>
  );
};

export default ProductsPage;