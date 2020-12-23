import React, { useEffect } from 'react';
import Logo from '@/images/logo.svg';
import LogoCover from '@/images/logoCover.svg';
import styles from './openning.scss';

const Openning = () => {
  useEffect(() => {

  });
  return (
    <div id={styles.openning}>
      {/* 擦出動畫 */}
      <div id={styles.wipeOut}>
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
