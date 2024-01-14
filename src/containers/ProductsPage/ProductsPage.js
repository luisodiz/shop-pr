import { useEffect } from 'react';
import ProductList from '@/components/ProductPage/ProductList';

import { API_GOODS } from '@/constants/api';
import { getApiResource } from '@/utils/js/network';
import { withErrorApi } from '@/hoc/withErrorApi';
import { addAllProducts } from '@store/products/products-actions';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts } from '@store/products/products-selectors';


const ProductsPage = ({setErrorApi}) => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      dispatch(addAllProducts(res.items));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    if (!products.length) {
      getResource(API_GOODS);
    }
  }, []);

  return (
    <ProductList />
  );
};

export default withErrorApi(ProductsPage);