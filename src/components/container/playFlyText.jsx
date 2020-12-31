import React, { useState, useEffect } from 'react';
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
  duration: 0.2,
  delay: 0,
};

const processChildren = (children, number) => {
  if (children.length === undefined) return (<span className={`${styles['single-text']} ${styles.trans}`}>{children}</span>);

  return children.map((child, index) => {
    if (index >= number) return (<span className={styles['single-text']}>{child}</span>);
    return (<span className={`${styles['single-text']} ${styles.trans}`}>{child}</span>);
  });
};

/**
 * 呈現擦入擦出動畫
 */
const PlayFlyText = ({
  trans, children, duration, delay,
}) => {
  const [currentNumber, setCurrentNumber] = useState(trans ? children.length : 0);
  const [countTimeoutID, setCountTimeoutID] = useState(() => {});
  function increase() {
    if (children.length === undefined || currentNumber >= children.length) {
      return;
    }
    setCurrentNumber(currentNumber + 1);
  }
  function decrease() {
    if (children.length === undefined || currentNumber <= 0) {
      return;
    }
    setCurrentNumber(currentNumber - 1);
  }

  useEffect(() => {
    clearTimeout(countTimeoutID);
    if (children.length === undefined) return;
    const timeoutTime = ((duration * 1000) / children.length);
    if (trans && currentNumber < children.length) {
      setCountTimeoutID(setTimeout(increase, timeoutTime));
    }
    if (!trans && currentNumber > 0) {
      setCountTimeoutID(setTimeout(decrease, timeoutTime));
    }
  }, [children, trans, currentNumber]);

  return (
    <div
      style={
        {
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }
  }
    >
      {processChildren(children, currentNumber)}
    </div>
  );
};
PlayFlyText.defaultProps = defaultProps;
PlayFlyText.propTypes = propTypes;

export default PlayFlyText;
