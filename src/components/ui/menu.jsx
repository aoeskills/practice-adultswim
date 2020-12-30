import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CursorTrigger from '@/components/ui/cursorTrigger';
import NavItem from '@/components/ui/navItem';
import Logo from '@/images/logo.svg';
import actions from '@/redux/ui/actions';
import styles from './menu.scss';

const mapToDispatch = {
  changeLogoColor: actions.changeLogoColor,
};

const menuPropTypes = {
  changeLogoColor: PropTypes.func.isRequired,
};

const Component = ({ changeLogoColor }) => {
  // 漢堡與menu互動需要用state溝通
  const [displayMenu, setDisplayMenu] = useState(false);
  const handleToggleMenu = (event) => {
    // 如果是keyboartEvent
    if (event.type === 'keypress') {
      switch (event.keyCode) {
        case 32:
        case 13:
          break;
        default: return;
      }
    } else if (event.type !== 'click') return;
    setDisplayMenu(!displayMenu);
  };

  // 在state改變時同時改變header logo的顏色
  useEffect(() => {
    if (displayMenu) changeLogoColor('white');
    else changeLogoColor('black');
  }, [displayMenu]);

  // menu 淡出時因動畫需求所以最後才幫他加上display:none;
  const menuRef = useCallback((node) => {
    if (node !== null) {
      if (displayMenu) {
        node.classList.remove(styles.displaynone);
        node.setAttribute('data-display', 'true');
      } else {
        const animationListener = () => {
          // 判斷動畫結束前displayMenu依然是false的狀態才增加displaynone
          // 直接判斷 displayMenu 無用，不論如何都會得到false
          if (node.dataset.display === 'false') node.classList.add(styles.displaynone);
        };
        node.setAttribute('data-display', 'false');
        node.addEventListener('animationend', animationListener);
      }
    }
    return node;
  });

  return (
    <div>
      {/* 漢堡 */}
      <CursorTrigger>
        <div role="button" tabIndex="-1" id={styles.menuHandle} className={displayMenu ? styles.triggered : ''} onClick={handleToggleMenu} onKeyPress={handleToggleMenu}>
          <div className={styles.buggerline} />
          <div className={styles.buggerline} />
          <div className={styles.buggerline} />
        </div>
      </CursorTrigger>

      {/* menu本身 */}
      <div ref={menuRef} id={styles.menu} className={displayMenu ? styles.display : ''}>
        {/* 背景描線logo */}
        <Logo id={styles.backgroundSVG} />
        <div id={styles.menuContent}>
          <ul id={styles.nav}>
            <NavItem link="#service">
              SERVICE
            </NavItem>
            <NavItem link="#show">
              SHOWS
            </NavItem>
            <NavItem link="#podcast">
              PODCAST
            </NavItem>
            <NavItem link="#games">
              GAMES
            </NavItem>
          </ul>

          <div id={styles.infos}>
            A practice project References:
            <p className={styles['info-line']}>
              Brand
              {' '}
              <a className={styles['info-link']} href="https://www.adultswim.com/" rel="noreferrer" target="_blank">Adultswim</a>
            </p>
            <p className={styles['info-line']}>
              Web design
              {' '}
              <a className={styles['info-link']} href="https://rescalar.co.jp/" rel="noreferrer" target="_blank">Rescalar</a>
            </p>
            <p className={styles['info-line']}>
              Background video
              {' '}
              <a className={styles['info-link']} href="https://www.youtube.com/channel/UC6qEdtxp_IAaVrNAHUIhHbQ" rel="noreferrer" target="_blank">Maths Town</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = menuPropTypes;

const Menu = connect(null, mapToDispatch)(Component);

export default Menu;
