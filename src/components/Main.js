import React, { useEffect, useState } from 'react'
import useScreenType from 'react-screentype-hook';
import iconMap from '../icon-map.json';
import htmlPerser from 'html-react-parser';
import '../styles/Main.css'
import * as service from '../services';
import { Outlet, useParams, useNavigate } from 'react-router-dom';

function Main(props) {

    const screenType = useScreenType();
    const [menuList, setMenuList] = useState([]);
    const [titleCardContactList, setTitleCardContactList] = useState();
    const [titleCardLinkList, setTitleCardLinkList] = useState([]);
    const [titleCardName, setTitleCardName] = useState();
    const param = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        service.getMenuList(param.email)
            .then(response => {
                setMenuList(response)
            });

        service.getTitleCardLinkList(param.email)
            .then(response => {
                setTitleCardLinkList(response)
            });

        service.getTitleCardContactList(param.email)
            .then(response => {
                setTitleCardContactList(response)
            });

        service.getTitleCardName(param.email)
            .then(response => {
                setTitleCardName(response)
            });

    }, [param.email]);

    const selectMenu = (menuTitle) => {
        switch (menuTitle) {
            case 'About':
                navigate('/' + param.email + '/about')
                break;
            case 'Skills':
                navigate('/' + param.email + '/skills')
                break;
            case 'Qualifications':
                navigate('/' + param.email + '/qualification')
                break;
            case 'Working Experiences':
                navigate('/' + param.email + '/workingExp')
                break;
            case 'Achievements':
                navigate('/' + param.email + '/achievements')
                break;

            default:
                break;
        }

        if (screenType.isMobile)
            props.state.isMenuOpen = false;
    }

    return (
        <div className='main'>
            <div className='content-card'>
                {
                    (props.state.isTitleOpen && screenType.isMobile) ||
                        (props.state.isTitleOpen && screenType.isTablet) ||
                        screenType.isDesktop || screenType.isLargeDesktop ?
                        <div className='title-card card'>

                            {titleCardName !== undefined ?
                                <div className='section'>
                                    <img className='profile-pic' src={'data:image/jpeg;base64,' + titleCardName.image} alt='profile-pic'></img>
                                    <span>{titleCardName.name}</span>
                                    <span>{titleCardName.email}</span>
                                </div> : <></>
                            }
                            <ul>
                                {
                                    titleCardLinkList !== undefined ?
                                        titleCardLinkList.map((menu) => {
                                            return (
                                                <li key={0}>
                                                    <div className='list-item'>
                                                        <div className='icon'>
                                                            {htmlPerser(iconMap['Link'])}
                                                        </div>
                                                        <div className='content'>
                                                            <span><a href={menu.link}>{menu.link}</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }) : <></>
                                }

                                {
                                    titleCardContactList !== undefined ?
                                        titleCardContactList.phoneNos.map((menu, index) => {
                                            return (
                                                <li key={index} >
                                                    <div className='list-item'>
                                                        <div className='icon'>
                                                            {htmlPerser(iconMap['Phone'])}
                                                        </div>
                                                        <div className='content'>
                                                            <span>{menu.phoneNo}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }) : <></>
                                }

                                {
                                    titleCardContactList !== undefined ?
                                        titleCardContactList.addresses.map((menu, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className='list-item'>
                                                        <div className='icon'>
                                                            {htmlPerser(iconMap['Address'])}
                                                        </div>
                                                        <div className='content'>
                                                            <span>{menu.address}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }) : <></>
                                }
                            </ul>
                        </div>
                        : <></>
                }

                {
                    (props.state.isMenuOpen && screenType.isMobile) ||
                        (props.state.isMenuOpen && screenType.isTablet) ||
                        screenType.isDesktop || screenType.isLargeDesktop ?
                        <div className='sub-content-card card'>
                            <ul>
                                {menuList !== undefined ?
                                    menuList.map((menu, index) => {
                                        return (
                                            <li key={index} onClick={() => selectMenu(menu.title)}>
                                                <div className='list-item'>
                                                    <div className='icon'>
                                                        {htmlPerser(iconMap[menu.title])}
                                                    </div>
                                                    <div className='content'>
                                                        <span>{menu.title}</span>
                                                    </div>
                                                    <div className='select'>
                                                        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='icon' viewBox='0 0 16 16'>
                                                            <path fillRule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z' />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                    : <></>
                                }

                            </ul>
                        </div>
                        : <></>
                }

                {
                    (!props.state.isTitleOpen && !props.state.isMenuOpen && screenType.isMobile) ||
                        (props.state.isInfoOpen && screenType.isTablet) ||
                        screenType.isDesktop || screenType.isLargeDesktop ?
                        <div className='sub-content-info-card card'>
                            <Outlet />
                        </div>
                        : <></>
                }
            </div>

        </div>
    )
}

export default Main