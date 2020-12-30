import React from 'react';
import PropTypes from 'prop-types';
import styles from './flex.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  alignH: PropTypes.string,
  alignV: PropTypes.string,
  wrap: PropTypes.bool,
};

const defaultProps = {
  alignH: 'center',
  alignV: 'center',
  wrap: false,
};

const FullWide = ({
  children, alignV, alignH, wrap,
}) => (
  <div className={`${styles['full-wide']} ${styles[`v-${alignV}`]} ${styles[`h-${alignH}`]} ${wrap ? styles.wrap : styles.nowrap}`}>
    {children}
  </div>
);
FullWide.propTypes = propTypes;
FullWide.defaultProps = defaultProps;

const HalfWide = ({
  children, alignV, alignH, wrap,
}) => (
  <div className={`${styles['half-wide']} ${styles[`v-${alignV}`]} ${styles[`h-${alignH}`]} ${wrap ? styles.wrap : styles.nowrap}`}>
    {children}
  </div>
);
HalfWide.propTypes = propTypes;
HalfWide.defaultProps = defaultProps;

const Flex = {
  FullWide,
  HalfWide,
};

export default Flex;
