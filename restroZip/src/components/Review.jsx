import React from 'react'
import ReviewCard from '../layouts/ReviewCard'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center lg:pt-2 pb-10'>Customer's Review</h1>
      <div className='flex flex-col md:flex-row gap-5 mt-5'>
        <ReviewCard img={"https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg"} name="Afzal Reyaz"/>
        <ReviewCard img={"https://www.shutterstock.com/shutterstock/photos/2142121675/display_1500/stock-photo-happy-senior-s-online-course-student-woman-watching-learning-webinar-attending-virtual-lesson-2142121675.jpg"} name="Luriya Lemon"/>
        <ReviewCard img={"https://www.shutterstock.com/shutterstock/photos/1231591531/display_1500/stock-photo-smiling-middle-aged-mature-grey-haired-woman-looking-at-camera-happy-old-lady-in-glasses-posing-at-1231591531.jpg"} name="Komiya kun"/>
      </div>
    </div>
  )
}

export default Review
