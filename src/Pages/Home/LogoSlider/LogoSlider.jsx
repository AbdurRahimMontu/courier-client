import React from 'react';
import Marquee from "react-fast-marquee";
import slide1 from '../../../assets/brands/amazon.png';
import slide2 from '../../../assets/brands/casio.png';
import slide3 from '../../../assets/brands/start.png';
import slide4 from '../../../assets/brands/moonstar.png';
import slide5 from '../../../assets/brands/amazon_vector.png';
import slide6 from '../../../assets/brands/randstad.png';
import slide7 from '../../../assets/brands/start-people 1.png';

const brands = [slide1, slide2, slide3, slide4, slide5, slide6, slide7]
const LogoSlider = () => {
    return (
        <div className='mt-15 pt-10 bg-green-100 text-center'>
    <h3 className='text-3xl text-secondary font-semibold'>We have helped thousands of sales teams</h3>
 <Marquee pauseOnHover={true} className='pb-5'>
 <div className='flex  p-5 gap-20 '>

{
    brands.map((brand,index)=>(
        <img key={index} src={brand} alt="" />
    ))
}

</div>


  </Marquee>
        </div>
    );
};

export default LogoSlider;