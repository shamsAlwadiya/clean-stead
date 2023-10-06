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
      <div className="footer-column">
        <div className="service-column">
          <div className="follow-us">
            <h3>تابعنا على</h3>
            <div className="social-media">
            <a href="/#"><img src={facebook} alt="" /></a>
            <a href="/#"><img src={twitter} alt="" /></a>
            <a href="/#"><img src={youtube} alt="" /></a>
            <a href="/#"><img src={whatsapp} alt="" /></a>
            <a href="/#"><img src={instagram} alt="" /></a>
              <a href="/#"><img src={gmail} alt="" /></a>
              
             
             
             
              
            </div>
          </div>
          <div className="map-location">
        <div className="location">
        <img src={location} alt="" />
        </div>
            <div className="map">
            <img className='map' src={map} alt="" />

            </div>

          </div>
        </div>
        <div className="service-column">
          <h3>تواصل معنا</h3>
          <div className="service-contactus">
            <div className="contactus-phone">
              <img src={phone} alt="" />
              <p>0592700722</p>

            </div>
            <div className="contactus-email">
              <img src={email} alt="" />
              <p>eng.mohammadalhabil@gmail.com</p>

            </div>
          </div>
        </div>
        <div className="service-column">
          <h3>خدماتنا</h3>
          <div className="services-types">
            <a href=""><p>تنظيف المنازل</p></a>
            <a href=""><p>التنظيف التجاري</p></a>
            <a href=""><p>تنظيف السجاد</p></a>
            <a href=""><p>تنظيف النوافذ</p></a>
            <a href=""><p>تنظيف السيارات</p></a>
            <a href=""><p>تنظيف بعد البناء</p></a>
          </div>
        </div>
        <div className="service-column">
          <div className="clean-stead-logo">
            <h5>

              كلين
              <span > ستيد

              </span>
              <img src={image1} alt="" />
            </h5>
          </div>
          <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.</p>

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