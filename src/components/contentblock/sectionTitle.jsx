import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  number: PropTypes.string,
};
const defaultProps = {
  number: false,
};
const SectionTitle = ({ children, number }) => (
  <div className={styles.titlebar} data-number={number}>{children}</div>
);
SectionTitle.propTypes = propTypes;
SectionTitle.defaultProps = defaultProps;

export default SectionTitle;
