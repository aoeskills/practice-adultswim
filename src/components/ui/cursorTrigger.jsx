import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import actions from '@/redux/actions';
import { connect } from 'react-redux';

const mapToDispatch = {
  flowerCursor: actions.uiFlowerCursor,
  collpaseCursor: actions.uiCollapseCursor,
};

// 游標進出cursorTrigger(互動按鈕)時改變ui state讓游標知道需要改變型態
const Component = ({ children, flowerCursor, collpaseCursor }) => {
  // 設定ref與需要的監聽器
  const [buttonContainerDom, setButtonContainerDom] = useState(null);
  const buttonContainerRef = useCallback((node) => {
    // 監聽器
    const mouseEnterListener = () => {
      flowerCursor();
    };
    const mouseLeaveListener = () => {
      collpaseCursor();
    };
    // 移除監聽器
    if (buttonContainerDom !== null) {
      buttonContainerDom.removeEventListener('mouseenter', mouseEnterListener);
      buttonContainerDom.removeEventListener('mouseleave', mouseLeaveListener);
    }
    setButtonContainerDom(node);
    // 增加監聽器
    if (node !== null) {
      node.addEventListener('mouseenter', mouseEnterListener);
      node.addEventListener('mouseleave', mouseLeaveListener);
    }
    return node;
  }, []);

  return (
    <div ref={buttonContainerRef} style={{ userSelect: 'none' }}>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node.isRequired,
  flowerCursor: PropTypes.func.isRequired,
  collpaseCursor: PropTypes.func.isRequired,
};

const CursorTrigger = connect(null, mapToDispatch)(Component);

export default CursorTrigger;
