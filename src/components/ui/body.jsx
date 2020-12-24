import React from 'react';
import PropTypes from 'prop-types';
import styles from './body.scss';

const Body = ({ children }) => (<div id={styles.body}>{children}</div>);

Body.propTypes = { children: PropTypes.node.isRequired };

export default Body;
