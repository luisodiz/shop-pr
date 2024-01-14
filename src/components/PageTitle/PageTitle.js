import styles from './PageTitle.module.scss';

const PageTitle = ({title = 'Корзина товаров'}) => {
  return (
    <h1 className={styles.PageTitle}>{title}</h1>
  );
};

export default PageTitle;