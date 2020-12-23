import React, { useCallback, useEffect, useState } from 'react';
import Logo from '@/images/logo.svg';
import LogoCover from '@/images/logoCover.svg';
import styles from './openning.scss';

const Openning = () => {
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const animatedRef = useCallback((node) => {
    if (node !== null) {
      node.addEventListener('animationend', () => {
        setIsAnimationEnd(true);
      });
    }
    return node;
  });
  if (isAnimationEnd) return (<div />);
  return (
    <div id={styles.openning}>
      {/* 擦出動畫 */}
      <div ref={animatedRef} id={styles.wipeOut}>
        <div id={styles.wipeOutChild}>
          {/* 遮罩頁面 */}
          <div id={styles.pageCover}>
            <div id={styles.pageCoverTop} />
            <div id={styles.pageCoverBottom} />
            <div id={styles.pageCoverLeft} />
            <div id={styles.pageCoverRight} />
            <LogoCover id={styles.logoCover} />
          </div>
        </div>
      </div>

      {/* 描線動畫 */}
      <div id={styles.logoContainer}>
        <Logo id={styles.logo} />
      </div>
    </div>
  );
};

export default Openning;
