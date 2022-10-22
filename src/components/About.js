import React, { useState, useEffect } from 'react';
import iconMap from '../icon-map.json';
import htmlPerser from 'html-react-parser';
import * as service from '../services';

function About() {

    const [about, setAbout] = useState();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        service.getAboutCandidate(email)
            .then(response => {
                setAbout(response);
            })
    }, [about])

    return (
        <div>
            <h1>About</h1>
            <div className='sub-content-section'>
                <div className='item sub-content-item-card' >
                    <div className='icon'>
                        {htmlPerser(iconMap['SubContent-Achievements'])}
                    </div>
                    <div className='info'>
                        {/* <strong>{about.achievement}</strong> */}
                        <span>{about.about}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About