import logo from '../../assets/img/logo.png';
import { Image } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
      <Image src={logo} alt="Магазин охотника"/>
      <span>Магазин<br/> охотника</span>
    </Link>
  );
};

export default Logo;