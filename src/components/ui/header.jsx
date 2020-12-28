import React from 'react';
import Logo from '@/images/logo-fullname.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CursorTrigger from '@/components/ui/cursorTrigger';
import styles from './header.scss';

const mapToState = (state) => ({
  logoColorClass: state.ui.logoColorClass,
});

const Component = ({ logoColorClass }) => (
  <div id={styles.header}>
    <CursorTrigger>
      <a href="##">
        <Logo id={styles.logo} className={styles[logoColorClass]} />
      </a>
    </CursorTrigger>
    <div className={styles.descripion}>
      Late night show
    </div>
    <div className={styles.descripion}>
      & Online content
    </div>
  </div>
);

Component.propTypes = {
  logoColorClass: PropTypes.string.isRequired,
};

const Header = connect(mapToState)(Component);

export default Header;
