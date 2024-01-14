import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.NotFound}>
      <span className={styles['NotFound-Error']}>404. Страница не найдена</span>
      <Link to="/" className={styles['NotFound-Back']}>Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;