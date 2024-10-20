import Image from 'next/image';
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({service }) => {
  const {title, img, price} = service || {}; 
  return (
<div className="card card-compact bg-base-100 w-96 shadow-xl">
<figure>
      <Image height="120" width="340" src={img} alt='title'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <div className="flex justify-between">
    <h6 className='text-primary'>Price : ${price}</h6>
    <FaLongArrowAltRight className='font-bold text-2xl text-primary'/>
    </div>
  </div>
</div>
  );
};

export default ServiceCard;