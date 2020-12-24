import React from 'react';
import Background from '@/components/background';
import Cursor from '@/components/cursor';
import Openning from '@/components/openning';
import Body from '@/components/body';
import styles from './app.scss';
import Header from './header';
import Menu from './menu';

const App = () => (
  <div id={styles.App}>
    <Cursor />
    <Background />
    <Body>
      <Menu />
      <Header />
      <Openning />
    </Body>
  </div>
);

export default App;
