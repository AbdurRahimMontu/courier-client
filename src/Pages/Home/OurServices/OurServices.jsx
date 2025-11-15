import { useEffect, useState } from "react";
import { motion } from "motion/react"


const OurServices = () => {
const [services, setServices] =useState([])

useEffect(() => {
  fetch("/ourServices.json")
    .then(res => res.json())
    .then(data => setServices(data))
    .catch(err => console.error(err));
}, []);
 
    return (
 <div className="pt-10">
           <div className='bg-secondary'>
<div className="w-11/12 mx-auto">
             <div className=" flex justify-center">
              <div className="max-w-md text-center space-y-3 py-10 text-white">
             <h2 className="text-4xl font-semibold">Our Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non fugiat facere quis provident molestiae maxime. Amet magnam consectetur provident!</p>
           </div>
         </div>
            <div className="grid grid-cols-1 gap-3 pb-10 md:grid-cols-2 lg:grid-cols-3">
           
           {
        services.map((service, index)=>(
            <div  key={index} className="card bg-base-100 hover:bg-emerald-200  transition-all duration-300 ease-in-out shadow-sm">
  <motion.figure whileHover={{ scale: 1.1, rotate: 5, color: "#10B981" }}className="px-10 pt-10">
    <img
      src={service.image}
      alt="Shoes"
      className="rounded-xl" />
  </motion.figure>
  <div className="card-body items-center text-center">

     <motion.h2
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.1, textDecoration: "underline", color: "#10B981" }}
      className="card-title"
    >
     {service.title}
    </motion.h2>
    <p className="text-justify">{service.description}</p>

  </div>
</div>
        ))
           }

     </div>
    </div>
  </div>
 </div>
    );
};

export default OurServices;