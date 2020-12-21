import React from 'react';
import ReactDom from 'react-dom';
import SayHello from '@/components/sayhello';
import styles from './index.scss';

const Main = () => (
  <div id={styles.header}>
    <SayHello />
  </div>
);

ReactDom.render(<Main />, document.getElementById('root'));
