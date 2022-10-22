import React, { useState, useEffect } from 'react'
import Stepper from './Stepper'
import * as service from '../services'

import { useNavigate } from 'react-router-dom';

function WorkingExp(props) {

    const [source, setSource] = useState();
    const [email, setEmail] = useState();
    const [navData, setNavData] = useState();
    const navigator = useNavigate();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        setEmail(email);

        service.getWorkingExps(email)
            .then(response => {
                let arr = []
                response.forEach(element => {
                    arr.push({
                        'leftInfo': element.jobStartDate + " to " + element.jobEndDate,
                        'rightPrimaryInfo': element.company,
                        'rightSecondaryInfo': element.designation
                    })
                });

                setSource(arr);
            })

        setNavData(props.nav('Working Experiences'));

    }, [props])

    return (
        <div>
            <h1>Working Experiences</h1>
            <div className='sub-content-section'>
                < Stepper source={source} />

                {navData !== undefined ?
                    <div className='item sub-content-item-card nav-page-bar'>
                        {navData.previous !== null ? <span onClick={() => navigator(service.selectMenu(navData.previous, email))}>&lt; {navData.previous}</span> : <span></span>}
                        {navData.next !== null ? <span onClick={() => navigator(service.selectMenu(navData.next, email))}>{navData.next} &gt;</span> : <span></span>}
                    </div> : <></>
                }
            </div>
        </div>
    )
}

export default WorkingExp