import React from 'react'
import group from '../../assests/images/group.png'
import mask from '../../assests/images/mask.png';
import './style.css';
// import Header from '../../common/siteLayout/Header';
// import Footer from '../../common/siteLayout/Footer'

const content = () => {
  return (
  
  <>

    <div className="section">
      <div className="image">
        <img className='img1' src={mask} alt="" />
      </div>
      <div className="content">
        <div className='headline'>

          <img className='img2' src={group} alt='' />
          <h5>تواصل معنا</h5>
        </div>
        
        <div className="service">
        <label htmlFor="">الخدمة</label>
          <select name="" id="" placeholder='اسم الخدمة'></select>
          
        </div>
        <div className="nameandphone">
         
          <div className="phone">
          <label htmlFor="">رقم الجوال</label>
          <input type="text" className='inputs' placeholder='رقم الجوال' />
           
            
          </div>
          <div className="name">
          <label htmlFor="">الاسم</label>
          <input type="text" className='inputs' placeholder='الاسم' />
           
           
          </div>
        </div>
        <div className="message">
        <label htmlFor="">الرسالة</label>
        <input className='text' placeholder='..اكتب رسالتك هنا'  />
          
         
        </div>

        <button className='btn2' >أرسل</button>

      </div>

    </div>
  
    </>
  )
}
export default content;
