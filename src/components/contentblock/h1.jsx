import React from 'react';
import PropTypes from 'prop-types';
import styles from './h1.scss';

const H1 = ({ children, diff, style }) => (
  <h1 className={`${styles.header} ${diff ? styles.diff : ''}`} style={style}>
    {children}
  </h1>
);

H1.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  diff: PropTypes.bool,
};
H1.defaultProps = {
  children: '',
  style: {},
  diff: true,
};

export default H1;
