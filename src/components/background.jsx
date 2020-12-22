import React from 'react';
import LogoCover from '@/images/logoCover.svg';
import styles from './background.scss';
//    <iframe title="backgroundVideo" width="1280" height="720" src="https://www.youtube.com/embed/wycjnCCgUes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
const videoIDs = ['pCpLWbHVNhk', 'u1pwtSBTnPU', 'FX0GzeY3BDM'];
const videoWeighting = [0, 0, 0, 1, 1, 2];
const Background = () => (
  <div id={styles.background}>
    <div id={styles.centerBox}>
      <div id={styles.backgroundVideo}>
        <iframe title="background-video" src={`https://www.youtube.com/embed/${videoIDs[videoWeighting[Math.floor(Math.random() * 10) % 6]]}?autoplay=1&mute=1&start=${Math.floor(Math.random() * 180 + 20)}&loop=1`} frameBorder="0" allow="" />
      </div>
      <div id={styles.cover}>
        <LogoCover id={styles.svg} />
      </div>
    </div>
  </div>
);

export default Background;
