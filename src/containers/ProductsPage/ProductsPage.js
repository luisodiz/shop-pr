import { useState, useEffect } from 'react';
import ProductList from '@/components/ProductPage/ProductList';
import { Container } from 'react-bootstrap';

import { API_GOODS } from '@/constants/api';
import { getApiResource } from '@/utils/js/network';
import { withErrorApi } from '@/hoc/withErrorApi';
import uniqid from 'uniqid';

const ProductsPage = ({setErrorApi}) => {
  const [products, setProducts] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const items = res.items.map(item => ({
        ...item,
        id: uniqid()
      }));
      setProducts(items);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
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

export default withErrorApi(ProductsPage);