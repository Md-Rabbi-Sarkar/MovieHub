import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Slider() {
    const images = [
        "https://i.ibb.co.com/Fz4MfKQ/movie6.jpg",
        "https://i.ibb.co.com/2PJrTFb/movie5.jpg",
        "https://i.ibb.co.com/MMC0MRG/movie4.jpg",
    ];
  return (
    
    <div className='mx-20 mt-5'>
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <p>This is really awasm movie</p>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                <p>This is really awasm movie</p>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                <p>This is really awasm movie</p>
                </div>
            </div>
        </Slide>
    </div>
   
  )
}
