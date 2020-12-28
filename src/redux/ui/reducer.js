import actionTypes from './actionTypes';

const initalState = { isCursorFlowered: false, logoColorClass: 'black', content: {} };

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FLOWER_CURSOR:
      return { ...state, isCursorFlowered: true };
    case actionTypes.COLLAPSE_CURSOR:
      return { ...state, isCursorFlowered: false };
    case actionTypes.CHANGE_LOGO_COLOR:
      return { ...state, logoColorClass: action.colorName };
    case actionTypes.UPDATE_CONTENT_STATE:
      return { ...state, content: { scrollTop: action.data.scrollTop } };

    default:
      return state;
  }
};

export default reducer;
