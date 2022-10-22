import React, { useState, useEffect } from 'react'
import Stepper from './Stepper'
import * as service from '../services'

function WorkingExp() {

    const [source, setSource] = useState();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

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
    }, [])

    return (
        <div>
            <h1>Working Experiences</h1>
            <div className='sub-content-section'>
                < Stepper source={source} />
            </div>
        </div>
    )
}

export default WorkingExp