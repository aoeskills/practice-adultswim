import React from 'react';
import PropTypes from 'prop-types';
import CursorTrigger from '@/components/ui/cursorTrigger';
import styles from './guildLink.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
};
const defaultProps = {
  url: '',
};
const GuildLink = ({ children, url }) => (
  <CursorTrigger>
    <a href={url} className={styles['guild-link']}>
      <div className={styles['motion-line']} />
      <div className={styles.content}>
        {children}
      </div>
    </a>
  </CursorTrigger>
);

GuildLink.propTypes = propTypes;
GuildLink.defaultProps = defaultProps;

export default GuildLink;
