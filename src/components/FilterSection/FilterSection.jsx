import Underline from "../ui/Underline";
import SearchByDate from "./FilterSectionComponents/SearchByDate";
import SearchByJobId from "./FilterSectionComponents/SearchByJobId";
import SelectArea from "./FilterSectionComponents/SelectLocation/SelectArea";
import SelectDistrict from "./FilterSectionComponents/SelectLocation/SelectDistrict";
import SelectMedium from "./FilterSectionComponents/SelectStudentType/SelectMedium";
import TuitionType from "./FilterSectionComponents/TuitionType";
import TutorPreference from "./FilterSectionComponents/TutorPreference";

const FilterSection = () => {
  return (
   
      <div className="flex flex-col">
        <div className="mt-5">
          <h1 className="text-2xl font-bold text-black">Advance Filter</h1>
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
        <div className="mb-5">
            <TutorPreference/>
        </div>
        <div className="mb-5">
            <SelectDistrict/>
        </div>
        <div className="mb-5">
            <SelectArea/>
        </div>
        <div className="mb-5">
            <SelectMedium/>
        </div>
      </div>
    
  );
};

export default FilterSection;
