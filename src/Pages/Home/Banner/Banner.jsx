import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';
const Banner = () => {
    return (
        <div>
             <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                <div className='relative '>
                    <img src={banner1} />
                    <div className=' flex gap-5 absolute top-112 left-23'>
                    <button className='hover:bg-primary rounded-2xl btn px-5'>Track Your Parcel</button>
                    <button className='hover:bg-primary rounded-2xl btn px-5 '>Be a Rider</button>
                    </div>
              
                </div>
              <div className='relative '>
                    <img src={banner2} />
                                    <div className=' flex gap-5 absolute top-112 left-23'>
                    <button className='hover:bg-primary rounded-2xl btn px-5'>Track Your Parcel</button>
                    <button className='hover:bg-primary rounded-2xl btn px-5 '>Be a Rider</button>
                    </div>
                
                </div>
               <div className='relative '>
                    <img src={banner3} />
                                    <div className=' flex gap-5 absolute top-112 left-23'>
                    <button className='hover:bg-primary rounded-2xl btn px-5'>Track Your Parcel</button>
                    <button className='hover:bg-primary rounded-2xl btn px-5 '>Be a Rider</button>
                    </div>
              
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;