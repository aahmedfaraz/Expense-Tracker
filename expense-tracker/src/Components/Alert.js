import React from 'react'

const Alert = ({alert, clearAlert}) => {
    return (
        <div className={`alert`} id='alert'>
            <p>{alert}</p>
            <button onClick={clearAlert}><i className="fas fa-times"></i></button>
        </div>
    )
}

export default Alert;