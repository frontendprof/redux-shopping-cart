import {CLEAR_CART,REM,INC,DEC,GET_TOTALS} from "./actions";

// items
import cartItems from "./cart-items";


// Initial store
const initialStore={
  cart:cartItems,
  total:0,
  amount:0
}






// reducer
function reducer(state=initialStore,action){
  

    if(action.type===INC){

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
      let tempCart=state.cart.map(item=>{
          if(item.id===action.payload.id){
            return {...item,amount:item.amount-1}
          }
          return item
        })
      
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

    if(action.type===GET_TOTALS){
      let {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{

        const{amount,price}=cartItem;
        const itemTotal=price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },{
        total:0,
        amount:0
      })
      total=parseFloat(total.toFixed(2));
      return{...state,total,amount}
    }


    return state;
}
  

  export default reducer;