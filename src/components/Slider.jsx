import React from 'react'
import { descriptions, images } from '../data'
 
const Slider = () => {
  return (
    //container
    <div>
      {/* Slider */}
      <div>
        {/*  Image */}
        <div className='sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative'>
           {images.map((image,i) => (
            <img key={i} src={image} className='w-full h-full absolute object-cover rounded-3xl' />
           ))}
        </div>

        {/* descriptions */}
        <div>{descriptions.map((desc,i) => (
          <p key={i}>{desc}</p>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
