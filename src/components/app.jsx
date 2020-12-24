import React from 'react';
import Background from '@/components/ui/background';
import Cursor from '@/components/ui/cursor';
import Openning from '@/components/ui/openning';
import Body from '@/components/ui/body';
import Header from '@/components/ui/header';
import Menu from '@/components/ui/menu';
import styles from './app.scss';

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
