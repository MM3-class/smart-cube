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
            <div className='border-b mb-2 py-2 pt-0 flex items-center w-full cursor-pointer'>
                <div className='w-[172px] h-[72px]'>
                    <img className='w-full h-full object-cover' src={image} alt={title} />
                </div>
                <div className='truncate overflow-hidden ml-2 cursor-pointer space-y-2'>
                    <p className='text-primary'>{title}</p>
                    <label className='flex space-x-6 items-center relative'>
                        <p className='text-[14px]'>AED {price}</p>
                        <p className='text-secondary flex gap-2 items-center'>{rate} <span><Star /></span></p>
                        <p className='truncate text-[14px] text-sub-title'>{subTitle}</p>
                        <p className='text-sub-title cursor-pointer'><Eye /></p>
                        <input className='cursor-pointer' type="checkbox" />
                    </label>
                </div>
            </div>
        )
    }
}

export default MealsItems