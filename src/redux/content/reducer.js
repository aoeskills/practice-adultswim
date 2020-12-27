import actionTypes from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CONTENT:
      return { scrollTop: action.data.scrollTop };

    default:
      return state;
  }
};

export default reducer;
