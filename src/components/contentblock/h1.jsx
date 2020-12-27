import React from 'react';
import PropTypes from 'prop-types';
import styles from './h1.scss';

const H1 = ({ children }) => (
  <h1 className={styles.header}>
    {children}
  </h1>
);

H1.propTypes = {
  children: PropTypes.node,
};
H1.defaultProps = {
  children: '',
};

export default H1;
