import React, { useEffect, useState } from 'react';
import LogoCover from '@/images/logoCover.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './background.scss';
//    <iframe title="backgroundVideo" width="1280" height="720" src="https://www.youtube.com/embed/wycjnCCgUes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
const videoIDs = ['pCpLWbHVNhk', 'u1pwtSBTnPU', 'FX0GzeY3BDM'];
const videoWeighting = [0, 0, 0, 1, 1, 2];
const Video = React.memo(() => (
  <iframe
    title="background-video"
    src={`https://www.youtube.com/embed/${videoIDs[videoWeighting[Math.floor(Math.random() * 10) % 6]]}?autoplay=1&mute=1&start=${Math.floor(Math.random() * 180 + 20)}&loop=1`}
    frameBorder="0"
    allow=""
  />
));
const mapToState = (state) => ({
  scrollTop: state.ui.content.scrollTop,
  scrollOnEnd: state.ui.content.scrollOnEnd,
});
const propTypes = {
  scrollTop: PropTypes.number.isRequired,
  scrollOnEnd: PropTypes.bool.isRequired,
};
const Component = ({ scrollTop, scrollOnEnd }) => {
  const [strongFilter, setStrongFilter] = useState(false);
  useEffect(() => {
    if (scrollTop >= 10 && !scrollOnEnd) setStrongFilter(true);
    else setStrongFilter(false);
  }, [scrollOnEnd, scrollTop]);
  return (
    <div id={styles.background}>
      <div id={styles.centerBox}>
        <div id={styles.backgroundVideo}>
          <Video />
        </div>
        <div id={styles.videoFilter} className={strongFilter ? styles.strong : ''} />
        <div id={styles.cover}>
          <LogoCover id={styles.svg} />
        </div>
      </div>
    </div>
  );
};
Component.propTypes = propTypes;

const Background = connect(mapToState)(Component);
export default Background;
