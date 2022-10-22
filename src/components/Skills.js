import React, { useState, useEffect } from 'react';
import Progressbar from './Progressbar';
import iconMap from '../icon-map.json';
import htmlPerser from 'html-react-parser';
import * as service from '../services';
import '../styles/Skills.css';
import { useNavigate } from 'react-router-dom';

function Skills(props) {

    const [skills, setSkills] = useState();
    const [email, setEmail] = useState();
    const [navData, setNavData] = useState();
    const navigator = useNavigate();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        setEmail(email);

        service.getSkills(email)
            .then(response => {
                setSkills(response);
            })

        setNavData(props.nav('Skills'));

    }, [skills, props])

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

                    {navData !== undefined ?
                        <div className='item sub-content-item-card nav-page-bar'>
                            {navData.previous !== null ? <span onClick={() => navigator(service.selectMenu(navData.previous, email))}>&lt; {navData.previous}</span> : <span></span>}
                            {navData.next !== null ? <span onClick={() => navigator(service.selectMenu(navData.next, email))}>{navData.next} &gt;</span> : <span></span>}
                        </div> : <></>
                    }

                </div>
            </div>
        </div>
    )
}

export default Skills