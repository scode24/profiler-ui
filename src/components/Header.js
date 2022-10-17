import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import * as service from '../services';

function Header(props) {

    const [titleCardName, setTitleCardName] = useState();

    useEffect(() => {
        let url = window.location.href;
        url = url.replace('http://', '');
        url = url.replace('https://', '');
        const email = url.split('/')[1];

        service.getTitleCardName(email)
            .then(response => {
                setTitleCardName(response);
            })
    }, []);

    return (
        <div className='header'>
            <div className='title-space'>
                <div className='menu' onClick={() => props.toggleCard('menu')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <div className='title'>Profiler</div>
            </div>

            {titleCardName !== undefined ?
                <div className='header-profile-pic' onClick={() => props.toggleCard('title')}>
                    <img src={'data:image/jpeg;base64,' + titleCardName.image} alt='profile-pic'></img>
                </div>
                : <></>
            }
        </div>
    )
}

export default Header