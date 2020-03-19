import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    loading: false,
    avatarUri: null,
    user: null
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.USER_LOADING:
            return state.merge({
                loading: action.data.loading
            });
        case types.USER_LOADED:
            return state.merge({
                user: action.data.user
            });
        case types.USER_CLEARING:
            return initialState;
        default:
            return state;
    }
}