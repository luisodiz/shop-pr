import Logo from '@components/Logo';

import cn from 'classnames';
import {Link} from 'react-router-dom';
import { selectItemsInCartCount } from '@store/cart/cart-selectors';
import { selectFavoritesItemsCount } from '@store/favorites/favorites-selectors';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';

const Header = () => {
  const itemsInCartCount = useSelector(selectItemsInCartCount);
  const itemsInFavoritesCount = useSelector(selectFavoritesItemsCount)

  return (
    <header className={styles.Header}>
      <div className={cn('container', styles['Header-Row'])}>
        <Logo/>
        <div className={styles['Header-Actions']}>
          <div className={styles['Header-Cart']}>
            <Link to="/cart"> Корзина:</Link> <span>{itemsInCartCount}</span>
          </div>

          <div className={styles['Header-Favorites']}>
            <Link to="/favorites"> Избранное:</Link> <span>{itemsInFavoritesCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;