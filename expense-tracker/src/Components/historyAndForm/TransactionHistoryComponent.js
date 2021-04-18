import React, { useContext } from 'react'
import ElementItem from '../layout/ElementItem';

import globalContext from './../../Context/Global/globalContext';

const TransactionHistoryComponent = () => {
    const {history} = useContext(globalContext);
    
    return (
        <div className="transaction-history-container">
            <h2>Transaction History</h2>
                {
                    history.length === 0 && <p>No transactions have taken place yet</p>
                }
            <div className="all-transactions-elements">
                { 
                    history.length > 0 && history.map((element,index) => 
                        <ElementItem key={index} element={element} index={index}/>
                    )
                }
            </div>
        </div>
    )
}

export default TransactionHistoryComponent;