import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './content.scss';

/**
 * 呈現每一頁不同的內容，並提供 scrollbar
 */
const Content = ({ children }) => {
  // 計算 scrollbar 進度
  const [percent, setPercent] = useState(0);
  const handleScroll = (e) => {
    setPercent(
      Math.ceil((e.target.scrollTop * 100) / (e.target.scrollHeight - e.target.offsetHeight)),
    );
  };
  return (
    <div id={styles.content} onScroll={handleScroll}>
      <div id={styles.scroll}>
        <div id={styles.scrollFill} style={{ height: `${percent}%` }} />
      </div>
      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node,
};
Content.defaultProps = {
  children: '',
};
export default Content;
