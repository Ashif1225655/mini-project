import React from 'react'
import aboutImage from '../assets/dish1.jpg'
const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32'>
        <img src={aboutImage} alt='img'/>
      <div className='space-y-4 lg:pt-14 ml-8'>
        <h1 className='font-semibold text-4xl text-center md:text-start pb-5'>Why Choose Us?</h1>
        <p className='text-xl'>
          At FoodiCa, we redefine the dining experience with a commitment to excellence. Our culinary artisans meticulously craft each dish, blending passion and precision to deliver an extraordinary gastronomic journey. Choose us for the finest quality ingredients, sourced locally for freshness and flavor that captivates your palate.
        </p>
        <p className='text-xl'>
          Indulge in a menu curated with diversity and innovation, ensuring a unique culinary adventure with every visit. Our commitment to impeccable service creates an ambiance of warmth and sophistication, setting the stage for unforgettable moments. At FoodiCa, we prioritize your satisfaction, offering personalized attention to your preferences and dietary needs.
        </p>
        
      </div>  
    </div>
  )
}

export default About
