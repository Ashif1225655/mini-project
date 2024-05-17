import React from 'react'
import Dishes from './Dishes'
import About from './About'
import Menu from './Menu'
import Review from './Review'
import Footer from './Footer'
// import { BsInstagram } from 'react-icons/bs'
// import { AiOutlineGroup } from 'react-icons/ai'

const Home = () => {
  return (
    <>
    <div className='min-h-screen flex flex-row justify-start items-start lg:px-24 px-5 bg-[url("https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=826&t=st=1705581821~exp=1705582421~hmac=02ec024d8270a69c9a507367fc9a0b71a7d8005b053034f7680d9e7ea396ebcf")] bg-cover bg-no-repeat'>
      <div className='w-full lg:w-2/3 space-y-5 mt-28'>
        <h1 className='text-amber-500 font-semibold lg:text-6xl'>Indulge Your Senses at FoodiCa: A Culinary Journey of Exquisite Flavors and Delightful Memories!</h1>
        <p className='text-white lg:text-xl pt-14'>
          FoodiCa: Where gastronomy meets elegance. Explore a world of exquisite flavors, impeccable service, and unforgettable dining experiences. Immerse yourself in our diverse menu crafted with passion, blending culinary artistry and fresh, premium ingredients. At FoodiCa, every dish tells a story, inviting you to savor the extraordinary in every bite.
        </p>
        <div className='pt-10 lg:pl-4'>
            <h1 className='text-fuchsia-600 font-semibold lg:text-6xl'>Thank You for Choosing "FoodiCa" Where Meets Your Every Craving!</h1>
        </div>
      </div>
    </div>
    <div id="dishes">
        <Dishes/>
    </div>
    <div id="about">
      <About/>
    </div>
    <div id="menu">
      <Menu/>
    </div>
    <div id="reviewsrestro">
      <Review />
    </div>
    <Footer/>
    </>
  )
}

export default Home
