import React from 'react';
import Background from '@/components/background';
import Cursor from '@/components/cursor';
import Body from '@/components/body';
import styles from './app.scss';

const App = () => (
  <div id={styles.App}>
    <Cursor />
    <Background />
    <Body />
  </div>
);

export default App;
