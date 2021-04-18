import React, {useContext} from 'react';
import alertContext from '../../Context/Alert/alertContext';

const Alert = () => {
    const {message, clearAlert} = useContext(alertContext);
    
    return (
        <div className={`alert ${message !== '' && 'show'}`} id='alert'>
            <p>{message}</p>
            <button onClick={clearAlert}><i className="fas fa-times"></i></button>
        </div>
    )
}

export default Alert;