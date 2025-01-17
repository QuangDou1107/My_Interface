import React from 'react';
import bannerImage from '../../assets/banner.png';
function Banner(){
    return(
        <img src={bannerImage} alt="Banner" className='w-[100%]' />
    )
}
export default Banner;