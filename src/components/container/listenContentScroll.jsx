import is from '@/utils/is';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapToState = (state) => ({
  scrollTop: state.ui.content.scrollTop,
});
// e04 兩個anti pattern
// object prop is forbidden
// no props spread
const propTypes = {
  MidComponent: PropTypes.func.isRequired,
  defMidProps: PropTypes.object.isRequired,
  stateToMidProp: PropTypes.func.isRequired,
  children: PropTypes.node,
  scrollTop: PropTypes.number.isRequired,
};
const defaultProps = {
  children: '',
};
const Component = ({
  MidComponent, defMidProps, stateToMidProp, children, scrollTop,
}) => {
  const ref = useRef();
  const [isEnterScreen, setIsEnterScreen] = useState(false);

  useEffect(() => {
    if (is(ref.current, 'onScreen')) setIsEnterScreen(true);
    else setIsEnterScreen(false);
  }, [scrollTop]);

  const state = {
    isEnterScreen,
  };
  const newMidProps = stateToMidProp(state);
  const midProps = { ...defMidProps, ...newMidProps };

  return (
    <div ref={ref}>
      <MidComponent {...midProps}>
        {children}
      </MidComponent>
    </div>
  );
};
Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

const ListenContentScroll = connect(mapToState)(Component);

export default ListenContentScroll;
