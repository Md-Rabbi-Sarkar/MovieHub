import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Slider() {
    const images = [
        "https://i.ibb.co.com/xXRgThb/mountain1.webp",
        "https://i.ibb.co.com/3dd5JFb/ocain1.jpg",
        "https://i.ibb.co.com/K7rHrJL/wild1.jpg",
    ];
  return (
    
    <div className='mx-20 mt-5'>
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    
                </div>
            </div>
        </Slide>
    </div>
   
  )
}
