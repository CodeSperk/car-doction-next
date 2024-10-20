import React from 'react';
import Banner from './banner/Banner';
import Services from './services/Services';

const HomePage = () => {
  return (
    <main>
      <Banner/>
      <div className='section-margin-t'>
    <Services/>
    </div>
  </main>
  );
};

export default HomePage;
