import React from 'react'
import mask from '../../../assests/svgs/mask.svg'
import './style.css'
// import font from '../../../assests/fonts'
import slider from '../../../assests/images/slider.png'

export const Slider = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="content-home" style={{ left:-50, top:70}}>
                    <h4 style={{ fontSize: 50 }}>
                       اختار يلي<span> بخلصك </span>من مره وحده
                    </h4>
                    <p>ما تشيل هم كلمنا بنساعدك
                        احجز خدمة مضمونة بكبسة زر</p>
                    <button className='contactUs'>تواصل معنا</button>
                </div>

            </div>

        </div>
     
    )
}
export default Slider;