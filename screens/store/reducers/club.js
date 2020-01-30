import { CLUB_ADD_DADOS, CLUB_ADD_DISPO} from '../actions/actionTypes'

const inicialState = {
    cep: null,
    nome: null,
    telefone: null,
    email: null,
    senha: null,
    num_quadras: null,
    aluguel: null,
    mensalidade: null
    
}

const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case CLUB_ADD_DADOS:
            return{
                ...state,
                cep: action.payload.cep,
                nome: action.payload.name,
                telefone: action.payload.telefone,
                email: action.payload.email,
                senha: action.payload.senha
            }
        case CLUB_ADD_DISPO:
            return {
                ...state,
                num_quadras: action.payload.num_quadras,
                aluguel: action.payload.aluguel,
                mensalidade: action.payload.mensalidade
            }
            default:
                return state
    }
}

export default reducer