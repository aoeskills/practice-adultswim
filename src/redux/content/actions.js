import actionTypes from './actionTypes';

const actions = {
  updateContent: (data) => ({
    type: actionTypes.UPDATE_CONTENT,
    data,
  }),
};

export default actions;
