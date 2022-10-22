import React from 'react';
import '../styles/Progressbar.css';

function Progressbar(props) {

    return (
        <>
            {!isNaN(parseFloat(props.rating)) ?
                <div className='progress-bar'>
                    <div className='filled' style={{ 'width': (parseFloat(props.rating) * 10) + '%' }}></div>
                </div> : props.rating
            }
        </>
    )
}

export default Progressbar