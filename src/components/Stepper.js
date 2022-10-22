import React, { useState, useEffect } from 'react'
import '../styles/Stepper.css'

function Stepper(props) {

    const [modSource, setModSource] = useState();

    useEffect(() => {
        if (props.source !== undefined) {

            let arr = [];
            let index = 0;

            if (props.source.length === 1) {
                arr.push({
                    'leftInfo': props.source[0].leftInfo,
                    'rightPrimaryInfo': props.source[0].rightPrimaryInfo,
                    'rightSecondaryInfo': props.source[0].rightSecondaryInfo,
                    'nodeClass': 'node'
                })
            } else {

                props.source.forEach(element => {
                    if (index === 0) {
                        arr.push({
                            'leftInfo': element.leftInfo,
                            'rightPrimaryInfo': element.rightPrimaryInfo,
                            'rightSecondaryInfo': element.rightSecondaryInfo,
                            'nodeClass': 'start-node'
                        })
                    } else if (index === props.source.length - 1) {
                        arr.push({
                            'leftInfo': element.leftInfo,
                            'rightPrimaryInfo': element.rightPrimaryInfo,
                            'rightSecondaryInfo': element.rightSecondaryInfo,
                            'nodeClass': 'end-node'
                        })
                    } else {
                        arr.push({
                            'leftInfo': element.leftInfo,
                            'rightPrimaryInfo': element.rightPrimaryInfo,
                            'rightSecondaryInfo': element.rightSecondaryInfo,
                            'nodeClass': 'node'
                        })
                    }

                    index++;
                })
            }

            setModSource(arr);
        }
    }, [props.source])


    return (
        <div className='sub-content-item-card' style={{ 'padding': '0' }}>
            {modSource !== undefined ?
                modSource.map((info, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className={"left-info"}>{info.leftInfo}</div>
                            <div className={info.nodeClass}>
                                <div className="line"></div>
                                <div className="mark">
                                    <div className="dot"></div>
                                </div>
                            </div>
                            <div className="right-info">
                                <h3>{info.rightPrimaryInfo}</h3>
                                <span>{info.rightSecondaryInfo}</span>
                            </div>
                        </div>
                    )
                }) : <></>}

        </div>
    )
}

export default Stepper