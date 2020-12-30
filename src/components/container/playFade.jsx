import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './playFade.scss';

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
const PlayFade = ({
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
      className={`${styles['play-fade']} ${(trans ^ isRendered) ? '' : styles.trans}`}
    >
      {children}
    </div>
  );
};
PlayFade.defaultProps = defaultProps;
PlayFade.propTypes = propTypes;

export default PlayFade;
