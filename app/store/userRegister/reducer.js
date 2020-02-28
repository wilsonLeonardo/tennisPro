import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    data: []
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.USER_ADD_NIVEL:
            return state.merge({
                data: state.data.concat(action.nivel)
            })
        case types.USER_ADD_DADOS:
            return state.merge({
                data: state.data.concat(action.data)
            })
        case types.USER_ADD_PLANS:
            return state.merge({
                data: state.data.concat(action.plans)
            })    
        case types.USER_ADD_DISPO:
            return state.merge({
                data: state.data.concat(action.disp)
            })
        default:
            return state
    }

}