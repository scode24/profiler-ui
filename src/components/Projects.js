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
                                        <span><strong>Name</strong></span>
                                        <span>{item.projects.name}</span>

                                        <span><strong>Description</strong></span>
                                        <span>{item.projects.description}</span>

                                        <span><strong>Technology</strong></span>
                                        <span>{item.projects.technology}</span>

                                        <span><strong>Type</strong></span>
                                        <span>{item.projects.type}</span>

                                        <span><strong>Company</strong></span>
                                        <span>{item.projects.associatedCompany}</span>
                                    </div>
                                </div>
                            )
                        }) : <></>
                    }

                    {navData !== undefined ?
                        <div className='item sub-content-item-card project-nav-page-bar'>
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