import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.scss';

const SectionBackground = ({
  children, alignH, alignV, padding,
}) => (
  <div
    className={`
    ${styles['section-background']}
    ${styles[`v-${alignV}`]}
    ${styles[`h-${alignH}`]}
    ${padding ? styles.padding : ''}
    `}
  >
    {children}
  </div>
);

SectionBackground.propTypes = {
  children: PropTypes.node,
  alignH: PropTypes.string,
  alignV: PropTypes.string,
  padding: PropTypes.bool,
};
SectionBackground.defaultProps = {
  children: '',
  alignH: 'center',
  alignV: 'center',
  padding: true,
};

export default SectionBackground;
