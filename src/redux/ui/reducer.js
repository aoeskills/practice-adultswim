import actionTypes from './actionTypes';

const initalState = {
  isCursorFlowered: false,
  logoColorClass: 'black',
  content: { scrollTop: 0, scrollOnEnd: false },
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FLOWER_CURSOR:
      return { ...state, isCursorFlowered: true };
    case actionTypes.COLLAPSE_CURSOR:
      return { ...state, isCursorFlowered: false };
    case actionTypes.CHANGE_LOGO_COLOR:
      return { ...state, logoColorClass: action.colorName };
    case actionTypes.UPDATE_CONTENT_STATE:
      return {
        ...state,
        content: {
          // old content
          ...state.content,

          // new content
          ...{
            ...(action.data.scrollTop !== undefined && { scrollTop: action.data.scrollTop }),
            ...(
              action.data.scrollOnEnd !== undefined
              && { scrollOnEnd: action.data.scrollOnEnd }
            ),
          },
        },
      };

    default:
      return state;
  }
};

export default reducer;
