import {createStore} from "redux"
import myReducer from "../reducer"

export const intialState = {
    favourites:{
        likes:[],
    },
}

const store = createStore(myReducer,intialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store