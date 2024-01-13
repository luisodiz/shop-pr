import logo from '../../assets/img/logo.png';
import { Image } from 'react-bootstrap';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={logo} alt="Магазин охотника"/>
      <span>Магазин<br/> охотника</span>
    </div>
  );
};

export default Logo;