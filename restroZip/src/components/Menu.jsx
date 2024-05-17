import React from 'react'
import DishesCard from '../layouts/DishesCard';

const Menu = () => {
  const menubtnHandle=()=>{
    alert("This Food is Not Available Today");
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font mb-10'>Premium Menu</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
      <div className='lg:w-1/4 mx-8'>
        <DishesCard img={"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/15/791369-family-thali-021519.jpg"} title="MahaRaza Food" price="399" btnname="buy" handleclick={menubtnHandle}/>
      </div>
      <div className='lg:w-1/4'>
        <DishesCard img={"https://as2.ftcdn.net/v2/jpg/01/85/97/17/1000_F_185971784_IemAUpluI3k9zN2CgG7BztNw3WUOhWHq.jpg"} title="Lumiya Food" price="399" btnname="buy" handleclick={menubtnHandle}/>
      </div>
      <div className='lg:w-1/4 mx-8'>
        <DishesCard img={"https://t3.ftcdn.net/jpg/00/29/48/08/240_F_29480871_dfW0zUOm7e8KT2RxylTWyUpjaIBMoZZH.jpg"} title="HaidraBadi Food" price="399" btnname="buy" handleclick={menubtnHandle}/>
      </div>
      </div>
    </div>
  )
}

export default Menu
