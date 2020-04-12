import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    data: [],
    refreshing: false,
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.MESSAGES_FETCHED:
            return state.merge({
                data: action.messages,
                refreshing:false
            });
        case types.MESSAGES_REFRESHING:
            return state.merge({
                refreshing: action.refreshing,
            });
        case types.MESSAGES_CLEARING:
            return initialState;
        default:
            return state;
    }
}