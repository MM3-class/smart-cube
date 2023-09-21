import mealsButton from "../data/meals";
import Button from './Button';
import { ArrowRight} from 'react-flaticons';
import MealsItems from './MealsItems';
import { v4 as uuidv4 } from 'uuid';
import RegularList from "./RegularList";

const Categories = () => {
  return (
    <div>
      {/* CATEGORIES BUTTON's */}
      <div className='w-full flex border-b-[36px] lg:border-b-2 overflow-x-scroll scroll-smooth no-scrollbar scroll relative lg:px-[54px] lg:py-[25px] pr-4'>
        {mealsButton.map((btn) => (
          <Button key={uuidv4()} className="lg:border lg:rounded-[24px] border-primary  lg:text-primary font-semibold lg:font-normal px-[22px] py-[16px] lg:m-3 mt-3 lg:hover:bg-primary lg:hover:text-white transition duration-500 break-keep whitespace-nowrap focus:outline-none outline-none focus:border-b-red-500 focus:rounded-none focus:border-b-4 border-b-0 active:text-sub-title lg:focus:bg-primary lg:focus:text-white lg:focus:rounded-[24px] lg:focus:border-b-0">{btn.title}</Button>
        ))}
        <button className='absolute hidden lg:block 2xl:hidden border rounded-full p-[16px] bg-white shadow-md right-0 -translate-y-1/2 top-1/2'><ArrowRight color='#410DEB' /></button>
      </div>

      {/* CATEGORIES ITEMS */}
      <div className="lg:px-[54px] px-[16px] space-y-4">
        <div className="lg:h-[70vh] overflow-scroll no-scrollbar">
        {<RegularList items={mealsButton} resourceName="meals" itemComponent={MealsItems} />}
        </div>
      </div>
    </div>
  )
}

export default Categories