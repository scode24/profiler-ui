import React, { useState, useEffect } from 'react'
import Stepper from './Stepper'
import * as service from '../services'

function WorkingExp() {

    const [workingExpSource, setWorkingExpSource] = useState();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        service.getWorkingExps(email)
            .then(response => {
                setWorkingExpSource(response);
            })

        if (workingExpSource !== undefined) {
            let source = []
            workingExpSource.forEach(obj => {
                source.push({
                    'leftInfo': obj.jobStartDate + ' - ' + obj.jobEndDate,
                    'rightPrimaryInfo': obj.company,
                    'rightSecondaryInfo': obj.designation
                })
            });

            setWorkingExpSource(source);
        }
    }, [workingExpSource])

    return (
        <div>
            <h1>Working Experiences</h1>{console.log(workingExpSource)}
            {workingExpSource !== undefined ?

                < Stepper source={workingExpSource} /> :
                <></>
            }

        </div>
    )
}

export default WorkingExp