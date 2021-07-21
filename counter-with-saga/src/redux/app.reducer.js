const INITIAL_STATE = {
value: 0
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'INCREMENT_FROM_SAGA':
            return {
                ...state,
                value: state.value + 1
            };
        case 'DECREMENT_FROM_SAGA':
            return {
                ...state,
                value: state.value=== 0 ? 0 : state.value - 1
            };
        default:
            return state;
    }
};

export default appReducer;