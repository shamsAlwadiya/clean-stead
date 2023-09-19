import React from 'react'
import './style.css'
import image1 from '../../assests/images/image 1.png'
const header = () => {
  return (
    <div className='header'>
      
      <button className='btn1'>احجز الان</button>
      <ul>
        <li><a href="#">اتصل بنا</a></li>
        <li><a href="#">من نحن</a></li>
        <li><a href="#">الخدمات</a></li>
        <li><a href="#">الرئيسية</a></li>
      </ul>

      <div className='cleanstead'>كلين
        <span > ستيد
          <img src={image1} alt="" />
        </span>
      </div>


    </div>
  )
}
export default header;