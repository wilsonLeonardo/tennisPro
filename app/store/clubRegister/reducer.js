import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState =Immutable({
    data: []
});

export default function reduce(state = initialState, action = {}){
    switch (action.type) {
        case types.CLUB_ADD_DADOS:
            return state.merge({
                data: action.data
            });
        case types.CLUB_ADD_DISPO:
            return state.merge({
                data: state.data.action(action.dispo)
            })
            default:
                return state
    }
}