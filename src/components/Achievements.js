import React, { useState, useEffect } from 'react';
import iconMap from '../icon-map.json';
import htmlPerser from 'html-react-parser';
import * as service from '../services';
import '../styles/Achievements.css';

function Achievements() {

    const [achievements, setAchievements] = useState();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        service.getAchievements(email)
            .then(response => {
                setAchievements(response);
            })
    }, [achievements])


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
                </div>
            </div>
        </div>
    )
}

export default Achievements