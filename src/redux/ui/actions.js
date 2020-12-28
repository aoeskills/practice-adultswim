import actionTypes from './actionTypes';

const actions = {
  flowerCursor: () => ({
    type: actionTypes.FLOWER_CURSOR,
  }),
  collapseCursor: () => ({
    type: actionTypes.COLLAPSE_CURSOR,
  }),
  changeLogoColor: (colorName) => ({
    type: actionTypes.CHANGE_LOGO_COLOR,
    colorName,
  }),
  updateContent: (data) => ({
    type: actionTypes.UPDATE_CONTENT_STATE,
    data,
  }),

};

export default actions;
