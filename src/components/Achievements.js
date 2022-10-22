import React, { useState, useEffect } from 'react';
import iconMap from '../icon-map.json';
import htmlPerser from 'html-react-parser';
import * as service from '../services';
import '../styles/Achievements.css';

import { useNavigate } from 'react-router-dom';

function Achievements(props) {

    const [achievements, setAchievements] = useState();
    const [email, setEmail] = useState();
    const [navData, setNavData] = useState();
    const navigator = useNavigate();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        setEmail(email);

        service.getAchievements(email)
            .then(response => {
                setAchievements(response);
            })

        setNavData(props.nav('Achievements'));

    }, [achievements, props])


    return (
        <div>
            <h1>Achievements</h1>
            <div className='sub-content-section'>
                <div className='sub-content-section-main'>
                    {achievements !== undefined ?
                        achievements.map((achievement, index) => {
                            return (
                                <div className='item sub-content-item-card' key={index} >
                                    <div className='icon'>
                                        {htmlPerser(iconMap['SubContent-Achievements'])}
                                    </div>
                                    <div className='info'>
                                        <strong>{achievement.achievement}</strong>
                                        <span>{achievement.source}</span>
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

export default Achievements