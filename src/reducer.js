import {DEC,INC,RESET} from "./actions";



// reducer
export default function reducer(state,action){
  
    switch(action.type){
      
      case INC:
        return{
        }
  
      case DEC:
        return{
        }
  
      case RESET:
        return{
        }    
      
      default:
        return state
    }
    return state
  }