import React from 'react'
import groupLeft from '../../../assests/svgs/groupLeft.svg'
import groupRight from '../../../assests/svgs/groupRight.svg'
import './style.css'
import client1 from '../../../assests/images/client1.png'
import client2 from '../../../assests/images/client2.png'
import client3 from '../../../assests/images/client3.png'
import upicon from '../../../assests/images/upicon.png'
import downicon from '../../../assests/images/downicon.png'
export const ClientSays = () => {
    return (
        <div className="container">
            <div className="title">
                <img src={groupLeft} alt="" />
                <h3 style={{
                    fontFamily: 'Avenir Arabic',
                    fontSize: 40,
                    fontWeight: 500,
                    textAlign: 'center'
                }}>ماذا يقولون عملائنا</h3>
                <img src={groupRight} alt="" />

            </div>
            <div className="clients">

                <div className="client1">
                    <div className="down-icon">
                        <img src={downicon} alt="" />
                    </div>
                    <img src={client3} alt="" />
                    <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                    <h6>محمد أحمد</h6>
                    <div className="up-icon">
                        <img  src={upicon} alt="" />
                    </div>
                </div>

                <div className="client2">
                <div className="down-icon">
                        <img src={downicon} alt="" />
                    </div>
                    <img src={client2} alt="" />
                    <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                    <h6>محمد أحمد</h6>
                    <div className="up-icon">
                        <img  src={upicon} alt="" />
                    </div>
                </div>
                <div className="client3">
                <div className="down-icon">
                        <img src={downicon} alt="" />
                    </div>
                    <img src={client1} alt="" />
                    <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                    <h6>محمد أحمد</h6>
                    <div className="up-icon">
                        <img  src={upicon} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ClientSays;