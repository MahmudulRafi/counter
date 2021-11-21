import { ActionTypes } from "../constants/actionTypes";

export const addNewCounter = () => {
    return {
        type: ActionTypes.ADD_NEW_COUNTER,
        payload: {
            id: Math.floor(Math.random() * 1000),
            value: 0,
        },
    };
};

export const resetAllCounters = () => {
    return {
        type: ActionTypes.RESET_ALL_COUNTERS,
    };
};

export const deleteAllCounters = () => {
    return {
        type: ActionTypes.DELETE_ALL_COUNTERS,
    };
};

export const incrementCounter = (counterId) => {
    return {
        type: ActionTypes.INCREMENT_COUNTER,
        payload: {
            id: counterId,
        },
    };
};

export const decrementCounter = (counterId) => {
    return {
        type: ActionTypes.DECREMENT_COUNTER,
        payload: {
            id: counterId,
        },
    };
};

export const resetCounter = (counterId) => {
    return {
        type: ActionTypes.RESET_COUNTER,
        payload: {
            id: counterId,
        },
    };
};

export const deleteCounter = (counterId) => {
    return {
        type: ActionTypes.DELETE_COUNTER,
        payload: {
            id: counterId,
        },
    };
};
