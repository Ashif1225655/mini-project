import React from 'react';
import DishesCard from '../layouts/DishesCard';
import dish1 from '../assets/dish1.jpg';
import paneer from '../assets/kadhaiPaneer.jpg';
import chicken from '../assets/chickenLoliPop.jpg';
import veg from '../assets/KoviCorn.jpg';
import drink from '../assets/redBull.jpg';
import shalad from '../assets/shalad.jpg';
import { Link } from 'react-router-dom';

const Dishes = () => {
  return (
    <div className="min-h-screen bg-white lg:px-32 px-5 ">
      <h1 className="text-4xl font-semibold text-center  mt-10">Our Dishes</h1>
      <div className="flex flex-wrap gap-8 justify-around pr-10  lg:flex min-w-96" >
        <Link to="/filteredpage/fastfood" className='lg:w-1/5 m-5'>
          <DishesCard btnname="Click Here" img={dish1} title="Fast Food" price="₹ 99" />
        </Link>
        <Link to="/filteredpage/paneer"   className='lg:w-1/4 m-5'>
          <DishesCard btnname="Click Here" img={paneer} title="Paneer" price="₹ 199" />
        </Link>
        <Link to="/filteredpage/chicken"  className='lg:w-1/4 m-5'>
          <DishesCard btnname="Click Here" img={chicken} title="Chicken" price="₹ 359" />
        </Link>
        <Link to="/filteredpage/vegitables" className='lg:w-1/4 m-5'>
          <DishesCard btnname="Click Here" img={veg} title="Vegetables" price="₹ 49" />
        </Link>
        <Link to="/filteredpage/drink"  className='lg:w-1/4 m-5'>
          <DishesCard btnname="Click Here" img={drink} title="Drink" price="₹ 120" />
        </Link>
        <Link to="/filteredpage/shalad" className='lg:w-1/4 m-5'>
          <DishesCard btnname="Click Here" img={shalad} title="Shalad" price="₹ 40" />
        </Link>
      </div>
    </div>
  );
};

export default Dishes;

