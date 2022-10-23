import React, { useState } from 'react';
import '../styles/Carousel.css';
import iconMap from '../icon-map.json';
import htmlPerser from 'html-react-parser';

function Carousel(props) {

    const [imageIndex, setImageIndex] = useState(0);

    const nextImage = () => {
        if (imageIndex < props.images.length) {
            setImageIndex(imageIndex + 1);
        }
        console.log(imageIndex);
    }

    const previousImage = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        }
    }

    return (
        props.images !== undefined ?
            props.images.length > 0 ?

                <div className='carousel' >
                    <img src={'data:image/jpeg;base64,' + props.images[imageIndex].image} alt='project screenshots' />
                    <div className='controls'>
                        {imageIndex !== 0 ? <span onClick={() => previousImage()}>&lt; Previous</span> : <span></span>}
                        {imageIndex !== props.images.length - 1 ? <span onClick={() => nextImage()}>Next &gt;</span> : <span></span>}
                    </div>
                </div > :

                <div className='carousel' >
                    <div className='empty-image-div'>
                        {htmlPerser(iconMap['SubContent-Projects'])}
                    </div>
                </div >

            : <></>
    )
}

export default Carousel