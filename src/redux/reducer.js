import actionTypes from '@/redux/actionTypes';

const initalState = { isCursorFlowered: false };

const reducer = (state = initalState, action) => {
  switch (action.type) {
    // UI相關
    case actionTypes.UI_FLOWER_CURSOR:
      return { isCursorFlowered: true };
    case actionTypes.UI_COLLAPSE_CURSOR:
      return { isCursorFlowered: false };
    default: return state;
  }
};

export default reducer;
