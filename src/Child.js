import React, { useContext } from 'react';
import transactionContext from './TrasContext'
function Child() {
 
    let {Transaction,addTransaction} =useContext(transactionContext);
   
    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> $100</h3>

            <div className="expense-container">
                <h3>INCOME <br /> $500</h3>
                <h3>EXPENSE <br /> $1000</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="trnsaction-list">
               {Transaction.map((ind)=>{
                   return(
                       <li key={ind}>
                        <span>{ind.desc}</span>
                        <span>{ind.amount}</span>
                       </li>
                   )
               })}
            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>
                    Enter Description <br />
                    <input type="text"  required />
                </label>

                <br />
                <label>
                    Enter Amount <br />
                    <input type="number"  required />
                </label>
                <br />
                
                <input  className="btn" type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;