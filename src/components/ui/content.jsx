import React, { useEffect, useRef, useState } from 'react';
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
  const ref = useRef();
  const handleScroll = () => {
    if (ref.current === null) return;
    const node = ref.current;
    const scrollOnEnd = (node.scrollTop > (node.scrollHeight - node.offsetHeight - 10));
    setPercent(
      Math.ceil((node.scrollTop * 100) / (node.scrollHeight - node.offsetHeight)),
    );
    // 更新state
    update({ scrollTop: node.scrollTop, scrollOnEnd });

    // 偵測是否要變換主題
    if (scrollOnEnd) document.body.setAttribute('data-theme', 'dark');
    else document.body.removeAttribute('data-theme');
  };
  useEffect(() => {
    document.body.addEventListener('resize', handleScroll);
    return () => {
      document.body.removeEventListener('resize', handleScroll);
    };
  }, []);
  return (
    <div ref={ref} id={styles.content} onScroll={handleScroll}>
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
