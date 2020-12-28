import ui from '@/redux/ui/reducer';

const initalState = { isCursorFlowered: false, logoColorClass: 'black', content: {} };

const reducer = (state = initalState, action) => ({ ui: ui(state.ui, action) });

export default reducer;
