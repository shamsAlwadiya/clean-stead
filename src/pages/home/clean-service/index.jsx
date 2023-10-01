import React from 'react'
import logoLeft from '../../../assests/svgs/groupLeft.svg'
import logoRight from '../../../assests/svgs/groupRight.svg'
import homeCleaning from '../../../assests/images/homeCleaning.png'
import constructionCleaning from '../../../assests/images/constructionCleaning.png';
import commercialCleaning from '../../../assests/images/commercialCleaning .png'
import carpetCleaning from '../../../assests/images/carpetCleaning.png'
import carCleaning from '../../../assests/images/carCleaning.png'
import windowCleaning from '../../../assests/images/windowCleaning.png'
import line from '../../../assests/images/line.png'
import arrow from '../../../assests/images/arrow.png'
import './style.css';
const CleanService = () => {
    return (
        <div className="container">
            <div className="title">
                <img src={logoLeft} alt="" />
                <h3 style={{
                    fontFamily: 'Avenir Arabic',
                    fontSize: 40,
                    fontWeight: 500,
                    textAlign: 'center'
                }}>الخدمات التي نقدمها </h3>
                <img src={logoRight} alt="" />

            </div>
            <div className="cols-service-type">
                <div className="col1-service-type">
                    <div className="service-type">
                        <div className="image-service-type">
                            <img src={homeCleaning} alt="" />
                        </div>
                        <h5>تنظيف المنازل</h5>
                        <div className="service-type-description">

                            <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج</p>
                            <img src={line} alt="" />

                        </div>

                        <h6> <span>
                            <img src={arrow} alt="" />
                        </span>رؤية المزيد

                        </h6>
                    </div>
                    <div className="service-type">
                        <div className="image-service-type">
                            <img src={commercialCleaning} alt="" />
                        </div>
                        <h5>التنظيف التجاري</h5>
                        <div className="service-type-description">

                            <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج</p>
                            <img src={line} alt="" />
                        </div>
                        <h6> <span>
                            <img src={arrow} alt="" />
                        </span>رؤية المزيد

                        </h6>

                    </div>
                    <div className="service-type">
                        <div className="image-service-type">
                            <img src={carpetCleaning} alt="" />
                        </div>
                        <h5>تنظيف السجاد</h5>
                        <div className="service-type-description">

                            <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج</p>
                            <img src={line} alt="" />
                        </div>

                        <h6> <span>
                            <img src={arrow} alt="" />
                        </span>رؤية المزيد

                        </h6>
                    </div>

                </div>
                <div className="col1-service-type">
                    <div className="service-type">
                        <div className="image-service-type">
                            <img src={windowCleaning} alt="" />
                        </div>
                        <h5>تنظيف النوافذ</h5>
                        <div className="service-type-description">

                            <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..</p>
                            <img src={line} alt="" />
                        </div>
                        <h6> <span>
                            <img src={arrow} alt="" />
                        </span>رؤية المزيد

                        </h6>

                    </div>
                    <div className="service-type">
                        <div className="image-service-type">
                            <img src={carCleaning} alt="" />
                        </div>
                        <h5>تنظيف السيارات</h5>
                        <div className="service-type-description">

                            <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج</p>
                            <img src={line} alt="" />
                        </div>

                        <h6> <span>
                            <img src={arrow} alt="" />
                        </span>رؤية المزيد

                        </h6>
                    </div>
                    <div className="service-type">
                        <div className="image-service-type">
                            <img src={constructionCleaning} alt="" />
                        </div>
                        <h5>تنظيف بعد البناء</h5>
                        <div className="service-type-description">

                            <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج</p>
                            <img src={line} alt="" />
                        </div>

                        <h6> <span>
                            <img src={arrow} alt="" />
                        </span>رؤية المزيد

                        </h6>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CleanService