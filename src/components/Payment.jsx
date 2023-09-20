import React from 'react'
import restaurant from "../assets/rest.jpg"
import { MapMarkerHome, Star } from 'react-flaticons'
const Payment = () => {
  return (
    <div className=''>
      <div className='h-[179px] w-full'>
        <img src={restaurant} alt="rest" className='h-full w-full' />
      </div>
      <div className='text-center'>
        <h1 className='flex gap-4 justify-center text-[18px] font-bold flex-nowrap px-6 whitespace-nowrap my-[18px]'>Jawharat Esham Restaurent
          <span className='flex gap-1 items-center text-secondary text-[11px]'><Star size="11px" /> 4.7</span></h1>
        <div className='flex justify-center whitespace-nowrap px-4 items-center gap-2 text-[11px]'>
          <p>Wafi Mall, First Floor, Horus, Phase 5, Dubai</p>
          <span className='bg-black text-white p-1 rounded-md'><MapMarkerHome size="11px" /></span>
        </div>
        <button className='my-[22px] py-[10px] px-[22px] rounded-md bg-black text-white text-center'>Arabic Restaurant</button>
      </div>
      
    </div>
  )
}

export default Payment