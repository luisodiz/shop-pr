import PageTitle from '@components/PageTitle/PageTitle';
import SmallCard from '@components/SmallCard';

import { Row } from 'react-bootstrap';
import { selectFavoritesItems } from '@store/favorites/favorites-selectors';
import { removeFromFavorites } from '@store/favorites/favorites-actions';
import { setRemovedFromFavorites } from '@store/products/products-actions';
import { useSelector, useDispatch } from 'react-redux';

const FavoritesPage = () => {
  const items = useSelector(selectFavoritesItems);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeFromFavorites(id));
    dispatch(setRemovedFromFavorites(id));
  };

  if (items.length) {
    return (
      <div className="Cart">
        <PageTitle title="Избранное"/>
        <Row>
          {
            items.map(item => <SmallCard key={item.id} item={item} btnText="Удалить из избранного" handleClick={handleClick} />)
          }
        </Row>
      </div>
    );
  }

  return <PageTitle title="Нет товаров в избранном"/>
};

export default FavoritesPage;