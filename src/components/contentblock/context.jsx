import React from 'react';
import PropTypes from 'prop-types';
import styles from './context.scss';

const propTypes = {
  children: PropTypes.node.isRequired,

};
const Context = ({ children }) => (<p className={styles.context}>{children}</p>);
Context.propTypes = propTypes;

export default Context;
