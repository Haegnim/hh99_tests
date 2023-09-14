const ISDONE = 'selectChange/WORKING';

export const isDone = (item) => ({ type: ISDONE, item });

const initialState = {
    isdone: 'all',
};
function workState(state = initialState, action) {
    switch (action.type) {
        case ISDONE:
            return {
                isdone: action.item,
            };
        default:
            return state;
    }
}

export default workState;
