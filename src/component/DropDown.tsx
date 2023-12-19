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
    const selectedValue : T = event.target.value as unknown as T;
    if (onChange) {
      onChange(selectedValue);
    }
  };
  
  return (
    <div>
      {/* Render child components or elements */}
      {children}
      <select onChange={handleSelectChange}>
        {dataItem.map((item, index) => (
          <option key={index} >
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;