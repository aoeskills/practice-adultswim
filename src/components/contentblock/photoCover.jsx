import React from 'react';
import PropTypes from 'prop-types';
import Title from '@/components/contentblock/title';
import CursorTrigger from '@/components/ui/cursorTrigger';
import styles from './photoCover.scss';

const propTypes = {
  url: PropTypes.string.isRequired,
  imgurl: PropTypes.string.isRequired,
  title: PropTypes.string,
  context: PropTypes.string,
};

const defaultProps = {
  title: '',
  context: '',
};

const PhotoCover = ({
  imgurl, url, title, context,
}) => (
  <a href={url} className={styles.container}>
    <CursorTrigger url={url}>
      <div className={styles['image-box']}>
        <div className={styles.image} style={{ backgroundImage: `url(${imgurl})` }} />
        <div className={styles['image-filter']} />
      </div>

      <Title.Small>{title}</Title.Small>
      <div className={styles.context}>{context}</div>

    </CursorTrigger>
  </a>
);

PhotoCover.propTypes = propTypes;
PhotoCover.defaultProps = defaultProps;

export default PhotoCover;
