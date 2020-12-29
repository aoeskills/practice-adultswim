import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './playWipe.scss';

// 定義props
const propTypes = {
  isWipeOut: PropTypes.bool,
  fromDirection: PropTypes.string,
  trans: PropTypes.bool,
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};
const defaultProps = {
  isWipeOut: false,
  fromDirection: 'left',
  trans: false,
  duration: 0.3,
  delay: 0,
};

/**
 * 呈現擦入擦出動畫
 */
const PlayWipe = ({
  isWipeOut, fromDirection, trans, children,
  delay, duration,
}) => {
  // 利用overflow:hidden完成動畫，需要知道children render後的高與寬
  // 有三層div包著children。第一層固定與父component的位置，第二層負責用overflow遮蓋，第三層負責讓children不會變形

  const [fullSizeStyle, setFullSizeStyle] = useState({});
  // 這個state確保children已經render才幫他加變化過的style，讓css的transition可以作用
  const [isRendered, setIsRendered] = useState(false);
  const containerRef = useCallback((node) => {
    if (node !== null) {
      setIsRendered(true);
      setFullSizeStyle({
        width: node.offsetWidth,
        height: node.offsetHeight,
      });
    } else {
      setFullSizeStyle({ });
    }
    return node;
  }, [children]);

  return (
    <div className={styles['do-wipe']} style={fullSizeStyle}>
      <div
        className={`${isWipeOut ? styles['wipe-out'] : styles['wipe-in']} ${styles[fromDirection]} ${(trans && isRendered) ? styles.trans : ''}`}
        style={
          {
            ...fullSizeStyle,

            transitionDelay: `${delay}s`,
            transitionDuration: `${duration}s`,
          }
        }
      >
        <div ref={containerRef} className={styles.container}>
          {children}
        </div>
      </div>
    </div>
  );
};
PlayWipe.defaultProps = defaultProps;
PlayWipe.propTypes = propTypes;

export default PlayWipe;
