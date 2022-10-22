import React, { useState, useEffect } from 'react';
import Progressbar from './Progressbar';
import iconMap from '../icon-map.json';
import htmlPerser from 'html-react-parser';
import * as service from '../services';
import '../styles/Skills.css';

function Skills() {

    const [skills, setSkills] = useState();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        service.getSkills(email)
            .then(response => {
                setSkills(response);
            })
    }, [skills])

    return (
        <div>
            <h1>Skills</h1>
            <div className='sub-content-section'>
                <span>Progress bar shows rating percentage on particular skill</span>
                <div className='sub-content-section-main'>
                    {skills !== undefined ?
                        skills.map((topic, index) => {
                            return (
                                <div className='item sub-content-item-card' key={index}>
                                    <div className='icon'>
                                        {htmlPerser(iconMap['SubContent-Skills'])}
                                    </div>
                                    <div className='info'>
                                        <strong>{topic.skill}</strong>
                                        <Progressbar rating={topic.rating} />
                                    </div>
                                </div>
                            )
                        })
                        : <></>
                    }
                </div>

            </div>
        </div>
    )
}

export default Skills