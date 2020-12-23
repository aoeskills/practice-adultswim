import React from 'react';
import Background from '@/components/background';
import Cursor from '@/components/cursor';
import styles from './app.scss';

const App = () => (
  <div id={styles.App}>
    <Cursor />
    <Background />
  </div>
);

export default App;
