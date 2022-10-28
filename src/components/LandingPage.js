import React from 'react'
import appProp from '../application'
import '../styles/LandingPage.css';

function LandingPage() {
    return (
        <div className='landing-page'>
            <span>Welcome User</span>
            <span className='title'>Profiler 1.0</span>
            <h3>Make your interactive profile</h3>
            <br />
            <br />
            <br />
            <span>Follow <a href={appProp.swagger_base_url}>{appProp.swagger_base_url}</a> to create your profile</span>
            <br />
            <span>Access {appProp.server + '/<email>'} to view your profile</span>
        </div>
    )
}

export default LandingPage