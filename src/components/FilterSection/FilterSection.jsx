import Underline from "../ui/Underline";
import SearchByDate from "./FilterSectionComponents/SearchByDate";
import SearchByJobId from "./FilterSectionComponents/SearchByJobId";
import TuitionType from "./FilterSectionComponents/TuitionType";

const FilterSection = () => {
  return (
   
      <div className="flex flex-col">
        <div className="mt-5">
          <h1 className="text-2xl font-semibold text-black">Advance Filter</h1>
        </div>
        <Underline className="h-[1px] bg-[#b4c0e0] mb-6 mt-3"></Underline>
        <div className="mb-5">
            <SearchByJobId/>
        </div>
        <div className="mb-5">
            <SearchByDate/>
        </div>
        <div className="mb-5">
            <TuitionType/>
        </div>
      </div>
    
  );
};

export default FilterSection;
