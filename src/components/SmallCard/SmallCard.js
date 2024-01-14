import { Col, Card, Image, Button } from 'react-bootstrap';

import styles from './SmallCard.module.scss';

const SmallCard = ({btnText, handleClick, item}) => {
  const {id, name, picture} = item;

  return (
    <Col xl={3} lg={4} md={6}>
      <Card className={styles.SmallCard}>
        <div className={styles['SmallCard-WrapperImg']}>
          <Image src={picture} alt={name || 'Товар на фотосессии'} className={styles['SmallCard-Img']}/>
        </div>
        <div className={styles['SmallCard-Details']}>
          <h3 className={styles['SmallCard-Name']}>{name}</h3>
          <Button
            className={styles['SmallCard-Btn']}
            onClick={() => handleClick(id)}
          >{btnText}</Button>
        </div>
      </Card>
    </Col>
  );
};

export default SmallCard;