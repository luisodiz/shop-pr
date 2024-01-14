import PageTitle from '@components/PageTitle/PageTitle';
import SmallCard from '@components/SmallCard';

import { Row } from 'react-bootstrap';
import { selectItemsInCart } from '@store/cart/cart-selectors';
import { removeFromCart } from '@store/cart/cart-actions';
import { setRemovedFromCart } from '@store/products/products-actions';
import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {
  const items = useSelector(selectItemsInCart);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeFromCart(id));
    dispatch(setRemovedFromCart(id));
  };

  if (items.length) {
    return (
      <div className="Cart">
        <PageTitle title="Корзина товаров"/>
        <Row>
          {
            items.map(item => <SmallCard key={item.id} item={item} btnText="Удалить из корзины" handleClick={handleClick} />)
          }
        </Row>
      </div>
    );
  }

  return <PageTitle title="Нет товаров в корзине"/>
};

export default CartPage;