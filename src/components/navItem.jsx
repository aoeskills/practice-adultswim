import React from 'react';
import PropTypes from 'prop-types';
import styles from './navItem.scss';
import InteractiveButton from './interactiveButton';

const NavItem = ({ link, children }) => (
  <InteractiveButton>
    <a href={link} className={styles['nav-item']}>
      <li>
        {children}
      </li>
    </a>
  </InteractiveButton>
);

NavItem.defaultProps = {
  link: '',
};
NavItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavItem;
