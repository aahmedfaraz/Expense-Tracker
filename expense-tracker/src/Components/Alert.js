import React from 'react'

const Alert = (msg) => {
    return (
        <div className="alert">
            <p>You need to remove this before removing that and this</p>
            <button><i className="fas fa-times"></i></button>
        </div>
    )
}

export default Alert;