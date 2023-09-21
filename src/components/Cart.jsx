import restaurant from "../assets/rest.jpg"
import { MapMarkerHome, Star, Trash } from 'react-flaticons';
import meals from "../data/meals";

const Cart = () => {
  return (
    <div className="sticky top-[56px]">
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

      <div className="px-3">
        <div className='border-b mb-2 py-2 pt-0 flex items-center w-full cursor-pointer'>
          <div className='w-[72px] h-[72px]'>
            <img className='w-full h-full object-cover' src={meals[0].children[0].image} alt={meals[0].children[0].title} />
          </div>
          <div className='truncate overflow-hidden ml-2 cursor-pointer space-y-2 flex justify-between items-center w-full'>
            <div>
              <p className='text-primary font-bold'>{meals[0].children[0].title}</p>
              <p className='text-[14px] font-semibold'>AED {meals[0].children[0].price}</p>
            </div>
            <Trash />
          </div>
        </div>
        <div className='border-b  py-2 pt-0 flex items-center w-full cursor-pointer'>
          <div className='w-[72px] h-[72px]'>
            <img className='w-full h-full object-cover' src={meals[0].children[1].image} alt={meals[0].children[1].title} />
          </div>
          <div className='truncate overflow-hidden ml-2 cursor-pointer space-y-2 flex justify-between items-center w-full'>
            <div>
              <p className='text-primary font-bold'>{meals[0].children[1].title}</p>
              <p className='text-[14px] font-semibold'>AED {meals[0].children[1].price}</p>
            </div>
          <Trash />
          </div>
        </div>
        <h1 className="py-6 text-sub-title">Total Price: <span className="text-[18px] text-black font-semibold">70 AED</span></h1>
      </div>
    </div>
  )
}

export default Cart