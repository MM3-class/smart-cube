import React from 'react'
import Button from './Button'
import { ArrowRight } from 'react-flaticons'

const Payment = () => {
  return (
    <Button className="bg-primary w-full p-[19px] rounded-3xl whitespace-nowrap flex justify-center items-center gap-4 text-white text-[18px]">Payment <span><ArrowRight size="18px" /></span></Button>
  )
}

export default Payment