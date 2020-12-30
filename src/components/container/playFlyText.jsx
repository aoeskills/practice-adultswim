import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './playFlyText.scss';

// 定義props
const propTypes = {
  trans: PropTypes.bool,
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};
const defaultProps = {
  trans: false,
  duration: 0.3,
  delay: 0,
};

/**
 * 呈現擦入擦出動畫
 */
const PlayFlyText = ({
  trans, children, duration, delay,
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const ref = useCallback((node) => {
    if (node !== null) {
      setIsRendered(true);
    }
    return node;
  }, [children]);

  return (
    <div
      ref={ref}
      style={
        {
          transitionDelay: `${delay}s`,
          transitionDuration: `${duration}s`,
        }
  }
      className={`${styles['play-fly-text']} ${(trans ^ isRendered) ? '' : styles.trans}`}
    >
      {children}
    </div>
  );
};
PlayFlyText.defaultProps = defaultProps;
PlayFlyText.propTypes = propTypes;

export default PlayFlyText;
