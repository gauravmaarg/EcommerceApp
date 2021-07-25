import AppActionType from "./app.type";

const INITIAL_STATE = {
value: 0
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case AppActionType.INCREMENT_FROM_SAGA:
            return {
                ...state,
                value: state.value + 1
            };
        case AppActionType.DECREMENT_FROM_SAGA:
            return {
                ...state,
                value: state.value=== 0 ? 0 : state.value - 1
            };
        default:
            return state;
    }
};

export default appReducer;