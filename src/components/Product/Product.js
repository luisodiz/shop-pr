import cn from 'classnames';
import { Col, Card, Image, Button } from 'react-bootstrap';

import styles from './Product.module.scss';

const Product = ({name, price, quantity, picture}) => {
  const getPriceFormat = () => {
    const priceFormat = new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    });

    return function(price) {
      return priceFormat.format(price);
    };
  };

  const convertPriceToRub = getPriceFormat();

  return (
    <Col xl={3} lg={4} md={6} className={styles.ProductCol}>
      <Card className={styles.Product}>
        <div className={styles['Product-ImageWrapper']}>
          <Image
            src={picture ||
              'https://ohotaktiv.ru/local/templates/ohota2021/img/no_photo.png'}
            alt={name ? name : 'Изображение товара'}
            className={styles['Product-Img']}
          />
        </div>
        <div className={styles['Product-Details']}>
          <h3 className={styles['Product-Name']}>{name}</h3>
          <span className={styles['Product-Price']}>{convertPriceToRub(price)}</span>
        </div>
        <div className={styles.ProductActions}>
          {
            quantity
              ? (
                <>
                  <Button className={cn(styles['ProductActions-Button'], styles['ProductActions-Button_addToCart'])}>В корзину</Button>
                  <Button className={cn(styles['ProductActions-Button'], styles['ProductActions-Button_addToFavorites'])}>В избранное</Button>
                </>
              )
              : (
                <Button className={cn(styles['ProductActions-Button'], styles['ProductActions-Button_disabled'])} disabled="disabled">Отсутствует</Button>
              )
          }
        </div>
      </Card>
    </Col>
  );
};

export default Product;