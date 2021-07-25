import AppActionType from "./app.type";

export const onIncrement = () => ({
    type: AppActionType.INCREMENT_FROM_SAGA
});

export const onDecrement = () => ({
    type: AppActionType.DECREMENT_FROM_SAGA
});

