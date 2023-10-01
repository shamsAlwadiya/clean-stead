import React from 'react'
import logoRight from '../../../assests/svgs/groupRight.svg'
import logoLeft from '../../../assests/svgs/groupLeft.svg'
import teamCleaning from '../../../assests/images/teamCleaning.png'
import relaibility from '../../../assests/images/reliabilityy.png'
import calendar from '../../../assests/images/calendar.png'
import dicount from '../../../assests/images/discount.png'
import support from '../../../assests/images/support.jpg'
import './style.css'
const WhyChooseUs = () => {
    return (
        <div className="container">
            <div className="title">
                <img src={logoLeft} alt="" />
                <h3 style={{
                    fontFamily: 'Avenir Arabic',
                    fontSize: 40,
                    fontWeight: 500,
                    textAlign: 'center'
                }}>لماذا تختارنا</h3>
                <img src={logoRight} alt="" />

            </div>
            <div className="why-choose-us">
               
                <div className="features">
                    <div className="feat-details">
                       
                        <div className="feat-description">
                            <h6>الموثوقية</h6>
                            <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                        </div>
                        <div className="feat-image">
                            <img src={relaibility} alt="" />
                        </div>

                    </div>
                    <div className="feat-details">
                        
                        <div className="feat-description">
                            <h6>الحجز اونلاين</h6>
                            <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                        </div>
                        <div className="feat-image">
                            <img src={calendar} alt="" />
                        </div>

                    </div>
                    <div className="feat-details">
                        
                        <div className="feat-description">
                            <h6>خصومات دائمة</h6>
                            <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                        </div>
                        <div className="feat-image">
                            <img src={dicount} alt="" />
                        </div>

                    </div>
                    <div className="feat-details">
                       
                        <div className="feat-description">
                            <h6>دعم متواصل</h6>
                            <p >ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
                        </div>
                        <div className="feat-image">
                            <img src={support} alt="" />
                        </div>

                    </div>
                </div>
                <div className="teamCleaning">
                    <img src={teamCleaning} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs