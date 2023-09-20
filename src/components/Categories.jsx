import mealsButton from "../data/meals";
import Button from './Button';
import { ArrowRight} from 'react-flaticons';
import MealsItems from './MealsItems';
import { v4 as uuidv4 } from 'uuid';
import RegularList from "./RegularList";
const Categories = () => {
  return (
    <>
      {/* CATEGORIES BUTTON */}
      <div className='overflow-x-scroll w-full flex border-b-2 no-scrollbar relative px-[54px] py-[25px] pr-4'>
        {mealsButton.map((btn) => (
          <Button key={uuidv4()} className="border rounded-[24px] text-primary px-[22px] py-[16px] m-3 hover:bg-primary hover:text-white transition duration-700 break-keep whitespace-nowrap">{btn.title}</Button>
        ))}
        <button className='absolute border rounded-full p-[16px] bg-white shadow-md right-0 -translate-y-1/2 top-1/2'><ArrowRight color='#410DEB' /></button>
      </div>

      {/* CATEGORIES ITEMS */}
      <div className="px-[54px] space-y-4">
        <div className="h-[calc(100vh-120px)] overflow-scroll no-scrollbar">
        {<RegularList items={mealsButton} resourceName="meals" itemComponent={MealsItems} />}
        </div>
      </div>
    </>
  )
}

export default Categories