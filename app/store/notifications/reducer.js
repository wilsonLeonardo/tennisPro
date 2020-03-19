import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    messages: 0
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.NOTIFICATIONS_FETCHED:
            return state.merge({
                messages: action.data && action.data.messages ? Object.keys(action.data.messages).length : 0
            });
        default:
            return state;
    }
}