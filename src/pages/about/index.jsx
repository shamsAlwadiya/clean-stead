import React from 'react'
import group from '../../images/group.png'
import mask from '../../images/mask.png';
import './style.css';

const content = () => {
  return (

    <div className="section">
      <div className="image">
        <img className='img1' src={mask} alt="" />
      </div>
      <div className="content">
        <div className='headline'>

          <img className='img2' src={group} alt='' />
          <h4>من نحن</h4>
        </div>
        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق <br />

إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية</p>
        <button className='btn2' >تواصل معنا</button>
       
      </div>

    </div>
  )
}
export default content;
