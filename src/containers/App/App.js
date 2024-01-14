import Header from '@/components/Header';
import ProductsPage from '@containers/ProductsPage';
import CartPage from '@containers/CartPage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritesPage from '@containers/FavoritesPage';

import { Routes, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <Container className="wrapper">
        <Routes>
          <Route path="/" element={<ProductsPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/favorites" element={<FavoritesPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
