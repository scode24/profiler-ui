import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import Carousel from './Carousel';
import * as service from '../services';
import '../styles/Projects.css';

import { useNavigate } from 'react-router-dom';

function Projects(props) {

    const [projects, setProjects] = useState();
    const [email, setEmail] = useState();
    const [navData, setNavData] = useState();
    const navigator = useNavigate();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        setEmail(email);

        service.getProjects(email)
            .then(response => {
                setProjects(response);
            })

        setNavData(props.nav('Projects'));

    }, [projects, props])



    return (
        <div>
            <h1>Projects</h1>
            <div className='sub-content-section'>
                <div className='sub-content-project-section-main'>
                    {projects !== undefined ?
                        projects.map((item) => {
                            return (
                                <div className='project-item sub-content-item-card' key={item.projects.id}>
                                    <div className='icon'>
                                        <Carousel images={item.projectImages} />
                                    </div>
                                    <div className='info'>
                                        <table>
                                            <tbody>
                                                <tr><td><strong>Name</strong></td><td>{item.projects.name}</td></tr>
                                                <tr><td><strong>Description</strong></td><td>{item.projects.description}</td></tr>
                                                <tr><td><strong>Technology</strong></td><td>{item.projects.technology}</td></tr>
                                                <tr><td><strong>Type</strong></td><td>{item.projects.type}</td></tr>
                                                <tr><td><strong>Company</strong></td><td>{item.projects.associatedCompany}</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        }) : <></>
                    }

                    {navData !== undefined ?
                        <div className='item sub-content-item-card nav-page-bar'>
                            {navData.previous !== null ? <span onClick={() => navigator(service.selectMenu(navData.previous, email))}>&lt; {navData.previous}</span> : <span></span>}
                            {navData.next !== null ? <span onClick={() => navigator(service.selectMenu(navData.next, email))}>{navData.next} &gt;</span> : <span></span>}
                        </div> : <></>
                    }
                </div>
            </div>
        </div >
    )
}

export default Projects