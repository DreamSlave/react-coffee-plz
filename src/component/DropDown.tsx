import React, { useState, useEffect } from 'react';


interface DropDownProps<T> {
  children? : React.ReactElement
  dataItem : Array<T>
  onChange?:(value : T) => void;
}


const DropDown = <T extends { value: string},>({
  children,
  dataItem,
  onChange
}: DropDownProps<T>) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);


  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedValue: T = dataItem[selectedIndex];
  
    if (onChange) {
      onChange(selectedValue);
    }
  };
  
  return (
    <div>
      {children}
      <select onChange={handleSelectChange}>
        {dataItem.map((item, index) => (
          <option key={index} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;