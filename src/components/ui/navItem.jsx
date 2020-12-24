import React from 'react';
import PropTypes from 'prop-types';
import InteractiveButton from '@/components/ui/interactiveButton';
import styles from './navItem.scss';

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
