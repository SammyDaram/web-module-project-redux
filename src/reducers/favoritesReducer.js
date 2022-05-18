import { TOGGLE_FAVORITE, ADD_FAVORITE, REMOVE_FAVORITE} from './../actions/favoritesActions'
const initialState = {
    favorite: [{title: "Movie", id:1}],
    displayFavorite: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case(TOGGLE_FAVORITE): {
            return {
                ...state,
                displayFavorite: !state.displayFavorite
            }
    }
        case(ADD_FAVORITE): {
            return{
                ...state,
                favorites: [...state.favorite, action.payload]
            }
        }
        case(REMOVE_FAVORITE): {
            return {
                ...state
                favorites: state.filter(item=>(item.id !== action.payload))
            }
        }
       default:
           return(state);
    }
}

export default favoritesReducer;