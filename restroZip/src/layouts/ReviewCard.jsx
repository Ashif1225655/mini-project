import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='w-full md:w-1/3 bg-white border-2 border-lightText md:border-npne p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px]'>
      <div>
        <p className='text-lightText'>I recently explored this fantastic restaurant website, and I must say it left a lasting impression! The user-friendly interface made navigation a breeze. The vivid images of mouth-watering dishes instantly captured my attention, making me eager to visit the restaurant. It's a delightful online experience that perfectly reflects the charm of the actual dining experience
        </p>
      </div>
      <div className='flex flex-row justify-center items-center mt-4 gap-4'>
        <img className='rounded-full w-1/4' src={props.img} alt='img'/>
        <h3 className='font-semibold'>{props.name}</h3>
      </div>
    </div>
  )
}

export default ReviewCard
