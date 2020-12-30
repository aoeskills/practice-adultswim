import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.scss';

/**
 * 佔整個螢幕高與寬的layout。
 * 提供 alignH 設定水平對齊位置，有center與left兩個選項
 */
const Section = ({
  children, size, alignH, alignV, title, padding,
}) => (
  <div
    className={`
    ${styles.section}
    ${styles[size]}
    ${styles[`v-${alignV}`]}
    ${styles[`h-${alignH}`]}
    ${padding ? styles.padding : ''}
    `}
  >
    {title !== '' ? <div className={styles.titlebar}>{title}</div> : null}
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  alignH: PropTypes.string,
  alignV: PropTypes.string,
  title: PropTypes.string,
  padding: PropTypes.bool,
};
Section.defaultProps = {
  children: '',
  size: 'full',
  alignH: 'center',
  alignV: 'center',
  title: '',
  padding: true,
};

export default Section;
