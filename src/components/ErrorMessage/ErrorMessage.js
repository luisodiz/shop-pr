import { Container } from 'react-bootstrap';

import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <Container>
      <p className={styles.error}>Не удалось загрузить данные</p>
    </Container>
  )
}

export default ErrorMessage;