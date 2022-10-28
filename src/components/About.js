import React, { useState, useEffect } from 'react';
import * as service from '../services';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

function About(props) {

    const [about, setAbout] = useState();
    const [email, setEmail] = useState();
    const [navData, setNavData] = useState();
    const navigator = useNavigate();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        setEmail(email);

        service.getAboutCandidate(email)
            .then(response => {
                setAbout(response);
            })

        setNavData(props.nav('About'));

    }, [about, props])

    return (
        <div>
            <h1>About</h1>
            <div className='sub-content-section'>
                <div className='sub-content-section-main'>
                    {about !== undefined ?
                        <div className='item sub-content-item-card'>
                            <div className='icon'>
                                {/* {htmlPerser(iconMap['SubContent-About'])} */}
                            </div>
                            <div className='info'>
                                <span className='text-area'>{about.about}</span>
                            </div>
                        </div>
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
        </div >
    )
}

export default About