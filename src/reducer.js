import {CLEAR_CART,REM,INC,DEC} from "./actions";



// reducer
function reducer(state,action){
  
    // switch(action.type){

    //   case REM:
    //     console.log(action.payload.id);
  
    //   case CLEAR_CART:
    //     return{
    //       ...state,cart:[]
    //     }    
      
    //   default:
    //     return state
    // }

    if(action.type===INC){
      // let tempCart=state.cart.map(item=>{
      //   if(item.id===action.payload.id){
      //     item={...item,amount:item.amount+1}
      //   }
      //   return item;
      // })
      return{
        ...state,cart:state.cart.map(item=>{
          if(item.id===action.payload.id){
            return {...item,amount:item.amount+1}
          }
          return item
        })
      }
    }

    if(action.type===DEC){
      let tempCart=[]
      
      if(action.payload.amount===1){
        tempCart=state.cart.filter(item=>item.id!==action.payload.id)
      }else{
        tempCart=state.cart.map(item=>{
          if(item.id===action.payload.id){
            return {...item,amount:item.amount-1}
          }
          return item
        })
      }
      
      return {...state,cart:tempCart}

    }

    if(action.type===CLEAR_CART){
      return{...state, cart:[]}
    }
    if(action.type===REM){
      return{
        ...state,
        cart:state.cart.filter(item=>item.id!==action.payload.id)
      }
    }
    return state;
}
  

  export default reducer;