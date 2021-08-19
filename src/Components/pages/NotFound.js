import React, { Fragment } from 'react'

const NotFound = () => {
    return (
        <Fragment>
            <p style={{padding: '10px', fontWeight:'bold',fontSize:'30px'}}>Page Not Found :(</p>
            <p style={{color: 'gray'}}>Click <i>Home</i> or <i>About</i></p>
        </Fragment>
    )
}

export default NotFound;