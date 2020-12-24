import React from 'react';
import PropTypes from 'prop-types';
import CursorTrigger from '@/components/ui/cursorTrigger';
import styles from './navItem.scss';

const NavItem = ({ link, children }) => (
  <CursorTrigger>
    <a href={link} className={styles['nav-item']}>
      <li>
        {children}
      </li>
    </a>
  </CursorTrigger>
);

NavItem.defaultProps = {
  link: '',
};
NavItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavItem;
