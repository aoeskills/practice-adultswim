import React from 'react';
import PropTypes from 'prop-types';
import styles from './lightText.scss';

const propTypes = {
  children: PropTypes.node.isRequired,

};
const LightText = ({ children }) => (<div className={styles['light-text']}>{children}</div>);
LightText.propTypes = propTypes;

export default LightText;
