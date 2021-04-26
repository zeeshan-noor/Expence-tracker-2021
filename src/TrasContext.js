import { createContext, useReducer } from "react"
import {TransactionReducer} from './transReducer'
export const Transaction =[
    { amount: 500, desc: "Cash" },
    { amount: -50, desc: "Cold Drink" },
    { amount: 100, desc: "Deposit" },
    { amount: -200, desc: "Utility Bill" },
]


const transactionContext = createContext(Transaction);

export const TransactionProvider=({children})=>{
    let [state,dispatch] = useReducer(TransactionReducer,Transaction);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }


    return(
        <transactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </transactionContext.Provider>
    )
}


export default transactionContext;