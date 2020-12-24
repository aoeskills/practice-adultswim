import React from 'react';
import Logo from '@/images/logo-fullname.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './header.scss';
import InteractiveButton from './interactiveButton';

const mapToState = (state) => ({
  logoColorClass: state.logoColorClass,
});

const Header = ({ logoColorClass }) => (
  <div id={styles.header}>
    <InteractiveButton>
      <a href="##">
        <Logo id={styles.logo} className={styles[logoColorClass]} />
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
Header.propTypes = {
  logoColorClass: PropTypes.string.isRequired,
};

export default connect(mapToState)(Header);
