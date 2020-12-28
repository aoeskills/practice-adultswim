import React, { useState } from 'react';
import PropTypes from 'prop-types';
import actions from '@/redux/ui/actions';
import { connect } from 'react-redux';
import styles from './content.scss';

/**
 * 呈現每一頁不同的內容，並提供 scrollbar
 */
const mapToDispatch = {
  update: actions.updateContent,
};
const propTypes = {
  children: PropTypes.node,
  update: PropTypes.func.isRequired,
};
const defaultProps = {
  children: '',
};
const Component = ({ update, children }) => {
  // 為 scrollBar 計算 scrollbar 進度
  const [percent, setPercent] = useState(0);
  const handleScroll = (e) => {
    setPercent(
      Math.ceil((e.target.scrollTop * 100) / (e.target.scrollHeight - e.target.offsetHeight)),
    );
    // 更新state
    update({ scrollTop: e.target.scrollTop });
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

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

const Content = connect(null, mapToDispatch)(Component);

export default Content;
