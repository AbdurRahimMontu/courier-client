import React, { useEffect, useState } from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
const Reviews = () => {
    const [reviews, setReviews] = useState([])



    useEffect(()=>{
        fetch('/reviews.json').then(res=>res.json()).then(data=>{
           setReviews(data);
        })
    },[])
    return (
        <div>
                  <Swiper


        
        effect={'coverflow'}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,

          slideShadows: true,  
        }}
        autoplay={{
          delay:2000,
          disableOnInteraction:false
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >

    
              {
                reviews.map((review,index)=>(
       <SwiperSlide key={index} className='bg-base-300'>
          <img src={review.user_photoURL} />
          <p>{review.userName}</p>
          <p>{review.user_email}</p>
          <p>{review.parcel_id}</p>
          <p>{review.ratings}</p>
          <p>{review.date}</p>

        </SwiperSlide>
                ))
              }  
                
                
                
      


      </Swiper>
        
        </div>
    );
};

export default Reviews;
