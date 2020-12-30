import React from 'react';
import PropTypes from 'prop-types';
import styles from './h2.scss';

const propTypes = {
  children: PropTypes.node.isRequired,

};
const H2 = ({ children }) => (<h2 className={styles.h2}>{children}</h2>);
H2.propTypes = propTypes;

export default H2;
