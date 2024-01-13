import Header from '@/components/Header';
import ProductsPage from '@containers/ProductsPage';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <ProductsPage/>
    </div>
  );
}

export default App;
