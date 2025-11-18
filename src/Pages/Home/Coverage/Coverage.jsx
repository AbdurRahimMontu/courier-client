import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
const Coverage = () => {
    const serviceCenters = useLoaderData()
    console.log(serviceCenters);
    const position = [23.8103, 90.4125]
   const mapRef=useRef(null)

const handleSearch=(e)=>{
    e.preventDefault();

    const location = e.target.location.value;
    const district = serviceCenters.find(c=> c.district.toLowerCase().includes(location.toLowerCase()));
    if(district){
        const coord = [district.latitude, district.longitude]
        console.log(district, coord);
        mapRef.current.flyTo(coord, 14)

    }

    console.log(location);
}

    return (
        <div>
<h2 className='text-3xl'>We are Average in 64 Districts</h2>
<form onSubmit={handleSearch } className="join">
  <div>
    <div>
      <input className="input   join-item" placeholder="Search" name='location' />
    </div>
         <button className="btn join-item">Search</button>
  </div>
 

</form>

<div>

</div>
{/*  */}
<div className='border h-[800px]'>

 <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]' ref={mapRef}> 
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    {
        serviceCenters.map((center,index)=>(
            <Marker key={index} position={[center.latitude, center.longitude]}>
      <Popup>
       <strong> {center.district} </strong><br /> Service Area : {center.covered_area.join(", ")}
      </Popup>
    </Marker>
        ))
    }
  </MapContainer>
      </div>
</div>
    );
};

export default Coverage;