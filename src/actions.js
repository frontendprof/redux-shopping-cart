

export const DEC="DECREMENT"
export const INC="INCREMENT"
export const REM="REMOVE"
export const CLEAR_CART="CLEAR_CART"
export const GET_TOTALS="GET_TOTALS"


export const removeItem=(id)=>{
    return {type:REM,payload:{id}}
}