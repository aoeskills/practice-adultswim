import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './cursor.scss';

const mapToState = (state) => ({
  isCursorFlowered: state.ui.isCursorFlowered,
});

const Component = ({ isCursorFlowered }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [display, setDisplay] = useState(false);

  // 如果滑鼠移動時更新component的x與y位置
  // 滑鼠不在螢幕上時不顯示光標
  useEffect(() => {
    const moveCallBack = (e) => {
      setPos({ x: e.pageX, y: e.pageY });
    };
    const enterCallBack = () => {
      setDisplay(true);
    };
    const leaveCallBack = () => {
      setDisplay(false);
    };

    // 設置監聽器
    document.body.addEventListener('mousemove', moveCallBack);
    document.body.addEventListener('mouseenter', enterCallBack);
    document.body.addEventListener('mouseleave', leaveCallBack);

    // 移除監聽器
    return () => {
      document.body.removeEventListener('mousemove', moveCallBack);
      document.body.removeEventListener('mouseenter', enterCallBack);
      document.body.removeEventListener('mouseleave', leaveCallBack);
    };
  }, []);

  return (
    <div
      id={styles.cursor}
      className={display ? styles.display : styles.hidden}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div id={styles.dot} className={isCursorFlowered ? styles.hidden : ''} />

      {/* 展開cursor，讓使用者的hover有反應 */}
      <div id={styles.flower} className={!isCursorFlowered ? styles.hidden : ''} />
    </div>
  );
};

Component.propTypes = {
  isCursorFlowered: PropTypes.bool.isRequired,
};

const Cursor = connect(mapToState)(Component);
export default Cursor;
