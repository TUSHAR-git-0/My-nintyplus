import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/doubt class.jpg'
import gallery_2 from '../../assets/fb12cfbe399bc4ae4c1ede1a9c5f8055.jpg'
import gallery_3 from '../../assets/unnamed (5).jpg'
import gallery_4 from '../../assets/unnamed (4).jpg'
import white_arrow from '../../assets/white-arrow.png'


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
       
    </div>
  )
}

export default Campus