import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    loading: false,
    games:[],
    pendingGames:[],
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.LOADING_GAME:
            return state.merge({
                loading: action.data.loading
            });
        case types.LOAD_GAME:
            return state.merge({
                games: action.game
            });
        case types.PENDING_GAME:
            return state.merge({
                pendingGames: action.pending
            });
        case types.GAME_CLEARING:
            return initialState;
        default:
            return state;
    }
}