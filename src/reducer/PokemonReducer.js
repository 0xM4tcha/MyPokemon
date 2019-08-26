import uuid from 'uuid/v1'
export const PokemonReducer = (state, action) => {
    switch(action.type){
        case 'ADD_POKEMON':
            return [...state, {
                nickname:action.myPokemon.nickname,
                id:uuid(),
                idPok:action.myPokemon.idPok
            }]
        case 'REMOVE_BOOK' :
            return state.filter(myPokemon => myPokemon.id != action.id)
        default:
            return state       
    }
}