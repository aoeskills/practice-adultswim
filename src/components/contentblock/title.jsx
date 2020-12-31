import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const Title = ({ children }) => <div className={styles.title}>{children}</div>;
Title.propTypes = propTypes;

const TitleSmall = ({ children }) => <div className={styles['title-small']}>{children}</div>;
TitleSmall.propTypes = propTypes;
Title.Small = TitleSmall;

const TitleLarge = ({ children }) => <div className={styles['title-large']}>{children}</div>;
TitleLarge.propTypes = propTypes;
Title.Large = TitleLarge;

export default Title;
