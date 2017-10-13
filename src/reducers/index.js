import {
    SEARCH_CHARACTERS_REQUEST, 
    SEARCH_CHARACTERS_SUCCESS, 
    SEARCH_CHARACTERS_ERROR
} from '../actions/index'; 

const initialState = {
    characters: [], 
    loading: false,  
    error: null
}

export function reducer(state=initialState, action){
    if(action.type === SEARCH_CHARACTERS_REQUEST){
        console.log('action ran'); 
        return Object.assign({}, state, {
            loading: true, 
            error: null
        })
    }
    if(action.type === SEARCH_CHARACTERS_SUCCESS){
        return Object.assign({}, state, {
            loading: false, 
            characters: action.characters
        })
    }
    if(action.type === SEARCH_CHARACTERS_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state; 
}