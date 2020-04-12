import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    loading: false,
    progressCamp: [],
    doneCamp:[],
    me:[]
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.CLUB_LOADING:
            return state.merge({
                loading: action.data.loading
            });
        case types.CAMP_LOADED:
            return state.merge({
                progressCamp: action.camp
            });
        case types.DONE_CAMP:
            return state.merge({
                doneCamp: action.doneCamp
            });
        case types.ME_CLUB:
            return state.merge({
                me: action.me
            });
        case types.CAMP_CLEARING:
            return initialState;
        default:
            return state;
    }
}