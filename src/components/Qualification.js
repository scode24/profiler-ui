import React, { useState, useEffect } from 'react'
import Stepper from './Stepper'
import * as service from '../services'

function Qualification() {

    const [source, setSource] = useState();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

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
    }, [])

    return (
        <div>
            <h1>Qualifications</h1>
            <div className='sub-content-section'>
                <Stepper source={source} />
            </div>
        </div>
    )
}

export default Qualification