import React from 'react';
import Logo from '@/images/logo-fullname.svg';
import styles from './header.scss';
import InteractiveButton from './interactiveButton';

const Header = () => (
  <div id={styles.header}>
    <InteractiveButton>
      <a href="##">
        <Logo id={styles.logo} />
      </a>
    </InteractiveButton>
    <div className={styles.descripion}>
      Late night show
    </div>
    <div className={styles.descripion}>
      & Online content
    </div>
  </div>
);

export default Header;
