import actionTypes from '@/redux/actionTypes';
import contentReducer from './content/reducer';

const initalState = { isCursorFlowered: false, logoColorClass: 'black', content: {} };

const reducer = (state = initalState, action) => {
  switch (action.type) {
    // UI相關
    case actionTypes.UI_FLOWER_CURSOR:
      return { ...state, isCursorFlowered: true };
    case actionTypes.UI_COLLAPSE_CURSOR:
      return { ...state, isCursorFlowered: false };
    case actionTypes.UI_CHANGE_LOGO_COLOR:
      return { ...state, logoColorClass: action.colorName };

    default:
      return { ...state, content: contentReducer(state.content, action) };
  }
};

export default reducer;
