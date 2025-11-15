import React from 'react';
import bookingIcon from '../../../assets/image/bookingIcon.png';

const Works = () => {
    const works = ['Booking Pick & Drop', 'Cash On Delivery', 'Delivery Hub', 'Booking SME & Corporate']
    return (
   <div className='px-20'>
    <h2 className='text-3xl font-bold text-center pt-10'>How it Works</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-6'>
            {
                works.map((work,index)=>(
                    <div key={index} className="card bg-base-100 shadow-sm">
  <figure className=' pt-5 flex justify-start pl-5'>
    <img
      src={bookingIcon}
      alt="Shoes"  />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-secondary">
     {work}
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
</div>

))}
        </div>
   </div>
    );
};

export default Works;