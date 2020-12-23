import React from 'react';
import Logo from '@/images/logo-fullname.svg';
import styles from './header.scss';

const Header = () => (
  <div id={styles.header}>
    <a href="##">
      <Logo id={styles.logo} />
    </a>
    <div className={styles.descripion}>
      Late night show
    </div>
    <div className={styles.descripion}>
      & Online content
    </div>
  </div>
);

export default Header;
