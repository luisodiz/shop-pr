import Logo from '@components/Logo';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Logo/>
      </div>
    </header>
  );
};

export default Header;