import React from 'react';
//import images
import NewBg from '../img/hero.jpg';
// import WomanImg from '../img/woman_hero.png';
//import link 
import {Link} from 'react-router-dom';


const Hero = () => {
  return(
  <section className=' h-[800px]  bg-no-repeat bg-cover bg-center py-24' style={{backgroundImage:`url(${NewBg})`}}>
    <div className='container mx-ato justify-around h-full'>
      <div className='flex'>
      </div>
    </div>
    </section>
  );
};

export default Hero;
