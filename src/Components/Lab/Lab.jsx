import React from 'react'
import icon1 from './lab/insta.svg'
import icon2 from './lab/ball.svg'
import icon3 from './lab/gmail.svg'

const Lab = () => {
  return (
    <div>
       <footer  className="md:px-52 px-8 md:pt-32 pb-6 pt-12  bg-black  text-white " id='lab' >
        <h1 className='font-bold text-2xl'>Contact Me</h1>
        <h1 className='text-[#7127BA] font-semibold'>Maskedwolf211@gmailcom</h1>
        <div className='flex gap-4'>
          <img src={icon1} alt="#" />
          <img src={icon2} alt="#" />
          <img src={icon3} alt="#" />
        </div>
       </footer>
    </div>
  )
}

export default Lab
