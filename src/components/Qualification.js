import React, { useState, useEffect } from 'react'
import Stepper from './Stepper'
import * as service from '../services'

import { useNavigate } from 'react-router-dom';

function Qualification(props) {

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

        service.getQualification(email)
            .then(response => {
                let arr = []
                response.forEach(element => {
                    arr.push({
                        'leftInfo': 'Year of passing : ' + element.yearOfPassing,
                        'rightPrimaryInfo': element.institute,
                        'rightSecondaryInfo': element.degree + " Percentage/CGPA/DGPA : " + element.cgpaDgpaPercentage
                    })
                });

                setSource(arr);
            })

        setNavData(props.nav('Qualifications'));

    }, [props])

    return (
        <div>
            <h1>Qualifications</h1>
            <div className='sub-content-section'>
                <Stepper source={source} />

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

export default Qualification