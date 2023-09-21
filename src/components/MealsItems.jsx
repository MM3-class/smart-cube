import RegularList from './RegularList';
import { Eye, Star } from 'react-flaticons';

const MealsItems = ({ meals }) => {
    const { title, price, subTitle, rate, image, children } = meals || {}

    if (meals.children) {
        return (
            <div className='my-[60px]'>
                <h1 className='text-head-line font-bold text-[20px]'>{title}</h1>
                <div className='mt-4 mb-16'>
                    {<RegularList items={children} resourceName="meals" itemComponent={MealsItems} />}
                </div>
            </div>
        )
    } else {
        return (
            <div className='border-b lg:mb-2 lg:py-2 py-12 my-4 pt-0 flex flex-row-reverse lg:flex-row sm:justify-evenly justify-between items-center w-full cursor-pointer'>
                <div className='lg:w-[172px] lg:h-[72px] w-[150px] h-[105px] relative'>
                    <img className='w-full h-full lg:object-contain object-fill' src={image} alt={title} />
                    <button className='lg:hidden absolute -bottom-4 w-[80%] right-1/2 translate-x-1/2 bg-white text-red-500 border-[1px] border-red-500 p-2'>Add</button>
                </div>
                <div className='truncate overflow-hidden ml-2 cursor-pointer space-y-2'>
                    <p className='lg:text-primary text-black'>{title}</p>
                    <label className='flex space-x-6 items-center relative px-2'>
                        <p className='text-[14px] font-bold lg:font-normal'>AED {price}</p>
                        <p className='text-secondary gap-2 items-center hidden lg:flex'>{rate} <span><Star /></span></p>
                        <p className='truncate text-[14px] text-sub-title hidden lg:block'>{subTitle}</p>
                        <p className='text-sub-title cursor-pointer hidden lg:block'><Eye /></p>
                        <input className='cursor-pointer hidden lg:block' type="checkbox" />
                    </label>
                </div>
            </div>
        )
    }
}

export default MealsItems