import { ADD_TO_LIKES ,DELETE_TO_LIKES} from "../action/index.js";
import { intialState } from "../store/index.js";


const myReducer =(state=intialState,action)=>{
switch(action.type){
    case ADD_TO_LIKES:
      return {
        ...state,
        favourites: {
          ...state.favourites, likes: [...state.favourites.likes, action.payload], 
      },
    }
    case DELETE_TO_LIKES:
        return{
            ...state,
            favourites: {
                ...state.favourites,
               
                likes: state.favourites.likes.filter((el, i)=>i !== action.payload) 

               
            },
        }
    default:
        return state
}
}

export default myReducer