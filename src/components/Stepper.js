import React from 'react'
import '../styles/Stepper.css'

function Stepper(props) {
    return (
        <div>
            {props.source !== undefined ?

                props.source.map((info, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="left-info">{info.leftInfo}</div>
                            <div className="node">
                                <div className="line"></div>
                                <div className="mark">
                                    <div className="dot"></div>
                                </div>
                            </div>
                            <div className="right-info">{info.rightPrimaryInfo}</div>
                        </div>
                    )
                })
                : <></>}


            {/* <div className="item">
                <div className="left-info">2021 - present</div>
                <div className="start-node">
                    <div className="line"></div>
                    <div className="mark">
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="right-info">Thomson Reuters</div>

            </div>

            <div className="item">
                <div className="left-info">2021 - present</div>
                <div className="node">
                    <div className="line"></div>
                    <div className="mark">
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="right-info">Thomson Reuters</div>
            </div>

            <div className="item">
                <div className="left-info">2021 - presentjglksdjhlgkjslkdjglksjgdasdasdasdasdasdasdasdasdasdasdasdsadasdasdsadsfaergwwg</div>
                <div className="node">
                    <div className="line"></div>
                    <div className="mark">
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="right-info">Thomson Reuters</div>
            </div>

            <div className="item">
                <div className="left-info">2021 - presentjglksdjhlgkjslkdjglksjg</div>
                <div className="end-node">
                    <div className="line"></div>
                    <div className="mark">
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="right-info">Thomson Reuters</div>
            </div> */}

        </div>
    )
}

export default Stepper