import {type} from './Type'

const inittialState = {
    typeData:""
}

const Reducer = (state = inittialState, action )=>{
    switch(action.type){
        case type:
            return {
                typeData:action.data     
            }
        default : return state 
    }
}

export default Reducer