import ServiceCard from '@/components/cards/ServiceCard';
import SectionTitle from '@/components/shared/Title/SectionTitle';
import React from 'react';
import {services} from "../../../lib/services"

const Services = () => {
  console.log(services);
  return (
    <div>
      <div className='text-center'>
      <SectionTitle title="Service" subtitle="Our Service Area" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>
      </div>

      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {services.map(service => <ServiceCard key="service._id" service={service}/> )}
        
      </div>


    </div>
  );
};

export default Services;