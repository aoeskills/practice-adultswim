import React from 'react';
import Background from '@/components/ui/background';
import Cursor from '@/components/ui/cursor';
import Openning from '@/components/ui/openning';
import Header from '@/components/ui/header';
import Menu from '@/components/ui/menu';
import Home from '@/components/page/home';
import Content from '@/components/ui/content';
import styles from './app.scss';

const App = () => (
  <div id={styles.App}>
    <Cursor />
    <Background />
    <Openning />
    <Menu />
    <Header />
    <Content>
      <Home />
    </Content>
  </div>
);

export default App;
