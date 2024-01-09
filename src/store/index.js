import {createStore} from 'redux'

const countReducer = (state ={count:0},action)=>{
    if(action.type === 'inc'){
        return {
            counter:state.count + 1
        }
    }

    if(action.type === 'dec'){
        return {
            counter:state.count - 1
        }
    }

    return state;

}


const store = createStore(countReducer)

export default store;