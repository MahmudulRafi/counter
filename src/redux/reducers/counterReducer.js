import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    counters: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ],
};

export default function counterReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case ActionTypes.ADD_NEW_COUNTER:
            state = { ...state, counters: [...state.counters, payload] };
            return state;

        case ActionTypes.RESET_ALL_COUNTERS:
            const allCounterReset = state.counters.map((counter) => {
                const obj = { id: counter.id, value: 0 };
                return obj;
            });
            state = { ...state, counters: allCounterReset };
            return state;

        case ActionTypes.DELETE_ALL_COUNTERS:
            state = { ...state, counters: [] };
            return state;

        case ActionTypes.INCREMENT_COUNTER:
            const incrementCounter = state.counters.map((counter) => {
                if (counter.id === payload.id)
                    return { id: counter.id, value: counter.value + 1 };
                else return counter;
            });
            state = { ...state, counters: incrementCounter };
            return state;

        case ActionTypes.DECREMENT_COUNTER:
            const decrementCounter = state.counters.map((counter) => {
                if (counter.id === payload.id && counter.value > 0)
                    return { id: counter.id, value: counter.value - 1 };
                else return counter;
            });
            state = { ...state, counters: decrementCounter };
            return state;

        case ActionTypes.RESET_COUNTER:
            const resetCounter = state.counters.map((counter) => {
                if (counter.id === payload.id)
                    return { id: counter.id, value: 0 };
                else return counter;
            });
            state = { ...state, counters: resetCounter };
            return state;

        case ActionTypes.DELETE_COUNTER:
            const deleteCounter = state.counters.filter((counter) => {
                if (counter.id !== payload.id) return counter;
            });
            state = { ...state, counters: deleteCounter };
            return state;

        default:
            return state;
    }
}
