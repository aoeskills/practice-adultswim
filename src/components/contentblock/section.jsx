import React from 'react';
import PropTypes from 'prop-types';
import styles from './fullPage.scss';

/**
 * 佔整個螢幕高與寬的layout。
 * 提供 alignH 設定水平對齊位置，有center與left兩個選項
 */
const FullPage = ({ children, alignH }) => (
  <div className={`${styles['full-page']} ${styles[alignH]}`}>
    {children}
  </div>
);

FullPage.propTypes = {
  children: PropTypes.node,
  alignH: PropTypes.string,
};
FullPage.defaultProps = {
  children: '',
  alignH: 'center',
};

export default FullPage;
