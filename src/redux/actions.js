import actionTypes from '@/redux/actionTypes';

const actions = {
  uiFlowerCursor: () => ({
    type: actionTypes.UI_FLOWER_CURSOR,
  }),
  uiCollapseCursor: () => ({
    type: actionTypes.UI_COLLAPSE_CURSOR,
  }),
  uiChangeLogoColor: (colorName) => ({
    type: actionTypes.UI_CHANGE_LOGO_COLOR,
    colorName,
  }),

};

export default actions;
