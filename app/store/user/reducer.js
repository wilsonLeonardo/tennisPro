import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    loading: false,
    avatarUri: null,
    teacher: [],
    games:[],
    pendingGames:[],
    statistic:[], 
    me:[], 
    meAccount:[],
    clubs:[], 
    myClubs: [],
    myCamps:[],
    camps:[]
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.USER_LOADING:
            return state.merge({
                loading: action.data.loading
            });
        case types.USER_LOADED:
            return state.merge({
                teacher: action.teacher
            });
        case types.LOAD_GAME:
            return state.merge({
                games: action.game
            });
        case types.LOAD_STATISTIC:
            return state.merge({
                statistic: action.statistic
            });
        case types.LOAD_ME:
            return state.merge({
                me: action.me
            });
        case types.LOAD_ACCOUNT:
            return state.merge({
                meAccount: action.meAccount
            });
        case types.RELOAD_IMAGE:
            return state.merge({
                avatarUri: action.media
            });
        case types.LOAD_CLUBS:
            return state.merge({
                clubs: action.clubs
            });
        case types.LOAD_MYCLUBS:
            return state.merge({
                myClubs: action.myClubs
            });
        case types.LOAD_MYCAMPS:
            return state.merge({
                myCamps: action.myCamps
            });
        case types.LOAD_CAMPS:
            return state.merge({
                camps: action.camps
            });
        case types.USER_CLEARING:
            return initialState;
        default:
            return state;
    }
}