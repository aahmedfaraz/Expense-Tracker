import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <h1 style={{padding:"0 20px"}}>About the Expense Tracker App</h1>
            <p className="about">Developed by<br/><span>Ahmed Faraz</span></p>
            <p className="about">This is a react application<br/><span>Expense Tracker</span><br/>which allows<br/>easy management of your expenses.</p>
        </Fragment>
    )
}

export default About;