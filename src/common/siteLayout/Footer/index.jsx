import React from 'react'
import './style.css'
import image1 from '../../../assests/images/image 1.png'
import facebook from '../../../assests/images/facebook.png';
import twitter from '../../../assests/images/twitter.png'
import youtube from '../../../assests/images/youtube.png'
import whatsapp from '../../../assests/images/whatsapp.png'
import instagram from '../../../assests/images/instagram.png'
import gmail from '../../../assests/images/gmail.png'
import phone from '../../../assests/images/Phone_duotone.png'
import email from '../../../assests/images/Message_duotone.png'
import map from '../../../assests/images/map.png'
import location from '../../../assests/images/location.png'

export const footer = () => {
  return (

    <div className="footer" >
      <div className="footer-columns">
        <div className="column" >
          <h4>تابعنا على </h4>
          <a href="/social">
            <div className="socialMedia">


              <img src={gmail} alt="" />

              <img src={instagram} alt="" />
              <img src={whatsapp} alt="" />
              <img src={youtube} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
            </div>
          </a>
          <div className="location-map">
            <a href="/map" className='map'>
              <img src={map} alt="" />
            </a>
            <a href="/location" className='location'>
              <img src={location} alt="" />
            </a>
          </div>
        </div>
        <div className="column">
          <h4> تواصل معنا</h4>
          <div className="contact-us-details">
            <a href="/resourses">
              <p>0592700722
                <span><img src={phone} alt="" /></span>
              </p>
            </a>
            <a href="/resourses">
              <p>eng.mohammadalhabil@gmail.com
                <span><img src={email} alt="" /></span>
              </p>
            </a>
          </div>


        </div>
        <div className="column">
          <h4> خدماتنا</h4>

          <a href="/employer">
            <p>تنظيف المنازل</p>
          </a>
          <a href="/employer">
            <p>التنظيف التجاري</p>
          </a>
          <a href="/employer">
            <p>تنظيف السجاد</p>
          </a>
          <a href="/employer">
            <p>تنظيف النوافذ</p>
          </a>
          <a href="/employer">
            <p>تنظيف السيارات</p>
          </a>
          <a href="/employer">
            <p>تنظيف بعد البناء</p>
          </a>
        </div>
        <div className="column">
          <h5> <img src={image1} alt="" />كلين
            <span > ستيد

            </span>
          </h5>
          <div className="cleanstead">
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.</p>
          </div>
        </div>

      </div>
      <hr></hr>
      <div className="footer-below">
        <div className="footer-copyright">
          <p>جميع الحقوق محفوظة © 2022</p>
        </div>

      </div>
    </div>

  )
}
export default footer;