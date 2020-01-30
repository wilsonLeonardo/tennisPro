import { USER_ADD_DADOS, USER_ADD_NIVEL, USER_ADD_DISPO, USER_ADD_PLANS } from '../actions/actionTypes'

const inicialState = {
    cep: null,
    clube: null,
    email: null,
    senha: null,
    entrada: null,
    saida: null,
    niveis: {
        especialPro: null,
        especial: null,
        interA: null,
        interB: null,
        interC: null,
        principiante: null,
        iniciante: null
    },
    plans: {
        bronze: null,
        gold: null,
        silver: null
    },
    diasDaSemana: {
        seg: null,
        ter: null,
        qua: null,
        qui: null,
        sex: null,
        sab: null,
        dom: null
    }
}

const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case USER_ADD_NIVEL:
            return {
                ...state,
                niveis: {
                    especialPro: action.payload.especialPro,
                    especial: action.payload.especial,
                    interA: action.payload.interA,
                    interB: action.payload.interB,
                    interC: action.payload.interC,
                    principiante: action.payload.principiante,
                    iniciante: nuaction.payload.iniciante
                }
            }
        case USER_ADD_DADOS:
            return {
                ...state,
                cep: action.payload.cep,
                clube: action.payload.clube,
                email: action.payload.email,
                senha: action.payload.senha
            }
        case USER_ADD_PLANS:
            return{
                ...state,
                plans: {
                    bronze: action.payload.bronze,
                    gold: action.payload.gold,
                    silver: action.payload.silver
                }
            }

        case USER_ADD_DISPO:
            return {
                ...state,
                entrada: action.payload.entrada,
                saida: action.payload.saida,
                diasDaSemana: {
                    seg: action.payload.seg,
                    ter: action.payload.ter,
                    qua: action.payload.qua,
                    qui: action.payload.qui,
                    sex: action.payload.sex,
                    sab: action.payload.sab,
                    dom: action.payload.dom
                }
            }
        default:
            return state
    }
}

export default reducer