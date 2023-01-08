import CheckboxItem from "../../Common/CheckBoxItem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react";

const FilterPanel = ({ filterItems, changeChecked, topLabel }: any) => {
  const [dropdown, setDropdown] = useState(true);
  return (
    <div style={{borderBottom: '1px solid gainsboro', paddingBottom:'5px'}}>
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold uppercase mb-2 mt-3 ml-3" style={{color:'grey'}}>
          {topLabel}
        </h1>
        {dropdown ? (
          <ChevronDownIcon
            onClick={() => setDropdown(!dropdown)}
            className="w-5 h-4 cursor-pointer"
          />
        ) : (
          <ChevronUpIcon
            onClick={() => setDropdown(!dropdown)}
            className="w-5 h-5 cursor-pointer"
          />
        )}
      </div>
      {dropdown &&
        filterItems.map((item: any) => (
          <div key={item.id}>
            <CheckboxItem
              key={item.id}
              items={item}
              changeChecked={changeChecked}
            />
          </div>
        ))}
    </div>
  );
};

export default FilterPanel;
